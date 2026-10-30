import {createCalendar} from "/indi-visual/assets/calendar.6ce87cad3e2a5366.js";
import {currentDark,setTheme,initPrefs} from "/indi-visual/assets/theme.4bed0a031bc098b9.js";
export async function initSite(config){
if(document.documentElement.dataset.ivInitialized)return;
document.documentElement.dataset.ivInitialized="1";
const issuesView=createCalendar(config.archive,config.prefix);
function rng(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;var t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

/* ---------- illustrations (original, prototype only) ---------- */
function dinerSVG(slice){
  var par = slice ? 'xMidYMid slice' : 'xMidYMid meet';
  return '<svg class="art" viewBox="0 0 600 340" preserveAspectRatio="'+par+'" role="img" aria-label="밤의 도시 모퉁이, 불 켜진 식당을 단순한 도형으로 그린 일러스트">'+
  '<rect width="600" height="340" fill="#0E2A2C"/>'+
  '<rect y="262" width="600" height="78" fill="#16231F"/>'+
  '<polygon points="60,262 430,262 520,340 0,340" fill="#C9D878" opacity=".22"/>'+
  '<rect x="440" y="38" width="160" height="224" fill="#5B2A20"/>'+
  '<g fill="#1B100D"><rect x="462" y="64" width="34" height="46"/><rect x="520" y="64" width="34" height="46"/><rect x="462" y="136" width="34" height="46"/><rect x="520" y="136" width="34" height="46"/></g>'+
  '<rect x="30" y="76" width="410" height="32" fill="#141414"/>'+
  '<rect x="30" y="108" width="410" height="154" fill="#E5E39A"/>'+
  '<rect x="30" y="108" width="410" height="154" fill="url(#dg)"/>'+
  '<defs><linearGradient id="dg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D9E27A" stop-opacity=".0"/><stop offset="1" stop-color="#B9C45A" stop-opacity=".45"/></linearGradient></defs>'+
  '<rect x="30" y="108" width="10" height="154" fill="#2C3A33"/>'+
  '<rect x="30" y="206" width="410" height="14" fill="#C9792F"/>'+
  '<rect x="30" y="220" width="410" height="42" fill="#2A1C16"/>'+
  '<rect x="200" y="150" width="62" height="56" fill="#8E9A4E"/><rect x="214" y="136" width="34" height="14" fill="#6F7B38"/>'+
  '<g><circle cx="115" cy="170" r="11" fill="#E0B590"/><rect x="100" y="182" width="30" height="24" fill="#2B3A5C"/>'+
  '<circle cx="152" cy="172" r="11" fill="#E0B590"/><rect x="138" y="184" width="28" height="22" fill="#B02A2A"/>'+
  '<circle cx="330" cy="174" r="11" fill="#E0B590"/><rect x="316" y="186" width="30" height="20" fill="#E9E9E2"/></g>'+
  '<rect x="300" y="196" width="72" height="10" fill="#E9E9E2" opacity=".0"/>'+
  '</svg>';
}
function sleeveSVG(uid, slice){
  var r = rng(21), pal=['#FF3D9A','#FFD400','#00B7FF','#FF6A00','#7A3CFF','#00D38C'];
  var out='<svg class="cover" viewBox="0 0 400 400" preserveAspectRatio="'+(slice?'xMidYMid slice':'xMidYMid meet')+'" role="img" aria-label="형광색이 번지고 겹치는 추상 앨범 커버 일러스트">'+
  '<defs><filter id="rg'+uid+'" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".022" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="30"/></filter></defs>'+
  '<rect width="400" height="400" fill="#F5F5F1"/><g filter="url(#rg'+uid+')">';
  for(var i=0;i<26;i++){
    var a=(i/26)*6.283+r()*1.2, d=40+r()*130, cx=200+Math.cos(a)*d, cy=200+Math.sin(a)*d, rad=22+r()*46;
    out+='<circle cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="'+rad.toFixed(1)+'" fill="'+pal[i%pal.length]+'" opacity=".82" style="mix-blend-mode:multiply"/>';
  }
  out+='</g></svg>';
  return out;
}
function shredSVG(slice){
  var strips='', cols=['#0078BF','#FF48B0','#FFE800','#0078BF','#FF48B0','#0078BF','#FFE800','#FF48B0','#0078BF','#FF48B0'];
  var lens=[64,90,52,100,70,84,58,96,76,48];
  for(var i=0;i<10;i++){
    strips+='<rect x="'+(212+i*17.6)+'" y="168" width="15.6" height="'+lens[i]+'" fill="'+cols[i]+'" transform="rotate('+((i%3-1)*1.6)+' '+(220+i*17.6)+' 168)"/>';
  }
  return '<svg viewBox="0 0 600 340" preserveAspectRatio="'+(slice?'xMidYMid slice':'xMidYMid meet')+'" role="img" aria-label="액자 아래로 잘려 내려오는 캔버스 조각을 그린 일러스트">'+
  '<rect width="600" height="340" fill="#D6D3CB"/>'+
  '<rect x="196" y="28" width="208" height="150" fill="#B8923A"/>'+
  '<rect x="206" y="38" width="188" height="130" fill="#F4F2EC"/>'+
  '<circle cx="300" cy="92" r="40" fill="#FF48B0" opacity=".85"/>'+
  '<rect x="206" y="38" width="188" height="130" fill="#0078BF" opacity=".25"/>'+
  strips+
  '<rect x="206" y="166" width="188" height="4" fill="#15161A"/>'+
  '<rect x="150" y="300" width="22" height="10" fill="#FFE800" transform="rotate(-14 150 300)"/>'+
  '<rect x="430" y="292" width="26" height="9" fill="#0078BF" transform="rotate(10 430 292)"/>'+
  '<rect x="388" y="310" width="20" height="9" fill="#FF48B0" transform="rotate(-6 388 310)"/>'+
  '</svg>';
}

/* ---------- views ---------- */
var NAV=[['home','홈',''],['artwork','Artwork','t-artwork'],['album','Album Art','t-album'],['journal','Art Journal','t-journal'],['issues','Issues',''],['letter','Newsletter','']];
var state={view:'home'};

function legendBar(){
  return '<div class="legend"><span><i class="s"></i>확인된 사실</span><span><i class="d"></i>해석</span></div>';
}
var T;

function artworkBody(){
  return ''+
  '<div class="band blue"><div class="wrap band-in"><span class="band-name">Artwork</span><span class="band-sub">이번 호 미술작품</span>'+T()+'</div></div>'+
  '<div class="wrap"><div class="detail">'+
    '<div class="media"><div class="wall">'+dinerSVG(false)+
      '<div class="label"><b>나이트호크 (Nighthawks)</b>에드워드 호퍼, 1942<br>캔버스에 유채, 84.1 × 152.4 cm<br>시카고 미술관</div></div>'+
      '<p class="cap">이 이미지는 프로토타입용 일러스트입니다. 실제 발행 시에는 소장처의 공개 이미지 사용 조건을 확인합니다.</p></div>'+
    '<div class="txt"><h2>밤의 식당에 왜 출입문이 보이지 않을까?</h2><p class="byline">에드워드 호퍼의 고독한 도시 풍경</p>'+
      legendBar()+
      '<div class="body">'+
      '<p class="f">「나이트호크」는 호퍼가 1942년에 그린 유화입니다. 한밤중 도시 모퉁이, 불 켜진 식당 안에 앉은 사람들을 담았고, 완성 직후 시카고 미술관이 구입해 지금까지 소장하고 있습니다.</p>'+
      '<p class="f">호퍼는 맨해튼 그리니치 애비뉴 근처의 식당에서 착상을 얻었다고 알려져 있습니다.</p>'+
      '<p class="f">화면을 자세히 보면 식당을 감싼 곡면 유리가 시선을 안쪽으로 모으지만, 사람들이 드나들 출입문은 어디에도 보이지 않습니다.</p>'+
      '<p class="i">그래서 식당은 문이 닫힌 무대처럼 읽힙니다. 인물들은 같은 공간에 있어도 서로를 보지 않고, 밖에서 들여다보는 우리 역시 안으로 들어갈 길이 없습니다. 이 그림이 고독의 상징처럼 읽히는 이유 중 하나입니다.</p>'+
      '<p class="i">식당 안을 채운 밝고 차가운 빛은 어두운 거리와 강하게 대비됩니다. 이 빛은 인물을 보호하는 동시에 전시하는 것처럼 보입니다.</p>'+
      '</div>'+
      '<h3>이렇게 보세요</h3>'+
      '<ul class="look"><li>빛이 어디에서 나와 어디까지 닿는지 따라가 보세요.</li><li>네 사람의 시선이 각각 어디를 향하는지 확인해 보세요.</li><li>그림 안에서 출입문을 찾아보세요.</li></ul>'+
      '<h3>작품 정보</h3>'+
      '<dl class="facts"><dt>작가</dt><dd>에드워드 호퍼 (1882–1967)</dd><dt>제작</dt><dd>1942</dd><dt>재료</dt><dd>캔버스에 유채</dd><dt>소장</dt><dd>시카고 미술관</dd></dl>'+
      '<h3>출처</h3><ol class="src"><li>시카고 미술관 작품 소개 (샘플 출처 영역)</li><li>호퍼 관련 연구서와 전시 도록 (샘플 출처 영역)</li></ol>'+
      askBox('artwork','이번 호의 질문','문이 없는 그림 앞에서, 당신은 안에 있는 사람인가요, 밖에서 보는 사람인가요?')+
    '</div></div></div>';
}
function albumBody(){
  return ''+
  '<div class="band pink"><div class="wrap band-in"><span class="band-name">Album Art</span><span class="band-sub">이번 호 앨범 커버</span>'+T()+'</div></div>'+
  '<div class="wrap"><div class="detail">'+
    '<div class="media"><div class="sleeve-wrap" id="sleeveWrap"><div class="sleeve"><div class="record" aria-hidden="true"></div>'+sleeveSVG('d',false)+'</div></div>'+
      '<button class="play" id="playBtn" aria-pressed="false"><span class="dot"></span><span id="playTxt">음반 꺼내 보기</span></button>'+
      '<p class="cap">이 이미지는 프로토타입용 일러스트입니다. 실제 앨범 커버는 발매사와 아티스트의 이미지 사용 조건을 확인합니다.</p></div>'+
    '<div class="txt"><h2>폭발하는 색채와 불완전한 감정</h2><p class="byline">Radiohead, 『In Rainbows』 (2007)</p>'+
      legendBar()+
      '<div class="body">'+
      '<p class="f">『In Rainbows』는 라디오헤드의 일곱 번째 정규 앨범입니다. 2007년 10월 10일, 듣는 사람이 가격을 직접 정하는 방식으로 디지털 공개되어 음악 산업에서도 크게 화제가 되었습니다.</p>'+
      '<p class="f">아트워크는 오랜 협업자인 스탠리 던우드와 닥터 치크(Dr. Tchock)가 맡았습니다.</p>'+
      '<p class="i">커버에서는 형광에 가까운 색이 번지고 겹치며 한가운데서 터져 나오듯 퍼집니다. 정돈된 도형이 아니라 물감이 튄 흔적처럼 보여서 감정이 통제되지 않은 채 쏟아지는 인상을 줍니다.</p>'+
      '<p class="i">이 불완전한 번짐은 음악과도 닮았습니다. 촘촘하게 짜인 리듬 위에서 목소리는 흔들리고, 곡은 아름다움과 불안 사이를 오갑니다.</p>'+
      '</div>'+
      '<h3>디자인 분석</h3>'+
      '<div class="analysis"><div><b>색</b><span>핑크, 오렌지, 시안, 옐로가 서로 겹치며 새로운 색을 만듭니다.</span></div><div><b>형태</b><span>뚜렷한 윤곽 없이 가장자리가 번지는 유기적인 얼룩입니다.</span></div><div><b>구도</b><span>중심에서 바깥으로 퍼지는 폭발형 구도입니다.</span></div></div>'+
      listenModule()+
      '<h3>출처</h3><ol class="src"><li>앨범 크레디트와 발매 당시 보도 (샘플 출처 영역)</li><li>아티스트 공식 채널 (샘플 출처 영역)</li></ol>'+
      askBox('album','이번 호의 질문','소리를 듣기 전에 커버만 봤다면, 어떤 음악을 상상했을까요?')+
    '</div></div></div>';
}
function journalBody(){
  return ''+
  '<div class="band yellow"><div class="wrap band-in"><span class="band-name">Art Journal</span><span class="band-sub">미술계 이슈와 논쟁</span>'+T()+'</div></div>'+
  '<div class="wrap"><div class="detail">'+
    '<div class="media"><div class="paper-art">'+shredSVG(false)+'</div>'+
      '<p class="cap">이 이미지는 사건을 단순화한 프로토타입용 일러스트입니다. 실제 발행 시에는 보도 사진의 사용권을 별도로 확인합니다.</p></div>'+
    '<div class="txt"><h2>작품을 파괴하면 오히려 가치가 올라갈까?</h2><p class="byline">뱅크시 「사랑은 쓰레기통 속에」와 예술시장</p>'+
      legendBar()+
      '<div class="body">'+
      '<p class="f">2018년 10월 5일, 런던 소더비 경매에서 뱅크시의 「풍선과 소녀」가 약 104만 파운드에 낙찰되었습니다. 낙찰을 알리는 망치 소리 직후 액자에 숨겨진 파쇄기가 작동해 캔버스의 절반가량이 잘려 내려왔습니다.</p>'+
      '<p class="f">뱅크시는 이후 영상을 공개하며 파쇄기가 액자에 미리 설치되어 있었다고 밝혔습니다. 작품은 「사랑은 쓰레기통 속에」라는 새 제목을 얻었고, 뱅크시 작품 인증 기관이 이를 새로운 작품으로 인증했습니다.</p>'+
      '<p class="i">작품이 파괴되는 순간이 곧 작품이 완성되는 순간이 되었습니다. 시장을 풍자한 행위가 시장에서 가장 큰 화제가 되면서, 풍자가 시장에 흡수되는 역설이 드러났습니다.</p>'+
      '</div>'+
      '<h3>사건의 흐름</h3>'+
      '<ol class="tl">'+
        '<li><time>2018.10.05</time><p>소더비 런던 경매에서 낙찰 직후 작품이 부분적으로 파쇄됩니다.</p></li>'+
        '<li><time>2018.10</time><p>작가가 영상을 공개하고, 작품이 「사랑은 쓰레기통 속에」로 다시 인증됩니다.</p></li>'+
        '<li><time>2021.10.14</time><p>소더비에서 약 1,858만 파운드에 다시 낙찰되어 뱅크시 작품 경매 최고가를 기록합니다.</p></li>'+
      '</ol>'+
      '<h3>핵심 쟁점</h3>'+
      '<ul class="look" style="--blue:var(--ink)"><li>파괴는 창작이 될 수 있는가</li><li>시장을 비판하는 행위가 시장 가치를 키운 역설을 어떻게 볼 것인가</li><li>낙찰자와 경매사는 어떤 책임과 권리를 갖는가</li></ul>'+
      '<h3>각 주체의 입장</h3>'+
      '<div class="stance"><div><b>소더비</b>경매 도중 즉석에서 만들어진 작품이라는 취지로 이 사건을 설명했습니다.</div><div><b>낙찰자</b>파쇄 이후에도 구매를 취소하지 않고 그대로 유지했습니다.</div><div><b>뱅크시</b>장치를 미리 설치했다고 밝히며 영상으로 과정을 공개했습니다.</div></div>'+
      '<h3>반응과 시간이 지난 뒤의 평가</h3>'+
      '<div class="body" style="margin-top:12px"><p class="i">당시에는 시장을 정면으로 비튼 퍼포먼스 걸작이라는 평가와, 작가 이름값을 키우는 홍보 장치에 가깝다는 평가가 맞섰습니다.</p>'+
      '<p class="f">2021년 재낙찰가는 첫 낙찰가의 약 18배였습니다. 이 결과는 파쇄 사건이 작품의 시장 가치를 크게 높였다는 근거로 자주 언급됩니다.</p></div>'+
      '<h3>출처</h3><ol class="src"><li>경매사 발표와 당시 언론 보도 (샘플 출처 영역)</li><li>작가 공식 채널 공개 영상 (샘플 출처 영역)</li></ol>'+
      askBox('journal','핵심 질문','이 작품은 왜 논란이 되었고, 우리는 무엇을 생각해 볼 수 있을까?')+
    '</div></div></div>';
}
var PAGE_INFO={home:['홈','이번 호 처음으로'],artwork:['Artwork','밤의 식당에 왜 출입문이 보이지 않을까?'],album:['Album Art','폭발하는 색채와 불완전한 감정'],journal:['Art Journal','작품을 파괴하면 오히려 가치가 올라갈까?'],all:['세 편 모두 읽기','한 화면에서 이어서 읽기']};
function pagerBtn(k,dir){var i=PAGE_INFO[k];return '<button class="pg '+dir+'" data-go="'+k+'"><small>'+(dir==='next'?'다음':'이전')+' · '+i[0]+'</small><b>'+i[1]+'</b></button>'}
function pager(prev,next){
  return '<nav class="pager" aria-label="다른 이야기로 이동">'+(prev?pagerBtn(prev,'prev'):'<span></span>')+(next?pagerBtn(next,'next'):'<span></span>')+'</nav>'+
    '<div class="pager-top"><button type="button" data-top>맨 위로</button></div>';
}
function detail(body,prev,next){return body+'<div class="wrap">'+pager(prev,next)+'</div>'}

function homeView(){return config.home}
function allView(){
  return ''+
  '<div class="jumpbar"><div class="wrap jump" role="navigation" aria-label="이번 호 안에서 이동"><a class="b" href="#sec-artwork" data-anchor="sec-artwork">Artwork</a><a class="p" href="#sec-album" data-anchor="sec-album">Album Art</a><a class="y" href="#sec-journal" data-anchor="sec-journal">Art Journal</a><button class="btn ghost" data-go="letter">이메일 레터로 보기</button></div></div>'+
  '<section id="sec-artwork">'+artworkBody()+'</section>'+
  '<section id="sec-album">'+albumBody()+'</section>'+
  '<section id="sec-journal">'+journalBody()+'</section>'+
  '<div class="wrap">'+pager('home',null)+'</div>';
}

function subscribeView(){
  return '<div class="wrap"><div class="sub">'+
    '<div><h2>오늘 당신의 시선을 넓힐 세 가지 이야기</h2><p class="d">매주 화요일과 금요일, Artwork · Album Art · Art Journal이 한 통에 담겨 도착합니다. 본문은 웹사이트에서 이어서 읽습니다.</p>'+
      '<div class="subform"><div class="field"><input class="sub-email" type="email" inputmode="email" autocomplete="email" placeholder="이메일 주소" aria-label="이메일 주소"><button class="js-sub" type="button">구독하기</button></div><div class="msg" role="status" aria-live="polite"></div><p class="fine">언제든 메일 하단의 수신거부 링크로 해지할 수 있습니다.</p></div>'+
      '<ul class="how"><li>영상은 메일에서 썸네일과 링크로 보여줍니다.</li><li>시연용 화면이라 이메일 주소를 저장하거나 메일을 발송하지 않습니다.</li></ul>'+
      '<button class="btn ghost" data-go="letter">레터 크게 보기</button></div>'+
    '<div class="mailprev"><iframe id="letterFrame" title="이메일 레터 미리보기" sandbox="allow-same-origin"></iframe></div>'+
  '</div></div>';
}
function letterView(){
  return '<div class="wrap letter"><div class="lh"><div><h2>Newsletter</h2><p>매주 화·금 발송되는 이메일 레터입니다. 한 통에 세 코너가 담기고, 본문은 웹으로 이어집니다.</p></div>'+
    '<div class="seg" role="group" aria-label="미리보기 너비"><button class="on" data-w="640" aria-pressed="true">데스크톱</button><button data-w="375" aria-pressed="false">모바일</button></div></div>'+
    '<div class="frame" id="letterBox"><iframe id="letterFrame" title="이메일 레터 미리보기" sandbox="allow-same-origin"></iframe></div></div>';
}
function sizeLetter(){
  var f=document.getElementById('letterFrame'); if(!f) return;
  try{f.style.height=f.contentDocument.documentElement.scrollHeight+'px'}catch(e){f.style.height='1500px'}
}
function mountLetter(){
 var frame=document.getElementById('letterFrame');
 if(!frame)return;
 frame.addEventListener('load',sizeLetter);
 frame.src=config.mail;
}

var TRACKS=[
  {title:'Weird Fishes / Arpeggi',why:'겹겹이 쌓이는 리듬과 번지는 색의 질감을 함께 느껴 보세요.',q:'Radiohead Weird Fishes Arpeggi',id:''},
  {title:'Nude',why:'가장 느리고 투명한 곡으로, 커버의 강한 색과 대비해서 들어 보세요.',q:'Radiohead Nude',id:''},
  {title:'Reckoner',why:'불안정한 목소리가 만드는 아름다움에 집중해 보세요.',q:'Radiohead Reckoner',id:''}
];
/* TRACKS[].id 에 YouTube 영상 ID를 넣으면 이 자리에서 바로 재생됩니다. 비어 있으면 YouTube 검색 링크로 연결됩니다. */
function ytUrl(t){return t.id?'https://www.youtube.com/watch?v='+encodeURIComponent(t.id):'https://www.youtube.com/results?search_query='+encodeURIComponent(t.q+' official')}
function loadLabel(t){return t.id?'영상 불러오기':'YouTube에서 열기'}
function playerHTML(t){return '<button class="load" id="loadVideo" type="button"><span class="pl" aria-hidden="true"></span><span>'+t.title+' · '+loadLabel(t)+'</span></button>'}
function listenModule(){
  return '<h3 id="listen-h">함께 들어 보세요</h3><div role="group" aria-labelledby="listen-h">'+
    '<ul class="tracks">'+TRACKS.map(function(t,i){return '<li><button type="button" data-track="'+i+'" aria-pressed="'+(i===0)+'"><b>'+t.title+'</b><span>'+t.why+'</span></button></li>'}).join('')+'</ul>'+
    '<div class="player" id="player">'+playerHTML(TRACKS[0])+'</div>'+
    '<a class="ytlink" id="ytLink" href="'+ytUrl(TRACKS[0])+'" target="_blank" rel="noopener noreferrer">YouTube에서 따로 열기</a>'+
    '<p class="cap">영상이 연결되면 이 자리에서 바로 재생됩니다. 지금은 샘플이라 YouTube 검색으로 이동합니다.</p></div>';
}
function pickTrack(i){
  document.querySelectorAll('[data-track]').forEach(function(b){b.setAttribute('aria-pressed',String(+b.getAttribute('data-track')===i))});
  document.getElementById('player').innerHTML=playerHTML(TRACKS[i]);
  document.getElementById('ytLink').href=ytUrl(TRACKS[i]);
  document.getElementById('player').setAttribute('data-i',i);
}
function loadVideo(){
  var pl=document.getElementById('player'), i=+(pl.getAttribute('data-i')||0), t=TRACKS[i];
  if(!t.id){window.open(ytUrl(t),'_blank','noopener,noreferrer');return}
  var f=document.createElement('iframe');
  f.title=t.title+' YouTube 영상';
  f.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(t.id)+'?autoplay=1';
  f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
  f.allowFullscreen=true;
  pl.replaceChildren(f);
}

/* reader notes (이 브라우저에만 저장) */

var ISSUE_ID=config.issue.date;
function noteKey(tab){return 'indi-visual:note:'+ISSUE_ID+':'+tab}
function askBox(tab,label,q){
  return '<div class="ask"><small>'+label+'</small>'+q+'</div>'+
    '<div class="note"><label for="note-'+tab+'">내 생각 적어두기</label>'+
    '<textarea id="note-'+tab+'" data-note="'+tab+'" maxlength="1500" aria-describedby="ns-'+tab+'" placeholder="떠오른 생각을 남겨 보세요"></textarea>'+
    '<div class="note-row"><span class="note-s" id="ns-'+tab+'" role="status" aria-live="polite">이 브라우저에만 저장되고, 다른 곳으로 보내지 않습니다.</span><span class="note-c" id="nc-'+tab+'" aria-hidden="true">0/1500</span><button type="button" class="note-clear" data-clear="'+tab+'" hidden>지우기</button></div></div>';
}
function noteUI(el){
  var tab=el.getAttribute('data-note');
  document.getElementById('nc-'+tab).textContent=el.value.length+'/1500';
  document.querySelector('[data-clear="'+tab+'"]').hidden=!el.value;
}
function loadNotes(){
  document.querySelectorAll('textarea[data-note]').forEach(function(el){
    try{el.value=localStorage.getItem(noteKey(el.getAttribute('data-note')))||''}catch(e){}
    noteUI(el);
  });
}
var noteTimers={};
function saveNote(el){
  noteUI(el);
  var tab=el.getAttribute('data-note'), st=document.getElementById('ns-'+tab);
  clearTimeout(noteTimers[tab]);
  noteTimers[tab]=setTimeout(function(){
    try{
      if(el.value.trim()){localStorage.setItem(noteKey(tab),el.value);st.textContent='저장했습니다. 이 브라우저에만 보관됩니다.'}
      else{localStorage.removeItem(noteKey(tab));st.textContent='기록이 비어 있습니다.'}
    }catch(e){st.textContent='이 브라우저에서는 저장할 수 없습니다.'}
  },500);
}
function clearNote(btn){
  var tab=btn.getAttribute('data-clear'), el=document.getElementById('note-'+tab);
  if(btn.getAttribute('data-armed')!=='1'){
    btn.setAttribute('data-armed','1');btn.textContent='정말 지울까요?';
    clearTimeout(btn._t);btn._t=setTimeout(function(){btn.removeAttribute('data-armed');btn.textContent='지우기'},3000);return;
  }
  el.value='';
  try{localStorage.removeItem(noteKey(tab))}catch(e){}
  btn.removeAttribute('data-armed');btn.textContent='지우기';
  noteUI(el);document.getElementById('ns-'+tab).textContent='기록을 지웠습니다.';el.focus();
}

/* theme (사용자 설정은 이 브라우저에만 저장) */

function renderNav(){
  var h='';
  NAV.forEach(function(n){
    var cur = state.view===n[0] || (state.view==='all' && n[0]==='home');
    h+='<button class="'+n[2]+'" data-go="'+n[0]+'"'+(cur?' aria-current="page"':'')+'>'+n[1]+'</button>';
  });
  var nav=document.getElementById('nav'); nav.innerHTML=h;
  var cur=nav.querySelector('[aria-current]');
  if(cur) nav.scrollLeft=Math.max(0,cur.offsetLeft-(nav.clientWidth-cur.offsetWidth)/2);
}
var TITLES={home:'INDI-VISUAL',artwork:'Artwork — INDI-VISUAL',album:'Album Art — INDI-VISUAL',journal:'Art Journal — INDI-VISUAL',all:'세 편 모두 읽기 — INDI-VISUAL',issues:'Issues — INDI-VISUAL',letter:'Newsletter — INDI-VISUAL',subscribe:'구독하기 — INDI-VISUAL'};
var spy=null;
function setBarH(){var b=document.querySelector('.bar');if(b)document.documentElement.style.setProperty('--bar-h',b.offsetHeight+'px')}
function startSpy(){
  if(!('IntersectionObserver' in window)) return;
  var links={}; document.querySelectorAll('.jump a[data-anchor]').forEach(function(a){links[a.getAttribute('data-anchor')]=a});
  spy=new IntersectionObserver(function(es){es.forEach(function(en){
    if(!en.isIntersecting) return;
    Object.keys(links).forEach(function(k){if(k===en.target.id)links[k].setAttribute('aria-current','true');else links[k].removeAttribute('aria-current')});
  })},{rootMargin:'-35% 0px -55% 0px'});
  ['sec-artwork','sec-album','sec-journal'].forEach(function(id){var el=document.getElementById(id);if(el)spy.observe(el)});
}
function go(v,fromHistory){
  state.view=v;
  if(!fromHistory && location.protocol!=='file:' && location.hash!=='#'+v){try{history.pushState({view:v},'','#'+v)}catch(e){}}
  var app=document.getElementById('app'), html;
  switch(v){
    case 'artwork': html=detail(artworkBody(),'home','album'); break;
    case 'album': html=detail(albumBody(),'artwork','journal'); break;
    case 'journal': html=detail(journalBody(),'album','all'); break;
    case 'all': html=allView(); break;
    case 'issues': html=issuesView(); break;
    case 'subscribe': html=subscribeView(); break;
    case 'letter': html=letterView(); break;
    default: html=homeView(); state.view='home';
  }
  if(spy){spy.disconnect();spy=null}
  app.innerHTML=html;
  app.setAttribute('data-view',state.view);
  document.title=TITLES[state.view]||TITLES.home;
  renderNav(); setBarH();
  window.scrollTo({top:0,behavior:'instant'});
  var pb=document.getElementById('playBtn'); if(pb) bindPlay();
  mountLetter();
  loadNotes();
  if(state.view==='all') startSpy();
  if(window.__booted){app.focus({preventScroll:true})}else{window.__booted=true}
  document.getElementById('subBand').hidden = (state.view==='subscribe');
}
function bindPlay(){
  var btn=document.getElementById('playBtn'), wrap=document.getElementById('sleeveWrap'), txt=document.getElementById('playTxt');
  btn.addEventListener('click',function(){
    var on=wrap.classList.toggle('playing');
    btn.setAttribute('aria-pressed',on);
    txt.textContent = on ? '음반 넣기' : '음반 꺼내 보기';
  });
}
function submitSub(form){
  var inp=form.querySelector('.sub-email'), v=inp.value.trim(), m=form.querySelector('.msg');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){
    inp.setAttribute('aria-invalid','true');m.className='msg err';m.textContent='이메일 주소 형식을 확인해 주세요.';inp.focus();return;
  }
  inp.removeAttribute('aria-invalid');m.className='msg ok';
  m.textContent='✓ 구독 신청을 받았습니다. 시연용 화면이라 실제 메일은 발송되지 않습니다.';
}
document.addEventListener('keydown',function(e){
  if(e.key==='Enter' && e.target.classList && e.target.classList.contains('sub-email')){e.preventDefault();submitSub(e.target.closest('.subform'))}
});
document.addEventListener('input',function(e){if(e.target.matches&&e.target.matches('textarea[data-note]'))saveNote(e.target)});
document.addEventListener('click',function(e){
  var tk=e.target.closest('[data-track]'); if(tk){pickTrack(+tk.getAttribute('data-track'));return}
  if(e.target.closest('#loadVideo')){loadVideo();return}
  var sb=e.target.closest('.js-sub');
  if(sb){submitSub(sb.closest('.subform'));return}
  var w=e.target.closest('[data-w]');
  if(w){
    var box=document.getElementById('letterBox'); if(!box) return;
    box.style.width='min(100%, '+w.getAttribute('data-w')+'px)';
    document.querySelectorAll('.seg button').forEach(function(x){x.classList.toggle('on',x===w);x.setAttribute('aria-pressed',String(x===w))});
    setTimeout(sizeLetter,350); return;
  }
  var a=e.target.closest('[data-anchor]');
  if(a){e.preventDefault();var el=document.getElementById(a.getAttribute('data-anchor'));if(el){el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}return}
  var th=e.target.closest('[data-theme-toggle]'); if(th){setTheme(currentDark()?'light':'dark');return}
  var nc=e.target.closest('[data-clear]'); if(nc){clearNote(nc);return}
  if(e.target.closest('[data-top]')){window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});return}
  var g=e.target.closest('[data-go]'); if(g){go(g.getAttribute('data-go'));return}
});
window.addEventListener('resize',setBarH);
window.addEventListener('popstate',function(){var v=location.hash.slice(1)||config.view;go(NAV.some(function(n){return n[0]===v})||v==='all'||v==='subscribe'?v:'home',true)});
/* Exact source hero interaction: fine-pointer movement offsets CMY ink plates. */
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
     !window.matchMedia('(pointer: fine)').matches)return;
  var raf=0,wm=null,tx=0,ty=0;
  function apply(){
    raf=0;
    if(!wm||!wm.isConnected)return;
    wm.style.setProperty('--px',(tx*6).toFixed(2));
    wm.style.setProperty('--py',(ty*4).toFixed(2));
  }
  function queue(){if(!raf)raf=requestAnimationFrame(apply)}
  document.addEventListener('pointermove',function(e){
    var hero=e.target.closest&&e.target.closest('#hero');
    if(!hero){if(wm){tx=0;ty=0;queue()}return}
    wm=hero.querySelector('.wm');
    if(!wm)return;
    var r=hero.getBoundingClientRect();
    tx=((e.clientX-r.left)/r.width-.5)*2;
    ty=((e.clientY-r.top)/r.height-.5)*2;
    queue();
  });
  document.addEventListener('pointerleave',function(){
    if(wm){tx=0;ty=0;queue()}
  },true);
})();


(function(){
const issue=config.issue;
if(Array.isArray(issue.articles.album.tracks)){
 TRACKS=issue.articles.album.tracks.map(function(t){return {title:t.title||'',why:t.why||'',url:t.url||'',id:t.video_id||''}});
}
/* Never send the reader to a search results page from a published issue. */
ytUrl=function(t){
 if(t.id&&/^[A-Za-z0-9_-]{11}$/.test(t.id))return 'https://www.youtube.com/watch?v='+t.id;
 return t.url&&/^https:\/\//.test(t.url)?t.url:'';
};
loadLabel=function(t){return t.id?'영상 불러오기':t.url?'곡 페이지 바로 열기':'재생 링크 확인 중'};
function trackLinkLabel(t){
 return t.id?'YouTube에서 영상 보기 ↗':
   /bandcamp\.com/.test(t.url||'')?'Bandcamp에서 이 곡 바로 듣기 ↗':
   /music\.apple\.com/.test(t.url||'')?'Apple Music에서 이 곡 듣기 ↗':
   '해당 곡 바로 열기 ↗';
}
const original={artwork:artworkBody,album:albumBody,journal:journalBody};
function elem(tag, klass, value){
  const x=document.createElement(tag);
  if(klass)x.className=klass;
  x.textContent=value||'';
  return x;
}
function makeInfoCard(a,mini){
  const kind=a.visual_type==='timeline'?'timeline':'archive';
  const card=elem('div','iv-info iv-info--'+kind+(mini?' iv-info--mini':''),'');
  card.setAttribute('role','img');
  card.setAttribute('aria-label',a.image_alt||a.visual_heading||'기사 정보 카드');
  card.appendChild(elem('span','iv-info-eyebrow',a.visual_kicker||'INDI-VISUAL / EDITORIAL'));
  card.appendChild(elem('div','iv-info-heading',a.visual_heading||a.title||''));
  const list=elem('div','iv-info-list','');
  (a.visual_items||[]).forEach(function(item){
    const row=elem('div','iv-info-item','');
    row.appendChild(elem('strong','',item[0]||''));
    row.appendChild(elem('span','',item[1]||''));
    list.appendChild(row);
  });
  card.appendChild(list);
  card.appendChild(elem('span','iv-info-footer',kind==='timeline'?'사건 기록 · 출처는 본문 참조':'음반 정보 · 원본 커버는 출처 링크에서'));
  return card;
}
function updateMedia(media,a,label){
  if(a.visual_type==='archive'||a.visual_type==='timeline'){
    media.replaceChildren();
    media.appendChild(makeInfoCard(a,false));
    media.appendChild(elem('p','cap',a.image_caption||''));
    appendOriginalLink(media,a);
    return;
  }

  // Album Art static image; no vinyl interaction.
  if(label==='Album Art'){
    media.replaceChildren();
    const cover=elem('div','album-cover-static','');
    cover.style.cssText='width:100%;max-width:520px;aspect-ratio:1;margin:0 auto;overflow:hidden;background:#202126;color:#f0eeeb;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(20px,3vw,32px);border:2px solid var(--ink);font:800 17px/1.4 var(--sans)';
    if((a.rights_approved===true || a.editorial_quotation_image===true) && typeof a.image==='string' && (/^https:\/\//.test(a.image)||/^\/(?:[a-z0-9-]+\/)?assets\/[a-z0-9-]+\.svg$/.test(a.image))){
      const pic=document.createElement('img');pic.src=a.image;pic.alt=a.image_alt||'';
      pic.style.cssText='width:100%;height:100%;object-fit:contain';cover.appendChild(pic);
    }else{
      cover.appendChild(elem('span','','INDI-VISUAL / ALBUM ART'));
      const middle=elem('div','','원본 커버는\n출처에서 확인');
      middle.style.cssText='white-space:pre-line;font-size:clamp(22px,3vw,36px);line-height:1.35';cover.appendChild(middle);
      cover.appendChild(elem('span','','IMAGE RIGHTS PENDING'));
    }
    media.appendChild(cover);
    media.appendChild(elem('p','cap',a.image_caption||'이미지 사용권 검토 중'));
    appendOriginalLink(media,a);
    return;
  }
  media.replaceChildren();
  if(label==='Artwork')media.classList.add('iv-art-media');
  const frame=elem('div',label==='Art Journal'?'paper-art':'wall');
  if(label==='Artwork')frame.classList.add('iv-art-picture');
  frame.style.minHeight='220px';
  frame.style.display='flex';
  frame.style.alignItems='center';
  frame.style.justifyContent='center';
  if(a.rights_approved===true && typeof a.image==='string' && (/^https:\/\//.test(a.image)||/^\/(?:[a-z0-9-]+\/)?assets\/[a-z0-9-]+\.svg$/.test(a.image))){
    const picture=document.createElement('img');
    picture.src=a.image;
    picture.alt=a.image_alt||'';
    picture.style.cssText='max-width:100%;height:auto;display:block';
    frame.appendChild(picture);
  }else{
    const box=elem('div','', 'IMAGE PENDING');
    box.setAttribute('aria-label','이미지 사용 권리 검토 중');
    box.style.cssText='padding:36px;color:var(--mute);font-weight:900;letter-spacing:.08em;text-align:center';
    frame.appendChild(box);
  }
  media.appendChild(frame);
  if(label==='Artwork'){
    media.appendChild(elem('p','cap iv-art-caption',a.image_caption||''));
    if(a.image_credit)media.appendChild(elem('p','iv-art-credit',a.image_credit));
  }else{
    media.appendChild(elem('p','cap',(a.rights_approved===true || a.editorial_quotation_image===true) ? (a.image_caption||'') : '이미지 사용권 검토 중 · 미승인 이미지 미게시'));
  }
  appendOriginalLink(media,a);
}
function appendOriginalLink(media,a){
  if(typeof a.original_url==='string' && /^https:\/\//.test(a.original_url)){
    const original=elem('a','original-link',a.original_link_label||'원본 보기 ↗');
    original.href=a.original_url;
    original.target='_blank';
    original.rel='noopener noreferrer';
    original.style.cssText=media.classList.contains('iv-art-media')?
      'display:inline-block;margin:11px auto 0;padding:1px 0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:650;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px':
      'display:inline-block;margin-top:12px;padding:8px 12px;border:1px solid var(--line);color:var(--ink);text-underline-offset:3px';
    media.appendChild(original);
  }
}
function formatBody(key){
  const label={artwork:'Artwork',album:'Album Art',journal:'Art Journal'}[key];
  const a=issue.articles[key];
  const root=document.createElement('div');
  root.innerHTML=original[key]();
  const txt=root.querySelector('.detail .txt');
  const media=root.querySelector('.detail .media');
  if(!txt||!media)throw new Error('Approved detail layout missing');
  if(key==='artwork')root.querySelector('.detail').classList.add('iv-art-detail');
  txt.querySelector('h2').textContent=a.title||'';
  txt.querySelector('.byline').textContent=a.subtitle||'';
  updateMedia(media,a,label);
  const body=txt.querySelector('.body');
  body.replaceChildren();
  (a.facts||[]).forEach(function(t){body.appendChild(elem('p','f',t))});
  (a.interpretations||[]).forEach(function(t){body.appendChild(elem('p','i',t))});
  // Only article-specific sample sections are removed. The original layout,
  // band, typography, detail grid and personal reflection component remain.
  let node=body.nextElementSibling;
  while(node){const next=node.nextElementSibling;node.remove();node=next}
  if(key==='artwork' && Array.isArray(a.highlights)&&a.highlights.length){
    txt.appendChild(elem('h3','',key==='artwork'?'이렇게 보세요':key==='album'?'디자인 분석':'핵심 쟁점'));
    const ul=elem('ul','look','');
    a.highlights.forEach(function(t){ul.appendChild(elem('li','',t))});
    txt.appendChild(ul);
  }
  if(key==='artwork' && a.details){
    txt.appendChild(elem('h3','','작품 정보'));
    const dl=elem('dl','facts','');
    Object.keys(a.details).forEach(function(k){dl.appendChild(elem('dt','',k));dl.appendChild(elem('dd','',a.details[k]))});
    txt.appendChild(dl);
  }
  if(key==='album'){
    // Restore the approved original analysis table rather than a plain list.
    const rows=elem('div','analysis','');
    (a.analysis||[]).forEach(function(r){
       const line=elem('div','','');line.appendChild(elem('b','',r[0]));line.appendChild(elem('span','',r[1]));rows.appendChild(line)
     });
    if(rows.children.length)txt.appendChild(rows);
    // Use the prototype's exact tracks, selectable preview, and player module.
    const listener=document.createElement('div');listener.innerHTML=listenModule();
    // Show the first selected YouTube video in-page, without autoplay until a track is selected.
    const defaultPlayer=listener.querySelector('#player');
    if(defaultPlayer&&TRACKS[0]&&/^[A-Za-z0-9_-]{11}$/.test(TRACKS[0].id)){
      const frame=document.createElement('iframe');
      frame.title=TRACKS[0].title+' YouTube 영상';
      frame.src='https://www.youtube-nocookie.com/embed/'+TRACKS[0].id+'?rel=0';
      frame.loading='lazy';
      frame.allow='accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen';
      frame.referrerPolicy='strict-origin-when-cross-origin';
      frame.allowFullscreen=true;
      defaultPlayer.replaceChildren(frame);
      defaultPlayer.setAttribute('data-i','0');
    }
    const sourceLink=listener.querySelector('#ytLink');
    if(sourceLink){
      const originalSource=document.createElement('a');
      originalSource.id='trackSource';
      originalSource.className='ytlink iv-track-source';
      originalSource.target='_blank';
      originalSource.rel='noopener noreferrer';
      sourceLink.insertAdjacentElement('afterend',originalSource);
    }
    Array.from(listener.childNodes).forEach(n=>txt.appendChild(n));
    const cap=txt.querySelector('#ytLink + .cap');
    if(cap)cap.textContent=a.listen_note||'트랙을 선택하면 현재 페이지의 YouTube 영상이 해당 곡으로 바뀝니다. 영상 제공자의 설정이나 브라우저 정책에 따라 재생이 제한될 수 있습니다.';
    const firstLink=txt.querySelector('#ytLink');
    if(firstLink&&TRACKS[0]){firstLink.href=ytUrl(TRACKS[0]);firstLink.textContent=trackLinkLabel(TRACKS[0])}
    updateTrackSource(TRACKS[0],txt);
  }
  if(key==='journal'){
    if(Array.isArray(a.timeline)&&a.timeline.length){
      txt.appendChild(elem('h3','',a.timeline_heading||'사건의 흐름'));
      const timeline=elem('ol','tl','');
      a.timeline.forEach(function(item){const li=document.createElement('li');const time=elem('time','',item[0]);const p=elem('p','',item[1]);li.appendChild(time);li.appendChild(p);timeline.appendChild(li)});
      txt.appendChild(timeline);
    }
    if(Array.isArray(a.editorial_issues)&&a.editorial_issues.length){
      txt.appendChild(elem('h3','',a.issues_heading||'핵심 쟁점'));
      const issues=elem('div','editorial-issues','');
      a.editorial_issues.forEach(function(item,i){
        const section=elem('section','editorial-issue','');
        section.appendChild(elem('span','editorial-issue-no','ISSUE '+String(i+1).padStart(2,'0')));
        section.appendChild(elem('h4','editorial-issue-title',item.title||''));
        section.appendChild(elem('p','editorial-issue-desc',item.body||''));
        issues.appendChild(section);
      });
      txt.appendChild(issues);
    }
    if(Array.isArray(a.stances)&&a.stances.length){
      txt.appendChild(elem('h3','',a.stances_heading||'관련 주체의 입장'));const st=elem('div','stance','');
      a.stances.forEach(function(item){const d=document.createElement('div');d.appendChild(elem('b','',item[0]));d.appendChild(document.createTextNode(item[1]));st.appendChild(d)});txt.appendChild(st);
    }

  }
  txt.appendChild(elem('h3','','출처'));
  const sources=elem('ol','src','');
  (a.source_urls||[]).forEach(function(url){
    if(typeof url==='string'&&/^https:\/\//.test(url)){
      const li=document.createElement('li');
      const link=elem('a','',(a.source_labels&&a.source_labels[url])||url);link.href=url;link.target='_blank';link.rel='noopener noreferrer';
      li.appendChild(link);sources.appendChild(li)
    }
  });
  if(!sources.children.length)sources.appendChild(elem('li','','검토 중'));
  txt.appendChild(sources);
  if(key==='journal' && Array.isArray(a.related_articles) && a.related_articles.length){
    txt.appendChild(elem('h3','','관련 기사'));
    const related=elem('div','journal-related','');
    a.related_articles.forEach(function(item){
      const link=document.createElement('a');
      link.className='journal-related-link';
      link.href=item.url;
      const no=elem('span','journal-related-no','No. '+String(item.number).padStart(3,'0'));
      const title=elem('strong','',item.title||'');
      link.appendChild(no);link.appendChild(title);
      related.appendChild(link);
    });
    txt.appendChild(related);
  }
  if(typeof askBox==='function' && typeof a.question==='string' && a.question.trim()){
    const holder=document.createElement('div');
    holder.innerHTML=askBox(key+'-'+issue.number,'이번 호의 질문',a.question);
    Array.from(holder.childNodes).forEach(n=>txt.appendChild(n))
  }
  return root.innerHTML;
}
artworkBody=function(){return formatBody('artwork')};
albumBody=function(){return formatBody('album')};
journalBody=function(){return formatBody('journal')};
Object.keys(original).forEach(function(k){
  if(PAGE_INFO[k])PAGE_INFO[k][1]=issue.articles[k].title
});
// Keep the original source platform as an optional secondary link.
function updateTrackSource(t,context){
 const link=(context||document).querySelector('#trackSource');
 if(!link)return;
 const source=t&&t.url&&/^https:\/\//.test(t.url)?t.url:'';
 if(!source || /^https:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\//.test(source)){
   link.hidden=true;
   link.removeAttribute('href');
   return;
 }
 link.href=source;
 link.textContent=/bandcamp\.com/.test(source)?'Bandcamp 원본 음원 ↗':
   /music\.apple\.com/.test(source)?'Apple Music 원본 음원 ↗':
   /open\.spotify\.com/.test(source)?'Spotify 원본 음원 ↗':'기존 곡 출처 열기 ↗';
 link.hidden=false;
}
// Clicking a song selects it and replaces the in-page YouTube embed.
pickTrack=function(i){
 const t=TRACKS[i],pl=document.getElementById('player');
 if(!t||!pl)return;
 document.querySelectorAll('[data-track]').forEach(function(b){b.setAttribute('aria-pressed',String(Number(b.getAttribute('data-track'))===i))});
 const link=document.getElementById('ytLink');
 if(link){link.href=ytUrl(t);link.textContent=trackLinkLabel(t)}
 updateTrackSource(t);
 if(!t.id || !/^[A-Za-z0-9_-]{11}$/.test(t.id)){
   pl.replaceChildren(document.createTextNode('연결된 YouTube 영상을 확인하지 못했습니다. 아래 원본 음원 링크를 이용해 주세요.'));
   pl.setAttribute('data-i',i);
   return;
 }
 const f=document.createElement('iframe');
 f.title=t.title+' YouTube 영상';
 f.src='https://www.youtube-nocookie.com/embed/'+t.id+'?autoplay=1&rel=0';
 f.allow='accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen';
 f.referrerPolicy='strict-origin-when-cross-origin';
 f.allowFullscreen=true;
 pl.replaceChildren(f);
 pl.setAttribute('data-i',i);
};
})();

T=function(){
 const d=new Date(config.issue.date+'T12:00:00');
 return '<div class="band-no"><span>'+d.getFullYear()+'년 '+(d.getMonth()+1)+'월 '+d.getDate()+'일</span><span>No. '+String(config.issue.number).padStart(3,'0')+'</span></div>';
};
homeView=function(){return config.homepage?config.home.replace('EDITION '+String(config.issue.number).padStart(3,'0'),'Edition No. '+String(config.issue.number).padStart(3,'0')):config.home};
TITLES.home='INDI-VISUAL — Edition No.'+String(config.issue.number).padStart(3,'0');
const baseLetter=letterView;
letterView=function(){return baseLetter().replace('매주 화·금 발송되는 이메일 레터입니다.','최신 발행호의 뉴스레터 미리보기입니다. 실제 이메일 자동 발송은 아직 연결되지 않았습니다.')};
if(config.homepage){
 const prior=go;
 go=function(view,history){
  if(['artwork','album','journal','all'].includes(view)){
   location.assign(config.prefix+'/editions/'+String(config.issue.number).padStart(3,'0')+'/'+(view==='all'?'':view+'/'));return;
  }
  prior(view,history);
 };
}


/* ON VIEW tab interaction */
(function(){
  function activateTab(btn,focus){
    var root=btn.closest('.iv-onview');if(!root)return;
    var wasActive=btn.getAttribute('aria-selected')==='true';
    var activePanel=null;
    root.querySelectorAll('[role="tab"]').forEach(function(tab){
      var active=tab===btn;
      tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;
      var panel=document.getElementById(tab.getAttribute('aria-controls'));
      if(panel){panel.hidden=!active;if(active)activePanel=panel;}
    });
    if(focus)btn.focus();
    if(!wasActive && activePanel && activePanel.animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      activePanel.animate([{opacity:.7,transform:'translateY(5px)'},{opacity:1,transform:'none'}],{duration:190,easing:'ease-out'});
    }
  }
  document.addEventListener('click',function(e){
    var btn=e.target.closest('.iv-onview [role="tab"]');if(btn)activateTab(btn,false);
  });
  document.addEventListener('keydown',function(e){
    var btn=e.target.closest('.iv-onview [role="tab"]');if(!btn)return;
    var tabs=Array.from(btn.closest('[role="tablist"]').querySelectorAll('[role="tab"]'));
    var i=tabs.indexOf(btn), next=null;
    if(e.key==='ArrowRight')next=(i+1)%tabs.length;
    if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;
    if(e.key==='Home')next=0;
    if(e.key==='End')next=tabs.length-1;
    if(next!==null){e.preventDefault();activateTab(tabs[next],true)}
  });
})();


/* Artwork loupe: automatic hover and button-free touch / keyboard access. */
(function(){
  function installArtworkLoupe(root){
    if(!root)return;
    root.querySelectorAll('.detail .media .wall > img').forEach(function(img,index){
      if(img.dataset.ivZoomInstalled)return;
      if(!/^https:\/\/|^\/(?:[a-z0-9-]+\/)?assets\//.test(img.getAttribute('src')||''))return;
      img.dataset.ivZoomInstalled='true';

      var stage=document.createElement('div');
      stage.className='iv-art-zoom-stage';
      stage.setAttribute('role','group');
      stage.tabIndex=0;
      stage.id='iv-art-zoom-'+index;
      var hint=document.createElement('p');
      hint.className='iv-art-zoom-help';
      hint.id=stage.id+'-help';
      var desktopHint=document.createElement('span');
      desktopHint.className='iv-art-hint-mouse';
      desktopHint.textContent='마우스를 올리면 확대됩니다';
      var mobileHint=document.createElement('span');
      mobileHint.className='iv-art-hint-touch';
      mobileHint.textContent='이미지를 누른 채 움직이면 확대됩니다';
      hint.appendChild(desktopHint);hint.appendChild(mobileHint);
      var accessibleHelp=document.createElement('span');
      accessibleHelp.className='iv-art-zoom-sr';
      accessibleHelp.id=stage.id+'-a11y';
      accessibleHelp.textContent='키보드에서 방향키로 확대 위치를 옮기고 ESC로 확대 화면을 닫을 수 있습니다.';
      stage.setAttribute('aria-label','작품 이미지 세부 확대');
      stage.setAttribute('aria-describedby',hint.id+' '+accessibleHelp.id);
      img.parentNode.insertBefore(stage,img);
      stage.appendChild(img);

      var lens=document.createElement('div');
      lens.className='iv-art-zoom-lens';
      lens.setAttribute('aria-hidden','true');
      lens.hidden=true;
      lens.style.backgroundImage='url('+JSON.stringify(img.src)+')';
      stage.appendChild(lens);
      stage.parentNode.insertBefore(hint,stage.nextSibling);
      stage.parentNode.insertBefore(accessibleHelp,hint.nextSibling);

      var px=.5,py=.5,touchActive=false,keyboardDismissed=false,ratio=2.3;
      function move(nx,ny){
        var r=img.getBoundingClientRect();
        if(!r.width||!r.height)return;
        px=Math.max(0,Math.min(1,nx));py=Math.max(0,Math.min(1,ny));
        var size=lens.getBoundingClientRect().width||Math.min(r.width*.4,168);
        var x=px*r.width,y=py*r.height;
        lens.style.left=Math.max(0,Math.min(r.width-size,x-size/2))+'px';
        lens.style.top=Math.max(0,Math.min(r.height-size,y-size/2))+'px';
        lens.style.backgroundSize=(r.width*ratio)+'px '+(r.height*ratio)+'px';
        lens.style.backgroundPosition=(size/2-x*ratio)+'px '+(size/2-y*ratio)+'px';
        lens.hidden=false;
      }
      function atPointer(ev){
        var r=img.getBoundingClientRect();
        if(r.width&&r.height)move((ev.clientX-r.left)/r.width,(ev.clientY-r.top)/r.height);
      }
      stage.addEventListener('pointerenter',function(ev){
        if(ev.pointerType!=='touch')atPointer(ev);
      });
      stage.addEventListener('pointermove',function(ev){
        if(ev.pointerType==='touch'){if(touchActive)atPointer(ev)}
        else atPointer(ev);
      });
      stage.addEventListener('pointerleave',function(ev){
        if(ev.pointerType!=='touch'&&!stage.matches(':focus'))lens.hidden=true;
      });
      stage.addEventListener('pointerdown',function(ev){
        if(ev.pointerType==='touch'){
          touchActive=true;
          if(stage.setPointerCapture)stage.setPointerCapture(ev.pointerId);
          atPointer(ev);
        }
      });
      stage.addEventListener('pointerup',function(ev){
        if(ev.pointerType==='touch')touchActive=false;
      });
      stage.addEventListener('pointercancel',function(ev){
        if(ev.pointerType==='touch'){touchActive=false;lens.hidden=true}
      });
      stage.addEventListener('focus',function(){
        keyboardDismissed=false;
        if(lens.hidden)move(px,py);
      });
      stage.addEventListener('blur',function(){lens.hidden=true;keyboardDismissed=false});
      stage.addEventListener('keydown',function(ev){
        if(ev.key==='Escape'){ev.preventDefault();lens.hidden=true;keyboardDismissed=true;return}
        var step=.045;
        var dx=ev.key==='ArrowRight'?step:ev.key==='ArrowLeft'?-step:0;
        var dy=ev.key==='ArrowDown'?step:ev.key==='ArrowUp'?-step:0;
        if(dx||dy){ev.preventDefault();keyboardDismissed=false;move(px+dx,py+dy)}
        if(ev.key==='Home'){ev.preventDefault();keyboardDismissed=false;move(.5,.5)}
      });
      document.addEventListener('pointerdown',function(ev){
        if(ev.pointerType==='touch'&&!stage.contains(ev.target)&&!touchActive)lens.hidden=true;
      });
      img.addEventListener('error',function(){
        lens.hidden=true;
        hint.textContent='이미지가 열리지 않으면 아래 원본 보기 링크를 이용해 주세요.';
        stage.tabIndex=-1;
      });
    });
  }
  var originalGo=go;
  go=function(view,fromHistory){
    originalGo(view,fromHistory);
    installArtworkLoupe(document.getElementById('app'));
  };
})();

(function(){
function install(){document.querySelectorAll('.iv-art-media').forEach(media=>{const pic=media.querySelector('img');if(!pic||media.querySelector('.iv-art-open'))return;const b=document.createElement('button');b.className='iv-art-open';b.type='button';b.textContent='작품 크게 보기';media.appendChild(b);b.onclick=()=>openImage(pic);const stage=media.querySelector('.iv-art-zoom-stage');if(stage){stage.addEventListener('click',()=>openImage(pic));stage.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openImage(pic)}});const help=media.querySelector('.iv-art-zoom-help');if(help)help.textContent='마우스로 세부 확대 · 클릭하거나 Enter를 누르면 크게 보기'}})}
function openImage(pic){let d=document.getElementById('v3-lightbox');if(!d){d=document.createElement('dialog');d.id='v3-lightbox';d.className='v3-lightbox';d.setAttribute('aria-label','작품 크게 보기');d.innerHTML='<div class="v3-lightbox-head"><span>작품 크게 보기</span><button type="button" aria-label="작품 확대 닫기">닫기 ×</button></div><img alt="">';document.body.appendChild(d);d.querySelector('button').onclick=()=>d.close();d.addEventListener('click',e=>{if(e.target===d)d.close()})}d.querySelector('.v3-lightbox-head span').textContent=pic.alt||'작품 크게 보기';d.querySelector('img').src=pic.src;d.querySelector('img').alt=pic.alt;d.showModal()}
const priorGo=go;go=function(v,h){priorGo(v,h);install()};
})();

/* Subscription is a preview, not a fake email-capture interface. */
subscribeView=function(){
 return '<section class="wrap iv-subscribe-detail" aria-labelledby="iv-subscribe-title">'+
 '<div class="iv-subscribe-inner">'+
 '<div><div class="iv-tail-eyebrow"><span class="iv-tail-ink" aria-hidden="true"><i></i><i></i><i></i></span>THE LETTER / INDI-VISUAL</div>'+
 '<h1 id="iv-subscribe-title">읽는 방식을 바꾸는<br>세 가지 이야기.</h1>'+
 '<p class="iv-subscribe-description">Artwork, Album Art, Art Journal을 하나의 호로 엮습니다. 화요일과 금요일, 독립적인 시선으로 미술·음악·사회를 읽습니다.</p></div>'+
 '<div class="iv-subscribe-aside"><strong>최신 호의 레터를 먼저 읽어보세요.</strong>'+
 '<a class="iv-letter-link" href="#letter" data-go="letter">뉴스레터 미리보기 <span class="iv-letter-arrow" aria-hidden="true">↗</span></a>'+
 '<p>이메일 구독 신청과 자동 발송은 아직 제공하지 않습니다. 주소는 수집하지 않습니다.</p></div>'+
 '</div></section>';
};


/* 편집 흐름과 모션 */
(function(){
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 let observer=null,frame=0,article=null,progress=null;
 const animations=new Map(),seen=new WeakSet();
 function stop(){if(observer)observer.disconnect();observer=null;animations.forEach(a=>a.cancel());animations.clear()}
 function play(el,kind,delay=0){
  if(reduce.matches||!el.animate||seen.has(el))return;
  seen.add(el);
  const from=kind==='image'?{opacity:.2,transform:'scale(1.025)'}:{opacity:0,transform:'translateY(10px)'};
  const a=el.animate([from,{opacity:1,transform:'none'}],{duration:kind==='image'?650:410,delay,easing:'cubic-bezier(.2,.7,.2,1)'});
  animations.set(el,a);a.onfinish=()=>animations.delete(el);a.oncancel=()=>animations.delete(el);
 }
 function reveal(root){
  if(reduce.matches||!window.IntersectionObserver)return;
  observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){play(entry.target,entry.target.matches('.iv-art-zoom-stage img')?'image':'text',Number(entry.target.dataset.ivMotionDelay)||0);observer.unobserve(entry.target)}
  }),{threshold:.08,rootMargin:'0px 0px -24px 0px'});
  root.querySelectorAll('.iv-art-zoom-stage img,.iv-editorial-detail>.txt>h2,.iv-editorial-detail>.txt>.byline,.iv-body-section,.iv-editorial-detail>.txt>.look,.iv-editorial-detail>.txt>.facts,.iv-editorial-detail>.txt>.ask,.iv-editorial-detail>.txt>.analysis,.iv-editorial-detail>.txt>.tl,.v3-wordmark,.v3-copy,.v3-section,.hybrid-home .issue-head,.hybrid-home .story').forEach((el)=>observer.observe(el));
  document.querySelectorAll('.iv-endletter-copy,.iv-letter-slip,.iv-footer-main').forEach(el=>observer.observe(el));
  root.querySelectorAll('.hybrid-home .story,.v3-section').forEach((el,i)=>el.dataset.ivMotionDelay=String((i%3)*90));
  root.querySelectorAll('.iv-editorial-detail>.txt>h2,.iv-editorial-detail>.txt>.byline').forEach((el,i)=>el.dataset.ivMotionDelay=String(100+i*90));
 }
 function polish(detail,index){
  if(detail.dataset.ivPolished)return;detail.dataset.ivPolished='true';
  detail.classList.add('iv-editorial-detail','iv-tone-'+state.view);
  const txt=detail.querySelector('.txt'),body=txt?.querySelector('.body');if(!txt||!body)return;
  const legend=txt.querySelector('.legend');if(legend)legend.hidden=true;
  [['f','확인된 사실'],['i','해석']].forEach(([kind,label],i)=>{
   const paragraphs=Array.from(body.children).filter(el=>el.matches('p.'+kind));if(!paragraphs.length)return;
   const section=document.createElement('section');section.className='iv-body-section'+(kind==='i'?' iv-body-section--interpretation':'');
   const h=document.createElement('h3');h.id='iv-reading-'+index+'-'+kind;
   const n=document.createElement('span');n.textContent=String(i+1).padStart(2,'0');n.setAttribute('aria-hidden','true');h.append(n,document.createTextNode(label));section.setAttribute('aria-labelledby',h.id);
   paragraphs[0].before(section);section.append(h,...paragraphs);
  });
  const meta=document.createElement('p');meta.className='iv-reading-meta';meta.textContent='천천히 읽기 · 약 '+Math.max(1,Math.ceil(txt.textContent.replace(/\s/g,'').length/450))+'분';
  const byline=txt.querySelector('.byline');if(byline)byline.after(meta);
  const media=detail.querySelector('.iv-art-media'),button=media?.querySelector('.iv-art-open');
  if(button){const actions=document.createElement('div');actions.className='iv-art-actions';const original=media.querySelector('a');media.append(actions);actions.append(button);if(original)actions.append(original);const hint=media.querySelector('.iv-art-zoom-help');if(hint){hint.innerHTML='<span class="iv-motion-mouse-hint">마우스를 올리면 세부 확대 · </span>이미지를 누르면 크게 보기';media.append(hint)}}
 }
 function updateProgress(){
  frame=0;if(!article||!progress)return;
  const rect=article.getBoundingClientRect(),bar=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bar-h'))||64;
  const distance=Math.max(1,rect.height-window.innerHeight+bar+40);
  progress.firstElementChild.style.transform='scaleX('+Math.max(0,Math.min(1,(bar+24-rect.top)/distance))+')';
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(updateProgress)}
 function install(){
  stop();const app=document.getElementById('app');if(!app)return;
  app.querySelectorAll('.detail').forEach(polish);
  article=app.querySelector('.iv-editorial-detail');
  if(!progress){progress=document.createElement('div');progress.className='iv-reading-progress';progress.setAttribute('aria-hidden','true');progress.innerHTML='<span></span>';document.body.append(progress)}
  progress.hidden=!article;const color={album:'--pink',journal:'--yellow'}[state.view]||'--blue';progress.firstElementChild.style.background='var('+color+')';
  schedule();reveal(app);
 }
 const priorGo=go;go=function(view,history){priorGo(view,history);install()};
 window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});
 window.addEventListener('beforeprint',stop);
 reduce.addEventListener('change',()=>{stop();if(!reduce.matches)reveal(document.getElementById('app'))});
 document.addEventListener('focusin',e=>{animations.forEach((a,el)=>{if(el===e.target||el.contains(e.target))a.cancel()})});
})();

const effects=[];
const onRoute=effect=>effects.push(effect);
if(config.go2){
 const {installGo2}=await import(config.go2.module);
 installGo2(config.go2.content,onRoute);
}
const finalGo=go;
go=function(view,history){finalGo(view,history);effects.forEach(effect=>effect(view))};
initPrefs();
let initialView=location.hash.slice(1)||config.view;
go(NAV.some(item=>item[0]===initialView)||['all','subscribe'].includes(initialView)?initialView:config.view,true);

}
