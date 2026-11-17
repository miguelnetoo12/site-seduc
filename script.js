/* ===== Escola em Dia · SEDUC Piauí — versão 5 (layout de site) ===== */
const VERSAO='5';
const root=document.getElementById('app');
if(typeof ESCOLAS==='undefined'){
  root.innerHTML='<div style="max-width:560px;margin:80px auto;padding:24px;font-family:sans-serif;line-height:1.5"><h1 style="color:#a3311f;margin-bottom:10px">Arquivo escolas.js não encontrado</h1><p>Coloque o arquivo <b>escolas.js</b> na mesma pasta do <b>index.html</b> e recarregue a página (Ctrl+Shift+R).</p></div>';
  throw new Error('escolas.js não carregado');
}
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ===== Ícones ===== */
const P={
 drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
 roof:'<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
 bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
 toilet:'<path d="M6 3h5v8H6z"/><path d="M4 11h16a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z"/><path d="M9 17l-1 4h8l-1-4"/>',
 fan:'<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7 2 0 2 3 0 5-1.3 1.3-2.5 2-4 2zM14 12c4 0 7 1 7 4 0 2-3 2-5 0-1.3-1.3-2-2.5-2-4zM12 14c0 4-1 7-4 7-2 0-2-3 0-5 1.3-1.3 2.5-2 4-2zM10 12c-4 0-7-1-7-4 0-2 3-2 5 0 1.3 1.3 2 2.5 2 4z"/>',
 desk:'<path d="M3 9h18"/><path d="M5 9v11M19 9v11"/><path d="M8 4h8v5H8z"/>',
 bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
 dots:'<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
 list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
 pin:'<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
 bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
 camera:'<path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="4"/>',
 shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
 check:'<path d="M20 6 9 17l-5-5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 send:'<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/>',
 logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
 x:'<path d="M18 6 6 18M6 6l12 12"/>',
 school:'<path d="M2 10 12 5l10 5-10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
 clip:'<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9z"/><path d="M9 12h6M9 16h4"/>',
 chev:'<path d="m9 18 6-6-6-6"/>',
 chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
 alert:'<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
 map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
 inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5h13L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z"/>',
 access:'<circle cx="12" cy="4" r="2"/><path d="M11 7v7h6l3 5"/><path d="M8 10.5a6 6 0 1 0 7.5 8"/>',
 fence:'<path d="M5 21V7l2-3 2 3v14M15 21V7l2-3 2 3v14M9 10h6M9 16h6"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>'
};
const ic=(n,s=20)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;

/* ===== Dados ===== */
/* ESCOLAS, GRES e PI_MAPA vêm do arquivo escolas.js */
const TIPOS={'Falta de água':{p:'alta',ic:'drop'},'Banheiro quebrado':{p:'media',ic:'toilet'},'Telhado vazando':{p:'alta',ic:'roof'},'Carteiras quebradas':{p:'baixa',ic:'desk'},'Risco elétrico':{p:'alta',ic:'bolt'},'Falta de ventilação':{p:'media',ic:'fan'},'Iluminação danificada':{p:'baixa',ic:'bulb'},'Acessibilidade':{p:'media',ic:'access'},'Segurança (muro, portão)':{p:'alta',ic:'fence'},'Outro problema':{p:'media',ic:'dots'}};
const CATS=['Falta de água','Banheiro quebrado','Telhado vazando','Carteiras quebradas','Risco elétrico','Falta de ventilação','Acessibilidade','Segurança (muro, portão)'];
const CHECK=['Estrutura comprometida?','Risco elétrico identificado?','Acesso dos alunos afetado?','Necessita interdição imediata?'];
const ST={recebida:{l:'Recebida',c:'st-rec',ic:'clock'},fiscalizacao:{l:'Em fiscalização',c:'st-fis',ic:'search'},encaminhada:{l:'Reparo agendado',c:'st-enc',ic:'clip'},resolvida:{l:'Resolvida',c:'st-res',ic:'check'},improcedente:{l:'Não procede',c:'st-imp',ic:'x'}};
const PR={alta:{l:'Alta prioridade',s:'Alta',c:'p-alta'},media:{l:'Média prioridade',s:'Média',c:'p-media'},baixa:{l:'Baixa prioridade',s:'Baixa',c:'p-baixa'}};
const PO={alta:0,media:1,baixa:2};
const OPEN=['recebida','fiscalizacao','encaminhada'];
const H=36e5,D=24*H,NOW=Date.now();
let seq=842;
let DEN=[
 {id:1,prot:'#PI2026-0835',escola:117,tipo:'Telhado vazando',local:'Sala 07',desc:'Infiltração no teto da sala 07, goteiras durante a chuva, risco para alunos e equipamentos.',fotos:['ph:teto','ph:piso'],data:NOW-1.5*H,status:'recebida'},
 {id:2,prot:'#PI2026-0829',escola:39,tipo:'Banheiro quebrado',local:'Banheiros do bloco B',desc:'Banheiros interditados há uma semana, descargas quebradas e vazamento no piso.',fotos:['ph:banheiro'],data:NOW-D-3*H,status:'recebida'},
 {id:3,prot:'#PI2026-0811',escola:278,tipo:'Iluminação danificada',local:'Corredor principal',desc:'Lâmpadas queimadas e luminárias soltas no corredor principal.',data:NOW-12*D,status:'recebida'},
 {id:4,prot:'#PI2026-0841',escola:133,tipo:'Telhado vazando',local:'Sala 07',desc:'Quando chove, a água escorre pela parede e molha as carteiras do fundo.',fotos:['ph:teto'],data:NOW-5*H,status:'recebida',minha:true},
 {id:5,prot:'#PI2026-0793',escola:307,tipo:'Banheiro quebrado',local:'Banheiro masculino',desc:'Pia arrancada e duas portas sem trinco.',fotos:['ph:banheiro'],data:NOW-4*D,status:'fiscalizacao',minha:true,check:{2:true}},
 {id:6,prot:'#PI2026-0720',escola:239,tipo:'Falta de água',local:'Escola inteira',desc:'Caixa d’água vazia há três dias, aulas suspensas no turno da tarde.',data:NOW-14*D,status:'resolvida',minha:true,procede:true,parecer:'Bomba d’água substituída e caixa d’água higienizada. Abastecimento normalizado.'},
 {id:7,prot:'#PI2026-0802',escola:101,tipo:'Risco elétrico',local:'Laboratório de informática',desc:'Tomadas esquentando e fios expostos atrás das bancadas.',fotos:['ph:fios'],data:NOW-2*D,status:'fiscalizacao'},
 {id:8,prot:'#PI2026-0788',escola:395,tipo:'Carteiras quebradas',local:'Sala 03',desc:'Cerca de 10 carteiras com assento solto.',data:NOW-6*D,status:'recebida'},
 {id:9,prot:'#PI2026-0760',escola:420,tipo:'Falta de ventilação',local:'Salas 01 a 04',desc:'Ventiladores sem funcionar, salas muito quentes à tarde.',data:NOW-8*D,status:'encaminhada',procede:true,prazo:15,parecer:'Ventiladores das salas 01 a 04 com motor queimado. Substituição solicitada ao setor de manutenção.'},
 {id:10,prot:'#PI2026-0839',escola:166,tipo:'Falta de água',local:'Cozinha e bebedouros',desc:'Sem água desde ontem; merenda comprometida.',data:NOW-3*H,status:'recebida'}
].map(d=>({fotos:[],check:{},fotosV:[],minha:false,novo:false,prio:TIPOS[d.tipo].p,...d}));

/* ===== Estado da página ===== */
const S={
  app:'site',
  site:{logged:true,screen:'home',params:{}},
  aluno:{logged:false,screen:'login',params:{}},
  fiscal:{logged:false,screen:'login',params:{}},
  busca:'',greA:0,lim:15,filtroAluno:'todas',draft:null,
  greF:0,filtroLista:'todas',buscaF:'',report:null
};

/* ===== Utilidades ===== */
const ESC_IDX=new Map(ESCOLAS.map(e=>[e.id,e]));
const escola=id=>ESC_IDX.get(+id);
const pad=n=>String(n).padStart(2,'0');
const hm=t=>{const d=new Date(t);return pad(d.getHours())+':'+pad(d.getMinutes())};
const dmy=t=>{const d=new Date(t);return pad(d.getDate())+'/'+pad(d.getMonth()+1)+'/'+d.getFullYear()};
function fmtData(t){const d=new Date(t),n=new Date();const day=x=>new Date(x.getFullYear(),x.getMonth(),x.getDate()).getTime();const diff=Math.round((day(n)-day(d))/D);return diff===0?'Hoje, '+hm(t):diff===1?'Ontem, '+hm(t):pad(d.getDate())+'/'+pad(d.getMonth()+1)+', '+hm(t)}
function norm(s){return String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase()}
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),3000)}
function err(m){const e=$('#err');if(e)e.textContent=m;return false}
function maskCPF(el){let v=el.value.replace(/\D/g,'').slice(0,11);v=v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');el.value=v}
const cpfMask=c=>`***.${(c||'').slice(3,6)}.${(c||'').slice(6,9)}-**`;
const phImg=f=>f.startsWith('ph:')?`<div class="ph ph-${f.slice(3)}"></div><span class="ph-tag">foto de exemplo</span>`:`<img src="${f}" alt="Foto anexada">`;
const gallery=arr=>arr.length?`<div class="photos">${arr.map(f=>`<div class="photo">${phImg(f)}</div>`).join('')}</div>`:'<p class="muted">Nenhuma foto anexada.</p>';
const statusPill=d=>`<span class="pill ${ST[d.status].c}">${ic(ST[d.status].ic,13)} ${ST[d.status].l}</span>`;
const prioPill=d=>`<span class="pill ${PR[d.prio].c}">${PR[d.prio].s}</span>`;
const td=(l,html,cls='')=>`<td data-l="${l}"${cls?` class="${cls}"`:''}><div class="c">${html}</div></td>`;
const greOpts=sel=>`<option value="0">Todas as GREs</option>${Object.entries(GRES).map(([k,v])=>`<option value="${k}" ${sel==k?'selected':''}>${k}ª GRE · ${esc(v)}</option>`).join('')}`;

/* ===== Navegação ===== */
let lastKey='';
function render(){
  save();
  const a=S[S.app];
  if(!a.logged)a.screen='login';
  const key=S.app+a.screen+JSON.stringify(a.params);
  const y=window.scrollY;
  root.innerHTML=shell(SC[S.app+'_'+a.screen](a.params));
  const nova=key!==lastKey;
  root.classList.toggle('anim',nova);
  window.scrollTo(0,nova?0:y);
  if(nova)countUp();
  lastKey=key;
}
function countUp(){
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  document.querySelectorAll('[data-count]').forEach(el=>{const n=+el.dataset.count;if(!n)return;const t0=performance.now(),dur=900;
    const f=t=>{const p=Math.min(1,(t-t0)/dur);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};el.textContent='0';requestAnimationFrame(f)});
}
const SUB=['det','rel','relv'];
function go(s,p={}){const a=S[S.app];if(SUB.includes(s)&&!SUB.includes(a.screen))a.prev=a.screen;a.screen=s;a.params=p;render()}
function switchApp(a){S.app=a;lastKey='';render()}

/* ===== Estrutura do site ===== */
const brandMark=()=>`<span class="mk">${ic('school',22)}</span>`;
function shell(page){
  const fis=S.app==='fiscal'&&S.fiscal.logged;
  if(fis)return topbar(true)+`<div class="admin">${sidebar()}<main class="admin-main"><div class="admin-body">${page}</div>${footer(true)}</main></div>`;
  return topbar(false)+`<main class="site-main">${page}</main>${footer(false)}`;
}
function topbar(fis){
  const a=S.app,st=S[a];
  const cur=st.screen==='det'?'minhas':st.screen==='ok'?'nova':st.screen;
  let links=[];
  if(a==='aluno'&&st.logged)links=[['home','Início'],['nova','Nova denúncia'],['minhas','Minhas denúncias'],['mapa','Mapa']].map(([s,l])=>`<button class="${cur===s?'on':''}" onclick="${s==='nova'?'novaDen()':`go('${s}')`}">${l}</button>`);
  if(a==='site')links=[['problema','O problema'],['como','Como funciona'],['quem','Para quem'],['numeros','Números']].map(([s,l])=>`<button onclick="document.getElementById('${s}').scrollIntoView({behavior:'smooth'})">${l}</button>`);
  return `<header class="topbar"><div class="wrap ${fis?'wide':''} topbar-in">
    <button class="brand" onclick="switchApp('site')" aria-label="Página inicial">${brandMark()}<span><b>Escola em Dia</b><small>SEDUC · Piauí</small></span></button>
    ${links.length?`<nav class="topnav" aria-label="Menu principal">${links.join('')}</nav>`:'<span class="grow"></span>'}
    <div class="top-right">
      <div class="areas" aria-label="Escolher área"><button class="${a==='site'?'on':''}" onclick="switchApp('site')">Início</button><button class="${a==='aluno'?'on':''}" onclick="switchApp('aluno')">Aluno</button><button class="${a==='fiscal'?'on':''}" onclick="switchApp('fiscal')">Fiscal</button></div>
      ${fis?`<button class="userbtn only-m" onclick="sairF()" aria-label="Sair">${ic('logout',17)}</button>`:''}
      ${a==='aluno'&&st.logged?`<button class="userbtn ${cur==='perfil'?'on':''}" onclick="go('perfil')" aria-label="Meu perfil">${ic('user',17)}<span>Meu perfil</span></button>`:''}
    </div></div></header>`;
}
function sidebar(){
  const DG=DEN.filter(noGre);const pend=DG.filter(GF.pend).length,and=DG.filter(GF.fis).length;
  const sc=S.fiscal.screen;const cur=SUB.includes(sc)?(S.fiscal.prev||'lista'):sc;
  const it=(s,i,l,n)=>`<button class="${cur===s?'on':''}" onclick="go('${s}')">${ic(i,19)}<span>${l}</span>${n?`<em>${n}</em>`:''}</button>`;
  return `<aside class="side"><div class="side-lbl">Painel do Fiscal</div>
    <nav class="side-nav" aria-label="Menu do fiscal">${it('dash','chart','Visão geral')}${it('lista','inbox','Denúncias',pend)}${it('relatorios','clip','Relatórios',and)}</nav>
    <div class="side-foot"><div class="side-user"><span class="av">${ic('user',18)}</span><div><b>Fiscal SEDUC</b><small>CPF ${cpfMask(S.fiscal.cpf)}</small></div></div>
    <button class="btn line sm" onclick="sairF()">${ic('logout',16)} Sair</button></div></aside>`;
}
const footer=fis=>`<footer class="foot"><div class="wrap ${fis?'wide':''} foot-in"><span>Escola em Dia · protótipo de demonstração. Lista de escolas: SEDUC-PI, Edital GSE nº 47/2024, Anexo I.</span><span><button class="link-q" onclick="resetDemo()">Restaurar dados de exemplo</button><span class="sep">·</span>Versão ${VERSAO} · ${ESCOLAS.length} escolas carregadas</span></div></footer>`;
function phead(t,sub='',act='',crumbs=null){
  return `<div class="phead">${crumbs?`<nav class="crumbs" aria-label="Você está em">${crumbs.map(([l,on])=>on?`<button class="link-q" onclick="${on}">${l}</button>`:`<span>${l}</span>`).join('<span class="sep">›</span>')}</nav>`:''}
  <div class="phead-row"><div><h1>${t}</h1>${sub?`<p>${sub}</p>`:''}</div>${act?`<div class="phead-act">${act}</div>`:''}</div></div>`;
}

function heroArt(){
  const win=(x,y)=>`<rect x="${x}" y="${y}" width="28" height="32" rx="3" fill="#cfe6d8"/><path d="M${x+14} ${y}v32M${x} ${y+16}h28" stroke="#fff" stroke-width="2"/>`;
  return `<svg viewBox="0 0 480 400" class="art" aria-hidden="true">
  <circle cx="250" cy="215" r="178" fill="rgba(255,255,255,.06)"/><circle cx="250" cy="215" r="122" fill="rgba(255,255,255,.05)"/>
  <g class="cloud"><ellipse cx="352" cy="74" rx="44" ry="21" fill="#fff"/><ellipse cx="324" cy="82" rx="28" ry="17" fill="#fff"/><ellipse cx="380" cy="84" rx="26" ry="15" fill="#fff"/></g>
  <path class="drop d1" d="M330 102c-3 5-5 7-5 10a5 5 0 0 0 10 0c0-3-2-5-5-10z" fill="#8fd0ff"/>
  <path class="drop d2" d="M350 106c-3 5-5 7-5 10a5 5 0 0 0 10 0c0-3-2-5-5-10z" fill="#8fd0ff"/>
  <path class="drop d3" d="M368 100c-3 5-5 7-5 10a5 5 0 0 0 10 0c0-3-2-5-5-10z" fill="#8fd0ff"/>
  <rect x="70" y="332" width="360" height="8" rx="4" fill="rgba(255,255,255,.18)"/>
  <line x1="410" y1="332" x2="410" y2="200" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M412 202l34 10-34 12z" fill="#f5b800"/>
  <rect x="120" y="182" width="260" height="150" rx="6" fill="#fff"/>
  <rect x="120" y="182" width="260" height="12" fill="#e3ede7"/>
  <polygon points="106,186 250,110 394,186" fill="#f5b800"/>
  <path d="M318 146l-8 14 10 6-9 15" stroke="#6b4e00" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="222" y="150" width="56" height="22" rx="4" fill="#0a4a37"/><text x="250" y="165.5" text-anchor="middle" font-size="11" font-weight="800" fill="#fff" font-family="Inter,sans-serif" letter-spacing="1">ESCOLA</text>
  ${win(140,212)}${win(180,212)}${win(292,212)}${win(332,212)}${win(140,272)}${win(180,272)}${win(292,272)}${win(332,272)}
  <rect x="226" y="262" width="48" height="70" rx="4" fill="#0f5b44"/><circle cx="264" cy="298" r="3" fill="#f5b800"/>
  <g class="bob"><path d="M318 136c-9-12-16-18-16-27a16 16 0 0 1 32 0c0 9-7 15-16 27z" fill="#df4f3a"/><circle cx="318" cy="109" r="6" fill="#fff"/></g>
  </svg>`;
}

/* ===== Fotos ===== */
function resize(file){return new Promise(res=>{const r=new FileReader();r.onload=()=>{const img=new Image();img.onload=()=>{const k=Math.min(1,900/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=img.width*k;c.height=img.height*k;c.getContext('2d').drawImage(img,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',.82))};img.onerror=()=>res(null);img.src=r.result};r.readAsDataURL(file)})}
const fotoArr=k=>k==='draft'?S.draft.fotos:S.report.fotos;
function photoEditor(k){const arr=fotoArr(k);return `<div class="photos">${arr.map((f,i)=>`<div class="photo">${phImg(f)}<button class="rm" onclick="rmFoto('${k}',${i})" aria-label="Remover foto">${ic('x',14)}</button></div>`).join('')}</div>${arr.length<4?`<label class="addph">${ic('camera',20)} Adicionar fotos (até 4)<input type="file" accept="image/*" multiple hidden onchange="addFotos(this,'${k}')"></label>`:'<p class="hint">Máximo de 4 fotos.</p>'}`}
async function addFotos(input,k){const arr=fotoArr(k);for(const f of [...input.files].slice(0,4-arr.length)){const u=await resize(f);if(u)arr.push(u)}$('#ph').innerHTML=photoEditor(k)}
function rmFoto(k,i){fotoArr(k).splice(i,1);$('#ph').innerHTML=photoEditor(k)}

/* ===== Mapa ===== */
function mapSVG(){
  const fis=S.app==='fiscal'&&S.greF;const okE=e=>!fis||e.gre==S.greF;
  const by={};DEN.filter(d=>d.status==='recebida'||d.status==='fiscalizacao').forEach(d=>{(by[d.escola]??=[]).push(d)});
  let heat='',pins='',dots='';
  ESCOLAS.forEach(e=>{if(!okE(e))return;const L=by[e.id]||[];
    if(!L.length){dots+=`<circle class="pin" onclick="mapPick(${e.id})" cx="${e.x}" cy="${e.y}" r="1.6" fill="#9aa8a1"><title>${esc(e.nome)} · ${esc(e.cidade)}</title></circle>`;return}
    const top=Math.min(...L.map(d=>PO[d.prio]));const r=12+L.length*5;
    heat+=`<circle cx="${e.x}" cy="${e.y}" r="${r}" fill="url(#${['hr','ha','hg'][top]})"/>`;
    pins+=`<g class="pin" onclick="mapPick(${e.id})" transform="translate(${e.x},${e.y}) scale(.85)"><circle r="12" fill="transparent"/>${top===0?'<circle class="pulse" cy="-9.5" r="7" fill="#df4f3a"/>':''}<path d="M0 0c-3-4-5.5-6.5-5.5-9.5a5.5 5.5 0 0 1 11 0c0 3-2.5 5.5-5.5 9.5z" fill="#13201b"/><circle cy="-9.5" r="2.1" fill="#fff"/><title>${esc(e.nome)} · ${esc(e.cidade)}</title></g>`});
  const grad=[['hr','#df4f3a'],['ha','#efb12c'],['hg','#2f9a59']].map(([i,c])=>`<radialGradient id="${i}"><stop offset="0" stop-color="${c}" stop-opacity=".9"/><stop offset=".5" stop-color="${c}" stop-opacity=".4"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`).join('');
  const cities=Object.entries(PI_MAPA.cidades).map(([n,[x,y]])=>`<text x="${x+4}" y="${y+2.5}" font-size="7" fill="#46564e" font-weight="600" paint-order="stroke" stroke="#fff" stroke-width="2.2">${n}</text>`).join('');
  const n=ESCOLAS.filter(okE).length;
  return `<svg class="map" viewBox="${PI_MAPA.viewBox}" role="img" aria-label="Mapa de calor das denúncias por escola"><defs>${grad}<clipPath id="pi"><polygon points="${PI_MAPA.contorno}"/></clipPath></defs>
  <polygon points="${PI_MAPA.contorno}" fill="#fff" stroke="#2b3a33" stroke-width="1.1" stroke-linejoin="round"/>
  <g clip-path="url(#pi)">${heat}</g>${dots}${pins}${cities}</svg>
  <div class="maplegend"><span><i style="background:var(--red)"></i>Alta</span><span><i style="background:var(--amb)"></i>Média</span><span><i style="background:var(--grn)"></i>Baixa</span><span><i style="background:#9aa8a1"></i>${n} escolas</span></div>`;
}
function mapPick(id){const e=escola(id);const L=DEN.filter(d=>d.escola==id&&OPEN.includes(d.status));const box=$('#mapinfo');if(!box)return;
  box.innerHTML=`<div class="mapcard"><span class="eyebrow">${e.gre}ª GRE · ${esc(e.greNome)}</span><h3>${esc(e.nome)}</h3><p class="muted">${esc(e.cidade)}-PI · zona ${e.zona.toLowerCase()} · INEP ${e.inep}</p>
  <p class="mapcount">${L.length?`<b>${L.length}</b> denúncia${L.length>1?'s':''} em aberto`:'Nenhuma denúncia em aberto'}</p>
  ${S.app==='aluno'?`<button class="btn" onclick="novaDen({escola:${id}})">${ic('camera',18)} Denunciar nesta escola</button>`
   :L.map(d=>`<button class="qitem" onclick="go('det',{id:${d.id}})">${prioPill(d)}<span><b>${esc(d.tipo)}</b><small>${esc(d.local||'—')} · ${ST[d.status].l}</small></span>${ic('chev',16)}</button>`).join('')}</div>`;
  box.scrollIntoView({behavior:'smooth',block:'nearest'})}
const openSchools=()=>{const ids=[...new Set(DEN.filter(d=>OPEN.includes(d.status)).map(d=>d.escola))];return ids.map(escola).filter(Boolean)};

/* ===== Ações do aluno ===== */
function loginAluno(){const c=$('#cpf').value.replace(/\D/g,''),m=$('#mat').value.trim();if(c.length!==11)return err('Informe um CPF com 11 dígitos.');if(m.length<4)return err('Informe sua matrícula (mín. 4 caracteres).');S.aluno.logged=true;S.aluno.cpf=c;S.aluno.mat=m;go('home')}
function buscarEscolas(txt,lim=8){const ws=norm(txt.trim()).split(/\s+/).filter(Boolean);if(!ws.length)return {L:[],n:0};const all=ESCOLAS.filter(e=>{const h=e._h||(e._h=norm(e.nome+' '+e.cidade+' '+e.greNome+' gre'+e.gre+' '+e.inep));return ws.every(w=>h.includes(w))});const sc=e=>{const nc=norm(e.nome+' '+e.cidade);return ws.every(w=>nc.includes(w))?0:1};all.sort((x,y)=>sc(x)-sc(y));return {L:all.slice(0,lim),n:all.length}}
function resList(){
  const q=S.busca.trim();let L,n;
  if(q)({L,n}=buscarEscolas(q,S.lim));else{const all=S.greA?ESCOLAS.filter(e=>e.gre==S.greA):ESCOLAS;n=all.length;L=all.slice(0,S.lim)}
  const lbl=`${n} escola${n==1?'':'s'}${q?' encontrada'+(n==1?'':'s'):S.greA?' na '+S.greA+'ª GRE':' da rede estadual'}`;
  return `<p class="count">${lbl}</p>${L.length?`<div class="tblwrap"><table class="tbl"><thead><tr><th>Escola</th><th>Município</th><th>Regional</th><th>Zona</th><th><span class="sr">Ação</span></th></tr></thead><tbody>${L.map(e=>`<tr>${td('Escola',`<b>${esc(e.nome)}</b><small>INEP ${e.inep}${e.oferta?' · '+esc(e.oferta):''}</small>`,'main')}${td('Município',esc(e.cidade))}${td('Regional',`${e.gre}ª GRE<small>${esc(e.greNome)}</small>`)}${td('Zona',e.zona)}<td class="ta-r"><button class="btn sm ghost" onclick="novaDen({escola:${e.id}})">Denunciar</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">Nenhuma escola encontrada.</div>'}
  ${n>L.length?`<button class="more" onclick="S.lim+=20;$('#res').innerHTML=resList()">Mostrar mais escolas (${n-L.length} restantes)</button>`:''}`;
}
function escPicker(){const d=S.draft,e=escola(d.escola);
  if(e)return `<div class="selesc"><div><b>${esc(e.nome)}</b><small>${esc(e.cidade)}-PI · INEP ${e.inep}</small></div><button class="link-q" onclick="trocarEsc()">Trocar</button></div>`;
  return `<div class="field"><span class="lead">${ic('search',18)}</span><input class="inp" id="f-esc" placeholder="Digite o nome da escola, a cidade ou o código INEP" value="${esc(d.q||'')}" oninput="S.draft.q=this.value;$('#escres').innerHTML=escRes()" autocomplete="off"></div><div id="escres">${escRes()}</div>`}
function escRes(){const q=S.draft.q||'';if(!q.trim())return '';const {L,n}=buscarEscolas(q,6);
  return `<div class="reslist">${L.length?L.map(e=>`<button class="res" onclick="pickEsc(${e.id})"><span>${esc(e.nome)}</span><small>${esc(e.cidade)}-PI</small></button>`).join('')+(n>L.length?`<div class="res-empty">+ ${n-L.length} escolas. Refine a busca.</div>`:''):'<div class="res-empty">Nenhuma escola encontrada.</div>'}</div>`}
function pickEsc(id){S.draft.escola=id;$('#escpick').innerHTML=escPicker();$('#locbox').innerHTML=locBox(id)}
function trocarEsc(){S.draft.escola='';S.draft.q='';$('#escpick').innerHTML=escPicker();$('#locbox').innerHTML=locBox('');$('#f-esc').focus()}
function locBox(id){const e=escola(id);if(!e)return '<p class="muted">Escolha a escola para ver o município, a regional e o código INEP.</p>';
  return `<dl class="dl"><div><dt>Município</dt><dd>${esc(e.cidade)}/PI</dd></div><div><dt>Regional</dt><dd>${e.gre}ª GRE · ${esc(e.greNome)}</dd></div><div><dt>Zona</dt><dd>${e.zona}</dd></div><div><dt>Código INEP</dt><dd>${e.inep}</dd></div>${e.oferta?`<div><dt>Oferta</dt><dd>${esc(e.oferta)}</dd></div>`:''}</dl>`}
function novaDen(pre={}){S.draft={escola:pre.escola||'',q:'',tipo:pre.tipo||'',local:'',desc:'',fotos:[]};go('nova')}
function enviarDen(){const d=S.draft;if(!d.escola)return err('Busque e selecione a escola.');if(!d.tipo)return err('Selecione o tipo do problema.');if(d.desc.trim().length<10)return err('Descreva o problema com um pouco mais de detalhe.');
  const prot='#PI2026-'+String(++seq).padStart(4,'0');
  DEN.unshift({id:Date.now(),prot,escola:+d.escola,tipo:d.tipo,local:d.local.trim(),desc:d.desc.trim(),fotos:[...d.fotos],data:Date.now(),status:'recebida',prio:TIPOS[d.tipo].p,minha:true,novo:true,check:{},fotosV:[]});
  const id=DEN[0].id;S.draft=null;S.filtroAluno='todas';go('ok',{id})}
const chipA=(k,l)=>`<button class="btn sm ${S.filtroAluno===k?'':'line'}" onclick="S.filtroAluno='${k}';render()">${l}</button>`;

/* ===== Ações do fiscal ===== */
function loginFiscal(){const c=$('#cpf').value.replace(/\D/g,''),k=$('#cod').value.trim();if(c.length!==11)return err('Informe um CPF com 11 dígitos.');if(k.length<4)return err('Código fiscal inválido.');S.fiscal.logged=true;S.fiscal.cpf=c;go('dash')}
function demoAluno(){Object.assign(S.aluno,{logged:true,cpf:'12345678900',mat:'2026001',screen:'home',params:{}});S.app='aluno';lastKey='';render();toast('Você entrou como aluno de demonstração')}
function demoFiscal(){Object.assign(S.fiscal,{logged:true,cpf:'98765432100',screen:'dash',params:{}});S.app='fiscal';lastKey='';render();toast('Você entrou como fiscal de demonstração')}
function sairF(){S.fiscal.logged=false;go('login');toast('Sessão encerrada')}
function bell(){const n=DEN.filter(d=>d.novo).length;DEN.forEach(d=>d.novo=false);S.filtroLista='pend';go('lista');toast(n?`${n} nova(s) denúncia(s) na lista de pendentes`:'Sem novas notificações')}
const noGre=d=>!S.greF||escola(d.escola)?.gre==S.greF;
const GF={todas:()=>true,pend:d=>d.status==='recebida',fis:d=>d.status==='fiscalizacao',con:d=>['encaminhada','resolvida','improcedente'].includes(d.status)};
const greSel=()=>`<select class="inp sel-sm" aria-label="Filtrar por GRE" onchange="S.greF=+this.value;render()">${greOpts(S.greF)}</select>`;
const greTxt=()=>S.greF?`${S.greF}ª GRE · ${GRES[S.greF]}`:'todas as GREs';
const bellBtn=()=>{const n=DEN.filter(d=>d.novo).length;return `<button class="iconbtn" onclick="bell()" aria-label="Notificações">${ic('bell',20)}${n?`<span class="dot">${n}</span>`:''}</button>`};
const chipF=(k,l)=>`<button class="btn sm ${S.filtroLista===k?'':'line'}" onclick="S.filtroLista='${k}';render()">${l} (${DEN.filter(noGre).filter(GF[k]).length})</button>`;
function tabelaF(){
  const q=norm(S.buscaF.trim());
  const L=DEN.filter(noGre).filter(GF[S.filtroLista]).filter(d=>{const e=escola(d.escola);return !q||norm(e.nome+' '+e.cidade+' '+d.tipo+' '+d.prot).includes(q)}).sort((a,b)=>PO[a.prio]-PO[b.prio]||b.data-a.data);
  if(!L.length)return '<div class="empty">Nenhuma denúncia encontrada.</div>';
  return `<div class="tblwrap"><table class="tbl click"><thead><tr><th>Prioridade</th><th>Protocolo</th><th>Escola</th><th>Problema</th><th>Recebida</th><th>Status</th><th><span class="sr">Ação</span></th></tr></thead><tbody>${L.map(d=>{const e=escola(d.escola);
    return `<tr onclick="go('det',{id:${d.id}})">${td('Prioridade',prioPill(d)+(d.novo?' <span class="pill st-new">Nova</span>':''))}${td('Protocolo',`<span class="mono">${d.prot}</span>`)}${td('Escola',`<b>${esc(e.nome)}</b><small>${esc(e.cidade)}-PI · ${e.gre}ª GRE</small>`,'main')}${td('Problema',`${esc(d.tipo)}<small>${esc(d.local||'')}</small>`)}${td('Recebida',fmtData(d.data))}${td('Status',statusPill(d))}<td class="ta-r"><button class="btn sm ghost" onclick="event.stopPropagation();go('det',{id:${d.id}})">Abrir</button></td></tr>`}).join('')}</tbody></table></div>`;
}
function togChk(id,i){const d=DEN.find(x=>x.id===id);d.check[i]=!d.check[i];render()}
function iniciar(id){const d=DEN.find(x=>x.id===id);d.status='fiscalizacao';d.dataIni=Date.now();S.report={id,procede:null,fotos:[],parecer:'',prazo:7};go('rel',{id});toast('Fiscalização iniciada. O aluno verá o novo status.')}
function abrirRel(id){if(!S.report||S.report.id!==id)S.report={id,procede:null,fotos:[],parecer:'',prazo:7};go('rel',{id})}
function confirmarReparo(id){const d=DEN.find(x=>x.id===id);d.status='resolvida';d.dataRes=Date.now();render();toast('Reparo confirmado. Denúncia marcada como resolvida.')}
function sugerir(id){const d=DEN.find(x=>x.id===id),e=escola(d.escola),r=S.report;const marks=CHECK.filter((c,i)=>d.check[i]).map(c=>c.replace('?','').toLowerCase());let t;
  if(r.procede===false)t=`Vistoria realizada em ${e.nome}. O problema relatado (${d.tipo.toLowerCase()}${d.local?' – '+d.local:''}) não foi constatado no local. Denúncia considerada improcedente.`;
  else t=`Confirmado: ${d.tipo.toLowerCase()}${d.local?' em '+d.local:''}. `+(marks.length?`Itens verificados: ${marks.join('; ')}. `:'Nenhum item crítico do checklist identificado. ')+`Recomenda-se reparo ${d.prio==='alta'?'imediato':'programado'}${d.check[3]?' e isolamento da área até a conclusão':''}. Ação necessária em até ${r.prazo} dias.`;
  r.parecer=t;$('#par').value=t}
function finalizar(id){const d=DEN.find(x=>x.id===id),r=S.report;if(r.procede===null)return err('Indique se a denúncia procede.');if(r.parecer.trim().length<15)return err('Escreva o parecer do fiscal (mín. 15 caracteres).');
  Object.assign(d,{procede:r.procede,parecer:r.parecer.trim(),fotosV:[...r.fotos],prazo:r.procede?r.prazo:null,status:r.procede?'encaminhada':'improcedente',dataRel:Date.now()});
  S.report=null;S.fiscal.prev='relatorios';go('relv',{id});toast('Relatório enviado para a SEDUC '+d.prot)}
const checklist=(d,locked)=>CHECK.map((c,i)=>`<button class="chk ${d.check[i]?'on':''}" ${locked?'disabled':''} onclick="togChk(${d.id},${i})"><span class="box">${ic('check',15)}</span>${c}</button>`).join('');
const bars=rows=>{const max=Math.max(1,...rows.map(r=>r[1]));return rows.length?`<div class="bars">${rows.map(([l,n])=>`<div class="bar-row"><span title="${esc(l)}">${esc(l)}</span><div class="bar-track"><i style="width:${n/max*100}%"></i></div><b>${n}</b></div>`).join('')}</div>`:'<div class="empty">Sem denúncias em aberto.</div>'};
const crumbF=()=>{const p=S.fiscal.prev||'lista';return [{dash:'Visão geral',lista:'Denúncias',relatorios:'Relatórios'}[p]||'Denúncias',`go('${p}')`]};

/* ===== Páginas ===== */
const SC={

/* ---------- APRESENTAÇÃO ---------- */
site_home:()=>{const tot=DEN.length,res=DEN.filter(d=>d.status==='resolvida').length;
  const li=t=>`<li>${ic('check',17)}<span>${t}</span></li>`;
  return `<section class="lp-hero"><div class="wrap lp-hero-grid">
    <div class="lp-txt">
      <span class="eyebrow">Projeto de solução · Infraestrutura escolar no Piauí</span>
      <h1>Problema na escola? <em>Denuncie e acompanhe até o conserto.</em></h1>
      <p>O Escola em Dia liga alunos e fiscais da SEDUC: quem estuda registra o problema com fotos, o fiscal faz a vistoria e a resposta volta para quem denunciou.</p>
      <div class="lp-cta"><button class="btn acc" onclick="demoAluno()">${ic('user',18)} Testar como aluno</button><button class="btn outline" onclick="demoFiscal()">${ic('clip',18)} Testar como fiscal</button></div>
      <p class="lp-note">Protótipo de demonstração: os botões entram direto, sem precisar de CPF.</p>
    </div>
    <div class="lp-art">${heroArt()}
      <div class="float f1"><span class="fi red">${ic('roof',18)}</span><div><b>Telhado vazando</b><small>Sala 07 · denúncia recebida</small></div></div>
      <div class="float f2"><span class="fi green">${ic('check',18)}</span><div><b>Vistoria concluída</b><small>Reparo em até 7 dias</small></div></div>
    </div></div></section>

  <section class="lp-sec" id="problema"><div class="wrap">
    <div class="lp-head"><span class="eyebrow">O problema</span><h2>Quando ninguém registra, o problema não chega a quem resolve</h2></div>
    <div class="lp-grid3">
      <div class="lp-card"><span class="lp-ic red">${ic('alert',22)}</span><h3>Problemas sem registro</h3><p>Telhado vazando, banheiro quebrado e falta de água viram rotina porque não existe um canal simples para avisar.</p></div>
      <div class="lp-card"><span class="lp-ic amb">${ic('search',22)}</span><h3>Sem prioridade</h3><p>Sem dados organizados, fica difícil saber quais escolas precisam de atenção primeiro.</p></div>
      <div class="lp-card"><span class="lp-ic blue">${ic('clock',22)}</span><h3>Sem retorno</h3><p>Quem denuncia não sabe se alguém viu o problema, nem quando o conserto vai acontecer.</p></div>
    </div></div></section>

  <section class="lp-sec alt" id="como"><div class="wrap">
    <div class="lp-head"><span class="eyebrow">Como funciona</span><h2>Do celular do aluno até o conserto</h2></div>
    <ol class="lp-steps">${[['camera','O aluno denuncia','Escolhe a escola entre as '+ESCOLAS.length+' da rede, o tipo de problema e anexa fotos.'],['inbox','A SEDUC organiza','A denúncia entra no painel com prioridade automática e aparece no mapa de calor.'],['clip','O fiscal vistoria','Ele vai até a escola, marca o checklist e escreve o parecer com fotos.'],['check','O aluno acompanha','Cada etapa aparece para quem denunciou, até o reparo ser concluído.']].map(([i,t,p],k)=>`<li><span class="lp-num">${k+1}</span><span class="lp-ic">${ic(i,22)}</span><h3>${t}</h3><p>${p}</p></li>`).join('')}</ol>
  </div></section>

  <section class="lp-sec" id="quem"><div class="wrap">
    <div class="lp-head"><span class="eyebrow">Para quem</span><h2>Duas áreas, um só sistema</h2></div>
    <div class="lp-grid2">
      <div class="lp-role"><span class="lp-ic">${ic('user',24)}</span><h3>Área do aluno</h3><ul>${li('Busca entre as '+ESCOLAS.length+' escolas da rede estadual')}${li('Denúncia com fotos em menos de 2 minutos')}${li('Identidade em sigilo: a escola não vê quem enviou')}${li('Acompanhamento de cada etapa pelo protocolo')}</ul><button class="btn" onclick="demoAluno()">Testar como aluno ${ic('arrow',18)}</button></div>
      <div class="lp-role dark"><span class="lp-ic">${ic('clip',24)}</span><h3>Área do fiscal</h3><ul>${li('Mapa de calor das denúncias por escola')}${li('Fila por prioridade e filtro pelas '+Object.keys(GRES).length+' GREs')}${li('Checklist e relatório de vistoria com fotos')}${li('Indicadores por tipo de problema e por regional')}</ul><button class="btn acc" onclick="demoFiscal()">Testar como fiscal ${ic('arrow',18)}</button></div>
    </div></div></section>

  <section class="lp-sec alt" id="numeros"><div class="wrap">
    <div class="lp-head"><span class="eyebrow">Números da demonstração</span><h2>O que já está no sistema</h2></div>
    <div class="lp-nums"><div><b data-count="${ESCOLAS.length}">${ESCOLAS.length}</b><span>escolas estaduais cadastradas</span></div><div><b data-count="${Object.keys(GRES).length}">${Object.keys(GRES).length}</b><span>regionais de educação (GREs)</span></div><div><b data-count="${tot}">${tot}</b><span>denúncias de exemplo</span></div><div><b data-count="${res}">${res}</b><span>já resolvidas</span></div></div>
    <p class="lp-src">Lista oficial de escolas: SEDUC-PI, Edital GSE nº 47/2024, Anexo I. As denúncias são fictícias, criadas para a demonstração.</p>
  </div></section>

  <section class="lp-band"><div class="wrap lp-band-in"><div><h2>Experimente agora</h2><p>Envie uma denúncia como aluno e depois veja ela chegar no painel do fiscal.</p></div>
    <div class="lp-cta"><button class="btn acc" onclick="demoAluno()">Testar como aluno</button><button class="btn outline" onclick="demoFiscal()">Testar como fiscal</button></div></div></section>`},

/* ---------- ALUNO ---------- */
aluno_ok:p=>{const d=DEN.find(x=>x.id===p.id);if(!d)return SC.aluno_minhas();const e=escola(d.escola);
  return `<div class="wrap"><section class="card okcard">
    <div class="okmark"><svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24"/><path d="M15 27l7 7 15-15"/></svg></div>
    <h1>Denúncia enviada!</h1><p class="muted">Ela já está no painel da SEDUC, na fila de vistoria.</p>
    <div class="okprot"><span>Seu protocolo</span><b>${d.prot}</b></div>
    <dl class="dl okdl"><div><dt>Problema</dt><dd>${esc(d.tipo)}</dd></div><div><dt>Escola</dt><dd>${esc(e.nome)}</dd></div><div><dt>Prioridade</dt><dd>${prioPill(d)}</dd></div></dl>
    <div class="oknext"><b>O que acontece agora</b><ol><li>Um fiscal da ${e.gre}ª GRE (${esc(e.greNome)}) recebe a denúncia.</li><li>Ele faz a vistoria na escola e registra o parecer.</li><li>Você acompanha cada etapa pelo protocolo.</li></ol></div>
    <div class="actions" style="justify-content:center"><button class="btn line" onclick="go('home')">Voltar ao início</button><button class="btn" onclick="go('det',{id:${d.id}})">Acompanhar denúncia ${ic('arrow',18)}</button></div>
    <p class="hint">Dica: troque para a área do <button class="link-q" onclick="demoFiscal()">Fiscal</button> e veja essa denúncia chegar marcada como "Nova".</p>
  </section></div>`},
aluno_login:()=>`<section class="hero"><div class="wrap hero-grid">
  <div class="hero-txt">
    <span class="eyebrow">Infraestrutura das escolas estaduais</span>
    <h1>Viu um problema na sua escola? <em>Denuncie.</em></h1>
    <p>Telhado vazando, falta de água, banheiro quebrado... Envie fotos e acompanhe pelo protocolo até o reparo. Sua identidade fica em sigilo.</p>
    <ol class="steps3">
      <li><b>1</b><div><strong>Você denuncia</strong><span>Escolha a escola, o tipo de problema e anexe fotos.</span></div></li>
      <li><b>2</b><div><strong>Um fiscal faz a vistoria</strong><span>A SEDUC confere no local e registra o parecer.</span></div></li>
      <li><b>3</b><div><strong>Você acompanha</strong><span>Veja cada etapa até o reparo ser concluído.</span></div></li>
    </ol>
    <div class="hero-stats"><div><b>${ESCOLAS.length}</b><span>escolas estaduais</span></div><div><b>${Object.keys(GRES).length}</b><span>regionais (GREs)</span></div><div><b>Sigilo</b><span>de quem denuncia</span></div></div>
  </div>
  <div class="card login-card">
    <h2>Entrar</h2><p class="muted">Acesso para alunos e funcionários das escolas.</p>
    <button class="btn demo" onclick="demoAluno()">${ic('arrow',18)} Entrar como aluno de demonstração</button>
    <div class="or"><span>ou entre com seus dados</span></div>
    <label class="lbl" style="margin-top:16px" for="cpf">CPF</label>
    <div class="field"><span class="lead">${ic('user',18)}</span><input class="inp" id="cpf" inputmode="numeric" placeholder="000.000.000-00" oninput="maskCPF(this)" autocomplete="off"></div>
    <label class="lbl" for="mat">Matrícula</label>
    <div class="field"><span class="lead">${ic('lock',18)}</span><input class="inp" id="mat" placeholder="Digite sua matrícula" autocomplete="off" onkeydown="if(event.key==='Enter')loginAluno()"></div>
    <div class="err" id="err"></div>
    <button class="btn block" onclick="loginAluno()">Entrar</button>
    <p class="hint" style="text-align:center"><button class="link-q" onclick="toast('Procure a secretaria da sua escola para recuperar a matrícula.')">Esqueceu sua matrícula?</button></p>
    <div class="proto">Protótipo de demonstração. Use dados fictícios, por exemplo: 123.456.789-00 / 2026001</div>
    <p class="hint" style="text-align:center">É fiscal da SEDUC? <button class="link-q" onclick="switchApp('fiscal')">Acesse a área do fiscal</button></p>
  </div></div></section>`,

aluno_home:()=>{const mine=DEN.filter(d=>d.minha);return `<section class="band"><div class="wrap band-in">
    <div><h1>Olá! O que você quer fazer hoje?</h1><p>Encontre sua escola e registre o problema. Leva menos de 2 minutos.</p></div>
    <button class="btn lg" onclick="novaDen()">${ic('camera',20)} Nova denúncia</button></div></section>
  <div class="wrap grid-main">
    <section class="card">
      <div class="card-h"><h2>Escolas da rede estadual</h2></div>
      <div class="toolbar">
        <div class="field"><span class="lead">${ic('search',18)}</span><input class="inp" id="busca" placeholder="Buscar por nome, cidade ou código INEP" value="${esc(S.busca)}" oninput="S.busca=this.value;S.lim=15;$('#res').innerHTML=resList()" autocomplete="off"></div>
        <select class="inp sel-sm" aria-label="Filtrar por GRE" onchange="S.greA=+this.value;S.lim=15;$('#res').innerHTML=resList()">${greOpts(S.greA)}</select>
      </div>
      <div id="res">${resList()}</div>
    </section>
    <aside class="stack">
      <section class="card"><h2 style="margin-bottom:14px">Denunciar por categoria</h2>
        <div class="cats">${CATS.map(t=>`<button class="cat" onclick="novaDen({tipo:'${t}'})">${ic(TIPOS[t].ic,20)}<span>${t}</span></button>`).join('')}</div></section>
      <section class="card"><div class="card-h" style="margin-bottom:4px"><h2>Minhas denúncias</h2>${mine.length?`<button class="link-q" onclick="go('minhas')">Ver todas</button>`:''}</div>
        ${mine.length?mine.slice(0,4).map(d=>`<button class="qitem" onclick="go('det',{id:${d.id}})"><span><b>${esc(d.tipo)}</b><small>${esc(escola(d.escola).nome)}</small></span>${statusPill(d)}</button>`).join(''):'<p class="muted">Você ainda não enviou denúncias.</p>'}</section>
      <section class="card note">${ic('shield',22)}<div><b>Denúncia sigilosa</b><p>A escola não vê quem enviou. Só o protocolo é compartilhado com a SEDUC.</p></div></section>
    </aside>
  </div>`},

aluno_nova:()=>{const d=S.draft||(S.draft={escola:'',q:'',tipo:'',local:'',desc:'',fotos:[]});return `<div class="wrap">
  ${phead('Fazer denúncia','Os campos marcados com * são obrigatórios.','',[['Início',"go('home')"],['Nova denúncia']])}
  <div class="grid-form">
    <section class="card">
      <label class="lbl" for="f-esc">Escola <i>*</i></label>
      <div id="escpick">${escPicker()}</div>
      <div class="row2">
        <div><label class="lbl" for="f-tipo">Tipo do problema <i>*</i></label>
          <select class="inp" id="f-tipo" onchange="S.draft.tipo=this.value"><option value="">Escolha o tipo…</option>${Object.keys(TIPOS).map(t=>`<option ${t===d.tipo?'selected':''}>${t}</option>`).join('')}</select></div>
        <div><label class="lbl" for="f-local">Onde na escola?</label>
          <input class="inp" id="f-local" placeholder="Ex.: Sala 07, banheiro masculino" value="${esc(d.local)}" oninput="S.draft.local=this.value"></div>
      </div>
      <label class="lbl" for="f-desc">Descrição <i>*</i></label>
      <textarea class="inp" id="f-desc" placeholder="Descreva o problema: o que aconteceu, desde quando e quem é afetado." oninput="S.draft.desc=this.value">${esc(d.desc)}</textarea>
      <label class="lbl">Fotos</label>
      <div id="ph">${photoEditor('draft')}</div>
      <div class="err" id="err"></div>
      <div class="actions"><button class="btn line" onclick="go('home')">Cancelar</button><button class="btn" onclick="enviarDen()">${ic('shield',18)} Enviar denúncia sigilosa</button></div>
    </section>
    <aside class="stack sticky">
      <section class="card"><h2 style="margin-bottom:12px">Localização</h2><div id="locbox">${locBox(d.escola)}</div></section>
      <section class="card note">${ic('shield',22)}<div><b>Sua identidade é protegida</b><p>A escola não vê quem enviou a denúncia.</p></div></section>
      <section class="card note">${ic('camera',22)}<div><b>Dicas para uma boa denúncia</b><ul><li>Fotografe de perto e de longe</li><li>Informe a sala ou o bloco</li><li>Diga há quanto tempo o problema existe</li></ul></div></section>
    </aside>
  </div></div>`},

aluno_minhas:()=>{const mine=DEN.filter(d=>d.minha);const and=mine.filter(d=>OPEN.includes(d.status)),con=mine.filter(d=>!OPEN.includes(d.status));const L=S.filtroAluno==='and'?and:S.filtroAluno==='con'?con:mine;
  return `<div class="wrap">
  ${phead('Minhas denúncias','Acompanhe o andamento de cada denúncia pelo protocolo.',`<button class="btn" onclick="novaDen()">${ic('camera',18)} Nova denúncia</button>`)}
  <section class="card">
    <div class="toolbar">${chipA('todas',`Todas (${mine.length})`)}${chipA('and',`Em andamento (${and.length})`)}${chipA('con',`Concluídas (${con.length})`)}</div>
    ${L.length?`<div class="tblwrap"><table class="tbl click"><thead><tr><th>Protocolo</th><th>Problema</th><th>Escola</th><th>Enviada em</th><th>Status</th><th><span class="sr">Ação</span></th></tr></thead><tbody>${L.map(d=>{const e=escola(d.escola);
      return `<tr onclick="go('det',{id:${d.id}})">${td('Protocolo',`<span class="mono">${d.prot}</span>`)}${td('Problema',`<b>${esc(d.tipo)}</b><small>${esc(d.local||'')}</small>`,'main')}${td('Escola',`${esc(e.nome)}<small>${esc(e.cidade)}-PI</small>`)}${td('Enviada em',dmy(d.data))}${td('Status',statusPill(d))}<td class="ta-r"><button class="btn sm ghost" onclick="event.stopPropagation();go('det',{id:${d.id}})">Acompanhar</button></td></tr>`}).join('')}</tbody></table></div>`:'<div class="empty">Nenhuma denúncia aqui ainda.</div>'}
  </section></div>`},

aluno_det:p=>{const d=DEN.find(x=>x.id===p.id);if(!d)return SC.aluno_minhas();const e=escola(d.escola);
  const imp=d.status==='improcedente';const idx={recebida:0,fiscalizacao:1,encaminhada:2,resolvida:3,improcedente:2}[d.status];
  const steps=[['Recebida','Sua denúncia chegou à SEDUC'],['Em fiscalização','Um fiscal foi designado para a vistoria'],imp?['Não procede','A vistoria não confirmou o problema']:['Vistoria concluída',d.prazo?`Reparo previsto em até ${d.prazo} dias`:'Reparo encaminhado'],...(imp?[]:[['Resolvida','Reparo concluído na escola']])];
  return `<div class="wrap">
  ${phead(esc(d.tipo),`${esc(e.nome)} · ${esc(d.local||'—')}`,statusPill(d),[['Minhas denúncias',"go('minhas')"],[d.prot]])}
  <div class="grid-2">
    <div class="stack">
      ${d.parecer?`<section class="parecer"><b>Parecer do fiscal</b>${esc(d.parecer)}</section>`:''}
      <section class="card"><div class="sec">Descrição</div><p class="txt">${esc(d.desc)}</p>
        <div class="sec">Fotos enviadas</div>${gallery(d.fotos)}</section>
    </div>
    <aside class="stack">
      <section class="card"><h2 style="margin-bottom:16px">Andamento</h2>
        <div class="tl">${steps.map((s,i)=>`<div class="step ${i<=idx?'done':''}"><span class="bd">${i<=idx?ic('check',14):''}</span><div><b>${s[0]}</b><small>${s[1]}</small></div></div>`).join('')}</div></section>
      <section class="card"><h2 style="margin-bottom:12px">Dados da denúncia</h2>
        <dl class="dl"><div><dt>Protocolo</dt><dd>${d.prot}</dd></div><div><dt>Enviada em</dt><dd>${dmy(d.data)}</dd></div><div><dt>Escola</dt><dd>${esc(e.nome)}</dd></div><div><dt>Município</dt><dd>${esc(e.cidade)}/PI</dd></div><div><dt>Regional</dt><dd>${e.gre}ª GRE</dd></div></dl></section>
    </aside>
  </div></div>`},

aluno_mapa:()=>{const L=openSchools();return `<div class="wrap">
  ${phead('Mapa de denúncias','Clique em uma escola no mapa para ver os detalhes ou fazer uma denúncia.')}
  <div class="grid-2">
    <section class="card"><div class="mapwrap">${mapSVG()}</div></section>
    <aside class="stack">
      <section class="card" id="mapinfo"><p class="muted">Nenhuma escola selecionada. Clique em um ponto do mapa.</p></section>
      <section class="card"><h2 style="margin-bottom:6px">Escolas com denúncias em aberto</h2>
        ${L.length?L.map(e=>`<button class="qitem" onclick="mapPick(${e.id})"><span><b>${esc(e.nome)}</b><small>${esc(e.cidade)}-PI · ${e.gre}ª GRE</small></span>${ic('chev',16)}</button>`).join(''):'<p class="muted">Nenhuma.</p>'}</section>
    </aside>
  </div></div>`},

aluno_perfil:()=>{const mine=DEN.filter(d=>d.minha);return `<div class="wrap">
  ${phead('Meu perfil')}
  <div class="grid-2">
    <section class="card"><h2 style="margin-bottom:12px">Dados de acesso</h2>
      <dl class="dl"><div><dt>CPF</dt><dd>${cpfMask(S.aluno.cpf)}</dd></div><div><dt>Matrícula</dt><dd>${esc(S.aluno.mat||'')}</dd></div><div><dt>Denúncias enviadas</dt><dd>${mine.length}</dd></div><div><dt>Resolvidas</dt><dd>${mine.filter(d=>d.status==='resolvida').length}</dd></div></dl>
      <div class="actions" style="justify-content:flex-start"><button class="btn danger" onclick="S.aluno.logged=false;go('login');toast('Você saiu da conta')">${ic('logout',18)} Sair da conta</button></div></section>
    <section class="card note">${ic('shield',22)}<div><b>Sigilo</b><p>A escola não vê quem enviou a denúncia. Apenas o protocolo é compartilhado com a SEDUC.</p></div></section>
  </div></div>`},

/* ---------- FISCAL ---------- */
fiscal_login:()=>`<section class="hero dark"><div class="wrap hero-grid">
  <div class="hero-txt">
    <span class="eyebrow">Acesso restrito</span>
    <h1>Painel do Fiscal <em>SEDUC</em></h1>
    <p>Receba as denúncias das escolas da sua regional, faça a vistoria e envie o relatório para a SEDUC em um só lugar.</p>
    <ul class="checks"><li>${ic('check',18)} Mapa de calor das denúncias por escola</li><li>${ic('check',18)} Fila de atendimento por prioridade</li><li>${ic('check',18)} Checklist e relatório com fotos da vistoria</li><li>${ic('check',18)} Filtro pelas ${Object.keys(GRES).length} GREs do Piauí</li></ul>
  </div>
  <div class="card login-card">
    <h2>Entrar como fiscal</h2><p class="muted">Use seu CPF e seu código fiscal.</p>
    <button class="btn demo" onclick="demoFiscal()">${ic('arrow',18)} Entrar como fiscal de demonstração</button>
    <div class="or"><span>ou entre com seus dados</span></div>
    <label class="lbl" style="margin-top:16px" for="cpf">CPF</label>
    <div class="field"><span class="lead">${ic('user',18)}</span><input class="inp" id="cpf" inputmode="numeric" placeholder="000.000.000-00" oninput="maskCPF(this)" autocomplete="off"></div>
    <label class="lbl" for="cod">Código fiscal</label>
    <div class="field"><span class="lead">${ic('lock',18)}</span><input class="inp" id="cod" type="password" placeholder="••••••••" autocomplete="off" style="padding-right:46px" onkeydown="if(event.key==='Enter')loginFiscal()"><button class="trail" type="button" onclick="const i=$('#cod');i.type=i.type==='password'?'text':'password'" aria-label="Mostrar código">${ic('eye',20)}</button></div>
    <div class="err" id="err"></div>
    <button class="btn block" onclick="loginFiscal()">Entrar</button>
    <p class="hint" style="text-align:center"><button class="link-q" onclick="toast('Solicite um novo código ao coordenador regional.')">Esqueci meu código fiscal</button><span class="sep">·</span><button class="link-q" onclick="toast('Suporte SEDUC: atendimento interno')">Suporte SEDUC</button></p>
    <div class="proto">Protótipo de demonstração. Use dados fictícios, por exemplo: 987.654.321-00 / FISC01</div>
  </div></div></section>`,

fiscal_dash:()=>{const DG=DEN.filter(noGre);const pend=DG.filter(GF.pend),fis=DG.filter(GF.fis),con=DG.filter(GF.con);const altas=DG.filter(d=>OPEN.includes(d.status)&&d.prio==='alta');
  const fila=[...pend].sort((a,b)=>PO[a.prio]-PO[b.prio]||b.data-a.data).slice(0,6);
  const aberto=DG.filter(d=>OPEN.includes(d.status));
  const porTipo=Object.entries(aberto.reduce((m,d)=>(m[d.tipo]=(m[d.tipo]||0)+1,m),{})).sort((a,b)=>b[1]-a[1]);
  const porReg=Object.entries(aberto.reduce((m,d)=>{const e=escola(d.escola);const k=S.greF?e.cidade:`${e.gre}ª GRE · ${e.greNome}`;m[k]=(m[k]||0)+1;return m},{})).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const kpi=(k,n,l,i,t)=>`<button class="kpi ${t}" onclick="S.filtroLista='${k}';go('lista')"><span class="kpi-ic">${ic(i,22)}</span><b data-count="${n}">${n}</b><span>${l}</span></button>`;
  return phead('Visão geral',`Denúncias de ${greTxt()}`,greSel()+bellBtn())+`
  <div class="kpis">${kpi('pend',pend.length,'Pendentes','inbox','')}${kpi('fis',fis.length,'Em fiscalização','search','warn')}${kpi('con',con.length,'Concluídas','check','info')}${kpi('todas',altas.length,'Alta prioridade em aberto','alert','alert')}</div>
  <div class="grid-2">
    <section class="card map-sm"><div class="card-h"><h2>Mapa de calor: denúncias por escola</h2></div><div class="mapwrap">${mapSVG()}</div><div id="mapinfo" style="margin-top:14px"></div></section>
    <section class="card"><div class="card-h" style="margin-bottom:4px"><h2>Fila de atendimento</h2><button class="link-q" onclick="S.filtroLista='pend';go('lista')">Ver todas</button></div>
      ${fila.length?fila.map(d=>{const e=escola(d.escola);return `<button class="qitem" onclick="go('det',{id:${d.id}})">${prioPill(d)}<span><b>${esc(e.nome)}</b><small>${esc(d.tipo)} · ${esc(e.cidade)} · ${fmtData(d.data)}</small></span>${d.novo?'<span class="pill st-new">Nova</span>':''}${ic('chev',16)}</button>`}).join(''):'<div class="empty">Nenhuma denúncia pendente.</div>'}</section>
  </div>
  <div class="grid-half">
    <section class="card"><h2 style="margin-bottom:16px">Em aberto por tipo de problema</h2>${bars(porTipo)}</section>
    <section class="card"><h2 style="margin-bottom:16px">Em aberto por ${S.greF?'município':'regional'}</h2>${bars(porReg)}</section>
  </div>`},

fiscal_lista:()=>phead('Denúncias',`Todas as denúncias de ${greTxt()}, ordenadas por prioridade.`,greSel()+bellBtn())+`
  <section class="card">
    <div class="toolbar">
      <div class="field"><span class="lead">${ic('search',18)}</span><input class="inp" id="bf" placeholder="Buscar por escola, cidade, tipo ou protocolo" value="${esc(S.buscaF)}" oninput="S.buscaF=this.value;$('#tblF').innerHTML=tabelaF()" autocomplete="off"></div>
    </div>
    <div class="toolbar">${chipF('todas','Todas')}${chipF('pend','Pendentes')}${chipF('fis','Em fiscalização')}${chipF('con','Concluídas')}</div>
    <div id="tblF">${tabelaF()}</div>
  </section>`,

fiscal_relatorios:()=>{const and=DEN.filter(noGre).filter(GF.fis);const env=DEN.filter(noGre).filter(d=>d.procede!=null).sort((a,b)=>(b.dataRel||b.data)-(a.dataRel||a.data));
  const row=(d,btn,extra)=>{const e=escola(d.escola);return `<tr onclick="${btn[1]}">${td('Escola',`<b>${esc(e.nome)}</b><small>${esc(e.cidade)}-PI · ${e.gre}ª GRE</small>`,'main')}${td('Problema',`${esc(d.tipo)}<small>${d.prot}</small>`)}${extra}<td class="ta-r"><button class="btn sm ghost" onclick="event.stopPropagation();${btn[1]}">${btn[0]}</button></td></tr>`};
  return phead('Relatórios de fiscalização',`Relatórios de ${greTxt()}`,greSel())+`
  <section class="card"><div class="card-h"><h2>Em andamento (${and.length})</h2></div>
    ${and.length?`<div class="tblwrap"><table class="tbl click"><thead><tr><th>Escola</th><th>Problema</th><th>Prioridade</th><th><span class="sr">Ação</span></th></tr></thead><tbody>${and.map(d=>row(d,['Continuar relatório',`abrirRel(${d.id})`],td('Prioridade',prioPill(d)))).join('')}</tbody></table></div>`:'<div class="empty">Nenhuma fiscalização em andamento. Abra uma denúncia pendente e clique em Iniciar fiscalização.</div>'}
  </section>
  <section class="card" style="margin-top:24px"><div class="card-h"><h2>Enviados para a SEDUC (${env.length})</h2></div>
    ${env.length?`<div class="tblwrap"><table class="tbl click"><thead><tr><th>Escola</th><th>Problema</th><th>Resultado</th><th>Enviado</th><th><span class="sr">Ação</span></th></tr></thead><tbody>${env.map(d=>row(d,['Ver relatório',`go('relv',{id:${d.id}})`],td('Resultado',statusPill(d))+td('Enviado',d.dataRel?fmtData(d.dataRel):'—'))).join('')}</tbody></table></div>`:'<div class="empty">Nenhum relatório enviado ainda.</div>'}
  </section>`},

fiscal_det:p=>{const d=DEN.find(x=>x.id===p.id);if(!d)return SC.fiscal_dash();d.novo=false;const e=escola(d.escola);const locked=!['recebida','fiscalizacao'].includes(d.status);
  let act;
  if(d.status==='recebida')act=`<h2>Próximo passo</h2><p class="muted" style="margin:6px 0 16px">Vá até a escola, faça a vistoria e marque o checklist.</p><button class="btn" style="width:100%" onclick="iniciar(${d.id})">Iniciar fiscalização</button>`;
  else if(d.status==='fiscalizacao')act=`<h2>Fiscalização em andamento</h2><p class="muted" style="margin:6px 0 16px">Preencha o relatório quando terminar a vistoria.</p><button class="btn" style="width:100%" onclick="abrirRel(${d.id})">${ic('clip',18)} Preencher relatório</button>`;
  else act=`<h2>Relatório enviado</h2><div class="parecer" style="margin:12px 0">${d.prazo?`<b>Prazo: ${d.prazo} dias</b>`:''}${esc(d.parecer)}</div><button class="btn ghost" style="width:100%" onclick="go('relv',{id:${d.id}})">${ic('clip',18)} Ver relatório completo</button>${d.status==='encaminhada'?`<button class="btn" style="width:100%;margin-top:10px" onclick="confirmarReparo(${d.id})">${ic('check',18)} Confirmar reparo concluído</button>`:''}`;
  return phead(esc(e.nome),`${esc(e.cidade)}-PI · ${e.gre}ª GRE ${esc(e.greNome)} · INEP ${e.inep} · zona ${e.zona.toLowerCase()}`,prioPill(d)+statusPill(d),[crumbF(),[d.prot]])+`
  <div class="grid-2">
    <section class="card">
      <div class="sec">Problema</div><h2>${esc(d.tipo)}</h2><p class="muted">${esc(d.local||'Local não informado')} · recebida ${fmtData(d.data).toLowerCase()} · protocolo ${d.prot}</p>
      <div class="sec">Descrição</div><p class="txt">${esc(d.desc)}</p>
      <div class="sec">Fotos do problema</div>${gallery(d.fotos)}
    </section>
    <aside class="stack">
      <section class="card"><h2 style="margin-bottom:6px">Checklist de verificação</h2>${checklist(d,locked)}</section>
      <section class="card">${act}</section>
    </aside>
  </div>`},

fiscal_rel:p=>{const d=DEN.find(x=>x.id===p.id);if(!d)return SC.fiscal_dash();if(!S.report||S.report.id!==d.id)S.report={id:d.id,procede:null,fotos:[],parecer:'',prazo:7};const r=S.report,e=escola(d.escola);const nchk=CHECK.filter((c,i)=>d.check[i]).length;
  return phead('Relatório de fiscalização',`${esc(e.nome)} · ${esc(d.tipo)}`,'',[crumbF(),[d.prot,`go('det',{id:${d.id}})`],['Relatório']])+`
  <div class="grid-2">
    <section class="card">
      <label class="lbl">A denúncia procede? <i>*</i></label>
      <div class="seg"><button class="${r.procede===true?'on':''}" onclick="S.report.procede=true;render()">Sim</button><button class="${r.procede===false?'on':''}" onclick="S.report.procede=false;render()">Não</button></div>
      ${r.procede?`<label class="lbl" for="prazo">Prazo para ação</label><select class="inp" id="prazo" style="max-width:360px" onchange="S.report.prazo=+this.value">${[3,7,15,30].map(n=>`<option value="${n}" ${n==r.prazo?'selected':''}>Até ${n} dias</option>`).join('')}</select>`:''}
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin:18px 0 7px"><label class="lbl" style="margin:0" for="par">Parecer do fiscal <i>*</i></label>${r.procede!==null?`<button class="link-q" style="font-size:13.5px" onclick="sugerir(${d.id})">Sugerir texto</button>`:''}</div>
      <textarea class="inp" id="par" placeholder="Descreva o que foi constatado e as ações recomendadas..." oninput="S.report.parecer=this.value">${esc(r.parecer)}</textarea>
      <label class="lbl">Fotos da vistoria</label>
      <div id="ph">${photoEditor('report')}</div>
      <div class="err" id="err"></div>
      <div class="actions"><button class="btn line" onclick="go('det',{id:${d.id}})">Voltar à denúncia</button><button class="btn" onclick="finalizar(${d.id})">Finalizar e enviar para a SEDUC ${ic('send',17)}</button></div>
    </section>
    <aside class="stack sticky">
      <section class="card"><h2 style="margin-bottom:6px">Checklist (${nchk} de ${CHECK.length})</h2>${checklist(d,false)}</section>
      <section class="card"><h2 style="margin-bottom:12px">Resumo da denúncia</h2>
        <dl class="dl"><div><dt>Protocolo</dt><dd>${d.prot}</dd></div><div><dt>Prioridade</dt><dd>${prioPill(d)}</dd></div><div><dt>Local</dt><dd>${esc(d.local||'—')}</dd></div><div><dt>Recebida</dt><dd>${fmtData(d.data)}</dd></div></dl>
        <p class="txt" style="margin-top:12px;font-size:14px">${esc(d.desc)}</p></section>
    </aside>
  </div>`},

fiscal_relv:p=>{const d=DEN.find(x=>x.id===p.id);if(!d||d.procede==null)return SC.fiscal_dash();const e=escola(d.escola);
  return phead('Relatório de fiscalização',`${esc(e.nome)} · ${esc(d.tipo)}`,statusPill(d),[crumbF(),[d.prot,`go('det',{id:${d.id}})`],['Relatório']])+`
  <div class="grid-2">
    <section class="card">
      <div class="sec">A denúncia procede?</div>
      <div class="seg"><button class="${d.procede?'on':''}" disabled>Sim</button><button class="${d.procede?'':'on'}" disabled>Não</button></div>
      ${d.prazo?`<div class="sec">Prazo para ação</div><p class="txt">Até <b>${d.prazo} dias</b></p>`:''}
      <div class="sec">Parecer do fiscal</div><p class="txt">${esc(d.parecer)}</p>
      <div class="sec">Fotos da vistoria</div>${gallery(d.fotosV)}
      <div class="actions"><button class="btn line" onclick="go('det',{id:${d.id}})">Ver denúncia original</button>${d.status==='encaminhada'?`<button class="btn" onclick="confirmarReparo(${d.id})">${ic('check',18)} Confirmar reparo concluído</button>`:''}</div>
    </section>
    <aside class="stack">
      <section class="card"><h2 style="margin-bottom:6px">Checklist de verificação</h2>${checklist(d,true)}</section>
      <section class="card"><h2 style="margin-bottom:12px">Dados</h2>
        <dl class="dl"><div><dt>Protocolo</dt><dd>${d.prot}</dd></div><div><dt>Escola</dt><dd>${esc(e.nome)}</dd></div><div><dt>Município</dt><dd>${esc(e.cidade)}/PI</dd></div><div><dt>Regional</dt><dd>${e.gre}ª GRE</dd></div><div><dt>Enviado</dt><dd>${d.dataRel?fmtData(d.dataRel):'—'}</dd></div></dl></section>
    </aside>
  </div>`}
};

/* ===== Salvar no navegador (localStorage) ===== */
const KEY='escola-em-dia-v2';
function save(){
  const data={DEN,seq,aluno:{logged:S.aluno.logged,cpf:S.aluno.cpf,mat:S.aluno.mat},fiscal:{logged:S.fiscal.logged,cpf:S.fiscal.cpf},greF:S.greF};
  try{localStorage.setItem(KEY,JSON.stringify(data))}
  catch(e){ // fotos muito grandes podem estourar o limite: salva sem as fotos novas
    try{localStorage.setItem(KEY,JSON.stringify({...data,DEN:DEN.map(d=>({...d,fotos:d.fotos.filter(f=>f.startsWith('ph:')),fotosV:[]}))}))}catch(_){}
  }
}
function load(){
  try{
    const data=JSON.parse(localStorage.getItem(KEY));
    if(!data)return;
    DEN=data.DEN;seq=data.seq;
    Object.assign(S.aluno,data.aluno);Object.assign(S.fiscal,data.fiscal);S.greF=data.greF||0;
    S.aluno.screen=S.aluno.logged?'home':'login';S.fiscal.screen=S.fiscal.logged?'dash':'login';
  }catch(_){}
}
function resetDemo(){
  if(!confirm('Apagar as denúncias salvas e voltar aos dados de exemplo?'))return;
  try{localStorage.removeItem(KEY)}catch(_){}
  location.reload();
}

load();
render();
