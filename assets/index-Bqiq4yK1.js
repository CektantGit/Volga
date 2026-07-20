(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const at=2,qr={W:64,H:64,SEED:20260720},Bo=600,mn=.65,Tt={log:{name:"Бревно",stack:20,cat:"res"},stick:{name:"Палка",stack:50,cat:"res"},stone:{name:"Камень",stack:30,cat:"res"},grass:{name:"Пучок травы",stack:50,cat:"res"},rope:{name:"Верёвка",stack:20,cat:"res"},plastic:{name:"Пластик",stack:40,cat:"res"},scrap:{name:"Металлолом",stack:20,cat:"res"},wire:{name:"Провод",stack:20,cat:"res"},snake_skin:{name:"Кожа змеи",stack:20,cat:"res"},bear_hide:{name:"Шкура медведя",stack:5,cat:"res"},berry:{name:"Ягоды",stack:30,cat:"food",eat:{food:8,alco:-3}},mushroom:{name:"Грибы",stack:30,cat:"food",eat:{food:10,alco:-3}},canned:{name:"Тушёнка",stack:10,cat:"food",eat:{food:35,alco:-10,hp:5}},fish_small:{name:"Плотва",stack:20,cat:"food",eat:{food:6,hp:-5}},fish_med:{name:"Судак",stack:20,cat:"food",eat:{food:10,hp:-8}},fish_big:{name:"Сом",stack:10,cat:"food",eat:{food:15,hp:-10}},meat_snake:{name:"Мясо змеи",stack:20,cat:"food",eat:{food:8,hp:-10}},meat_bear:{name:"Медвежатина",stack:20,cat:"food",eat:{food:15,hp:-12}},cooked_fish:{name:"Жареная рыба",stack:20,cat:"food",eat:{food:30,alco:-12,hp:4}},cooked_meat:{name:"Жареное мясо",stack:20,cat:"food",eat:{food:40,alco:-15,hp:6}},smoked_fish:{name:"Копчёная рыба",stack:30,cat:"food",eat:{food:45,alco:-20,hp:8}},ukha:{name:"Уха",stack:10,cat:"food",eat:{food:55,alco:-30,hp:15}},water:{name:"Фляга воды",stack:10,cat:"food",eat:{food:2,alco:-8}},beer:{name:"Пиво «Жигули»",stack:20,cat:"booze",drink:{alco:12,food:4}},samogon:{name:"Самогон",stack:10,cat:"booze",drink:{alco:35,food:0,hp:3}},braga:{name:"Брага",stack:10,cat:"booze",drink:{alco:18,food:2,hp:-5}},axe:{name:"Топор",stack:1,cat:"tool"},spear:{name:"Копьё",stack:1,cat:"tool"},knife:{name:"Нож",stack:1,cat:"tool"},rod:{name:"Удочка",stack:1,cat:"tool"},bandage:{name:"Бинт",stack:10,cat:"tool",eat:{hp:30}},sugar:{name:"Сахар",stack:20,cat:"misc"},yeast:{name:"Дрожжи",stack:20,cat:"misc"},canister:{name:"Канистра (пустая)",stack:5,cat:"misc"},fuel:{name:"Канистра бензина",stack:5,cat:"misc"},campfire_kit:{name:"Костёр (набор)",stack:3,cat:"build",place:"campfire"},workbench_kit:{name:"Верстак (набор)",stack:1,cat:"build",place:"workbench"},still_kit:{name:"Самогонный аппарат",stack:1,cat:"build",place:"still"},smoker_kit:{name:"Коптильня (набор)",stack:1,cat:"build",place:"smoker"},pyro_kit:{name:"Крекинг-куб",stack:1,cat:"build",place:"pyro"},lamp_kit:{name:"Фонарь (набор)",stack:5,cat:"build",place:"lamp"},trap_kit:{name:"Верша (ловушка на рыбу)",stack:3,cat:"build",place:"fishtrap"},autorod_kit:{name:"Самолов (авто-удочка)",stack:3,cat:"build",place:"autorod"},tent_kit:{name:"Палатка (набор)",stack:1,cat:"build",place:"tent"}},zo=[{id:"rope",out:{rope:1},in:{grass:3},station:null},{id:"axe",out:{axe:1},in:{stick:2,stone:2,rope:1},station:null},{id:"spear",out:{spear:1},in:{stick:2,stone:1,rope:1},station:null},{id:"campfire_kit",out:{campfire_kit:1},in:{stick:4,stone:4},station:null},{id:"rod",out:{rod:1},in:{stick:2,rope:2},station:null},{id:"workbench_kit",out:{workbench_kit:1},in:{log:4,stone:2},station:null},{id:"bandage",out:{bandage:1},in:{grass:2,snake_skin:1},station:null},{id:"knife",out:{knife:1},in:{stick:1,scrap:1,rope:1},station:"workbench"},{id:"canister",out:{canister:1},in:{plastic:2},station:"workbench"},{id:"still_kit",out:{still_kit:1},in:{scrap:3,wire:1,canister:1},station:"workbench"},{id:"smoker_kit",out:{smoker_kit:1},in:{log:4,stone:4,scrap:1},station:"workbench"},{id:"pyro_kit",out:{pyro_kit:1},in:{scrap:5,stone:2,wire:2},station:"workbench"},{id:"lamp_kit",out:{lamp_kit:1},in:{wire:1,scrap:1,plastic:1},station:"workbench"},{id:"trap_kit",out:{trap_kit:1},in:{stick:4,rope:3},station:"workbench"},{id:"autorod_kit",out:{autorod_kit:1},in:{rod:1,scrap:2,wire:1},station:"workbench"},{id:"tent_kit",out:{tent_kit:1},in:{stick:6,rope:4,bear_hide:1},station:"workbench"},{id:"boat_patch",out:{boat_patch:1},in:{log:2,rope:2,plastic:2},station:"workbench"},{id:"cooked_fish_s",out:{cooked_fish:1},in:{fish_small:2},station:"campfire"},{id:"cooked_fish_m",out:{cooked_fish:1},in:{fish_med:1},station:"campfire"},{id:"cooked_fish_b",out:{cooked_fish:2},in:{fish_big:1},station:"campfire"},{id:"cooked_snake",out:{cooked_meat:1},in:{meat_snake:2},station:"campfire"},{id:"cooked_bear",out:{cooked_meat:2},in:{meat_bear:2},station:"campfire"},{id:"ukha",out:{ukha:1},in:{fish_med:1,fish_small:1,water:1,mushroom:1},station:"campfire"},{id:"braga",out:{braga:2},in:{sugar:2,berry:4,yeast:1,water:1},station:"campfire"},{id:"samogon",out:{samogon:2},in:{braga:3},station:"still"},{id:"smoked_s",out:{smoked_fish:1},in:{fish_small:3,log:1},station:"smoker"},{id:"smoked_m",out:{smoked_fish:2},in:{fish_med:2,log:1},station:"smoker"},{id:"smoked_b",out:{smoked_fish:3},in:{fish_big:1,log:1},station:"smoker"},{id:"fuel",out:{fuel:1},in:{plastic:6,canister:1},station:"pyro"}];Tt.boat_patch={name:"Ремкомплект лодки",stack:3,cat:"misc"};const ke={hungerRate:100/700,energyRate:100/1e3,alcoholDecay:100/240,starveHpRate:2,exhaustSlowdown:.5,alcoholBuffMin:15,alcoholBuffDamage:1.6,alcoholBuffChop:1.5,alcoholSwayMin:55,alcoholPassOut:100,hangoverThreshold:60,hangoverDebuff:.7,snakeDamage:8,snakePoisonDps:.8,snakePoisonTime:12,bearDamage:22,bearHp:60,snakeHp:12,playerBaseDamage:5,spearDamage:15,knifeDamage:10,axeDamage:12,treeHp:3,rockHp:4,sleepEnergy:100,sleepHours:.28,generatorFuelPerDay:1,lampRadius:6,fishTrapTime:90,autoRodTime:60,fishing:{zoneSize:.22,speed:1.4,lootShore:[["fish_small",55],["fish_med",30],["plastic",10],["fish_big",5]],lootBoat:[["fish_med",45],["fish_big",35],["fish_small",15],["plastic",5]]}},Ho={beer:6,samogon:2,canned:2,sugar:4,yeast:2,bandage:1,canister:1,water:2,wire:1},Go={sugar:3,yeast:2,scrap:3,wire:2,canned:1,rope:2,samogon:1},Vo={scrap:4,wire:3,canned:2,sugar:2,fuel:1},Ca=["Самогон даёт силу: урон и скорость рубки выше, пока ты навеселе.","Еда снижает уровень алкоголя. Уха — лучшее средство от похмелья.","Медведи выходят ночью. Фонари и костёр их отпугивают.","Змеи прячутся в траве днём. Бей копьём, не подходи вплотную.","Сырую рыбу лучше жарить — от сырой болит живот.","Пластик с берега — сырьё для бензина. Нужен крекинг-куб.","Почини лодку — с воды клюёт крупная рыба, и можно доплыть до острова.","Генератор жрёт бензин, но питает фонари вокруг лагеря.","Спи в машине или палатке, чтобы восстановить силы и пропустить ночь.","Верша и самолов ловят рыбу, пока ты занимаешься делами."];function kc(){return{name:"Владос",skin:1,hair:1,hairColor:1,beard:1,shirt:0,pants:0,hat:0,marks:{scars:[],dirt:0,sunburn:0,noseRed:0,bruises:[]},totalDrunk:0}}function Wo(){return{version:3,char:kc(),px:0,py:0,dir:2,hp:100,food:80,energy:90,alcohol:0,poison:0,hangover:!1,wasDrunkPeak:0,inv:{},equipped:null,time:.12,day:1,onBoat:!1,boatFixed:!1,boatX:0,boatY:0,containers:{car:{...Ho},hut:{...Go},island:{...Vo}},generator:{on:!1,fuel:.5},placed:[],removed:[],treeHits:{},stats:{trees:0,fish:0,snakes:0,bears:0,drinks:0,days:1},tutorialSeen:!1}}function bn(n,e){return n.inv[e]||0}function Qt(n,e,t=1){if(!Tt[e])throw new Error("unknown item "+e);return n.inv[e]=(n.inv[e]||0)+t,n.inv[e]<=0&&delete n.inv[e],n.inv[e]||0}function ei(n,e,t=1){return(n.inv[e]||0)<t?!1:(n.inv[e]-=t,n.inv[e]<=0&&delete n.inv[e],!0)}function Bc(n,e){return Object.entries(e).every(([t,i])=>bn(n,t)>=i)}function Xo(n,e,t){return e.station!==t?!1:Bc(n,e.in)}function zc(n,e,t){const i=zo.find(r=>r.id===e);if(!i||!Xo(n,i,t))return!1;for(const[r,s]of Object.entries(i.in))ei(n,r,s);for(const[r,s]of Object.entries(i.out))Qt(n,r,s);return!0}function Hc(n){return zo.filter(e=>e.station===n)}function Gc(n,e){const t=Tt[e];if(!t||!t.eat&&!t.drink||!ei(n,e,1))return null;const i=t.eat||t.drink,r={ate:e};if(i.food&&(n.food=Dt(n.food+i.food,0,100)),i.hp&&(n.hp=Dt(n.hp+i.hp,0,100)),i.alco){const s=n.alcohol;n.alcohol=Dt(n.alcohol+i.alco,0,100),i.alco>0?(n.char.totalDrunk+=i.alco,n.stats.drinks++,n.wasDrunkPeak=Math.max(n.wasDrunkPeak,n.alcohol),n.char.marks.noseRed=Math.min(1,n.char.totalDrunk/600),n.alcohol>=ke.alcoholPassOut&&s<ke.alcoholPassOut&&(r.passOut=!0)):n.alcohol===0&&n.hangover&&(t.eat?.food||0)>=30&&(n.hangover=!1,r.curedHangover=!0)}return r}function qo(n,e,t,i=1/0){const r=e[t]||0;if(!r||!Tt[t])return 0;const s=Math.min(r,i);return Qt(n,t,s),e[t]-=s,e[t]<=0&&delete e[t],s}function Pa(n,e,t,i=1/0){const r=bn(n,t);if(!r)return 0;const s=Math.min(r,i);return ei(n,t,s),e[t]=(e[t]||0)+s,s}function Vc(n,e){const t={};for(const i of Object.keys({...e})){const r=qo(n,e,i);r&&(t[i]=r)}return Object.keys(t).length?t:null}const Yo="volga2026_save";function Wc(n){return JSON.stringify(n)}function Xc(n){const e=JSON.parse(n),t=Wo(),i={...t,...e};return i.char={...t.char,...e.char||{}},i.char.marks={...t.char.marks,...e.char?.marks||{}},i.generator={...t.generator,...e.generator||{}},i.stats={...t.stats,...e.stats||{}},e.containers?i.containers={...t.containers,...e.containers}:i.containers={car:e.carLooted?{}:{...Ho},hut:e.hutLooted?{}:{...Go},island:e.islandLooted?{}:{...Vo}},i}function Xi(n,e){try{return e.setItem(Yo,Wc(n)),!0}catch{return!1}}function qc(n){try{const e=n.getItem(Yo);return e?Xc(e):null}catch{return null}}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}const Oi={log:"🪵",stick:"🥢",stone:"🪨",grass:"🌾",rope:"🪢",plastic:"🧴",scrap:"⚙️",wire:"🔌",snake_skin:"🐍",bear_hide:"🐻",berry:"🫐",mushroom:"🍄",canned:"🥫",fish_small:"🐟",fish_med:"🐟",fish_big:"🐋",meat_snake:"🍖",meat_bear:"🍖",cooked_fish:"🍤",cooked_meat:"🍗",smoked_fish:"🐠",ukha:"🍲",water:"💧",beer:"🍺",samogon:"🍶",braga:"🧉",axe:"🪓",spear:"🔱",knife:"🔪",rod:"🎣",bandage:"🩹",sugar:"🧂",yeast:"🧫",canister:"🛢️",fuel:"⛽",boat_patch:"🩹",campfire_kit:"🔥",workbench_kit:"🛠️",still_kit:"⚗️",smoker_kit:"🏭",pyro_kit:"🧪",lamp_kit:"💡",trap_kit:"🪤",autorod_kit:"🤖",tent_kit:"⛺"},Yc={null:"🔨 Крафт руками",workbench:"🛠️ Верстак",campfire:"🔥 Костёр",still:"⚗️ Самогонный аппарат",smoker:"🏭 Коптильня",pyro:"🧪 Крекинг-куб"},_t=n=>document.querySelector(n);function Kc(){const n={hud:_t("#hud"),clock:_t("#clock"),topbtns:_t("#topbtns"),moodles:_t("#moodles"),daylabel:_t("#daylabel"),timelabel:_t("#timelabel"),timebtns:_t("#timebtns"),prompt:_t("#prompt"),toastWrap:_t("#toast-wrap"),dock:_t("#dock"),dockInvGrid:_t("#dock-inv-grid"),dockLootSel:_t("#dock-loot-sel"),dockLootGrid:_t("#dock-loot-grid"),dockTakeAll:_t("#dock-takeall"),dockExtra:_t("#dock-extra"),craftPanel:_t("#panel-craft"),craftList:_t("#craft-list"),craftTitle:_t("#craft-title"),menuPanel:_t("#panel-menu"),menuStats:_t("#menu-stats"),vignette:_t("#vignette"),flash:_t("#flash"),sleepFade:_t("#sleep-fade"),fishing:_t("#fishing"),fishzone:_t("#fishzone"),fishcur:_t("#fishcur"),screen:_t("#screen"),editor:_t("#editor")};let e=null,t=null,i=null;function r(O,q=""){const le=document.createElement("div");for(le.className="toast "+q,le.textContent=O,n.toastWrap.appendChild(le),setTimeout(()=>le.remove(),3e3);n.toastWrap.children.length>4;)n.toastWrap.firstChild.remove()}function s(O,q){const le=document.getElementById(O);le.querySelector(".fill").style.width=Math.round(q)+"%",le.querySelector(".v").textContent=Math.round(q)}let a="";function o(O){const q=[];O.poison>0&&q.push(["🐍","Отравлен"]),O.hangover&&q.push(["🤕","Похмелье"]),O.alcohol>=ke.alcoholSwayMin?q.push(["🥴","В хлам"]):O.alcohol>=ke.alcoholBuffMin&&q.push(["💪","Навеселе"]),O.hp<30&&q.push(["🩸","Ранен"]),O.food<20&&q.push(["🍗","Голоден"]),O.energy<15&&q.push(["😴","Валится с ног"]),O.char.marks.dirt>.7&&q.push(["🧼","Грязный"]),O.char.marks.sunburn>.7&&q.push(["☀️","Обгорел"]);const le=q.map(de=>de[0]).join("");le!==a&&(a=le,n.moodles.innerHTML=q.map(([de,Ee])=>`<div class="moodle">${de}<small>${Ee}</small></div>`).join(""))}function c(O){s("hp",O.hp),s("food",O.food),s("energy",O.energy),s("alco",O.alcohol),o(O),n.daylabel.textContent="День "+O.day;let q,le;if(O.time<=mn){const Ee=6+O.time/mn*16;q=Ee,le=Ee<8||Ee>19?"🌅":"☀️"}else q=(22+(O.time-mn)/(1-mn)*8)%24,le="🌙";const de=Math.floor(q%1*60);n.timelabel.textContent=`${le} ${String(Math.floor(q)).padStart(2,"0")}:${String(de).padStart(2,"0")}`}n.timebtns.querySelectorAll("button").forEach(O=>{O.onclick=()=>{n.timebtns.querySelectorAll("button").forEach(q=>q.classList.toggle("on",q===O)),i&&i(+O.dataset.s)}});function l(O){if(!O){n.prompt.style.display="none";return}n.prompt.innerHTML=O,n.prompt.style.display="block"}function d(O,q,le=""){const de=document.createElement("div");return de.className="slot "+le,de.innerHTML=`<div class="ico">${Oi[O]||"📦"}</div><div class="nm">${Tt[O]?.name||O}</div><div class="ct">${q}</div>`,de}let p="";function f(O,q=!1){const le=Object.entries(O.inv),de=le.map(([Ee,T])=>Ee+":"+T+(O.equipped===Ee?"*":"")).join("|");if(!(!q&&de===p)){if(p=de,n.dockInvGrid.innerHTML="",!le.length){n.dockInvGrid.innerHTML='<div class="boxempty">Пусто. Пошарь в машине или на берегу.</div>';return}for(const[Ee,T]of le){const De=d(Ee,T,O.equipped===Ee?"eq":"");De.onclick=Te=>{Te.stopPropagation(),$(O,Ee,Te.clientX,Te.clientY)},n.dockInvGrid.appendChild(De)}}}let m=[],g=null,v="",h="";function u(){return m.find(O=>O.key===g)||null}function S(O){const q=u(),le=q?q.cont:null,de=le?Object.entries(le).filter(([T])=>Tt[T]):[],Ee=(q?q.key:"-")+"|"+de.map(([T,De])=>T+":"+De).join("|");if(Ee!==h){if(h=Ee,n.dockLootGrid.innerHTML="",n.dockExtra.innerHTML="",!q){n.dockLootGrid.innerHTML='<div class="boxempty">Рядом ничего нет.<br>Подойди к машине, ящику или мешку.</div>',n.dockTakeAll.style.display="none";return}n.dockTakeAll.style.display="",de.length||(n.dockLootGrid.innerHTML='<div class="boxempty">Пусто</div>');for(const[T,De]of de){const Te=d(T,De);Te.title="Взять",Te.onclick=()=>{qo(O,q.cont,T),S(O),f(O)},n.dockLootGrid.appendChild(Te)}if(q.extra){const T=document.createElement("button");T.className="mainbtn",T.id="dock-extra-btn",T.textContent=q.extra.label,T.onclick=q.extra.cb,n.dockExtra.appendChild(T)}}}function x(O,q){m=q;const le=q.map(de=>de.key).join("|");le!==v&&(v=le,q.some(de=>de.key===g)||(g=q[0]?.key||null),n.dockLootSel.innerHTML=q.length?q.map(de=>`<option value="${de.key}" ${de.key===g?"selected":""}>${de.title}</option>`).join(""):"<option>— пусто —</option>",h=""),S(O)}n.dockLootSel.onchange=()=>{g=n.dockLootSel.value,h=""};let E=null;n.dockTakeAll.onclick=()=>{const O=u();O&&E&&(Vc(E,O.cont),S(E),f(E))};function D(O){E=O}function w(O,q){g=q,h="",document.body.classList.add("dock-open"),x(O,m),n.dockLootSel.value=q}function A(O){document.body.classList.toggle("dock-open",O)}const C=document.getElementById("hotbar"),b={tool:0,booze:1,food:2,build:3,res:4,misc:5};let _="";function L(O){const q=Object.entries(O.inv).filter(([T])=>Tt[T]).sort((T,De)=>{const Te=b[Tt[T[0]].cat]??9,$e=b[Tt[De[0]].cat]??9;return Te!==$e?Te-$e:T[0]<De[0]?-1:1}),le=q.slice(0,8),de=le.map(([T,De])=>T+":"+De+(O.equipped===T?"*":"")).join("|")+"|more"+Math.max(0,q.length-8);if(de===_)return;C.style.display=q.length?"flex":"none";const Ee={};C.querySelectorAll(".hslot[data-id]").forEach(T=>{Ee[T.dataset.id]=+T.dataset.n}),_=de,C.innerHTML="";for(const[T,De]of le){const Te=document.createElement("div");Te.className="hslot"+(O.equipped===T?" eq":""),Te.dataset.id=T,Te.dataset.n=De,Ee[T]!==void 0&&Ee[T]!==De&&Te.classList.add("pop"),Ee[T]===void 0&&Object.keys(Ee).length&&Te.classList.add("pop"),Te.innerHTML=`<div class="ico">${Oi[T]||"📦"}</div><div class="nm">${Tt[T].name}</div><div class="ct">${De}</div>`,Te.onclick=()=>e&&e(T),C.appendChild(Te)}if(q.length>8){const T=document.createElement("div");T.className="hslot more",T.textContent="+"+(q.length-8),T.onclick=()=>A(!0),C.appendChild(T)}}const k=document.getElementById("ctx");function B(O,q,le,de){k.innerHTML=O?`<div class="ctx-title">${O}</div>`:"";for(const[De,Te,$e]of q){const ge=document.createElement("button");ge.textContent=De,$e&&(ge.className=$e),ge.onclick=ut=>{ut.stopPropagation(),Y(),Te()},k.appendChild(ge)}k.style.display="flex";const Ee=k.offsetWidth,T=k.offsetHeight;k.style.left=Math.min(innerWidth-Ee-8,Math.max(8,le-Ee/2))+"px",k.style.top=Math.min(innerHeight-T-8,Math.max(8,de+10))+"px"}function $(O,q,le,de){const Ee=Tt[q];if(!Ee)return;const T=[],De=($e,ge,ut)=>T.push([$e,()=>t&&t(ge,q),ut]);Ee.drink?De("🍻 Выпить","use"):Ee.eat&&De(q==="bandage"?"🩹 Перевязаться":"😋 Съесть","use"),Ee.cat==="tool"&&!Ee.eat&&De(O.equipped===q?"✋ Убрать из рук":"✊ Взять в руку","equip"),Ee.place&&De("🏗️ Поставить","place");const Te=u();Te&&Te.canPut&&De("📥 Положить: "+Te.title,"put"),De("🗑️ Выбросить 1","drop1","danger"),(O.inv[q]||0)>1&&De("🗑️ Выбросить всё","dropAll","danger"),B(`${Oi[q]||""} ${Ee.name} ×${O.inv[q]||0}`,T,le,de)}function J(O,q,le,de){q.length&&B(O,q,le,de)}function Y(){k.style.display="none"}addEventListener("pointerdown",O=>{k.style.display==="flex"&&!k.contains(O.target)&&Y()});let Z=null;function X(O,q){n.craftTitle.childNodes[0].textContent=(Yc[q]||"Крафт")+" ",n.craftList.innerHTML="";const le=Hc(q);for(const de of le){const Ee=Xo(O,de,q),T=Object.keys(de.out)[0],De=de.out[T],Te=Object.entries(de.in).map(([ge,ut])=>`${Oi[ge]||""}${Tt[ge].name} ×${ut} (есть ${bn(O,ge)})`).join(" · "),$e=document.createElement("div");$e.className="recipe"+(Ee?"":" off"),$e.innerHTML=`<div><div class="rname">${Oi[T]||""} ${Tt[T].name}${De>1?" ×"+De:""}</div>
        <div class="rin">${Te}</div></div><button>Сделать</button>`,$e.querySelector("button").onclick=()=>{Ee&&Z&&Z(de.id,q)},n.craftList.appendChild($e)}le.length||(n.craftList.innerHTML='<div style="color:var(--muted);text-align:center;padding:16px">Здесь ничего не скрафтить.</div>')}function me(O){const q=O.stats;n.menuStats.innerHTML=`
      <div class="statline"><span>Дней выжито</span><b>${q.days}</b></div>
      <div class="statline"><span>Деревьев срублено</span><b>${q.trees}</b></div>
      <div class="statline"><span>Рыбы поймано</span><b>${q.fish}</b></div>
      <div class="statline"><span>Змей побеждено</span><b>${q.snakes}</b></div>
      <div class="statline"><span>Медведей отбито</span><b>${q.bears}</b></div>
      <div class="statline"><span>Выпито (порций)</span><b>${q.drinks}</b></div>`}const ve={craft:n.craftPanel,menu:n.menuPanel};let _e=null;function qe(O){Ze(),_e=O,ve[O].classList.add("open")}function Ze(){_e&&ve[_e].classList.remove("open"),_e=null,Y()}for(const O of Object.values(ve))O.querySelector(".x").onclick=Ze,O.addEventListener("pointerdown",q=>{q.target===O&&Ze()});function j(){n.flash.classList.remove("hit"),n.flash.offsetWidth,n.flash.classList.add("hit")}function re(O){n.vignette.style.boxShadow=`inset 0 0 18vmax rgba(10,15,40,${O*.75})`}function ne(O){for(const q of[n.hud,n.clock,n.topbtns,n.moodles,n.dock,C])q.classList.toggle("hidden",!O);O&&(document.body.classList.contains("touch")||document.body.classList.add("dock-open"))}return{els:n,toast:r,updateHUD:c,showPrompt:l,renderInventory:f,renderCraft:X,renderMenu:me,renderHotbar:L,setNearby:x,focusLoot:w,toggleDock:A,bindState:D,selectedNearby:u,openWorldMenu:J,closeItemMenu:Y,ctxOpen:()=>k.style.display==="flex",open:qe,close:Ze,get openPanel(){return _e},hitFlash:j,nightVignette:re,showGameUI:ne,set onUseItem(O){e=O},set onCraft(O){Z=O},set onItemAction(O){t=O},set onTimeScale(O){i=O}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ha="166",$c=0,La=1,jc=2,Ko=1,$o=2,En=3,Bn=0,Kt=1,Tn=2,On=0,Ti=1,Da=2,Ia=3,Ua=4,Zc=5,jn=100,Jc=101,Qc=102,el=103,tl=104,nl=200,il=201,rl=202,sl=203,bs=204,Ts=205,al=206,ol=207,cl=208,ll=209,ul=210,hl=211,dl=212,fl=213,pl=214,ml=0,gl=1,_l=2,Pr=3,vl=4,xl=5,Ml=6,Sl=7,da=0,yl=1,El=2,kn=0,bl=1,Tl=2,Al=3,wl=4,Rl=5,Cl=6,Pl=7,jo=300,Ri=301,Ci=302,As=303,ws=304,Or=306,Rs=1e3,Jn=1001,Cs=1002,Yt=1003,Ll=1004,nr=1005,ln=1006,Yr=1007,Qn=1008,Rn=1009,Zo=1010,Jo=1011,Yi=1012,fa=1013,ti=1014,An=1015,ji=1016,pa=1017,ma=1018,Pi=1020,Qo=35902,ec=1021,tc=1022,un=1023,nc=1024,ic=1025,Ai=1026,Li=1027,rc=1028,ga=1029,sc=1030,_a=1031,va=1033,br=33776,Tr=33777,Ar=33778,wr=33779,Ps=35840,Ls=35841,Ds=35842,Is=35843,Us=36196,Ns=37492,Fs=37496,Os=37808,ks=37809,Bs=37810,zs=37811,Hs=37812,Gs=37813,Vs=37814,Ws=37815,Xs=37816,qs=37817,Ys=37818,Ks=37819,$s=37820,js=37821,Rr=36492,Zs=36494,Js=36495,ac=36283,Qs=36284,ea=36285,ta=36286,Dl=3200,Il=3201,oc=0,Ul=1,Fn="",en="srgb",Hn="srgb-linear",xa="display-p3",kr="display-p3-linear",Lr="linear",xt="srgb",Dr="rec709",Ir="p3",si=7680,Na=519,Nl=512,Fl=513,Ol=514,cc=515,kl=516,Bl=517,zl=518,Hl=519,Fa=35044,Oa="300 es",wn=2e3,Ur=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,na=180/Math.PI;function Zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function Gl(n,e){return(n%e+e)%e}function $r(n,e,t){return(1-t)*n+t*e}function ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,a,o,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],p=i[7],f=i[2],m=i[5],g=i[8],v=r[0],h=r[3],u=r[6],S=r[1],x=r[4],E=r[7],D=r[2],w=r[5],A=r[8];return s[0]=a*v+o*S+c*D,s[3]=a*h+o*x+c*w,s[6]=a*u+o*E+c*A,s[1]=l*v+d*S+p*D,s[4]=l*h+d*x+p*w,s[7]=l*u+d*E+p*A,s[2]=f*v+m*S+g*D,s[5]=f*h+m*x+g*w,s[8]=f*u+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-i*s*d+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=d*a-o*l,f=o*c-d*s,m=l*s-a*c,g=t*p+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(r*l-d*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(d*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jr.makeScale(e,t)),this}rotate(e){return this.premultiply(jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new tt;function lc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vl(){const n=Nr("canvas");return n.style.display="block",n}const ka={};function uc(n){n in ka||(ka[n]=!0,console.warn(n))}function Wl(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ba=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),za=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[Hn]:{transfer:Lr,primaries:Dr,toReference:n=>n,fromReference:n=>n},[en]:{transfer:xt,primaries:Dr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[kr]:{transfer:Lr,primaries:Ir,toReference:n=>n.applyMatrix3(za),fromReference:n=>n.applyMatrix3(Ba)},[xa]:{transfer:xt,primaries:Ir,toReference:n=>n.convertSRGBToLinear().applyMatrix3(za),fromReference:n=>n.applyMatrix3(Ba).convertLinearToSRGB()}},Xl=new Set([Hn,kr]),gt={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Xl.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ir[e].toReference,r=ir[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ir[n].primaries},getTransfer:function(n){return n===Fn?Lr:ir[n].transfer}};function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ai;class ql{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ai===void 0&&(ai=Nr("canvas")),ai.width=e.width,ai.height=e.height;const i=ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yl=0;class hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jr(r[a].image)):s.push(Jr(r[a]))}else s=Jr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kl=0;class Ht extends Ni{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Jn,r=Jn,s=ln,a=Qn,o=un,c=Rn,l=Ht.DEFAULT_ANISOTROPY,d=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Zi(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=jo;Ht.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],p=c[8],f=c[1],m=c[5],g=c[9],v=c[2],h=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(p-v)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+v)<.1&&Math.abs(g+h)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,E=(m+1)/2,D=(u+1)/2,w=(d+f)/4,A=(p+v)/4,C=(g+h)/4;return x>E&&x>D?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=A/i):E>D?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=C/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=A/s,r=C/s),this.set(i,r,s,t),this}let S=Math.sqrt((h-g)*(h-g)+(p-v)*(p-v)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(h-g)/S,this.y=(p-v)/S,this.z=(f-d)/S,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $l extends Ni{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends $l{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dc extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jl extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],d=i[r+2],p=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(p!==v||c!==f||l!==m||d!==g){let h=1-o;const u=c*f+l*m+d*g+p*v,S=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const D=Math.sqrt(x),w=Math.atan2(D,u*S);h=Math.sin(h*w)/D,o=Math.sin(o*w)/D}const E=o*S;if(c=c*h+f*E,l=l*h+m*E,d=d*h+g*E,p=p*h+v*E,h===1-o){const D=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=D,l*=D,d*=D,p*=D}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],d=i[r+3],p=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+d*p+c*m-l*f,e[t+1]=c*g+d*f+l*p-o*m,e[t+2]=l*g+d*m+o*f-c*p,e[t+3]=d*g-o*p-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(r/2),p=o(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*d*p+l*m*g,this._y=l*m*p-f*d*g,this._z=l*d*g+f*m*p,this._w=l*d*p-f*m*g;break;case"YXZ":this._x=f*d*p+l*m*g,this._y=l*m*p-f*d*g,this._z=l*d*g-f*m*p,this._w=l*d*p+f*m*g;break;case"ZXY":this._x=f*d*p-l*m*g,this._y=l*m*p+f*d*g,this._z=l*d*g+f*m*p,this._w=l*d*p-f*m*g;break;case"ZYX":this._x=f*d*p-l*m*g,this._y=l*m*p+f*d*g,this._z=l*d*g-f*m*p,this._w=l*d*p+f*m*g;break;case"YZX":this._x=f*d*p+l*m*g,this._y=l*m*p+f*d*g,this._z=l*d*g-f*m*p,this._w=l*d*p-f*m*g;break;case"XZY":this._x=f*d*p-l*m*g,this._y=l*m*p-f*d*g,this._z=l*d*g+f*m*p,this._w=l*d*p+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],p=t[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(d-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-i*l,this._z=s*d+a*l+i*c-r*o,this._w=a*d-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),p=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),d=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+c*l+a*p-o*d,this.y=i+c*d+o*l-s*p,this.z=r+c*p+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new N,Ha=new Ji;class Qi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rr.copy(i.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),sr.subVectors(this.max,Bi),oi.subVectors(e.a,Bi),ci.subVectors(e.b,Bi),li.subVectors(e.c,Bi),Pn.subVectors(ci,oi),Ln.subVectors(li,ci),Gn.subVectors(oi,li);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Gn.z,Gn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Gn.z,0,-Gn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Gn.y,Gn.x,0];return!es(t,oi,ci,li,sr)||(t=[1,0,0,0,1,0,0,0,1],!es(t,oi,ci,li,sr))?!1:(ar.crossVectors(Pn,Ln),t=[ar.x,ar.y,ar.z],es(t,oi,ci,li,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new N,new N,new N,new N,new N,new N,new N,new N],sn=new N,rr=new Qi,oi=new N,ci=new N,li=new N,Pn=new N,Ln=new N,Gn=new N,Bi=new N,sr=new N,ar=new N,Vn=new N;function es(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vn.fromArray(n,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),c=e.dot(Vn),l=t.dot(Vn),d=i.dot(Vn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Zl=new Qi,zi=new N,ts=new N;class Ma{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zl.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(ts)),this.expandByPoint(zi.copy(e.center).sub(ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new N,ns=new N,or=new N,Dn=new N,is=new N,cr=new N,rs=new N;class fc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ns.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(ns);const s=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=Dn.dot(this.direction),c=-Dn.dot(or),l=Dn.lengthSq(),d=Math.abs(1-a*a);let p,f,m,g;if(d>0)if(p=a*c-o,f=a*o-c,g=s*d,p>=0)if(f>=-g)if(f<=g){const v=1/d;p*=v,f*=v,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+l}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+l;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+l;else f<=-g?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+l):f<=g?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+l);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ns).addScaledVector(or,f),m}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const i=xn.dot(this.direction),r=xn.dot(xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,r,s){is.subVectors(t,e),cr.subVectors(i,e),rs.crossVectors(is,cr);let a=this.direction.dot(rs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const c=o*this.direction.dot(cr.crossVectors(Dn,cr));if(c<0)return null;const l=o*this.direction.dot(is.cross(Dn));if(l<0||c+l>a)return null;const d=-o*Dn.dot(rs);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,a,o,c,l,d,p,f,m,g,v,h){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,d,p,f,m,g,v,h)}set(e,t,i,r,s,a,o,c,l,d,p,f,m,g,v,h){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=p,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*p,g=o*d,v=o*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=m+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,m=c*p,g=l*d,v=l*p;t[0]=f+v*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,m=c*p,g=l*d,v=l*p;t[0]=f-v*o,t[4]=-a*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,m=a*p,g=o*d,v=o*p;t[0]=c*d,t[4]=g*l-m,t[8]=f*l+v,t[1]=c*p,t[5]=v*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=v-f*p,t[8]=g*p+m,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*p+g,t[10]=f-v*p}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=f*p+v,t[5]=a*d,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*d,t[10]=v*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jl,e,Ql)}lookAt(e,t,i){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),In.crossVectors(i,Zt),In.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),In.crossVectors(i,Zt)),In.normalize(),lr.crossVectors(Zt,In),r[0]=In.x,r[4]=lr.x,r[8]=Zt.x,r[1]=In.y,r[5]=lr.y,r[9]=Zt.y,r[2]=In.z,r[6]=lr.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],p=i[5],f=i[9],m=i[13],g=i[2],v=i[6],h=i[10],u=i[14],S=i[3],x=i[7],E=i[11],D=i[15],w=r[0],A=r[4],C=r[8],b=r[12],_=r[1],L=r[5],k=r[9],B=r[13],$=r[2],J=r[6],Y=r[10],Z=r[14],X=r[3],me=r[7],ve=r[11],_e=r[15];return s[0]=a*w+o*_+c*$+l*X,s[4]=a*A+o*L+c*J+l*me,s[8]=a*C+o*k+c*Y+l*ve,s[12]=a*b+o*B+c*Z+l*_e,s[1]=d*w+p*_+f*$+m*X,s[5]=d*A+p*L+f*J+m*me,s[9]=d*C+p*k+f*Y+m*ve,s[13]=d*b+p*B+f*Z+m*_e,s[2]=g*w+v*_+h*$+u*X,s[6]=g*A+v*L+h*J+u*me,s[10]=g*C+v*k+h*Y+u*ve,s[14]=g*b+v*B+h*Z+u*_e,s[3]=S*w+x*_+E*$+D*X,s[7]=S*A+x*L+E*J+D*me,s[11]=S*C+x*k+E*Y+D*ve,s[15]=S*b+x*B+E*Z+D*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],p=e[6],f=e[10],m=e[14],g=e[3],v=e[7],h=e[11],u=e[15];return g*(+s*c*p-r*l*p-s*o*f+i*l*f+r*o*m-i*c*m)+v*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*d-s*c*d)+h*(+t*l*p-t*o*m-s*a*p+i*a*m+s*o*d-i*l*d)+u*(-r*o*d-t*c*p+t*o*f+r*a*p-i*a*f+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=e[9],f=e[10],m=e[11],g=e[12],v=e[13],h=e[14],u=e[15],S=p*h*l-v*f*l+v*c*m-o*h*m-p*c*u+o*f*u,x=g*f*l-d*h*l-g*c*m+a*h*m+d*c*u-a*f*u,E=d*v*l-g*p*l+g*o*m-a*v*m-d*o*u+a*p*u,D=g*p*c-d*v*c-g*o*f+a*v*f+d*o*h-a*p*h,w=t*S+i*x+r*E+s*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=S*A,e[1]=(v*f*s-p*h*s-v*r*m+i*h*m+p*r*u-i*f*u)*A,e[2]=(o*h*s-v*c*s+v*r*l-i*h*l-o*r*u+i*c*u)*A,e[3]=(p*c*s-o*f*s-p*r*l+i*f*l+o*r*m-i*c*m)*A,e[4]=x*A,e[5]=(d*h*s-g*f*s+g*r*m-t*h*m-d*r*u+t*f*u)*A,e[6]=(g*c*s-a*h*s-g*r*l+t*h*l+a*r*u-t*c*u)*A,e[7]=(a*f*s-d*c*s+d*r*l-t*f*l-a*r*m+t*c*m)*A,e[8]=E*A,e[9]=(g*p*s-d*v*s-g*i*m+t*v*m+d*i*u-t*p*u)*A,e[10]=(a*v*s-g*o*s+g*i*l-t*v*l-a*i*u+t*o*u)*A,e[11]=(d*o*s-a*p*s-d*i*l+t*p*l+a*i*m-t*o*m)*A,e[12]=D*A,e[13]=(d*v*r-g*p*r+g*i*f-t*v*f-d*i*h+t*p*h)*A,e[14]=(g*o*r-a*v*r-g*i*c+t*v*c+a*i*h-t*o*h)*A,e[15]=(a*p*r-d*o*r+d*i*c-t*p*c-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+i,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,p=o+o,f=s*l,m=s*d,g=s*p,v=a*d,h=a*p,u=o*p,S=c*l,x=c*d,E=c*p,D=i.x,w=i.y,A=i.z;return r[0]=(1-(v+u))*D,r[1]=(m+E)*D,r[2]=(g-x)*D,r[3]=0,r[4]=(m-E)*w,r[5]=(1-(f+u))*w,r[6]=(h+S)*w,r[7]=0,r[8]=(g+x)*A,r[9]=(h-S)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ui.set(r[0],r[1],r[2]).length();const a=ui.set(r[4],r[5],r[6]).length(),o=ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const l=1/s,d=1/a,p=1/o;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=d,an.elements[5]*=d,an.elements[6]*=d,an.elements[8]*=p,an.elements[9]*=p,an.elements[10]*=p,t.setFromRotationMatrix(an),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=wn){const c=this.elements,l=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(o===wn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ur)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=wn){const c=this.elements,l=1/(t-e),d=1/(i-r),p=1/(a-s),f=(t+e)*l,m=(i+r)*d;let g,v;if(o===wn)g=(a+s)*p,v=-2*p;else if(o===Ur)g=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ui=new N,an=new yt,Jl=new N(0,0,0),Ql=new N(1,1,1),In=new N,lr=new N,Zt=new N,Ga=new yt,Va=new Ji;class gn{constructor(e=0,t=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Va.setFromEuler(this),this.setFromQuaternion(Va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Sa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eu=0;const Wa=new N,hi=new Ji,Mn=new yt,ur=new N,Hi=new N,tu=new N,nu=new Ji,Xa=new N(1,0,0),qa=new N(0,1,0),Ya=new N(0,0,1),Ka={type:"added"},iu={type:"removed"},di={type:"childadded",child:null},ss={type:"childremoved",child:null};class Ut extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new N,t=new gn,i=new Ji,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new tt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Xa,e)}rotateY(e){return this.rotateOnAxis(qa,e)}rotateZ(e){return this.rotateOnAxis(Ya,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xa,e)}translateY(e){return this.translateOnAxis(qa,e)}translateZ(e){return this.translateOnAxis(Ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ur.copy(e):ur.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Hi,ur,this.up):Mn.lookAt(ur,Hi,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),hi.setFromRotationMatrix(Mn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ka),di.child=e,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iu),ss.child=e,this.dispatchEvent(ss),ss.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ka),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,nu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new N(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new N,Sn=new N,as=new N,yn=new N,fi=new N,pi=new N,$a=new N,os=new N,cs=new N,ls=new N;class fn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Sn.subVectors(i,t),as.subVectors(e,t);const a=on.dot(on),o=on.dot(Sn),c=on.dot(as),l=Sn.dot(Sn),d=Sn.dot(as),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(l*c-o*d)*f,g=(a*d-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Sn.subVectors(e,t),on.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),on.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;fi.subVectors(r,i),pi.subVectors(s,i),os.subVectors(e,i);const c=fi.dot(os),l=pi.dot(os);if(c<=0&&l<=0)return t.copy(i);cs.subVectors(e,r);const d=fi.dot(cs),p=pi.dot(cs);if(d>=0&&p<=d)return t.copy(r);const f=c*p-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(fi,a);ls.subVectors(e,s);const m=fi.dot(ls),g=pi.dot(ls);if(g>=0&&m<=g)return t.copy(s);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(pi,o);const h=d*g-m*p;if(h<=0&&p-d>=0&&m-g>=0)return $a.subVectors(s,r),o=(p-d)/(p-d+(m-g)),t.copy(r).addScaledVector($a,o);const u=1/(h+v+f);return a=v*u,o=f*u,t.copy(i).addScaledVector(fi,a).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},hr={h:0,s:0,l:0};function us(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=Gl(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=us(a,s,e+1/3),this.g=us(a,s,e),this.b=us(a,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=pc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return gt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Xt(Ft.r*255,0,255))*65536+Math.round(Xt(Ft.g*255,0,255))*256+Math.round(Xt(Ft.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=d<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=en){gt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(hr);const i=$r(Un.h,hr.h,t),r=$r(Un.s,hr.s,t),s=$r(Un.l,hr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Qe;Qe.NAMES=pc;let ru=0;class er extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Ti,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bs,this.blendDst=Ts,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bs&&(i.blendSrc=this.blendSrc),this.blendDst!==Ts&&(i.blendDst=this.blendDst),this.blendEquation!==jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class mc extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new N,dr=new nt;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return uc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class gc extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _c extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ot extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let su=0;const nn=new yt,hs=new Ut,mi=new N,Jt=new Qi,Gi=new Qi,Pt=new N;class _n extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lc(e)?_c:gc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return hs.lookAt(e),hs.updateMatrix(),this.applyMatrix4(hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Jt.min,Gi.min),Jt.expandByPoint(Pt),Pt.addVectors(Jt.max,Gi.max),Jt.expandByPoint(Pt)):(Jt.expandByPoint(Gi.min),Jt.expandByPoint(Gi.max))}Jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Pt.fromBufferAttribute(o,l),c&&(mi.fromBufferAttribute(e,l),Pt.add(mi)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<i.count;C++)o[C]=new N,c[C]=new N;const l=new N,d=new N,p=new N,f=new nt,m=new nt,g=new nt,v=new N,h=new N;function u(C,b,_){l.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),p.fromBufferAttribute(i,_),f.fromBufferAttribute(s,C),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,_),d.sub(l),p.sub(l),m.sub(f),g.sub(f);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(L),h.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(L),o[C].add(v),o[b].add(v),o[_].add(v),c[C].add(h),c[b].add(h),c[_].add(h))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,b=S.length;C<b;++C){const _=S[C],L=_.start,k=_.count;for(let B=L,$=L+k;B<$;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new N,E=new N,D=new N,w=new N;function A(C){D.fromBufferAttribute(r,C),w.copy(D);const b=o[C];x.copy(b),x.sub(D.multiplyScalar(D.dot(b))).normalize(),E.crossVectors(w,b);const L=E.dot(c[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,b=S.length;C<b;++C){const _=S[C],L=_.start,k=_.count;for(let B=L,$=L+k;B<$;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,d=new N,p=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,h),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,h),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,p=o.normalized,f=new l.constructor(c.length*d);let m=0,g=0;for(let v=0,h=c.length;v<h;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*d;for(let u=0;u<d;u++)f[g++]=l[m++]}return new hn(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,p=l.length;d<p;d++){const f=l[d],m=e(f,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let p=0,f=l.length;p<f;p++){const m=l[p];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],p=s[l];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new yt,Wn=new fc,fr=new Ma,Za=new N,gi=new N,_i=new N,vi=new N,ds=new N,pr=new N,mr=new nt,gr=new nt,_r=new nt,Ja=new N,Qa=new N,eo=new N,vr=new N,xr=new N;class ct extends Ut{constructor(e=new _n,t=new mc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){pr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],p=s[c];d!==0&&(ds.fromBufferAttribute(p,e),a?pr.addScaledVector(ds,d):pr.addScaledVector(ds.sub(t),d))}t.add(pr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),!(fr.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(fr,Za)===null||Wn.origin.distanceToSquared(Za)>(e.far-e.near)**2))&&(ja.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(ja),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const h=f[g],u=a[h.materialIndex],S=Math.max(h.start,m.start),x=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let E=S,D=x;E<D;E+=3){const w=o.getX(E),A=o.getX(E+1),C=o.getX(E+2);r=Mr(this,u,e,i,l,d,p,w,A,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let h=g,u=v;h<u;h+=3){const S=o.getX(h),x=o.getX(h+1),E=o.getX(h+2);r=Mr(this,a,e,i,l,d,p,S,x,E),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const h=f[g],u=a[h.materialIndex],S=Math.max(h.start,m.start),x=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let E=S,D=x;E<D;E+=3){const w=E,A=E+1,C=E+2;r=Mr(this,u,e,i,l,d,p,w,A,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let h=g,u=v;h<u;h+=3){const S=h,x=h+1,E=h+2;r=Mr(this,a,e,i,l,d,p,S,x,E),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function au(n,e,t,i,r,s,a,o){let c;if(e.side===Kt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Bn,o),c===null)return null;xr.copy(o),xr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(xr);return l<t.near||l>t.far?null:{distance:l,point:xr.clone(),object:n}}function Mr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,gi),n.getVertexPosition(c,_i),n.getVertexPosition(l,vi);const d=au(n,e,t,i,gi,_i,vi,vr);if(d){r&&(mr.fromBufferAttribute(r,o),gr.fromBufferAttribute(r,c),_r.fromBufferAttribute(r,l),d.uv=fn.getInterpolation(vr,gi,_i,vi,mr,gr,_r,new nt)),s&&(mr.fromBufferAttribute(s,o),gr.fromBufferAttribute(s,c),_r.fromBufferAttribute(s,l),d.uv1=fn.getInterpolation(vr,gi,_i,vi,mr,gr,_r,new nt)),a&&(Ja.fromBufferAttribute(a,o),Qa.fromBufferAttribute(a,c),eo.fromBufferAttribute(a,l),d.normal=fn.getInterpolation(vr,gi,_i,vi,Ja,Qa,eo,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new N,materialIndex:0};fn.getNormal(gi,_i,vi,p.normal),d.face=p}return d}class Lt extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],p=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(p,2));function g(v,h,u,S,x,E,D,w,A,C,b){const _=E/A,L=D/C,k=E/2,B=D/2,$=w/2,J=A+1,Y=C+1;let Z=0,X=0;const me=new N;for(let ve=0;ve<Y;ve++){const _e=ve*L-B;for(let qe=0;qe<J;qe++){const Ze=qe*_-k;me[v]=Ze*S,me[h]=_e*x,me[u]=$,l.push(me.x,me.y,me.z),me[v]=0,me[h]=0,me[u]=w>0?1:-1,d.push(me.x,me.y,me.z),p.push(qe/A),p.push(1-ve/C),Z+=1}}for(let ve=0;ve<C;ve++)for(let _e=0;_e<A;_e++){const qe=f+_e+J*ve,Ze=f+_e+J*(ve+1),j=f+(_e+1)+J*(ve+1),re=f+(_e+1)+J*ve;c.push(qe,Ze,re),c.push(Ze,j,re),X+=6}o.addGroup(m,X,b),m+=X,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Di(n[t]);for(const r in i)e[r]=i[r]}return e}function ou(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const cu={clone:Di,merge:Bt};var lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lu,this.fragmentShader=uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xc extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new N,to=new nt,no=new nt;class qt extends xc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,to,no),t.subVectors(no,to)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,Mi=1;class hu extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(xi,Mi,e,t);r.layers=this.layers,this.add(r);const s=new qt(xi,Mi,e,t);s.layers=this.layers,this.add(s);const a=new qt(xi,Mi,e,t);a.layers=this.layers,this.add(a);const o=new qt(xi,Mi,e,t);o.layers=this.layers,this.add(o);const c=new qt(xi,Mi,e,t);c.layers=this.layers,this.add(c);const l=new qt(xi,Mi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(p,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mc extends Ht{constructor(e,t,i,r,s,a,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,i,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class du extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Lt(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:On});s.uniforms.tEquirect.value=t;const a=new ct(r,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=ln),new hu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const fs=new N,fu=new N,pu=new tt;class Kn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fs.subVectors(i,t).cross(fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pu.getNormalMatrix(e),r=this.coplanarPoint(fs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Ma,Sr=new N;class ya{constructor(e=new Kn,t=new Kn,i=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],d=r[5],p=r[6],f=r[7],m=r[8],g=r[9],v=r[10],h=r[11],u=r[12],S=r[13],x=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,h-m,E-u).normalize(),i[1].setComponents(c+s,f+l,h+m,E+u).normalize(),i[2].setComponents(c+a,f+d,h+g,E+S).normalize(),i[3].setComponents(c-a,f-d,h-g,E-S).normalize(),i[4].setComponents(c-o,f-p,h-v,E-x).normalize(),t===wn)i[5].setComponents(c+o,f+p,h+v,E+x).normalize();else if(t===Ur)i[5].setComponents(o,p,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Sr.x=r.normal.x>0?e.max.x:e.min.x,Sr.y=r.normal.y>0?e.max.y:e.min.y,Sr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mu(n){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,p=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,l){const d=c.array,p=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,o),p.count===-1&&f.length===0&&n.bufferSubData(l,0,d),f.length!==0){for(let m=0,g=f.length;m<g;m++){const v=f[m];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}p.count!==-1&&(n.bufferSubData(l,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count),p.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Ii extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,d=c+1,p=e/o,f=t/c,m=[],g=[],v=[],h=[];for(let u=0;u<d;u++){const S=u*f-a;for(let x=0;x<l;x++){const E=x*p-s;g.push(E,-S,0),v.push(0,0,1),h.push(x/o),h.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<o;S++){const x=S+l*u,E=S+l*(u+1),D=S+1+l*(u+1),w=S+1+l*u;m.push(x,E,w),m.push(E,D,w)}this.setIndex(m),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,th=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ih=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ch=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ph=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Th=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ch=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ph=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ih=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$h=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ld=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ud=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ed=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ud=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:gu,alphahash_pars_fragment:_u,alphamap_fragment:vu,alphamap_pars_fragment:xu,alphatest_fragment:Mu,alphatest_pars_fragment:Su,aomap_fragment:yu,aomap_pars_fragment:Eu,batching_pars_vertex:bu,batching_vertex:Tu,begin_vertex:Au,beginnormal_vertex:wu,bsdfs:Ru,iridescence_fragment:Cu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Du,clipping_planes_pars_vertex:Iu,clipping_planes_vertex:Uu,color_fragment:Nu,color_pars_fragment:Fu,color_pars_vertex:Ou,color_vertex:ku,common:Bu,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Gu,displacementmap_vertex:Vu,emissivemap_fragment:Wu,emissivemap_pars_fragment:Xu,colorspace_fragment:qu,colorspace_pars_fragment:Yu,envmap_fragment:Ku,envmap_common_pars_fragment:$u,envmap_pars_fragment:ju,envmap_pars_vertex:Zu,envmap_physical_pars_fragment:ch,envmap_vertex:Ju,fog_vertex:Qu,fog_pars_vertex:eh,fog_fragment:th,fog_pars_fragment:nh,gradientmap_pars_fragment:ih,lightmap_pars_fragment:rh,lights_lambert_fragment:sh,lights_lambert_pars_fragment:ah,lights_pars_begin:oh,lights_toon_fragment:lh,lights_toon_pars_fragment:uh,lights_phong_fragment:hh,lights_phong_pars_fragment:dh,lights_physical_fragment:fh,lights_physical_pars_fragment:ph,lights_fragment_begin:mh,lights_fragment_maps:gh,lights_fragment_end:_h,logdepthbuf_fragment:vh,logdepthbuf_pars_fragment:xh,logdepthbuf_pars_vertex:Mh,logdepthbuf_vertex:Sh,map_fragment:yh,map_pars_fragment:Eh,map_particle_fragment:bh,map_particle_pars_fragment:Th,metalnessmap_fragment:Ah,metalnessmap_pars_fragment:wh,morphinstance_vertex:Rh,morphcolor_vertex:Ch,morphnormal_vertex:Ph,morphtarget_pars_vertex:Lh,morphtarget_vertex:Dh,normal_fragment_begin:Ih,normal_fragment_maps:Uh,normal_pars_fragment:Nh,normal_pars_vertex:Fh,normal_vertex:Oh,normalmap_pars_fragment:kh,clearcoat_normal_fragment_begin:Bh,clearcoat_normal_fragment_maps:zh,clearcoat_pars_fragment:Hh,iridescence_pars_fragment:Gh,opaque_fragment:Vh,packing:Wh,premultiplied_alpha_fragment:Xh,project_vertex:qh,dithering_fragment:Yh,dithering_pars_fragment:Kh,roughnessmap_fragment:$h,roughnessmap_pars_fragment:jh,shadowmap_pars_fragment:Zh,shadowmap_pars_vertex:Jh,shadowmap_vertex:Qh,shadowmask_pars_fragment:ed,skinbase_vertex:td,skinning_pars_vertex:nd,skinning_vertex:id,skinnormal_vertex:rd,specularmap_fragment:sd,specularmap_pars_fragment:ad,tonemapping_fragment:od,tonemapping_pars_fragment:cd,transmission_fragment:ld,transmission_pars_fragment:ud,uv_pars_fragment:hd,uv_pars_vertex:dd,uv_vertex:fd,worldpos_vertex:pd,background_vert:md,background_frag:gd,backgroundCube_vert:_d,backgroundCube_frag:vd,cube_vert:xd,cube_frag:Md,depth_vert:Sd,depth_frag:yd,distanceRGBA_vert:Ed,distanceRGBA_frag:bd,equirect_vert:Td,equirect_frag:Ad,linedashed_vert:wd,linedashed_frag:Rd,meshbasic_vert:Cd,meshbasic_frag:Pd,meshlambert_vert:Ld,meshlambert_frag:Dd,meshmatcap_vert:Id,meshmatcap_frag:Ud,meshnormal_vert:Nd,meshnormal_frag:Fd,meshphong_vert:Od,meshphong_frag:kd,meshphysical_vert:Bd,meshphysical_frag:zd,meshtoon_vert:Hd,meshtoon_frag:Gd,points_vert:Vd,points_frag:Wd,shadow_vert:Xd,shadow_frag:qd,sprite_vert:Yd,sprite_frag:Kd},pe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},dn={basic:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Bt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Bt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Bt([pe.points,pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Bt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Bt([pe.common,pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Bt([pe.sprite,pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Bt([pe.common,pe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Bt([pe.lights,pe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};dn.physical={uniforms:Bt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const yr={r:0,b:0,g:0},qn=new gn,$d=new yt;function jd(n,e,t,i,r,s,a){const o=new Qe(0);let c=s===!0?0:1,l,d,p=null,f=0,m=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function v(S){let x=!1;const E=g(S);E===null?u(o,c):E&&E.isColor&&(u(E,1),x=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(S,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===Or)?(d===void 0&&(d=new ct(new Lt(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Di(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),qn.copy(x.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($d.makeRotationFromEuler(qn)),d.material.toneMapped=gt.getTransfer(E.colorSpace)!==xt,(p!==E||f!==E.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,p=E,f=E.version,m=n.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ct(new Ii(2,2),new zn({name:"BackgroundMaterial",uniforms:Di(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=gt.getTransfer(E.colorSpace)!==xt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||f!==E.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,p=E,f=E.version,m=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function u(S,x){S.getRGB(yr,vc(n)),i.buffers.color.setClear(yr.r,yr.g,yr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),c=x,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,u(o,c)},render:v,addToRenderList:h}}function Zd(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(_,L,k,B,$){let J=!1;const Y=p(B,k,L);s!==Y&&(s=Y,l(s.object)),J=m(_,B,k,$),J&&g(_,B,k,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,E(_,L,k,B),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function d(_){return n.deleteVertexArray(_)}function p(_,L,k){const B=k.wireframe===!0;let $=i[_.id];$===void 0&&($={},i[_.id]=$);let J=$[L.id];J===void 0&&(J={},$[L.id]=J);let Y=J[B];return Y===void 0&&(Y=f(c()),J[B]=Y),Y}function f(_){const L=[],k=[],B=[];for(let $=0;$<t;$++)L[$]=0,k[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:B,object:_,attributes:{},index:null}}function m(_,L,k,B){const $=s.attributes,J=L.attributes;let Y=0;const Z=k.getAttributes();for(const X in Z)if(Z[X].location>=0){const ve=$[X];let _e=J[X];if(_e===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor)),ve===void 0||ve.attribute!==_e||_e&&ve.data!==_e.data)return!0;Y++}return s.attributesNum!==Y||s.index!==B}function g(_,L,k,B){const $={},J=L.attributes;let Y=0;const Z=k.getAttributes();for(const X in Z)if(Z[X].location>=0){let ve=J[X];ve===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ve=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ve=_.instanceColor));const _e={};_e.attribute=ve,ve&&ve.data&&(_e.data=ve.data),$[X]=_e,Y++}s.attributes=$,s.attributesNum=Y,s.index=B}function v(){const _=s.newAttributes;for(let L=0,k=_.length;L<k;L++)_[L]=0}function h(_){u(_,0)}function u(_,L){const k=s.newAttributes,B=s.enabledAttributes,$=s.attributeDivisors;k[_]=1,B[_]===0&&(n.enableVertexAttribArray(_),B[_]=1),$[_]!==L&&(n.vertexAttribDivisor(_,L),$[_]=L)}function S(){const _=s.newAttributes,L=s.enabledAttributes;for(let k=0,B=L.length;k<B;k++)L[k]!==_[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function x(_,L,k,B,$,J,Y){Y===!0?n.vertexAttribIPointer(_,L,k,$,J):n.vertexAttribPointer(_,L,k,B,$,J)}function E(_,L,k,B){v();const $=B.attributes,J=k.getAttributes(),Y=L.defaultAttributeValues;for(const Z in J){const X=J[Z];if(X.location>=0){let me=$[Z];if(me===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),me!==void 0){const ve=me.normalized,_e=me.itemSize,qe=e.get(me);if(qe===void 0)continue;const Ze=qe.buffer,j=qe.type,re=qe.bytesPerElement,ne=j===n.INT||j===n.UNSIGNED_INT||me.gpuType===fa;if(me.isInterleavedBufferAttribute){const O=me.data,q=O.stride,le=me.offset;if(O.isInstancedInterleavedBuffer){for(let de=0;de<X.locationSize;de++)u(X.location+de,O.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let de=0;de<X.locationSize;de++)h(X.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let de=0;de<X.locationSize;de++)x(X.location+de,_e/X.locationSize,j,ve,q*re,(le+_e/X.locationSize*de)*re,ne)}else{if(me.isInstancedBufferAttribute){for(let O=0;O<X.locationSize;O++)u(X.location+O,me.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let O=0;O<X.locationSize;O++)h(X.location+O);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let O=0;O<X.locationSize;O++)x(X.location+O,_e/X.locationSize,j,ve,_e*re,_e/X.locationSize*O*re,ne)}}else if(Y!==void 0){const ve=Y[Z];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(X.location,ve);break;case 3:n.vertexAttrib3fv(X.location,ve);break;case 4:n.vertexAttrib4fv(X.location,ve);break;default:n.vertexAttrib1fv(X.location,ve)}}}}S()}function D(){C();for(const _ in i){const L=i[_];for(const k in L){const B=L[k];for(const $ in B)d(B[$].object),delete B[$];delete L[k]}delete i[_]}}function w(_){if(i[_.id]===void 0)return;const L=i[_.id];for(const k in L){const B=L[k];for(const $ in B)d(B[$].object),delete B[$];delete L[k]}delete i[_.id]}function A(_){for(const L in i){const k=i[L];if(k[_.id]===void 0)continue;const B=k[_.id];for(const $ in B)d(B[$].object),delete B[$];delete k[_.id]}}function C(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:h,disableUnusedAttributes:S}}function Jd(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function a(l,d,p){p!==0&&(n.drawArraysInstanced(i,l,d,p),t.update(d,i,p))}function o(l,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,i,1)}function c(l,d,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,d,0,f,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v];for(let v=0;v<f.length;v++)t.update(g,i,f[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Qd(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Rn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==An&&!A)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const p=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),u=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:u,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:E,maxSamples:D}}function ef(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Kn,o=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,m){const g=p.clippingPlanes,v=p.clipIntersection,h=p.clipShadows,u=n.get(p);if(!r||g===null||g.length===0||s&&!h)s?d(null):l();else{const S=s?0:i,x=S*4;let E=u.clippingState||null;c.value=E,E=d(g,f,x,m);for(let D=0;D!==x;++D)E[D]=t[D];u.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,m,g){const v=p!==null?p.length:0;let h=null;if(v!==0){if(h=c.value,g!==!0||h===null){const u=m+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(h===null||h.length<u)&&(h=new Float32Array(u));for(let x=0,E=m;x!==v;++x,E+=4)a.copy(p[x]).applyMatrix4(S,o),a.normal.toArray(h,E),h[E+3]=a.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}function tf(n){let e=new WeakMap;function t(a,o){return o===As?a.mapping=Ri:o===ws&&(a.mapping=Ci),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===As||o===ws)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new du(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class yc extends xc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bi=4,io=[.125,.215,.35,.446,.526,.582],Zn=20,ps=new yc,ro=new Qe;let ms=null,gs=0,_s=0,vs=!1;const $n=(1+Math.sqrt(5))/2,Si=1/$n,so=[new N(-$n,Si,0),new N($n,Si,0),new N(-Si,0,$n),new N(Si,0,$n),new N(0,$n,-Si),new N(0,$n,Si),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ao{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ms,gs,_s),this._renderer.xr.enabled=vs,e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ji,format:un,colorSpace:Hn,depthBuffer:!1},r=oo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nf(s)),this._blurMaterial=rf(s,e,t)}return r}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,ps)}_sceneToCubeUV(e,t,i,r){const o=new qt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(ro),d.toneMapping=kn,d.autoClear=!1;const m=new mc({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new ct(new Lt,m);let v=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,v=!0):(m.color.copy(ro),v=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):S===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const x=this._cubeSize;Er(r,S*x,u>2?x:0,x,x),d.setRenderTarget(r),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ri||e.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=co());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Er(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ps)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=so[(r-s-1)%so.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new ct(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),v=s/g,h=isFinite(s)?1+Math.floor(d*v):Zn;h>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Zn}`);const u=[];let S=0;for(let A=0;A<Zn;++A){const C=A/v,b=Math.exp(-C*C/2);u.push(b),A===0?S+=b:A<h&&(S+=2*b)}for(let A=0;A<u.length;A++)u[A]=u[A]/S;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const E=this._sizeLods[r],D=3*E*(r>x-bi?r-x+bi:0),w=4*(this._cubeSize-E);Er(t,D,w,3*E,2*E),c.setRenderTarget(t),c.render(p,ps)}}function nf(n){const e=[],t=[],i=[];let r=n;const s=n-bi+1+io.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-bi?c=io[a-n+bi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),d=-l,p=1+l,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,g=6,v=3,h=2,u=1,S=new Float32Array(v*g*m),x=new Float32Array(h*g*m),E=new Float32Array(u*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,C=w>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];S.set(b,v*g*w),x.set(f,h*g*w);const _=[w,w,w,w,w,w];E.set(_,u*g*w)}const D=new _n;D.setAttribute("position",new hn(S,v)),D.setAttribute("uv",new hn(x,h)),D.setAttribute("faceIndex",new hn(E,u)),e.push(D),r>bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function oo(n,e,t){const i=new ni(n,e,t);return i.texture.mapping=Or,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Er(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rf(n,e,t){const i=new Float32Array(Zn),r=new N(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function co(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function lo(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===As||c===ws,d=c===Ri||c===Ci;if(l||d){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ao(n)),p=l?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new ao(n)),p=l?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function af(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&uc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function of(n,e,t,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let h=0,u=v.length;h<u;h++)e.remove(v[h])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(p){const f=p.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const v=m[g];for(let h=0,u=v.length;h<u;h++)e.update(v[h],n.ARRAY_BUFFER)}}function l(p){const f=[],m=p.index,g=p.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let x=0,E=S.length;x<E;x+=3){const D=S[x+0],w=S[x+1],A=S[x+2];f.push(D,w,w,A,A,D)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,E=S.length/3-1;x<E;x+=3){const D=x+0,w=x+1,A=x+2;f.push(D,w,w,A,A,D)}}else return;const h=new(lc(f)?_c:gc)(f,1);h.version=v;const u=s.get(p);u&&e.remove(u),s.set(p,h)}function d(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:d}}function cf(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function l(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),t.update(m,i,g))}function d(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let h=0;for(let u=0;u<g;u++)h+=m[u];t.update(h,i,1)}function p(f,m,g,v){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<f.length;u++)l(f[u]/a,m[u],v[u]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,v,0,g);let u=0;for(let S=0;S<g;S++)u+=m[S];for(let S=0;S<v.length;S++)t.update(u,i,v[S])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function lf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uf(n,e,t){const i=new WeakMap,r=new Mt;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let _=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),h===!0&&(E=3);let D=o.attributes.position.count*E,w=1;D>e.maxTextureSize&&(w=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*w*4*p),C=new dc(A,D,w,p);C.type=An,C.needsUpdate=!0;const b=E*4;for(let L=0;L<p;L++){const k=u[L],B=S[L],$=x[L],J=D*w*4*L;for(let Y=0;Y<k.count;Y++){const Z=Y*b;g===!0&&(r.fromBufferAttribute(k,Y),A[J+Z+0]=r.x,A[J+Z+1]=r.y,A[J+Z+2]=r.z,A[J+Z+3]=0),v===!0&&(r.fromBufferAttribute(B,Y),A[J+Z+4]=r.x,A[J+Z+5]=r.y,A[J+Z+6]=r.z,A[J+Z+7]=0),h===!0&&(r.fromBufferAttribute($,Y),A[J+Z+8]=r.x,A[J+Z+9]=r.y,A[J+Z+10]=r.z,A[J+Z+11]=$.itemSize===4?r.w:1)}}f={count:p,texture:C,size:new nt(D,w)},i.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let h=0;h<l.length;h++)g+=l[h];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function hf(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,p=e.get(c,d);if(r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return p}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Ec extends Ht{constructor(e,t,i,r,s,a,o,c,l,d=Ai){if(d!==Ai&&d!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ai&&(i=ti),i===void 0&&d===Li&&(i=Pi),super(null,r,s,a,o,c,d,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bc=new Ht,uo=new Ec(1,1),Tc=new dc,Ac=new jl,wc=new Mc,ho=[],fo=[],po=new Float32Array(16),mo=new Float32Array(9),go=new Float32Array(4);function Fi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ho[r];if(s===void 0&&(s=new Float32Array(r),ho[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Br(n,e){let t=fo[e];t===void 0&&(t=new Int32Array(e),fo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function df(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ff(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function pf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function mf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function gf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;go.set(i),n.uniformMatrix2fv(this.addr,!1,go),Ct(t,i)}}function _f(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;mo.set(i),n.uniformMatrix3fv(this.addr,!1,mo),Ct(t,i)}}function vf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;po.set(i),n.uniformMatrix4fv(this.addr,!1,po),Ct(t,i)}}function xf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function Sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function yf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function Ef(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function Tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function Af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function wf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(uo.compareFunction=cc,s=uo):s=bc,t.setTexture2D(e||s,r)}function Rf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ac,r)}function Cf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wc,r)}function Pf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tc,r)}function Lf(n){switch(n){case 5126:return df;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return _f;case 35676:return vf;case 5124:case 35670:return xf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return yf;case 5125:return Ef;case 36294:return bf;case 36295:return Tf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Pf}}function Df(n,e){n.uniform1fv(this.addr,e)}function If(n,e){const t=Fi(e,this.size,2);n.uniform2fv(this.addr,t)}function Uf(n,e){const t=Fi(e,this.size,3);n.uniform3fv(this.addr,t)}function Nf(n,e){const t=Fi(e,this.size,4);n.uniform4fv(this.addr,t)}function Ff(n,e){const t=Fi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Of(n,e){const t=Fi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kf(n,e){const t=Fi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bf(n,e){n.uniform1iv(this.addr,e)}function zf(n,e){n.uniform2iv(this.addr,e)}function Hf(n,e){n.uniform3iv(this.addr,e)}function Gf(n,e){n.uniform4iv(this.addr,e)}function Vf(n,e){n.uniform1uiv(this.addr,e)}function Wf(n,e){n.uniform2uiv(this.addr,e)}function Xf(n,e){n.uniform3uiv(this.addr,e)}function qf(n,e){n.uniform4uiv(this.addr,e)}function Yf(n,e,t){const i=this.cache,r=e.length,s=Br(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||bc,s[a])}function Kf(n,e,t){const i=this.cache,r=e.length,s=Br(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ac,s[a])}function $f(n,e,t){const i=this.cache,r=e.length,s=Br(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||wc,s[a])}function jf(n,e,t){const i=this.cache,r=e.length,s=Br(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Tc,s[a])}function Zf(n){switch(n){case 5126:return Df;case 35664:return If;case 35665:return Uf;case 35666:return Nf;case 35674:return Ff;case 35675:return Of;case 35676:return kf;case 5124:case 35670:return Bf;case 35667:case 35671:return zf;case 35668:case 35672:return Hf;case 35669:case 35673:return Gf;case 5125:return Vf;case 36294:return Wf;case 36295:return Xf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return jf}}class Jf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lf(t.type)}}class Qf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zf(t.type)}}class ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function _o(n,e){n.seq.push(e),n.map[e.id]=e}function tp(n,e,t){const i=n.name,r=i.length;for(xs.lastIndex=0;;){const s=xs.exec(i),a=xs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){_o(t,l===void 0?new Jf(o,n,e):new Qf(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new ep(o),_o(t,p)),t=p}}}class Cr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);tp(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function vo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const np=37297;let ip=0;function rp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function sp(n){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n);let i;switch(e===t?i="":e===Ir&&t===Dr?i="LinearDisplayP3ToLinearSRGB":e===Dr&&t===Ir&&(i="LinearSRGBToLinearDisplayP3"),n){case Hn:case kr:return[i,"LinearTransferOETF"];case en:case xa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rp(n.getShaderSource(e),a)}else return r}function ap(n,e){const t=sp(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function op(n,e){let t;switch(e){case bl:t="Linear";break;case Tl:t="Reinhard";break;case Al:t="OptimizedCineon";break;case wl:t="ACESFilmic";break;case Cl:t="AgX";break;case Pl:t="Neutral";break;case Rl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function lp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function up(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qi(n){return n!==""}function Mo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function So(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(n){return n.replace(hp,fp)}const dp=new Map;function fp(n,e){let t=et[e];if(t===void 0){const i=dp.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ia(t)}const pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(n){return n.replace(pp,mp)}function mp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Eo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ko?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function _p(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ri:case Ci:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function xp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case da:e="ENVMAP_BLENDING_MULTIPLY";break;case yl:e="ENVMAP_BLENDING_MIX";break;case El:e="ENVMAP_BLENDING_ADD";break}return e}function Mp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Sp(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=gp(t),l=_p(t),d=vp(t),p=xp(t),f=Mp(t),m=cp(t),g=lp(s),v=r.createProgram();let h,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),u.length>0&&(u+=`
`)):(h=[Eo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),u=[Eo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?et.tonemapping_pars_fragment:"",t.toneMapping!==kn?op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ap("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),a=ia(a),a=Mo(a,t),a=So(a,t),o=ia(o),o=Mo(o,t),o=So(o,t),a=yo(a),o=yo(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",t.glslVersion===Oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=S+h+a,E=S+u+o,D=vo(r,r.VERTEX_SHADER,x),w=vo(r,r.FRAGMENT_SHADER,E);r.attachShader(v,D),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(L){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(D).trim(),$=r.getShaderInfoLog(w).trim();let J=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,w);else{const Z=xo(r,D,"vertex"),X=xo(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Z+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||$==="")&&(Y=!1);Y&&(L.diagnostics={runnable:J,programLog:k,vertexShader:{log:B,prefix:h},fragmentShader:{log:$,prefix:u}})}r.deleteShader(D),r.deleteShader(w),C=new Cr(r,v),b=up(r,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,np)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ip++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=w,this}let yp=0;class Ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bp(e),t.set(e,i)),i}}class bp{constructor(e){this.id=yp++,this.code=e,this.usedTimes=0}}function Tp(n,e,t,i,r,s,a){const o=new Sa,c=new Ep,l=new Set,d=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function h(b,_,L,k,B){const $=k.fog,J=B.geometry,Y=b.isMeshStandardMaterial?k.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),X=Z&&Z.mapping===Or?Z.image.height:null,me=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ve=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_e=ve!==void 0?ve.length:0;let qe=0;J.morphAttributes.position!==void 0&&(qe=1),J.morphAttributes.normal!==void 0&&(qe=2),J.morphAttributes.color!==void 0&&(qe=3);let Ze,j,re,ne;if(me){const G=dn[me];Ze=G.vertexShader,j=G.fragmentShader}else Ze=b.vertexShader,j=b.fragmentShader,c.update(b),re=c.getVertexShaderID(b),ne=c.getFragmentShaderID(b);const O=n.getRenderTarget(),q=B.isInstancedMesh===!0,le=B.isBatchedMesh===!0,de=!!b.map,Ee=!!b.matcap,T=!!Z,De=!!b.aoMap,Te=!!b.lightMap,$e=!!b.bumpMap,ge=!!b.normalMap,ut=!!b.displacementMap,Fe=!!b.emissiveMap,je=!!b.metalnessMap,R=!!b.roughnessMap,M=b.anisotropy>0,W=b.clearcoat>0,ie=b.dispersion>0,se=b.iridescence>0,ee=b.sheen>0,Ce=b.transmission>0,fe=M&&!!b.anisotropyMap,Me=W&&!!b.clearcoatMap,Ye=W&&!!b.clearcoatNormalMap,ae=W&&!!b.clearcoatRoughnessMap,Se=se&&!!b.iridescenceMap,rt=se&&!!b.iridescenceThicknessMap,Be=ee&&!!b.sheenColorMap,ye=ee&&!!b.sheenRoughnessMap,He=!!b.specularMap,Je=!!b.specularColorMap,vt=!!b.specularIntensityMap,I=Ce&&!!b.transmissionMap,oe=Ce&&!!b.thicknessMap,Q=!!b.gradientMap,te=!!b.alphaMap,ce=b.alphaTest>0,Ie=!!b.alphaHash,st=!!b.extensions;let P=kn;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(P=n.toneMapping);const z={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:j,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:le,batchingColor:le&&B._colorsTexture!==null,instancing:q,instancingColor:q&&B.instanceColor!==null,instancingMorph:q&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Hn,alphaToCoverage:!!b.alphaToCoverage,map:de,matcap:Ee,envMap:T,envMapMode:T&&Z.mapping,envMapCubeUVHeight:X,aoMap:De,lightMap:Te,bumpMap:$e,normalMap:ge,displacementMap:f&&ut,emissiveMap:Fe,normalMapObjectSpace:ge&&b.normalMapType===Ul,normalMapTangentSpace:ge&&b.normalMapType===oc,metalnessMap:je,roughnessMap:R,anisotropy:M,anisotropyMap:fe,clearcoat:W,clearcoatMap:Me,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ae,dispersion:ie,iridescence:se,iridescenceMap:Se,iridescenceThicknessMap:rt,sheen:ee,sheenColorMap:Be,sheenRoughnessMap:ye,specularMap:He,specularColorMap:Je,specularIntensityMap:vt,transmission:Ce,transmissionMap:I,thicknessMap:oe,gradientMap:Q,opaque:b.transparent===!1&&b.blending===Ti&&b.alphaToCoverage===!1,alphaMap:te,alphaTest:ce,alphaHash:Ie,combine:b.combine,mapUv:de&&v(b.map.channel),aoMapUv:De&&v(b.aoMap.channel),lightMapUv:Te&&v(b.lightMap.channel),bumpMapUv:$e&&v(b.bumpMap.channel),normalMapUv:ge&&v(b.normalMap.channel),displacementMapUv:ut&&v(b.displacementMap.channel),emissiveMapUv:Fe&&v(b.emissiveMap.channel),metalnessMapUv:je&&v(b.metalnessMap.channel),roughnessMapUv:R&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:Me&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(b.sheenRoughnessMap.channel),specularMapUv:He&&v(b.specularMap.channel),specularColorMapUv:Je&&v(b.specularColorMap.channel),specularIntensityMapUv:vt&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:oe&&v(b.thicknessMap.channel),alphaMapUv:te&&v(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ge||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(de||te),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:qe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:P,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&gt.getTransfer(b.map.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tn,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return z.vertexUv1s=l.has(1),z.vertexUv2s=l.has(2),z.vertexUv3s=l.has(3),l.clear(),z}function u(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)_.push(L),_.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(_,b),x(_,b),_.push(n.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function S(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function x(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.doubleSided&&o.enable(10),_.flipSided&&o.enable(11),_.useDepthPacking&&o.enable(12),_.dithering&&o.enable(13),_.transmission&&o.enable(14),_.sheen&&o.enable(15),_.opaque&&o.enable(16),_.pointsUvs&&o.enable(17),_.decodeVideoTexture&&o.enable(18),_.alphaToCoverage&&o.enable(19),b.push(o.mask)}function E(b){const _=g[b.type];let L;if(_){const k=dn[_];L=cu.clone(k.uniforms)}else L=b.uniforms;return L}function D(b,_){let L;for(let k=0,B=d.length;k<B;k++){const $=d[k];if($.cacheKey===_){L=$,++L.usedTimes;break}}return L===void 0&&(L=new Sp(n,_,b,s),d.push(L)),L}function w(b){if(--b.usedTimes===0){const _=d.indexOf(b);d[_]=d[d.length-1],d.pop(),b.destroy()}}function A(b){c.remove(b)}function C(){c.dispose()}return{getParameters:h,getProgramCacheKey:u,getUniforms:E,acquireProgram:D,releaseProgram:w,releaseShaderCache:A,programs:d,dispose:C}}function Ap(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function wp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function To(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(p,f,m,g,v,h){let u=n[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:m,groupOrder:g,renderOrder:p.renderOrder,z:v,group:h},n[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=v,u.group=h),e++,u}function o(p,f,m,g,v,h){const u=a(p,f,m,g,v,h);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(p,f,m,g,v,h){const u=a(p,f,m,g,v,h);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(p,f){t.length>1&&t.sort(p||wp),i.length>1&&i.sort(f||bo),r.length>1&&r.sort(f||bo)}function d(){for(let p=e,f=n.length;p<f;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:d,sort:l}}function Rp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new To,n.set(i,[a])):r>=s.length?(a=new To,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Qe};break;case"SpotLight":t={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Pp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lp=0;function Dp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ip(n){const e=new Cp,t=Pp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new yt,a=new yt;function o(l){let d=0,p=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,g=0,v=0,h=0,u=0,S=0,x=0,E=0,D=0,w=0,A=0;l.sort(Dp);for(let b=0,_=l.length;b<_;b++){const L=l[b],k=L.color,B=L.intensity,$=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*B,p+=k.g*B,f+=k.b*B;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],B);A++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,X=t.get(L);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=L.shadow.matrix,S++}i.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(k).multiplyScalar(B),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[v]=Y;const Z=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,Z.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[v]=Z.matrix,L.castShadow){const X=t.get(L);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=J,E++}v++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(k).multiplyScalar(B),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[h]=Y,h++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const Z=L.shadow,X=t.get(L);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(B),Y.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[u]=Y,u++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==h||C.hemiLength!==u||C.numDirectionalShadows!==S||C.numPointShadows!==x||C.numSpotShadows!==E||C.numSpotMaps!==D||C.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=h,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+D-w,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,C.directionalLength=m,C.pointLength=g,C.spotLength=v,C.rectAreaLength=h,C.hemiLength=u,C.numDirectionalShadows=S,C.numPointShadows=x,C.numSpotShadows=E,C.numSpotMaps=D,C.numLightProbes=A,i.version=Lp++)}function c(l,d){let p=0,f=0,m=0,g=0,v=0;const h=d.matrixWorldInverse;for(let u=0,S=l.length;u<S;u++){const x=l[u];if(x.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),p++}else if(x.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),m++}else if(x.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),a.identity(),s.copy(x.matrixWorld),s.premultiply(h),a.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),f++}else if(x.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),v++}}}return{setup:o,setupView:c,state:i}}function Ao(n){const e=new Ip(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Up(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ao(n),e.set(r,[o])):s>=a.length?(o=new Ao(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Np extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bp(n,e,t){let i=new ya;const r=new nt,s=new nt,a=new Mt,o=new Np({depthPacking:Il}),c=new Fp,l={},d=t.maxTextureSize,p={[Bn]:Kt,[Kt]:Bn,[Tn]:Tn},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Op,fragmentShader:kp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ct(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let u=this.type;this.render=function(w,A,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const b=n.getRenderTarget(),_=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(On),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=u!==En&&this.type===En,$=u===En&&this.type!==En;for(let J=0,Y=w.length;J<Y;J++){const Z=w[J],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const me=X.getFrameExtents();if(r.multiply(me),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/me.x),r.x=s.x*me.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/me.y),r.y=s.y*me.y,X.mapSize.y=s.y)),X.map===null||B===!0||$===!0){const _e=this.type!==En?{minFilter:Yt,magFilter:Yt}:{};X.map!==null&&X.map.dispose(),X.map=new ni(r.x,r.y,_e),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ve=X.getViewportCount();for(let _e=0;_e<ve;_e++){const qe=X.getViewport(_e);a.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),k.viewport(a),X.updateMatrices(Z,_e),i=X.getFrustum(),E(A,C,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===En&&S(X,C),X.needsUpdate=!1}u=this.type,h.needsUpdate=!1,n.setRenderTarget(b,_,L)};function S(w,A){const C=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,C,f,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,C,m,v,null)}function x(w,A,C,b){let _=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)_=L;else if(_=C.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=_.uuid,B=A.uuid;let $=l[k];$===void 0&&($={},l[k]=$);let J=$[B];J===void 0&&(J=_.clone(),$[B]=J,A.addEventListener("dispose",D)),_=J}if(_.visible=A.visible,_.wireframe=A.wireframe,b===En?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:p[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const k=n.properties.get(_);k.light=C}return _}function E(w,A,C,b,_){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===En)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),$=w.material;if(Array.isArray($)){const J=B.groups;for(let Y=0,Z=J.length;Y<Z;Y++){const X=J[Y],me=$[X.materialIndex];if(me&&me.visible){const ve=x(w,me,b,_);w.onBeforeShadow(n,w,A,C,B,ve,X),n.renderBufferDirect(C,null,B,ve,w,X),w.onAfterShadow(n,w,A,C,B,ve,X)}}}else if($.visible){const J=x(w,$,b,_);w.onBeforeShadow(n,w,A,C,B,J,null),n.renderBufferDirect(C,null,B,J,w,null),w.onAfterShadow(n,w,A,C,B,J,null)}}const k=w.children;for(let B=0,$=k.length;B<$;B++)E(k[B],A,C,b,_)}function D(w){w.target.removeEventListener("dispose",D);for(const C in l){const b=l[C],_=w.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}function zp(n){function e(){let I=!1;const oe=new Mt;let Q=null;const te=new Mt(0,0,0,0);return{setMask:function(ce){Q!==ce&&!I&&(n.colorMask(ce,ce,ce,ce),Q=ce)},setLocked:function(ce){I=ce},setClear:function(ce,Ie,st,P,z){z===!0&&(ce*=P,Ie*=P,st*=P),oe.set(ce,Ie,st,P),te.equals(oe)===!1&&(n.clearColor(ce,Ie,st,P),te.copy(oe))},reset:function(){I=!1,Q=null,te.set(-1,0,0,0)}}}function t(){let I=!1,oe=null,Q=null,te=null;return{setTest:function(ce){ce?ne(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(ce){oe!==ce&&!I&&(n.depthMask(ce),oe=ce)},setFunc:function(ce){if(Q!==ce){switch(ce){case ml:n.depthFunc(n.NEVER);break;case gl:n.depthFunc(n.ALWAYS);break;case _l:n.depthFunc(n.LESS);break;case Pr:n.depthFunc(n.LEQUAL);break;case vl:n.depthFunc(n.EQUAL);break;case xl:n.depthFunc(n.GEQUAL);break;case Ml:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ce}},setLocked:function(ce){I=ce},setClear:function(ce){te!==ce&&(n.clearDepth(ce),te=ce)},reset:function(){I=!1,oe=null,Q=null,te=null}}}function i(){let I=!1,oe=null,Q=null,te=null,ce=null,Ie=null,st=null,P=null,z=null;return{setTest:function(G){I||(G?ne(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(G){oe!==G&&!I&&(n.stencilMask(G),oe=G)},setFunc:function(G,K,he){(Q!==G||te!==K||ce!==he)&&(n.stencilFunc(G,K,he),Q=G,te=K,ce=he)},setOp:function(G,K,he){(Ie!==G||st!==K||P!==he)&&(n.stencilOp(G,K,he),Ie=G,st=K,P=he)},setLocked:function(G){I=G},setClear:function(G){z!==G&&(n.clearStencil(G),z=G)},reset:function(){I=!1,oe=null,Q=null,te=null,ce=null,Ie=null,st=null,P=null,z=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},d={},p=new WeakMap,f=[],m=null,g=!1,v=null,h=null,u=null,S=null,x=null,E=null,D=null,w=new Qe(0,0,0),A=0,C=!1,b=null,_=null,L=null,k=null,B=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Y=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=Y>=2);let X=null,me={};const ve=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),qe=new Mt().fromArray(ve),Ze=new Mt().fromArray(_e);function j(I,oe,Q,te){const ce=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(I,Ie),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<Q;st++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(oe+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Ie}const re={};re[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),s.setFunc(Pr),$e(!1),ge(La),ne(n.CULL_FACE),De(On);function ne(I){l[I]!==!0&&(n.enable(I),l[I]=!0)}function O(I){l[I]!==!1&&(n.disable(I),l[I]=!1)}function q(I,oe){return d[I]!==oe?(n.bindFramebuffer(I,oe),d[I]=oe,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function le(I,oe){let Q=f,te=!1;if(I){Q=p.get(oe),Q===void 0&&(Q=[],p.set(oe,Q));const ce=I.textures;if(Q.length!==ce.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,st=ce.length;Ie<st;Ie++)Q[Ie]=n.COLOR_ATTACHMENT0+Ie;Q.length=ce.length,te=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,te=!0);te&&n.drawBuffers(Q)}function de(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const Ee={[jn]:n.FUNC_ADD,[Jc]:n.FUNC_SUBTRACT,[Qc]:n.FUNC_REVERSE_SUBTRACT};Ee[el]=n.MIN,Ee[tl]=n.MAX;const T={[nl]:n.ZERO,[il]:n.ONE,[rl]:n.SRC_COLOR,[bs]:n.SRC_ALPHA,[ul]:n.SRC_ALPHA_SATURATE,[cl]:n.DST_COLOR,[al]:n.DST_ALPHA,[sl]:n.ONE_MINUS_SRC_COLOR,[Ts]:n.ONE_MINUS_SRC_ALPHA,[ll]:n.ONE_MINUS_DST_COLOR,[ol]:n.ONE_MINUS_DST_ALPHA,[hl]:n.CONSTANT_COLOR,[dl]:n.ONE_MINUS_CONSTANT_COLOR,[fl]:n.CONSTANT_ALPHA,[pl]:n.ONE_MINUS_CONSTANT_ALPHA};function De(I,oe,Q,te,ce,Ie,st,P,z,G){if(I===On){g===!0&&(O(n.BLEND),g=!1);return}if(g===!1&&(ne(n.BLEND),g=!0),I!==Zc){if(I!==v||G!==C){if((h!==jn||x!==jn)&&(n.blendEquation(n.FUNC_ADD),h=jn,x=jn),G)switch(I){case Ti:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.ONE,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ua:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ti:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ua:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,S=null,E=null,D=null,w.set(0,0,0),A=0,v=I,C=G}return}ce=ce||oe,Ie=Ie||Q,st=st||te,(oe!==h||ce!==x)&&(n.blendEquationSeparate(Ee[oe],Ee[ce]),h=oe,x=ce),(Q!==u||te!==S||Ie!==E||st!==D)&&(n.blendFuncSeparate(T[Q],T[te],T[Ie],T[st]),u=Q,S=te,E=Ie,D=st),(P.equals(w)===!1||z!==A)&&(n.blendColor(P.r,P.g,P.b,z),w.copy(P),A=z),v=I,C=!1}function Te(I,oe){I.side===Tn?O(n.CULL_FACE):ne(n.CULL_FACE);let Q=I.side===Kt;oe&&(Q=!Q),$e(Q),I.blending===Ti&&I.transparent===!1?De(On):De(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const te=I.stencilWrite;a.setTest(te),te&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Fe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(I){b!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),b=I)}function ge(I){I!==$c?(ne(n.CULL_FACE),I!==_&&(I===La?n.cullFace(n.BACK):I===jc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),_=I}function ut(I){I!==L&&(J&&n.lineWidth(I),L=I)}function Fe(I,oe,Q){I?(ne(n.POLYGON_OFFSET_FILL),(k!==oe||B!==Q)&&(n.polygonOffset(oe,Q),k=oe,B=Q)):O(n.POLYGON_OFFSET_FILL)}function je(I){I?ne(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function R(I){I===void 0&&(I=n.TEXTURE0+$-1),X!==I&&(n.activeTexture(I),X=I)}function M(I,oe,Q){Q===void 0&&(X===null?Q=n.TEXTURE0+$-1:Q=X);let te=me[Q];te===void 0&&(te={type:void 0,texture:void 0},me[Q]=te),(te.type!==I||te.texture!==oe)&&(X!==Q&&(n.activeTexture(Q),X=Q),n.bindTexture(I,oe||re[I]),te.type=I,te.texture=oe)}function W(){const I=me[X];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(I){qe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),qe.copy(I))}function ye(I){Ze.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ze.copy(I))}function He(I,oe){let Q=c.get(oe);Q===void 0&&(Q=new WeakMap,c.set(oe,Q));let te=Q.get(I);te===void 0&&(te=n.getUniformBlockIndex(oe,I.name),Q.set(I,te))}function Je(I,oe){const te=c.get(oe).get(I);o.get(oe)!==te&&(n.uniformBlockBinding(oe,te,I.__bindingPointIndex),o.set(oe,te))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},X=null,me={},d={},p=new WeakMap,f=[],m=null,g=!1,v=null,h=null,u=null,S=null,x=null,E=null,D=null,w=new Qe(0,0,0),A=0,C=!1,b=null,_=null,L=null,k=null,B=null,qe.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ne,disable:O,bindFramebuffer:q,drawBuffers:le,useProgram:de,setBlending:De,setMaterial:Te,setFlipSided:$e,setCullFace:ge,setLineWidth:ut,setPolygonOffset:Fe,setScissorTest:je,activeTexture:R,bindTexture:M,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:se,texImage2D:Se,texImage3D:rt,updateUBOMapping:He,uniformBlockBinding:Je,texStorage2D:Ye,texStorage3D:ae,texSubImage2D:ee,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:Me,scissor:Be,viewport:ye,reset:vt}}function wo(n,e,t,i){const r=Hp(i);switch(t){case ec:return n*e;case nc:return n*e;case ic:return n*e*2;case rc:return n*e/r.components*r.byteLength;case ga:return n*e/r.components*r.byteLength;case sc:return n*e*2/r.components*r.byteLength;case _a:return n*e*2/r.components*r.byteLength;case tc:return n*e*3/r.components*r.byteLength;case un:return n*e*4/r.components*r.byteLength;case va:return n*e*4/r.components*r.byteLength;case br:case Tr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ar:case wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ls:case Is:return Math.max(n,16)*Math.max(e,8)/4;case Ps:case Ds:return Math.max(n,8)*Math.max(e,8)/2;case Us:case Ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ks:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gs:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ws:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qs:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ys:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ks:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $s:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case js:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rr:case Zs:case Js:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ac:case Qs:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ea:case ta:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hp(n){switch(n){case Rn:case Zo:return{byteLength:1,components:1};case Yi:case Jo:case ji:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case ti:case fa:case An:return{byteLength:4,components:1};case Qo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Gp(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,d=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return m?new OffscreenCanvas(R,M):Nr("canvas")}function v(R,M,W){let ie=1;const se=je(R);if((se.width>W||se.height>W)&&(ie=W/Math.max(se.width,se.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(ie*se.width),Ce=Math.floor(ie*se.height);p===void 0&&(p=g(ee,Ce));const fe=M?g(ee,Ce):p;return fe.width=ee,fe.height=Ce,fe.getContext("2d").drawImage(R,0,0,ee,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+Ce+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function h(R){return R.generateMipmaps&&R.minFilter!==Yt&&R.minFilter!==ln}function u(R){n.generateMipmap(R)}function S(R,M,W,ie,se=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=M;if(M===n.RED&&(W===n.FLOAT&&(ee=n.R32F),W===n.HALF_FLOAT&&(ee=n.R16F),W===n.UNSIGNED_BYTE&&(ee=n.R8)),M===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.R8UI),W===n.UNSIGNED_SHORT&&(ee=n.R16UI),W===n.UNSIGNED_INT&&(ee=n.R32UI),W===n.BYTE&&(ee=n.R8I),W===n.SHORT&&(ee=n.R16I),W===n.INT&&(ee=n.R32I)),M===n.RG&&(W===n.FLOAT&&(ee=n.RG32F),W===n.HALF_FLOAT&&(ee=n.RG16F),W===n.UNSIGNED_BYTE&&(ee=n.RG8)),M===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RG8UI),W===n.UNSIGNED_SHORT&&(ee=n.RG16UI),W===n.UNSIGNED_INT&&(ee=n.RG32UI),W===n.BYTE&&(ee=n.RG8I),W===n.SHORT&&(ee=n.RG16I),W===n.INT&&(ee=n.RG32I)),M===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),M===n.RGBA){const Ce=se?Lr:gt.getTransfer(ie);W===n.FLOAT&&(ee=n.RGBA32F),W===n.HALF_FLOAT&&(ee=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ee=Ce===xt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(R,M){let W;return R?M===null||M===ti||M===Pi?W=n.DEPTH24_STENCIL8:M===An?W=n.DEPTH32F_STENCIL8:M===Yi&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ti||M===Pi?W=n.DEPTH_COMPONENT24:M===An?W=n.DEPTH_COMPONENT32F:M===Yi&&(W=n.DEPTH_COMPONENT16),W}function E(R,M){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function D(R){const M=R.target;M.removeEventListener("dispose",D),A(M),M.isVideoTexture&&d.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),b(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const W=R.source,ie=f.get(W);if(ie){const se=ie[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(R),Object.keys(ie).length===0&&f.delete(W)}i.remove(R)}function C(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const W=R.source,ie=f.get(W);delete ie[M.__cacheKey],a.memory.textures--}function b(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let se=0;se<M.__webglFramebuffer[ie].length;se++)n.deleteFramebuffer(M.__webglFramebuffer[ie][se]);else n.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)n.deleteFramebuffer(M.__webglFramebuffer[ie]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=R.textures;for(let ie=0,se=W.length;ie<se;ie++){const ee=i.get(W[ie]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(W[ie])}i.remove(R)}let _=0;function L(){_=0}function k(){const R=_;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),_+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function $(R,M){const W=i.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(W,R,M);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+M)}function J(R,M){const W=i.get(R);if(R.version>0&&W.__version!==R.version){Ze(W,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+M)}function Y(R,M){const W=i.get(R);if(R.version>0&&W.__version!==R.version){Ze(W,R,M);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+M)}function Z(R,M){const W=i.get(R);if(R.version>0&&W.__version!==R.version){j(W,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+M)}const X={[Rs]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Cs]:n.MIRRORED_REPEAT},me={[Yt]:n.NEAREST,[Ll]:n.NEAREST_MIPMAP_NEAREST,[nr]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Yr]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},ve={[Nl]:n.NEVER,[Hl]:n.ALWAYS,[Fl]:n.LESS,[cc]:n.LEQUAL,[Ol]:n.EQUAL,[zl]:n.GEQUAL,[kl]:n.GREATER,[Bl]:n.NOTEQUAL};function _e(R,M){if(M.type===An&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===Yr||M.magFilter===nr||M.magFilter===Qn||M.minFilter===ln||M.minFilter===Yr||M.minFilter===nr||M.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,X[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,X[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,X[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,me[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yt||M.minFilter!==nr&&M.minFilter!==Qn||M.type===An&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function qe(R,M){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",D));const ie=M.source;let se=f.get(ie);se===void 0&&(se={},f.set(ie,se));const ee=B(M);if(ee!==R.__cacheKey){se[ee]===void 0&&(se[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),se[ee].usedTimes++;const Ce=se[R.__cacheKey];Ce!==void 0&&(se[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&C(M)),R.__cacheKey=ee,R.__webglTexture=se[ee].texture}return W}function Ze(R,M,W){let ie=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=n.TEXTURE_3D);const se=qe(R,M),ee=M.source;t.bindTexture(ie,R.__webglTexture,n.TEXTURE0+W);const Ce=i.get(ee);if(ee.version!==Ce.__version||se===!0){t.activeTexture(n.TEXTURE0+W);const fe=gt.getPrimaries(gt.workingColorSpace),Me=M.colorSpace===Fn?null:gt.getPrimaries(M.colorSpace),Ye=M.colorSpace===Fn||fe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ae=v(M.image,!1,r.maxTextureSize);ae=Fe(M,ae);const Se=s.convert(M.format,M.colorSpace),rt=s.convert(M.type);let Be=S(M.internalFormat,Se,rt,M.colorSpace,M.isVideoTexture);_e(ie,M);let ye;const He=M.mipmaps,Je=M.isVideoTexture!==!0,vt=Ce.__version===void 0||se===!0,I=ee.dataReady,oe=E(M,ae);if(M.isDepthTexture)Be=x(M.format===Li,M.type),vt&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Be,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Be,ae.width,ae.height,0,Se,rt,null));else if(M.isDataTexture)if(He.length>0){Je&&vt&&t.texStorage2D(n.TEXTURE_2D,oe,Be,He[0].width,He[0].height);for(let Q=0,te=He.length;Q<te;Q++)ye=He[Q],Je?I&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ye.width,ye.height,Se,rt,ye.data):t.texImage2D(n.TEXTURE_2D,Q,Be,ye.width,ye.height,0,Se,rt,ye.data);M.generateMipmaps=!1}else Je?(vt&&t.texStorage2D(n.TEXTURE_2D,oe,Be,ae.width,ae.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Se,rt,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Be,ae.width,ae.height,0,Se,rt,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Be,He[0].width,He[0].height,ae.depth);for(let Q=0,te=He.length;Q<te;Q++)if(ye=He[Q],M.format!==un)if(Se!==null)if(Je){if(I)if(M.layerUpdates.size>0){const ce=wo(ye.width,ye.height,M.format,M.type);for(const Ie of M.layerUpdates){const st=ye.data.subarray(Ie*ce/ye.data.BYTES_PER_ELEMENT,(Ie+1)*ce/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ie,ye.width,ye.height,1,Se,st,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ye.width,ye.height,ae.depth,Se,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Be,ye.width,ye.height,ae.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ye.width,ye.height,ae.depth,Se,rt,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Be,ye.width,ye.height,ae.depth,0,Se,rt,ye.data)}else{Je&&vt&&t.texStorage2D(n.TEXTURE_2D,oe,Be,He[0].width,He[0].height);for(let Q=0,te=He.length;Q<te;Q++)ye=He[Q],M.format!==un?Se!==null?Je?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?I&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ye.width,ye.height,Se,rt,ye.data):t.texImage2D(n.TEXTURE_2D,Q,Be,ye.width,ye.height,0,Se,rt,ye.data)}else if(M.isDataArrayTexture)if(Je){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Be,ae.width,ae.height,ae.depth),I)if(M.layerUpdates.size>0){const Q=wo(ae.width,ae.height,M.format,M.type);for(const te of M.layerUpdates){const ce=ae.data.subarray(te*Q/ae.data.BYTES_PER_ELEMENT,(te+1)*Q/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,Se,rt,ce)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,rt,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,ae.width,ae.height,ae.depth,0,Se,rt,ae.data);else if(M.isData3DTexture)Je?(vt&&t.texStorage3D(n.TEXTURE_3D,oe,Be,ae.width,ae.height,ae.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,rt,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Be,ae.width,ae.height,ae.depth,0,Se,rt,ae.data);else if(M.isFramebufferTexture){if(vt)if(Je)t.texStorage2D(n.TEXTURE_2D,oe,Be,ae.width,ae.height);else{let Q=ae.width,te=ae.height;for(let ce=0;ce<oe;ce++)t.texImage2D(n.TEXTURE_2D,ce,Be,Q,te,0,Se,rt,null),Q>>=1,te>>=1}}else if(He.length>0){if(Je&&vt){const Q=je(He[0]);t.texStorage2D(n.TEXTURE_2D,oe,Be,Q.width,Q.height)}for(let Q=0,te=He.length;Q<te;Q++)ye=He[Q],Je?I&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Se,rt,ye):t.texImage2D(n.TEXTURE_2D,Q,Be,Se,rt,ye);M.generateMipmaps=!1}else if(Je){if(vt){const Q=je(ae);t.texStorage2D(n.TEXTURE_2D,oe,Be,Q.width,Q.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,rt,ae)}else t.texImage2D(n.TEXTURE_2D,0,Be,Se,rt,ae);h(M)&&u(ie),Ce.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function j(R,M,W){if(M.image.length!==6)return;const ie=qe(R,M),se=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+W);const ee=i.get(se);if(se.version!==ee.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);const Ce=gt.getPrimaries(gt.workingColorSpace),fe=M.colorSpace===Fn?null:gt.getPrimaries(M.colorSpace),Me=M.colorSpace===Fn||Ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ye=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let te=0;te<6;te++)!Ye&&!ae?Se[te]=v(M.image[te],!0,r.maxCubemapSize):Se[te]=ae?M.image[te].image:M.image[te],Se[te]=Fe(M,Se[te]);const rt=Se[0],Be=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),He=S(M.internalFormat,Be,ye,M.colorSpace),Je=M.isVideoTexture!==!0,vt=ee.__version===void 0||ie===!0,I=se.dataReady;let oe=E(M,rt);_e(n.TEXTURE_CUBE_MAP,M);let Q;if(Ye){Je&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,He,rt.width,rt.height);for(let te=0;te<6;te++){Q=Se[te].mipmaps;for(let ce=0;ce<Q.length;ce++){const Ie=Q[ce];M.format!==un?Be!==null?Je?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,0,0,Ie.width,Ie.height,Be,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,He,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,0,0,Ie.width,Ie.height,Be,ye,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,He,Ie.width,Ie.height,0,Be,ye,Ie.data)}}}else{if(Q=M.mipmaps,Je&&vt){Q.length>0&&oe++;const te=je(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,He,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se[te].width,Se[te].height,Be,ye,Se[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Se[te].width,Se[te].height,0,Be,ye,Se[te].data);for(let ce=0;ce<Q.length;ce++){const st=Q[ce].image[te].image;Je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,0,0,st.width,st.height,Be,ye,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,He,st.width,st.height,0,Be,ye,st.data)}}else{Je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Be,ye,Se[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Be,ye,Se[te]);for(let ce=0;ce<Q.length;ce++){const Ie=Q[ce];Je?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,0,0,Be,ye,Ie.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,He,Be,ye,Ie.image[te])}}}h(M)&&u(n.TEXTURE_CUBE_MAP),ee.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,W,ie,se,ee){const Ce=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),Me=S(W.internalFormat,Ce,fe,W.colorSpace);if(!i.get(M).__hasExternalTextures){const ae=Math.max(1,M.width>>ee),Se=Math.max(1,M.height>>ee);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,ee,Me,ae,Se,M.depth,0,Ce,fe,null):t.texImage2D(se,ee,Me,ae,Se,0,Ce,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,se,i.get(W).__webglTexture,0,$e(M)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,se,i.get(W).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(R,M,W){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const ie=M.depthTexture,se=ie&&ie.isDepthTexture?ie.type:null,ee=x(M.stencilBuffer,se),Ce=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=$e(M);ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,ee,M.width,M.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,R)}else{const ie=M.textures;for(let se=0;se<ie.length;se++){const ee=ie[se],Ce=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),Me=S(ee.internalFormat,Ce,fe,ee.colorSpace),Ye=$e(M);W&&ge(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Me,M.width,M.height):ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,Me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Me,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,se=$e(M);if(M.depthTexture.format===Ai)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Li)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function q(R){const M=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");O(M.__webglFramebuffer,R)}else if(W){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=n.createRenderbuffer(),ne(M.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),ne(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(R,M,W){const ie=i.get(R);M!==void 0&&re(ie.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&q(R)}function de(R){const M=R.texture,W=i.get(R),ie=i.get(M);R.addEventListener("dispose",w);const se=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=M.version,a.memory.textures++),ee){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let Me=0;Me<M.mipmaps.length;Me++)W.__webglFramebuffer[fe][Me]=n.createFramebuffer()}else W.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)W.__webglFramebuffer[fe]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let fe=0,Me=se.length;fe<Me;fe++){const Ye=i.get(se[fe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const Me=se[fe];W.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const Ye=s.convert(Me.format,Me.colorSpace),ae=s.convert(Me.type),Se=S(Me.internalFormat,Ye,ae,Me.colorSpace,R.isXRRenderTarget===!0),rt=$e(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Se,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),_e(n.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)re(W.__webglFramebuffer[fe][Me],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me);else re(W.__webglFramebuffer[fe],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);h(M)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Me=se.length;fe<Me;fe++){const Ye=se[fe],ae=i.get(Ye);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),_e(n.TEXTURE_2D,Ye),re(W.__webglFramebuffer,R,Ye,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),h(Ye)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),_e(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)re(W.__webglFramebuffer[Me],R,M,n.COLOR_ATTACHMENT0,fe,Me);else re(W.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,fe,0);h(M)&&u(fe),t.unbindTexture()}R.depthBuffer&&q(R)}function Ee(R){const M=R.textures;for(let W=0,ie=M.length;W<ie;W++){const se=M[W];if(h(se)){const ee=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(se).__webglTexture;t.bindTexture(ee,Ce),u(ee),t.unbindTexture()}}}const T=[],De=[];function Te(R){if(R.samples>0){if(ge(R)===!1){const M=R.textures,W=R.width,ie=R.height;let se=n.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(R),fe=M.length>1;if(fe)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);const Ye=i.get(M[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,W,ie,0,0,W,ie,se,n.NEAREST),c===!0&&(T.length=0,De.length=0,T.push(n.COLOR_ATTACHMENT0+Me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(T.push(ee),De.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);const Ye=i.get(M[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function $e(R){return Math.min(r.maxSamples,R.samples)}function ge(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(R){const M=a.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function Fe(R,M){const W=R.colorSpace,ie=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Hn&&W!==Fn&&(gt.getTransfer(W)===xt?(ie!==un||se!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=le,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ge}function Vp(n,e){function t(i,r=Fn){let s;const a=gt.getTransfer(r);if(i===Rn)return n.UNSIGNED_BYTE;if(i===pa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ma)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zo)return n.BYTE;if(i===Jo)return n.SHORT;if(i===Yi)return n.UNSIGNED_SHORT;if(i===fa)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===ji)return n.HALF_FLOAT;if(i===ec)return n.ALPHA;if(i===tc)return n.RGB;if(i===un)return n.RGBA;if(i===nc)return n.LUMINANCE;if(i===ic)return n.LUMINANCE_ALPHA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===rc)return n.RED;if(i===ga)return n.RED_INTEGER;if(i===sc)return n.RG;if(i===_a)return n.RG_INTEGER;if(i===va)return n.RGBA_INTEGER;if(i===br||i===Tr||i===Ar||i===wr)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ps||i===Ls||i===Ds||i===Is)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ps)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ls)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ds)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Is)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Us||i===Ns||i===Fs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Us||i===Ns)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fs)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Os||i===ks||i===Bs||i===zs||i===Hs||i===Gs||i===Vs||i===Ws||i===Xs||i===qs||i===Ys||i===Ks||i===$s||i===js)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Os)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ks)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bs)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zs)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hs)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gs)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vs)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ws)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xs)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qs)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ys)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ks)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$s)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===js)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rr||i===Zs||i===Js)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rr)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Js)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===Qs||i===ea||i===ta)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ta)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Wp extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lt extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xp={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const h=t.getJointPose(v,i),u=this._getHandJoint(l,v);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zn({vertexShader:qp,fragmentShader:Yp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $p extends Ni{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,p=null,f=null,m=null,g=null;const v=new Kp,h=t.getContextAttributes();let u=null,S=null;const x=[],E=[],D=new nt;let w=null;const A=new qt;A.layers.enable(1),A.viewport=new Mt;const C=new qt;C.layers.enable(2),C.viewport=new Mt;const b=[A,C],_=new Wp;_.layers.enable(1),_.layers.enable(2);let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=x[j];return re===void 0&&(re=new Ms,x[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=x[j];return re===void 0&&(re=new Ms,x[j]=re),re.getGripSpace()},this.getHand=function(j){let re=x[j];return re===void 0&&(re=new Ms,x[j]=re),re.getHandSpace()};function B(j){const re=E.indexOf(j.inputSource);if(re===-1)return;const ne=x[re];ne!==void 0&&(ne.update(j.inputSource,j.frame,l||a),ne.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",J);for(let j=0;j<x.length;j++){const re=E[j];re!==null&&(E[j]=null,x[j].disconnect(re))}L=null,k=null,v.reset(),e.setRenderTarget(u),m=null,f=null,p=null,r=null,S=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",$),r.addEventListener("inputsourceschange",J),h.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const re={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ni(m.framebufferWidth,m.framebufferHeight,{format:un,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let re=null,ne=null,O=null;h.depth&&(O=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=h.stencil?Li:Ai,ne=h.stencil?Pi:ti);const q={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:s};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(q),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ni(f.textureWidth,f.textureHeight,{format:un,type:Rn,depthTexture:new Ec(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(j){for(let re=0;re<j.removed.length;re++){const ne=j.removed[re],O=E.indexOf(ne);O>=0&&(E[O]=null,x[O].disconnect(ne))}for(let re=0;re<j.added.length;re++){const ne=j.added[re];let O=E.indexOf(ne);if(O===-1){for(let le=0;le<x.length;le++)if(le>=E.length){E.push(ne),O=le;break}else if(E[le]===null){E[le]=ne,O=le;break}if(O===-1)break}const q=x[O];q&&q.connect(ne)}}const Y=new N,Z=new N;function X(j,re,ne){Y.setFromMatrixPosition(re.matrixWorld),Z.setFromMatrixPosition(ne.matrixWorld);const O=Y.distanceTo(Z),q=re.projectionMatrix.elements,le=ne.projectionMatrix.elements,de=q[14]/(q[10]-1),Ee=q[14]/(q[10]+1),T=(q[9]+1)/q[5],De=(q[9]-1)/q[5],Te=(q[8]-1)/q[0],$e=(le[8]+1)/le[0],ge=de*Te,ut=de*$e,Fe=O/(-Te+$e),je=Fe*-Te;re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(je),j.translateZ(Fe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=de+Fe,M=Ee+Fe,W=ge-je,ie=ut+(O-je),se=T*Ee/M*R,ee=De*Ee/M*R;j.projectionMatrix.makePerspective(W,ie,se,ee,R,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function me(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;v.texture!==null&&(j.near=v.depthNear,j.far=v.depthFar),_.near=C.near=A.near=j.near,_.far=C.far=A.far=j.far,(L!==_.near||k!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),L=_.near,k=_.far,A.near=L,A.far=k,C.near=L,C.far=k,A.updateProjectionMatrix(),C.updateProjectionMatrix(),j.updateProjectionMatrix());const re=j.parent,ne=_.cameras;me(_,re);for(let O=0;O<ne.length;O++)me(ne[O],re);ne.length===2?X(_,A,C):_.projectionMatrix.copy(A.projectionMatrix),ve(j,_,re)};function ve(j,re,ne){ne===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(ne.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=na*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let _e=null;function qe(j,re){if(d=re.getViewerPose(l||a),g=re,d!==null){const ne=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let O=!1;ne.length!==_.cameras.length&&(_.cameras.length=0,O=!0);for(let le=0;le<ne.length;le++){const de=ne[le];let Ee=null;if(m!==null)Ee=m.getViewport(de);else{const De=p.getViewSubImage(f,de);Ee=De.viewport,le===0&&(e.setRenderTargetTextures(S,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(S))}let T=b[le];T===void 0&&(T=new qt,T.layers.enable(le),T.viewport=new Mt,b[le]=T),T.matrix.fromArray(de.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(de.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),le===0&&(_.matrix.copy(T.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),O===!0&&_.cameras.push(T)}const q=r.enabledFeatures;if(q&&q.includes("depth-sensing")){const le=p.getDepthInformation(ne[0]);le&&le.isValid&&le.texture&&v.init(e,le,r.renderState)}}for(let ne=0;ne<x.length;ne++){const O=E[ne],q=x[ne];O!==null&&q!==void 0&&q.update(O,re,l||a)}_e&&_e(j,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Ze=new Sc;Ze.setAnimationLoop(qe),this.setAnimationLoop=function(j){_e=j},this.dispose=function(){}}}const Yn=new gn,jp=new yt;function Zp(n,e){function t(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function i(h,u){u.color.getRGB(h.fogColor.value,vc(n)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function r(h,u,S,x,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(h,u):u.isMeshToonMaterial?(s(h,u),p(h,u)):u.isMeshPhongMaterial?(s(h,u),d(h,u)):u.isMeshStandardMaterial?(s(h,u),f(h,u),u.isMeshPhysicalMaterial&&m(h,u,E)):u.isMeshMatcapMaterial?(s(h,u),g(h,u)):u.isMeshDepthMaterial?s(h,u):u.isMeshDistanceMaterial?(s(h,u),v(h,u)):u.isMeshNormalMaterial?s(h,u):u.isLineBasicMaterial?(a(h,u),u.isLineDashedMaterial&&o(h,u)):u.isPointsMaterial?c(h,u,S,x):u.isSpriteMaterial?l(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,t(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===Kt&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,t(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===Kt&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,t(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,t(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const S=e.get(u),x=S.envMap,E=S.envMapRotation;x&&(h.envMap.value=x,Yn.copy(E),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(Yn)),h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,h.aoMapTransform))}function a(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform))}function o(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function c(h,u,S,x){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*S,h.scale.value=x*.5,u.map&&(h.map.value=u.map,t(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function l(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function p(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function f(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function m(h,u,S){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Kt&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=S.texture,h.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,u){u.matcap&&(h.matcap.value=u.matcap)}function v(h,u){const S=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(S.matrixWorld),h.nearDistance.value=S.shadow.camera.near,h.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Jp(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const E=x.program;i.uniformBlockBinding(S,E)}function l(S,x){let E=r[S.id];E===void 0&&(g(S),E=d(S),r[S.id]=E,S.addEventListener("dispose",h));const D=x.program;i.updateUBOMapping(S,D);const w=e.render.frame;s[S.id]!==w&&(f(S),s[S.id]=w)}function d(S){const x=p();S.__bindingPointIndex=x;const E=n.createBuffer(),D=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,D,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=r[S.id],E=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,A=E.length;w<A;w++){const C=Array.isArray(E[w])?E[w]:[E[w]];for(let b=0,_=C.length;b<_;b++){const L=C[b];if(m(L,w,b,D)===!0){const k=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let J=0;J<B.length;J++){const Y=B[J],Z=v(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,k+$,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,x,E,D){const w=S.value,A=x+"_"+E;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{const C=D[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return D[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(S){const x=S.uniforms;let E=0;const D=16;for(let A=0,C=x.length;A<C;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let _=0,L=b.length;_<L;_++){const k=b[_],B=Array.isArray(k.value)?k.value:[k.value];for(let $=0,J=B.length;$<J;$++){const Y=B[$],Z=v(Y),X=E%D;X!==0&&D-X<Z.boundary&&(E+=D-X),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Z.storage}}}const w=E%D;return w>0&&(E+=D-w),S.__size=E,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function h(S){const x=S.target;x.removeEventListener("dispose",h);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Rc{constructor(e={}){const{canvas:t=Vl(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,h=null;const u=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=kn,this.toneMappingExposure=1;const x=this;let E=!1,D=0,w=0,A=null,C=-1,b=null;const _=new Mt,L=new Mt;let k=null;const B=new Qe(0);let $=0,J=t.width,Y=t.height,Z=1,X=null,me=null;const ve=new Mt(0,0,J,Y),_e=new Mt(0,0,J,Y);let qe=!1;const Ze=new ya;let j=!1,re=!1;const ne=new yt,O=new N,q=new Mt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Ee(){return A===null?Z:1}let T=i;function De(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ha}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",ce,!1),T===null){const U="webgl2";if(T=De(U,y),T===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Te,$e,ge,ut,Fe,je,R,M,W,ie,se,ee,Ce,fe,Me,Ye,ae,Se,rt,Be,ye,He,Je,vt;function I(){Te=new af(T),Te.init(),He=new Vp(T,Te),$e=new Qd(T,Te,e,He),ge=new zp(T),ut=new lf(T),Fe=new Ap,je=new Gp(T,Te,ge,Fe,$e,He,ut),R=new tf(x),M=new sf(x),W=new mu(T),Je=new Zd(T,W),ie=new of(T,W,ut,Je),se=new hf(T,ie,W,ut),rt=new uf(T,$e,je),Ye=new ef(Fe),ee=new Tp(x,R,M,Te,$e,Je,Ye),Ce=new Zp(x,Fe),fe=new Rp,Me=new Up(Te),Se=new jd(x,R,M,ge,se,f,c),ae=new Bp(x,se,$e),vt=new Jp(T,ut,$e,ge),Be=new Jd(T,Te,ut),ye=new cf(T,Te,ut),ut.programs=ee.programs,x.capabilities=$e,x.extensions=Te,x.properties=Fe,x.renderLists=fe,x.shadowMap=ae,x.state=ge,x.info=ut}I();const oe=new $p(x,T);this.xr=oe,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=Te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(J,Y,!1))},this.getSize=function(y){return y.set(J,Y)},this.setSize=function(y,U,H=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,Y=U,t.width=Math.floor(y*Z),t.height=Math.floor(U*Z),H===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(J*Z,Y*Z).floor()},this.setDrawingBufferSize=function(y,U,H){J=y,Y=U,Z=H,t.width=Math.floor(y*H),t.height=Math.floor(U*H),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(ve)},this.setViewport=function(y,U,H,V){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,U,H,V),ge.viewport(_.copy(ve).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy(_e)},this.setScissor=function(y,U,H,V){y.isVector4?_e.set(y.x,y.y,y.z,y.w):_e.set(y,U,H,V),ge.scissor(L.copy(_e).multiplyScalar(Z).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(y){ge.setScissorTest(qe=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(y=!0,U=!0,H=!0){let V=0;if(y){let F=!1;if(A!==null){const ue=A.texture.format;F=ue===va||ue===_a||ue===ga}if(F){const ue=A.texture.type,xe=ue===Rn||ue===ti||ue===Yi||ue===Pi||ue===pa||ue===ma,be=Se.getClearColor(),Ae=Se.getClearAlpha(),ze=be.r,Ve=be.g,Ue=be.b;xe?(m[0]=ze,m[1]=Ve,m[2]=Ue,m[3]=Ae,T.clearBufferuiv(T.COLOR,0,m)):(g[0]=ze,g[1]=Ve,g[2]=Ue,g[3]=Ae,T.clearBufferiv(T.COLOR,0,g))}else V|=T.COLOR_BUFFER_BIT}U&&(V|=T.DEPTH_BUFFER_BIT),H&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),Me.dispose(),Fe.dispose(),R.dispose(),M.dispose(),se.dispose(),Je.dispose(),vt.dispose(),ee.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",he),oe.removeEventListener("sessionend",Le),Oe.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=ut.autoReset,U=ae.enabled,H=ae.autoUpdate,V=ae.needsUpdate,F=ae.type;I(),ut.autoReset=y,ae.enabled=U,ae.autoUpdate=H,ae.needsUpdate=V,ae.type=F}function ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ie(y){const U=y.target;U.removeEventListener("dispose",Ie),st(U)}function st(y){P(y),Fe.remove(y)}function P(y){const U=Fe.get(y).programs;U!==void 0&&(U.forEach(function(H){ee.releaseProgram(H)}),y.isShaderMaterial&&ee.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,H,V,F,ue){U===null&&(U=le);const xe=F.isMesh&&F.matrixWorld.determinant()<0,be=kt(y,U,H,V,F);ge.setMaterial(V,xe);let Ae=H.index,ze=1;if(V.wireframe===!0){if(Ae=ie.getWireframeAttribute(H),Ae===void 0)return;ze=2}const Ve=H.drawRange,Ue=H.attributes.position;let dt=Ve.start*ze,Et=(Ve.start+Ve.count)*ze;ue!==null&&(dt=Math.max(dt,ue.start*ze),Et=Math.min(Et,(ue.start+ue.count)*ze)),Ae!==null?(dt=Math.max(dt,0),Et=Math.min(Et,Ae.count)):Ue!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,Ue.count));const bt=Et-dt;if(bt<0||bt===1/0)return;Je.setup(F,V,be,H,Ae);let $t,ft=Be;if(Ae!==null&&($t=W.get(Ae),ft=ye,ft.setIndex($t)),F.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*Ee()),ft.setMode(T.LINES)):ft.setMode(T.TRIANGLES);else if(F.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),ge.setLineWidth(Pe*Ee()),F.isLineSegments?ft.setMode(T.LINES):F.isLineLoop?ft.setMode(T.LINE_LOOP):ft.setMode(T.LINE_STRIP)}else F.isPoints?ft.setMode(T.POINTS):F.isSprite&&ft.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ft.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ft.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,It=F._multiDrawCounts,pt=F._multiDrawCount,rn=Ae?W.get(Ae).bytesPerElement:1,ri=Fe.get(V).currentProgram.getUniforms();for(let jt=0;jt<pt;jt++)ri.setValue(T,"_gl_DrawID",jt),ft.render(Pe[jt]/rn,It[jt])}else if(F.isInstancedMesh)ft.renderInstances(dt,bt,F.count);else if(H.isInstancedBufferGeometry){const Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,It=Math.min(H.instanceCount,Pe);ft.renderInstances(dt,bt,It)}else ft.render(dt,bt)};function z(y,U,H){y.transparent===!0&&y.side===Tn&&y.forceSinglePass===!1?(y.side=Kt,y.needsUpdate=!0,mt(y,U,H),y.side=Bn,y.needsUpdate=!0,mt(y,U,H),y.side=Tn):mt(y,U,H)}this.compile=function(y,U,H=null){H===null&&(H=y),h=Me.get(H),h.init(U),S.push(h),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),y!==H&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const V=new Set;return y.traverse(function(F){const ue=F.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const be=ue[xe];z(be,H,F),V.add(be)}else z(ue,H,F),V.add(ue)}),S.pop(),h=null,V},this.compileAsync=function(y,U,H=null){const V=this.compile(y,U,H);return new Promise(F=>{function ue(){if(V.forEach(function(xe){Fe.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){F(y);return}setTimeout(ue,10)}Te.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let G=null;function K(y){G&&G(y)}function he(){Oe.stop()}function Le(){Oe.start()}const Oe=new Sc;Oe.setAnimationLoop(K),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(y){G=y,oe.setAnimationLoop(y),y===null?Oe.stop():Oe.start()},oe.addEventListener("sessionstart",he),oe.addEventListener("sessionend",Le),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,U,A),h=Me.get(y,S.length),h.init(U),S.push(h),ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ze.setFromProjectionMatrix(ne),re=this.localClippingEnabled,j=Ye.init(this.clippingPlanes,re),v=fe.get(y,u.length),v.init(),u.push(v),oe.enabled===!0&&oe.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&Ge(ue,U,-1/0,x.sortObjects)}Ge(y,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(X,me),de=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,de&&Se.addToRenderList(v,y),this.info.render.frame++,j===!0&&Ye.beginShadows();const H=h.state.shadowsArray;ae.render(H,y,U),j===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,F=v.transmissive;if(h.setupLights(),U.isArrayCamera){const ue=U.cameras;if(F.length>0)for(let xe=0,be=ue.length;xe<be;xe++){const Ae=ue[xe];Re(V,F,y,Ae)}de&&Se.render(y);for(let xe=0,be=ue.length;xe<be;xe++){const Ae=ue[xe];Ne(v,y,Ae,Ae.viewport)}}else F.length>0&&Re(V,F,y,U),de&&Se.render(y),Ne(v,y,U);A!==null&&(je.updateMultisampleRenderTarget(A),je.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(x,y,U),Je.resetDefaultState(),C=-1,b=null,S.pop(),S.length>0?(h=S[S.length-1],j===!0&&Ye.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Ge(y,U,H,V){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ze.intersectsSprite(y)){V&&q.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ne);const xe=se.update(y),be=y.material;be.visible&&v.push(y,xe,be,H,q.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ze.intersectsObject(y))){const xe=se.update(y),be=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),q.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),q.copy(xe.boundingSphere.center)),q.applyMatrix4(y.matrixWorld).applyMatrix4(ne)),Array.isArray(be)){const Ae=xe.groups;for(let ze=0,Ve=Ae.length;ze<Ve;ze++){const Ue=Ae[ze],dt=be[Ue.materialIndex];dt&&dt.visible&&v.push(y,xe,dt,H,q.z,Ue)}}else be.visible&&v.push(y,xe,be,H,q.z,null)}}const ue=y.children;for(let xe=0,be=ue.length;xe<be;xe++)Ge(ue[xe],U,H,V)}function Ne(y,U,H,V){const F=y.opaque,ue=y.transmissive,xe=y.transparent;h.setupLightsView(H),j===!0&&Ye.setGlobalState(x.clippingPlanes,H),V&&ge.viewport(_.copy(V)),F.length>0&&ht(F,U,H),ue.length>0&&ht(ue,U,H),xe.length>0&&ht(xe,U,H),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Re(y,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new ni(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?ji:Rn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ue=h.state.transmissionRenderTarget[V.id],xe=V.viewport||_;ue.setSize(xe.z,xe.w);const be=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(B),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),de?Se.render(H):x.clear();const Ae=x.toneMapping;x.toneMapping=kn;const ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),j===!0&&Ye.setGlobalState(x.clippingPlanes,V),ht(y,H,V),je.updateMultisampleRenderTarget(ue),je.updateRenderTargetMipmap(ue),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ue=0,dt=U.length;Ue<dt;Ue++){const Et=U[Ue],bt=Et.object,$t=Et.geometry,ft=Et.material,Pe=Et.group;if(ft.side===Tn&&bt.layers.test(V.layers)){const It=ft.side;ft.side=Kt,ft.needsUpdate=!0,ot(bt,H,V,$t,ft,Pe),ft.side=It,ft.needsUpdate=!0,Ve=!0}}Ve===!0&&(je.updateMultisampleRenderTarget(ue),je.updateRenderTargetMipmap(ue))}x.setRenderTarget(be),x.setClearColor(B,$),ze!==void 0&&(V.viewport=ze),x.toneMapping=Ae}function ht(y,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ue=y.length;F<ue;F++){const xe=y[F],be=xe.object,Ae=xe.geometry,ze=V===null?xe.material:V,Ve=xe.group;be.layers.test(H.layers)&&ot(be,U,H,Ae,ze,Ve)}}function ot(y,U,H,V,F,ue){y.onBeforeRender(x,U,H,V,F,ue),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.transparent===!0&&F.side===Tn&&F.forceSinglePass===!1?(F.side=Kt,F.needsUpdate=!0,x.renderBufferDirect(H,U,V,F,y,ue),F.side=Bn,F.needsUpdate=!0,x.renderBufferDirect(H,U,V,F,y,ue),F.side=Tn):x.renderBufferDirect(H,U,V,F,y,ue),y.onAfterRender(x,U,H,V,F,ue)}function mt(y,U,H){U.isScene!==!0&&(U=le);const V=Fe.get(y),F=h.state.lights,ue=h.state.shadowsArray,xe=F.state.version,be=ee.getParameters(y,F.state,ue,U,H),Ae=ee.getProgramCacheKey(be);let ze=V.programs;V.environment=y.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(y.isMeshStandardMaterial?M:R).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,ze===void 0&&(y.addEventListener("dispose",Ie),ze=new Map,V.programs=ze);let Ve=ze.get(Ae);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===xe)return it(y,be),Ve}else be.uniforms=ee.getUniforms(y),y.onBeforeCompile(be,x),Ve=ee.acquireProgram(be,Ae),ze.set(Ae,Ve),V.uniforms=be.uniforms;const Ue=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=Ye.uniform),it(y,be),V.needsLights=ii(y),V.lightsStateVersion=xe,V.needsLights&&(Ue.ambientLightColor.value=F.state.ambient,Ue.lightProbe.value=F.state.probe,Ue.directionalLights.value=F.state.directional,Ue.directionalLightShadows.value=F.state.directionalShadow,Ue.spotLights.value=F.state.spot,Ue.spotLightShadows.value=F.state.spotShadow,Ue.rectAreaLights.value=F.state.rectArea,Ue.ltc_1.value=F.state.rectAreaLTC1,Ue.ltc_2.value=F.state.rectAreaLTC2,Ue.pointLights.value=F.state.point,Ue.pointLightShadows.value=F.state.pointShadow,Ue.hemisphereLights.value=F.state.hemi,Ue.directionalShadowMap.value=F.state.directionalShadowMap,Ue.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ue.spotShadowMap.value=F.state.spotShadowMap,Ue.spotLightMatrix.value=F.state.spotLightMatrix,Ue.spotLightMap.value=F.state.spotLightMap,Ue.pointShadowMap.value=F.state.pointShadowMap,Ue.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function We(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Cr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function it(y,U){const H=Fe.get(y);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function kt(y,U,H,V,F){U.isScene!==!0&&(U=le),je.resetTextureUnits();const ue=U.fog,xe=V.isMeshStandardMaterial?U.environment:null,be=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hn,Ae=(V.isMeshStandardMaterial?M:R).get(V.envMap||xe),ze=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!H.morphAttributes.position,dt=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color;let bt=kn;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(bt=x.toneMapping);const $t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=$t!==void 0?$t.length:0,Pe=Fe.get(V),It=h.state.lights;if(j===!0&&(re===!0||y!==b)){const tn=y===b&&V.id===C;Ye.setState(V,y,tn)}let pt=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==It.state.version||Pe.outputColorSpace!==be||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Ae||V.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ye.numPlanes||Pe.numIntersection!==Ye.numIntersection)||Pe.vertexAlphas!==ze||Pe.vertexTangents!==Ve||Pe.morphTargets!==Ue||Pe.morphNormals!==dt||Pe.morphColors!==Et||Pe.toneMapping!==bt||Pe.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,Pe.__version=V.version);let rn=Pe.currentProgram;pt===!0&&(rn=mt(V,U,F));let ri=!1,jt=!1,Vr=!1;const At=rn.getUniforms(),Cn=Pe.uniforms;if(ge.useProgram(rn.program)&&(ri=!0,jt=!0,Vr=!0),V.id!==C&&(C=V.id,jt=!0),ri||b!==y){At.setValue(T,"projectionMatrix",y.projectionMatrix),At.setValue(T,"viewMatrix",y.matrixWorldInverse);const tn=At.map.cameraPosition;tn!==void 0&&tn.setValue(T,O.setFromMatrixPosition(y.matrixWorld)),$e.logarithmicDepthBuffer&&At.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&At.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,jt=!0,Vr=!0)}if(F.isSkinnedMesh){At.setOptional(T,F,"bindMatrix"),At.setOptional(T,F,"bindMatrixInverse");const tn=F.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),At.setValue(T,"boneTexture",tn.boneTexture,je))}F.isBatchedMesh&&(At.setOptional(T,F,"batchingTexture"),At.setValue(T,"batchingTexture",F._matricesTexture,je),At.setOptional(T,F,"batchingIdTexture"),At.setValue(T,"batchingIdTexture",F._indirectTexture,je),At.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&At.setValue(T,"batchingColorTexture",F._colorsTexture,je));const Wr=H.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0)&&rt.update(F,H,rn),(jt||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,At.setValue(T,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Cn.envMap.value=Ae,Cn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Cn.envMapIntensity.value=U.environmentIntensity),jt&&(At.setValue(T,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Gt(Cn,Vr),ue&&V.fog===!0&&Ce.refreshFogUniforms(Cn,ue),Ce.refreshMaterialUniforms(Cn,V,Z,Y,h.state.transmissionRenderTarget[y.id]),Cr.upload(T,We(Pe),Cn,je)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Cr.upload(T,We(Pe),Cn,je),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&At.setValue(T,"center",F.center),At.setValue(T,"modelViewMatrix",F.modelViewMatrix),At.setValue(T,"normalMatrix",F.normalMatrix),At.setValue(T,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const tn=V.uniformsGroups;for(let Xr=0,Oc=tn.length;Xr<Oc;Xr++){const Ra=tn[Xr];vt.update(Ra,rn),vt.bind(Ra,rn)}}return rn}function Gt(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ii(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,U,H){Fe.get(y.texture).__webglTexture=U,Fe.get(y.depthTexture).__webglTexture=H;const V=Fe.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const H=Fe.get(y);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,H=0){A=y,D=U,w=H;let V=!0,F=null,ue=!1,xe=!1;if(y){const Ae=Fe.get(y);Ae.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(T.FRAMEBUFFER,null),V=!1):Ae.__webglFramebuffer===void 0?je.setupRenderTarget(y):Ae.__hasExternalTextures&&je.rebindTextures(y,Fe.get(y.texture).__webglTexture,Fe.get(y.depthTexture).__webglTexture);const ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(xe=!0);const Ve=Fe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?F=Ve[U][H]:F=Ve[U],ue=!0):y.samples>0&&je.useMultisampledRTT(y)===!1?F=Fe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ve)?F=Ve[H]:F=Ve,_.copy(y.viewport),L.copy(y.scissor),k=y.scissorTest}else _.copy(ve).multiplyScalar(Z).floor(),L.copy(_e).multiplyScalar(Z).floor(),k=qe;if(ge.bindFramebuffer(T.FRAMEBUFFER,F)&&V&&ge.drawBuffers(y,F),ge.viewport(_),ge.scissor(L),ge.setScissorTest(k),ue){const Ae=Fe.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,H)}else if(xe){const Ae=Fe.get(y.texture),ze=U||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ae.__webglTexture,H||0,ze)}C=-1},this.readRenderTargetPixels=function(y,U,H,V,F,ue,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){ge.bindFramebuffer(T.FRAMEBUFFER,be);try{const Ae=y.texture,ze=Ae.format,Ve=Ae.type;if(!$e.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-V&&H>=0&&H<=y.height-F&&T.readPixels(U,H,V,F,He.convert(ze),He.convert(Ve),ue)}finally{const Ae=A!==null?Fe.get(A).__webglFramebuffer:null;ge.bindFramebuffer(T.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,U,H,V,F,ue,xe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){ge.bindFramebuffer(T.FRAMEBUFFER,be);try{const Ae=y.texture,ze=Ae.format,Ve=Ae.type;if(!$e.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-V&&H>=0&&H<=y.height-F){const Ue=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ue),T.bufferData(T.PIXEL_PACK_BUFFER,ue.byteLength,T.STREAM_READ),T.readPixels(U,H,V,F,He.convert(ze),He.convert(Ve),0),T.flush();const dt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await Wl(T,dt,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,Ue),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ue)}finally{T.deleteBuffer(Ue),T.deleteSync(dt)}return ue}}finally{const Ae=A!==null?Fe.get(A).__webglFramebuffer:null;ge.bindFramebuffer(T.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(y,U=null,H=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(y.image.width*V),ue=Math.floor(y.image.height*V),xe=U!==null?U.x:0,be=U!==null?U.y:0;je.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,H,0,0,xe,be,F,ue),ge.unbindTexture()},this.copyTextureToTexture=function(y,U,H=null,V=null,F=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],U=arguments[2],F=arguments[3]||0,H=null);let ue,xe,be,Ae,ze,Ve;H!==null?(ue=H.max.x-H.min.x,xe=H.max.y-H.min.y,be=H.min.x,Ae=H.min.y):(ue=y.image.width,xe=y.image.height,be=0,Ae=0),V!==null?(ze=V.x,Ve=V.y):(ze=0,Ve=0);const Ue=He.convert(U.format),dt=He.convert(U.type);je.setTexture2D(U,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const Et=T.getParameter(T.UNPACK_ROW_LENGTH),bt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),$t=T.getParameter(T.UNPACK_SKIP_PIXELS),ft=T.getParameter(T.UNPACK_SKIP_ROWS),Pe=T.getParameter(T.UNPACK_SKIP_IMAGES),It=y.isCompressedTexture?y.mipmaps[F]:y.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,It.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,It.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,be),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ae),y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,F,ze,Ve,ue,xe,Ue,dt,It.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,F,ze,Ve,It.width,It.height,Ue,It.data):T.texSubImage2D(T.TEXTURE_2D,F,ze,Ve,ue,xe,Ue,dt,It),T.pixelStorei(T.UNPACK_ROW_LENGTH,Et),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,bt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,$t),T.pixelStorei(T.UNPACK_SKIP_ROWS,ft),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Pe),F===0&&U.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(y,U,H=null,V=null,F=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0);let ue,xe,be,Ae,ze,Ve,Ue,dt,Et;const bt=y.isCompressedTexture?y.mipmaps[F]:y.image;H!==null?(ue=H.max.x-H.min.x,xe=H.max.y-H.min.y,be=H.max.z-H.min.z,Ae=H.min.x,ze=H.min.y,Ve=H.min.z):(ue=bt.width,xe=bt.height,be=bt.depth,Ae=0,ze=0,Ve=0),V!==null?(Ue=V.x,dt=V.y,Et=V.z):(Ue=0,dt=0,Et=0);const $t=He.convert(U.format),ft=He.convert(U.type);let Pe;if(U.isData3DTexture)je.setTexture3D(U,0),Pe=T.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)je.setTexture2DArray(U,0),Pe=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const It=T.getParameter(T.UNPACK_ROW_LENGTH),pt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),rn=T.getParameter(T.UNPACK_SKIP_PIXELS),ri=T.getParameter(T.UNPACK_SKIP_ROWS),jt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,bt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,bt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ae),T.pixelStorei(T.UNPACK_SKIP_ROWS,ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ve),y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Pe,F,Ue,dt,Et,ue,xe,be,$t,ft,bt.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(Pe,F,Ue,dt,Et,ue,xe,be,$t,bt.data):T.texSubImage3D(Pe,F,Ue,dt,Et,ue,xe,be,$t,ft,bt),T.pixelStorei(T.UNPACK_ROW_LENGTH,It),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,rn),T.pixelStorei(T.UNPACK_SKIP_ROWS,ri),T.pixelStorei(T.UNPACK_SKIP_IMAGES,jt),F===0&&U.generateMipmaps&&T.generateMipmap(Pe),ge.unbindTexture()},this.initRenderTarget=function(y){Fe.get(y).__webglFramebuffer===void 0&&je.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?je.setTextureCube(y,0):y.isData3DTexture?je.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?je.setTexture2DArray(y,0):je.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){D=0,w=0,A=null,ge.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xa?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===kr?"display-p3":"srgb"}}class ba{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=i}clone(){return new ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cc extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ro extends Ht{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tr extends _n{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],f=[],m=[];let g=0;const v=[],h=i/2;let u=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(m,2));function S(){const E=new N,D=new N;let w=0;const A=(t-e)/i;for(let C=0;C<=s;C++){const b=[],_=C/s,L=_*(t-e)+e;for(let k=0;k<=r;k++){const B=k/r,$=B*c+o,J=Math.sin($),Y=Math.cos($);D.x=L*J,D.y=-_*i+h,D.z=L*Y,p.push(D.x,D.y,D.z),E.set(J,A,Y).normalize(),f.push(E.x,E.y,E.z),m.push(B,1-_),b.push(g++)}v.push(b)}for(let C=0;C<r;C++)for(let b=0;b<s;b++){const _=v[b][C],L=v[b+1][C],k=v[b+1][C+1],B=v[b][C+1];d.push(_,L,B),d.push(L,k,B),w+=6}l.addGroup(u,w,0),u+=w}function x(E){const D=g,w=new nt,A=new N;let C=0;const b=E===!0?e:t,_=E===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,h*_,0),f.push(0,_,0),m.push(.5,.5),g++;const L=g;for(let k=0;k<=r;k++){const $=k/r*c+o,J=Math.cos($),Y=Math.sin($);A.x=b*Y,A.y=h*_,A.z=b*J,p.push(A.x,A.y,A.z),f.push(0,_,0),w.x=J*.5+.5,w.y=Y*.5*_+.5,m.push(w.x,w.y),g++}for(let k=0;k<r;k++){const B=D+k,$=L+k;E===!0?d.push($,$+1,B):d.push($+1,$,B),C+=3}l.addGroup(u,C,E===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta extends tr{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ta(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zr extends _n{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),l(i),d(),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(s.slice(),3)),this.setAttribute("uv",new Ot(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new N,E=new N,D=new N;for(let w=0;w<t.length;w+=3)m(t[w+0],x),m(t[w+1],E),m(t[w+2],D),c(x,E,D,S)}function c(S,x,E,D){const w=D+1,A=[];for(let C=0;C<=w;C++){A[C]=[];const b=S.clone().lerp(E,C/w),_=x.clone().lerp(E,C/w),L=w-C;for(let k=0;k<=L;k++)k===0&&C===w?A[C][k]=b:A[C][k]=b.clone().lerp(_,k/L)}for(let C=0;C<w;C++)for(let b=0;b<2*(w-C)-1;b++){const _=Math.floor(b/2);b%2===0?(f(A[C][_+1]),f(A[C+1][_]),f(A[C][_])):(f(A[C][_+1]),f(A[C+1][_+1]),f(A[C+1][_]))}}function l(S){const x=new N;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(S),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function d(){const S=new N;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const E=h(S)/2/Math.PI+.5,D=u(S)/Math.PI+.5;a.push(E,1-D)}g(),p()}function p(){for(let S=0;S<a.length;S+=6){const x=a[S+0],E=a[S+2],D=a[S+4],w=Math.max(x,E,D),A=Math.min(x,E,D);w>.9&&A<.1&&(x<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),D<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function m(S,x){const E=S*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function g(){const S=new N,x=new N,E=new N,D=new N,w=new nt,A=new nt,C=new nt;for(let b=0,_=0;b<s.length;b+=9,_+=6){S.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),E.set(s[b+6],s[b+7],s[b+8]),w.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),D.copy(S).add(x).add(E).divideScalar(3);const L=h(D);v(w,_+0,S,L),v(A,_+2,x,L),v(C,_+4,E,L)}}function v(S,x,E,D){D<0&&S.x===1&&(a[x]=S.x-1),E.x===0&&E.z===0&&(a[x]=D/2/Math.PI+.5)}function h(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.vertices,e.indices,e.radius,e.details)}}class Aa extends zr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Aa(e.radius,e.detail)}}class wa extends zr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wa(e.radius,e.detail)}}class Hr extends _n{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const d=[],p=new N,f=new N,m=[],g=[],v=[],h=[];for(let u=0;u<=i;u++){const S=[],x=u/i;let E=0;u===0&&a===0?E=.5/t:u===i&&c===Math.PI&&(E=-.5/t);for(let D=0;D<=t;D++){const w=D/t;p.x=-e*Math.cos(r+w*s)*Math.sin(a+x*o),p.y=e*Math.cos(a+x*o),p.z=e*Math.sin(r+w*s)*Math.sin(a+x*o),g.push(p.x,p.y,p.z),f.copy(p).normalize(),v.push(f.x,f.y,f.z),h.push(w+E,1-x),S.push(l++)}d.push(S)}for(let u=0;u<i;u++)for(let S=0;S<t;S++){const x=d[u][S+1],E=d[u][S],D=d[u+1][S],w=d[u+1][S+1];(u!==0||a>0)&&m.push(x,E,w),(u!==i-1||c<Math.PI)&&m.push(E,D,w)}this.setIndex(m),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ui extends er{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gr extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Qp extends Gr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ss=new yt,Co=new N,Po=new N;class Pc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Co.setFromMatrixPosition(e.matrixWorld),t.position.copy(Co),Po.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Po),t.updateMatrixWorld(),Ss.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ss),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lo=new yt,Vi=new N,ys=new N;class em extends Pc{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vi.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vi),ys.copy(i.position),ys.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ys),i.updateMatrixWorld(),r.makeTranslation(-Vi.x,-Vi.y,-Vi.z),Lo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo)}}class ra extends Gr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new em}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tm extends Pc{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sa extends Gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new tm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lc extends Gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Do=new yt;class nm{constructor(e,t,i=0,r=1/0){this.ray=new fc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Do.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Do),this}intersectObject(e,t=!0,i=[]){return aa(e,this,i,t),i.sort(Io),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)aa(e[r],this,i,t);return i.sort(Io),i}}function Io(n,e){return n.distance-e.distance}function aa(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)aa(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);function Dc(n){let e=n>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Uo(n){const e=new Map,t=(i,r)=>{const s=i+"|"+r;if(!e.has(s)){const a=Dc(n*31+i*374761393+r*668265263>>>0);e.set(s,a())}return e.get(s)};return(i,r)=>{const s=Math.floor(i),a=Math.floor(r),o=i-s,c=r-a,l=o*o*(3-2*o),d=c*c*(3-2*c),p=t(s,a),f=t(s+1,a),m=t(s,a+1),g=t(s+1,a+1);return p+(f-p)*l+(m-p)*d+(p-f-m+g)*l*d}}const Ke={WATER:"water",DEEP:"deep",SAND:"sand",GRASS:"grass",FOREST:"forest",ROCKS:"rocks",ROAD:"road"};function im(n=qr.SEED){const e=qr.W,t=qr.H,i=Uo(n),r=Uo(n+999),s=Dc(n+1),a=[];for(let h=0;h<t;h++){const u=[];for(let S=0;S<e;S++){const x=14+i(0,h*.15)*8+r(S*.3,h*.3)*2;let E,D=null;if(S<x-6)E=Ke.DEEP;else if(S<x)E=Ke.WATER;else if(S<x+4){E=Ke.SAND;const w=s();w<.1?D="plastic":w<.18?D="driftwood":w<.22&&(D="rock")}else{const w=i(S*.09,h*.09)+r(S*.25,h*.25)*.3,A=s();w>.75?(E=Ke.ROCKS,D=A<.75?"rock":null):w>.52?(E=Ke.FOREST,D=A<.65?"tree":A<.75?"mushroom":null):(E=Ke.GRASS,A<.07?D="bush":A<.13?D="tallgrass":A<.16?D="driftwood":A<.18&&(D="tree"))}u.push({t:E,obj:D})}a.push(u)}const o=6,c=10;for(let h=-2;h<=2;h++)for(let u=-2;u<=2;u++)if(Math.abs(u)+Math.abs(h)<=3){const S=a[c+h]?.[o+u];S&&(S.t=Math.abs(u)+Math.abs(h)<=1?Ke.GRASS:Ke.SAND,S.obj=null)}a[c][o].obj="island_chest",a[c-1][o].obj="tree",a[c+1][o].obj="bush";const l=Math.floor(t/2);let d=0;for(let h=e-1;h>=0;h--)if(a[l][h].t===Ke.SAND){d=h+2;break}for(let h=d;h<e;h++)a[l][h].t=Ke.ROAD,a[l][h].obj=null,a[l+1]?.[h]&&(a[l+1][h].t=Ke.ROAD,a[l+1][h].obj=null);const p={x:d+1,y:l};a[p.y][p.x].obj="car";const f={x:d+1,y:l-1};a[f.y][f.x].t=Ke.GRASS,a[f.y][f.x].obj="generator";let m=null;for(let h=l+4;h<t-2&&!m;h++)for(let u=2;u<e-1;u++)if(a[h][u].t===Ke.SAND&&a[h][u-1].t===Ke.WATER){m={x:u,y:h};break}m||(m={x:18,y:l+5}),a[m.y][m.x].obj="boat";let g=null;for(let h=6;h<20&&!g;h++)for(let u=2;u<e;u++){const S=a[h][u];if((S.t===Ke.GRASS||S.t===Ke.SAND)&&u>16&&!S.obj){g={x:u,y:h};break}}g||(g={x:22,y:8}),a[g.y][g.x].obj="hut";const v={x:p.x-1,y:p.y+1};return a[v.y][v.x].obj=null,{tiles:a,W:e,H:t,car:p,boat:m,hut:g,gen:f,spawn:v,island:{x:o,y:c},roadY:l}}function Wt(n,e,t){return e<0||t<0||e>=n.W||t>=n.H?null:n.tiles[t][e]}function yi(n,e,t,i=!1){const r=Wt(n,e,t);return r?i?r.t===Ke.WATER||r.t===Ke.DEEP||r.t===Ke.SAND:!(r.t===Ke.WATER||r.t===Ke.DEEP||r.obj&&["tree","rock","car","hut","generator"].includes(r.obj)):!1}const we={sand:15392696,sandDark:14471071,grass:11129231,grassDark:9420664,forest:9684093,water:9425128,road:13616040,rock:12172480,rockDark:10330534,trunk:10909518,leaves:8372074,leaves2:9817213,berry:14706535,wood:12884588,woodDark:11042642,metal:10465981,metalDark:8228505,carBody:8368857,carDark:6131896,boat:7315401,fire:16750916,plastic:15251400,canvasTent:14272416};function zt(n,e={}){return new Ui({color:n,flatShading:!0,...e})}function Xe(n,e,t,i,r=0,s=0,a=0){const o=new ct(new Lt(n,e,t),zt(i));return o.position.set(r,s,a),o.castShadow=!0,o.receiveShadow=!0,o}function St(n,e,t,i,r=6,s=0,a=0,o=0){const c=new ct(new tr(n,e,t,r),zt(i));return c.position.set(s,a,o),c.castShadow=!0,c.receiveShadow=!0,c}function pn(n,e,t,i=6,r=0,s=0,a=0){const o=new ct(new Ta(n,e,i),zt(t));return o.position.set(r,s,a),o.castShadow=!0,o.receiveShadow=!0,o}const cn=(n,e)=>new N(n*at,0,e*at);function rm(n){const{W:e,H:t,tiles:i}=n,r=new Ii(e*at,t*at,e,t);r.rotateX(-Math.PI/2);const s=r.attributes.position,a=new Float32Array(s.count*3),o=new Qe,c=h=>h===Ke.WATER?-.55:h===Ke.DEEP?-.9:h===Ke.ROCKS?.15:0,l=(h,u)=>{switch(h){case Ke.SAND:return o.set(u>.5?we.sand:we.sandDark);case Ke.GRASS:return o.set(u>.5?we.grass:we.grassDark);case Ke.FOREST:return o.set(we.forest);case Ke.ROCKS:return o.set(u>.5?we.rock:we.rockDark);case Ke.ROAD:return o.set(we.road);default:return o.set(we.sandDark)}};for(let h=0;h<s.count;h++){const u=s.getX(h),S=s.getZ(h),x=Math.max(0,Math.min(e-1,Math.round(u/at+e/2-.5))),E=Math.max(0,Math.min(t-1,Math.round(S/at+t/2-.5))),D=i[E][x],w=(x*7+E*13)%10/10;s.setY(h,c(D.t)+(D.t!==Ke.WATER&&D.t!==Ke.DEEP?w*.12:0));const A=l(D.t,w);a[h*3]=A.r,a[h*3+1]=A.g,a[h*3+2]=A.b}r.setAttribute("color",new hn(a,3)),r.computeVertexNormals();const d=new ct(r,new Ui({vertexColors:!0,flatShading:!0}));d.receiveShadow=!0,d.position.set((e/2-.5)*at-at/2+at/2,0,(t/2-.5)*at),d.position.set((e-1)*at/2,0,(t-1)*at/2);const p=new Ii(e*at*1.2,t*at*1.2,48,48);p.rotateX(-Math.PI/2);const f=new ct(p,new Ui({color:we.water,transparent:!0,opacity:.82,flatShading:!0}));f.position.set((e-1)*at/2-e*at*.18,-.28,(t-1)*at/2);const m=p.attributes.position,g=Float32Array.from({length:m.count},(h,u)=>m.getY(u));function v(h){for(let u=0;u<m.count;u++){const S=m.getX(u),x=m.getZ(u);m.setY(u,g[u]+Math.sin(h*1.5+S*.25+x*.2)*.08)}m.needsUpdate=!0}return{ground:d,water:f,updateWater:v}}const No={tree:()=>{const n=new lt;return n.add(St(.14,.2,1.1,we.trunk,5,0,.55,0)),n.add(pn(.85,1.5,we.leaves,6,0,1.8,0)),n.add(pn(.6,1.1,we.leaves2,6,0,2.5,0)),n},rock:()=>{const n=new lt,e=new ct(new Aa(.45,0),zt(we.rock));return e.position.y=.3,e.scale.y=.7,e.castShadow=e.receiveShadow=!0,n.add(e),n},bush:()=>{const n=new lt,e=new ct(new wa(.45,0),zt(we.leaves2));e.position.y=.35,e.castShadow=!0,n.add(e);for(let t=0;t<4;t++){const i=new ct(new Hr(.06,4,3),zt(we.berry));i.position.set(Math.sin(t*2.2)*.35,.4+Math.cos(t*1.7)*.2,Math.cos(t*2.2)*.35),n.add(i)}return n},tallgrass:()=>{const n=new lt;for(let e=0;e<5;e++){const t=pn(.06,.55,we.grassDark,4,(e-2)*.15,.28,(e*7%3-1)*.15);t.castShadow=!1,n.add(t)}return n},driftwood:()=>{const n=new lt,e=St(.09,.12,1.1,we.woodDark,5,0,.12,0);return e.rotation.z=Math.PI/2,e.rotation.y=.5,n.add(e),n},plastic:()=>{const n=new lt;return n.add(Xe(.3,.4,.3,we.plastic,-.15,.2,.1)),n.add(Xe(.25,.3,.25,11065552,.2,.15,-.12)),n},mushroom:()=>{const n=new lt;return n.add(St(.06,.08,.2,15261904,5,0,.1,0)),n.add(pn(.18,.15,14191194,6,0,.26,0)),n.add(St(.05,.06,.16,15261904,5,.25,.08,.2)),n.add(pn(.13,.12,13138506,6,.25,.2,.2)),n}};function sm(n,e){const t=new lt,i=new Map,r={};for(const[s,a]of Object.entries(No))r[s]=a();for(let s=0;s<n.H;s++)for(let a=0;a<n.W;a++){const o=n.tiles[s][a].obj;if(!o||!No[o]||e.has(a+","+s))continue;const c=r[o].clone(),l=cn(a,s);c.position.copy(l),c.rotation.y=(a*13+s*7)%8*.8;const d=.85+(a*3+s*11)%6*.06;c.scale.setScalar(d),t.add(c),i.set(a+","+s,c)}return{group:t,remove(s,a){const o=s+","+a,c=i.get(o);c&&(t.remove(c),i.delete(o))},get(s,a){return i.get(s+","+a)}}}function am(){const n=new lt;n.add(Xe(2.6,.7,1.3,we.carBody,0,.65,0)),n.add(Xe(1.4,.55,1.2,we.carDark,-.1,1.25,0));const e=Xe(1.42,.35,1.1,14216437,-.1,1.28,0);e.material.transparent=!0,e.material.opacity=.85,n.add(e);for(const[t,i]of[[-.85,.65],[.85,.65],[-.85,-.65],[.85,-.65]]){const r=St(.28,.28,.2,3817285,8,t,.3,i);r.rotation.x=Math.PI/2,n.add(r)}return n.add(Xe(.5,.12,1.1,16115912,1.35,.75,0)),n}function Fo(n){const e=new lt,t=Xe(2.2,.45,1,we.boat,0,.3,0);return e.add(t),e.add(Xe(2,.35,.7,15266552,0,.42,0)),e.add(Xe(.25,.5,.9,we.boat,-1.1,.35,0)),e.add(Xe(.25,.5,.9,we.boat,1.1,.35,0)),e.add(Xe(.7,.1,.85,we.wood,0,.5,0)),n||e.add(Xe(.5,.05,.4,4866104,.4,.53,.1)),e}function om(){const n=new lt;n.add(Xe(2.4,1.5,2,we.wood,0,.75,0));const e=pn(2,1,we.woodDark,4,0,2,0);return e.rotation.y=Math.PI/4,n.add(e),n.add(Xe(.6,1,.1,6969925,.4,.5,1.02)),n.add(Xe(.5,.5,.06,13625584,-.6,.9,1)),n}function cm(){const n=new lt;n.add(Xe(.9,.7,.6,14258010,0,.4,0)),n.add(St(.1,.1,.3,we.metalDark,6,-.25,.9,0)),n.add(Xe(.3,.15,.3,we.metal,.2,.8,0));const e=new ra(16767392,0,14);return e.position.set(0,1.4,0),n.add(e),n.userData.light=e,n}function lm(){const n=new lt;return n.add(Xe(.9,.5,.6,we.woodDark,0,.25,0)),n.add(Xe(.95,.2,.65,we.wood,0,.58,0)),n.add(Xe(.12,.15,.05,15255658,0,.45,.32)),n}function um(n){const e=new lt;switch(n){case"campfire":{for(let r=0;r<5;r++){const s=St(.05,.07,.7,we.woodDark,5,0,.1,0);s.rotation.z=Math.PI/2.4,s.rotation.y=r/5*Math.PI*2,e.add(s)}for(let r=0;r<6;r++)e.add(Xe(.18,.14,.18,we.rockDark,Math.sin(r)*.5,.07,Math.cos(r)*.5));const t=pn(.22,.55,we.fire,6,0,.45,0);t.material.emissive=new Qe(16737826),t.material.emissiveIntensity=.7,t.castShadow=!1,e.add(t);const i=new ra(16750916,1.4,10);i.position.y=.8,e.add(i),e.userData.flame=t,e.userData.light=i;break}case"workbench":e.add(Xe(1.4,.12,.8,we.wood,0,.7,0)),e.add(Xe(.12,.7,.12,we.woodDark,-.55,.35,-.25)),e.add(Xe(.12,.7,.12,we.woodDark,.55,.35,-.25)),e.add(Xe(.12,.7,.12,we.woodDark,-.55,.35,.25)),e.add(Xe(.12,.7,.12,we.woodDark,.55,.35,.25)),e.add(Xe(.3,.1,.2,we.metal,.3,.8,0));break;case"still":e.add(St(.35,.4,.8,we.metal,8,0,.4,0)),e.add(St(.12,.12,.5,we.metalDark,6,.35,.9,0)),e.add(Xe(.4,.4,.4,we.metalDark,.6,.2,0)),e.add(St(.05,.05,.7,14198890,5,.35,.6,.2));break;case"smoker":e.add(Xe(.8,1.2,.8,we.woodDark,0,.6,0)),e.add(pn(.5,.4,we.metalDark,4,0,1.4,0)),e.add(Xe(.5,.5,.06,4866104,0,.5,.42));break;case"pyro":e.add(Xe(.9,.9,.9,we.metalDark,0,.45,0)),e.add(St(.08,.08,.6,we.metal,6,.3,1.1,.3)),e.add(St(.3,.3,.2,14258010,8,-.2,.95,-.2)),e.add(Xe(.3,.2,.1,8970400,0,.5,.46));break;case"lamp":{e.add(St(.05,.07,1.6,we.metalDark,6,0,.8,0));const t=Xe(.25,.2,.25,16115880,0,1.7,0);t.material.emissive=new Qe(16771488),t.material.emissiveIntensity=0,e.add(t);const i=new ra(16771504,0,12);i.position.y=1.7,e.add(i),e.userData.light=i,e.userData.head=t;break}case"fishtrap":{const t=St(.3,.4,.6,we.wood,6,0,.3,0);t.material.wireframe=!0,e.add(t),e.add(St(.22,.3,.5,we.woodDark,6,0,.28,0));break}case"autorod":{e.add(Xe(.4,.3,.4,we.metal,0,.15,0));const t=St(.03,.04,1.4,we.wood,5,0,.8,0);t.rotation.z=-.6,e.add(t);break}case"tent":e.add(pn(1.1,1.2,we.canvasTent,4,0,.6,0)),e.add(Xe(.4,.5,.1,9075295,0,.25,.55));break;case"bag":e.add(St(.26,.34,.42,11569759,7,0,.21,0)),e.add(St(.09,.15,.16,9071173,6,0,.48,0));break}return e}function hm(n){const e=new lt;switch(n){case"axe":e.add(St(.035,.045,.62,we.wood,5,0,.16,0)),e.add(Xe(.2,.13,.06,we.rockDark,.09,.4,0));break;case"spear":e.add(St(.028,.035,1.15,we.wood,5,0,.3,0)),e.add(pn(.055,.2,we.rockDark,5,0,.95,0));break;case"knife":e.add(St(.03,.035,.16,we.woodDark,5,0,.02,0)),e.add(Xe(.045,.24,.02,we.metal,0,.2,0));break;case"rod":{const t=St(.018,.028,1.3,we.wood,5,0,.4,0);t.rotation.z=-.35,e.add(t);const i=St(.006,.006,.5,15790312,3,.42,.72,0);i.castShadow=!1,e.add(i);break}}return e}function dm(){const n=new lt,e=6986319;for(let i=0;i<4;i++)n.add(Xe(.28-i*.03,.14,.16,i===0?5933631:e,-i*.24,.08,Math.sin(i*1.8)*.08));const t=Xe(.04,.04,.04,16768324,.12,.14,.06);return n.add(t),n}function fm(){const n=new lt,e=9071183,t=7624254;n.add(Xe(1.3,.85,.8,e,0,.65,0)),n.add(Xe(.55,.5,.55,e,.8,.95,0)),n.add(Xe(.2,.15,.1,t,1.1,.85,0)),n.add(Xe(.15,.15,.1,t,.75,1.28,.18)),n.add(Xe(.15,.15,.1,t,.75,1.28,-.18));for(const[i,r]of[[-.45,.28],[.45,.28],[-.45,-.28],[.45,-.28]])n.add(Xe(.22,.5,.22,t,i,.25,r));return n}function pm(){const n=new lt,e=new ct(new Hr(.12,6,5),zt(15231578));e.position.y=.05,n.add(e);const t=St(.02,.02,.2,16117984,4,0,.2,0);return n.add(t),n}const oa=["#f2cfa8","#e8b88a","#c98f62","#8a5f42"],Ki=["#3a2a1a","#6a4a2a","#b8863f","#9a9a9a"],$i=["#7fb2d9","#d97f7f","#8fbf78","#c9a0d9","#e8c86a","#f0f0f0"],ca=["#5a6a8a","#4a4a4a","#8a6a4f","#3f6a5a"],mm=["Лысый","Короткие","Лохматые"],gm=["Бритый","Щетина","Борода"],_m=["Без шапки","Ушанка","Кепка"];function Oo(n,e){const t=parseInt(n.slice(1),16),i=Math.min(255,Math.max(0,(t>>16&255)*e)),r=Math.min(255,Math.max(0,(t>>8&255)*e)),s=Math.min(255,Math.max(0,(t&255)*e));return`rgb(${i|0},${r|0},${s|0})`}function Es(n){const e=parseInt(n.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function ko(n,e,t){return n.map((i,r)=>i*(1-t)+e[r]*t)}function la(n){const e=n.marks;let t=Es(oa[n.skin]||oa[0]);return t=ko(t,Es("#d98a6a"),e.sunburn*.45),t=ko(t,Es("#8a7a5f"),e.dirt*.3),`rgb(${t[0]|0},${t[1]|0},${t[2]|0})`}function vm(n,e,t){const r=e.marks;n.clearRect(0,0,128,128),n.fillStyle=la(e),n.fillRect(0,0,128,128);const s=t?.alcohol||0,a=t?.hp??100,o=t?.hangover;s>10&&(n.fillStyle=`rgba(220,90,70,${Math.min(.5,s/150)})`,n.beginPath(),n.ellipse(30,78,14,9,0,0,7),n.fill(),n.beginPath(),n.ellipse(98,78,14,9,0,0,7),n.fill()),n.fillStyle="#fff";const c=s>55?4:10;if(n.fillRect(30,48,20,c),n.fillRect(78,48,20,c),o&&(n.fillStyle="rgba(220,80,80,0.35)",n.fillRect(30,48,20,c),n.fillRect(78,48,20,c)),n.fillStyle="#2a2a33",n.fillRect(37,48+Math.max(0,c-6)/2,7,Math.min(c,7)),n.fillRect(85,48+Math.max(0,c-6)/2,7,Math.min(c,7)),n.fillStyle=Ki[e.hairColor]||"#3a2a1a",n.fillRect(28,38,24,5),n.fillRect(76,38,24,5),n.fillStyle=`rgb(${200+r.noseRed*40|0},${140-r.noseRed*70|0},${110-r.noseRed*60|0})`,n.beginPath(),n.ellipse(64,70,8+r.noseRed*4,10+r.noseRed*3,0,0,7),n.fill(),n.strokeStyle="#7a4a3a",n.lineWidth=4,n.beginPath(),a<30||o?n.arc(64,104,12,Math.PI*1.15,Math.PI*1.85):s>25?n.arc(64,92,14,Math.PI*.15,Math.PI*.85):(n.moveTo(52,98),n.lineTo(76,98)),n.stroke(),e.beard===1?(n.fillStyle="rgba(60,45,30,0.35)",n.fillRect(24,88,80,34)):e.beard===2&&(n.fillStyle=Ki[e.hairColor]||"#3a2a1a",n.fillRect(22,86,84,42),n.clearRect(50,88,28,14),n.fillStyle=la(e),n.fillRect(50,88,28,14),n.strokeStyle="#7a4a3a",n.beginPath(),s>25?n.arc(64,92,12,Math.PI*.15,Math.PI*.85):(n.moveTo(54,96),n.lineTo(74,96)),n.stroke()),r.dirt>.15){n.fillStyle=`rgba(90,75,55,${r.dirt*.5})`;for(let l=0;l<6;l++){const d=l*47%110+8,p=l*71%100+14;n.beginPath(),n.ellipse(d,p,6,4,l,0,7),n.fill()}}n.strokeStyle="#a05a4a",n.lineWidth=3,r.scars.slice(0,2).forEach((l,d)=>{const p=30+l.x*60,f=30+l.y*50;n.beginPath(),n.moveTo(p,f),n.lineTo(p+Math.cos(l.ang)*24,f+Math.sin(l.ang)*24),n.stroke();for(let m=0;m<3;m++){const g=.2+m*.3,v=p+Math.cos(l.ang)*24*g,h=f+Math.sin(l.ang)*24*g;n.beginPath(),n.moveTo(v-4,h-4),n.lineTo(v+4,h+4),n.stroke()}});for(const l of r.bruises.slice(0,3))n.fillStyle=`rgba(90,60,140,${Math.min(.5,l.t/300)})`,n.beginPath(),n.ellipse(20+l.x*90,30+l.y*60,10,7,0,0,7),n.fill()}function xm(n,e){const i=e.marks;n.clearRect(0,0,128,128);const r=$i[e.shirt]||$i[0];n.fillStyle=r,n.fillRect(0,0,128,128),n.fillStyle=Oo(r,.85),n.fillRect(0,90,128,38),n.fillStyle=Oo(r,.6);for(let s=0;s<4;s++)n.fillRect(61,14+s*26,6,6);if(i.dirt>.1){n.fillStyle=`rgba(80,65,45,${i.dirt*.55})`;for(let s=0;s<8;s++){const a=s*53%115+5,o=s*37%110+8;n.beginPath(),n.ellipse(a,o,8,5,s,0,7),n.fill()}}n.strokeStyle="#5a3a2f",n.lineWidth=3,i.scars.slice(2).forEach(s=>{const a=15+s.x*90,o=15+s.y*90;for(let c=-1;c<=1;c++)n.beginPath(),n.moveTo(a+c*8,o),n.lineTo(a+c*8+Math.cos(s.ang)*30,o+Math.sin(s.ang)*30),n.stroke()})}function ua(n){const e=new lt,t=document.createElement("canvas");t.width=t.height=128;const i=new Ro(t);i.magFilter=Yt,i.colorSpace=en;const r=document.createElement("canvas");r.width=r.height=128;const s=new Ro(r);s.magFilter=Yt,s.colorSpace=en;const a=zt(16777215),o=zt(16777215),c=zt(16777215),l=zt(16777215),d=new Ui({map:i}),p=new Ui({map:s}),f=new ct(new Lt(.5,.5,.5),[a,a,a,a,d,a]);f.position.y=1.55,f.castShadow=!0,e.add(f);const m=new ct(new Lt(.6,.65,.35),[o,o,o,o,p,p]);m.position.y=1,m.castShadow=!0,e.add(m);const g=new Lt(.16,.55,.16),v=new lt,h=new lt,u=new ct(g,o),S=new ct(new Lt(.16,.14,.16),a);u.position.y=-.22,S.position.y=-.55,v.add(u,S);const x=u.clone(),E=S.clone();h.add(x,E),v.position.set(-.39,1.28,0),h.position.set(.39,1.28,0),u.castShadow=x.castShadow=!0,e.add(v,h);const D=new Lt(.2,.55,.22),w=new lt,A=new lt,C=new ct(D,c);C.position.y=-.28,w.add(C);const b=C.clone();A.add(b),w.position.set(-.16,.68,0),A.position.set(.16,.68,0),C.castShadow=b.castShadow=!0,e.add(w,A);const _=new ct(new Lt(.54,.16,.54),l);_.position.set(0,1.83,0);const L=new lt;L.add(new ct(new Lt(.56,.2,.56),l));const k=new ct(new Lt(.15,.15,.15),l);k.position.set(.15,.14,.1);const B=k.clone();B.position.set(-.18,.12,-.08),L.add(k,B),L.position.set(0,1.85,0);const $=new lt,J=new ct(new Lt(.58,.22,.58),zt(12101768)),Y=new ct(new Lt(.12,.3,.4),zt(12101768));Y.position.set(-.33,-.18,0);const Z=Y.clone();Z.position.x=.33,$.add(J,Y,Z),$.position.set(0,1.88,0);const X=new lt,me=new ct(new Lt(.54,.14,.54),zt(5929626)),ve=new ct(new Lt(.4,.05,.25),zt(5929626));ve.position.set(0,-.04,.36),X.add(me,ve),X.position.set(0,1.85,0),e.add(_,L,$,X);const _e={head:f,torso:m,armL:v,armR:h,legL:w,legR:A,hairShort:_,hairMessy:L,ushanka:$,cap:X};function qe(re){const ne=re?.char||n;vm(t.getContext("2d"),ne,re),xm(r.getContext("2d"),ne),i.needsUpdate=!0,s.needsUpdate=!0,a.color.set(la(ne)),o.color.set($i[ne.shirt]||$i[0]),c.color.set(ca[ne.pants]||ca[0]),l.color.set(Ki[ne.hairColor]||Ki[0]),_.visible=ne.hair===1&&ne.hat===0,L.visible=ne.hair===2&&ne.hat===0,$.visible=ne.hat===1,X.visible=ne.hat===2}qe(null);let Ze=0;function j(re,ne,O){ne?Ze+=re*9:Ze*=.8;const q=Math.sin(Ze)*(ne?.6:0);_e.legL.rotation.x=q,_e.legR.rotation.x=-q,_e.armL.rotation.x=-q*.7,_e.armR.rotation.x=q*.7;const le=Math.max(0,(O-30)/70);e.rotation.z=Math.sin(Ze*.35+performance.now()*.001)*.12*le,_e.head.rotation.z=Math.sin(performance.now()*.0013)*.15*le}return{group:e,parts:_e,updateAppearance:qe,animate:j}}function Mm(n,e){const t=document.getElementById("editor"),i=document.getElementById("edview");t.style.display="block";const r=new Rc({canvas:i,antialias:!0,alpha:!0});r.setPixelRatio(Math.min(devicePixelRatio,2));const s=new Cc,a=new qt(40,1,.1,50);a.position.set(0,1.6,3.6),a.lookAt(0,1,0),s.add(new Lc(16777215,.9));const o=new sa(16773849,1.6);o.position.set(2,4,3),s.add(o);const c=new ct(new tr(1.1,1.1,.1,24),new Ui({color:11129231}));c.position.y=-.05,s.add(c);let l=ua(n);s.add(l.group);function d(){s.remove(l.group),l=ua(n),l.updateAppearance({char:n,alcohol:0,hp:100}),s.add(l.group)}l.updateAppearance({char:n,alcohol:0,hp:100});const p=document.getElementById("edopts");p.innerHTML="";function f(u,S){const x=document.createElement("div");return x.className="edrow",x.innerHTML=`<label>${u}</label><div class="opts">${S}</div>`,p.appendChild(x),x}function m(u,S,x,E=!1){const D=S.map((A,C)=>E?`<button class="opt swatch ${n[x]===C?"sel":""}" data-i="${C}" style="background:${A}"></button>`:`<button class="opt ${n[x]===C?"sel":""}" data-i="${C}">${A}</button>`).join(""),w=f(u,D);w.querySelectorAll(".opt").forEach(A=>{A.onclick=()=>{n[x]=+A.dataset.i,w.querySelectorAll(".opt").forEach(C=>C.classList.toggle("sel",C===A)),d()}})}const g=document.createElement("div");g.className="edrow",g.innerHTML=`<label>Имя</label><input id="edname" maxlength="14" value="${n.name}">`,p.appendChild(g),g.querySelector("input").addEventListener("input",u=>{n.name=u.target.value.trim()||"Рыбак"}),m("Кожа",oa,"skin",!0),m("Причёска",mm,"hair"),m("Цвет волос",Ki,"hairColor",!0),m("Борода",gm,"beard"),m("Головной убор",_m,"hat"),m("Рубаха",$i,"shirt",!0),m("Штаны",ca,"pants",!0);let v=!0;function h(u){if(!v)return;const S=i.clientWidth,x=i.clientHeight,E=r.getPixelRatio();(i.width!==Math.floor(S*E)||i.height!==Math.floor(x*E))&&(r.setSize(S,x,!1),a.aspect=S/x,a.updateProjectionMatrix()),l.group.rotation.y=u*8e-4,r.render(s,a),requestAnimationFrame(h)}requestAnimationFrame(h),document.getElementById("ed-done").onclick=()=>{v=!1,r.dispose(),t.style.display="none",e(n)}}function Fr(n){return n>mn}function Sm(n,e){n.time+=e/Bo,n.time>=1&&(n.time-=1,n.day++,n.stats.days=n.day)}function ym(n,e,t={}){const i=[];if(n.food=Dt(n.food-ke.hungerRate*e,0,100),t.sleeping||(n.energy=Dt(n.energy-ke.energyRate*e,0,100)),n.alcohol>0){const r=n.alcohol;n.alcohol=Dt(n.alcohol-ke.alcoholDecay*e,0,100),n.alcohol===0&&r>0&&(n.wasDrunkPeak>=ke.hangoverThreshold&&(n.hangover=!0,i.push({type:"hangover"})),n.wasDrunkPeak=0)}return n.poison>0&&(n.poison=Math.max(0,n.poison-e),n.hp=Dt(n.hp-ke.snakePoisonDps*e,0,100),n.hp===0&&i.push({type:"death",cause:"poison"})),n.food<=0&&(n.hp=Dt(n.hp-ke.starveHpRate*e,0,100),n.hp===0&&i.push({type:"death",cause:"starve"})),n.food>60&&n.hp<100&&(n.hp=Dt(n.hp+(t.sleeping?1.5:.15)*e,0,100)),!Fr(n.time)&&!t.indoors&&(n.char.marks.sunburn=Math.min(1,n.char.marks.sunburn+e/900)),n.char.marks.dirt=Math.min(1,n.char.marks.dirt+e/600),n.char.marks.bruises=n.char.marks.bruises.filter(r=>(r.t-=e)>0),i}function Em(n){let e=1;return n.energy<15&&(e*=ke.exhaustSlowdown),n.hangover&&(e*=ke.hangoverDebuff),n.alcohol>=ke.alcoholSwayMin&&(e*=.85),e}function bm(n){let e=ke.playerBaseDamage;return n.equipped==="spear"?e=ke.spearDamage:n.equipped==="knife"?e=ke.knifeDamage:n.equipped==="axe"&&(e=ke.axeDamage),n.alcohol>=ke.alcoholBuffMin&&n.alcohol<ke.alcoholPassOut&&(e*=ke.alcoholBuffDamage),Math.round(e)}function Tm(n){return n.alcohol>=ke.alcoholBuffMin?ke.alcoholBuffChop:1}function Am(n,e){const t=[];return e==="snake"?(n.hp=Dt(n.hp-ke.snakeDamage,0,100),n.poison=ke.snakePoisonTime,t.push({type:"hit",dmg:ke.snakeDamage,kind:e})):e==="bear"&&(n.hp=Dt(n.hp-ke.bearDamage,0,100),n.char.marks.scars.push({x:.3+Ei(n)*.4,y:.2+Ei(n)*.5,len:.08+Ei(n)*.1,ang:Ei(n)*Math.PI}),n.char.marks.bruises.push({x:.4+Ei(n)*.3,y:.3+Ei(n)*.4,t:240}),t.push({type:"hit",dmg:ke.bearDamage,kind:e,scar:!0})),n.hp===0&&t.push({type:"death",cause:e}),t}function Ei(n){const e=n.stats.bears*7+n.stats.snakes*13+n.char.marks.scars.length*31+n.day*3;return Math.sin(e*12.9898)*43758.5453%1*.5+.5}function wm(n){n.hp=40,n.food=Math.max(n.food,30),n.alcohol=0,n.poison=0,n.hangover=!0;for(const[e,t]of Object.entries({...n.inv})){const i=Math.floor(t/2);i>0&&!["axe","spear","knife","rod"].includes(e)&&ei(n,e,i)}}function Rm(n){n.energy=Dt(n.energy+40,0,100),n.alcohol=55,n.hangover=!1,n.time=Math.min(.98,n.time+.15),n.char.marks.bruises.push({x:.45,y:.15,t:300})}function Cm(n){n.energy=ke.sleepEnergy,n.alcohol=Math.max(0,n.alcohol-60),n.wasDrunkPeak>=ke.hangoverThreshold&&(n.hangover=!0,n.wasDrunkPeak=0),Fr(n.time)?(n.time=.02,n.day++,n.stats.days=n.day):n.time=Math.min(mn+.01,n.time+ke.sleepHours),n.hp=Dt(n.hp+25,0,100),n.food=Dt(n.food-15,0,100)}function Pm(n){n.char.marks.dirt=0}function Lm(n,e,t,i){if(!(n>=e&&n<=e+ke.fishing.zoneSize))return null;const s=t?ke.fishing.lootBoat:ke.fishing.lootShore;let a=0;const o=s.reduce((l,[,d])=>l+d,0),c=i*o;for(const[l,d]of s)if(a+=d,c<a)return l;return s[0][0]}function Dm(n,e){const t=n.generator;return t.on?(t.fuel-=ke.generatorFuelPerDay/Bo*e,t.fuel<=0?(t.fuel=0,t.on=!1,!0):!1):!1}function Im(n){return bn(n,"fuel")<1?!1:(ei(n,"fuel",1),Qt(n,"canister",1),n.generator.fuel=Math.min(2,n.generator.fuel+1),!0)}function Um(n,e,t){const i=[];for(const r of n.placed)if(r.type==="fishtrap"){if(r.data.timer=(r.data.timer||0)+e,r.data.timer>=ke.fishTrapTime){r.data.timer=0;const s=r.data.stock=r.data.stock||{},a=(r.x+r.y+n.day)%3===0?"fish_med":"fish_small";s[a]=(s[a]||0)+1,i.push({type:r.type,id:a})}}else if(r.type==="autorod"){if(!t)continue;if(r.data.timer=(r.data.timer||0)+e,r.data.timer>=ke.autoRodTime){r.data.timer=0;const s=r.data.stock=r.data.stock||{},a=(r.x*31+r.y*17+Math.floor(n.time*100))%10,o=a<5?"fish_med":a<8?"fish_small":"fish_big";s[o]=(s[o]||0)+1,i.push({type:r.type,id:o})}}return i}function Nm(n,e,t){return t.some(i=>Math.abs(i.x-n)+Math.abs(i.y-e)<=ke.lampRadius)}function Fm(n){const e=new Rc({canvas:n,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=$o,e.outputColorSpace=en;const t=new Cc;t.background=new Qe(12575730),t.fog=new ba(12575730,40,110);const i=new qt(50,1,.1,300),r=new sa(16773849,2.2);r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-40,r.shadow.camera.right=40,r.shadow.camera.top=40,r.shadow.camera.bottom=-40,r.shadow.camera.far=120,r.shadow.bias=-5e-4,t.add(r,r.target);const s=new Lc(14674674,.7);t.add(s);const a=new Qp(13625599,12112032,.5);t.add(a);const o=new sa(9414872,0);t.add(o,o.target);function c(){const g=n.clientWidth||innerWidth,v=n.clientHeight||innerHeight;e.setSize(g,v,!1),i.aspect=g/v,i.updateProjectionMatrix()}addEventListener("resize",c),c();const l=new Qe(12575730),d=new Qe(16107930),p=new Qe(1317422),f=new Qe;function m(g,v){const h=Math.min(1,g/mn),u=g>mn;let S,x,E;if(u){const D=(g-mn)/(1-mn);S=0,x=.12,E=p,o.intensity=.35,o.position.set(v.x+Math.sin(D*Math.PI)*30,40,v.z-20),o.target.position.set(v.x,0,v.z)}else{const D=Math.sin(h*Math.PI);S=.6+D*1.7,x=.45+D*.35;const w=Math.min(h,1-h)*4;f.copy(d).lerp(l,Math.min(1,w)),E=f;const A=(h-.5)*Math.PI*.9;r.position.set(v.x+Math.sin(A)*40,15+Math.cos(A)*35,v.z+20),o.intensity=0}return r.intensity=S,r.target.position.set(v.x,0,v.z),s.intensity=x,a.intensity=u?.08:.5,t.background=t.background.lerp?t.background.lerp(E,.05):E,t.fog.color.copy(t.background),{night:u}}return{renderer:e,scene:t,camera:i,sun:r,updateDaylight:m,resize:c}}function Om(){const n={dx:0,dy:0,action:!1,attack:!1,isTouch:!1};let e=!1,t=!1;const i=new Set,r=()=>{let f=0,m=0;return(i.has("KeyW")||i.has("ArrowUp"))&&(m-=1),(i.has("KeyS")||i.has("ArrowDown"))&&(m+=1),(i.has("KeyA")||i.has("ArrowLeft"))&&(f-=1),(i.has("KeyD")||i.has("ArrowRight"))&&(f+=1),[f,m]},s={key:[]};addEventListener("keydown",f=>{if(!(f.target&&["INPUT","TEXTAREA"].includes(f.target.tagName))){if(f.repeat)return void i.add(f.code);i.add(f.code),f.code==="KeyE"&&(e=!0),f.code==="Space"&&(t=!0,f.preventDefault());for(const m of s.key)m(f.code)}}),addEventListener("keyup",f=>i.delete(f.code)),addEventListener("blur",()=>i.clear());const a=document.getElementById("joy"),o=a.querySelector(".stick");let c=null,l=[0,0];function d(f){const m=a.getBoundingClientRect(),g=m.left+m.width/2,v=m.top+m.height/2;let h=(f.clientX-g)/(m.width/2),u=(f.clientY-v)/(m.height/2);const S=Math.hypot(h,u);S>1&&(h/=S,u/=S),l=[Math.abs(h)>.18?h:0,Math.abs(u)>.18?u:0],o.style.left=36+h*34+"px",o.style.top=36+u*34+"px"}a.addEventListener("pointerdown",f=>{c=f.pointerId,a.setPointerCapture(c),d(f)}),a.addEventListener("pointermove",f=>{f.pointerId===c&&d(f)});const p=f=>{f.pointerId===c&&(c=null,l=[0,0],o.style.left="36px",o.style.top="36px")};return a.addEventListener("pointerup",p),a.addEventListener("pointercancel",p),document.getElementById("mob-act").addEventListener("pointerdown",f=>{f.preventDefault(),e=!0}),document.getElementById("mob-atk").addEventListener("pointerdown",f=>{f.preventDefault(),t=!0}),addEventListener("pointerdown",f=>{f.pointerType==="touch"&&!n.isTouch&&(n.isTouch=!0,document.body.classList.add("touch"))},{capture:!0}),navigator.maxTouchPoints>0&&matchMedia("(pointer: coarse)").matches&&(n.isTouch=!0,document.body.classList.add("touch")),{state:n,onKey(f){s.key.push(f)},poll(){const[f,m]=r();return n.dx=f||l[0],n.dy=m||l[1],n.action=e,e=!1,n.attack=t,t=!1,n}}}const Wi=[[0,-1],[1,0],[0,1],[-1,0]],km=4.3;function Bm(n,e,t){const i=document.getElementById("c"),{renderer:r,scene:s,camera:a,updateDaylight:o}=Fm(i),c=im(),l=Om();n.px===0&&n.py===0&&(n.px=c.spawn.x,n.py=c.spawn.y),!n.boatX&&!n.boatY&&(n.boatX=c.boat.x,n.boatY=c.boat.y);const d={x:Wi[n.dir][0],y:Wi[n.dir][1]},p=()=>Math.round(n.px),f=()=>Math.round(n.py),m=new Set(n.removed);for(const P of m){const[z,G]=P.split(",").map(Number),K=Wt(c,z,G);K&&(K.obj=null)}const g=rm(c);s.add(g.ground,g.water);const v=sm(c,m);s.add(v.group);const h=am();h.position.copy(cn(c.car.x,c.car.y)),s.add(h);const u=cm();u.position.copy(cn(c.gen.x,c.gen.y)),s.add(u);const S=om();S.position.copy(cn(c.hut.x,c.hut.y)),S.rotation.y=Math.PI/2,s.add(S);const x=lm();x.position.copy(cn(c.island.x,c.island.y)),s.add(x);let E=Fo(n.boatFixed);E.position.copy(cn(n.boatX,n.boatY)),s.add(E);function D(){const P=E.position.clone(),z=E.rotation.y;s.remove(E),E=Fo(n.boatFixed),E.position.copy(P),E.rotation.y=z,s.add(E)}const w=new Map;function A(P){const z=um(P.type);z.position.copy(cn(P.x,P.y)),s.add(z),w.set(P.x+","+P.y,z)}n.placed.forEach(A);const C=ua(n.char);s.add(C.group),C.group.position.set(n.px*at,0,n.py*at),C.updateAppearance(n);const b=new lt;b.position.set(.02,-.52,.1),b.rotation.x=1.35,C.parts.armR.add(b);let _=null;function L(){_!==n.equipped&&(_=n.equipped,b.clear(),_&&["axe","spear","knife","rod"].includes(_)&&b.add(hm(_)))}L();const k=pm();k.visible=!1,s.add(k);const B=[];function $(P,z){const G=dm();G.position.copy(cn(P,z)),s.add(G),B.push({kind:"snake",x:P,y:z,hp:ke.snakeHp,mesh:G,cd:0,wanderT:0})}function J(P,z){const G=fm();G.position.copy(cn(P,z)),s.add(G),B.push({kind:"bear",x:P,y:z,hp:ke.bearHp,mesh:G,cd:0,wanderT:0})}function Y(P,z){s.remove(P.mesh),B.splice(B.indexOf(P),1),!z&&(P.kind==="snake"?(Qt(n,"meat_snake",1),Qt(n,"snake_skin",1),n.stats.snakes++,e.toast("🐍 Змея побеждена! +мясо, +кожа","good")):(Qt(n,"meat_bear",3),Qt(n,"bear_hide",1),n.stats.bears++,e.toast("🐻 Медведь повержен! +3 мяса, +шкура","good")))}let Z=!0,X=!1,me=!1;function ve(P,z){for(const[K,he]of[[-.32,-.32],[.32,-.32],[-.32,.32],[.32,.32]]){const Le=Math.round(P+K),Oe=Math.round(z+he);if(!yi(c,Le,Oe,n.onBoat)||!n.onBoat&&Le===n.boatX&&Oe===n.boatY)return!1}return!0}function _e(P,z,G,K,he){let Le=Math.hypot(z,G);if(me=!1,Le<.15)return;Le>1&&(z/=Le,G/=Le,Le=1);const Oe=Math.max(0,(n.alcohol-ke.alcoholSwayMin)/(100-ke.alcoholSwayMin));if(Oe>0){const ot=Math.atan2(G,z)+Math.sin(K*.0021)*.55*Oe,mt=Math.hypot(z,G);z=Math.cos(ot)*mt,G=Math.sin(ot)*mt}const Ge=km*Em(n),Ne=n.px+z*Ge*P,Re=n.py+G*Ge*P;ve(Ne,n.py)&&(n.px=Ne),ve(n.px,Re)&&(n.py=Re);const ht=Math.hypot(z,G);if(!he&&ht>.01&&(d.x=z/ht,d.y=G/ht,n.dir=Math.abs(d.x)>Math.abs(d.y)?d.x>0?1:3:d.y>0?2:0),me=!0,n.onBoat){const ot=Wt(c,p(),f());ot&&(ot.t===Ke.WATER||ot.t===Ke.DEEP)?(n.boatX=p(),n.boatY=f(),E.position.set(n.px*at,-.1,n.py*at),E.rotation.y=Math.atan2(d.x,d.y)+Math.PI/2):ot&&ot.t===Ke.SAND&&(n.onBoat=!1,E.position.copy(cn(n.boatX,n.boatY)),e.toast("⚓ Сошёл на берег"))}}function qe(P){const z=Wt(c,P.x,P.y);if(!z)return null;const G=Wt(c,p(),f()),K=P.x+","+P.y,he=n.placed.find(Re=>Re.x===P.x&&Re.y===P.y),Le=P.x===p()&&P.y===f(),Oe=z.t===Ke.WATER||z.t===Ke.DEEP,Ge=n.onBoat&&G&&(G.t===Ke.WATER||G.t===Ke.DEEP);if(n.equipped==="rod"&&(Oe&&!n.onBoat||Le&&Ge))return{label:"🎣 Закинуть удочку",run:()=>O(P)};if(he){const Re=he.type;return["campfire","workbench","still","smoker","pyro"].includes(Re)?{label:"🔨 "+Tt[Re+"_kit"].name.replace(" (набор)",""),run:()=>ut(Re)}:Re==="fishtrap"||Re==="autorod"?{label:"🪤 Проверить улов",run:()=>{he.data.stock||(he.data.stock={}),Re==="autorod"&&!Fe()&&!Object.keys(he.data.stock).length&&e.toast("🤖 Самолов без электричества не работает","bad"),ge(),e.focusLoot(n,"p"+he.x+","+he.y)}}:Re==="tent"?{label:"⛺ Спать в палатке",run:le}:Re==="bag"?{label:"🎒 Мешок с вещами",run:()=>{he.data.stock||(he.data.stock={}),ge(),e.focusLoot(n,"p"+he.x+","+he.y)}}:null}if(z.obj==="car")return{label:"🚗 Багажник",run:()=>{ge(),e.focusLoot(n,"car")}};if(z.obj==="generator"){const Re=n.generator;return{label:Re.on?"🔌 Выключить генератор":"🔌 Включить генератор (топливо: "+Math.round(Re.fuel*100)/100+")",run:()=>{if(!Re.on&&Re.fuel<=.01)if(Im(n))e.toast("⛽ Заправил генератор");else return e.toast("⛽ Нет бензина! Крафть в крекинг-кубе","bad");Re.on=!Re.on,e.toast(Re.on?"💡 Генератор тарахтит":"🔌 Генератор выключен")}}}if(P.x===n.boatX&&P.y===n.boatY&&!n.onBoat)return n.boatFixed?{label:"🛶 Сесть в лодку",run:()=>{n.onBoat=!0,n.px=P.x,n.py=P.y,e.toast("🛶 Поплыли! Крупная рыба ждёт")}}:{label:bn(n,"boat_patch")?"🛠️ Починить лодку":"🛶 Лодка дырявая (нужен ремкомплект)",run:()=>{ei(n,"boat_patch",1)?(n.boatFixed=!0,D(),e.toast("🛶 Лодка на ходу!","good")):e.toast("Нужен ремкомплект лодки (верстак)","bad")}};if(z.obj==="hut")return{label:"🏚️ Обыскать хижину",run:()=>{ge(),e.focusLoot(n,"hut")}};if(z.obj==="island_chest")return{label:"📦 Открыть ящик",run:()=>{ge(),e.focusLoot(n,"island")}};const Ne={bush:{give:{berry:3},msg:"🫐 +3 ягоды"},mushroom:{give:{mushroom:2},msg:"🍄 +2 гриба"},tallgrass:{give:{grass:2},msg:"🌾 +2 травы"},driftwood:{give:{stick:2},msg:"🥢 +2 палки"},plastic:{give:{plastic:2},msg:"🧴 +2 пластика"}};if(z.obj&&Ne[z.obj]&&!m.has(K)){const Re=Ne[z.obj];return{label:"✋ Собрать",run:()=>{for(const[ht,ot]of Object.entries(Re.give))Qt(n,ht,ot);m.add(K),n.removed.push(K),z.obj=null,v.remove(P.x,P.y),e.toast(Re.msg,"good")}}}return z.obj==="tree"&&!m.has(K)?bn(n,"axe")?{label:"🪓 Рубить дерево",attack:!0}:{label:"🌲 Нужен топор",attack:!0}:z.obj==="rock"&&!m.has(K)?{label:"⛏️ Долбить камень",attack:!0}:Oe&&!n.onBoat&&n.char.marks.dirt>.2?{label:"🧼 Умыться в Волге",run:()=>{Pm(n),C.updateAppearance(n),e.toast("💦 Чистый! Почти.")}}:null}function Ze(){if(ne)return null;let P=null,z=1e9;const G=p(),K=f();for(let he=-2;he<=2;he++)for(let Le=-2;Le<=2;Le++){const Oe=G+Le,Ge=K+he,Ne=Oe-n.px,Re=Ge-n.py,ht=Math.hypot(Ne,Re);if(ht>2.05)continue;const ot=qe({x:Oe,y:Ge});if(!ot)continue;const mt=ht<.3?1:(Ne*d.x+Re*d.y)/(ht||1),We=ht-mt*.7;We<z&&(z=We,P={...ot,cell:{x:Oe,y:Ge}})}return P}let j=0;function re(){if(ne)return;j=.25;let P=null,z=1e9;for(const Ne of B){const Re=Math.hypot(Ne.x-n.px,Ne.y-n.py);Re<1.8&&Re<z&&(z=Re,P=Ne)}if(P){const Ne=bm(n);P.hp-=Ne,P.mesh.position.y+=.15,P.hp<=0?Y(P):e.toast((P.kind==="snake"?"🐍":"🐻")+" −"+Ne);return}let G=null,K=1e9,he=null;const Le=p(),Oe=f();for(let Ne=-2;Ne<=2;Ne++)for(let Re=-2;Re<=2;Re++){const ht=Le+Re,ot=Oe+Ne,mt=ht+","+ot,We=Wt(c,ht,ot);if(!We||m.has(mt)||We.obj!=="tree"&&We.obj!=="rock")continue;const it=ht-n.px,kt=ot-n.py,Gt=Math.hypot(it,kt);if(Gt>1.9)continue;const ii=(it*d.x+kt*d.y)/(Gt||1),y=Gt-ii*.7;y<K&&(K=y,G={x:ht,y:ot},he=We.obj)}if(!G)return;const Ge=G.x+","+G.y;if(he==="tree"){if(!bn(n,"axe"))return e.toast("🌲 Без топора не выйдет","bad");const Ne=(n.treeHits[Ge]||0)+Tm(n);if(Ne>=ke.treeHp)delete n.treeHits[Ge],m.add(Ge),n.removed.push(Ge),Wt(c,G.x,G.y).obj=null,v.remove(G.x,G.y),Qt(n,"log",2),Qt(n,"stick",2),n.stats.trees++,e.toast("🪵 +2 бревна, +2 палки","good");else{n.treeHits[Ge]=Ne;const Re=v.get(G.x,G.y);Re&&(Re.rotation.z=Math.sin(Ne*9)*.06)}n.energy=Dt(n.energy-1.5,0,100)}else{const Ne=(n.treeHits[Ge]||0)+1;if(Ne>=ke.rockHp){delete n.treeHits[Ge],m.add(Ge),n.removed.push(Ge),Wt(c,G.x,G.y).obj=null,v.remove(G.x,G.y),Qt(n,"stone",2);const Re=(G.x*7+G.y*13)%4===0;Re&&Qt(n,"scrap",1),e.toast(Re?"🪨 +2 камня, +металлолом!":"🪨 +2 камня","good")}else n.treeHits[Ge]=Ne;n.energy=Dt(n.energy-1.5,0,100)}}let ne=null;function O(P){ne={pos:0,dir:1,fromBoat:n.onBoat,zoneStart:.15+Math.random()*(.8-ke.fishing.zoneSize)},e.els.fishing.style.display="flex",e.els.fishzone.style.left=ne.zoneStart*100+"%",e.els.fishzone.style.width=ke.fishing.zoneSize*100+"%",k.position.copy(cn(P.x,P.y)),n.onBoat&&(k.position.x-=at*.8),k.position.y=-.15,k.visible=!0}function q(){const P=ne;ne=null,e.els.fishing.style.display="none",k.visible=!1;const z=Lm(P.pos,P.zoneStart,P.fromBoat,Math.random());if(!z)return e.toast("🎣 Сорвалась!","bad");Qt(n,z,1),z.startsWith("fish")&&n.stats.fish++,e.toast("🎣 Поймал: "+Tt[z].name+"!","good"),n.energy=Dt(n.energy-2,0,100)}function le(){if(!X){if(B.some(P=>P.kind==="bear"&&Math.abs(P.x-n.px)+Math.abs(P.y-n.py)<6))return e.toast("🐻 Рядом медведь — не до сна!","bad");X=!0,e.els.sleepFade.style.opacity=1,setTimeout(()=>{Cm(n),B.filter(P=>P.kind==="bear").forEach(P=>Y(P,!0)),C.updateAppearance(n),Xi(n,localStorage),e.toast("😴 Выспался. Новый день на Волге!","good"),setTimeout(()=>{e.els.sleepFade.style.opacity=0,X=!1},600)},1300)}}function de(P){if(!Z)return;Z=!1,e.els.sleepFade.style.opacity=1;const z={starve:"💀 Помер с голоду…",poison:"💀 Змеиный яд доконал…",snake:"💀 Змеи закусали…",bear:"💀 Медведь оказался сильнее…"};e.toast(z[P]||"💀 Помер…","bad"),setTimeout(()=>{wm(n),n.px=c.spawn.x,n.py=c.spawn.y,n.onBoat=!1,C.group.position.set(n.px*at,0,n.py*at),B.slice().forEach(G=>Y(G,!0)),C.updateAppearance(n),Xi(n,localStorage),e.toast("⛑️ Очнулся у машины. Полбарахла растерял…"),setTimeout(()=>{e.els.sleepFade.style.opacity=0,Z=!0},800)},1600)}function Ee(P){n.equipped=n.equipped===P?null:P,e.toast(n.equipped?"✊ В руке: "+Tt[P].name:"✋ Руки свободны")}function T(P){const z=Tt[P],G=Gc(n,P);G&&(z.drink?(e.toast("🍻 "+z.name+"! Крепчаем.","good"),G.passOut&&(e.toast("🥴 Перебрал! Отключка…","bad"),Rm(n))):(e.toast("😋 "+z.name+(z.eat.hp<0?" (живот крутит…)":""),z.eat.hp<0?"bad":"good"),G.curedHangover&&e.toast("✨ Похмелье отпустило!","good")),C.updateAppearance(n))}function De(P,z){let G=n.placed.find(he=>he.type==="bag"&&he.x===p()&&he.y===f());if(!G){if(n.placed.some(Le=>Le.x===p()&&Le.y===f()))return e.toast("🚫 Здесь уже что-то стоит, отойди","bad");G={type:"bag",x:p(),y:f(),data:{stock:{}}},n.placed.push(G),A(G)}G.data.stock||(G.data.stock={});const K=Pa(n,G.data.stock,P,z);K&&e.toast("🎒 В мешок: "+Tt[P].name+" ×"+K)}e.onUseItem=P=>{const z=Tt[P];if(z.cat==="tool"&&!z.eat){Ee(P),e.renderInventory(n);return}if(z.place){Te(P,z.place);return}(z.eat||z.drink)&&(T(P),e.renderInventory(n))},e.onItemAction=(P,z)=>{if(P==="use")T(z);else if(P==="equip")Ee(z);else if(P==="place")Te(z,Tt[z].place);else if(P==="drop1")De(z,1);else if(P==="dropAll")De(z,1/0);else if(P==="put"){const G=e.selectedNearby();G&&G.canPut&&Pa(n,G.cont,z)}ge(),e.renderInventory(n)},e.bindState(n);function Te(P,z){const G=Math.round(n.px+d.x*1.25),K=Math.round(n.py+d.y*1.25),he=Wt(c,G,K),Le=n.placed.some(Re=>Re.x===G&&Re.y===K),Oe=he&&he.obj&&!m.has(G+","+K),Ge=G===p()&&K===f();if(!he||Le||Oe||Ge||!yi(c,G,K)||G===n.boatX&&K===n.boatY)return e.toast("🚫 Здесь не поставить. Повернись к свободному месту","bad");if((z==="fishtrap"||z==="autorod")&&!Wi.some(([ht,ot])=>{const mt=Wt(c,G+ht,K+ot);return mt&&(mt.t===Ke.WATER||mt.t===Ke.DEEP)}))return e.toast("🌊 Ставь у самой воды","bad");ei(n,P,1);const Ne={type:z,x:G,y:K,data:{}};n.placed.push(Ne),A(Ne),e.renderInventory(n),e.toast("🏗️ Построено: "+Tt[P].name.replace(" (набор)",""),"good")}function $e(){const P=[],G=(K,he)=>Math.hypot(K-n.px,he-n.py)<=2.3;G(c.car.x,c.car.y)&&P.push({key:"car",title:"🚗 Багажник",cont:n.containers.car,canPut:!0,extra:{label:"😴 Поспать в машине",cb:le}}),G(c.hut.x,c.hut.y)&&P.push({key:"hut",title:"🏚️ Хижина",cont:n.containers.hut,canPut:!0}),G(c.island.x,c.island.y)&&P.push({key:"island",title:"📦 Ящик",cont:n.containers.island,canPut:!0});for(const K of n.placed)G(K.x,K.y)&&(K.type==="fishtrap"||K.type==="autorod"||K.type==="bag")&&(K.data.stock||(K.data.stock={}),P.push({key:"p"+K.x+","+K.y,title:K.type==="fishtrap"?"🪤 Верша":K.type==="autorod"?"🤖 Самолов":"🎒 Мешок",cont:K.data.stock,canPut:K.type==="bag"}));return P}function ge(){e.setNearby(n,$e())}function ut(P){e.renderCraft(n,P),e.open("craft")}e.onCraft=(P,z)=>{zc(n,P,z)?(e.toast("✅ Готово!","good"),e.renderCraft(n,z)):e.toast("Не хватает ресурсов","bad")};function Fe(){return n.generator.on&&n.generator.fuel>0}function je(){const P=[];if(Fe()){P.push({x:c.gen.x,y:c.gen.y});for(const z of n.placed)z.type==="lamp"&&P.push({x:z.x,y:z.y})}for(const z of n.placed)z.type==="campfire"&&P.push({x:z.x,y:z.y});return P}let R=5;function M(P){if(R-=P,R>0)return;R=8;const z=Fr(n.time),G=B.filter(he=>he.kind==="snake").length,K=B.filter(he=>he.kind==="bear").length;if(!z&&G<3)for(let he=0;he<12;he++){const Le=p()+(Math.random()*16|0)-8,Oe=f()+(Math.random()*16|0)-8,Ge=Wt(c,Le,Oe);if(Ge&&(Ge.obj==="tallgrass"||Ge.t===Ke.GRASS)&&yi(c,Le,Oe)&&Math.abs(Le-n.px)+Math.abs(Oe-n.py)>4&&Math.random()<.4){$(Le,Oe);break}}if(z&&K<2&&n.day>=2)for(let he=0;he<12;he++){const Le=p()+(Math.random()*24|0)-12,Oe=f()+(Math.random()*24|0)-12,Ge=Wt(c,Le,Oe);if(Ge&&Ge.t===Ke.FOREST&&yi(c,Le,Oe)&&Math.abs(Le-n.px)+Math.abs(Oe-n.py)>7){J(Le,Oe);break}}z||B.filter(he=>he.kind==="bear").forEach(he=>Y(he,!0))}function W(P,z){const G=je();for(const K of B){K.cd=Math.max(0,K.cd-P);const he=n.px-K.x,Le=n.py-K.y,Oe=Math.hypot(he,Le),Ge=K.kind==="snake";let Ne=0;if(Oe<(Ge?4.5:11)&&Oe>.05)K.tx=n.px,K.ty=n.py,Ne=Ge?1.7:2.2,!Ge&&Nm(Math.round(K.x+he/Oe),Math.round(K.y+Le/Oe),G)&&(Ne=0);else{K.wanderT=(K.wanderT||0)-P;const ot=K.tx===void 0?0:Math.hypot(K.tx-K.x,K.ty-K.y);if(K.tx===void 0||K.wanderT<=0||ot<.25){K.wanderT=2.5+Math.random()*4;for(let mt=0;mt<8;mt++){const We=K.x+Math.random()*7-3.5,it=K.y+Math.random()*7-3.5;if(yi(c,Math.round(We),Math.round(it))){K.tx=We,K.ty=it;break}}}Ne=Ge?.8:1}if(Ne>0&&K.tx!==void 0){const ot=K.tx-K.x,mt=K.ty-K.y,We=Math.hypot(ot,mt);if(We>.05){const it=ot/We*Ne*P,kt=mt/We*Ne*P;yi(c,Math.round(K.x+it),Math.round(K.y+kt))?(K.x+=it,K.y+=kt,K.fx=ot/We,K.fy=mt/We):K.wanderT=0}}const Re=Math.atan2(-(K.fy??0),K.fx??1);K.ang=K.ang??Re;let ht=Re-K.ang;for(;ht>Math.PI;)ht-=Math.PI*2;for(;ht<-Math.PI;)ht+=Math.PI*2;if(K.ang+=ht*Math.min(1,P*5),K.mesh.rotation.y=K.ang+(Ge?Math.sin(z*.012+K.x*3)*.3:0),K.mesh.position.set(K.x*at,Math.max(0,K.mesh.position.y-P*2),K.y*at),Oe<1&&K.cd<=0&&Z&&!X){K.cd=Ge?2.2:1.8;const ot=Am(n,K.kind);e.hitFlash();for(const mt of ot)mt.type==="hit"&&(e.toast(Ge?"🐍 Укус! Яд!":"🐻 Удар лапой! Останется шрам…","bad"),C.updateAppearance(n)),mt.type==="death"&&de(mt.cause)}}}const ie=new nm,se=new nt;let ee=null,Ce=null,fe=1;function Me(P,z){se.set(P/innerWidth*2-1,-(z/innerHeight)*2+1),ie.setFromCamera(se,a);const G=-ie.ray.origin.y/ie.ray.direction.y;if(G>0){const K=ie.ray.origin.clone().addScaledVector(ie.ray.direction,G);ee={x:K.x/at,y:K.z/at}}return ee}function Ye(P){return Ce={x:P.clientX,y:P.clientY},Me(P.clientX,P.clientY)}function ae(P,z){const G=P-n.px,K=z-n.py,he=Math.hypot(G,K)||1;d.x=G/he,d.y=K/he,n.dir=Math.abs(d.x)>Math.abs(d.y)?d.x>0?1:3:d.y>0?2:0}function Se(P){const z=Math.round(P.x),G=Math.round(P.y),K=B.find(Le=>Math.hypot(Le.x-P.x,Le.y-P.y)<.8);if(K&&Math.hypot(K.x-n.px,K.y-n.py)<1.9){ae(K.x,K.y),re();return}if(Math.hypot(z-n.px,G-n.py)>2.05)return;ae(z,G);const he=qe({x:z,y:G});he&&he.run?he.run():he&&he.attack&&re()}function rt(P,z){const G=Wt(c,P,z);return G?{tree:"🌲 Дерево",rock:"🪨 Валун",car:"🚗 Жигули",hut:"🏚️ Хижина",generator:"🔌 Генератор",bush:"🫐 Куст с ягодами",tallgrass:"🌾 Высокая трава",driftwood:"🥢 Коряга",plastic:"🧴 Мусор",mushroom:"🍄 Грибы",island_chest:"📦 Ящик"}[G.obj]||(G.t===Ke.WATER||G.t===Ke.DEEP?"🌊 Волга":""):""}function Be(P,z){const G=[],K=Math.hypot(P-n.px,z-n.py)>2.05,he=()=>e.toast("🚶 Подойди ближе"),Le=qe({x:P,y:z});Le&&Le.run&&G.push([Le.label,()=>{if(K)return he();ae(P,z),Le.run()}]);const Oe=Wt(c,P,z),Ge=P+","+z;Oe&&!m.has(Ge)&&(Oe.obj==="tree"&&G.push([bn(n,"axe")?"🪓 Срубить дерево":"🌲 Нужен топор",()=>{if(K)return he();if(!bn(n,"axe"))return e.toast("🌲 Без топора не выйдет","bad");ae(P,z),re()}]),Oe.obj==="rock"&&G.push(["⛏️ Долбить камень",()=>{if(K)return he();ae(P,z),re()}]));const Ne=B.find(Re=>Math.hypot(Re.x-P,Re.y-z)<.9);return Ne&&G.push(["⚔️ Ударить "+(Ne.kind==="snake"?"змею":"медведя"),()=>{if(Math.hypot(Ne.x-n.px,Ne.y-n.py)>2)return he();ae(Ne.x,Ne.y),re()}]),G}i.addEventListener("pointermove",P=>{P.pointerType==="mouse"&&Ye(P)}),i.addEventListener("pointerdown",P=>{if(P.pointerType!=="mouse"||P.button!==0)return;const z=Ye(P);!z||ne||X||!Z||e.openPanel||Se(z)}),i.addEventListener("contextmenu",P=>{if(P.preventDefault(),l.state.isTouch||!Z||X)return;const z=Ye(P);if(!z||ne)return;const G=Math.round(z.x),K=Math.round(z.y);e.openWorldMenu(rt(G,K),Be(G,K),P.clientX,P.clientY)}),i.addEventListener("wheel",P=>{P.preventDefault(),fe=Dt(fe+P.deltaY*.0012,.5,1.8)},{passive:!1}),document.getElementById("btn-inv").onclick=()=>e.toggleDock(),document.getElementById("btn-craft").onclick=()=>ut(ye()||null),document.getElementById("btn-menu").onclick=()=>{e.renderMenu(n),e.open("menu")},document.getElementById("menu-continue").onclick=()=>e.close(),document.getElementById("menu-save").onclick=()=>{Xi(n,localStorage),e.toast("💾 Сохранено"),e.close()},document.getElementById("menu-reset").onclick=()=>{confirm("Начать заново? Прогресс будет удалён.")&&(localStorage.removeItem("volga2026_save"),location.reload())};function ye(){for(const P of n.placed)if(Math.hypot(P.x-n.px,P.y-n.py)<=1.6&&["campfire","workbench","still","smoker","pyro"].includes(P.type))return P.type;return null}l.onKey(P=>{if(P==="KeyI"&&e.toggleDock(),P==="KeyC"&&(e.openPanel==="craft"?e.close():ut(ye()||null)),P==="Escape"){if(e.ctxOpen()){e.closeItemMenu();return}if(ne){ne=null,e.els.fishing.style.display="none",k.visible=!1;return}e.openPanel?e.close():(e.renderMenu(n),e.open("menu"))}});let He=performance.now(),Je=20,vt=30,I=5,oe=2,Q=0,te=1;const ce=new N;let Ie=!1;e.onTimeScale=P=>{te=P,e.toast(P===0?"⏸ Пауза":"⏩ Скорость ×"+P)},e.showGameUI(!0),ge(),e.renderInventory(n,!0);function st(P){if(Ie)return;requestAnimationFrame(st);const z=Math.min(.05,(P-He)/1e3);He=P;const G=l.poll();if(ne)ne.pos+=ne.dir*ke.fishing.speed*z,ne.pos>1&&(ne.pos=1,ne.dir=-1),ne.pos<0&&(ne.pos=0,ne.dir=1),e.els.fishcur.style.left=ne.pos*100+"%",k.position.y=-.15+Math.sin(P*.005)*.08,(G.attack||G.action)&&q();else if(Z&&!X&&!e.openPanel&&te>0){Ce&&!l.state.isTouch&&Me(Ce.x,Ce.y);const We=!!(ee&&Ce&&!l.state.isTouch);if(_e(z,G.dx,G.dy,P,We),We){const it=ee.x-n.px,kt=ee.y-n.py,Gt=Math.hypot(it,kt);Gt>.35&&(d.x=it/Gt,d.y=kt/Gt,n.dir=Math.abs(d.x)>Math.abs(d.y)?d.x>0?1:3:d.y>0?2:0)}if(G.action){const it=Ze();it&&it.run?it.run():it&&it.attack&&re()}G.attack&&re()}else me=!1;C.group.position.set(n.px*at,n.onBoat?.25:me?Math.abs(Math.sin(P*.012))*.07:0,n.py*at);let he=Math.atan2(d.x,d.y)-C.group.rotation.y;for(;he>Math.PI;)he-=Math.PI*2;for(;he<-Math.PI;)he+=Math.PI*2;C.group.rotation.y+=he*Math.min(1,z*14),C.animate(z,me,n.alcohol),j>0&&(j-=z,C.parts.armR.rotation.x=-2.2+j*8,j<=0&&(C.parts.armR.rotation.x=0));const Le=z*te;if(Z&&!X&&Le>0){Sm(n,Le);const We=ym(n,Le,{sleeping:!1});for(const it of We)it.type==="death"&&de(it.cause),it.type==="hangover"&&(e.toast("🤕 Похмелье… Съешь горячего или поспи","bad"),C.updateAppearance(n));Dm(n,Le)&&e.toast("🔌 Генератор заглох — кончился бензин","bad"),Um(n,Le,Fe()),M(Le),W(Le,P)}const Oe=C.group.position;o(n.time,Oe);const Ge=Fr(n.time);e.nightVignette(Ge?.85:0);const Ne=Fe();u.userData.light.intensity=Ne&&Ge?1.2:0;for(const[,We]of w)if(We.userData.flame&&(We.userData.flame.scale.y=.9+Math.sin(P*.01+We.position.x)*.25,We.userData.light.intensity=1.2+Math.sin(P*.013)*.3),We.userData.head){const it=Ne&&Ge;We.userData.light.intensity=it?1.6:0,We.userData.head.material.emissiveIntensity=it?.9:0}g.updateWater(P*.001);const Re=Math.max(0,(n.alcohol-ke.alcoholSwayMin)/(100-ke.alcoholSwayMin)),ht=Math.sin(P*.0011)*Re*2.2,ot=Math.cos(P*9e-4)*Re*1.6;ce.set(Oe.x+ht,0,Oe.z+ot);const mt=7.5*fe;if(a.position.lerp(new N(ce.x+mt,9*fe+3.5,ce.z+mt),.1),a.lookAt(ce.x,.6,ce.z),a.rotation.z+=Math.sin(P*.0012)*Re*.06,e.updateHUD(n),e.renderHotbar(n),e.renderInventory(n),L(),Q-=z,Q<=0&&(Q=.4,ge()),!e.openPanel&&!ne&&Z&&!X){const We=l.state.isTouch;let it=null,kt=!1;if(ee&&Ce&&!We){const Gt=Math.round(ee.x),ii=Math.round(ee.y);if(Math.hypot(Gt-n.px,ii-n.py)<=2.05){const y=B.find(U=>Math.hypot(U.x-ee.x,U.y-ee.y)<.8);if(y)it={label:"⚔️ Ударить "+(y.kind==="snake"?"змею":"медведя"),attack:!0},kt=!0;else{const U=qe({x:Gt,y:ii});U&&(it=U,kt=!0)}}}if(it||(it=Ze()),i.style.cursor=kt?"pointer":"",it){const Gt=kt?" <b>[ЛКМ]</b>":it.attack?We?" <b>[⚔️]</b>":" <b>[ПРОБЕЛ]</b>":We?" <b>[✋]</b>":" <b>[E]</b>";e.showPrompt(it.label+Gt)}else e.showPrompt(null)}else e.showPrompt(null),i.style.cursor="";if(Je-=z,Je<=0&&(Je=20,Xi(n,localStorage)),vt-=z,vt<=0&&(vt=50,e.toast("💡 "+Ca[Math.random()*Ca.length|0])),I-=z,I<=0&&(I=6,C.updateAppearance(n)),oe-=z,oe<=0&&(oe=1.5,e.openPanel!=="box")){for(const We of n.placed.slice())if(We.type==="bag"&&(!We.data.stock||!Object.keys(We.data.stock).length)){n.placed.splice(n.placed.indexOf(We),1);const it=w.get(We.x+","+We.y);it&&(s.remove(it),w.delete(We.x+","+We.y))}}r.render(s,a),window.__VOLGA_FRAMES=(window.__VOLGA_FRAMES||0)+1}return requestAnimationFrame(st),window.__VOLGA_DEBUG={state:n,world:c,teleport(P,z){n.px=P,n.py=z,C.group.position.set(P*at,0,z*at)},face(P){n.dir=P,d.x=Wi[P][0],d.y=Wi[P][1]},equippedTool:()=>_,toolMeshes:()=>b.children.length,interactionLabel:()=>Ze()?.label||null,beasts:()=>B.map(P=>({kind:P.kind,x:P.x,y:P.y,hp:P.hp})),project(P,z){const G=new N(P*at,.5,z*at).project(a);return{x:(G.x+1)/2*innerWidth,y:(-G.y+1)/2*innerHeight}}},n.tutorialSeen||(n.tutorialSeen=!0,setTimeout(()=>e.toast("🚗 Обыщи багажник машины — там всё нужное"),1200),setTimeout(()=>e.toast("🌾 Собирай траву и палки, скрафть топор"),5200)),{stop(){Ie=!0}}}const zm=Kc(),Ic=document.getElementById("screen"),Hm=document.getElementById("btn-new"),Uc=document.getElementById("btn-continue"),Nc=qc(localStorage);Nc&&Uc.classList.remove("hidden");function Fc(n){Ic.style.display="none",Xi(n,localStorage),Bm(n,zm)}Hm.onclick=()=>{const n=Wo();Ic.style.display="none",Mm(n.char,()=>Fc(n))};Uc.onclick=()=>Fc(Nc);window.__VOLGA_READY=!0;
