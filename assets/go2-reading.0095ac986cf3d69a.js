export function installGo2(content,onRoute){


if(!Array.isArray(content.excerpts)||content.excerpts.length!==3)return;
function el(tag,klass,txt){
 var n=document.createElement(tag);
 if(klass)n.className=klass;
 if(txt!=null)n.textContent=txt;
 return n;
}
function installGo2Reading(){
 var root=document.getElementById('app');
 if(!root || !root.querySelector('.detail'))return;
 var media=root.querySelector('.detail .media');
 var cover=media&&media.querySelector('.album-cover-static');
 if(!cover||cover.dataset.ivGo2Reader==='1'||!cover.querySelector('img'))return;
 cover.dataset.ivGo2Reader='1';
 cover.classList.add('iv-go2-cover');
 var control=el('button','iv-go2-trigger');
 control.type='button';
 control.setAttribute('aria-label','XTC Go 2 표지의 발췌 번역과 편집자 해설 열기');
 control.setAttribute('aria-expanded','false');
 control.setAttribute('aria-controls','iv-go2-reading-panel');
 control.appendChild(el('span','', '한국어 풀이 보기 ↗'));
 var panel=el('section','iv-go2-reading');
 panel.id='iv-go2-reading-panel';
 panel.setAttribute('role','region');
 panel.setAttribute('aria-label','Go 2 표지의 일부 문장 번역과 편집자 해설');
 panel.tabIndex=-1;
 panel.hidden=true;
 var header=el('div','iv-go2-reading-header');
 var left=el('div','');
 left.appendChild(el('span','iv-go2-reading-kicker','XTC · GO 2 · 1978'));
 left.appendChild(el('h3','iv-go2-reading-title','표지의 글, 한국어로 읽기'));
 var close=el('button','iv-go2-close','원본 보기 ×');
 close.type='button';
 close.setAttribute('aria-label','한국어 풀이 닫고 원본 Go 2 커버 보기');
 header.append(left,close);
 panel.append(header);
 panel.appendChild(el('p','iv-go2-reading-intro','원문 중 짧은 구절 세 곳만 발췌·번역했습니다. 사이의 문장은 생략했습니다.'));
 content.excerpts.forEach(function(item,i){
  if(i)panel.appendChild(el('p','iv-go2-omission','… 중간 내용 생략 …'));
  var block=el('section','iv-go2-passage');
  block.appendChild(el('span','iv-go2-excerpt-label','원문 발췌 0'+(i+1)));
  block.appendChild(el('span','iv-go2-english',item.original));
  block.appendChild(el('p','iv-go2-korean',item.translation));
  var commentary=el('p','iv-go2-commentary');
  commentary.appendChild(el('strong','','편집자 해설 · '));
  commentary.appendChild(document.createTextNode(item.commentary));
  block.appendChild(commentary);
  panel.appendChild(block);
 });
 var bottom=el('div','iv-go2-reading-bottom');
 bottom.appendChild(el('p','',content.note));
 if(/^https:\/\//.test(content.source||'')){
  var link=el('a','','표지 문구와 원본 출처 확인 ↗');
  link.href=content.source;
  link.target='_blank';
  link.rel='noopener noreferrer';
  bottom.appendChild(link);
 }
 panel.appendChild(bottom);
 cover.append(control,panel);
 var help=el('p','iv-go2-hint','표지 위의 ‘한국어 풀이 보기’를 누르면 짧은 번역 발췌와 해설을 읽을 수 있어요. 다시 원본으로 전환할 수 있습니다.');
 cover.insertAdjacentElement('afterend',help);
 function show(open){
  panel.hidden=!open;
  control.hidden=open;
  control.setAttribute('aria-expanded',String(open));
  if(open){panel.scrollTop=0;close.focus();}
  else control.focus();
 }
 control.addEventListener('click',function(){show(true)});
 close.addEventListener('click',function(){show(false)});
 panel.addEventListener('keydown',function(e){
  if(e.key==='Escape'){e.preventDefault();show(false)}
 });
}
onRoute(function(view){if(view==='album')installGo2Reading()});

}
