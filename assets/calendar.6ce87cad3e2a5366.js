function escapeHTML(value){
 return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
export function monthCells(year, month, archive){
 const byDate=new Map(archive.map(item=>[item.date,item]));
 const count=new Date(Date.UTC(year,month+1,0)).getUTCDate();
 const offset=new Date(Date.UTC(year,month,1)).getUTCDay();
 return {offset,days:Array.from({length:count},(_,index)=>{
  const day=index+1,iso=`${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  return {day,issue:byDate.get(iso)||null};
 })};
}
export function createCalendar(archive,prefix){
 const latest=archive[0].date.split('-').map(Number);
 let year=latest[0],month=latest[1]-1;
 function render(){
  const data=monthCells(year,month,archive);
  let cells=['일','월','화','수','목','금','토'].map(day=>'<div class="h">'+day+'</div>').join('');
  cells+='<div class="c e" aria-hidden="true"></div>'.repeat(data.offset);
  for(const {day,issue} of data.days){
   if(issue){
    const number=String(issue.number).padStart(3,'0');
    const fullTitle=escapeHTML(issue.title||'이번 호');
    const accessible=escapeHTML(year+'년 '+(month+1)+'월 '+day+'일 발행, '+number+'호, '+(issue.title||'이번 호')+' 읽기');
    cells+='<a class="c today" href="'+prefix+'/editions/'+number+'/" title="'+fullTitle+'" aria-label="'+accessible+'"><span class="issue-date">'+day+'<small> No.'+number+'</small></span><span class="issue-title">'+fullTitle+'</span><span class="dots" aria-hidden="true"><i class="a"></i><i class="b"></i><i class="j"></i></span></a>';
   }else cells+='<div class="c soon"><span>'+day+'</span></div>';
  }
  return '<div class="wrap issues"><h2>Issues</h2><p>화요일과 금요일에 발행된 세 편이 월별 호로 묶입니다. 점 세 개가 있는 날이 발행일입니다.</p>'+
   '<div class="months"><button data-month="-1" aria-label="이전 달">←</button><button class="on" aria-pressed="true" aria-live="polite">'+year+'.'+String(month+1).padStart(2,'0')+'</button><button data-month="1" aria-label="다음 달">→</button></div>'+
   '<div class="cal" aria-label="'+year+'년 '+(month+1)+'월 발행 달력">'+cells+'</div>'+
   '<div class="keys"><span><span class="dots"><i class="a"></i></span>Artwork</span><span><span class="dots"><i class="b"></i></span>Album Art</span><span><span class="dots"><i class="j"></i></span>Art Journal</span></div><p class="cal-note">표시된 발행일을 선택하면 해당 호를 읽을 수 있습니다. 정식 발행 '+archive.length+'개 호.</p></div>';
 }
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-month]');if(!button)return;
  const shift=Number(button.dataset.month),date=new Date(Date.UTC(year,month+shift,1));
  year=date.getUTCFullYear();month=date.getUTCMonth();
  const root=button.closest('.issues');root.outerHTML=render();
  document.querySelector('[data-month="'+shift+'"]').focus();
 });
 return render;
}
