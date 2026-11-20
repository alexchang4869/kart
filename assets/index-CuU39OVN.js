(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const Dc=Array.from({length:32},(r,t)=>{const e=-Math.PI/2+t*Math.PI/16;return[135*Math.sin(e),3+11*((1+Math.cos(e))/2)**3,100*Math.sin(2*e)]}),lr=[[-86,2.4,90],[-86,2.4,0],[-86,2.4,-90],[-86,2.4,-150]];for(let r=1;r<=12;r++){const t=Math.PI+r*Math.PI/12;lr.push([Math.cos(t)*86,2.4,-150+Math.sin(t)*86])}lr.push([86,2.4,-90],[86,2.4,0],[86,2.4,90],[86,2.4,150]);for(let r=1;r<=12;r++){const t=r*Math.PI/12;lr.push([Math.cos(t)*86,2.4,150+Math.sin(t)*86])}const li=[{id:"coast",name:"晴空海岸",english:"COASTLINE",description:"海濱直道 · 珊瑚髮夾 · 港灣 S 彎",difficulty:"入門",color:5621710,points:[[-80,1.4,170],[-80,1.4,90],[-100,2,10],[-125,3,-45],[-118,4,-125],[-55,5,-165],[10,6,-160],[70,5,-135],[80,3,-92],[44,2,-68],[45,1.5,-28],[100,1.4,0],[145,1.4,-2],[172,2,36],[145,3,77],[82,4,85],[42,5,120],[70,4,155],[113,2,175],[123,1.4,223],[70,1.4,252],[0,1.4,255],[-60,1.4,235]]},{id:"terraces",name:"珊瑚階丘",english:"CORAL TERRACES",description:"連續山彎 · 高低階丘 · 果園捷徑",difficulty:"進階",color:16755296,points:[[-170,3,210],[-172,5,120],[-210,10,60],[-210,16,-15],[-170,21,-65],[-220,24,-120],[-210,21,-200],[-140,17,-242],[-65,14,-228],[-10,18,-180],[-45,24,-115],[-5,28,-65],[60,24,-95],[108,19,-162],[172,13,-175],[230,8,-118],[214,6,-48],[154,9,-5],[148,15,57],[210,20,94],[228,23,167],[180,18,227],[108,12,240],[66,8,181],[24,5,135],[-35,8,155],[-54,10,223],[-110,7,257]],shortcut:{from:4,to:8,via:[[-150,22,-111],[-118,18,-186]],name:"果園捷徑"}},{id:"skyfall",name:"雲際斷崖",english:"SKYFALL VIADUCT",description:"高架盤山 · 41 公尺落差 · 雲橋捷徑",difficulty:"挑戰",color:11181055,points:[[-160,5,240],[-200,11,170],[-180,22,88],[-230,30,22],[-223,40,-70],[-168,49,-115],[-160,55,-195],[-90,58,-238],[-10,58,-240],[70,17,-240],[160,16,-232],[218,21,-180],[188,27,-121],[113,33,-97],[85,29,-38],[150,23,2],[219,18,42],[226,14,113],[172,11,149],[106,14,111],[41,19,130],[48,23,199],[91,18,247],[57,12,296],[-24,8,302],[-85,6,284]],shortcut:{from:18,to:22,via:[[136,14,176],[117,16,213]],name:"雲橋捷徑"},drop:{from:8,to:9,floor:17}},{id:"crosswind",name:"八字雲橋",english:"CROSSWIND EIGHT",description:"8 字交錯 · 上下層雲橋 · 內灣捷徑",difficulty:"立體交錯",color:8437759,newCircuit:!0,overpass:!0,palette:{sky:12904186,grass:9947815,road:5663878,rail:9357301},points:Dc,shortcut:{from:10,to:15,via:[[97,8.5,65]],name:"短弧雲徑"}},{id:"orbit",name:"蜿蜒花丘",english:"BLOOM RIDGE",description:"連續折彎 · 緩坡花丘 · 短程花徑",difficulty:"彎道節奏",color:13869311,newCircuit:!0,palette:{sky:14735859,grass:11455382,road:7497601,rail:13676268},points:[[-180,3,130],[-180,4,60],[-210,6,5],[-175,8,-55],[-215,10,-108],[-172,12,-164],[-105,10,-182],[-65,7,-140],[-28,5,-182],[20,4,-170],[35,6,-107],[-8,8,-65],[30,10,-20],[80,12,-55],[110,10,-118],[170,7,-144],[206,4,-95],[170,3,-32],[207,5,30],[176,7,100],[105,9,132],[61,7,91],[16,5,140],[-40,3,116],[-70,4,173],[-132,3,182]],shortcut:{from:20,to:22,via:[[61,7,126]],name:"花丘短徑"}},{id:"sunport",name:"晴港疾線",english:"SUNPORT SPRINT",description:"長直線衝刺 · 港口連續彎 · 單一路線",difficulty:"極速衝刺",color:16760680,newCircuit:!0,palette:{sky:12445935,grass:10996608,road:5794675,rail:16760437},points:[[-105,3,200],[-105,3,80],[-105,3,-80],[-105,3,-200],[-65,4,-247],[10,5,-252],[78,6,-218],[110,7,-155],[74,7,-102],[123,6,-45],[80,5,25],[122,4,88],[82,3,156],[35,3,213],[-40,3,235]]},{id:"mistpine",name:"霧杉山徑",english:"MISTPINE PASS",description:"貼壁登山 · 連續折彎 · 杉林下坡",difficulty:"山道攻彎",color:9157537,newCircuit:!0,theme:"mountain",palette:{sky:12504787,grass:6720361,road:5397857,rail:12371906},points:[[-155,6,130],[-160,8,65],[-130,11,10],[-178,14,-45],[-165,17,-110],[-100,20,-138],[-48,23,-113],[0,26,-147],[63,29,-152],[112,32,-102],[83,35,-46],[110,37,7],[156,34,44],[161,29,107],[114,24,144],[78,20,121],[26,16,148],[-24,13,174],[-82,9,167]]},{id:"metro",name:"霓港街區",english:"NEON HARBOR",description:"雙路分流 · 行人穿越 · 雙向城市車流",difficulty:"城市穿梭",color:9489367,newCircuit:!0,theme:"city",palette:{sky:12968427,grass:10005155,road:5464941,rail:10993098},points:[[-155,2.4,150],[-155,2.4,65],[-155,2.4,-15],[-155,2.4,-100],[-145,2.4,-150],[-95,2.4,-180],[0,2.4,-180],[100,2.4,-180],[145,2.4,-135],[145,2.4,-60],[110,2.4,-15],[145,2.4,35],[145,2.4,125],[100,2.4,170],[15,2.4,170],[-80,2.4,170]],branches:[{from:1,to:3,via:[[-108,2.4,20],[-108,2.4,-55]],name:"東街補給道",bonusItems:!0}]},{id:"velodrome",name:"湛藍競速場",english:"AZURE SPEEDWAY",description:"雙直線 · 漸進內傾彎道 · 無捷徑",difficulty:"高速橢圓",color:9350906,newCircuit:!0,theme:"speedway",banking:.24,palette:{sky:12969458,grass:8040335,road:5464689,rail:12768743},points:lr}];function Dn(r){return li.find(t=>t.id===r)??li[0]}function Qe(r){const t=Array.isArray(r)?r.filter((e,i)=>li.some(n=>n.id===e)&&r.indexOf(e)===i):[];return[...t,...li.map(e=>e.id).filter(e=>!t.includes(e))].slice(0,3)}function Ic(){const r=li.map(t=>t.id);for(let t=r.length-1;t>0;t--){const e=Math.floor(wn()*(t+1));[r[t],r[e]]=[r[e],r[t]]}return r}function wn(){return typeof globalThis.crypto<"u"?crypto.getRandomValues(new Uint32Array(1))[0]/4294967296:Math.random()}const Uc=[15,12,10,7,5,3,2,1];function Nc(r,t){return{track:r,entries:[...t].sort((e,i)=>(e.finishTime??1/0)-(i.finishTime??1/0)||e.id-i.id).map((e,i)=>({id:e.id,name:e.name,human:e.human,finishTime:e.finishTime,simulated:e.simulated,disconnected:e.disconnected,position:i+1,points:e.finishTime===null?0:Uc[i]??0}))}}function Fc(r){const t=new Map;for(const[e,i]of r.entries())for(const n of i.entries){let s=t.get(n.id);s||(s={id:n.id,name:n.name,human:n.human,points:0,lastPoints:0,totalTime:0,finishes:Array(8).fill(0),completed:0},t.set(n.id,s)),s.points+=n.points,e===r.length-1&&(s.lastPoints=n.points),n.finishTime!==null&&(s.totalTime+=n.finishTime,s.completed++,s.finishes[n.position-1]++)}return[...t.values()].sort((e,i)=>{if(e.points!==i.points)return i.points-e.points;for(let n=0;n<8;n++)if(e.finishes[n]!==i.finishes[n])return i.finishes[n]-e.finishes[n];return i.completed-e.completed||e.totalTime-i.totalTime||e.id-i.id})}const zl={sunny:"晴空日光",sunset:"傍晚晚霞",rain:"雨天夜晚",random:"每站隨機氣候"},nn={mode:"single",difficulty:"normal",cupTracks:["coast","terraces","skyfall"],itemsEnabled:!0,aiEnabled:!0,cupLength:"three",trackOrder:"custom",weather:"sunny",activeWeather:"sunny"};function An(r){const t=r.mode==="single"&&r.weather==="random"?"sunny":r.weather??"sunny";return{...nn,...r,cupLength:"three",cupTracks:Qe(r.cupTracks),itemsEnabled:r.itemsEnabled!==!1,aiEnabled:r.aiEnabled!==!1,weather:t,activeWeather:r.activeWeather??(t==="random"?"sunny":t)}}const In={easy:{name:"簡單",description:"維持既有車速與氮氣策略，不使用漂移",pace:1,nitroChance:1},normal:{name:"普通",description:"車速略高、過彎更熟練，偶爾使用氮氣",pace:1.12,nitroChance:.3},hard:{name:"困難",description:"更快車速、精準過彎，較常使用氮氣",pace:1.24,nitroChance:.6}};const Ya="180",Oc=0,Mo=1,zc=2,kl=1,kc=2,gi=3,xi=0,Ue=1,Te=2,Pi=0,Rn=1,ta=2,bo=3,So=4,Bc=5,qi=100,Hc=101,Vc=102,Gc=103,Wc=104,Xc=200,qc=201,$c=202,Yc=203,ea=204,ia=205,jc=206,Kc=207,Zc=208,Jc=209,Qc=210,th=211,eh=212,ih=213,nh=214,na=0,sa=1,ra=2,Un=3,aa=4,oa=5,la=6,ca=7,ja=0,sh=1,rh=2,Li=0,ah=1,oh=2,lh=3,Ka=4,ch=5,hh=6,dh=7,Bl=300,Nn=301,Fn=302,ha=303,da=304,cr=306,ua=1e3,Zi=1001,fa=1002,Be=1003,uh=1004,_s=1005,ti=1006,pr=1007,Ji=1008,ci=1009,Hl=1010,Vl=1011,is=1012,Za=1013,tn=1014,ai=1015,fs=1016,Ja=1017,Qa=1018,ns=1020,Gl=35902,Wl=35899,Xl=1021,ql=1022,ei=1023,ss=1026,rs=1027,to=1028,eo=1029,$l=1030,io=1031,no=1033,qs=33776,$s=33777,Ys=33778,js=33779,pa=35840,ma=35841,ga=35842,va=35843,xa=36196,_a=37492,ya=37496,Ma=37808,ba=37809,Sa=37810,Ea=37811,Ta=37812,wa=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,La=37818,Da=37819,Ia=37820,Ua=37821,Na=36492,Fa=36494,Oa=36495,za=36283,ka=36284,Ba=36285,Ha=36286,fh=3200,ph=3201,Yl=0,mh=1,Ai="",Me="srgb",On="srgb-linear",Js="linear",Kt="srgb",on=7680,Eo=519,gh=512,vh=513,xh=514,jl=515,_h=516,yh=517,Mh=518,bh=519,To=35044,as=35048,wo="300 es",oi=2e3,Qs=2001;class Bn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,tr=180/Math.PI;function ps(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[r&255]+Se[r>>8&255]+Se[r>>16&255]+Se[r>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function kt(r,t,e){return Math.max(t,Math.min(e,r))}function Sh(r,t){return(r%t+t)%t}function gr(r,t,e){return(1-e)*r+e*t}function Xn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function De(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const f=s[a+0],u=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=u,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==f||c!==u||h!==g){let m=1-o;const p=l*f+c*u+h*g+d*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,p*y);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b}const _=o*y;if(l=l*m+f*_,c=c*m+u*_,h=h*m+g*_,d=d*m+v*_,m===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],f=s[a+1],u=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-o*u,t[e+2]=c*g+h*u+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),f=l(i/2),u=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-n)*u}else if(i>o&&i>d){const u=2*Math.sqrt(1+i-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(n+a)/u,this._z=(s+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-i-d);this._w=(s-c)/u,this._x=(n+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-i-o);this._w=(a-n)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*i+e*this._x,this._y=u*n+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=n*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ao.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ao.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),d=2*(s*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vr.copy(this).projectOnVector(t),this.sub(vr)}reflect(t){return this.sub(vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new D,Ao=new sn;class It{constructor(t,e,i,n,s,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],g=i[8],v=n[0],m=n[3],p=n[6],y=n[1],x=n[4],_=n[7],b=n[2],T=n[5],A=n[8];return s[0]=a*v+o*y+l*b,s[3]=a*m+o*x+l*T,s[6]=a*p+o*_+l*A,s[1]=c*v+h*y+d*b,s[4]=c*m+h*x+d*T,s[7]=c*p+h*_+d*A,s[2]=f*v+u*y+g*b,s[5]=f*m+u*x+g*T,s[8]=f*p+u*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*s,u=c*s-a*l,g=e*d+i*f+n*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=f*v,t[4]=(h*e-n*l)*v,t[5]=(n*s-o*e)*v,t[6]=u*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new It;function Kl(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function er(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Eh(){const r=er("canvas");return r.style.display="block",r}const Ro={};function os(r){r in Ro||(Ro[r]=!0,console.warn(r))}function Th(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Co=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wh(){const r={enabled:!0,workingColorSpace:On,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Kt&&(n.r=vi(n.r),n.g=vi(n.g),n.b=vi(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(n.r=Cn(n.r),n.g=Cn(n.g),n.b=Cn(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ai?Js:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[On]:{primaries:t,whitePoint:i,transfer:Js,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:i,transfer:Kt,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),r}const Xt=wh();function vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ln;class Ah{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ln===void 0&&(ln=er("canvas")),ln.width=t.width,ln.height=t.height;const n=ln.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=ln}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=vi(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rh=0;class so{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(_r(n[a].image)):s.push(_r(n[a]))}else s=_r(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function _r(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ah.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ch=0;const yr=new D;class we extends Bn{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,i=Zi,n=Zi,s=ti,a=Ji,o=ei,l=ci,c=we.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ps(),this.name="",this.source=new so(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yr).x}get height(){return this.source.getSize(yr).y}get depth(){return this.source.getSize(yr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Bl;we.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,n=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(u+1)/2,b=(p+1)/2,T=(h+f)/4,A=(d+v)/4,P=(g+m)/4;return x>_&&x>b?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=T/i,s=A/i):_>b?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=T/n,s=P/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=A/s,n=P/s),this.set(i,n,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ph extends Bn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new we(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new so(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Ph{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Zl extends we{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lh extends we{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(s,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qn),Ms.subVectors(this.max,qn),cn.subVectors(t.a,qn),hn.subVectors(t.b,qn),dn.subVectors(t.c,qn),_i.subVectors(hn,cn),yi.subVectors(dn,hn),Oi.subVectors(cn,dn);let e=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Oi.z,Oi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Oi.z,0,-Oi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Oi.y,Oi.x,0];return!Mr(e,cn,hn,dn,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,cn,hn,dn,Ms))?!1:(bs.crossVectors(_i,yi),e=[bs.x,bs.y,bs.z],Mr(e,cn,hn,dn,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new D,new D,new D,new D,new D,new D,new D,new D],$e=new D,ys=new rn,cn=new D,hn=new D,dn=new D,_i=new D,yi=new D,Oi=new D,qn=new D,Ms=new D,bs=new D,zi=new D;function Mr(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){zi.fromArray(r,s);const o=n.x*Math.abs(zi.x)+n.y*Math.abs(zi.y)+n.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=i.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dh=new rn,$n=new D,br=new D;class Hn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Dh.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$n.subVectors(t,this.center);const e=$n.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector($n,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($n.copy(t.center).add(br)),this.expandByPoint($n.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ui=new D,Sr=new D,Ss=new D,Mi=new D,Er=new D,Es=new D,Tr=new D;class Jl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Sr.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Sr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ss),o=Mi.dot(this.direction),l=-Mi.dot(Ss),c=Mi.lengthSq(),h=Math.abs(1-a*a);let d,f,u,g;if(h>0)if(d=a*l-o,f=a*o-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Sr).addScaledVector(Ss,f),u}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const i=ui.dot(this.direction),n=ui.dot(ui)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,n,s){Er.subVectors(e,t),Es.subVectors(i,t),Tr.crossVectors(Er,Es);let a=this.direction.dot(Tr),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,t);const l=o*this.direction.dot(Es.crossVectors(Mi,Es));if(l<0)return null;const c=o*this.direction.dot(Er.cross(Mi));if(c<0||l+c>a)return null;const h=-o*Mi.dot(Tr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(t,e,i,n,s,a,o,l,c,h,d,f,u,g,v,m){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,d,f,u,g,v,m)}set(t,e,i,n,s,a,o,l,c,h,d,f,u,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/un.setFromMatrixColumn(t,0).length(),s=1/un.setFromMatrixColumn(t,1).length(),a=1/un.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,g=c*h,v=c*d;e[0]=f+v*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,g=c*h,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,u=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*d,e[8]=g*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-v*d}else if(t.order==="XZY"){const f=a*l,u=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=a*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ih,t,Uh)}lookAt(t,e,i){const n=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),bi.crossVectors(i,Oe),bi.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),bi.crossVectors(i,Oe)),bi.normalize(),Ts.crossVectors(Oe,bi),n[0]=bi.x,n[4]=Ts.x,n[8]=Oe.x,n[1]=bi.y,n[5]=Ts.y,n[9]=Oe.y,n[2]=bi.z,n[6]=Ts.z,n[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],x=i[7],_=i[11],b=i[15],T=n[0],A=n[4],P=n[8],E=n[12],M=n[1],R=n[5],I=n[9],z=n[13],B=n[2],X=n[6],G=n[10],et=n[14],V=n[3],rt=n[7],ct=n[11],bt=n[15];return s[0]=a*T+o*M+l*B+c*V,s[4]=a*A+o*R+l*X+c*rt,s[8]=a*P+o*I+l*G+c*ct,s[12]=a*E+o*z+l*et+c*bt,s[1]=h*T+d*M+f*B+u*V,s[5]=h*A+d*R+f*X+u*rt,s[9]=h*P+d*I+f*G+u*ct,s[13]=h*E+d*z+f*et+u*bt,s[2]=g*T+v*M+m*B+p*V,s[6]=g*A+v*R+m*X+p*rt,s[10]=g*P+v*I+m*G+p*ct,s[14]=g*E+v*z+m*et+p*bt,s[3]=y*T+x*M+_*B+b*V,s[7]=y*A+x*R+_*X+b*rt,s[11]=y*P+x*I+_*G+b*ct,s[15]=y*E+x*z+_*et+b*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*d-n*c*d-s*o*f+i*c*f+n*o*u-i*l*u)+v*(+e*l*u-e*c*f+s*a*f-n*a*u+n*c*h-s*l*h)+m*(+e*c*d-e*o*u-s*a*d+i*a*u+s*o*h-i*c*h)+p*(-n*o*h-e*l*d+e*o*f+n*a*d-i*a*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=d*m*c-v*f*c+v*l*u-o*m*u-d*l*p+o*f*p,x=g*f*c-h*m*c-g*l*u+a*m*u+h*l*p-a*f*p,_=h*v*c-g*d*c+g*o*u-a*v*u-h*o*p+a*d*p,b=g*d*l-h*v*l-g*o*f+a*v*f+h*o*m-a*d*m,T=e*y+i*x+n*_+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(v*f*s-d*m*s-v*n*u+i*m*u+d*n*p-i*f*p)*A,t[2]=(o*m*s-v*l*s+v*n*c-i*m*c-o*n*p+i*l*p)*A,t[3]=(d*l*s-o*f*s-d*n*c+i*f*c+o*n*u-i*l*u)*A,t[4]=x*A,t[5]=(h*m*s-g*f*s+g*n*u-e*m*u-h*n*p+e*f*p)*A,t[6]=(g*l*s-a*m*s-g*n*c+e*m*c+a*n*p-e*l*p)*A,t[7]=(a*f*s-h*l*s+h*n*c-e*f*c-a*n*u+e*l*u)*A,t[8]=_*A,t[9]=(g*d*s-h*v*s-g*i*u+e*v*u+h*i*p-e*d*p)*A,t[10]=(a*v*s-g*o*s+g*i*c-e*v*c-a*i*p+e*o*p)*A,t[11]=(h*o*s-a*d*s-h*i*c+e*d*c+a*i*u-e*o*u)*A,t[12]=b*A,t[13]=(h*v*n-g*d*n+g*i*f-e*v*f-h*i*m+e*d*m)*A,t[14]=(g*o*n-a*v*n-g*i*l+e*v*l+a*i*m-e*o*m)*A,t[15]=(a*d*n-h*o*n+h*i*l-e*d*l-a*i*f+e*o*f)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,f=s*c,u=s*h,g=s*d,v=a*h,m=a*d,p=o*d,y=l*c,x=l*h,_=l*d,b=i.x,T=i.y,A=i.z;return n[0]=(1-(v+p))*b,n[1]=(u+_)*b,n[2]=(g-x)*b,n[3]=0,n[4]=(u-_)*T,n[5]=(1-(f+p))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(g+x)*A,n[9]=(m-y)*A,n[10]=(1-(f+v))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=un.set(n[0],n[1],n[2]).length();const a=un.set(n[4],n[5],n[6]).length(),o=un.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ye.copy(this);const c=1/s,h=1/a,d=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=d,Ye.elements[9]*=d,Ye.elements[10]*=d,e.setFromRotationMatrix(Ye),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=oi,l=!1){const c=this.elements,h=2*s/(e-t),d=2*s/(i-n),f=(e+t)/(e-t),u=(i+n)/(i-n);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===oi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Qs)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=oi,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),f=-(e+t)/(e-t),u=-(i+n)/(i-n);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===oi)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Qs)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const un=new D,Ye=new Bt,Ih=new D(0,0,0),Uh=new D(1,1,1),bi=new D,Ts=new D,Oe=new D,Lo=new Bt,Do=new sn;class Xe{constructor(t=0,e=0,i=0,n=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Do.setFromEuler(this),this.setFromQuaternion(Do,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nh=0;const Io=new D,fn=new sn,fi=new Bt,ws=new D,Yn=new D,Fh=new D,Oh=new sn,Uo=new D(1,0,0),No=new D(0,1,0),Fo=new D(0,0,1),Oo={type:"added"},zh={type:"removed"},pn={type:"childadded",child:null},wr={type:"childremoved",child:null};class Jt extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const t=new D,e=new Xe,i=new sn,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Bt},normalMatrix:{value:new It}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fn.setFromAxisAngle(t,e),this.quaternion.multiply(fn),this}rotateOnWorldAxis(t,e){return fn.setFromAxisAngle(t,e),this.quaternion.premultiply(fn),this}rotateX(t){return this.rotateOnAxis(Uo,t)}rotateY(t){return this.rotateOnAxis(No,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return Io.copy(t).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uo,t)}translateY(t){return this.translateOnAxis(No,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ws.copy(t):ws.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Yn,ws,this.up):fi.lookAt(ws,Yn,this.up),this.quaternion.setFromRotationMatrix(fi),n&&(fi.extractRotation(n.matrixWorld),fn.setFromRotationMatrix(fi),this.quaternion.premultiply(fn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oo),pn.child=t,this.dispatchEvent(pn),pn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zh),wr.child=t,this.dispatchEvent(wr),wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oo),pn.child=t,this.dispatchEvent(pn),pn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yn,t,Fh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yn,Oh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Jt.DEFAULT_UP=new D(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new D,pi=new D,Ar=new D,mi=new D,mn=new D,gn=new D,zo=new D,Rr=new D,Cr=new D,Pr=new D,Lr=new he,Dr=new he,Ir=new he;class Ze{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),je.subVectors(t,e),n.cross(je);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){je.subVectors(n,e),pi.subVectors(i,e),Ar.subVectors(t,e);const a=je.dot(je),o=je.dot(pi),l=je.dot(Ar),c=pi.dot(pi),h=pi.dot(Ar),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-u-g,g,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Lr.setScalar(0),Dr.setScalar(0),Ir.setScalar(0),Lr.fromBufferAttribute(t,e),Dr.fromBufferAttribute(t,i),Ir.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Lr,s.x),a.addScaledVector(Dr,s.y),a.addScaledVector(Ir,s.z),a}static isFrontFacing(t,e,i,n){return je.subVectors(i,e),pi.subVectors(t,e),je.cross(pi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),je.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;mn.subVectors(n,i),gn.subVectors(s,i),Rr.subVectors(t,i);const l=mn.dot(Rr),c=gn.dot(Rr);if(l<=0&&c<=0)return e.copy(i);Cr.subVectors(t,n);const h=mn.dot(Cr),d=gn.dot(Cr);if(h>=0&&d<=h)return e.copy(n);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(mn,a);Pr.subVectors(t,s);const u=mn.dot(Pr),g=gn.dot(Pr);if(g>=0&&u<=g)return e.copy(s);const v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(gn,o);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return zo.subVectors(s,n),o=(d-h)/(d-h+(u-g)),e.copy(n).addScaledVector(zo,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(i).addScaledVector(mn,a).addScaledVector(gn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},As={h:0,s:0,l:0};function Ur(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Xt.workingColorSpace){if(t=Sh(t,1),e=kt(e,0,1),i=kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ur(a,s,t+1/3),this.g=Ur(a,s,t),this.b=Ur(a,s,t-1/3)}return Xt.colorSpaceToWorking(this,n),this}setStyle(t,e=Me){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const i=tc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Xt.workingToColorSpace(Ee.copy(this),t),Math.round(kt(Ee.r*255,0,255))*65536+Math.round(kt(Ee.g*255,0,255))*256+Math.round(kt(Ee.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Ee.copy(this),e);const i=Ee.r,n=Ee.g,s=Ee.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Me){Xt.workingToColorSpace(Ee.copy(this),t);const e=Ee.r,i=Ee.g,n=Ee.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(As);const i=gr(Si.h,As.h,e),n=gr(Si.s,As.s,e),s=gr(Si.l,As.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Ct;Ct.NAMES=tc;let kh=0;class Vn extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Rn,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ia,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Un,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=on,this.stencilZFail=on,this.stencilZPass=on,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rn&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ea&&(i.blendSrc=this.blendSrc),this.blendDst!==ia&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Un&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==on&&(i.stencilFail=this.stencilFail),this.stencilZFail!==on&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==on&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ce extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new D,Rs=new Ht;let Bh=0;class He{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=To,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==To&&(t.usage=this.usage),t}}class ec extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ic extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Yt extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Hh=0;const We=new Bt,Nr=new Jt,vn=new D,ze=new rn,jn=new rn,ye=new D;class ge extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kl(t)?ic:ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new It().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vn).negate(),this.translate(vn.x,vn.y,vn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];jn.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(ze.min,jn.min),ze.expandByPoint(ye),ye.addVectors(ze.max,jn.max),ze.expandByPoint(ye)):(ze.expandByPoint(jn.min),ze.expandByPoint(jn.max))}ze.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)ye.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(vn.fromBufferAttribute(t,c),ye.add(vn)),n=Math.max(n,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new D,l[P]=new D;const c=new D,h=new D,d=new D,f=new Ht,u=new Ht,g=new Ht,v=new D,m=new D;function p(P,E,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),u.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),h.sub(c),d.sub(c),u.sub(f),g.sub(f);const R=1/(u.x*g.y-g.x*u.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(R),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(v),o[E].add(v),o[M].add(v),l[P].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,E=y.length;P<E;++P){const M=y[P],R=M.start,I=M.count;for(let z=R,B=R+I;z<B;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new D,_=new D,b=new D,T=new D;function A(P){b.fromBufferAttribute(n,P),T.copy(b);const E=o[P];x.copy(E),x.sub(b.multiplyScalar(b.dot(E))).normalize(),_.crossVectors(T,E);const R=_.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,R)}for(let P=0,E=y.length;P<E;++P){const M=y[P],R=M.start,I=M.count;for(let z=R,B=R+I;z<B;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);const n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let f=0,u=t.count;f<u;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new He(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,i);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new Bt,ki=new Jl,Cs=new Hn,Bo=new D,Ps=new D,Ls=new D,Ds=new D,Fr=new D,Is=new D,Ho=new D,Us=new D;class Ot extends Jt{constructor(t=new ge,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Fr.fromBufferAttribute(d,t),a?Is.addScaledVector(Fr,h):Is.addScaledVector(Fr.sub(e),h))}e.add(Is)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(s),ki.copy(t.ray).recast(t.near),!(Cs.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Cs,Bo)===null||ki.origin.distanceToSquared(Bo)>(t.far-t.near)**2))&&(ko.copy(s).invert(),ki.copy(t.ray).applyMatrix4(ko),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let _=y,b=x;_<b;_+=3){const T=o.getX(_),A=o.getX(_+1),P=o.getX(_+2);n=Ns(this,p,t,i,c,h,d,T,A,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);n=Ns(this,a,t,i,c,h,d,y,x,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let _=y,b=x;_<b;_+=3){const T=_,A=_+1,P=_+2;n=Ns(this,p,t,i,c,h,d,T,A,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,_=m+2;n=Ns(this,a,t,i,c,h,d,y,x,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Vh(r,t,e,i,n,s,a,o){let l;if(t.side===Ue?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===xi,o),l===null)return null;Us.copy(o),Us.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:r}}function Ns(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Ps),r.getVertexPosition(l,Ls),r.getVertexPosition(c,Ds);const h=Vh(r,t,e,i,Ps,Ls,Ds,Ho);if(h){const d=new D;Ze.getBarycoord(Ho,Ps,Ls,Ds,d),n&&(h.uv=Ze.getInterpolatedAttribute(n,o,l,c,d,new Ht)),s&&(h.uv1=Ze.getInterpolatedAttribute(s,o,l,c,d,new Ht)),a&&(h.normal=Ze.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};Ze.getNormal(Ps,Ls,Ds,f.normal),h.face=f,h.barycoord=d}return h}class ie extends ge{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function g(v,m,p,y,x,_,b,T,A,P,E){const M=_/A,R=b/P,I=_/2,z=b/2,B=T/2,X=A+1,G=P+1;let et=0,V=0;const rt=new D;for(let ct=0;ct<G;ct++){const bt=ct*R-z;for(let zt=0;zt<X;zt++){const Qt=zt*M-I;rt[v]=Qt*y,rt[m]=bt*x,rt[p]=B,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(zt/A),d.push(1-ct/P),et+=1}}for(let ct=0;ct<P;ct++)for(let bt=0;bt<A;bt++){const zt=f+bt+X*ct,Qt=f+bt+X*(ct+1),ne=f+(bt+1)+X*(ct+1),qt=f+(bt+1)+X*ct;l.push(zt,Qt,qt),l.push(Qt,ne,qt),V+=6}o.addGroup(u,V,E),u+=V,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zn(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Re(r){const t={};for(let e=0;e<r.length;e++){const i=zn(r[e]);for(const n in i)t[n]=i[n]}return t}function Gh(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function nc(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Wh={clone:zn,merge:Re};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zn(t.uniforms),this.uniformsGroups=Gh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class sc extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new D,Vo=new Ht,Go=new Ht;class Ie extends sc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Vo,Go),e.subVectors(Go,Vo)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xn=-90,_n=1;class $h extends Jt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ie(xn,_n,t,e);n.layers=this.layers,this.add(n);const s=new Ie(xn,_n,t,e);s.layers=this.layers,this.add(s);const a=new Ie(xn,_n,t,e);a.layers=this.layers,this.add(a);const o=new Ie(xn,_n,t,e);o.layers=this.layers,this.add(o);const l=new Ie(xn,_n,t,e);l.layers=this.layers,this.add(l);const c=new Ie(xn,_n,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rc extends we{constructor(t=[],e=Nn,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yh extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new rc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ie(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:Pi});s.uniforms.tEquirect.value=e;const a=new Ot(n,s),o=e.minFilter;return e.minFilter===Ji&&(e.minFilter=ti),new $h(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}class Pe extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jh={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jh)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ir{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=i}clone(){return new ir(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ac extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Kh extends we{constructor(t=null,e=1,i=1,n,s,a,o,l,c=Be,h=Be,d,f){super(null,a,o,l,c,h,n,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo extends He{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yn=new Bt,Xo=new Bt,Fs=[],qo=new rn,Zh=new Bt,Kn=new Ot,Zn=new Hn;class ii extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Zh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,yn),qo.copy(t.boundingBox).applyMatrix4(yn),this.boundingBox.union(qo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,yn),Zn.copy(t.boundingSphere).applyMatrix4(yn),this.boundingSphere.union(Zn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Kn.geometry=this.geometry,Kn.material=this.material,Kn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zn.copy(this.boundingSphere),Zn.applyMatrix4(i),t.ray.intersectsSphere(Zn)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,yn),Xo.multiplyMatrices(i,yn),Kn.matrixWorld=Xo,Kn.raycast(t,Fs);for(let a=0,o=Fs.length;a<o;a++){const l=Fs[a];l.instanceId=s,l.object=this,e.push(l)}Fs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kh(new Float32Array(n*this.count),n,this.count,to,ai));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zr=new D,Jh=new D,Qh=new It;class Gi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=zr.subVectors(i,e).cross(Jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(zr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qh.getNormalMatrix(t),n=this.coplanarPoint(zr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Hn,td=new Ht(.5,.5),Os=new D;class ro{constructor(t=new Gi,e=new Gi,i=new Gi,n=new Gi,s=new Gi,a=new Gi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=oi,i=!1){const n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],u=s[7],g=s[8],v=s[9],m=s[10],p=s[11],y=s[12],x=s[13],_=s[14],b=s[15];if(n[0].setComponents(c-a,u-h,p-g,b-y).normalize(),n[1].setComponents(c+a,u+h,p+g,b+y).normalize(),n[2].setComponents(c+o,u+d,p+v,b+x).normalize(),n[3].setComponents(c-o,u-d,p-v,b-x).normalize(),i)n[4].setComponents(l,f,m,_).normalize(),n[5].setComponents(c-l,u-f,p-m,b-_).normalize();else if(n[4].setComponents(c-l,u-f,p-m,b-_).normalize(),e===oi)n[5].setComponents(c+l,u+f,p+m,b+_).normalize();else if(e===Qs)n[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);const e=td.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Os.x=n.normal.x>0?t.max.x:t.min.x,Os.y=n.normal.y>0?t.max.y:t.min.y,Os.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oc extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nr=new D,sr=new D,$o=new Bt,Jn=new Jl,zs=new Hn,kr=new D,Yo=new D;class ed extends Jt{constructor(t=new ge,e=new oc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)nr.fromBufferAttribute(e,n-1),sr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=nr.distanceTo(sr);t.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(n),zs.radius+=s,t.ray.intersectsSphere(zs)===!1)return;$o.copy(n).invert(),Jn.copy(t.ray).applyMatrix4($o);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=c){const p=h.getX(v),y=h.getX(v+1),x=ks(this,t,Jn,l,p,y,v);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(u),p=ks(this,t,Jn,l,v,m,g-1);p&&e.push(p)}}else{const u=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=c){const p=ks(this,t,Jn,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=ks(this,t,Jn,l,g-1,u,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ks(r,t,e,i,n,s,a){const o=r.geometry.attributes.position;if(nr.fromBufferAttribute(o,n),sr.fromBufferAttribute(o,s),e.distanceSqToSegment(nr,sr,kr,Yo)>i)return;kr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(kr);if(!(c<t.near||c>t.far))return{distance:c,point:Yo.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const jo=new D,Ko=new D;class id extends ed{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)jo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+jo.distanceTo(Ko);t.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ls extends we{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lc extends we{constructor(t,e,i=tn,n,s,a,o=Be,l=Be,c,h=ss,d=1){if(h!==ss&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new so(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cc extends we{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ao extends ge{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new D,h=new Ht;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=i+d/e*n;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qe extends ge{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],f=[],u=[];let g=0;const v=[],m=i/2;let p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(u,2));function y(){const _=new D,b=new D;let T=0;const A=(e-t)/i;for(let P=0;P<=s;P++){const E=[],M=P/s,R=M*(e-t)+t;for(let I=0;I<=n;I++){const z=I/n,B=z*l+o,X=Math.sin(B),G=Math.cos(B);b.x=R*X,b.y=-M*i+m,b.z=R*G,d.push(b.x,b.y,b.z),_.set(X,A,G).normalize(),f.push(_.x,_.y,_.z),u.push(z,1-M),E.push(g++)}v.push(E)}for(let P=0;P<n;P++)for(let E=0;E<s;E++){const M=v[E][P],R=v[E+1][P],I=v[E+1][P+1],z=v[E][P+1];(t>0||E!==0)&&(h.push(M,R,z),T+=3),(e>0||E!==s-1)&&(h.push(R,I,z),T+=3)}c.addGroup(p,T,0),p+=T}function x(_){const b=g,T=new Ht,A=new D;let P=0;const E=_===!0?t:e,M=_===!0?1:-1;for(let I=1;I<=n;I++)d.push(0,m*M,0),f.push(0,M,0),u.push(.5,.5),g++;const R=g;for(let I=0;I<=n;I++){const B=I/n*l+o,X=Math.cos(B),G=Math.sin(B);A.x=E*G,A.y=m*M,A.z=E*X,d.push(A.x,A.y,A.z),f.push(0,M,0),T.x=X*.5+.5,T.y=G*.5*M+.5,u.push(T.x,T.y),g++}for(let I=0;I<n;I++){const z=b+I,B=R+I;_===!0?h.push(B,B+1,z):h.push(B+1,B,z),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kn extends qe{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new kn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oo extends ge{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new D,_=new D,b=new D;for(let T=0;T<e.length;T+=3)u(e[T+0],x),u(e[T+1],_),u(e[T+2],b),l(x,_,b,y)}function l(y,x,_,b){const T=b+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const E=y.clone().lerp(_,P/T),M=x.clone().lerp(_,P/T),R=T-P;for(let I=0;I<=R;I++)I===0&&P===T?A[P][I]=E:A[P][I]=E.clone().lerp(M,I/R)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){const M=Math.floor(E/2);E%2===0?(f(A[P][M+1]),f(A[P+1][M]),f(A[P][M])):(f(A[P][M+1]),f(A[P+1][M+1]),f(A[P+1][M]))}}function c(y){const x=new D;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function h(){const y=new D;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const _=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;a.push(_,1-b)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],b=a[y+4],T=Math.max(x,_,b),A=Math.min(x,_,b);T>.9&&A<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function u(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const y=new D,x=new D,_=new D,b=new D,T=new Ht,A=new Ht,P=new Ht;for(let E=0,M=0;E<s.length;E+=9,M+=6){y.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),b.copy(y).add(x).add(_).divideScalar(3);const R=m(b);v(T,M+0,y,R),v(A,M+2,x,R),v(P,M+4,_,R)}}function v(y,x,_,b){b<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.vertices,t.indices,t.radius,t.details)}}class nd{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],f=i[n+1]-h,u=(a-h)/f;return(n+u)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new Ht:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new D,n=[],s=[],a=[],o=new D,l=new Bt;for(let u=0;u<=t;u++){const g=u/t;n[u]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(kt(n[u-1].dot(n[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(n[u],s[u])}if(e===!0){let u=Math.acos(kt(s[0].dot(s[t]),-1,1));u/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(u=-u);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],u*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function lo(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,n(a,o,f,u)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+i*o}}}const Bs=new D,Br=new lo,Hr=new lo,Vr=new lo;class cs extends nd{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new D){const i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(Bs.subVectors(n[0],n[1]).add(n[0]),c=Bs);const d=n[o%s],f=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(Bs.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Bs),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Br.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,v,m),Hr.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,v,m),Vr.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Br.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Hr.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Vr.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Br.calc(l),Hr.calc(l),Vr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new D().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class en extends oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new en(t.radius,t.detail)}}class Ui extends ge{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,f=e/l,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*f-a;for(let x=0;x<c;x++){const _=x*d-s;g.push(_,-y,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,_=y+c*(p+1),b=y+1+c*(p+1),T=y+1+c*p;u.push(x,_,T),u.push(_,b,T)}this.setIndex(u),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.widthSegments,t.heightSegments)}}class ms extends ge{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,f=new D,u=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let _=0;p===0&&a===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const T=b/e;d.x=-t*Math.cos(n+T*s)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(n+T*s)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(T+_,1-x),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const x=h[p][y+1],_=h[p][y],b=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&u.push(x,_,T),(p!==i-1||l<Math.PI)&&u.push(_,b,T)}this.setIndex(u),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hr extends ge{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new D,d=new D,f=new D;for(let u=0;u<=i;u++)for(let g=0;g<=n;g++){const v=g/n*s,m=u/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(u/i)}for(let u=1;u<=i;u++)for(let g=1;g<=n;g++){const v=(n+1)*u+g-1,m=(n+1)*(u-1)+g-1,p=(n+1)*(u-1)+g,y=(n+1)*u+g;a.push(v,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ae extends Vn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sd extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rd extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class co extends Jt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hc extends co{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Gr=new Bt,Zo=new D,Jo=new D;class dc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Zo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zo),Jo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jo),e.updateMatrixWorld(),Gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ad extends dc{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=tr*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class od extends co{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ad}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uc extends sc{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ld extends dc{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fc extends co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new ld}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cd extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Qo(r,t,e,i){const n=hd(i);switch(e){case Xl:return r*t;case to:return r*t/n.components*n.byteLength;case eo:return r*t/n.components*n.byteLength;case $l:return r*t*2/n.components*n.byteLength;case io:return r*t*2/n.components*n.byteLength;case ql:return r*t*3/n.components*n.byteLength;case ei:return r*t*4/n.components*n.byteLength;case no:return r*t*4/n.components*n.byteLength;case qs:case $s:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ys:case js:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ma:case va:return Math.max(r,16)*Math.max(t,8)/4;case pa:case ga:return Math.max(r,8)*Math.max(t,8)/2;case xa:case _a:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Na:case Fa:case Oa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case za:case ka:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ba:case Ha:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hd(r){switch(r){case ci:case Hl:return{byteLength:1,components:1};case is:case Vl:case fs:return{byteLength:2,components:1};case Ja:case Qa:return{byteLength:2,components:4};case tn:case Za:case ai:return{byteLength:4,components:1};case Gl:case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);function pc(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function dd(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],v=d[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const v=d[u];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
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
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,Md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
#endif`,wd=`#ifdef USE_BUMPMAP
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nd=`#define PI 3.141592653589793
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
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Od=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
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
}`,tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nu=`uniform bool receiveShadow;
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
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cu=`PhysicalMaterial material;
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
#endif`,hu=`struct PhysicalMaterial {
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
}`,du=`
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
#endif`,uu=`#if defined( RE_IndirectDiffuse )
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_u=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mu=`#if defined( USE_POINTS_UV )
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
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Su=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Au=`#ifdef USE_MORPHTARGETS
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
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uu=`#ifdef USE_NORMALMAP
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
#endif`,Nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ou=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Hu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ku=`float getShadowMask() {
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
}`,Zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ju=`#ifdef USE_SKINNING
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
#endif`,Qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,_f=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yf=`#define DISTANCE
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
}`,Mf=`#define DISTANCE
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Af=`uniform vec3 diffuse;
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
}`,Rf=`#define LAMBERT
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
}`,Cf=`#define LAMBERT
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
}`,Pf=`#define MATCAP
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
}`,Lf=`#define MATCAP
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
}`,Df=`#define NORMAL
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
}`,If=`#define NORMAL
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
}`,Uf=`#define PHONG
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
}`,Nf=`#define PHONG
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
}`,Ff=`#define STANDARD
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
}`,Of=`#define STANDARD
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
}`,zf=`#define TOON
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
}`,kf=`#define TOON
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
}`,Bf=`uniform float size;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Gf=`uniform vec3 color;
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
}`,Wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:ud,alphahash_pars_fragment:fd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:_d,batching_pars_vertex:yd,batching_vertex:Md,begin_vertex:bd,beginnormal_vertex:Sd,bsdfs:Ed,iridescence_fragment:Td,bumpmap_pars_fragment:wd,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Pd,color_fragment:Ld,color_pars_fragment:Dd,color_pars_vertex:Id,color_vertex:Ud,common:Nd,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Od,displacementmap_pars_vertex:zd,displacementmap_vertex:kd,emissivemap_fragment:Bd,emissivemap_pars_fragment:Hd,colorspace_fragment:Vd,colorspace_pars_fragment:Gd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:qd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:su,envmap_vertex:Yd,fog_vertex:jd,fog_pars_vertex:Kd,fog_fragment:Zd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:tu,lights_lambert_fragment:eu,lights_lambert_pars_fragment:iu,lights_pars_begin:nu,lights_toon_fragment:ru,lights_toon_pars_fragment:au,lights_phong_fragment:ou,lights_phong_pars_fragment:lu,lights_physical_fragment:cu,lights_physical_pars_fragment:hu,lights_fragment_begin:du,lights_fragment_maps:uu,lights_fragment_end:fu,logdepthbuf_fragment:pu,logdepthbuf_pars_fragment:mu,logdepthbuf_pars_vertex:gu,logdepthbuf_vertex:vu,map_fragment:xu,map_pars_fragment:_u,map_particle_fragment:yu,map_particle_pars_fragment:Mu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Su,morphinstance_vertex:Eu,morphcolor_vertex:Tu,morphnormal_vertex:wu,morphtarget_pars_vertex:Au,morphtarget_vertex:Ru,normal_fragment_begin:Cu,normal_fragment_maps:Pu,normal_pars_fragment:Lu,normal_pars_vertex:Du,normal_vertex:Iu,normalmap_pars_fragment:Uu,clearcoat_normal_fragment_begin:Nu,clearcoat_normal_fragment_maps:Fu,clearcoat_pars_fragment:Ou,iridescence_pars_fragment:zu,opaque_fragment:ku,packing:Bu,premultiplied_alpha_fragment:Hu,project_vertex:Vu,dithering_fragment:Gu,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:qu,shadowmap_pars_fragment:$u,shadowmap_pars_vertex:Yu,shadowmap_vertex:ju,shadowmask_pars_fragment:Ku,skinbase_vertex:Zu,skinning_pars_vertex:Ju,skinning_vertex:Qu,skinnormal_vertex:tf,specularmap_fragment:ef,specularmap_pars_fragment:nf,tonemapping_fragment:sf,tonemapping_pars_fragment:rf,transmission_fragment:af,transmission_pars_fragment:of,uv_pars_fragment:lf,uv_pars_vertex:cf,uv_vertex:hf,worldpos_vertex:df,background_vert:uf,background_frag:ff,backgroundCube_vert:pf,backgroundCube_frag:mf,cube_vert:gf,cube_frag:vf,depth_vert:xf,depth_frag:_f,distanceRGBA_vert:yf,distanceRGBA_frag:Mf,equirect_vert:bf,equirect_frag:Sf,linedashed_vert:Ef,linedashed_frag:Tf,meshbasic_vert:wf,meshbasic_frag:Af,meshlambert_vert:Rf,meshlambert_frag:Cf,meshmatcap_vert:Pf,meshmatcap_frag:Lf,meshnormal_vert:Df,meshnormal_frag:If,meshphong_vert:Uf,meshphong_frag:Nf,meshphysical_vert:Ff,meshphysical_frag:Of,meshtoon_vert:zf,meshtoon_frag:kf,points_vert:Bf,points_frag:Hf,shadow_vert:Vf,shadow_frag:Gf,sprite_vert:Wf,sprite_frag:Xf},st={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},ri={basic:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Re([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Re([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Re([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Re([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Re([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Re([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Re([st.common,st.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Re([st.lights,st.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};ri.physical={uniforms:Re([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Hs={r:0,b:0,g:0},Hi=new Xe,qf=new Bt;function $f(r,t,e,i,n,s,a){const o=new Ct(0);let l=s===!0?0:1,c,h,d=null,f=0,u=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const b=g(x);b===null?p(o,l):b&&b.isColor&&(p(b,1),_=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,_){const b=g(_);b&&(b.isCubeTexture||b.mapping===cr)?(h===void 0&&(h=new Ot(new ie(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:zn(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Hi.copy(_.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(Hi)),h.material.toneMapped=Xt.getTransfer(b.colorSpace)!==Kt,(d!==b||f!==b.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,u=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ot(new Ui(2,2),new Ii({name:"BackgroundMaterial",uniforms:zn(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(b.colorSpace)!==Kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(Hs,nc(r)),i.buffers.color.setClear(Hs.r,Hs.g,Hs.b,_,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:v,addToRenderList:m,dispose:y}}function Yf(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null);let s=n,a=!1;function o(M,R,I,z,B){let X=!1;const G=d(z,I,R);s!==G&&(s=G,c(s.object)),X=u(M,z,I,B),X&&g(M,z,I,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(M,R,I,z),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function d(M,R,I){const z=I.wireframe===!0;let B=i[M.id];B===void 0&&(B={},i[M.id]=B);let X=B[R.id];X===void 0&&(X={},B[R.id]=X);let G=X[z];return G===void 0&&(G=f(l()),X[z]=G),G}function f(M){const R=[],I=[],z=[];for(let B=0;B<e;B++)R[B]=0,I[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:z,object:M,attributes:{},index:null}}function u(M,R,I,z){const B=s.attributes,X=R.attributes;let G=0;const et=I.getAttributes();for(const V in et)if(et[V].location>=0){const ct=B[V];let bt=X[V];if(bt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),ct===void 0||ct.attribute!==bt||bt&&ct.data!==bt.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(M,R,I,z){const B={},X=R.attributes;let G=0;const et=I.getAttributes();for(const V in et)if(et[V].location>=0){let ct=X[V];ct===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const bt={};bt.attribute=ct,ct&&ct.data&&(bt.data=ct.data),B[V]=bt,G++}s.attributes=B,s.attributesNum=G,s.index=z}function v(){const M=s.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const I=s.newAttributes,z=s.enabledAttributes,B=s.attributeDivisors;I[M]=1,z[M]===0&&(r.enableVertexAttribArray(M),z[M]=1),B[M]!==R&&(r.vertexAttribDivisor(M,R),B[M]=R)}function y(){const M=s.newAttributes,R=s.enabledAttributes;for(let I=0,z=R.length;I<z;I++)R[I]!==M[I]&&(r.disableVertexAttribArray(I),R[I]=0)}function x(M,R,I,z,B,X,G){G===!0?r.vertexAttribIPointer(M,R,I,B,X):r.vertexAttribPointer(M,R,I,z,B,X)}function _(M,R,I,z){v();const B=z.attributes,X=I.getAttributes(),G=R.defaultAttributeValues;for(const et in X){const V=X[et];if(V.location>=0){let rt=B[et];if(rt===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const ct=rt.normalized,bt=rt.itemSize,zt=t.get(rt);if(zt===void 0)continue;const Qt=zt.buffer,ne=zt.type,qt=zt.bytesPerElement,$=ne===r.INT||ne===r.UNSIGNED_INT||rt.gpuType===Za;if(rt.isInterleavedBufferAttribute){const K=rt.data,ut=K.stride,Pt=rt.offset;if(K.isInstancedInterleavedBuffer){for(let Mt=0;Mt<V.locationSize;Mt++)p(V.location+Mt,K.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)m(V.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let Mt=0;Mt<V.locationSize;Mt++)x(V.location+Mt,bt/V.locationSize,ne,ct,ut*qt,(Pt+bt/V.locationSize*Mt)*qt,$)}else{if(rt.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)p(V.location+K,rt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let K=0;K<V.locationSize;K++)x(V.location+K,bt/V.locationSize,ne,ct,bt*qt,bt/V.locationSize*K*qt,$)}}else if(G!==void 0){const ct=G[et];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(V.location,ct);break;case 3:r.vertexAttrib3fv(V.location,ct);break;case 4:r.vertexAttrib4fv(V.location,ct);break;default:r.vertexAttrib1fv(V.location,ct)}}}}y()}function b(){P();for(const M in i){const R=i[M];for(const I in R){const z=R[I];for(const B in z)h(z[B].object),delete z[B];delete R[I]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const I in R){const z=R[I];for(const B in z)h(z[B].object),delete z[B];delete R[I]}delete i[M.id]}function A(M){for(const R in i){const I=i[R];if(I[M.id]===void 0)continue;const z=I[M.id];for(const B in z)h(z[B].object),delete z[B];delete I[M.id]}}function P(){E(),a=!0,s!==n&&(s=n,c(s.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function jf(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,d){d!==0&&(r.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,i,1)}function l(c,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];e.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kf(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==ei&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ci&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ai&&!P)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:b,maxSamples:T}}function Zf(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Gi,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||i!==0||n;return n=f,i=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:i,x=y*4;let _=p.clippingState||null;l.value=_,_=h(g,f,x,u);for(let b=0;b!==x;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=u+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=u;x!==v;++x,_+=4)a.copy(d[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Jf(r){let t=new WeakMap;function e(a,o){return o===ha?a.mapping=Nn:o===da&&(a.mapping=Fn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ha||o===da)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yh(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const En=4,tl=[.125,.215,.35,.446,.526,.582],$i=20,Wr=new uc,el=new Ct;let Xr=null,qr=0,$r=0,Yr=!1;const Wi=(1+Math.sqrt(5))/2,Mn=1/Wi,il=[new D(-Wi,Mn,0),new D(Wi,Mn,0),new D(-Mn,0,Wi),new D(Mn,0,Wi),new D(0,Wi,-Mn),new D(0,Wi,Mn),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Qf=new D;class nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=Qf}=s;Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,qr,$r),this._renderer.xr.enabled=Yr,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Nn||t.mapping===Fn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:fs,format:ei,colorSpace:On,depthBuffer:!1},n=sl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tp(s)),this._blurMaterial=ep(s,t,e)}return n}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,i,n,s){const l=new Ie(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(el),d.toneMapping=Li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null));const v=new Ce({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new Ot(new ie,v);let p=!1;const y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,p=!0):(v.color.copy(el),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const b=this._cubeSize;Vs(n,_*b,x>2?b:0,b,b),d.setRenderTarget(n),p&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=f,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Nn||t.mapping===Fn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Vs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Wr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=il[(n-s-1)%il.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ot(this._lodPlanes[n],c),f=c.uniforms,u=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*$i-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):$i;m>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let y=0;for(let A=0;A<$i;++A){const P=A/v,E=Math.exp(-P*P/2);p.push(E),A===0?y+=E:A<m&&(y+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const _=this._sizeLods[n],b=3*_*(n>x-En?n-x+En:0),T=4*(this._cubeSize-_);Vs(e,b,T,3*_,2*_),l.setRenderTarget(e),l.render(d,Wr)}}function tp(r){const t=[],e=[],i=[];let n=r;const s=r-En+1+tl.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>r-En?l=tl[a-r+En-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*u),x=new Float32Array(m*g*u),_=new Float32Array(p*g*u);for(let T=0;T<u;T++){const A=T%3*2/3-1,P=T>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(E,v*g*T),x.set(f,m*g*T);const M=[T,T,T,T,T,T];_.set(M,p*g*T)}const b=new ge;b.setAttribute("position",new He(y,v)),b.setAttribute("uv",new He(x,m)),b.setAttribute("faceIndex",new He(_,p)),t.push(b),n>En&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function sl(r,t,e){const i=new Di(r,t,e);return i.texture.mapping=cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function ep(r,t,e){const i=new Float32Array($i),n=new D(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function rl(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function al(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function ip(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ha||l===da,h=l===Nn||l===Fn;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new nl(r)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return c&&u&&u.height>0||h&&u&&n(u)?(e===null&&(e=new nl(r)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function np(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&os("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function sp(r,t,e,i){const n={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];const u=s.get(f);u&&(t.remove(u),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const u in f)t.update(f[u],r.ARRAY_BUFFER)}function c(d){const f=[],u=d.index,g=d.attributes.position;let v=0;if(u!==null){const y=u.array;v=u.version;for(let x=0,_=y.length;x<_;x+=3){const b=y[x+0],T=y[x+1],A=y[x+2];f.push(b,T,T,A,A,b)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const b=x+0,T=x+1,A=x+2;f.push(b,T,T,A,A,b)}}else return;const m=new(Kl(f)?ic:ec)(f,1);m.version=v;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const f=s.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function rp(r,t,e){let i;function n(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){r.drawElements(i,u,s,f*a),e.update(u,i,1)}function c(f,u,g){g!==0&&(r.drawElementsInstanced(i,u,s,f*a,g),e.update(u,i,g))}function h(f,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,i,1)}function d(f,u,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,u,0,s,f,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*v[y];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ap(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function op(r,t,e){const i=new WeakMap,n=new he;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;u===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const T=new Float32Array(_*b*4*d),A=new Zl(T,_,b,d);A.type=ai,A.needsUpdate=!0;const P=x*4;for(let M=0;M<d;M++){const R=m[M],I=p[M],z=y[M],B=_*b*4*M;for(let X=0;X<R.count;X++){const G=X*P;u===!0&&(n.fromBufferAttribute(R,X),T[B+G+0]=n.x,T[B+G+1]=n.y,T[B+G+2]=n.z,T[B+G+3]=0),g===!0&&(n.fromBufferAttribute(I,X),T[B+G+4]=n.x,T[B+G+5]=n.y,T[B+G+6]=n.z,T[B+G+7]=0),v===!0&&(n.fromBufferAttribute(z,X),T[B+G+8]=n.x,T[B+G+9]=n.y,T[B+G+10]=n.z,T[B+G+11]=z.itemSize===4?n.w:1)}}f={count:d,texture:A,size:new Ht(_,b)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function lp(r,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(n.get(d)!==c&&(t.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return d}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const mc=new we,ol=new lc(1,1),gc=new Zl,vc=new Lh,xc=new rc,ll=[],cl=[],hl=new Float32Array(16),dl=new Float32Array(9),ul=new Float32Array(4);function Gn(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=ll[n];if(s===void 0&&(s=new Float32Array(n),ll[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ve(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function xe(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function dr(r,t){let e=cl[t];e===void 0&&(e=new Int32Array(t),cl[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function cp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function hp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2fv(this.addr,t),xe(e,t)}}function dp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;r.uniform3fv(this.addr,t),xe(e,t)}}function up(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4fv(this.addr,t),xe(e,t)}}function fp(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;ul.set(i),r.uniformMatrix2fv(this.addr,!1,ul),xe(e,i)}}function pp(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;dl.set(i),r.uniformMatrix3fv(this.addr,!1,dl),xe(e,i)}}function mp(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;hl.set(i),r.uniformMatrix4fv(this.addr,!1,hl),xe(e,i)}}function gp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function vp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2iv(this.addr,t),xe(e,t)}}function xp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3iv(this.addr,t),xe(e,t)}}function _p(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4iv(this.addr,t),xe(e,t)}}function yp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Mp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2uiv(this.addr,t),xe(e,t)}}function bp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3uiv(this.addr,t),xe(e,t)}}function Sp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4uiv(this.addr,t),xe(e,t)}}function Ep(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(ol.compareFunction=jl,s=ol):s=mc,e.setTexture2D(t||s,n)}function Tp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||vc,n)}function wp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||xc,n)}function Ap(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||gc,n)}function Rp(r){switch(r){case 5126:return cp;case 35664:return hp;case 35665:return dp;case 35666:return up;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return _p;case 5125:return yp;case 36294:return Mp;case 36295:return bp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Ap}}function Cp(r,t){r.uniform1fv(this.addr,t)}function Pp(r,t){const e=Gn(t,this.size,2);r.uniform2fv(this.addr,e)}function Lp(r,t){const e=Gn(t,this.size,3);r.uniform3fv(this.addr,e)}function Dp(r,t){const e=Gn(t,this.size,4);r.uniform4fv(this.addr,e)}function Ip(r,t){const e=Gn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Up(r,t){const e=Gn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Np(r,t){const e=Gn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Fp(r,t){r.uniform1iv(this.addr,t)}function Op(r,t){r.uniform2iv(this.addr,t)}function zp(r,t){r.uniform3iv(this.addr,t)}function kp(r,t){r.uniform4iv(this.addr,t)}function Bp(r,t){r.uniform1uiv(this.addr,t)}function Hp(r,t){r.uniform2uiv(this.addr,t)}function Vp(r,t){r.uniform3uiv(this.addr,t)}function Gp(r,t){r.uniform4uiv(this.addr,t)}function Wp(r,t,e){const i=this.cache,n=t.length,s=dr(e,n);ve(i,s)||(r.uniform1iv(this.addr,s),xe(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||mc,s[a])}function Xp(r,t,e){const i=this.cache,n=t.length,s=dr(e,n);ve(i,s)||(r.uniform1iv(this.addr,s),xe(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||vc,s[a])}function qp(r,t,e){const i=this.cache,n=t.length,s=dr(e,n);ve(i,s)||(r.uniform1iv(this.addr,s),xe(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||xc,s[a])}function $p(r,t,e){const i=this.cache,n=t.length,s=dr(e,n);ve(i,s)||(r.uniform1iv(this.addr,s),xe(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||gc,s[a])}function Yp(r){switch(r){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Ip;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return zp;case 35669:case 35673:return kp;case 5125:return Bp;case 36294:return Hp;case 36295:return Vp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return $p}}class jp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Rp(e.type)}}class Kp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yp(e.type)}}class Zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function fl(r,t){r.seq.push(t),r.map[t.id]=t}function Jp(r,t,e){const i=r.name,n=i.length;for(jr.lastIndex=0;;){const s=jr.exec(i),a=jr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){fl(e,c===void 0?new jp(o,r,t):new Kp(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Zp(o),fl(e,d)),e=d}}}class Ks{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Jp(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function pl(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const Qp=37297;let tm=0;function em(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const ml=new It;function im(r){Xt._getMatrix(ml,Xt.workingColorSpace,r);const t=`mat3( ${ml.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(r)){case Js:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function gl(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+em(r.getShaderSource(t),o)}else return s}function nm(r,t){const e=im(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sm(r,t){let e;switch(t){case ah:e="Linear";break;case oh:e="Reinhard";break;case lh:e="Cineon";break;case Ka:e="ACESFilmic";break;case hh:e="AgX";break;case dh:e="Neutral";break;case ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new D;function rm(){Xt.getLuminanceCoefficients(Gs);const r=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function am(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function om(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lm(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ts(r){return r!==""}function vl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(r){return r.replace(cm,dm)}const hm=new Map;function dm(r,t){let e=Ft[t];if(e===void 0){const i=hm.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(r){return r.replace(um,fm)}function fm(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function yl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function mm(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Nn:case Fn:t="ENVMAP_TYPE_CUBE";break;case cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gm(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Fn&&(t="ENVMAP_MODE_REFRACTION"),t}function vm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ja:t="ENVMAP_BLENDING_MULTIPLY";break;case sh:t="ENVMAP_BLENDING_MIX";break;case rh:t="ENVMAP_BLENDING_ADD";break}return t}function xm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _m(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pm(e),c=mm(e),h=gm(e),d=vm(e),f=xm(e),u=am(e),g=om(s),v=n.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),p.length>0&&(p+=`
`)):(m=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),p=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Li?sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,nm("linearToOutputTexel",e.outputColorSpace),rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),a=Va(a),a=vl(a,e),a=xl(a,e),o=Va(o),o=vl(o,e),o=xl(o,e),a=_l(a),o=_l(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,_=y+p+o,b=pl(n,n.VERTEX_SHADER,x),T=pl(n,n.FRAGMENT_SHADER,_);n.attachShader(v,b),n.attachShader(v,T),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(R){if(r.debug.checkShaderErrors){const I=n.getProgramInfoLog(v)||"",z=n.getShaderInfoLog(b)||"",B=n.getShaderInfoLog(T)||"",X=I.trim(),G=z.trim(),et=B.trim();let V=!0,rt=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,b,T);else{const ct=gl(n,b,"vertex"),bt=gl(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+ct+`
`+bt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||et==="")&&(rt=!1);rt&&(R.diagnostics={runnable:V,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:et,prefix:p}})}n.deleteShader(b),n.deleteShader(T),P=new Ks(n,v),E=lm(n,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,Qp)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=T,this}let ym=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new bm(t),e.set(t,i)),i}}class bm{constructor(t){this.id=ym++,this.code=t,this.usedTimes=0}}function Sm(r,t,e,i,n,s,a){const o=new Ql,l=new Mm,c=new Set,h=[],d=n.logarithmicDepthBuffer,f=n.vertexTextures;let u=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,R,I,z){const B=I.fog,X=z.geometry,G=E.isMeshStandardMaterial?I.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),V=et&&et.mapping===cr?et.image.height:null,rt=g[E.type];E.precision!==null&&(u=n.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=ct!==void 0?ct.length:0;let zt=0;X.morphAttributes.position!==void 0&&(zt=1),X.morphAttributes.normal!==void 0&&(zt=2),X.morphAttributes.color!==void 0&&(zt=3);let Qt,ne,qt,$;if(rt){const $t=ri[rt];Qt=$t.vertexShader,ne=$t.fragmentShader}else Qt=E.vertexShader,ne=E.fragmentShader,l.update(E),qt=l.getVertexShaderID(E),$=l.getFragmentShaderID(E);const K=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,Mt=z.isBatchedMesh===!0,Gt=!!E.map,be=!!E.matcap,L=!!et,se=!!E.aoMap,Dt=!!E.lightMap,At=!!E.bumpMap,mt=!!E.normalMap,re=!!E.displacementMap,gt=!!E.emissiveMap,Nt=!!E.metalnessMap,_e=!!E.roughnessMap,de=E.anisotropy>0,C=E.clearcoat>0,S=E.dispersion>0,O=E.iridescence>0,q=E.sheen>0,j=E.transmission>0,W=de&&!!E.anisotropyMap,yt=C&&!!E.clearcoatMap,it=C&&!!E.clearcoatNormalMap,vt=C&&!!E.clearcoatRoughnessMap,xt=O&&!!E.iridescenceMap,Q=O&&!!E.iridescenceThicknessMap,lt=q&&!!E.sheenColorMap,wt=q&&!!E.sheenRoughnessMap,_t=!!E.specularMap,at=!!E.specularColorMap,Ut=!!E.specularIntensityMap,U=j&&!!E.transmissionMap,tt=j&&!!E.thicknessMap,nt=!!E.gradientMap,dt=!!E.alphaMap,Z=E.alphaTest>0,Y=!!E.alphaHash,pt=!!E.extensions;let Lt=Li;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Lt=r.toneMapping);const te={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:Qt,fragmentShader:ne,defines:E.defines,customVertexShaderID:qt,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:On,alphaToCoverage:!!E.alphaToCoverage,map:Gt,matcap:be,envMap:L,envMapMode:L&&et.mapping,envMapCubeUVHeight:V,aoMap:se,lightMap:Dt,bumpMap:At,normalMap:mt,displacementMap:f&&re,emissiveMap:gt,normalMapObjectSpace:mt&&E.normalMapType===mh,normalMapTangentSpace:mt&&E.normalMapType===Yl,metalnessMap:Nt,roughnessMap:_e,anisotropy:de,anisotropyMap:W,clearcoat:C,clearcoatMap:yt,clearcoatNormalMap:it,clearcoatRoughnessMap:vt,dispersion:S,iridescence:O,iridescenceMap:xt,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:lt,sheenRoughnessMap:wt,specularMap:_t,specularColorMap:at,specularIntensityMap:Ut,transmission:j,transmissionMap:U,thicknessMap:tt,gradientMap:nt,opaque:E.transparent===!1&&E.blending===Rn&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:Z,alphaHash:Y,combine:E.combine,mapUv:Gt&&v(E.map.channel),aoMapUv:se&&v(E.aoMap.channel),lightMapUv:Dt&&v(E.lightMap.channel),bumpMapUv:At&&v(E.bumpMap.channel),normalMapUv:mt&&v(E.normalMap.channel),displacementMapUv:re&&v(E.displacementMap.channel),emissiveMapUv:gt&&v(E.emissiveMap.channel),metalnessMapUv:Nt&&v(E.metalnessMap.channel),roughnessMapUv:_e&&v(E.roughnessMap.channel),anisotropyMapUv:W&&v(E.anisotropyMap.channel),clearcoatMapUv:yt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(E.sheenRoughnessMap.channel),specularMapUv:_t&&v(E.specularMap.channel),specularColorMapUv:at&&v(E.specularColorMap.channel),specularIntensityMapUv:Ut&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:tt&&v(E.thicknessMap.channel),alphaMapUv:dt&&v(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(mt||de),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Gt||dt),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Gt&&E.map.isVideoTexture===!0&&Xt.getTransfer(E.map.colorSpace)===Kt,decodeVideoTextureEmissive:gt&&E.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(E.emissiveMap.colorSpace)===Kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Te,flipSided:E.side===Ue,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&E.extensions.multiDraw===!0||Mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)M.push(R),M.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(y(M,E),x(M,E),M.push(r.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const M=g[E.type];let R;if(M){const I=ri[M];R=Wh.clone(I.uniforms)}else R=E.uniforms;return R}function b(E,M){let R;for(let I=0,z=h.length;I<z;I++){const B=h[I];if(B.cacheKey===M){R=B,++R.usedTimes;break}}return R===void 0&&(R=new _m(r,M,E,s),h.push(R)),R}function T(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function Em(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Tm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ml(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bl(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(d,f,u,g,v,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,f,u,g,v,m){const p=a(d,f,u,g,v,m);u.transmission>0?i.push(p):u.transparent===!0?n.push(p):e.push(p)}function l(d,f,u,g,v,m){const p=a(d,f,u,g,v,m);u.transmission>0?i.unshift(p):u.transparent===!0?n.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||Tm),i.length>1&&i.sort(f||Ml),n.length>1&&n.sort(f||Ml)}function h(){for(let d=t,f=r.length;d<f;d++){const u=r[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function wm(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new bl,r.set(i,[a])):n>=s.length?(a=new bl,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Am(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ct};break;case"SpotLight":e={position:new D,direction:new D,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function Rm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Cm=0;function Pm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Lm(r){const t=new Am,e=Rm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,s=new Bt,a=new Bt;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,y=0,x=0,_=0,b=0,T=0,A=0;c.sort(Pm);for(let E=0,M=c.length;E<M;E++){const R=c[E],I=R.color,z=R.intensity,B=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=I.r*z,d+=I.g*z,f+=I.b*z;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],z);A++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const et=R.shadow,V=e.get(R);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.directionalShadow[u]=V,i.directionalShadowMap[u]=X,i.directionalShadowMatrix[u]=R.shadow.matrix,y++}i.directional[u]=G,u++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(I).multiplyScalar(z),G.distance=B,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[v]=G;const et=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,et.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[v]=et.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=X,_++}v++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(I).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const et=R.shadow,V=e.get(R);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,V.shadowCameraNear=et.camera.near,V.shadowCameraFar=et.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(z),G.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==u||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==b||P.numLightProbes!==A)&&(i.directional.length=u,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=u,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=b,P.numLightProbes=A,i.version=Cm++)}function l(c,h){let d=0,f=0,u=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),d++}else if(x.isSpotLight){const _=i.spot[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),u++}else if(x.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Sl(r){const t=new Lm(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Dm(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new Sl(r),t.set(n,[o])):s>=a.length?(o=new Sl(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`;function Nm(r,t,e){let i=new ro;const n=new Ht,s=new Ht,a=new he,o=new sd({depthPacking:ph}),l=new rd,c={},h=e.maxTextureSize,d={[xi]:Ue,[Ue]:xi,[Te]:Te},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Im,fragmentShader:Um}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=r.getRenderTarget(),M=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Pi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==gi&&this.type===gi,B=p===gi&&this.type!==gi;for(let X=0,G=T.length;X<G;X++){const et=T[X],V=et.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const rt=V.getFrameExtents();if(n.multiply(rt),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/rt.x),n.x=s.x*rt.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/rt.y),n.y=s.y*rt.y,V.mapSize.y=s.y)),V.map===null||z===!0||B===!0){const bt=this.type!==gi?{minFilter:Be,magFilter:Be}:{};V.map!==null&&V.map.dispose(),V.map=new Di(n.x,n.y,bt),V.map.texture.name=et.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const ct=V.getViewportCount();for(let bt=0;bt<ct;bt++){const zt=V.getViewport(bt);a.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),I.viewport(a),V.updateMatrices(et,bt),i=V.getFrustum(),_(A,P,V.camera,et,this.type)}V.isPointLightShadow!==!0&&this.type===gi&&y(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,M,R)};function y(T,A){const P=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Di(n.x,n.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,P,f,v,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,P,u,v,null)}function x(T,A,P,E){let M=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=M.uuid,z=A.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let X=B[z];X===void 0&&(X=M.clone(),B[z]=X,A.addEventListener("dispose",b)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,E===gi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=r.properties.get(M);I.light=P}return M}function _(T,A,P,E,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===gi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const z=t.update(T),B=T.material;if(Array.isArray(B)){const X=z.groups;for(let G=0,et=X.length;G<et;G++){const V=X[G],rt=B[V.materialIndex];if(rt&&rt.visible){const ct=x(T,rt,E,M);T.onBeforeShadow(r,T,A,P,z,ct,V),r.renderBufferDirect(P,null,z,ct,T,V),T.onAfterShadow(r,T,A,P,z,ct,V)}}}else if(B.visible){const X=x(T,B,E,M);T.onBeforeShadow(r,T,A,P,z,X,null),r.renderBufferDirect(P,null,z,X,T,null),T.onAfterShadow(r,T,A,P,z,X,null)}}const I=T.children;for(let z=0,B=I.length;z<B;z++)_(I[z],A,P,E,M)}function b(T){T.target.removeEventListener("dispose",b);for(const P in c){const E=c[P],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Fm={[na]:sa,[ra]:la,[aa]:ca,[Un]:oa,[sa]:na,[la]:ra,[ca]:aa,[oa]:Un};function Om(r,t){function e(){let U=!1;const tt=new he;let nt=null;const dt=new he(0,0,0,0);return{setMask:function(Z){nt!==Z&&!U&&(r.colorMask(Z,Z,Z,Z),nt=Z)},setLocked:function(Z){U=Z},setClear:function(Z,Y,pt,Lt,te){te===!0&&(Z*=Lt,Y*=Lt,pt*=Lt),tt.set(Z,Y,pt,Lt),dt.equals(tt)===!1&&(r.clearColor(Z,Y,pt,Lt),dt.copy(tt))},reset:function(){U=!1,nt=null,dt.set(-1,0,0,0)}}}function i(){let U=!1,tt=!1,nt=null,dt=null,Z=null;return{setReversed:function(Y){if(tt!==Y){const pt=t.get("EXT_clip_control");Y?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),tt=Y;const Lt=Z;Z=null,this.setClear(Lt)}},getReversed:function(){return tt},setTest:function(Y){Y?K(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(Y){nt!==Y&&!U&&(r.depthMask(Y),nt=Y)},setFunc:function(Y){if(tt&&(Y=Fm[Y]),dt!==Y){switch(Y){case na:r.depthFunc(r.NEVER);break;case sa:r.depthFunc(r.ALWAYS);break;case ra:r.depthFunc(r.LESS);break;case Un:r.depthFunc(r.LEQUAL);break;case aa:r.depthFunc(r.EQUAL);break;case oa:r.depthFunc(r.GEQUAL);break;case la:r.depthFunc(r.GREATER);break;case ca:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=Y}},setLocked:function(Y){U=Y},setClear:function(Y){Z!==Y&&(tt&&(Y=1-Y),r.clearDepth(Y),Z=Y)},reset:function(){U=!1,nt=null,dt=null,Z=null,tt=!1}}}function n(){let U=!1,tt=null,nt=null,dt=null,Z=null,Y=null,pt=null,Lt=null,te=null;return{setTest:function($t){U||($t?K(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function($t){tt!==$t&&!U&&(r.stencilMask($t),tt=$t)},setFunc:function($t,hi,ni){(nt!==$t||dt!==hi||Z!==ni)&&(r.stencilFunc($t,hi,ni),nt=$t,dt=hi,Z=ni)},setOp:function($t,hi,ni){(Y!==$t||pt!==hi||Lt!==ni)&&(r.stencilOp($t,hi,ni),Y=$t,pt=hi,Lt=ni)},setLocked:function($t){U=$t},setClear:function($t){te!==$t&&(r.clearStencil($t),te=$t)},reset:function(){U=!1,tt=null,nt=null,dt=null,Z=null,Y=null,pt=null,Lt=null,te=null}}}const s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,u=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,b=null,T=null,A=new Ct(0,0,0),P=0,E=!1,M=null,R=null,I=null,z=null,B=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,et=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=et>=2);let rt=null,ct={};const bt=r.getParameter(r.SCISSOR_BOX),zt=r.getParameter(r.VIEWPORT),Qt=new he().fromArray(bt),ne=new he().fromArray(zt);function qt(U,tt,nt,dt){const Z=new Uint8Array(4),Y=r.createTexture();r.bindTexture(U,Y),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pt=0;pt<nt;pt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,Z):r.texImage2D(tt+pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Z);return Y}const $={};$[r.TEXTURE_2D]=qt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(r.DEPTH_TEST),a.setFunc(Un),At(!1),mt(Mo),K(r.CULL_FACE),se(Pi);function K(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function ut(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Pt(U,tt){return d[U]!==tt?(r.bindFramebuffer(U,tt),d[U]=tt,U===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=tt),U===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function Mt(U,tt){let nt=u,dt=!1;if(U){nt=f.get(tt),nt===void 0&&(nt=[],f.set(tt,nt));const Z=U.textures;if(nt.length!==Z.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,pt=Z.length;Y<pt;Y++)nt[Y]=r.COLOR_ATTACHMENT0+Y;nt.length=Z.length,dt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,dt=!0);dt&&r.drawBuffers(nt)}function Gt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const be={[qi]:r.FUNC_ADD,[Hc]:r.FUNC_SUBTRACT,[Vc]:r.FUNC_REVERSE_SUBTRACT};be[Gc]=r.MIN,be[Wc]=r.MAX;const L={[Xc]:r.ZERO,[qc]:r.ONE,[$c]:r.SRC_COLOR,[ea]:r.SRC_ALPHA,[Qc]:r.SRC_ALPHA_SATURATE,[Zc]:r.DST_COLOR,[jc]:r.DST_ALPHA,[Yc]:r.ONE_MINUS_SRC_COLOR,[ia]:r.ONE_MINUS_SRC_ALPHA,[Jc]:r.ONE_MINUS_DST_COLOR,[Kc]:r.ONE_MINUS_DST_ALPHA,[th]:r.CONSTANT_COLOR,[eh]:r.ONE_MINUS_CONSTANT_COLOR,[ih]:r.CONSTANT_ALPHA,[nh]:r.ONE_MINUS_CONSTANT_ALPHA};function se(U,tt,nt,dt,Z,Y,pt,Lt,te,$t){if(U===Pi){v===!0&&(ut(r.BLEND),v=!1);return}if(v===!1&&(K(r.BLEND),v=!0),U!==Bc){if(U!==m||$t!==E){if((p!==qi||_!==qi)&&(r.blendEquation(r.FUNC_ADD),p=qi,_=qi),$t)switch(U){case Rn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ta:r.blendFunc(r.ONE,r.ONE);break;case bo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case So:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Rn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ta:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case bo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case So:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,b=null,T=null,A.set(0,0,0),P=0,m=U,E=$t}return}Z=Z||tt,Y=Y||nt,pt=pt||dt,(tt!==p||Z!==_)&&(r.blendEquationSeparate(be[tt],be[Z]),p=tt,_=Z),(nt!==y||dt!==x||Y!==b||pt!==T)&&(r.blendFuncSeparate(L[nt],L[dt],L[Y],L[pt]),y=nt,x=dt,b=Y,T=pt),(Lt.equals(A)===!1||te!==P)&&(r.blendColor(Lt.r,Lt.g,Lt.b,te),A.copy(Lt),P=te),m=U,E=!1}function Dt(U,tt){U.side===Te?ut(r.CULL_FACE):K(r.CULL_FACE);let nt=U.side===Ue;tt&&(nt=!nt),At(nt),U.blending===Rn&&U.transparent===!1?se(Pi):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const dt=U.stencilWrite;o.setTest(dt),dt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(U){M!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),M=U)}function mt(U){U!==Oc?(K(r.CULL_FACE),U!==R&&(U===Mo?r.cullFace(r.BACK):U===zc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),R=U}function re(U){U!==I&&(G&&r.lineWidth(U),I=U)}function gt(U,tt,nt){U?(K(r.POLYGON_OFFSET_FILL),(z!==tt||B!==nt)&&(r.polygonOffset(tt,nt),z=tt,B=nt)):ut(r.POLYGON_OFFSET_FILL)}function Nt(U){U?K(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function _e(U){U===void 0&&(U=r.TEXTURE0+X-1),rt!==U&&(r.activeTexture(U),rt=U)}function de(U,tt,nt){nt===void 0&&(rt===null?nt=r.TEXTURE0+X-1:nt=rt);let dt=ct[nt];dt===void 0&&(dt={type:void 0,texture:void 0},ct[nt]=dt),(dt.type!==U||dt.texture!==tt)&&(rt!==nt&&(r.activeTexture(nt),rt=nt),r.bindTexture(U,tt||$[U]),dt.type=U,dt.texture=tt)}function C(){const U=ct[rt];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(U){Qt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Qt.copy(U))}function wt(U){ne.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ne.copy(U))}function _t(U,tt){let nt=c.get(tt);nt===void 0&&(nt=new WeakMap,c.set(tt,nt));let dt=nt.get(U);dt===void 0&&(dt=r.getUniformBlockIndex(tt,U.name),nt.set(U,dt))}function at(U,tt){const dt=c.get(tt).get(U);l.get(tt)!==dt&&(r.uniformBlockBinding(tt,dt,U.__bindingPointIndex),l.set(tt,dt))}function Ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},rt=null,ct={},d={},f=new WeakMap,u=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,b=null,T=null,A=new Ct(0,0,0),P=0,E=!1,M=null,R=null,I=null,z=null,B=null,Qt.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:ut,bindFramebuffer:Pt,drawBuffers:Mt,useProgram:Gt,setBlending:se,setMaterial:Dt,setFlipSided:At,setCullFace:mt,setLineWidth:re,setPolygonOffset:gt,setScissorTest:Nt,activeTexture:_e,bindTexture:de,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:xt,texImage3D:Q,updateUBOMapping:_t,uniformBlockBinding:at,texStorage2D:it,texStorage3D:vt,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:yt,scissor:lt,viewport:wt,reset:Ut}}function zm(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return u?new OffscreenCanvas(C,S):er("canvas")}function v(C,S,O){let q=1;const j=de(C);if((j.width>O||j.height>O)&&(q=O/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const W=Math.floor(q*j.width),yt=Math.floor(q*j.height);d===void 0&&(d=g(W,yt));const it=S?g(W,yt):d;return it.width=W,it.height=yt,it.getContext("2d").drawImage(C,0,0,W,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+yt+")."),it}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(C,S,O,q,j=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W=S;if(S===r.RED&&(O===r.FLOAT&&(W=r.R32F),O===r.HALF_FLOAT&&(W=r.R16F),O===r.UNSIGNED_BYTE&&(W=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.R8UI),O===r.UNSIGNED_SHORT&&(W=r.R16UI),O===r.UNSIGNED_INT&&(W=r.R32UI),O===r.BYTE&&(W=r.R8I),O===r.SHORT&&(W=r.R16I),O===r.INT&&(W=r.R32I)),S===r.RG&&(O===r.FLOAT&&(W=r.RG32F),O===r.HALF_FLOAT&&(W=r.RG16F),O===r.UNSIGNED_BYTE&&(W=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RG8UI),O===r.UNSIGNED_SHORT&&(W=r.RG16UI),O===r.UNSIGNED_INT&&(W=r.RG32UI),O===r.BYTE&&(W=r.RG8I),O===r.SHORT&&(W=r.RG16I),O===r.INT&&(W=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RGB8UI),O===r.UNSIGNED_SHORT&&(W=r.RGB16UI),O===r.UNSIGNED_INT&&(W=r.RGB32UI),O===r.BYTE&&(W=r.RGB8I),O===r.SHORT&&(W=r.RGB16I),O===r.INT&&(W=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),O===r.UNSIGNED_INT&&(W=r.RGBA32UI),O===r.BYTE&&(W=r.RGBA8I),O===r.SHORT&&(W=r.RGBA16I),O===r.INT&&(W=r.RGBA32I)),S===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),S===r.RGBA){const yt=j?Js:Xt.getTransfer(q);O===r.FLOAT&&(W=r.RGBA32F),O===r.HALF_FLOAT&&(W=r.RGBA16F),O===r.UNSIGNED_BYTE&&(W=yt===Kt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(C,S){let O;return C?S===null||S===tn||S===ns?O=r.DEPTH24_STENCIL8:S===ai?O=r.DEPTH32F_STENCIL8:S===is&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===tn||S===ns?O=r.DEPTH_COMPONENT24:S===ai?O=r.DEPTH_COMPONENT32F:S===is&&(O=r.DEPTH_COMPONENT16),O}function b(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==ti?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&h.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),M(S)}function P(C){const S=i.get(C);if(S.__webglInit===void 0)return;const O=C.source,q=f.get(O);if(q){const j=q[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(C),Object.keys(q).length===0&&f.delete(O)}i.remove(C)}function E(C){const S=i.get(C);r.deleteTexture(S.__webglTexture);const O=C.source,q=f.get(O);delete q[S.__cacheKey],a.memory.textures--}function M(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let j=0;j<S.__webglFramebuffer[q].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[q][j]);else r.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)r.deleteFramebuffer(S.__webglFramebuffer[q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=C.textures;for(let q=0,j=O.length;q<j;q++){const W=i.get(O[q]);W.__webglTexture&&(r.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(O[q])}i.remove(C)}let R=0;function I(){R=0}function z(){const C=R;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),R+=1,C}function B(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const O=i.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,C,S);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function G(C,S){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){$(O,C,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function et(C,S){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){$(O,C,S);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function V(C,S){const O=i.get(C);if(C.version>0&&O.__version!==C.version){K(O,C,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const rt={[ua]:r.REPEAT,[Zi]:r.CLAMP_TO_EDGE,[fa]:r.MIRRORED_REPEAT},ct={[Be]:r.NEAREST,[uh]:r.NEAREST_MIPMAP_NEAREST,[_s]:r.NEAREST_MIPMAP_LINEAR,[ti]:r.LINEAR,[pr]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},bt={[gh]:r.NEVER,[bh]:r.ALWAYS,[vh]:r.LESS,[jl]:r.LEQUAL,[xh]:r.EQUAL,[Mh]:r.GEQUAL,[_h]:r.GREATER,[yh]:r.NOTEQUAL};function zt(C,S){if(S.type===ai&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ti||S.magFilter===pr||S.magFilter===_s||S.magFilter===Ji||S.minFilter===ti||S.minFilter===pr||S.minFilter===_s||S.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,rt[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,rt[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,rt[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ct[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ct[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Be||S.minFilter!==_s&&S.minFilter!==Ji||S.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const q=S.source;let j=f.get(q);j===void 0&&(j={},f.set(q,j));const W=B(S);if(W!==C.__cacheKey){j[W]===void 0&&(j[W]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[W].usedTimes++;const yt=j[C.__cacheKey];yt!==void 0&&(j[C.__cacheKey].usedTimes--,yt.usedTimes===0&&E(S)),C.__cacheKey=W,C.__webglTexture=j[W].texture}return O}function ne(C,S,O){return Math.floor(Math.floor(C/O)/S)}function qt(C,S,O,q){const W=C.updateRanges;if(W.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,O,q,S.data);else{W.sort((Q,lt)=>Q.start-lt.start);let yt=0;for(let Q=1;Q<W.length;Q++){const lt=W[yt],wt=W[Q],_t=lt.start+lt.count,at=ne(wt.start,S.width,4),Ut=ne(lt.start,S.width,4);wt.start<=_t+1&&at===Ut&&ne(wt.start+wt.count-1,S.width,4)===at?lt.count=Math.max(lt.count,wt.start+wt.count-lt.start):(++yt,W[yt]=wt)}W.length=yt+1;const it=r.getParameter(r.UNPACK_ROW_LENGTH),vt=r.getParameter(r.UNPACK_SKIP_PIXELS),xt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Q=0,lt=W.length;Q<lt;Q++){const wt=W[Q],_t=Math.floor(wt.start/4),at=Math.ceil(wt.count/4),Ut=_t%S.width,U=Math.floor(_t/S.width),tt=at,nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,Ut,U,tt,nt,O,q,S.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,it),r.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,xt)}}function $(C,S,O){let q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=r.TEXTURE_3D);const j=Qt(C,S),W=S.source;e.bindTexture(q,C.__webglTexture,r.TEXTURE0+O);const yt=i.get(W);if(W.version!==yt.__version||j===!0){e.activeTexture(r.TEXTURE0+O);const it=Xt.getPrimaries(Xt.workingColorSpace),vt=S.colorSpace===Ai?null:Xt.getPrimaries(S.colorSpace),xt=S.colorSpace===Ai||it===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Q=v(S.image,!1,n.maxTextureSize);Q=_e(S,Q);const lt=s.convert(S.format,S.colorSpace),wt=s.convert(S.type);let _t=x(S.internalFormat,lt,wt,S.colorSpace,S.isVideoTexture);zt(q,S);let at;const Ut=S.mipmaps,U=S.isVideoTexture!==!0,tt=yt.__version===void 0||j===!0,nt=W.dataReady,dt=b(S,Q);if(S.isDepthTexture)_t=_(S.format===rs,S.type),tt&&(U?e.texStorage2D(r.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,_t,Q.width,Q.height,0,lt,wt,null));else if(S.isDataTexture)if(Ut.length>0){U&&tt&&e.texStorage2D(r.TEXTURE_2D,dt,_t,Ut[0].width,Ut[0].height);for(let Z=0,Y=Ut.length;Z<Y;Z++)at=Ut[Z],U?nt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,at.width,at.height,lt,wt,at.data):e.texImage2D(r.TEXTURE_2D,Z,_t,at.width,at.height,0,lt,wt,at.data);S.generateMipmaps=!1}else U?(tt&&e.texStorage2D(r.TEXTURE_2D,dt,_t,Q.width,Q.height),nt&&qt(S,Q,lt,wt)):e.texImage2D(r.TEXTURE_2D,0,_t,Q.width,Q.height,0,lt,wt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,_t,Ut[0].width,Ut[0].height,Q.depth);for(let Z=0,Y=Ut.length;Z<Y;Z++)if(at=Ut[Z],S.format!==ei)if(lt!==null)if(U){if(nt)if(S.layerUpdates.size>0){const pt=Qo(at.width,at.height,S.format,S.type);for(const Lt of S.layerUpdates){const te=at.data.subarray(Lt*pt/at.data.BYTES_PER_ELEMENT,(Lt+1)*pt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Lt,at.width,at.height,1,lt,te)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,Q.depth,lt,at.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,_t,at.width,at.height,Q.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?nt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,Q.depth,lt,wt,at.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,_t,at.width,at.height,Q.depth,0,lt,wt,at.data)}else{U&&tt&&e.texStorage2D(r.TEXTURE_2D,dt,_t,Ut[0].width,Ut[0].height);for(let Z=0,Y=Ut.length;Z<Y;Z++)at=Ut[Z],S.format!==ei?lt!==null?U?nt&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,at.width,at.height,lt,at.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,_t,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?nt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,at.width,at.height,lt,wt,at.data):e.texImage2D(r.TEXTURE_2D,Z,_t,at.width,at.height,0,lt,wt,at.data)}else if(S.isDataArrayTexture)if(U){if(tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,_t,Q.width,Q.height,Q.depth),nt)if(S.layerUpdates.size>0){const Z=Qo(Q.width,Q.height,S.format,S.type);for(const Y of S.layerUpdates){const pt=Q.data.subarray(Y*Z/Q.data.BYTES_PER_ELEMENT,(Y+1)*Z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,lt,wt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,lt,wt,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,lt,wt,Q.data);else if(S.isData3DTexture)U?(tt&&e.texStorage3D(r.TEXTURE_3D,dt,_t,Q.width,Q.height,Q.depth),nt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,lt,wt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,lt,wt,Q.data);else if(S.isFramebufferTexture){if(tt)if(U)e.texStorage2D(r.TEXTURE_2D,dt,_t,Q.width,Q.height);else{let Z=Q.width,Y=Q.height;for(let pt=0;pt<dt;pt++)e.texImage2D(r.TEXTURE_2D,pt,_t,Z,Y,0,lt,wt,null),Z>>=1,Y>>=1}}else if(Ut.length>0){if(U&&tt){const Z=de(Ut[0]);e.texStorage2D(r.TEXTURE_2D,dt,_t,Z.width,Z.height)}for(let Z=0,Y=Ut.length;Z<Y;Z++)at=Ut[Z],U?nt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,lt,wt,at):e.texImage2D(r.TEXTURE_2D,Z,_t,lt,wt,at);S.generateMipmaps=!1}else if(U){if(tt){const Z=de(Q);e.texStorage2D(r.TEXTURE_2D,dt,_t,Z.width,Z.height)}nt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,wt,Q)}else e.texImage2D(r.TEXTURE_2D,0,_t,lt,wt,Q);m(S)&&p(q),yt.__version=W.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function K(C,S,O){if(S.image.length!==6)return;const q=Qt(C,S),j=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+O);const W=i.get(j);if(j.version!==W.__version||q===!0){e.activeTexture(r.TEXTURE0+O);const yt=Xt.getPrimaries(Xt.workingColorSpace),it=S.colorSpace===Ai?null:Xt.getPrimaries(S.colorSpace),vt=S.colorSpace===Ai||yt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let Y=0;Y<6;Y++)!xt&&!Q?lt[Y]=v(S.image[Y],!0,n.maxCubemapSize):lt[Y]=Q?S.image[Y].image:S.image[Y],lt[Y]=_e(S,lt[Y]);const wt=lt[0],_t=s.convert(S.format,S.colorSpace),at=s.convert(S.type),Ut=x(S.internalFormat,_t,at,S.colorSpace),U=S.isVideoTexture!==!0,tt=W.__version===void 0||q===!0,nt=j.dataReady;let dt=b(S,wt);zt(r.TEXTURE_CUBE_MAP,S);let Z;if(xt){U&&tt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Ut,wt.width,wt.height);for(let Y=0;Y<6;Y++){Z=lt[Y].mipmaps;for(let pt=0;pt<Z.length;pt++){const Lt=Z[pt];S.format!==ei?_t!==null?U?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,0,0,Lt.width,Lt.height,_t,Lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,Ut,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,0,0,Lt.width,Lt.height,_t,at,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,Ut,Lt.width,Lt.height,0,_t,at,Lt.data)}}}else{if(Z=S.mipmaps,U&&tt){Z.length>0&&dt++;const Y=de(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Ut,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lt[Y].width,lt[Y].height,_t,at,lt[Y].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,lt[Y].width,lt[Y].height,0,_t,at,lt[Y].data);for(let pt=0;pt<Z.length;pt++){const te=Z[pt].image[Y].image;U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,0,0,te.width,te.height,_t,at,te.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,Ut,te.width,te.height,0,_t,at,te.data)}}else{U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,_t,at,lt[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,_t,at,lt[Y]);for(let pt=0;pt<Z.length;pt++){const Lt=Z[pt];U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,0,0,_t,at,Lt.image[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,Ut,_t,at,Lt.image[Y])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),W.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ut(C,S,O,q,j,W){const yt=s.convert(O.format,O.colorSpace),it=s.convert(O.type),vt=x(O.internalFormat,yt,it,O.colorSpace),xt=i.get(S),Q=i.get(O);if(Q.__renderTarget=S,!xt.__hasExternalTextures){const lt=Math.max(1,S.width>>W),wt=Math.max(1,S.height>>W);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,W,vt,lt,wt,S.depth,0,yt,it,null):e.texImage2D(j,W,vt,lt,wt,0,yt,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),gt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,j,Q.__webglTexture,0,re(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,j,Q.__webglTexture,W),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(C,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const q=S.depthTexture,j=q&&q.isDepthTexture?q.type:null,W=_(S.stencilBuffer,j),yt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=re(S);gt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,W,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,W,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,W,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,C)}else{const q=S.textures;for(let j=0;j<q.length;j++){const W=q[j],yt=s.convert(W.format,W.colorSpace),it=s.convert(W.type),vt=x(W.internalFormat,yt,it,W.colorSpace),xt=re(S);O&&gt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,vt,S.width,S.height):gt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,vt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,vt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const j=q.__webglTexture,W=re(S);if(S.depthTexture.format===ss)gt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===rs)gt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Gt(C){const S=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=C.texture.mipmaps;q&&q.length>0?Mt(S.__webglFramebuffer[0],C):Mt(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=r.createRenderbuffer(),Pt(S.__webglDepthbuffer[q],C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,W)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Pt(S.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,W)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function be(C,S,O){const q=i.get(C);S!==void 0&&ut(q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Gt(C)}function L(C){const S=C.texture,O=i.get(C),q=i.get(S);C.addEventListener("dispose",A);const j=C.textures,W=C.isWebGLCubeRenderTarget===!0,yt=j.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=S.version,a.memory.textures++),W){O.__webglFramebuffer=[];for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[it]=[];for(let vt=0;vt<S.mipmaps.length;vt++)O.__webglFramebuffer[it][vt]=r.createFramebuffer()}else O.__webglFramebuffer[it]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let it=0;it<S.mipmaps.length;it++)O.__webglFramebuffer[it]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(yt)for(let it=0,vt=j.length;it<vt;it++){const xt=i.get(j[it]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&gt(C)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let it=0;it<j.length;it++){const vt=j[it];O.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[it]);const xt=s.convert(vt.format,vt.colorSpace),Q=s.convert(vt.type),lt=x(vt.internalFormat,xt,Q,vt.colorSpace,C.isXRRenderTarget===!0),wt=re(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,lt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,O.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(W){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),zt(r.TEXTURE_CUBE_MAP,S);for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)ut(O.__webglFramebuffer[it][vt],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt);else ut(O.__webglFramebuffer[it],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let it=0,vt=j.length;it<vt;it++){const xt=j[it],Q=i.get(xt);let lt=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,Q.__webglTexture),zt(lt,xt),ut(O.__webglFramebuffer,C,xt,r.COLOR_ATTACHMENT0+it,lt,0),m(xt)&&p(lt)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),zt(it,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)ut(O.__webglFramebuffer[vt],C,S,r.COLOR_ATTACHMENT0,it,vt);else ut(O.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,it,0);m(S)&&p(it),e.unbindTexture()}C.depthBuffer&&Gt(C)}function se(C){const S=C.textures;for(let O=0,q=S.length;O<q;O++){const j=S[O];if(m(j)){const W=y(C),yt=i.get(j).__webglTexture;e.bindTexture(W,yt),p(W),e.unbindTexture()}}}const Dt=[],At=[];function mt(C){if(C.samples>0){if(gt(C)===!1){const S=C.textures,O=C.width,q=C.height;let j=r.COLOR_BUFFER_BIT;const W=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=i.get(C),it=S.length>1;if(it)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const vt=C.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);const Q=i.get(S[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,O,q,0,0,O,q,j,r.NEAREST),l===!0&&(Dt.length=0,At.length=0,Dt.push(r.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Dt.push(W),At.push(W),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,At)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);const Q=i.get(S[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function re(C){return Math.min(n.maxSamples,C.samples)}function gt(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Nt(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function _e(C,S){const O=C.colorSpace,q=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==On&&O!==Ai&&(Xt.getTransfer(O)===Kt?(q!==ei||j!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=et,this.setTextureCube=V,this.rebindTextures=be,this.setupRenderTarget=L,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=gt}function km(r,t){function e(i,n=Ai){let s;const a=Xt.getTransfer(n);if(i===ci)return r.UNSIGNED_BYTE;if(i===Ja)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Qa)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Gl)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Wl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hl)return r.BYTE;if(i===Vl)return r.SHORT;if(i===is)return r.UNSIGNED_SHORT;if(i===Za)return r.INT;if(i===tn)return r.UNSIGNED_INT;if(i===ai)return r.FLOAT;if(i===fs)return r.HALF_FLOAT;if(i===Xl)return r.ALPHA;if(i===ql)return r.RGB;if(i===ei)return r.RGBA;if(i===ss)return r.DEPTH_COMPONENT;if(i===rs)return r.DEPTH_STENCIL;if(i===to)return r.RED;if(i===eo)return r.RED_INTEGER;if(i===$l)return r.RG;if(i===io)return r.RG_INTEGER;if(i===no)return r.RGBA_INTEGER;if(i===qs||i===$s||i===Ys||i===js)if(a===Kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pa||i===ma||i===ga||i===va)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ma)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===va)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xa||i===_a||i===ya)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xa||i===_a)return a===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ya)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ma||i===ba||i===Sa||i===Ea||i===Ta||i===wa||i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Ua)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ma)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ea)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ta)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wa)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Aa)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ra)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ca)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pa)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===La)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ia)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ua)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Na||i===Fa||i===Oa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Na)return a===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===za||i===ka||i===Ba||i===Ha)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===za)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ka)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ha)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hm=`
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

}`;class Vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new cc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ii({vertexShader:Bm,fragmentShader:Hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gm extends Bn{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Vm,p={},y=e.getContextAttributes();let x=null,_=null;const b=[],T=[],A=new Ht;let P=null;const E=new Ie;E.viewport=new he;const M=new Ie;M.viewport=new he;const R=[E,M],I=new cd;let z=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=b[$];return K===void 0&&(K=new Or,b[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=b[$];return K===void 0&&(K=new Or,b[$]=K),K.getGripSpace()},this.getHand=function($){let K=b[$];return K===void 0&&(K=new Or,b[$]=K),K.getHandSpace()};function X($){const K=T.indexOf($.inputSource);if(K===-1)return;const ut=b[K];ut!==void 0&&(ut.update($.inputSource,$.frame,c||a),ut.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",et);for(let $=0;$<b.length;$++){const K=T[$];K!==null&&(T[$]=null,b[$].disconnect(K))}z=null,B=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(x),u=null,f=null,d=null,n=null,_=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(x=t.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",G),n.addEventListener("inputsourceschange",et),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Pt=null,Mt=null;y.depth&&(Mt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=y.stencil?rs:ss,Pt=y.stencil?ns:tn);const Gt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Gt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Di(f.textureWidth,f.textureHeight,{format:ei,type:ci,depthTexture:new lc(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ut={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(n,e,ut),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new Di(u.framebufferWidth,u.framebufferHeight,{format:ei,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),qt.setContext(n),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et($){for(let K=0;K<$.removed.length;K++){const ut=$.removed[K],Pt=T.indexOf(ut);Pt>=0&&(T[Pt]=null,b[Pt].disconnect(ut))}for(let K=0;K<$.added.length;K++){const ut=$.added[K];let Pt=T.indexOf(ut);if(Pt===-1){for(let Gt=0;Gt<b.length;Gt++)if(Gt>=T.length){T.push(ut),Pt=Gt;break}else if(T[Gt]===null){T[Gt]=ut,Pt=Gt;break}if(Pt===-1)break}const Mt=b[Pt];Mt&&Mt.connect(ut)}}const V=new D,rt=new D;function ct($,K,ut){V.setFromMatrixPosition(K.matrixWorld),rt.setFromMatrixPosition(ut.matrixWorld);const Pt=V.distanceTo(rt),Mt=K.projectionMatrix.elements,Gt=ut.projectionMatrix.elements,be=Mt[14]/(Mt[10]-1),L=Mt[14]/(Mt[10]+1),se=(Mt[9]+1)/Mt[5],Dt=(Mt[9]-1)/Mt[5],At=(Mt[8]-1)/Mt[0],mt=(Gt[8]+1)/Gt[0],re=be*At,gt=be*mt,Nt=Pt/(-At+mt),_e=Nt*-At;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_e),$.translateZ(Nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Mt[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const de=be+Nt,C=L+Nt,S=re-_e,O=gt+(Pt-_e),q=se*L/C*de,j=Dt*L/C*de;$.projectionMatrix.makePerspective(S,O,q,j,de,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function bt($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let K=$.near,ut=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),I.near=M.near=E.near=K,I.far=M.far=E.far=ut,(z!==I.near||B!==I.far)&&(n.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,B=I.far),I.layers.mask=$.layers.mask|6,E.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Pt=$.parent,Mt=I.cameras;bt(I,Pt);for(let Gt=0;Gt<Mt.length;Gt++)bt(Mt[Gt],Pt);Mt.length===2?ct(I,E,M):I.projectionMatrix.copy(E.projectionMatrix),zt($,I,Pt)};function zt($,K,ut){ut===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ut.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=tr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function($){return p[$]};let Qt=null;function ne($,K){if(h=K.getViewerPose(c||a),g=K,h!==null){const ut=h.views;u!==null&&(t.setRenderTargetFramebuffer(_,u.framebuffer),t.setRenderTarget(_));let Pt=!1;ut.length!==I.cameras.length&&(I.cameras.length=0,Pt=!0);for(let L=0;L<ut.length;L++){const se=ut[L];let Dt=null;if(u!==null)Dt=u.getViewport(se);else{const mt=d.getViewSubImage(f,se);Dt=mt.viewport,L===0&&(t.setRenderTargetTextures(_,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(_))}let At=R[L];At===void 0&&(At=new Ie,At.layers.enable(L),At.viewport=new he,R[L]=At),At.matrix.fromArray(se.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(se.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),L===0&&(I.matrix.copy(At.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pt===!0&&I.cameras.push(At)}const Mt=n.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const L=d.getDepthInformation(ut[0]);L&&L.isValid&&L.texture&&m.init(L,n.renderState)}if(Mt&&Mt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let L=0;L<ut.length;L++){const se=ut[L].camera;if(se){let Dt=p[se];Dt||(Dt=new cc,p[se]=Dt);const At=d.getCameraImage(se);Dt.sourceTexture=At}}}}for(let ut=0;ut<b.length;ut++){const Pt=T[ut],Mt=b[ut];Pt!==null&&Mt!==void 0&&Mt.update(Pt,K,c||a)}Qt&&Qt($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const qt=new pc;qt.setAnimationLoop(ne),this.setAnimationLoop=function($){Qt=$},this.dispose=function(){}}}const Vi=new Xe,Wm=new Bt;function Xm(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,Vi.copy(_),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(Vi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function qm(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function c(y,x){let _=n[y.id];_===void 0&&(g(y),_=h(y),n[y.id]=_,y.addEventListener("dispose",m));const b=x.program;i.updateUBOMapping(y,b);const T=t.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function h(y){const x=d();y.__bindingPointIndex=x;const _=r.createBuffer(),b=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,b,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,_),_}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=n[y.id],_=y.uniforms,b=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,A=_.length;T<A;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,M=P.length;E<M;E++){const R=P[E];if(u(R,T,E,b)===!0){const I=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let X=0;X<z.length;X++){const G=z[X],et=v(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,I+B,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,B),B+=et.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,x,_,b){const T=y.value,A=x+"_"+_;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:b[A]=T.clone(),!0;{const P=b[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return b[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const x=y.uniforms;let _=0;const b=16;for(let A=0,P=x.length;A<P;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,R=E.length;M<R;M++){const I=E[M],z=Array.isArray(I.value)?I.value:[I.value];for(let B=0,X=z.length;B<X;B++){const G=z[B],et=v(G),V=_%b,rt=V%et.boundary,ct=V+rt;_+=rt,ct!==0&&b-ct<et.storage&&(_+=b-ct),I.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=et.storage}}}const T=_%b;return T>0&&(_+=b-T),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function p(){for(const y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}class Ga{constructor(t={}){const{canvas:e=Eh(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let b=!1;this._outputColorSpace=Me;let T=0,A=0,P=null,E=-1,M=null;const R=new he,I=new he;let z=null;const B=new Ct(0);let X=0,G=e.width,et=e.height,V=1,rt=null,ct=null;const bt=new he(0,0,G,et),zt=new he(0,0,G,et);let Qt=!1;const ne=new ro;let qt=!1,$=!1;const K=new Bt,ut=new D,Pt=new he,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function be(){return P===null?V:1}let L=i;function se(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",Z,!1),L===null){const N="webgl2";if(L=se(N,w),L===null)throw se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Dt,At,mt,re,gt,Nt,_e,de,C,S,O,q,j,W,yt,it,vt,xt,Q,lt,wt,_t,at,Ut;function U(){Dt=new np(L),Dt.init(),_t=new km(L,Dt),At=new Kf(L,Dt,t,_t),mt=new Om(L,Dt),At.reversedDepthBuffer&&f&&mt.buffers.depth.setReversed(!0),re=new ap(L),gt=new Em,Nt=new zm(L,Dt,mt,gt,At,_t,re),_e=new Jf(_),de=new ip(_),C=new dd(L),at=new Yf(L,C),S=new sp(L,C,re,at),O=new lp(L,S,C,re),Q=new op(L,At,Nt),it=new Zf(gt),q=new Sm(_,_e,de,Dt,At,at,it),j=new Xm(_,gt),W=new wm,yt=new Dm(Dt),xt=new $f(_,_e,de,mt,O,u,l),vt=new Nm(_,O,At),Ut=new qm(L,re,At,mt),lt=new jf(L,Dt,re),wt=new rp(L,Dt,re),re.programs=q.programs,_.capabilities=At,_.extensions=Dt,_.properties=gt,_.renderLists=W,_.shadowMap=vt,_.state=mt,_.info=re}U();const tt=new Gm(_,L);this.xr=tt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(G,et,!1))},this.getSize=function(w){return w.set(G,et)},this.setSize=function(w,N,k=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,et=N,e.width=Math.floor(w*V),e.height=Math.floor(N*V),k===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(G*V,et*V).floor()},this.setDrawingBufferSize=function(w,N,k){G=w,et=N,V=k,e.width=Math.floor(w*k),e.height=Math.floor(N*k),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(bt)},this.setViewport=function(w,N,k,H){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,N,k,H),mt.viewport(R.copy(bt).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(zt)},this.setScissor=function(w,N,k,H){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,N,k,H),mt.scissor(I.copy(zt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){mt.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,k=!0){let H=0;if(w){let F=!1;if(P!==null){const J=P.texture.format;F=J===no||J===io||J===eo}if(F){const J=P.texture.type,ot=J===ci||J===tn||J===is||J===ns||J===Ja||J===Qa,ft=xt.getClearColor(),ht=xt.getClearAlpha(),Tt=ft.r,Rt=ft.g,St=ft.b;ot?(g[0]=Tt,g[1]=Rt,g[2]=St,g[3]=ht,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Tt,v[1]=Rt,v[2]=St,v[3]=ht,L.clearBufferiv(L.COLOR,0,v))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),xt.dispose(),W.dispose(),yt.dispose(),gt.dispose(),_e.dispose(),de.dispose(),O.dispose(),at.dispose(),Ut.dispose(),q.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",ni),tt.removeEventListener("sessionend",mo),Ni.stop()};function nt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=re.autoReset,N=vt.enabled,k=vt.autoUpdate,H=vt.needsUpdate,F=vt.type;U(),re.autoReset=w,vt.enabled=N,vt.autoUpdate=k,vt.needsUpdate=H,vt.type=F}function Z(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Y(w){const N=w.target;N.removeEventListener("dispose",Y),pt(N)}function pt(w){Lt(w),gt.remove(w)}function Lt(w){const N=gt.get(w).programs;N!==void 0&&(N.forEach(function(k){q.releaseProgram(k)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,k,H,F,J){N===null&&(N=Mt);const ot=F.isMesh&&F.matrixWorld.determinant()<0,ft=wc(w,N,k,H,F);mt.setMaterial(H,ot);let ht=k.index,Tt=1;if(H.wireframe===!0){if(ht=S.getWireframeAttribute(k),ht===void 0)return;Tt=2}const Rt=k.drawRange,St=k.attributes.position;let Vt=Rt.start*Tt,jt=(Rt.start+Rt.count)*Tt;J!==null&&(Vt=Math.max(Vt,J.start*Tt),jt=Math.min(jt,(J.start+J.count)*Tt)),ht!==null?(Vt=Math.max(Vt,0),jt=Math.min(jt,ht.count)):St!=null&&(Vt=Math.max(Vt,0),jt=Math.min(jt,St.count));const ce=jt-Vt;if(ce<0||ce===1/0)return;at.setup(F,H,ft,k,ht);let ee,Zt=lt;if(ht!==null&&(ee=C.get(ht),Zt=wt,Zt.setIndex(ee)),F.isMesh)H.wireframe===!0?(mt.setLineWidth(H.wireframeLinewidth*be()),Zt.setMode(L.LINES)):Zt.setMode(L.TRIANGLES);else if(F.isLine){let Et=H.linewidth;Et===void 0&&(Et=1),mt.setLineWidth(Et*be()),F.isLineSegments?Zt.setMode(L.LINES):F.isLineLoop?Zt.setMode(L.LINE_LOOP):Zt.setMode(L.LINE_STRIP)}else F.isPoints?Zt.setMode(L.POINTS):F.isSprite&&Zt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Zt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Et=F._multiDrawStarts,oe=F._multiDrawCounts,Wt=F._multiDrawCount,Ne=ht?C.get(ht).bytesPerElement:1,an=gt.get(H).currentProgram.getUniforms();for(let Fe=0;Fe<Wt;Fe++)an.setValue(L,"_gl_DrawID",Fe),Zt.render(Et[Fe]/Ne,oe[Fe])}else if(F.isInstancedMesh)Zt.renderInstances(Vt,ce,F.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,oe=Math.min(k.instanceCount,Et);Zt.renderInstances(Vt,ce,oe)}else Zt.render(Vt,ce)};function te(w,N,k){w.transparent===!0&&w.side===Te&&w.forceSinglePass===!1?(w.side=Ue,w.needsUpdate=!0,xs(w,N,k),w.side=xi,w.needsUpdate=!0,xs(w,N,k),w.side=Te):xs(w,N,k)}this.compile=function(w,N,k=null){k===null&&(k=w),p=yt.get(k),p.init(N),x.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==k&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const J=F.material;if(J)if(Array.isArray(J))for(let ot=0;ot<J.length;ot++){const ft=J[ot];te(ft,k,F),H.add(ft)}else te(J,k,F),H.add(J)}),p=x.pop(),H},this.compileAsync=function(w,N,k=null){const H=this.compile(w,N,k);return new Promise(F=>{function J(){if(H.forEach(function(ot){gt.get(ot).currentProgram.isReady()&&H.delete(ot)}),H.size===0){F(w);return}setTimeout(J,10)}Dt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let $t=null;function hi(w){$t&&$t(w)}function ni(){Ni.stop()}function mo(){Ni.start()}const Ni=new pc;Ni.setAnimationLoop(hi),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(w){$t=w,tt.setAnimationLoop(w),w===null?Ni.stop():Ni.start()},tt.addEventListener("sessionstart",ni),tt.addEventListener("sessionend",mo),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(N),N=tt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,P),p=yt.get(w,x.length),p.init(N),x.push(p),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ne.setFromProjectionMatrix(K,oi,N.reversedDepth),$=this.localClippingEnabled,qt=it.init(this.clippingPlanes,$),m=W.get(w,y.length),m.init(),y.push(m),tt.enabled===!0&&tt.isPresenting===!0){const J=_.xr.getDepthSensingMesh();J!==null&&ur(J,N,-1/0,_.sortObjects)}ur(w,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(rt,ct),Gt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Gt&&xt.addToRenderList(m,w),this.info.render.frame++,qt===!0&&it.beginShadows();const k=p.state.shadowsArray;vt.render(k,w,N),qt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const J=N.cameras;if(F.length>0)for(let ot=0,ft=J.length;ot<ft;ot++){const ht=J[ot];vo(H,F,w,ht)}Gt&&xt.render(w);for(let ot=0,ft=J.length;ot<ft;ot++){const ht=J[ot];go(m,w,ht,ht.viewport)}}else F.length>0&&vo(H,F,w,N),Gt&&xt.render(w),go(m,w,N);P!==null&&A===0&&(Nt.updateMultisampleRenderTarget(P),Nt.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,N),at.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],qt===!0&&it.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ur(w,N,k,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ne.intersectsSprite(w)){H&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);const ot=O.update(w),ft=w.material;ft.visible&&m.push(w,ot,ft,k,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ne.intersectsObject(w))){const ot=O.update(w),ft=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Pt.copy(ot.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(K)),Array.isArray(ft)){const ht=ot.groups;for(let Tt=0,Rt=ht.length;Tt<Rt;Tt++){const St=ht[Tt],Vt=ft[St.materialIndex];Vt&&Vt.visible&&m.push(w,ot,Vt,k,Pt.z,St)}}else ft.visible&&m.push(w,ot,ft,k,Pt.z,null)}}const J=w.children;for(let ot=0,ft=J.length;ot<ft;ot++)ur(J[ot],N,k,H)}function go(w,N,k,H){const F=w.opaque,J=w.transmissive,ot=w.transparent;p.setupLightsView(k),qt===!0&&it.setGlobalState(_.clippingPlanes,k),H&&mt.viewport(R.copy(H)),F.length>0&&vs(F,N,k),J.length>0&&vs(J,N,k),ot.length>0&&vs(ot,N,k),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function vo(w,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Di(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?fs:ci,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const J=p.state.transmissionRenderTarget[H.id],ot=H.viewport||R;J.setSize(ot.z*_.transmissionResolutionScale,ot.w*_.transmissionResolutionScale);const ft=_.getRenderTarget(),ht=_.getActiveCubeFace(),Tt=_.getActiveMipmapLevel();_.setRenderTarget(J),_.getClearColor(B),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Gt&&xt.render(k);const Rt=_.toneMapping;_.toneMapping=Li;const St=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),qt===!0&&it.setGlobalState(_.clippingPlanes,H),vs(w,k,H),Nt.updateMultisampleRenderTarget(J),Nt.updateRenderTargetMipmap(J),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let jt=0,ce=N.length;jt<ce;jt++){const ee=N[jt],Zt=ee.object,Et=ee.geometry,oe=ee.material,Wt=ee.group;if(oe.side===Te&&Zt.layers.test(H.layers)){const Ne=oe.side;oe.side=Ue,oe.needsUpdate=!0,xo(Zt,k,H,Et,oe,Wt),oe.side=Ne,oe.needsUpdate=!0,Vt=!0}}Vt===!0&&(Nt.updateMultisampleRenderTarget(J),Nt.updateRenderTargetMipmap(J))}_.setRenderTarget(ft,ht,Tt),_.setClearColor(B,X),St!==void 0&&(H.viewport=St),_.toneMapping=Rt}function vs(w,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,J=w.length;F<J;F++){const ot=w[F],ft=ot.object,ht=ot.geometry,Tt=ot.group;let Rt=ot.material;Rt.allowOverride===!0&&H!==null&&(Rt=H),ft.layers.test(k.layers)&&xo(ft,N,k,ht,Rt,Tt)}}function xo(w,N,k,H,F,J){w.onBeforeRender(_,N,k,H,F,J),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(_,N,k,H,w,J),F.transparent===!0&&F.side===Te&&F.forceSinglePass===!1?(F.side=Ue,F.needsUpdate=!0,_.renderBufferDirect(k,N,H,F,w,J),F.side=xi,F.needsUpdate=!0,_.renderBufferDirect(k,N,H,F,w,J),F.side=Te):_.renderBufferDirect(k,N,H,F,w,J),w.onAfterRender(_,N,k,H,F,J)}function xs(w,N,k){N.isScene!==!0&&(N=Mt);const H=gt.get(w),F=p.state.lights,J=p.state.shadowsArray,ot=F.state.version,ft=q.getParameters(w,F.state,J,N,k),ht=q.getProgramCacheKey(ft);let Tt=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?de:_e).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Tt===void 0&&(w.addEventListener("dispose",Y),Tt=new Map,H.programs=Tt);let Rt=Tt.get(ht);if(Rt!==void 0){if(H.currentProgram===Rt&&H.lightsStateVersion===ot)return yo(w,ft),Rt}else ft.uniforms=q.getUniforms(w),w.onBeforeCompile(ft,_),Rt=q.acquireProgram(ft,ht),Tt.set(ht,Rt),H.uniforms=ft.uniforms;const St=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=it.uniform),yo(w,ft),H.needsLights=Rc(w),H.lightsStateVersion=ot,H.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Rt,H.uniformsList=null,Rt}function _o(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Ks.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function yo(w,N){const k=gt.get(w);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function wc(w,N,k,H,F){N.isScene!==!0&&(N=Mt),Nt.resetTextureUnits();const J=N.fog,ot=H.isMeshStandardMaterial?N.environment:null,ft=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:On,ht=(H.isMeshStandardMaterial?de:_e).get(H.envMap||ot),Tt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Rt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!k.morphAttributes.position,Vt=!!k.morphAttributes.normal,jt=!!k.morphAttributes.color;let ce=Li;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=_.toneMapping);const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Zt=ee!==void 0?ee.length:0,Et=gt.get(H),oe=p.state.lights;if(qt===!0&&($===!0||w!==M)){const Ae=w===M&&H.id===E;it.setState(H,w,Ae)}let Wt=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==oe.state.version||Et.outputColorSpace!==ft||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==ht||H.fog===!0&&Et.fog!==J||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==Tt||Et.vertexTangents!==Rt||Et.morphTargets!==St||Et.morphNormals!==Vt||Et.morphColors!==jt||Et.toneMapping!==ce||Et.morphTargetsCount!==Zt)&&(Wt=!0):(Wt=!0,Et.__version=H.version);let Ne=Et.currentProgram;Wt===!0&&(Ne=xs(H,N,F));let an=!1,Fe=!1,Wn=!1;const le=Ne.getUniforms(),Ve=Et.uniforms;if(mt.useProgram(Ne.program)&&(an=!0,Fe=!0,Wn=!0),H.id!==E&&(E=H.id,Fe=!0),an||M!==w){mt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),le.setValue(L,"projectionMatrix",w.projectionMatrix),le.setValue(L,"viewMatrix",w.matrixWorldInverse);const Le=le.map.cameraPosition;Le!==void 0&&Le.setValue(L,ut.setFromMatrixPosition(w.matrixWorld)),At.logarithmicDepthBuffer&&le.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&le.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Fe=!0,Wn=!0)}if(F.isSkinnedMesh){le.setOptional(L,F,"bindMatrix"),le.setOptional(L,F,"bindMatrixInverse");const Ae=F.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),le.setValue(L,"boneTexture",Ae.boneTexture,Nt))}F.isBatchedMesh&&(le.setOptional(L,F,"batchingTexture"),le.setValue(L,"batchingTexture",F._matricesTexture,Nt),le.setOptional(L,F,"batchingIdTexture"),le.setValue(L,"batchingIdTexture",F._indirectTexture,Nt),le.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(L,"batchingColorTexture",F._colorsTexture,Nt));const Ge=k.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&Q.update(F,k,Ne),(Fe||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,le.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ve.envMap.value=ht,Ve.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Ve.envMapIntensity.value=N.environmentIntensity),Fe&&(le.setValue(L,"toneMappingExposure",_.toneMappingExposure),Et.needsLights&&Ac(Ve,Wn),J&&H.fog===!0&&j.refreshFogUniforms(Ve,J),j.refreshMaterialUniforms(Ve,H,V,et,p.state.transmissionRenderTarget[w.id]),Ks.upload(L,_o(Et),Ve,Nt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ks.upload(L,_o(Et),Ve,Nt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&le.setValue(L,"center",F.center),le.setValue(L,"modelViewMatrix",F.modelViewMatrix),le.setValue(L,"normalMatrix",F.normalMatrix),le.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ae=H.uniformsGroups;for(let Le=0,fr=Ae.length;Le<fr;Le++){const Fi=Ae[Le];Ut.update(Fi,Ne),Ut.bind(Fi,Ne)}}return Ne}function Ac(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Rc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,k){const H=gt.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),gt.get(w.texture).__webglTexture=N,gt.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const k=gt.get(w);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Cc=L.createFramebuffer();this.setRenderTarget=function(w,N=0,k=0){P=w,T=N,A=k;let H=!0,F=null,J=!1,ot=!1;if(w){const ht=gt.get(w);if(ht.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(ht.__webglFramebuffer===void 0)Nt.setupRenderTarget(w);else if(ht.__hasExternalTextures)Nt.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const St=w.depthTexture;if(ht.__boundDepthTexture!==St){if(St!==null&&gt.has(St)&&(w.width!==St.image.width||w.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(w)}}const Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ot=!0);const Rt=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?F=Rt[N][k]:F=Rt[N],J=!0):w.samples>0&&Nt.useMultisampledRTT(w)===!1?F=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(Rt)?F=Rt[k]:F=Rt,R.copy(w.viewport),I.copy(w.scissor),z=w.scissorTest}else R.copy(bt).multiplyScalar(V).floor(),I.copy(zt).multiplyScalar(V).floor(),z=Qt;if(k!==0&&(F=Cc),mt.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&mt.drawBuffers(w,F),mt.viewport(R),mt.scissor(I),mt.setScissorTest(z),J){const ht=gt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ht.__webglTexture,k)}else if(ot){const ht=N;for(let Tt=0;Tt<w.textures.length;Tt++){const Rt=gt.get(w.textures[Tt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Tt,Rt.__webglTexture,k,ht)}}else if(w!==null&&k!==0){const ht=gt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ht.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(w,N,k,H,F,J,ot,ft=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(ht=ht[ot]),ht){mt.bindFramebuffer(L.FRAMEBUFFER,ht);try{const Tt=w.textures[ft],Rt=Tt.format,St=Tt.type;if(!At.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&k>=0&&k<=w.height-F&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(N,k,H,F,_t.convert(Rt),_t.convert(St),J))}finally{const Tt=P!==null?gt.get(P).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,N,k,H,F,J,ot,ft=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(ht=ht[ot]),ht)if(N>=0&&N<=w.width-H&&k>=0&&k<=w.height-F){mt.bindFramebuffer(L.FRAMEBUFFER,ht);const Tt=w.textures[ft],Rt=Tt.format,St=Tt.type;if(!At.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.bufferData(L.PIXEL_PACK_BUFFER,J.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(N,k,H,F,_t.convert(Rt),_t.convert(St),0);const jt=P!==null?gt.get(P).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,jt);const ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Th(L,ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,J),L.deleteBuffer(Vt),L.deleteSync(ce),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,k=0){const H=Math.pow(2,-k),F=Math.floor(w.image.width*H),J=Math.floor(w.image.height*H),ot=N!==null?N.x:0,ft=N!==null?N.y:0;Nt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ot,ft,F,J),mt.unbindTexture()};const Pc=L.createFramebuffer(),Lc=L.createFramebuffer();this.copyTextureToTexture=function(w,N,k=null,H=null,F=0,J=null){J===null&&(F!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=F,F=0):J=0);let ot,ft,ht,Tt,Rt,St,Vt,jt,ce;const ee=w.isCompressedTexture?w.mipmaps[J]:w.image;if(k!==null)ot=k.max.x-k.min.x,ft=k.max.y-k.min.y,ht=k.isBox3?k.max.z-k.min.z:1,Tt=k.min.x,Rt=k.min.y,St=k.isBox3?k.min.z:0;else{const Ge=Math.pow(2,-F);ot=Math.floor(ee.width*Ge),ft=Math.floor(ee.height*Ge),w.isDataArrayTexture?ht=ee.depth:w.isData3DTexture?ht=Math.floor(ee.depth*Ge):ht=1,Tt=0,Rt=0,St=0}H!==null?(Vt=H.x,jt=H.y,ce=H.z):(Vt=0,jt=0,ce=0);const Zt=_t.convert(N.format),Et=_t.convert(N.type);let oe;N.isData3DTexture?(Nt.setTexture3D(N,0),oe=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Nt.setTexture2DArray(N,0),oe=L.TEXTURE_2D_ARRAY):(Nt.setTexture2D(N,0),oe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Wt=L.getParameter(L.UNPACK_ROW_LENGTH),Ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),Fe=L.getParameter(L.UNPACK_SKIP_ROWS),Wn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,St);const le=w.isDataArrayTexture||w.isData3DTexture,Ve=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const Ge=gt.get(w),Ae=gt.get(N),Le=gt.get(Ge.__renderTarget),fr=gt.get(Ae.__renderTarget);mt.bindFramebuffer(L.READ_FRAMEBUFFER,Le.__webglFramebuffer),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let Fi=0;Fi<ht;Fi++)le&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(w).__webglTexture,F,St+Fi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(N).__webglTexture,J,ce+Fi)),L.blitFramebuffer(Tt,Rt,ot,ft,Vt,jt,ot,ft,L.DEPTH_BUFFER_BIT,L.NEAREST);mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||gt.has(w)){const Ge=gt.get(w),Ae=gt.get(N);mt.bindFramebuffer(L.READ_FRAMEBUFFER,Pc),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Lc);for(let Le=0;Le<ht;Le++)le?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,F,St+Le):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,F),Ve?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.__webglTexture,J,ce+Le):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ae.__webglTexture,J),F!==0?L.blitFramebuffer(Tt,Rt,ot,ft,Vt,jt,ot,ft,L.COLOR_BUFFER_BIT,L.NEAREST):Ve?L.copyTexSubImage3D(oe,J,Vt,jt,ce+Le,Tt,Rt,ot,ft):L.copyTexSubImage2D(oe,J,Vt,jt,Tt,Rt,ot,ft);mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ve?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(oe,J,Vt,jt,ce,ot,ft,ht,Zt,Et,ee.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(oe,J,Vt,jt,ce,ot,ft,ht,Zt,ee.data):L.texSubImage3D(oe,J,Vt,jt,ce,ot,ft,ht,Zt,Et,ee):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,J,Vt,jt,ot,ft,Zt,Et,ee.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,J,Vt,jt,ee.width,ee.height,Zt,ee.data):L.texSubImage2D(L.TEXTURE_2D,J,Vt,jt,ot,ft,Zt,Et,ee);L.pixelStorei(L.UNPACK_ROW_LENGTH,Wt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wn),J===0&&N.generateMipmaps&&L.generateMipmap(oe),mt.unbindTexture()},this.initRenderTarget=function(w){gt.get(w).__webglFramebuffer===void 0&&Nt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Nt.setTextureCube(w,0):w.isData3DTexture?Nt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Nt.setTexture2DArray(w,0):Nt.setTexture2D(w,0),mt.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,mt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const El=(r,t,e)=>({x:r.x+(t.x-r.x)*e,y:r.y+(t.y-r.y)*e,z:r.z+(t.z-r.z)*e,u:r.u+(t.u-r.u)*e}),_c=r=>r?.4:.55;function Tl(r,t=0){const e=t?r.branch(t).length:r.length,i=Math.ceil(e/(r.id==="orbit"?1:2)),n=r.width(t)+r.verge(t),s=[];for(const a of[-1,1]){const o=c=>{const h=r.routeAt(t,c),d=h.x+h.nx*n*a,f=h.z+h.nz*n*a;return{x:d,y:r.deckHeight(t,c,d,f),z:f,u:c}},l=c=>Math.min(r.junctionClearance(t,c.u,c.x,c.z)+.12,r.selfOverlapClearance(t,c.u,c.x,c.z,n)+.045);for(let c=0;c<i;c++){let h=o(c/i*e),d=o((c+1)/i*e);if(Math.abs(h.y-d.y)>=9)continue;const f=l(h),u=l(d);if(!(f<0&&u<0)){if(f<0!=u<0){let g=0,v=1;for(let p=0;p<14;p++){const y=(g+v)/2;l(El(h,d,y))>=0==f>=0?g=y:v=y}const m=El(h,d,(g+v)/2);f<0?h=m:d=m}s.push({a:h,b:d,side:a,route:t})}}}return s}class wl{segments;cells=new Map;cellSize=12;candidates=new Set;constructor(t){this.segments=[...Tl(t),...t.branches.flatMap(e=>Tl(t,e.route))];for(const e of this.segments){const{a:i,b:n}=e;for(let s=Math.floor((Math.min(i.x,n.x)-.4)/this.cellSize);s<=Math.floor((Math.max(i.x,n.x)+.4)/this.cellSize);s++)for(let a=Math.floor((Math.min(i.z,n.z)-.4)/this.cellSize);a<=Math.floor((Math.max(i.z,n.z)+.4)/this.cellSize);a++){const o=s+":"+a,l=this.cells.get(o)??[];l.push(e),this.cells.set(o,l)}}}resolve(t){const e=this.candidates;e.clear();for(let a=Math.floor((t.x-3)/this.cellSize);a<=Math.floor((t.x+3)/this.cellSize);a++)for(let o=Math.floor((t.z-3)/this.cellSize);o<=Math.floor((t.z+3)/this.cellSize);o++)for(const l of this.cells.get(a+":"+o)??[])e.add(l);const i=Math.sin(t.heading),n=Math.cos(t.heading);let s=0;for(let a=0;a<3;a++){let o=!1;for(const l of e){const{a:c,b:h}=l;if(t.y>Math.max(c.y,h.y)+1.35||t.y+1.25<Math.min(c.y,h.y))continue;const d=h.x-c.x,f=h.z-c.z,u=Math.hypot(d,f);if(u<1e-4)continue;const g=d/u,v=f/u,m=-v,p=g,y=t.x+i*.1-(c.x+h.x)*.5,x=t.z+n*.1-(c.z+h.z)*.5,_=_c(l.route)*.5+.025;let b=1/0,T=0,A=0,P=!1;for(const[M,R]of[[i,n],[n,-i],[g,v],[m,p]]){const I=1.85*Math.abs(i*M+n*R)+1.34*Math.abs(n*M-i*R),z=u*.5*Math.abs(g*M+v*R)+_*Math.abs(m*M+p*R),B=y*M+x*R,X=I+z-Math.abs(B);if(X<=0){P=!0;break}if(X<b){b=X;const G=Math.abs(B)>1e-4?Math.sign(B):Math.sign((m*M+p*R)*l.side)||1;T=M*G,A=R*G}}if(P)continue;t.x+=T*(b+.001),t.z+=A*(b+.001),o=!0;const E=t.vx*T+t.vz*A;if(E<0){s=Math.max(s,-E);const M=t.vx-T*E,R=t.vz-A*E,I=-E*.42;t.vx=M*.985+T*I,t.vz=R*.985+A*I}}if(!o)break}return s}}const fe=(r,t,e)=>Math.max(t,Math.min(e,r)),ue=(r,t,e)=>r+(t-r)*e,Yi=(r,t,e,i)=>ue(r,t,1-Math.exp(-e*i)),ke=(r,t)=>(r%t+t)%t,Je=r=>Math.atan2(Math.sin(r),Math.cos(r));function gs(r=7319){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Ri=r=>`${Math.floor(r/60).toString().padStart(2,"0")}:${Math.floor(r%60).toString().padStart(2,"0")}.${Math.floor(r*1e3%1e3).toString().padStart(3,"0")}`,Al=new Map;let Ws=0;const Rl=r=>{const t=new cs(r.map(e=>new D(...e)),!0,"centripetal");return t.arcLengthDivisions=4e3,t.updateArcLengths(),t};function $m(r,t){const e=r.getLength(),i=Math.ceil(e/3),n=e/i,s=Array.from({length:i},(c,h)=>r.getPointAt(h/i)),a=Math.ceil(t*2/n),o=s.map((c,h)=>{const d=new D;let f=0;for(let u=-a;u<=a;u++){const g=Math.exp(-.5*(u*n/t)**2);d.addScaledVector(s[ke(h+u,i)],g),f+=g}return d.divideScalar(f)}),l=new cs(o,!0,"centripetal");return l.arcLengthDivisions=4e3,l.updateArcLengths(),l}function Ym(r){const t=Dn(r);if(!t.newCircuit)return t;const e=Al.get(t.id);if(e)return e;Ws||(Ws=Rl(Dn("coast").points).getLength()*.95);let i=1,n=t.points.map(o=>[...o]);const s=()=>{const o=Rl(n),l=o.getLength(),c=o.getLengths(4e3),h=f=>{const u=f/n.length*4e3,g=Math.floor(u);return ue(c[g],c[Math.min(4e3,g+1)],u-g)};let d=l;for(const f of t.branches??[]){const u=new D(...n[f.from]),g=new D(...n[f.to]),v=o.getTangent(f.from/n.length),m=o.getTangent(f.to/n.length),p=new cs([u,u.clone().addScaledVector(v,15),...f.via.map(([y,x,_])=>new D(y*i,x,_*i)),g.clone().addScaledVector(m,-15),g],!1,"centripetal");p.arcLengthDivisions=1e3,d=Math.max(d,l-(h(f.to)-h(f.from))+p.getLength())}return d};for(let o=0;o<4;o++){const l=s();if(l<=Ws)break;i*=Ws/l*.99,n=t.points.map(([c,h,d])=>[c*i,h,d*i])}const a={...t,points:n,shortcut:t.shortcut?{...t.shortcut,via:t.shortcut.via.map(([o,l,c])=>[o*i,l,c*i])}:void 0};return t.branches&&(a.branches=t.branches.map(o=>({...o,via:o.via.map(([l,c,h])=>[l*i,c,h*i])}))),Al.set(t.id,a),a}class hs{collisionWorld;cityFork;get barriers(){return this.collisionWorld??=new wl(this)}halfWidth=8.8;shoulder=4;count=720;points=[];length;curve;definition;id;branches=[];get shortcut(){return this.branches[0]??null}branch(t){return this.branches[t-1]??null}drop=null;bounds={minX:0,maxX:0,minZ:0,maxZ:0};itemS=135;itemRows;itemLocations;crossings;constructor(t="coast",e=!0){this.definition=Ym(t),this.id=this.definition.id;const i=this.definition.points;this.curve=new cs(i.map(l=>new D(...l)),!0,"centripetal"),this.curve.arcLengthDivisions=4e3,this.curve.updateArcLengths(),this.id==="mistpine"&&(this.curve=$m(this.curve,10)),this.length=this.curve.getLength();for(let l=0;l<this.count;l++){const c=this.curve.getPointAt(l/this.count),h=this.curve.getTangentAt(l/this.count),d=Math.hypot(h.x,h.z);this.points.push({x:c.x,y:c.y,z:c.z,tx:h.x/d,tz:h.z/d,nx:h.z/d,nz:-h.x/d,s:l/this.count*this.length,u:l/this.count*this.length,route:0,bank:0})}const n=l=>this.project(i[l][0],i[l][2],void 0,0,i[l][1]).s,s=this.definition.drop;s&&(this.drop={from:n(s.from),to:n(s.to),floor:s.floor,launch:i[s.from][1]});const a=this.definition.branches??(this.definition.shortcut?[this.definition.shortcut]:[]);for(const[l,c]of a.entries()){const h=l+1,d=n(c.from),f=n(c.to),u=this.at(d),g=this.at(f),v=x=>new D(x.x,x.y,x.z),m=new cs([v(u),new D(u.x+u.tx*15,u.y,u.z+u.tz*15),...c.via.map(x=>new D(...x)),new D(g.x-g.tx*15,g.y,g.z-g.tz*15),v(g)],!1,"centripetal");m.arcLengthDivisions=1e3,m.updateArcLengths();const p=m.getLength(),y=[];for(let x=0;x<=180;x++){const _=m.getPointAt(x/180),b=m.getTangentAt(x/180),T=Math.hypot(b.x,b.z);y.push({x:_.x,y:_.y,z:_.z,tx:b.x/T,tz:b.z/T,nx:b.z/T,nz:-b.x/T,s:ue(d,f,x/180),u:p*x/180,route:h,bank:0})}this.branches.push({from:d,to:f,length:p,points:y,name:c.name,route:h,bonusItems:c.bonusItems});for(const x of y){if(Math.min(x.u,p-x.u)>75)continue;const _=this.project(x.x,x.z,void 0,0,x.y),b=Math.max(0,Math.min(1,(_.distance-7)/13));x.y=ue(_.y,x.y,b*b*(3-2*b))}}if(this.id==="metro"&&this.shortcut){const l=this.shortcut,c=l.points[0],h=l.points[l.points.length-1],d=Math.hypot(h.x-c.x,h.z-c.z);this.cityFork={from:l.from,to:l.to,x:c.x,z:c.z,dx:(h.x-c.x)/d,dz:(h.z-c.z)/d,length:d}}if(this.itemRows=[this.itemS,this.length*.47,this.length*.86].map(l=>(this.shortcut&&l>this.shortcut.from-20&&l<this.shortcut.to+45&&(l=this.shortcut.to+55),this.drop&&l>this.drop.from-60&&l<this.drop.to+55&&(l=this.drop.to+70),l)),this.definition.newCircuit){const l=(c,h)=>c>45&&c<this.length-45&&(!this.shortcut||c<this.shortcut.from-30||c>this.shortcut.to+45)&&this.itemRows.every(d=>Math.abs(this.delta(d,c))>h);this.itemRows.length=0;for(const c of[.1,.47,.83])for(let h=0;h<this.length;h+=8){const d=ke(this.length*c+h,this.length);if(l(d,this.length*.16)){this.itemRows.push(d);break}}for(let c=55;this.itemRows.length<3&&c<this.length-45;c+=8)l(c,55)&&this.itemRows.push(c)}this.itemLocations=this.itemRows.map(l=>({route:0,u:l}));for(const l of this.branches)l.bonusItems&&this.itemLocations.push({route:l.route,u:l.length*.5});this.crossings=this.id==="metro"?[.37,.63,.85].map(l=>this.length*l):[];const o=[...this.points,...this.branches.flatMap(l=>l.points)];this.bounds={minX:Math.min(...o.map(l=>l.x)),maxX:Math.max(...o.map(l=>l.x)),minZ:Math.min(...o.map(l=>l.z)),maxZ:Math.max(...o.map(l=>l.z))},e&&(this.collisionWorld=new wl(this))}at(t){const e=ke(t,this.length)/this.length*this.count,i=Math.floor(e),n=e-i,s=this.points[i],a=this.points[(i+1)%this.count],o=ue(s.tx,a.tx,n),l=ue(s.tz,a.tz,n),c=Math.hypot(o,l);return{x:ue(s.x,a.x,n),y:this.id==="orbit"?this.bloomHeight(ue(s.x,a.x,n),ue(s.z,a.z,n),i,ue(s.y,a.y,n)):this.surfaceHeight(ke(t,this.length),ue(s.y,a.y,n)),z:ue(s.z,a.z,n),tx:o/c,tz:l/c,nx:l/c,nz:-o/c,s:ke(t,this.length),u:ke(t,this.length),route:0,bank:this.bankAt(t)}}bankAt(t){const e=this.definition.banking;if(!e)return 0;const i=this.points[Math.floor(ke(t-18,this.length)/this.length*this.count)],n=this.points[Math.floor(ke(t+18,this.length)/this.length*this.count)],s=Je(Math.atan2(n.tx,n.tz)-Math.atan2(i.tx,i.tz))/36;return Math.max(-e,Math.min(e,-s*22))}surfaceHeight(t,e){if(!this.drop)return e;const i=this.drop;if(t>=i.from-70&&t<i.from-36){const n=(t-(i.from-70))/34;return ue(e,i.launch,n*n*(3-2*n))}return t>=i.from-36&&t<i.from?i.launch:t>=i.from&&t<=i.to?i.floor:e}forkProgress(t,e,i){const n=this.cityFork;if(!n||i<n.from-25||i>n.to+25)return i;const s=(t-n.x)*n.dx+(e-n.z)*n.dz,a=Math.max(0,Math.min(1,(s+20)/20,(n.length+20-s)/20)),o=a*a*(3-2*a);return ue(i,n.from+s/n.length*(n.to-n.from),o)}routeAt(t,e){const i=this.branch(t);if(!t||!i)return this.at(e);if(e<0)return this.at(i.from+e);if(e>i.length)return this.at(i.to+e-i.length);const n=Math.min(179.999999,Math.max(0,e)/i.length*180),s=Math.floor(n),a=n-s,o=i.points[s],l=i.points[s+1],c=ue(o.tx,l.tx,a),h=ue(o.tz,l.tz,a),d=Math.hypot(c,h),f=Math.min(40,i.length*.27),u=Math.min(32,i.length*.23),g=e<f?i.from+e:e>i.length-u?i.to-(i.length-e):ue(i.from+f,i.to-u,(e-f)/(i.length-f-u)),v=ue(o.x,l.x,a),m=ue(o.z,l.z,a);return{x:v,y:ue(o.y,l.y,a),z:m,tx:c/d,tz:h/d,nx:h/d,nz:-c/d,s:this.forkProgress(v,m,g),u:e,route:t,bank:0}}width(t=0){return t?this.definition.newCircuit?6.2:4.6:this.halfWidth}verge(t=0){return t?this.definition.newCircuit?2.4:1.4:this.shoulder}inDrop(t){return!!this.drop&&t>=this.drop.from&&t<=this.drop.to+15}project(t,e,i,n=0,s){const a=this.branch(n),o=a?.points??this.points,l=a?o.length-1:this.count,c=a?.length??this.length;let h=1/0,d=1/0,f=0,u=0;const g=p=>{p=a?Math.max(0,Math.min(l-1,p)):ke(p,l);const y=o[p],x=o[(p+1)%o.length],_=x.x-y.x,b=x.z-y.z,T=Math.max(0,Math.min(1,((t-y.x)*_+(e-y.z)*b)/(_*_+b*b))),A=(t-y.x-_*T)**2+(e-y.z-b*T)**2,P=this.definition.overpass&&s!==void 0?s-(y.y+(x.y-y.y)*T):0,E=A+P*P*4;E<h&&(h=E,d=A,f=p,u=T)};if(i===void 0)for(let p=0;p<l;p++)g(p);else{for(let p=-16;p<=16;p++)g(i+p);if(d>900)for(let p=0;p<l;p++)g(p)}const v=this.routeAt(n,(f+u)/l*c),m=(t-v.x)*v.nx+(e-v.z)*v.nz;return{...v,y:n?this.deckHeight(n,v.u,t,e):this.id==="orbit"?this.bloomHeight(t,e,f,v.y):v.y+Math.tan(v.bank)*m,s:this.forkProgress(t,e,v.s),index:f,distance:Math.sqrt(d),lateral:m}}drivingProjection(t,e,i){const n=this.project(t,e,i.index,i.route,i.y);if(!this.branches.length)return n;if(!n.route){if(n.distance<=this.halfWidth+this.shoulder+.15)return n;let o=n;for(const l of this.branches){const c=Math.min(85,l.length*.48);if(n.s<=l.from-12||n.s>=l.from+c+20)continue;const h=this.project(t,e,void 0,l.route,n.y);h.u<c&&h.distance+1<o.distance&&h.distance<this.width(l.route)+this.verge(l.route)+.15&&(o=h)}return o}const s=this.branch(n.route),a=Math.min(85,s.length*.48);if(n.u<a||n.u>s.length-a){const o=this.project(t,e,void 0,0,n.y),l=n.u<a&&Math.abs(this.delta(o.s,s.from))<a+20,c=n.u>s.length-a&&Math.abs(this.delta(o.s,s.to))<a+20;if((l||c)&&o.distance<this.halfWidth+this.shoulder+.15&&n.distance>this.width(n.route)+this.verge(n.route)-.15||n.u>s.length-.2&&o.s>=s.to-1)return o}return n}legalPosition(t,e,i){return t.distance<=this.width(t.route)+this.verge(t.route)+.1?!0:this.junctionClearance(t.route,t.u,e,i)<.1}selfOverlapClearance(t,e,i,n,s){if(this.id!=="orbit")return 1e3;const a=this.branch(t),o=a?.length??this.length,l=a?180:this.count;return this.project(i,n,Math.floor(e/o*l),t).distance-s}foldedCornerTransition(t,e,i,n){if(this.id!=="orbit"||t.route)return!1;const s=this.at(e);return Math.hypot(i-s.x,n-s.z)<=this.halfWidth+this.shoulder+.2&&Math.abs(Je(Math.atan2(t.tx,t.tz)-Math.atan2(s.tx,s.tz)))>.35}ahead(t,e,i=!1){if(t.route)return this.routeAt(t.route,t.u+e);const n=typeof i=="number"?i:1,s=this.branch(n);if(i&&s&&t.s>=s.from-e-10&&t.s<s.from+Math.min(85,s.length*.48)+20){if(t.s<s.from)return this.routeAt(n,Math.max(0,t.s-s.from+e));const a="lateral"in t?Number(t.lateral):0,o=this.project(t.x+t.nx*a,t.z+t.nz*a,void 0,n,t.y);return this.routeAt(n,o.u+e)}return this.at(t.s+e)}junctionClearance(t,e,i,n,s=!1){if(!this.branches.length)return 1e3;const a=this.branch(t),o=this.routeAt(t,e);if(a&&Math.min(e,a.length-e)>85)return 1e3;let l=1e3;for(const c of[0,...this.branches.map(h=>h.route)]){if(c===t||s&&t>0&&c>t)continue;const h=this.branch(c);if(!t&&h&&Math.min(Math.abs(this.delta(e,h.from)),Math.abs(this.delta(e,h.to)))>95)continue;const d=this.project(i,n,void 0,c,o.y);h&&Math.min(d.u,h.length-d.u)>85||Math.abs(d.y-o.y)>4||(l=Math.min(l,d.distance-(this.width(c)+(s?0:this.verge(c)))))}return l}deckHeight(t,e,i,n){const s=this.routeAt(t,e),a=this.branch(t);if(!t)return this.id==="orbit"?this.project(i,n,Math.floor(e/this.length*this.count)).y:s.y+Math.tan(s.bank)*((i-s.x)*s.nx+(n-s.z)*s.nz);if(!a||Math.min(e,a.length-e)>85)return s.y;const o=this.project(i,n,void 0,0,s.y),l=Math.max(0,Math.min(1,(o.distance-8.8)/9));return ue(o.y,s.y,l*l*(3-2*l))}bloomHeight(t,e,i,n){let s=0,a=0;for(let o=-24;o<=24;o++){const l=this.points[ke(i+o,this.count)],c=Math.exp(-((t-l.x)**2+(e-l.z)**2)/40.5);a+=l.y*c,s+=c}return s>1e-20?a/s:n}railOpening(t,e,i=this.halfWidth+this.shoulder){const n=this.at(t),s=n.x+n.nx*i*e,a=n.z+n.nz*i*e;return this.junctionClearance(0,t,s,a)<.35||this.selfOverlapClearance(0,t,s,a,i)<-.1}overLowerRoad(t,e,i){return!!this.definition.overpass&&this.points.some(n=>n.y<i-4&&Math.hypot(t-n.x,e-n.z)<18)}nearAnyRoad(t,e){const i=this.project(t,e);return Math.min(i.distance,...this.branches.map(n=>this.project(t,e,void 0,n.route).distance))}delta(t,e){return ke(t-e+this.length/2,this.length)-this.length/2}}function uo(r,t=!1){const e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new ge;let c=0;for(let h=0;h<r.length;++h){const d=r[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;s[u]===void 0&&(s[u]=[]),s[u].push(d.attributes[u]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const d=[];for(let f=0;f<r.length;++f){const u=r[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=r[f].attributes.position.count}l.setIndex(d)}for(const h in s){const d=Cl(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let v=0;v<a[h].length;++v)u.push(a[h][v][f]);const g=Cl(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Cl(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new He(a,e,i);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){const v=h.getComponent(f,g);o.setComponent(f+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}const ji=6;class jm{constructor(t){if(this.track=t,this.enabled=t.id==="metro",!!this.enabled){this.cars=[.18,.49,.8,.29,.6,.91].map((e,i)=>({id:i,s:t.length*e,direction:i<3?1:-1,speed:[10.5,12.5,11.5,11,12,10][i],x:0,y:0,z:0,radius:3.4,heading:0,halfWidth:1.28,halfLength:2.85,vx:0,vz:0}));for(const e of this.cars)this.placeCar(e);this.pedestrians=t.crossings.flatMap((e,i)=>[0,1].map(n=>({id:i*2+n,crossing:i,active:!1,fallTime:0,lane:0,direction:1,speed:2.3,x:0,y:0,z:0,heading:0,stride:0})))}}track;enabled;cars=[];pedestrians=[];placeCar(t){const e=this.track.at(t.s),i=t.direction*3.8;t.x=e.x+e.nx*i,t.z=e.z+e.nz*i,t.y=this.track.deckHeight(0,e.s,t.x,t.z),t.heading=Math.atan2(e.tx*t.direction,e.tz*t.direction),t.vx=e.tx*t.direction*t.speed,t.vz=e.tz*t.direction*t.speed}placePedestrian(t){const e=this.track.at(this.track.crossings[t.crossing]),i=(t.id%2-.5)*1.5;t.x=e.x+e.nx*t.lane+e.tx*i,t.z=e.z+e.nz*t.lane+e.tz*i,t.y=e.y,t.heading=Math.atan2(e.nx*t.direction,e.nz*t.direction)}fillEmptyCrossings(){for(let t=0;t<this.track.crossings.length;t++){const e=this.pedestrians[t*2],i=this.pedestrians[t*2+1];if(e.active||i.active)continue;const n=[e,i].filter(o=>o.fallTime<=0);if(!n.length)continue;const s=Math.min(n.length,wn()<.32?2:1),a=wn()<.5?-1:1;for(let o=0;o<s;o++){const l=n[o];l.active=!0,l.fallTime=0,l.direction=a,l.lane=-a*(11.8+o*.6),l.speed=2.3+wn()*.7,l.stride=0,this.placePedestrian(l)}}}step(t,e){if(this.enabled){for(const i of this.cars)i.s=ke(i.s+i.direction*i.speed*t,this.track.length),this.placeCar(i);for(const i of this.pedestrians){if(i.fallTime>0){i.fallTime=Math.max(0,i.fallTime-t);continue}if(i.active){if(i.lane+=i.direction*i.speed*t,i.stride+=i.speed*t,i.lane*i.direction>12.1){i.active=!1;continue}this.placePedestrian(i)}}this.fillEmptyCrossings()}}contacts(t,e){if(this.enabled){for(const i of this.pedestrians)if(i.active)for(const n of t){const s=n.body;if(n.finishTime!==null||Math.abs(s.y-i.y)>2.4)continue;const a=Math.sin(s.heading),o=Math.cos(s.heading),l=i.x-s.x,c=i.z-s.z;if(!(Math.abs(l*a+c*o)>2.15||Math.abs(l*o-c*a)>1.55)){i.active=!1,i.fallTime=1,i.heading=s.heading,e.hit(s,0,0);break}}this.fillEmptyCrossings()}}snapshot(){const t=e=>Math.round(e*1e3)/1e3;return{cars:this.cars.map(e=>t(e.s)),pedestrians:this.pedestrians.map(e=>[e.active?1:0,t(e.lane),e.direction,t(e.speed),t(e.stride),t(e.fallTime),t(e.heading)])}}accept(t){if(!(!this.enabled||t.cars?.length!==ji||t.pedestrians?.length!==6)){for(let e=0;e<ji;e++)Number.isFinite(t.cars[e])&&(this.cars[e].s=t.cars[e],this.placeCar(this.cars[e]));for(let e=0;e<6;e++){const i=t.pedestrians[e];if(i?.length!==7||!i.every(Number.isFinite))continue;const n=this.pedestrians[e];[n.lane,n.direction,n.speed,n.stride,n.fallTime]=i.slice(1,6),n.active=i[0]===1&&n.fallTime<=0,this.placePedestrian(n),n.fallTime>0&&(n.heading=i[6])}}}extrapolate(t){if(this.enabled){t=fe(t,0,.05);for(const e of this.cars)e.s=ke(e.s+e.direction*e.speed*t,this.track.length),this.placeCar(e);for(const e of this.pedestrians){if(e.fallTime>0){e.fallTime=Math.max(0,e.fallTime-t);continue}e.active&&(e.lane+=e.direction*e.speed*t,e.stride+=e.speed*t,this.placePedestrian(e))}}}}class Km{constructor(t){this.scene=t,this.group.userData.dynamic=!0,this.bodies=this.pool(new ie(2.5,1.05,5.6),ji,16777215),this.roofs=this.pool(new ie(2.18,.18,2.85),ji,16777215),this.glass=this.pool(new ie(2.08,.7,2.72),ji,2641250),this.wheels=this.pool(new qe(.62,.62,.32,10).rotateZ(Math.PI/2),ji*4,2307133);const e=uo([new ie(.6,.3,.12).translate(-.77,0,0),new ie(.6,.3,.12).translate(.77,0,0)]);this.lamps=this.pool(e,ji*2,16777215,!0),this.torsos=this.pool(new ie(.63,.76,.38),6,16777215),this.heads=this.pool(new en(.27,1),6,15780261),this.legs=this.pool(new ie(.21,.72,.24),12,3360860),this.arms=this.pool(new ie(.17,.62,.19),12,16777215),t.add(this.group)}scene;group=new Pe;pedestrianPose=new Jt;partMatrix=new Bt;dummy=new Jt;hidden=new Bt().makeScale(0,0,0);color=new Ct;bodies;roofs;glass;wheels;lamps;torsos;heads;legs;arms;pool(t,e,i,n=!1){const s=n?new Ce({color:i}):new ae({color:i}),a=new ii(t,s,e);a.userData.dynamic=!0,a.frustumCulled=!1,a.instanceMatrix.setUsage(as);for(let o=0;o<e;o++)a.setMatrixAt(o,this.hidden),a.setColorAt(o,this.color.set(16777215));return this.group.add(a),a}part(t,e,i,n,s,a,o=16777215,l=0){this.dummy.position.set(i,n,s),this.dummy.rotation.set(l,a,0,"YXZ"),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),t.setMatrixAt(e,this.dummy.matrix),t.setColorAt(e,this.color.setHex(o))}pedestrianPart(t,e,i,n,s,a=16777215,o=0){this.dummy.position.set(i,n,s),this.dummy.rotation.set(o,0,0),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.partMatrix.multiplyMatrices(this.pedestrianPose.matrix,this.dummy.matrix),t.setMatrixAt(e,this.partMatrix),t.setColorAt(e,this.color.setHex(a))}update(t){const e=t.traffic;if(this.group.visible=e.enabled,!e.enabled)return;const i=[7977170,14985100,13950659,12232919,10470836,14008719];for(const s of e.cars){const{id:a,x:o,y:l,z:c,heading:h}=s,d=Math.sin(h),f=Math.cos(h),u=f,g=-d;this.part(this.bodies,a,o,l+1,c,h,i[a]),this.part(this.roofs,a,o-d*.3,l+2.22,c-f*.3,h,i[a]),this.part(this.glass,a,o-d*.15,l+1.82,c-f*.15,h);for(let v=0;v<4;v++){const m=v%2?1:-1,p=v<2?1.8:-1.8;this.part(this.wheels,a*4+v,o+u*m*1.25+d*p,l+.64,c+g*m*1.25+f*p,h)}for(const v of[-1,1])this.part(this.lamps,a*2+(v===1?0:1),o+d*v*2.86,l+1.08,c+f*v*2.86,h,v===1?16772540:15890545)}const n=[15049093,8830661,12363473,10861437,14859632,9547482];for(const s of e.pedestrians){const{id:a,x:o,y:l,z:c,heading:h}=s;if(!s.active&&s.fallTime<=0){this.torsos.setMatrixAt(a,this.hidden),this.heads.setMatrixAt(a,this.hidden);for(let v=0;v<2;v++)this.legs.setMatrixAt(a*2+v,this.hidden),this.arms.setMatrixAt(a*2+v,this.hidden);continue}const d=s.fallTime>0,f=d?Math.min(1,(1-s.fallTime)/.18):0,u=f*f*(3-2*f)*Math.PI/2,g=d?0:Math.sin(s.stride*4)*.45;this.pedestrianPose.position.set(o,l+Math.sin(u)*.24,c),this.pedestrianPose.rotation.set(u,h,0,"YXZ"),this.pedestrianPose.updateMatrix(),this.pedestrianPart(this.torsos,a,0,1.15,0,n[a]),this.pedestrianPart(this.heads,a,0,1.85,0);for(let v=0;v<2;v++){const m=v?1:-1;this.pedestrianPart(this.legs,a*2+v,.17*m,.43,0,16777215,g*m),this.pedestrianPart(this.arms,a*2+v,.43*m,1.12,0,n[a],-g*m)}}for(const s of[this.bodies,this.roofs,this.glass,this.wheels,this.lamps,this.torsos,this.heads,this.legs,this.arms])s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0)}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{if(t instanceof Ot){t.geometry.dispose();for(const e of Array.isArray(t.material)?t.material:[t.material])e.dispose()}})}}function Wa(r){const t=new Map;for(const i of[...r.children]){if(!(i instanceof Ot)||Array.isArray(i.material))continue;const n=t.get(i.material)??[];n.push(i),t.set(i.material,n)}const e=[];for(const[i,n]of t){if(n.length<2)continue;const s=n.map(o=>(o.updateMatrix(),o.geometry.clone().applyMatrix4(o.matrix))),a=uo(s);s.forEach(o=>o.dispose()),a&&(n.forEach(o=>r.remove(o)),r.add(new Ot(a,i)),e.push(a))}return e}const Pl=(r,t,e)=>({x:r.x+(t.x-r.x)*e,y:r.y+(t.y-r.y)*e,z:r.z+(t.z-r.z)*e,u:r.u+(t.u-r.u)*e});function Ll(r,t){const e=[];for(let i=0;i<r.length;i++){const n=r[i],s=r[(i+1)%r.length],a=t(n),o=t(s);if(a>=0&&e.push(n),a>=0!=o>=0){let l=0,c=1;for(let h=0;h<12;h++){const d=(l+c)/2;t(Pl(n,s,d))>=0==a>=0?l=d:c=d}e.push(Pl(n,s,(l+c)/2))}}return e}function yc(r,t){const e=new ge;e.setAttribute("position",new Yt(r,3)),e.computeVertexNormals();const i=new Ot(e,new ae({color:t,side:Te}));return i.receiveShadow=!0,i}function Zs(r,t){for(let e=1;e<t.length-1;e++)for(const i of[t[0],t[e],t[e+1]])r.push(i.x,i.y,i.z)}function Qn(r,t,e,i,n,s=!1,a=0){const o=[],l=a?r.branch(a).length:r.length,c=a?180:r.count,h=(f,u)=>{const g=r.routeAt(a,f),v=g.x+g.nx*u,m=g.z+g.nz*u;return{x:v,y:s&&u===e?-1.1:r.deckHeight(a,f,v,m)+i,z:m,u:f}},d=r.id==="orbit"&&!s?Math.ceil(Math.abs(e-t)/2):1;for(let f=0;f<c;f++)for(let u=0;u<d;u++){const g=f/c*l,v=(f+1)/c*l;if(Math.abs(r.routeAt(a,g).y-r.routeAt(a,v).y)>=9||s&&r.definition.overpass&&Math.max(r.routeAt(a,g).y,r.routeAt(a,v).y)>6.5)continue;if(s){const b=h((g+v)/2,t);if(r.junctionClearance(a,b.u,b.x,b.z)<3)continue}const m=t+(e-t)*u/d,p=t+(e-t)*(u+1)/d;let y=[h(g,m),h(v,m),h(v,p),h(g,p)];const x=!a&&!s&&t*e>0&&Math.min(Math.abs(t),Math.abs(e))>=r.halfWidth-.001,_=!!a&&t*e>0&&Math.min(Math.abs(t),Math.abs(e))>=r.width(a)-.001;if((a||s||x)&&(y=Ll(y,b=>r.junctionClearance(a,b.u,b.x,b.z,!!a&&!_||x)+.06)),s||x||_){const b=r.width(a)+(s?r.verge(a):0);y=Ll(y,T=>r.selfOverlapClearance(a,T.u,T.x,T.z,b)+.045)}if(r.id==="orbit"&&!s)for(const b of y)b.y=r.deckHeight(a,b.u,b.x,b.z)+i;Zs(o,y)}return yc(o,n)}function Kr(r,t=0,e=.08,i=1.2,n=10215638){const s=[],a=_c(t);for(const o of r.barriers.segments){if(o.route!==t)continue;const l=[o.a,o.b].map(c=>{const h=r.routeAt(t,c.u);return[[-1,e],[-1,e+i],[1,e+i],[1,e]].map(([d,f])=>({...c,x:c.x+h.nx*a*.5*d,y:c.y+f,z:c.z+h.nz*a*.5*d}))});for(let c=0;c<4;c++)Zs(s,[l[0][c],l[1][c],l[1][(c+1)%4],l[0][(c+1)%4]]);Zs(s,l[0]),Zs(s,l[1])}return yc(s,n)}function Zm(r){const t=new Pe,e=gs(86219),i=[],n=[],s=(l,c,h,d,f,u,g,v=0,m=!1)=>(m?n:i).push({x:l,y:c,z:h,sx:d,sy:f,sz:u,color:g,yaw:v});if(r.definition.theme==="city"){for(const c of r.crossings){const h=r.at(c),d=Math.atan2(h.tx,h.tz);for(let f=-7.7;f<=7.8;f+=1.7)s(h.x+h.nx*f,h.y+.065,h.z+h.nz*f,.95,.035,5,15855847,d);for(const f of[-1,1]){const u=h.x+h.nx*14.2*f,g=h.z+h.nz*14.2*f;s(u,h.y+2,g,.18,4,.18,5269107,0,!0),s(u,h.y+4.1,g,1.5,1.5,.14,4357039,d),s(u,h.y+4.1,g+.1,1,1,.12,14938347,d),s(u,h.y+.13,g,2.7,.26,7.5,12700617,d)}}const l=[11978452,13811892,10730182,13029827,11580106];for(let c=-220;c<=205;c+=38)for(let h=-225;h<=215;h+=38){if(r.nearAnyRoad(c,h)<29)continue;const d=15+e()*33,f=16+e()*6,u=16+e()*5,g=l[Math.floor(e()*l.length)];s(c,d/2-1,h,f,d,u,g),s(c,d-.7,h,f+1,.8,u+1,14674147);for(let v=5;v<d-3;v+=5)s(c,v,h+u*.5+.035,f*.77,2.3,.1,5075334),s(c+f*.5+.035,v,h,.1,2.3,u*.77,5075334);s(c,2.7,h+u*.5+.8,f*.85,.35,2,7576488),d>28&&s(c+3,d+2.5,h,1,6,1,7440532)}for(const c of[0,...r.branches.map(h=>h.route)]){const h=c?r.branch(c).length:r.length;for(let d=0;d<h;d+=8){const f=r.routeAt(c,d),u=Math.atan2(f.tx,f.tz);for(const g of[-1,1]){const v=r.width(c)+r.verge(c)+2.2,m=f.x+f.nx*v*g,p=f.z+f.nz*v*g;r.junctionClearance(c,d,m,p)<3||r.nearAnyRoad(m,p)<r.width(c)+r.verge(c)+.5||s(m,f.y-.02,p,3.2,.28,7.7,12043460,u)}}}}else if(r.definition.theme==="speedway"){s(0,-.7,0,105,.8,330,7252616),s(0,-.1875,0,65,.225,255,8501142),s(0,.025,0,42,.2,2,12769225);for(const l of[-1,1])for(let c=0;c<5;c++)for(let h=0;h<16;h++){const d=l*(111+c*2.5),f=-112+h*15;if(r.nearAnyRoad(d,f)<18)continue;const u=1.5+c*1.3;s(d,(u-1.12)/2,f,2.4,u+1.12,14.5,c%2?4350856:9152191);for(let g=0;g<5;g++)s(d,1.9+c*1.3,f-5+g*2.4,.75,.8,.7,[9030095,15124363,14214107,12882853][(h+g+c)%4])}for(const l of[-1,1])for(const c of[-130,0,130])s(l*134,12,c,.65,26,.65,8623784,0,!0),s(l*134,-1,c,1.6,.24,1.6,10333113),s(l*134,25,c,8,1.1,2.1,15068393);s(40,-.61,0,14,1.02,70,8623784),s(40,3.4,0,14,7,70,11978967),s(40,7.3,0,18,.8,75,15002597);for(let l=0;l<7;l++)s(31.8,3.2,-27+l*9,.1,3.4,5.5,3497079);s(0,6,-190,28,10,2,2903141),s(0,6,-188.9,24,6,.12,11258578);for(const l of[-10,10])s(l,-.06,-190,.65,2.12,.65,8623784,0,!0)}const a=new Jt,o=new Ct;for(const[l,c]of[[i,new ie(1,1,1)],[n,new qe(.5,.5,1,8)]]){if(!l.length){c.dispose();continue}const h=new ii(c,new ae({color:16777215}),l.length);h.receiveShadow=!0,l.forEach((d,f)=>{a.position.set(d.x,d.y,d.z),a.scale.set(d.sx,d.sy,d.sz),a.rotation.set(0,d.yaw,0),a.updateMatrix(),h.setMatrixAt(f,a.matrix),h.setColorAt(f,o.setHex(d.color))}),t.add(h)}return t}function Jm(r){const t=r.definition.points[0][0]/-155,e=new Pe,i=gs(60417),n=[],s=[],a=[],o=v=>10+3*Math.sin(v/r.length*Math.PI*6)+2*Math.cos(v/r.length*Math.PI*14),l=(v,m,p)=>[v.x+v.nx*m,v.y+p,v.z+v.nz*m],c=(v,m,p,y,x)=>{if([v,m,p,y].some(b=>r.nearAnyRoad(b[0],b[2])<13.15))return;const _=new Ct(x);for(const b of[v,m,p,v,p,y])n.push(...b),s.push(_.r,_.g,_.b)},h=Math.ceil(r.length/4);for(let v=0;v<h;v++){const m=r.at(v/h*r.length),p=r.at((v+1)/h*r.length),y=o(m.s),x=o(p.s),_=l(m,-14.5,-.8),b=l(p,-14.5,-.8),T=l(m,-16.4,y*.48),A=l(p,-16.4,x*.48),P=l(m,-19.5,y),E=l(p,-19.5,x);c(_,b,A,T,v%4===0?8491140:7372663),c(T,A,E,P,v%3===0?10332312:9016971),c(P,E,l(p,-28,x),l(m,-28,y),6455133),c(l(m,13.3,-.3),l(p,13.3,-.3),l(p,26,-7),l(m,26,-7),6388825),c(l(m,26,-7),l(p,26,-7),[p.x+p.nx*40,-1.2,p.z+p.nz*40],[m.x+m.nx*40,-1.2,m.z+m.nz*40],7243111)}const d=new ge;d.setAttribute("position",new Yt(n,3)),d.setAttribute("color",new Yt(s,3)),d.computeVertexNormals(),e.add(new Ot(d,new ae({vertexColors:!0,side:Te,flatShading:!0})));for(const[v,m,p,y,x]of[[-15,-20,55,92,7636851],[-63,-15,34,64,7439980],[18,35,43,73,8163443]]){const _=new Ot(new kn(p*t,y,9,4),new ae({color:x,flatShading:!0}));_.position.set(v*t,y/2-1.2,m*t),e.add(_)}for(let v=30;v<r.length;v+=21){const m=r.at(v),p=m.x-m.nx*23.5,y=m.z-m.nz*23.5;r.nearAnyRoad(p,y)>19&&a.push({x:p,y:m.y+o(v),z:y,height:8+i()*4});const x=m.x+m.nx*35,_=m.z+m.nz*35;r.nearAnyRoad(x,_)>27&&a.push({x,y:Math.max(-1.2,m.y-13),z:_,height:9+i()*6})}const f=new ii(new qe(.35,.55,1,6),new ae({color:8087888}),a.length),u=new ii(new kn(1,1,7),new ae({color:16777215,flatShading:!0}),a.length*2),g=new Jt;return a.forEach((v,m)=>{g.position.set(v.x,v.y+v.height*.24,v.z),g.scale.set(1,v.height*.48,1),g.updateMatrix(),f.setMatrixAt(m,g.matrix);for(let p=0;p<2;p++)g.position.set(v.x,v.y+v.height*(p?.79:.56),v.z),g.scale.set(v.height*(p?.23:.31),v.height*.57,v.height*(p?.23:.31)),g.updateMatrix(),u.setMatrixAt(m*2+p,g.matrix),u.setColorAt(m*2+p,new Ct(p?4550230:3562824))}),e.add(f,u),e}class Qm{constructor(t){this.scene=t}scene;groups=new Map;add(t,e,i,n,s,a,o,l,c=0,h=0,d=0){if(!this.groups.has(t)){const f=t==="box"?new ie(1,1,1):t==="cone"?new kn(.5,1,6):t==="cylinder"?new qe(.5,.5,1,8):t==="sphere"?new en(.5,1):new ms(.5,6,4);this.groups.set(t,{geometry:f,items:[]})}this.groups.get(t).items.push({position:new D(e,i,n),scale:new D(s,a,o),rotation:new Xe(d,c,h,"YXZ"),color:new Ct(l)})}finish(){const t=new Bt,e=new sn;for(const{geometry:i,items:n}of this.groups.values()){const s=new ii(i,new ae({color:16777215}),n.length);n.forEach((a,o)=>{e.setFromEuler(a.rotation),t.compose(a.position,e,a.scale),s.setMatrixAt(o,t),s.setColorAt(o,a.color)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,this.scene.add(s)}}}class Dl{constructor(t,e){this.scene=t,this.path=e;const i=new Set(t.children),n=gs(3381),s=new Qm(t),a=[16171118,15239532,7650499,16049322,15379090,10268382,15987679],o=e.definition.palette,l=e.definition.theme==="mountain",c=e.definition.theme==="city",h=e.definition.theme==="speedway",d=o?.sky??(e.id==="skyfall"?11982575:e.id==="terraces"?12182751:10805229);this.clearSky=d,t.background=new Ct(d),t.fog=new ir(d,210,760);const f=new hc(16777215,7968375,2.45);this.hemisphere=f,t.add(f);const u=new fc(16774879,2.4);u.position.set(-80,180,80),this.sun=u,t.add(u),this.water=new Ot(new Ui(4e3,4e3),new ae({color:4768722})),this.water.rotation.x=-Math.PI/2,this.water.position.y=-3,t.add(this.water);const g=(y,x,_,b)=>{const T=new Ot(new qe(1,1,3,80),new ae({color:b}));T.scale.set(y,1,x),T.position.set(20,_-1.5,50),t.add(T)},v=e.id!=="coast";g(v?325:245,v?390:300,-1.7,l?8161648:16311728),g(v?300:220,v?370:281,-1.12,o?.grass??(e.id==="skyfall"?9024931:9752192)),t.add(Qn(e,-e.halfWidth,e.halfWidth,.02,o?.road??5466998));for(const y of[-1,1])t.add(Qn(e,y*e.halfWidth,y*(e.halfWidth+e.shoulder),0,o?.grass??10408577)),t.add(Qn(e,y*(e.halfWidth+e.shoulder),y*(e.halfWidth+e.shoulder+2.5),0,o?.grass??9094009,!0));for(let y=0;y<e.length;y+=2){const x=e.at(y),_=Math.atan2(x.tx,x.tz);for(const b of[-1,1]){const T=e.halfWidth-.25;e.railOpening(y,b,T)||s.add("box",x.x+x.nx*T*b,e.deckHeight(0,y,x.x+x.nx*T*b,x.z+x.nz*T*b)+.045,x.z+x.nz*T*b,.6,.1,2.08,Math.floor(y/4)%2?15921120:16744796,_,x.bank)}Math.floor(y)%10<4&&s.add("box",x.x,x.y+.055,x.z,.17,.025,1.85,12372165,_)}t.add(Kr(e,0,.08,c?.32:1.2,o?.rail??10215638));for(const y of e.branches){const x=y.route;t.add(Qn(e,-e.width(x),e.width(x),.04,c?o.road:12622439,!1,x));for(const _ of[-1,1])t.add(Qn(e,_*e.width(x),_*(e.width(x)+e.verge(x)),0,c?o.grass:15255703,!1,x));t.add(Kr(e,x,.08,c?.32:1.1,c?o.rail:15844738)),c||t.add(Kr(e,x,-.65,.65,9204566));for(let _=18;_<y.length-18;_+=3){const b=e.routeAt(x,_),T=Math.atan2(b.tx,b.tz);if(e.junctionClearance(x,_,b.x,b.z)>0&&(Math.floor(_)%15<3&&s.add("box",b.x,b.y+.08,b.z,c?.17:.7,.04,1.8,c?12372165:16116924,T),!c&&Math.floor(_)%24<3))for(const A of[-1,1]){const P=b.x+b.nx*4.5*A,E=b.z+b.nz*4.5*A,M=e.id==="orbit"?Math.min(...[-.8,.8].flatMap(R=>[-.8,.8].map(I=>e.deckHeight(x,_,P+R,E+I))))-.12:b.y;e.overLowerRoad(P,E,b.y)||s.add("box",P,(M-1.5)/2,E,1.4,M+1.1,1.4,12167823,T)}}if(!c){const _=e.at(y.from-18),b=this.sign("SHORTCUT  ↗",16762224,11,2.5);b.position.set(_.x,_.y+6,_.z),b.rotation.y=Math.atan2(-_.tx,-_.tz),t.add(b)}}if(c){const y=e.at(e.shortcut.from-25),x=this.sign("CENTRAL  /  EAST SUPPLY",12178139,21,2.7);x.position.set(y.x,y.y+6.5,y.z),x.rotation.y=Math.atan2(-y.tx,-y.tz),t.add(x)}if((c||h)&&t.add(Zm(e)),l&&t.add(Jm(e)),v&&!l)for(let y=35;y<e.length;y+=30){const x=e.at(y);if(!(x.y<8))for(const _ of[-1,1]){const b=x.x+x.nx*7*_,T=x.z+x.nz*7*_,A=e.id==="orbit"?Math.min(...[-1.1,1.1].flatMap(P=>[-1.1,1.1].map(E=>e.deckHeight(0,y,b+P,T+E))))-.12:x.y;e.overLowerRoad(b,T,x.y)||s.add("box",b,(A-1.2)/2,T,2.2,A+1.2,2.2,e.id==="skyfall"?14212580:13939336)}}if(e.id==="orbit"){const y=e.definition.points[0][0]/-180,x=-100*y,_=-75*y;s.add("cylinder",x,.5,_,30*y,3,30*y,15191785),s.add("cylinder",x,3.4,_,1.3,5,1.3,8371335),s.add("sphere",x,6.3,_,3,3,3,16570476);for(let T=0;T<6;T++){const A=T/6*Math.PI*2;s.add("sphere",x+Math.cos(A)*3,6,_+Math.sin(A)*3,3.8,1.8,3.8,15775961)}for(let T=0;T<10;T++){const A=T/10*Math.PI*2;s.add("sphere",x+Math.cos(A)*10*y,2.3,_+Math.sin(A)*10*y,2,2,2,13146335)}const b=this.sign("BLOOM RIDGE / GARDEN",14270965,18,3);b.position.set(x,11,_),t.add(b)}if(e.id==="sunport"){const y=e.definition.points[0][0]/-105;for(let x=0;x<9;x++){const _=-149*y,b=(-160+x*39)*y;if(!(e.nearAnyRoad(_,b)<22)){s.add("box",_,2,b,13,6,26,[16760680,7390680,15900563][x%3]);for(let T=-4;T<=4;T+=2)s.add("box",_+T,2,b+13.05,.3,5.5,.1,16377281)}}}if(e.definition.overpass){const y=e.points.reduce((_,b)=>_.y>b.y?_:b),x=this.sign("CROSSWIND / UPPER DECK",11392767,19,2.6);x.position.set(y.x,y.y+6,y.z),x.rotation.y=Math.atan2(-y.tx,-y.tz),t.add(x)}if(e.drop){const y=e.drop,x=e.at(y.from-.5),_=Math.atan2(x.tx,x.tz),b=this.sign("SKY DROP  ↓",16760165,15,3);b.position.set(x.x-x.tx*16,x.y+7,x.z-x.tz*16),b.rotation.y=_+Math.PI,t.add(b);for(const T of[-1,1])s.add("box",x.x+x.nx*11.5*T,x.y+2.8,x.z+x.nz*11.5*T,.7,5.5,.7,16755037,_);s.add("box",x.x,x.y+.12,x.z,17.6,.24,1.6,16763750,_);for(let T=y.from;T<y.to;T+=6){const A=e.at(T);s.add("box",A.x,A.y-.5,A.z,26,1,7,4812165,Math.atan2(A.tx,A.tz))}}for(const y of[64,390,750])for(let x=0;x<3;x++){const _=e.at(y+x*1.6),b=Math.atan2(_.tx,_.tz),T=e.at(_.s-.5),A=e.at(_.s+.5),P=-Math.atan(A.y-T.y);s.add("box",_.x,_.y+.04,_.z,6,.035,.65,14482007,b,_.bank,P)}for(let y=0;y<(l||c||h?0:88);y++){const x=y/88*e.length,_=e.at(x),b=y%2?1:-1,T=19+n()*8,A=_.x+_.nx*T*b,P=_.z+_.nz*T*b;e.nearAnyRoad(A,P)<17||this.palm(s,A,-1,P,7+n()*5,n()*6.28)}for(let y=0;y<(l||c||h?0:200);y++){const x=-160+n()*370,_=-185+n()*430,b=e.project(x,_);if(e.nearAnyRoad(x,_)<25||b.distance>85||((x-20)/210)**2+((_-50)/265)**2>.96)continue;const T=7+n()*7,A=7+n()*6,P=7+n()*17,E=a[Math.floor(n()*a.length)],M=Math.round(n()*3)*Math.PI/2;s.add("box",x,P/2-1,_,T,P,A,E,M),s.add("box",x,P-.6,_,T+1,.7,A+1,16249052,M),s.add("box",x,P+1,_,T*.7,2.5,A*.6,E,M);for(let R=3;R<P-1;R+=3.3)for(let I=-1;I<=1;I++)s.add("box",x+I*T*.26,R,_+A/2+.025,1.15,1.65,.1,4557204);s.add("box",x,3.1,_+A/2+.9,T*.85,.4,2.6,y%2?16748385:7587790),s.add("box",x,.8,_+A/2+.08,1.8,3.3,.12,3896704)}for(let y=0;y<(l?16:34);y++){const x=e.at(50+y*37),_=y%2?1:-1,b=x.x+x.nx*16*_,T=x.z+x.nz*16*_;if(e.junctionClearance(0,x.s,b,T)<1.5)continue;const A=h?-1.12:x.y,P=x.y+7;s.add("cylinder",b,(A+P)/2,T,.2,P-A,.2,4549235),h&&s.add("box",b,A+.12,T,.8,.24,.8,8623784),s.add("sphere",b,x.y+7.1,T,1.1,.55,1.1,16774607)}for(let y=0;y<20;y++){const x=e.at(110+y*61),_=(e.halfWidth+2.5)*(y%2?1:-1),b=x.x+x.nx*_,T=x.z+x.nz*_;if(e.junctionClearance(0,x.s,b,T)<1.5)continue;const A=e.deckHeight(0,x.s,b,T),P=Math.atan2(x.tx,x.tz),E=e.at(x.s-1),M=e.at(x.s+1),R=e.deckHeight(0,E.s,E.x+E.nx*_,E.z+E.nz*_),I=e.deckHeight(0,M.s,M.x+M.nx*_,M.z+M.nz*_),z=-Math.atan((I-R)/2),B=new D(0,1,0).applyEuler(new Xe(z,P,x.bank,"YXZ"));s.add("cone",b+B.x*.655,A+B.y*.655,T+B.z*.655,.72,1.05,.72,16745298,P,x.bank,z),s.add("box",b+B.x*.065,A+B.y*.065,T+B.z*.065,.87,.13,.87,15657180,P,x.bank,z),this.obstacles.push({x:b,y:A,z:T,radius:.35})}for(let y=0;y<38;y++){const x=n()*Math.PI*2,_=20+Math.cos(x)*(235+n()*14),b=50+Math.sin(x)*(287+n()*10);s.add("sphere",_,-1.8,b,6+n()*9,3+n()*7,6+n()*10,10795183)}for(let y=0;y<15;y++){const x=-700+n()*1400,_=-700+n()*1400;for(let b=0;b<4;b++)s.add("sphere",x+b*11,80+n()*12,_,29,9,15,15333623)}for(let y=0;y<90;y++){const x=-600+n()*1200,_=-500+n()*1100;((x-20)/250)**2+((_-50)/305)**2<1.1||s.add("box",x,-2.92,_,4+n()*12,.03,.28,8837598)}const m=e.at(e.length-70);for(let y=0;y<3;y++)for(let x=0;x<13;x++){const _=(x-6)*1.6,b=18+y*1.4,T=m.x+m.nx*b+m.tx*_,A=m.z+m.nz*b+m.tz*_,P=m.y+y*.9+.3;s.add("box",T,h?(P-1.12)/2:m.y+y*.9,A,1.4,h?P+1.12:.6,1.2,15387024,Math.atan2(m.tx,m.tz)),s.add("sphere",T,m.y+(h?.725:1.1)+y*.9,A,.75,.85,.75,a[(x+y)%a.length]),s.add("sphere",T,m.y+(h?1.375:1.75)+y*.9,A,.47,.47,.47,15916730)}this.gate=this.makeGate(),t.add(this.gate);const p=l?[[e.length*.18,"MISTPINE / CLIMB",12702363],[e.length*.53,"RIDGELINE / SUMMIT",15780744],[e.length*.8,"FOREST / DESCENT",11523012]]:c?[[e.length*.4,"NEON / HARBOR",10865624],[e.length*.66,"CITY / CROSSING",12899013],[e.length*.9,"DOWNTOWN",12175834]]:h?[[e.length*.2,"AZURE / SPEEDWAY",11323368],[e.length*.55,"BANKED / TURN",12637153],[e.length*.85,"CHASE / THE LINE",11061471]]:[[230,"SUNNY SIDE",16751462],[620,"COAST CLUB",5555658],[1060,"TIDEBREAK",15268697]];for(const[y,x,_]of p){const b=e.at(y),T=this.sign(x,_,13,4.5);if(T.position.set(b.x+b.nx*18,b.y+6,b.z+b.nz*18),T.rotation.y=Math.atan2(-b.nx,-b.nz),t.add(T),h){const A=T.position.y-2.25;for(const P of[-1,1]){const E=T.position.x+b.tx*4.8*P,M=T.position.z+b.tz*4.8*P;s.add("cylinder",E,(A-1.12)/2,M,.32,A+1.12,.32,7440791),s.add("box",E,-1,M,1,.24,1,10530747)}}}s.finish();for(const y of[...t.children])i.has(y)||this.group.add(y);t.add(this.group)}scene;path;obstacles=[];group=new Pe;water;hemisphere;sun;clearSky=10805229;gate;signTextures=[];setWeather(t){const e=t==="sunset",i=t==="rain",n=i?1583945:e?15311248:this.clearSky;this.scene.background.setHex(n),this.scene.fog=new ir(n,i?105:210,i?510:760),this.hemisphere.color.setHex(i?11257838:e?16766653:16777215),this.hemisphere.groundColor.setHex(i?3424856:e?10250352:7968375),this.hemisphere.intensity=i?1.55:e?1.9:2.45,this.sun.color.setHex(i?10467823:e?16756333:16774879),this.sun.intensity=i?.8:e?2.1:2.4,this.sun.position.set(-80,e?40:180,80),this.water.material.color.setHex(i?2573667:e?10978467:4768722)}dispose(){this.scene.remove(this.group);const t=new Set,e=new Set;this.group.traverse(i=>{if(i instanceof Ot){t.add(i.geometry);for(const n of Array.isArray(i.material)?i.material:[i.material])e.add(n)}}),t.forEach(i=>i.dispose()),e.forEach(i=>i.dispose()),this.signTextures.forEach(i=>i.dispose())}palm(t,e,i,n,s,a){t.add("cylinder",e,i+s*.5,n,.63,s,.63,12687718,0,.06);for(let o=0;o<6;o++){const l=a+o*Math.PI/3;t.add("sphere",e+Math.cos(l)*2,i+s+.2,n+Math.sin(l)*2,1.3,.65,6.8,o%2?4368499:6340221,-l+Math.PI/2,.12)}t.add("sphere",e,i+s,n,1.3,1,1.3,8873542)}sign(t,e,i,n){const s=document.createElement("canvas");s.width=1024,s.height=256;const a=s.getContext("2d");a.fillStyle="#"+e.toString(16).padStart(6,"0"),a.fillRect(0,0,1024,256),a.fillStyle="#164b54",a.textAlign="center",a.textBaseline="middle",a.font="italic 900 112px Arial",a.fillText(t,512,139,940);const o=new ls(s);return o.colorSpace=Me,this.signTextures.push(o),new Ot(new Ui(i,n),new Ce({map:o,side:Te}))}makeGate(){const t=new Pe,e=this.path.at(0);t.position.set(e.x,e.y,e.z),t.rotation.y=Math.atan2(e.tx,e.tz);const i=new ae({color:16750182});for(const h of[-11,11]){const d=new Ot(new ie(1.6,10,1.6),i);d.position.set(h,5,0),t.add(d)}const n=new Ot(new ie(24,2.5,1.4),i);n.position.y=10,t.add(n);const s=this.sign("TIDEBREAK",15268697,18,2.5);s.position.set(0,10,-.73),s.rotation.y=Math.PI,t.add(s);const a=this.sign("TIDEBREAK",15268697,18,2.5);a.position.set(0,10,.73),t.add(a);const o=new ae({color:16118239}),l=new ae({color:2509140}),c=new ie(1.1,.035,1.05);for(let h=0;h<16;h++)for(let d=0;d<3;d++){const f=new Ot(c,(h+d)%2?l:o);f.position.set((h-7.5)*1.1,.09,(d-1)*1.05),t.add(f)}for(let h=0;h<8;h++){const d=new Ot(new ie(2.4,.025,.15),o);d.position.set(h%2?-2.4:2.4,.08,-9-Math.floor(h/2)*5.7),t.add(d)}return Wa(t),t}}const Pn=[{id:"ripple",name:"漣漪",subtitle:"RIPPLE · 均衡型",color:15268697,speed:35,accel:17,turn:1,stats:[4,4,4]},{id:"comet",name:"珊瑚彗星",subtitle:"COMET · 極速型",color:16740430,speed:37,accel:15.7,turn:.91,stats:[5,3,3]},{id:"skipper",name:"海風",subtitle:"SKIPPER · 靈巧型",color:5562367,speed:33.5,accel:18.8,turn:1.1,stats:[3,5,5]}],rr=()=>({throttle:0,brake:0,steer:0,drift:!1,nitro:!1,item:!1,itemRight:!1}),ds=1;class Mc{constructor(t,e){this.spec=t,this.track=e,this.projection=e.project(0,0)}spec;track;x=0;y=0;z=0;vx=0;vz=0;heading=0;steering=0;speed=0;drifting=!1;driftDirection=0;driftCharge=0;driftLevel=0;nitroCharges=1;nitroMeter=0;nitroTime=0;turboTime=0;turboLevel=0;boostEvent=0;collisionEvent=0;resetEvent=0;miniTurboEvent=0;nitroLatch=!1;impactCooldown=0;offroad=!1;surface="ROAD";progress=0;projection;safeS=0;distanceTravelled=0;vy=0;airborne=!1;pitch=0;roll=0;landingEvent=0;route=0;routeU=0;itemType=0;itemCharges=0;itemLatch=!1;itemCooldown=0;itemTypeRight=0;itemChargesRight=0;itemLatchRight=!1;itemCooldownRight=0;lastPickupType=0;lastPickupSlot=0;shieldEvent=0;shieldImpactTime=0;shieldTime=0;itemBoostTime=0;pulseTime=0;hitTime=0;itemEvent=0;pickupEvent=0;spinPhase=0;spinEvent=0;hitSlide=0;wetRoad=!1;fixed=!1;bumpUntil=0;ghost=!1;soft=!1;pushX=0;pushZ=0;place(t,e=0){const i=this.track.at(t);this.x=i.x+i.nx*e,this.z=i.z+i.nz*e,this.y=this.track.deckHeight(0,i.s,this.x,this.z),this.roll=i.bank,this.vy=0,this.airborne=!1,this.pitch=0,this.route=0,this.routeU=i.s,this.hitTime=0,this.spinPhase=0,this.hitSlide=0,this.heading=Math.atan2(i.tx,i.tz),this.vx=0,this.vz=0,this.speed=0,this.steering=0,this.drifting=!1,this.driftCharge=0,this.driftLevel=0,this.nitroTime=0,this.turboTime=0,this.projection=this.track.project(this.x,this.z,Math.floor(i.s/this.track.length*this.track.count),0,this.y),this.progress=i.s,this.safeS=i.s}reset(t=this.safeS,e=0){this.place(t,e),this.resetEvent++}awardNitro(t){for(this.nitroMeter+=t;this.nitroMeter>=1&&this.nitroCharges<3;)this.nitroCharges++,this.nitroMeter--;this.nitroCharges===3&&(this.nitroMeter=Math.min(this.nitroMeter,.99))}get boost(){return this.nitroTime>0||this.turboTime>0||this.itemBoostTime>0}step(t,e,i=[],n=1){if(this.impactCooldown=Math.max(0,this.impactCooldown-e),this.nitroTime=Math.max(0,this.nitroTime-e),this.turboTime=Math.max(0,this.turboTime-e),this.shieldImpactTime=Math.max(0,this.shieldImpactTime-e),this.itemCooldownRight=Math.max(0,this.itemCooldownRight-e),this.itemCooldown=Math.max(0,this.itemCooldown-e),this.shieldTime=Math.max(0,this.shieldTime-e),this.itemBoostTime=Math.max(0,this.itemBoostTime-e),this.pulseTime=Math.max(0,this.pulseTime-e),this.hitTime>0){if(this.hitTime=Math.max(0,this.hitTime-e),this.spinPhase=Math.min(1,this.spinPhase+e/ds),this.hitSlide){this.steering=0,this.nitroLatch=t.nitro,this.stepSlideHit(e,i);return}this.vx=this.vz=this.speed=this.steering=0,this.nitroLatch=t.nitro,this.updateHeight(e,0);return}t.nitro&&!this.nitroLatch&&this.nitroCharges>0&&this.nitroTime<=0&&this.speed>3&&(this.nitroCharges--,this.nitroTime=2.1,this.boostEvent++),this.nitroLatch=t.nitro;const s=this.track.drivingProjection(this.x,this.z,this.projection);this.projection=s,this.offroad=Math.abs(s.lateral)>this.track.width(s.route),this.surface=this.airborne?"AIR":this.offroad?"GRASS":s.route?"SHORTCUT":"ROAD";const a=this.x,o=this.z;let l=this.vx*Math.sin(this.heading)+this.vz*Math.cos(this.heading);const c=this.spec.handlingScale??1,h=this.spec.driftChargeScale??1;this.steering=Yi(this.steering,t.steer,7*c,e),!this.drifting&&t.drift&&Math.abs(t.steer)>.2&&l>11&&!this.airborne&&!this.offroad&&(this.drifting=!0,this.driftDirection=Math.sign(t.steer),this.driftCharge=0),this.drifting&&(!t.drift||l<7||this.offroad||this.airborne)&&(this.driftLevel>0&&!this.offroad&&(this.turboLevel=this.driftLevel,this.turboTime=[0,.65,1.15,1.8][this.driftLevel],this.miniTurboEvent++,this.boostEvent++,this.awardNitro([0,.2,.36,.55][this.driftLevel])),this.drifting=!1,this.driftCharge=0,this.driftLevel=0),this.drifting&&(this.driftCharge=fe(this.driftCharge+e*(.88+Math.abs(this.steering)*.12)*h,0,3.5),this.driftLevel=this.driftCharge>=2.7?3:this.driftCharge>=1.65?2:this.driftCharge>=.65?1:0,this.awardNitro(e*.065*h));const f=(1.82-.57*fe(Math.abs(l)/this.spec.speed,0,1.5))*this.spec.turn*(this.airborne?.48:1),u=this.drifting?this.steering*.88+this.driftDirection*.32:this.steering;this.heading=Je(this.heading+u*f*fe(Math.abs(l)/9,0,1)*Math.sign(l||1)*e);const g=Math.sin(this.heading),v=Math.cos(this.heading),m=v,p=-g;l=this.vx*g+this.vz*v;let y=this.vx*m+this.vz*p,x=this.spec.speed*n;this.itemBoostTime>0?x*=1.42:this.nitroTime>0?x*=1.36:this.turboTime>0&&(x*=1+[0,.1,.17,.25][this.turboLevel]),this.offroad&&(x*=.9),t.throttle>0&&(l+=this.spec.accel*t.throttle*(this.boost?1.6:1)*e);const _=this.track.ahead(s,3),b=this.track.routeAt(s.route,s.u-3),T=Math.max(-.45,Math.min(.45,(_.y-b.y)/6));!this.airborne&&!this.track.inDrop(s.s)&&(l-=9.8*T*(g*s.tx+v*s.tz)*e),t.brake>0&&(l>1?l=Math.max(-.2,l-31*c*c*t.brake*e):l-=this.spec.accel*.54*e),!t.throttle&&!t.brake&&(l*=Math.exp(-.43*e)),l>x&&(l=Yi(l,x,this.offroad?1.5:2.7,e)),l=fe(l,-8,x+1.5);const A=(this.airborne?2:this.drifting?2.4:this.offroad?7.6:9.5)*(this.wetRoad&&!this.airborne?.78:1),P=this.drifting?-this.driftDirection*Math.abs(l)*.19:this.wetRoad&&!this.airborne?-this.steering*Math.abs(l)*.045:0,E=this.airborne?0:Math.abs(s.bank);y=Yi(y,P,A*c*(1+E*.65),e),y=fe(y,-14,14),this.vx=g*l+m*y,this.vz=v*l+p*y;const M=Math.max(1,Math.ceil(Math.hypot(this.vx,this.vz)*e/.5));for(let R=0;R<M;R++)this.x+=this.vx*e/M,this.z+=this.vz*e/M,this.resolveWorldContacts(i);this.projection=this.track.drivingProjection(this.x,this.z,s),this.progress=this.projection.s,this.route=this.projection.route,this.routeU=this.projection.u,this.updateHeight(e,T),this.speed=Math.hypot(this.vx,this.vz),this.distanceTravelled+=Math.hypot(this.x-a,this.z-o),(this.projection.distance>30||!Number.isFinite(this.x+this.z+this.vx+this.vz))&&this.reset()}stepSlideHit(t,e){const i=this.track.drivingProjection(this.x,this.z,this.projection),n=this.x,s=this.z,a=Math.sin(this.heading),o=Math.cos(this.heading),l=Math.hypot(this.vx,this.vz),c=(this.vx*o-this.vz*a)*Math.exp(-2.2*t),h=Math.sqrt(Math.max(0,l*l-c*c))*Math.sign(this.vx*a+this.vz*o||1);this.vx=a*h+o*c,this.vz=o*h-a*c;const d=Math.max(1,Math.ceil(l*t/.5));for(let g=0;g<d;g++)this.x+=this.vx*t/d,this.z+=this.vz*t/d,this.resolveWorldContacts(e);this.projection=this.track.drivingProjection(this.x,this.z,i),this.progress=this.projection.s,this.route=this.projection.route,this.routeU=this.projection.u,this.offroad=Math.abs(this.projection.lateral)>this.track.width(this.route);const f=this.track.ahead(this.projection,3),u=this.track.routeAt(this.route,this.routeU-3);this.speed=Math.hypot(this.vx,this.vz),this.updateHeight(t,fe((f.y-u.y)/6,-.45,.45)),this.surface=this.airborne?"AIR":this.offroad?"GRASS":this.route?"SHORTCUT":"ROAD",this.distanceTravelled+=Math.hypot(this.x-n,this.z-s),(this.projection.distance>30||!Number.isFinite(this.x+this.z+this.vx+this.vz))&&this.reset()}resolveWorldContacts(t=[]){let e=this.track.barriers.resolve(this),i=!1;const n=Math.sin(this.heading),s=Math.cos(this.heading);for(const a of t)if(!(a.y!==void 0&&Math.abs(this.y-a.y)>2.5)&&!(Math.abs(this.x-a.x)>a.radius+2.1||Math.abs(this.z-a.z)>a.radius+2.1)){if(a.halfLength!==void 0&&a.halfWidth!==void 0&&a.heading!==void 0){const o=Math.sin(a.heading),l=Math.cos(a.heading),c=this.x-a.x,h=this.z-a.z;let d=1/0,f=0,u=0,g=!1;for(const[v,m]of[[n,s],[s,-n],[o,l],[l,-o]]){const p=1.85*Math.abs(n*v+s*m)+1.34*Math.abs(s*v-n*m),y=a.halfLength*Math.abs(o*v+l*m)+a.halfWidth*Math.abs(l*v-o*m),x=c*v+h*m,_=p+y-Math.abs(x);if(_<=0){g=!0;break}if(_<d){d=_;const b=Math.sign(x)||1;f=v*b,u=m*b}}if(!g){this.x+=f*(d+.005),this.z+=u*(d+.005),i=!0;const v=(this.vx-(a.vx??0))*f+(this.vz-(a.vz??0))*u;v<0&&(e=Math.max(e,-v),this.vx-=f*v*1.15,this.vz-=u*v*1.15)}continue}for(const o of[-.45,0,.7]){const l=this.x+n*o-a.x,c=this.z+s*o-a.z,h=a.radius+1.25,d=Math.hypot(l,c);if(d>=h)continue;const f=d>.001?l/d:-n,u=d>.001?c/d:-s;this.x+=f*(h-d+.01),this.z+=u*(h-d+.01),i=!0;const g=this.vx*f+this.vz*u;g<0&&(e=Math.max(e,-g),this.vx-=f*g*1.4,this.vz-=u*g*1.4)}}i&&(e=Math.max(e,this.track.barriers.resolve(this))),e>1.2&&this.impactCooldown<=0&&(this.collisionEvent++,this.impactCooldown=.25),this.speed=Math.hypot(this.vx,this.vz)}updateHeight(t,e){const i=this.projection.y,n=Je(this.heading-Math.atan2(this.projection.tx,this.projection.tz));this.roll=Yi(this.roll,this.airborne?0:this.projection.bank*Math.cos(n),12,t),!this.airborne&&this.y-i>.8&&(this.airborne=!0,this.vy=0),this.airborne?(this.vy-=18*t,this.y+=this.vy*t,this.y<=i&&(this.y=i,this.vy=0,this.airborne=!1,this.landingEvent++)):(this.y=i,this.vy=0),this.pitch=Yi(this.pitch,this.airborne?Math.max(-.2,Math.min(.58,-Math.atan2(this.vy,Math.max(12,this.speed)))):-Math.atan(e),this.airborne?2.6:7,t)}}function Il(r,t=0){const e=new Set;for(let i=0;i<r.length;i++)for(let n=i+1;n<r.length;n++){const s=r[i],a=r[n],o=a.x-s.x,l=a.z-s.z,c=Math.hypot(o,l),h=2.3;if(c>=h||Math.abs(s.y-a.y)>2.8||s.hitTime>0||a.hitTime>0||s.shieldImpactTime>0||a.shieldImpactTime>0||s.shieldTime>0&&a.itemBoostTime>0||a.shieldTime>0&&s.itemBoostTime>0||s.fixed&&a.fixed||s.ghost||a.ghost)continue;const d=c>.001?o/c:1,f=c>.001?l/c:0,u=(h-c)*.5,g=(a.vx-s.vx)*d+(a.vz-s.vz)*f;let v=g<0?-g*.56:0;const m=s.fixed?s:a.fixed?a:null;m&&v>0&&(t<m.bumpUntil?v=0:m.bumpUntil=t+.15),s.fixed?s.soft&&(s.x-=d*u,s.z-=f*u,s.pushX-=d*u,s.pushZ-=f*u):(e.add(s),s.x-=d*u,s.z-=f*u,s.vx-=d*v,s.vz-=f*v),a.fixed?a.soft&&(a.x+=d*u,a.z+=f*u,a.pushX+=d*u,a.pushZ+=f*u):(e.add(a),a.x+=d*u,a.z+=f*u,a.vx+=d*v,a.vz+=f*v)}for(const i of e)i.resolveWorldContacts()}class tg{constructor(t,e,i="normal"){this.index=t,this.skill=e,this.difficulty=i,this.lane=(t%3-1)*2.8,this.random=gs(1103+t*117),this.nitroWait=1.5+this.random()*2}index;skill;difficulty;steering=0;stuck=0;recoveries=0;resetSeen=0;recoveryTime=0;avoidShortcut=!1;lane;random;nitroWait;controls(t,e,i,n,s=0,a=[]){const o=t.track,l=t.progress,c=s?1:In[this.difficulty].pace,h=c>1;t.resetEvent!==this.resetSeen&&(this.resetSeen=t.resetEvent,this.avoidShortcut=!0),this.stuck=t.hitTime<=0&&t.speed<2?this.stuck+i:0,this.recoveryTime=Math.max(0,this.recoveryTime-i),this.stuck>.6&&this.recoveryTime===0&&Math.abs(t.projection.lateral)>o.width(t.route)*.75&&(this.recoveryTime=1.65,this.stuck=0),this.stuck>3.2&&(t.reset(t.safeS,this.lane*.4),this.stuck=0,this.recoveries++);let d=0;for(const M of e){if(t===M||Math.abs(t.y-M.y)>3)continue;const R=o.delta(M.progress,l);R>0&&R<16&&Math.abs(M.projection.lateral-t.projection.lateral)<2.8&&(d=t.projection.lateral<=M.projection.lateral?-2.4:2.4)}let f=!1;for(const M of a){if(Math.hypot(M.x-t.x,M.z-t.z)>45)continue;const R=o.project(M.x,M.z,t.projection.index,t.route,t.y),I=o.delta(R.s,l);R.distance>o.width(t.route)||I<0||I>34||Math.abs(R.lateral-t.projection.lateral)<3.8&&(d=R.lateral>=0?-4.5:4.5,I<12&&(f=!0))}const u=o.definition.theme==="city"&&!s?this.index%(o.branches.length+1):!s&&!this.avoidShortcut&&this.skill>=.65&&this.index%3!==0,g=t.projection.route?2.3:4.6,v=this.recoveryTime>0?0:fe(this.lane*.72+d+Math.sin(n*(.25+this.skill*.12)+this.index*1.7)*(1.1-this.skill*.6),-g,g),m=this.recoveryTime>0?6:fe(5.5+t.speed/c*(.36+(1-this.skill)*.1),8,22),p=o.ahead(t.projection,m,u),y=Math.atan2(p.x+p.nx*v-t.x,p.z+p.nz*v-t.z),x=Je(y-t.heading);if(this.recoveryTime>.85)return{throttle:0,brake:1,steer:-Math.sign(x),drift:!1,nitro:!1};const _=fe(x*(2.6+this.skill*.4),-1,1);let b=0;for(const M of[7,18,30,40]){const R=o.ahead(t.projection,M-5,u),I=o.ahead(t.projection,M+5,u);b=Math.max(b,Math.abs(Je(Math.atan2(I.tx,I.tz)-Math.atan2(R.tx,R.tz)))/10)}const T=fe(Math.sqrt((17.6+this.skill*8.2)*1.1*c*c*(t.wetRoad?.9:1)/Math.max(.008,b)),15,t.spec.speed*(t.boost?1.35:1));let A=Math.min(t.spec.speed*(.97+this.skill*.03)*(t.boost?1.35:1),T)*(1-(1-this.skill)*.025*Math.sin(n*.9+this.index*2));Math.abs(x)>.6&&(A*=.82),t.offroad&&(A=Math.min(A,13)),t.projection.route&&(A=Math.min(A,(25+this.skill*4)*c)),h&&o.drop&&(t.airborne||o.inDrop(l)||o.delta(o.drop.from,l)>0&&o.delta(o.drop.from,l)<65)&&(A=Math.min(A,34)),f&&(A=Math.min(A,12)),s&&(A=Math.min(A,s)),this.steering=Yi(this.steering,_,(7+this.skill*6)*c,i);const P=!s&&t.hitTime<=0&&t.nitroTime<=0&&!t.nitroLatch&&t.speed>3&&t.nitroCharges>0;this.nitroWait=Math.max(0,this.nitroWait-i);let E=this.difficulty==="easy"&&P;return this.difficulty!=="easy"&&this.nitroWait===0&&(this.nitroWait=1.5+this.random(),E=P&&!t.boost&&!t.offroad&&!t.airborne&&this.recoveryTime===0&&t.speed>18&&b<.028&&Math.abs(x)<.3&&this.random()<In[this.difficulty].nitroChance),{throttle:t.speed<A+1?1:0,brake:t.speed>A+2?fe((t.speed-A)*.2,0,1):0,steer:this.steering,drift:!1,nitro:E}}}const ar=[{name:"空道具槽",short:"?",description:"穿過問號補給方塊取得隨機道具，最多攜帶兩種",color:11982037},{name:"三連脈衝",short:"Ⅲ",description:"每次發射一枚脈衝球，共三發；命中立即消失，對手停車旋轉一圈",color:6546687},{name:"泡膠陷阱",short:"◉",description:"放下泡膠，對手碰到會停車旋轉一圈；保留 18 秒",color:16760678},{name:"疾風電池",short:"»",description:"啟動 3 秒加速；衝撞對手會使對手停車旋轉一圈",color:15465320},{name:"潮汐護罩",short:"◇",description:"抵擋一次道具攻擊後消失；未被擊中時最多保留 5 秒",color:9618943},{name:"環形震波",short:"◎",description:"使 13 公尺內對手停車旋轉一圈，並清除附近陷阱與脈衝",color:14983935},{name:"追風飛彈",short:"➤",description:"追蹤前方對手；命中保留車速、隨機向左右彈開並旋轉一圈，最多飛行 6 秒",color:16740766},{name:"雙芯渦輪",short:"Ⅱ",description:"可分兩次使用，每次提供 2 秒推進；不能無限疊加",color:8449980},{name:"震盪地雷",short:"✹",description:"接觸引爆，使 8 公尺內車輛保留車速、隨機左右滑移並旋轉一圈",color:16751462},{name:"榜首香蕉皮",short:"#1",description:"向榜首前方落下香蕉皮；自己領先時改攻擊第二名。碰到會左右滑開旋轉，護罩可擋一次",color:16769899},{name:"榜首柵欄",short:"▥",description:"向榜首前方落下柵欄；自己領先時改攻擊第二名。碰到會車速歸零、原地旋轉一圈，護罩可擋一次",color:16755810}];function bc(r,t){if(r.hitSlide=t,r.steering=0,t){const e=Math.hypot(r.vx,r.vz),i=Math.sin(r.heading),n=Math.cos(r.heading),s=Math.min(9,e*.32)*r.hitSlide,a=Math.sqrt(Math.max(0,e*e-s*s))*Math.sign(r.vx*i+r.vz*n||1);r.vx=i*a+n*s,r.vz=n*a-i*s,r.speed=e}else r.vx=r.vz=r.speed=0,r.nitroTime=r.turboTime=r.itemBoostTime=0;r.hitTime=ds,r.spinPhase=0,r.spinEvent++,r.collisionEvent++,r.drifting=!1,r.driftCharge=0,r.driftLevel=0}class eg{constructor(t,e=!0){this.track=t,this.enabled=e,this.boxPositions=t.itemLocations.flatMap(({route:i,u:n})=>{const s=t.routeAt(i,n),a=Math.min(6,t.width(i)-1.8);return[-1,-.5,0,.5,1].map(o=>{const l=s.x+s.nx*o*a,c=s.z+s.nz*o*a;return{x:l,y:t.deckHeight(i,n,l,c)+1.15,z:c,s:s.s,route:i}})}),this.boxes=this.boxPositions.map(()=>0)}track;enabled;boxes;objects=[];serial=0;random=wn;picked=0;hits=0;used=new Set;boxPositions;snapshot(){return{boxes:[...this.boxes],objects:this.objects.map(t=>({...t})),serial:this.serial,enabled:this.enabled}}accept(t){this.boxes=t.boxes,this.objects=t.objects,this.serial=t.serial,this.enabled=t.enabled!==!1}tryPickup(t,e){const i=t.body;if(!(!this.enabled||i.itemType&&i.itemTypeRight||i.hitTime>0||i.airborne||t.finishTime!==null))for(let n=0;n<this.boxPositions.length;n++){const s=this.boxPositions[n];if(i.route!==s.route||e<this.boxes[n]||Math.abs(this.track.delta(i.progress,s.s))>5||Math.abs(i.y+1-s.y)>2.2||Math.hypot(i.x-s.x,i.z-s.z)>1.9)continue;!i.itemType&&i.itemTypeRight&&(i.itemType=i.itemTypeRight,i.itemCharges=i.itemChargesRight,i.itemCooldown=i.itemCooldownRight,i.itemTypeRight=i.itemChargesRight=0);const a=1+Math.floor(this.random()*(ar.length-1)),o=a===1?3:a===7?2:1,l=i.itemType!==0;l?(i.itemTypeRight=a,i.itemChargesRight=o):(i.itemType=a,i.itemCharges=o),this.boxes[n]=e+5,i.lastPickupType=a,i.lastPickupSlot=l?1:0,i.pickupEvent++,this.picked++;break}}use(t,e,i,n=0){const s=t.body,a=n?s.itemTypeRight:s.itemType,o=n?s.itemChargesRight:s.itemCharges;if(!this.enabled||!a||!o||(n?s.itemCooldownRight:s.itemCooldown)>0||s.hitTime>0||t.finishTime!==null)return!1;n?(s.itemChargesRight--,s.itemCooldownRight=.32):(s.itemCharges--,s.itemCooldown=.32),s.itemEvent++,this.used.add(a);const l=Math.sin(s.heading),c=Math.cos(s.heading);if(a===1||a===2||a===6||a===8){const h=e.filter(g=>g.id!==t.id&&g.finishTime===null&&this.track.delta(g.body.progress,s.progress)>1&&this.track.delta(g.body.progress,s.progress)<(a===6?180:100)).sort((g,v)=>this.track.delta(g.body.progress,s.progress)-this.track.delta(v.body.progress,s.progress))[0],d=a===1||a===6,f=d?3:-3.6,u=this.track.drivingProjection(s.x+l*f,s.z+c*f,s.projection);this.objects.push({id:++this.serial,kind:a,owner:t.id,x:s.x+l*f,y:s.y+(d?1:.18),z:s.z+c*f,vx:l*58,vz:c*58,life:a===6?6:a===1?4.5:18,age:0,route:u.route,u:u.u,target:h?.id??-1}),this.objects.length>56&&this.objects.shift()}else if(a===9||a===10){const h=e.filter(f=>f.finishTime===null).sort((f,u)=>u.distance-f.distance||f.id-u.id),d=h[0]?.id===t.id?h[1]:h[0];if(d){const f=d.body,u=this.track.ahead(f.projection,Math.max(12,Math.min(32,f.speed*.7+4))),g=Math.max(-this.track.width(u.route)+2,Math.min(this.track.width(u.route)-2,f.projection.lateral));this.objects.push({id:++this.serial,kind:a,owner:t.id,x:u.x+u.nx*g,y:u.y+12.25,z:u.z+u.nz*g,vx:0,vz:0,life:18,age:0,route:u.route,u:u.u,target:d.id,groundY:this.track.deckHeight(u.route,u.u,u.x+u.nx*g,u.z+u.nz*g)+.25,yaw:Math.atan2(u.tx,u.tz)}),this.objects.length>56&&this.objects.shift()}}else if(a===3||a===7)s.itemBoostTime=Math.max(s.itemBoostTime,a===7?2:3),s.boostEvent++;else if(a===4)s.shieldTime=5;else if(a===5){s.pulseTime=.65;for(const h of e)h.id!==t.id&&h.finishTime===null&&Math.hypot(s.x-h.body.x,s.z-h.body.z)<13&&Math.abs(s.y-h.body.y)<4&&this.hit(h.body,0,0);this.objects=this.objects.filter(h=>Math.hypot(h.x-s.x,h.z-s.z)>13||Math.abs(h.y-s.y)>4)}return n?s.itemChargesRight||(s.itemTypeRight=0):s.itemCharges||(s.itemType=0),!0}hit(t,e,i,n=!1){return t.hitTime>0?!1:t.shieldTime>0?(t.shieldTime=0,t.shieldEvent++,t.shieldImpactTime=.08,!1):(bc(t,n?this.random()<.5?-1:1:0),this.hits++,!0)}contactsActive=new Set;contacts(t){if(!this.enabled)return;const e=new Set;for(let i=0;i<t.length;i++)for(let n=i+1;n<t.length;n++){const s=t[i],a=t[n];if(s.finishTime!==null||a.finishTime!==null||Math.abs(s.body.y-a.body.y)>2.8||Math.hypot(s.body.x-a.body.x,s.body.z-a.body.z)>2.65)continue;const o=`${i}:${n}`;if(e.add(o),this.contactsActive.has(o))continue;const l=a.body.itemBoostTime>0&&a.body.speed>8,c=s.body.itemBoostTime>0&&s.body.speed>8;l&&this.hit(s.body,0,0),c&&this.hit(a.body,0,0)}this.contactsActive=e}control(t,e,i,n){const s=t.body;if(!this.enabled)return;let a=e.item===!0,o=e.itemRight===!0;if(!t.human||t.disconnected){const l=i.some(h=>h.id!==t.id&&h.finishTime===null&&Math.hypot(h.body.x-s.x,h.body.z-s.z)<15),c=(n+t.id*.31)%2.3<.1;a=s.itemType>0&&s.itemCooldown<=0&&c&&(s.itemType!==5||l),o=s.itemTypeRight>0&&s.itemCooldownRight<=0&&c&&!a&&(s.itemTypeRight!==5||l)}a&&!s.itemLatch&&this.use(t,i,n,0),o&&!s.itemLatchRight&&this.use(t,i,n,1),s.itemLatch=a,s.itemLatchRight=o}step(t,e,i){if(this.enabled){for(const n of e)this.tryPickup(n,i);for(const n of this.objects){if(n.life-=t,n.age+=t,n.life<=0||(n.kind===9||n.kind===10)&&(n.y=(n.groundY??n.y)+12*Math.max(0,1-(n.age/.6)**2),n.age<.6))continue;const s=n.x,a=n.y,o=n.z,l=n.kind===1||n.kind===6;if(l){n.u+=(n.kind===6?68:58)*t;let d=this.track.routeAt(n.route,n.u);n.route&&d.route===0&&(n.route=0,n.u=d.s);const f=e.find(m=>m.id===n.target),u=f?this.track.branch(f.body.route):null;n.kind===6&&u&&!n.route&&Math.abs(this.track.delta(d.s,u.from))<12&&(n.route=u.route,n.u=Math.max(0,d.s-u.from),d=this.track.routeAt(n.route,n.u));const g=f&&f.finishTime===null?Math.max(-this.track.width(n.route)+1.5,Math.min(this.track.width(n.route)-1.5,f.body.projection.lateral)):0,v=1-Math.exp(-t*(n.kind===6?22:15));n.x+=(d.x+d.nx*g-n.x)*v,n.z+=(d.z+d.nz*g-n.z)*v,n.y=this.track.deckHeight(n.route,n.u,n.x,n.z)+1,n.vx=(n.x-s)/t,n.vz=(n.z-o)/t}let c,h=1/0;for(const d of e){if(d.finishTime!==null||n.kind!==9&&n.kind!==10&&d.id===n.owner&&n.age<1.2)continue;const f=d.body,u=n.x-s,g=n.z-o,v=u*u+g*g,m=v>0?Math.max(0,Math.min(1,((f.x-s)*u+(f.z-o)*g)/v)):0;if(!(Math.abs(f.y+.6-(a+(n.y-a)*m))>2.5)){if(n.kind===10){const p=n.yaw??0,y=f.x-n.x,x=f.z-n.z;if(Math.abs(y*Math.cos(p)-x*Math.sin(p))>3.25||Math.abs(y*Math.sin(p)+x*Math.cos(p))>1.5)continue}else if(Math.hypot(f.x-s-u*m,f.z-o-g*m)>(l?2:2.25))continue;m<h&&(h=m,c=d)}}if(c){if(n.kind===8){for(const d of e)d.finishTime===null&&Math.abs(d.body.y-n.y)<3&&Math.hypot(d.body.x-n.x,d.body.z-n.z)<8&&this.hit(d.body,0,0,!0);c.body.pulseTime=.65}else this.hit(c.body,0,0,n.kind===6||n.kind===9);n.life=0}}this.objects=this.objects.filter(n=>n.life>0)}}}const ig=["YOU","珊瑚 CORA","岬角 KAI","泡泡 BUB","燈塔 LUMI","波點 DOT","海鹽 SALT","小錨 ANKR"],ng=[15268697,16739405,6016255,13538815,16296252,10214789,16749001,15988204];class sg{constructor(t,e=[]){this.track=t,this.obstacles=e,this.reset(0,!1)}track;obstacles;state="menu";racers=[];time=0;countdown=3.8;paused=!1;totalLaps=3;checkpointCount=32;finishOrder=[];finishDeadline=null;finishGrace=.35;bumps={n:0,sum:0,max:0};get finishRemaining(){return this.finishDeadline===null?null:Math.max(0,this.finishDeadline-this.time)}selected=0;localPlayerId=0;roster=null;bodies=[];online=!1;settings={...nn};items;traffic;collisionObstacles=[];racer(t){return this.racers.find(e=>e.id===t)}get player(){return this.racers.find(t=>t.id===this.localPlayerId)??this.racers[0]}configure(t,e){this.roster=t,this.localPlayerId=e,this.online=!0,this.reset(t.find(i=>i.id===e)?.kart??0,!0)}reset(t=this.selected,e=!0){this.settings=An(this.settings),this.selected=t,this.state=e?"countdown":"menu",this.time=0,this.countdown=3.8,this.paused=!1,this.finishOrder=[],this.finishDeadline=null,this.traffic=new jm(this.track),this.collisionObstacles=[...this.obstacles,...this.traffic.cars],this.items=new eg(this.track,this.settings.itemsEnabled!==!1);const i=this.settings.aiEnabled===!1?this.roster?.filter(n=>n.human).map(n=>n.id)??[0]:Array.from({length:8},(n,s)=>s);this.racers=i.map((n,s)=>{const a=this.roster?.find(u=>u.id===n),o=a?a.human:n===0,l=[1,1,.93,.86,.79,.72,.65,.57][n],c=Pn[a?.kart??(n===0?t:n%3)],h=o?1:In[this.settings.difficulty].pace,d=new Mc({...c,speed:c.speed*(o?1:(.99+l*.05)*h),accel:c.accel*(o?1:1.02+l*.07),turn:c.turn*h,handlingScale:h,color:o?c.color:ng[n]},this.track);d.wetRoad=this.settings.activeWeather==="rain";const f=-9-Math.floor(s/2)*5.7;return d.place(f,s%2===0?-2.4:2.4),{id:n,name:a?.name??ig[n],color:d.spec.color,body:d,ai:new tg(n,l,this.settings.difficulty),completedLaps:0,nextCheckpoint:0,distance:f,lastS:d.progress,lastX:d.x,lastZ:d.z,lastRoute:0,finishTime:null,checkpointTimes:[],lastLapTime:0,bestLap:1/0,resetSeen:0,human:o,disconnected:a?.disconnected??!1,simulated:!1,assisted:!o||!!a?.disconnected,pads:new Set,owned:!1}}),this.bodies=this.racers.map(n=>n.body)}step(t,e,i=!1,n){if(this.paused||this.state==="menu"||this.state==="finished")return;if(this.state==="countdown"){this.countdown-=t,this.countdown<=0&&(this.state="racing",this.countdown=0);return}this.time+=t,this.traffic.step(t,this.time);const s=this.bodies;for(const a of this.racers){if((a.disconnected||i&&a.id===this.localPlayerId)&&(a.assisted=!0),a.finishTime!==null){a.body.nitroTime=a.body.turboTime=a.body.itemBoostTime=0,a.body.step(a.ai.controls(a.body,[],t,this.time,21,this.traffic.cars),t,this.collisionObstacles);continue}if(a.owned){this.stepMirror(a,n?.get(a.id)??rr(),t);continue}const o=a.human&&!a.disconnected?a.id===this.localPlayerId?i?a.ai.controls(a.body,s,t,this.time,0,this.traffic.cars):e:n?.get(a.id)??rr():a.ai.controls(a.body,s,t,this.time,0,this.traffic.cars),l=this.racers[0].distance-a.distance,c=a.human?1:1+fe(l/2e3,-.018,.025);this.items.control(a,o,this.racers,this.time),a.body.step(o,t,this.collisionObstacles,c),this.boostPads(a)}if(this.traffic.contacts(this.racers,this.items),this.items.contacts(this.racers),Il(this.finishOrder.length?this.racers.filter(a=>a.finishTime===null).map(a=>a.body):s,this.time),this.traffic.enabled)for(const a of s)a.fixed||a.resolveWorldContacts(this.collisionObstacles);this.items.step(t,this.racers,this.time);for(const a of this.racers)a.owned||this.updateProgress(a,t);this.racers.every(a=>a.finishTime!==null)?this.state="finished":this.finishDeadline!==null&&this.time>=this.finishDeadline+(this.racers.some(a=>a.owned&&a.finishTime===null)?this.finishGrace:0)&&this.finishEstimated()}boostPads(t){for(let e=0;e<3;e++){const i=[64,390,750][e],n=t.completedLaps*3+e;Math.abs(this.track.delta(t.body.progress,i))<2.8&&Math.abs(t.body.projection.lateral)<3.4&&t.body.speed>10&&!t.pads.has(n)&&(t.body.awardNitro(.35),t.pads.add(n))}}stepMirror(t,e,i){const n=t.body;this.items.control(t,e,this.racers,this.time),n.shieldImpactTime=Math.max(0,n.shieldImpactTime-i),n.itemCooldownRight=Math.max(0,n.itemCooldownRight-i),n.itemCooldown=Math.max(0,n.itemCooldown-i),n.shieldTime=Math.max(0,n.shieldTime-i),n.itemBoostTime=Math.max(0,n.itemBoostTime-i),n.pulseTime=Math.max(0,n.pulseTime-i),n.hitTime>0&&(n.hitTime=Math.max(0,n.hitTime-i),n.spinPhase=Math.min(1,n.spinPhase+i/ds))}stepOwner(t,e){const i=this.player,n=i.body;if(i.finishTime!==null)n.nitroTime=n.turboTime=n.itemBoostTime=0,n.step(i.ai.controls(n,[],e,this.time,21,this.traffic.cars),e,this.collisionObstacles);else{n.step(t,e,this.collisionObstacles,1),this.boostPads(i);const s=n.x,a=n.z;Il(this.finishOrder.length?this.racers.filter(l=>l.finishTime===null).map(l=>l.body):this.bodies,this.time);const o=Math.hypot(n.x-s,n.z-a);o>0&&(this.bumps.n++,this.bumps.sum+=o,this.bumps.max=Math.max(this.bumps.max,o))}this.traffic.enabled&&n.resolveWorldContacts(this.collisionObstacles),this.updateProgress(i,e)}finishEstimated(){const t=this.totalLaps*this.track.length,e=this.racers.filter(n=>n.finishTime===null).sort((n,s)=>s.distance-n.distance||n.id-s.id);let i=Math.max(this.time,...this.racers.map(n=>n.finishTime??0));for(const n of e){const s=fe(Math.max(0,n.distance)/Math.max(1,this.time),8,n.body.spec.speed*1.1),a=this.time+Math.max(0,t-n.distance)/s;n.finishTime=Math.max(i+.01,a),i=n.finishTime,n.simulated=!0,n.completedLaps=this.totalLaps,n.nextCheckpoint=this.totalLaps*this.checkpointCount+1,n.distance=t,this.finishOrder.push(n.id)}this.state="finished"}updateProgress(t,e){const i=t.body;if(t.finishTime!==null)return;if(t.resetSeen!==i.resetEvent){this.resetRacer(t);return}const n=this.track.drivingProjection(i.x,i.z,i.projection);i.projection=n,i.progress=n.s,i.route=n.route,i.routeU=n.u;const s=this.track.delta(n.s,t.lastS),a=Math.hypot(i.x-t.lastX,i.z-t.lastZ),o=n.route!==t.lastRoute,l=o&&a<Math.max(1,i.speed*e*2+.2)&&Math.abs(s)<Math.min(32,this.track.length/this.checkpointCount*.8)&&this.track.junctionClearance(n.route,n.u,i.x,i.z)<1.2,c=!o&&a<Math.max(1,i.speed*e*2+.2)&&Math.abs(s)<Math.min(32,this.track.length/this.checkpointCount*.8)&&this.track.foldedCornerTransition(n,t.lastS,i.x,i.z),h=l||c;if(t.lastS=n.s,t.lastX=i.x,t.lastZ=i.z,t.lastRoute=n.route,t.finishTime!==null)return;if(Math.abs(s)>Math.max(4,i.speed*e*2+1)&&!h||!this.track.legalPosition(n,i.x,i.z)){this.resetRacer(t);return}const d=t.distance;t.distance+=s;const f=this.track.length/this.checkpointCount,u=t.nextCheckpoint*f;if(s>0&&d<u&&t.distance>=u&&Math.abs(this.track.delta(n.s,u))<(h?Math.abs(s)+1:4)&&(t.checkpointTimes.push(this.time),t.nextCheckpoint++,i.safeS=u+1,u>0&&t.nextCheckpoint%this.checkpointCount===1)){t.completedLaps++;const g=this.time-t.lastLapTime;t.bestLap=Math.min(t.bestLap,g),t.lastLapTime=this.time,i.awardNitro(.65),t.completedLaps===this.totalLaps&&(t.finishTime=this.time,this.finishDeadline??=this.time+20,this.finishOrder.push(t.id))}}resetRacer(t=this.player){const e=Math.max(-9,(t.nextCheckpoint-1)*this.track.length/this.checkpointCount+1);t.body.reset(e),t.lastS=t.body.progress,t.lastX=t.body.x,t.lastZ=t.body.z,t.lastRoute=t.body.route,t.distance=e,t.resetSeen=t.body.resetEvent}get standings(){return[...this.racers].sort((t,e)=>t.finishTime!==null&&e.finishTime!==null?t.finishTime-e.finishTime:t.finishTime!==null?-1:e.finishTime!==null?1:e.distance-t.distance)}get position(){return this.standings.findIndex(t=>t.id===this.localPlayerId)+1}}const Ke=new ie(1,1,1),Ti=new ms(1,10,7),rg=new qe(.5,.5,.39,12),ag=new qe(.24,.24,.405,8),bn=new ae({color:2505798}),og=new ae({color:2371641}),Sn=new ae({color:16774362}),lg=new ae({color:1526875}),cg=new ae({color:11059903});function me(r,t,e,i,n){const s=new Ot(t,e);return s.position.set(i[0],i[1],i[2]),s.scale.set(n[0],n[1],n[2]),r.add(s),s}class Sc{constructor(t,e="YOU"){this.body=t,this.name=e,this.material=new ae({color:t.spec.color});const i=this.material;this.group.add(this.shell),me(this.shell,Ke,bn,[0,.46,0],[1.65,.28,2.6]),me(this.shell,Ti,i,[0,.73,.32],[.88,.38,1.35]),me(this.shell,Ke,i,[0,.88,1.04],[1.5,.3,1.2]),me(this.shell,Ke,Sn,[0,1.045,1.04],[.22,.032,1.15]),me(this.shell,Ke,bn,[0,.61,1.77],[1.8,.22,.23]),me(this.shell,Ke,bn,[0,.57,-1.37],[1.8,.2,.26]);for(const c of[-1,1]){me(this.shell,Ke,i,[c*.99,.86,-.42],[.33,.29,1.2]),me(this.shell,Ti,Sn,[c*.55,.86,1.59],[.23,.12,.08]),me(this.shell,Ke,cg,[c*.72,.8,-1.35],[.25,.35,.36]);const h=me(this.group,new kn(.25,1.4,6),new Ce({color:7203327}),[c*.72,.79,-2],[1,1,1]);h.rotation.x=-Math.PI/2,this.flames.push(h)}if(t.spec.id==="comet"&&(me(this.shell,Ke,bn,[0,1.15,-1.06],[.18,.8,.16]),me(this.shell,Ke,i,[0,1.51,-1.06],[2,.15,.48])),t.spec.id==="skipper")for(const c of[-1,1])me(this.shell,Ti,i,[c*.75,1.1,-.7],[.2,.4,.5]);for(const c of[-1.03,1.03])for(const h of[-.93,.94]){const d=new Pe;d.position.set(c,.5,h);const f=new Ot(rg,og);f.rotation.z=Math.PI/2,d.add(f);const u=new Ot(ag,Sn);u.rotation.z=Math.PI/2,d.add(u),this.group.add(d),this.wheels.push(d)}this.driver.position.set(0,.85,-.32),this.shell.add(this.driver),me(this.driver,Ti,Sn,[0,.38,0],[.42,.48,.34]),me(this.driver,Ti,i,[0,1.05,0],[.57,.53,.48]),me(this.driver,Ti,lg,[0,1.06,.34],[.48,.24,.2]);for(const c of[-.16,.16])me(this.driver,Ke,Sn,[c,1.1,.53],[.085,.11,.022]);me(this.driver,Ke,bn,[0,1.67,0],[.055,.3,.055]),me(this.driver,Ti,i,[0,1.87,0],[.12,.12,.12]);for(const c of[-1,1]){const h=me(this.driver,Ti,Sn,[c*.4,.4,.27],[.15,.29,.17]);h.rotation.x=-.75}const n=new Ot(new hr(.27,.055,5,10),bn);n.rotation.x=.6,n.position.set(0,1.26,.22),this.shell.add(n),this.shadow=new Ot(new ao(1.65,20),new Ce({color:1526608,transparent:!0,opacity:.21,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.scale.y=1.35,this.group.add(this.shadow),this.owned.push(n.geometry,...Wa(this.shell),...Wa(this.driver));const s=document.createElement("canvas");s.width=512,s.height=160;const a=s.getContext("2d");a.fillStyle="#fff5d8",a.fillRect(0,0,512,160),a.strokeStyle="#174953",a.lineWidth=12,a.strokeRect(6,6,500,148),a.fillStyle="#174953",a.textAlign="center",a.textBaseline="middle";let o=78;for(a.font=`800 ${o}px system-ui,sans-serif`;a.measureText(e).width>462&&o>24;)o-=2,a.font=`800 ${o}px system-ui,sans-serif`;a.fillText(e,256,82),this.plateTexture=new ls(s),this.plateTexture.colorSpace=Me,this.plateTexture.generateMipmaps=!1,this.plateTexture.minFilter=ti,this.plateMaterial=new Ce({map:this.plateTexture,side:xi});const l=new Ui(1.72,.54);this.owned.push(l);for(const c of[-1,1]){const h=new Ot(l,this.plateMaterial);h.position.set(0,.81,c===1?1.91:-1.54),h.rotation.y=c===1?0:Math.PI,h.userData.plate=e,this.group.add(h)}}body;name;group=new Pe;shell=new Pe;driver=new Pe;wheels=[];flames=[];shadow;material;owned=[];plateTexture;plateMaterial;sync(t){const e=this.body;this.group.position.set(e.x,e.y+.11,e.z),this.group.rotation.set(e.pitch,e.heading+(e.hitTime>0?e.spinPhase*Math.PI*2*(e.hitSlide||1):0),e.roll,"YXZ"),this.shell.rotation.z=-e.steering*Math.min(e.speed/35,1)*.065,this.driver.rotation.z=-e.steering*.13,this.shadow.position.y=-.01,this.shadow.visible=!e.airborne;for(let i=0;i<this.wheels.length;i++){i%2===1&&(this.wheels[i].rotation.y=e.steering*.34);const n=this.wheels[i].children;n[0].rotation.x=t*e.speed*1.8,n[1].rotation.x=t*e.speed*1.8}this.flames.forEach((i,n)=>{i.visible=e.boost,i.scale.setScalar(.8+Math.sin(t*45+n)*.17)})}dispose(){this.plateTexture.dispose(),this.plateMaterial.dispose(),this.material.dispose(),this.flames.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.owned.forEach(t=>t.dispose())}}class hg{constructor(t){this.camera=t}camera;target=new D;desired=new D;look=new D;initialized=!1;reset(){this.initialized=!1}update(t,e,i=!1,n=0){const s=Math.sin(t.heading),a=Math.cos(t.heading),o=t.drifting?t.driftDirection*.65:0;if(i){const l=t.heading+.8+Math.sin(n*.14)*.08;this.desired.set(t.x+Math.sin(l)*12,t.y+5.3,t.z+Math.cos(l)*12),this.look.set(t.x-Math.cos(l)*4.2,t.y+1,t.z+Math.sin(l)*4.2)}else this.desired.set(t.x-s*10.7+a*o,t.y+5.9,t.z-a*10.7-s*o),this.look.set(t.x+s*6,t.y+1.35,t.z+a*6);this.initialized||(this.camera.position.copy(this.desired),this.target.copy(this.look),this.initialized=!0),this.camera.position.lerp(this.desired,1-Math.exp(-e*5)),this.camera.position.y=Math.max(this.camera.position.y,t.y+3.7),this.target.lerp(this.look,1-Math.exp(-e*8)),this.camera.lookAt(this.target),this.camera.fov=Yi(this.camera.fov,i?47:58+Math.min(t.speed/35,1)*7+(t.boost?7:0),3,e),this.camera.updateProjectionMatrix()}}class dg{constructor(t){this.scene=t,this.group.userData.dynamic=!0;const e=gs(7421);for(let l=0;l<300;l++)this.drops[l*3]=(e()-.5)*110,this.drops[l*3+1]=e()*45,this.drops[l*3+2]=(e()-.5)*110;const i=new ge;i.setAttribute("position",new He(this.lines,3).setUsage(as)),this.rain=new id(i,new oc({color:11192553,transparent:!0,opacity:.45,depthWrite:!1})),this.rain.frustumCulled=!1,this.lamps=new ii(new ms(1,8,5),new Ce({color:16777215,toneMapped:!1}),32);const n=new ge;n.setAttribute("position",new Yt([-7,0,0,7,0,0,-7,0,18,7,0,18],3)),n.setAttribute("uv",new Yt([0,0,1,0,0,1,1,1],2)),n.setIndex([0,2,1,1,2,3]),n.computeVertexNormals();const s=document.createElement("canvas");s.width=128,s.height=256;const a=s.getContext("2d"),o=a.createImageData(128,256);for(let l=0;l<256;l++)for(let c=0;c<128;c++){const h=1-l/255,d=c/127*2-1,f=Math.min(1,h/.055),u=(1-h)**1.6,g=Math.exp(-2.5*(d/(.085+h*.48))**2),v=Math.exp(-1.8*(d/(.22+h*.72))**2),m=f*u*(g*.48+v*.15)*(1-d*d)**2,p=(l*128+c)*4;o.data[p]=255,o.data[p+1]=239,o.data[p+2]=208,o.data[p+3]=Math.round(255*m)}a.putImageData(o,0,0),this.beamTexture=new ls(s),this.beams=new ii(n,new Ce({map:this.beamTexture,transparent:!0,depthWrite:!1,side:Te,blending:ta,toneMapped:!1}),16);for(const l of[this.lamps,this.beams])l.frustumCulled=!1,l.userData.dynamic=!0,l.instanceMatrix.setUsage(as);for(let l=0;l<32;l++)this.lamps.setMatrixAt(l,this.hidden),this.lamps.setColorAt(l,new Ct(l%4<2?16774079:16735304));for(let l=0;l<16;l++)this.beams.setMatrixAt(l,this.hidden);this.focusLight.castShadow=!1,this.focusLight.target.userData.dynamic=!0,this.group.add(this.rain,this.lamps,this.beams,this.focusLight,this.focusLight.target),t.add(this.group),this.setWeather("sunny")}scene;group=new Pe;weather="sunny";focusLight=new od(16772558,38,34,.46,1,1.25);rain;lamps;beams;drops=new Float32Array(300*3);lines=new Float32Array(300*6);dummy=new Jt;hidden=new Bt().makeScale(0,0,0);orientation=new sn;offset=new D;beamTexture;setWeather(t){this.weather=t,this.rain.visible=t==="rain",this.lamps.visible=this.beams.visible=this.focusLight.visible=t!=="sunny",this.focusLight.intensity=t==="rain"?38:26,this.beams.material.opacity=t==="rain"?.85:.65}update(t,e,i,n=!1){if(this.weather==="sunny")return;const s=i.body,a=s.track.ahead(s.projection,16),o=Math.sin(s.heading),l=Math.cos(s.heading);if(this.focusLight.position.set(s.x+o*1.7,s.y+1.15,s.z+l*1.7),this.focusLight.target.position.set(s.x+o*18,a.y+.08,s.z+l*18),this.weather==="rain"){const c=i.body,h=n?150:300;this.rain.geometry.setDrawRange(0,h*2);for(let d=0;d<h;d++){const f=d*3,u=d*6;this.drops[f+1]-=t*(24+d%7),this.drops[f+1]<-4&&(this.drops[f+1]+=45),this.lines[u]=c.x+this.drops[f],this.lines[u+1]=c.y+this.drops[f+1],this.lines[u+2]=c.z+this.drops[f+2],this.lines[u+3]=this.lines[u]-.25,this.lines[u+4]=this.lines[u+1]-1.8,this.lines[u+5]=this.lines[u+2]+.16}this.rain.geometry.attributes.position.needsUpdate=!0}for(let c=0;c<32;c++)this.lamps.setMatrixAt(c,this.hidden);for(let c=0;c<16;c++)this.beams.setMatrixAt(c,this.hidden);for(const[c,h]of e.entries()){const d=h.body,f=d.heading+(d.hitTime>0?d.spinPhase*Math.PI*2*(d.hitSlide||1):0);this.dummy.rotation.set(d.pitch,f,0,"YXZ"),this.orientation.copy(this.dummy.quaternion);for(let u=0;u<4;u++)this.offset.set(u%2?-.95:.95,u<2?1.06:.84,u<2?1.98:-1.66).applyQuaternion(this.orientation),this.dummy.position.set(d.x+this.offset.x,d.y+this.offset.y,d.z+this.offset.z),this.dummy.scale.set(.21,.12,.085),this.dummy.updateMatrix(),this.lamps.setMatrixAt(c*4+u,this.dummy.matrix);if(!d.airborne)for(let u=0;u<2;u++)this.offset.set(u?-.64:.64,.17,1.95).applyQuaternion(this.orientation),this.dummy.position.set(d.x+this.offset.x,d.y+this.offset.y,d.z+this.offset.z),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.beams.setMatrixAt(c*2+u,this.dummy.matrix)}this.lamps.instanceMatrix.needsUpdate=!0,this.beams.instanceMatrix.needsUpdate=!0}dispose(){this.scene.remove(this.group),this.rain.geometry.dispose(),this.rain.material.dispose();for(const t of[this.lamps,this.beams])t.geometry.dispose(),t.material.dispose();this.beamTexture.dispose()}}const si=340;class ug{mesh;cursor=0;life=new Float32Array(si);maxLife=new Float32Array(si);pos=new Float32Array(si*3);vel=new Float32Array(si*3);size=new Float32Array(si);mat=new Bt;dummy=new Jt;emission=0;skid;skidIndex=0;color=new Ct;constructor(t){this.mesh=new ii(new en(1,0),new Ce({transparent:!0,opacity:.72,depthWrite:!1}),si),this.mesh.userData.dynamic=!0,this.mesh.instanceMatrix.setUsage(as),this.mesh.frustumCulled=!1;for(let e=0;e<si;e++)this.mesh.setColorAt(e,this.color);t.add(this.mesh),this.skid=new ii(new Ui(.14,.55),new Ce({color:2309955,transparent:!0,opacity:.34,depthWrite:!1,side:Te}),480),this.skid.userData.dynamic=!0,this.skid.frustumCulled=!1,t.add(this.skid),this.clear()}clear(){this.life.fill(0),this.cursor=0,this.skidIndex=0,this.mat.makeScale(0,0,0);for(let t=0;t<si;t++)this.mesh.setMatrixAt(t,this.mat);for(let t=0;t<480;t++)this.skid.setMatrixAt(t,this.mat);this.mesh.instanceMatrix.needsUpdate=!0,this.skid.instanceMatrix.needsUpdate=!0}emit(t,e,i,n,s,a,o=0,l=1,c=0){const h=this.cursor++%si;this.life[h]=a,this.maxLife[h]=a,this.size[h]=s,this.pos.set([t,e,i],h*3),this.vel.set([o,l,c],h*3),this.mesh.setColorAt(h,this.color.setHex(n))}update(t,e,i){this.emission+=t;const n=this.emission>1/35;n&&(this.emission=0);for(const s of e){if(!n||s.speed<6)continue;const a=Math.sin(s.heading),o=Math.cos(s.heading),l=o,c=-a;if(s.drifting||s.hitTime>0&&s.hitSlide!==0&&!s.airborne)for(const h of[-1,1]){const d=s.x-a*.95+l*h,f=s.z-o*.95+c*h;this.emit(d,s.y+.38,f,15134433,.25,.7,-a*2,1.2,-o*2),s.driftLevel>0&&this.emit(d,s.y+.28,f,[0,7200767,16766549,16746172][s.driftLevel],.1,.38,l*h*3,1.8,c*h*3),this.dummy.position.set(d,s.y+.095,f),this.dummy.rotation.set(-Math.PI/2,0,-s.heading),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.skid.setMatrixAt(this.skidIndex++%480,this.dummy.matrix),this.skid.instanceMatrix.needsUpdate=!0}if(s.boost)for(const h of[-1,1])this.emit(s.x-a*1.8+l*h*.65,s.y+.7,s.z-o*1.8+c*h*.65,s.nitroTime>0?7533311:16762465,.19,.28,-a*9,.2,-o*9)}for(let s=0;s<si;s++){if(this.life[s]-=t,this.life[s]<=0){this.mat.makeScale(0,0,0),this.mesh.setMatrixAt(s,this.mat);continue}for(let o=0;o<3;o++)this.pos[s*3+o]+=this.vel[s*3+o]*t;const a=this.size[s]*(this.life[s]/this.maxLife[s]);this.dummy.position.fromArray(this.pos,s*3),this.dummy.rotation.set(i*.6,s,0),this.dummy.scale.setScalar(a),this.dummy.updateMatrix(),this.mesh.setMatrixAt(s,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}function fg(r,t={}){const e=r.has("KeyA")||r.has("ArrowLeft")||t.left===!0,i=r.has("KeyD")||r.has("ArrowRight")||t.right===!0;return{throttle:r.has("KeyW")||r.has("ArrowUp")||t.throttle===!0?1:0,brake:r.has("KeyS")||r.has("ArrowDown")||t.brake===!0?1:0,steer:(e?1:0)-(i?1:0),drift:r.has("Space")||t.drift===!0,nitro:r.has("ShiftLeft")||r.has("ShiftRight")||t.nitro===!0,item:r.has("KeyZ")||t.item===!0,itemRight:r.has("KeyX")||t.itemRight===!0}}class pg{constructor(t){this.action=t,window.addEventListener("keydown",this.down),window.addEventListener("keyup",this.up),window.addEventListener("blur",this.blur),this.media.addEventListener("change",this.mediaChange),this.mobileControls.className="mobile-controls",this.mobileControls.setAttribute("aria-label","觸控駕駛按鈕"),this.mobileControls.innerHTML='<div class="mobile-steering"><button type="button" data-mobile="left" aria-label="左轉">◀</button><button type="button" data-mobile="right" aria-label="右轉">▶</button></div><div class="mobile-pedals"><button type="button" data-mobile="brake" aria-label="煞車與倒車">煞車</button><button type="button" data-mobile="throttle" aria-label="加速">加速</button></div><div class="mobile-actions"><button type="button" data-mobile="drift">漂移</button><button type="button" data-mobile="nitro">氮氣</button></div><div class="mobile-items"><button type="button" data-mobile="item" aria-label="使用左邊道具">Z 左道具</button><button type="button" data-mobile="itemRight" aria-label="使用右邊道具">X 右道具</button></div><button type="button" class="mobile-reset" data-action="KeyR" aria-label="救援重置車輛">救援 R</button>',document.querySelector("#app").append(this.mobileControls),this.buttons=[...this.mobileControls.querySelectorAll("[data-mobile]")],this.buttons.forEach(e=>{const i=e.dataset.mobile;e.addEventListener("pointerdown",s=>{if(s.preventDefault(),!this.active||!this.media.matches||this.pointers.has(s.pointerId))return;e.setPointerCapture(s.pointerId);const a=!this.touch[i];this.pointers.set(s.pointerId,i),this.refreshTouch(),a&&i==="item"&&this.action("KeyZ"),a&&i==="itemRight"&&this.action("KeyX")});const n=s=>{s.preventDefault(),this.pointers.delete(s.pointerId),this.refreshTouch()};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("lostpointercapture",n),e.addEventListener("contextmenu",s=>s.preventDefault())}),this.mobileControls.querySelector("[data-action]").onclick=()=>{this.active&&this.action("KeyR")}}action;keys=new Set;touch={throttle:!1,brake:!1,left:!1,right:!1,drift:!1,nitro:!1,item:!1,itemRight:!1};mobileControls=document.createElement("div");pointers=new Map;active=!1;buttons=[];media=matchMedia("(max-width: 768px)");refreshTouch(){for(const t of Object.keys(this.touch))this.touch[t]=[...this.pointers.values()].includes(t);this.buttons.forEach(t=>t.classList.toggle("pressed",this.touch[t.dataset.mobile]))}down=t=>{if(!(t.target instanceof HTMLElement&&(t.target.matches("input,select,textarea")||t.target.isContentEditable))){if(document.querySelector("#menu:not(.hidden),.lobby-layer:not(.hidden),.garage-page:not(.hidden),.records-layer:not(.hidden)")){!t.repeat&&t.code==="Enter"&&!(t.target instanceof HTMLButtonElement)&&this.action(t.code);return}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","F3"].includes(t.code)&&!(t.target instanceof HTMLButtonElement&&t.code==="Space")&&t.preventDefault(),t.repeat||this.action(t.code),this.keys.add(t.code)}};up=t=>{this.keys.delete(t.code)};blur=()=>{this.clear(),this.action("Blur")};mediaChange=()=>{this.media.matches||this.clearTouch()};clearTouch(){this.pointers.clear(),this.refreshTouch()}clear(){this.keys.clear(),this.clearTouch()}setMobileVisible(t){this.active!==t&&(this.active=t,this.mobileControls.classList.toggle("is-active",t),t||this.clearTouch())}setItemsEnabled(t){this.mobileControls.classList.toggle("without-items",!t)}get controls(){return fg(this.keys,this.touch)}dispose(){window.removeEventListener("keydown",this.down),window.removeEventListener("keyup",this.up),window.removeEventListener("blur",this.blur),this.media.removeEventListener("change",this.mediaChange),this.mobileControls.remove()}}const Ul=new Map;function mg(r){const t=Ul.get(r);if(t)return t;const e=Dn(r),i=new hs(r,!1),n=i.bounds,s=Math.min(164/Math.max(1,n.maxX-n.minX),84/Math.max(1,n.maxZ-n.minZ)),a=(f,u)=>`${(90+(f-(n.minX+n.maxX)/2)*s).toFixed(1)},${(50+(u-(n.minZ+n.maxZ)/2)*s).toFixed(1)}`,o=i.points.filter((f,u)=>u%4===0).map(f=>a(f.x,f.z)).join(" "),l=i.branches.map(f=>`<polyline class="${e.theme==="city"?"record-street":"record-shortcut"}" points="${f.points.filter((u,g)=>g%3===0).map(u=>a(u.x,u.z)).join(" ")}"/>`).join(""),[c,h]=a(i.at(0).x,i.at(0).z).split(","),d=`<svg class="record-outline" viewBox="0 0 180 100" role="img" aria-label="${e.name}賽道輪廓"><polygon points="${o}"/>${l}<circle class="record-start" cx="${c}" cy="${h}" r="3.5"/></svg>`;return Ul.set(r,d),d}const us="https://kart.ottaster.com".replace(/\/$/,""),Xa="kart_key",Ec=()=>{try{return localStorage.getItem(Xa)??""}catch{return""}},qa=r=>{try{r?localStorage.setItem(Xa,r):localStorage.removeItem(Xa)}catch{}},Qi=r=>us+r,Tn=()=>{const r=Ec();return r?{"x-kart-key":r}:{}};function gg(){const r=us?us.replace(/^http/,"ws")+"/ws":(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws",t=Ec();return t?r+"?key="+encodeURIComponent(t):r}async function vg(){try{return(await fetch(Qi("/api/ice"),{headers:Tn(),cache:"no-store",signal:AbortSignal.timeout(6e3)})).ok}catch{return!1}}async function xg(){us&&(await vg()||(qa(""),await new Promise(r=>{const t=document.createElement("div");t.className="access-gate",t.innerHTML='<form><h1>TIDEBREAK · 浪灣疾行</h1><p>輸入通關密碼</p><input name="pw" type="password" autocomplete="current-password" autofocus><button>進入</button><div class="err"></div></form>',document.body.append(t);const e=t.querySelector("form"),i=t.querySelector("input"),n=t.querySelector(".err");e.onsubmit=async s=>{s.preventDefault(),n.textContent="",e.querySelector("button").disabled=!0;try{const a=await fetch(Qi("/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({pw:i.value}),signal:AbortSignal.timeout(8e3)}),o=await a.json().catch(()=>({}));if(a.ok&&typeof o.key=="string"){qa(o.key),t.remove(),r();return}n.textContent=a.status===401?"密碼不對":"連不上伺服器，請稍後再試"}catch{n.textContent="連不上伺服器，請稍後再試"}e.querySelector("button").disabled=!1,i.focus()},i.focus()})))}async function fo(r){const t=await fetch(Qi("/api/records"),{headers:Tn(),signal:AbortSignal.any([r,AbortSignal.timeout(7e3)]),cache:"no-store"});if(!t.ok)throw new Error("讀取紀錄失敗，請稍後重試。");return(await t.json()).records}class _g{root=document.createElement("section");request=null;returnFocus=null;constructor(){this.root.className="modal-layer records-layer hidden",this.root.setAttribute("role","dialog"),this.root.setAttribute("aria-modal","true"),this.root.setAttribute("aria-labelledby","records-title"),this.root.innerHTML='<div class="records-card"><button id="records-close" class="text-button">← 返回首頁</button><div class="eyebrow">TIDEBREAK · WORLD RECORDS</div><h2 id="records-title">浪灣最速殿堂</h2><p>各賽道最快三圈總時間，與所有車手共同競爭。</p><p class="records-rules">所有模式共用紀錄 · 僅計真人駕駛 · 不計 AI 代駕與估算成績</p><div class="records-list" aria-live="polite"></div><button id="records-retry" class="secondary hidden">重新載入紀錄</button></div>',document.querySelector("#app").append(this.root),this.root.querySelector("#records-close").onclick=()=>this.hide(),this.root.querySelector("#records-retry").onclick=()=>{this.load()},this.root.addEventListener("keydown",t=>{if(t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),this.hide()),t.key==="Tab"){const e=[...this.root.querySelectorAll("button:not(.hidden)")],i=e[0],n=e[e.length-1];t.shiftKey&&document.activeElement===i?(t.preventDefault(),n.focus()):!t.shiftKey&&document.activeElement===n&&(t.preventDefault(),i.focus())}})}show(){this.returnFocus=document.activeElement,this.root.classList.remove("hidden"),this.root.querySelector("button").focus(),this.load()}hide(){this.request?.abort(),this.root.classList.add("hidden"),this.returnFocus?.focus()}async load(){this.request?.abort();const t=new AbortController;this.request=t;const e=this.root.querySelector(".records-list"),i=this.root.querySelector("#records-retry");i.classList.add("hidden"),e.innerHTML='<p class="records-loading"><i class="loading-spinner"></i>正在讀取共用紀錄…</p>';try{const n=await fo(t.signal);if(t.signal.aborted)return;e.replaceChildren(),li.forEach((s,a)=>{const o=n.find(v=>v.track===s.id)?.record,l=document.createElement("article");l.className="record-row";const c=document.createElement("span");c.className="record-number",c.textContent=String(a+1).padStart(2,"0");const h=document.createElement("figure");h.className="record-map",h.innerHTML=mg(s.id);const d=document.createElement("div"),f=document.createElement("strong"),u=document.createElement("small"),g=document.createElement("b");f.textContent=s.name,u.textContent=o?o.name:"等待第一位紀錄保持人",g.textContent=o?Ri(o.timeMs/1e3):"無紀錄",d.append(f,u),l.append(c,h,d,g),e.append(l)})}catch(n){if(t.signal.aborted)return;e.textContent=n.message,i.classList.remove("hidden")}}dispose(){this.request?.abort(),this.root.remove()}}class yg{root=document.createElement("section");request=null;record=null;track="coast";loaded=!1;holder;time;gap;retry;constructor(){this.root.className="live-record",this.root.setAttribute("aria-label","本關共用最快紀錄"),this.root.innerHTML='<div class="live-record-heading"><span>♕ 本關最快三圈</span><strong class="live-record-time">—</strong></div><div class="live-record-detail"><span class="live-record-holder">讀取中…</span><small class="live-record-gap"></small></div><button type="button" class="live-record-retry hidden">重試</button>',this.holder=this.root.querySelector(".live-record-holder"),this.time=this.root.querySelector(".live-record-time"),this.gap=this.root.querySelector(".live-record-gap"),this.retry=this.root.querySelector("button"),this.retry.onclick=()=>this.begin(this.track)}begin(t){this.track=t,this.request?.abort();const e=new AbortController;this.request=e,this.loaded=!1,this.record=null,this.time.textContent="—",this.holder.textContent="正在讀取紀錄…",this.gap.textContent="",this.retry.classList.add("hidden"),this.root.classList.remove("record-ahead"),fo(e.signal).then(i=>{e.signal.aborted||(this.loaded=!0,this.record=i.find(n=>n.track===t)?.record??null,this.holder.textContent=this.record?.name??"等待第一位紀錄保持人",this.time.textContent=this.record?Ri(this.record.timeMs/1e3):"無紀錄")}).catch(()=>{e.signal.aborted||(this.holder.textContent="紀錄暫時無法讀取",this.retry.classList.remove("hidden"))})}update(t,e,i){if(!this.loaded)return;if(!this.record){this.gap.textContent="真人三圈總時間";return}const n=this.record.timeMs/1e3-(e??t);this.root.classList.toggle("record-ahead",e!==null&&!i&&n>0),this.gap.textContent=e!==null?i?"估算不計紀錄":n>0?`快 ${n.toFixed(3)} 秒 · 待結算`:n===0?"追平目前紀錄":`慢 ${(-n).toFixed(3)} 秒`:n>=0?`還有 ${n.toFixed(1)} 秒`:`超出 ${(-n).toFixed(1)} 秒`}dispose(){this.request?.abort(),this.root.remove()}}class Mg{root=document.createElement("section");key="";request=null;title;holder;time;gap;retry;constructor(){this.root.className="result-record",this.root.setAttribute("aria-live","polite"),this.root.innerHTML='<span class="result-record-title"></span><div class="result-record-values"><strong class="result-record-holder"></strong><b class="result-record-time"></b></div><small class="result-record-gap"></small><button type="button" class="result-record-retry hidden">重新讀取紀錄</button>',this.title=this.root.querySelector(".result-record-title"),this.holder=this.root.querySelector(".result-record-holder"),this.time=this.root.querySelector(".result-record-time"),this.gap=this.root.querySelector(".result-record-gap"),this.retry=this.root.querySelector("button"),this.retry.onclick=()=>{this.key=""}}update(t,e,i,n,s){const a=[t,e,i,n,s].join(":");if(a===this.key||(this.key=a,this.request?.abort(),this.retry.classList.add("hidden"),this.title.textContent=`本關最速紀錄 · ${Dn(t).name}`,this.holder.innerHTML='<i class="loading-spinner" aria-hidden="true"></i> 讀取共用紀錄中…',this.time.textContent="",this.gap.textContent=n?"":"等待本場成績同步…",!n))return;const o=new AbortController;this.request=o,fo(o.signal).then(l=>{if(o.signal.aborted||this.key!==a)return;const c=l.find(f=>f.track===t)?.record;if(!c){this.holder.textContent="無紀錄",this.time.textContent="—",this.gap.textContent="等待首位真人車手創下完整三圈紀錄。";return}if(this.holder.textContent=c.name,this.time.textContent=Ri(c.timeMs/1e3),e===null){this.gap.textContent="";return}const h=Math.round(e*1e3)-c.timeMs,d=i?"估算成績 · ":"";this.gap.textContent=d+(h===0?"與目前最快紀錄相同":`本場${h>0?"慢":"快"} ${(Math.abs(h)/1e3).toFixed(3)} 秒`)}).catch(()=>{o.signal.aborted||this.key!==a||(this.holder.textContent="暫時無法讀取紀錄",this.time.textContent="—",this.gap.textContent="",this.retry.classList.remove("hidden"))})}clear(){this.key&&(this.key="",this.request?.abort(),this.request=null)}dispose(){this.clear(),this.root.remove()}}const Ln=r=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${r}"/></svg>`,bg=Ln("M5 21V4m0 0c5-5 9 5 15 0v10c-6 5-10-5-15 0"),Sg=Ln("m13 2-9 12h7l-1 8 10-12h-7l1-8"),Zr=Ln("m9 5 7 7-7 7"),Nl=r=>r.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);class Eg{constructor(t,e){this.race=t,this.actions=e,this.root=document.createElement("div"),this.root.className="interface",document.querySelector("#app").append(this.root),this.root.innerHTML=`
   <header class="topbar"><a class="wordmark" href="#" aria-label="回主選單"><span class="brand-glyph">T</span>TIDEBREAK<span class="edition">COASTAL CIRCUIT</span></a><div class="toolbar"><button class="icon-button" id="quality" title="切換畫質">畫質 · 標準</button><button class="icon-button" id="sound" title="切換音效" aria-label="關閉音效">${Ln("M11 5 6 9H3v6h3l5 4V5m4 3c3 2 3 6 0 8m3-11c5 4 5 10 0 14")}</button><button class="icon-button hidden" id="pause-button" aria-label="暫停比賽">${Ln("M9 5v14M15 5v14")}</button></div></header>
   <section id="menu" class="menu"><div class="menu-content"><div class="eyebrow"><span></span> 浪灣市 · 海岸巡迴賽</div><h1>TIDE<br><span>BREAK.</span></h1><div class="title-zh">浪灣疾行</div><p class="menu-copy">追上海風。把下一個彎，<br>變成你的超車機會。</p><div class="race-info"><span>${bg}<strong>3</strong> 圈</span><span><strong>1–8</strong> 位車手</span><span>${li.length} 條賽道</span></div><button id="choose" class="primary large">選擇座駕 ${Zr}</button><div class="desktop-note">鍵盤操作 · 單人競速</div></div><div class="track-tag"><span>01 / COASTLINE</span><strong>晴空海岸</strong><small>海濱直道 ／ 珊瑚髮夾 ／ 港灣 S 彎</small></div><div class="menu-footer"><span>原創街機卡丁車</span><span>海風正好，出發吧。</span></div></section>
   <section id="hud" class="hud hidden"><div class="race-top"><div class="position-box"><span class="micro">POSITION</span><strong id="position">8<span>/ 8</span></strong></div><div class="lap-box"><span class="micro">LAP</span><strong id="lap">1 <span>/ 3</span></strong></div><div class="timer-box"><span class="micro">RACE TIME</span><strong id="timer">00:00.000</strong></div></div><div id="race-message" class="race-message"></div><div class="map-panel"><div class="map-title">晴空海岸 <span>01</span></div><canvas id="minimap" width="380" height="340" aria-label="賽道小地圖"></canvas><span class="map-label"><i></i> YOU <span>● 對手</span></span></div><div class="driving-hud"><div id="boost-label" class="boost-label">NITRO BOOST</div><div class="speed"><strong id="speed">0</strong><span>KM/H</span></div><div class="nitro-row"><span class="micro">NITRO <kbd>SHIFT</kbd></span><div id="nitro" class="nitro-cells">${[0,1,2].map(()=>`<span>${Sg}</span>`).join("")}</div></div><div class="nitro-recharge"><i id="nitro-recharge"></i></div><div class="drift-row"><span class="micro">DRIFT <kbd>SPACE</kbd></span><span id="drift-level">READY</span></div><div class="drift-track"><i id="drift-fill"></i><span></span><span></span></div></div><div class="control-strip"><span><kbd>WASD</kbd> 駕駛</span><span><kbd>SPACE</kbd> 漂移</span><span><kbd>SHIFT</kbd> 氮氣</span><span><kbd>Z / X</kbd> 左 / 右道具</span><span><kbd>R</kbd> 救援</span><span><kbd>ESC</kbd> 暫停</span></div></section>
   <div id="countdown" class="countdown hidden"></div><div id="speed-lines" class="speed-lines"></div><div id="toast" class="toast"></div>
   <section id="pause-screen" class="modal-layer hidden"><div class="pause-card"><span class="eyebrow">TAKE A BREATHER</span><h2>稍作停靠。</h2><p>比賽已暫停，準備好就繼續。</p><button id="resume" class="primary">繼續比賽 ${Zr}</button><button id="restart-pause" class="secondary">重新比賽</button><button id="menu-pause" class="text-button">回主選單</button><div class="pause-controls"><p><kbd>W / ↑</kbd> 加速 <kbd>S / ↓</kbd> 煞車 / 倒車</p><p><kbd>A / ←</kbd> 左轉 <kbd>D / →</kbd> 右轉</p><p><kbd>SPACE + 方向</kbd> 漂移，放開獲得小噴射</p><p><kbd>SHIFT</kbd> 氮氣 <kbd>Z / X</kbd> 左 / 右道具 <kbd>R</kbd> 救援 <kbd>F3</kbd> 除錯</p></div></div></section>
   <section id="results" class="modal-layer results-layer hidden"><div class="results-card"><div class="results-header"><div><span class="eyebrow">COASTAL CIRCUIT · RACE COMPLETE</span><h2 id="results-title">衝線！</h2></div><div class="finish-medal" id="finish-position">01</div></div><div class="result-summary"><div><span id="summary-label-one">你的完賽時間</span><strong id="finish-time"></strong></div><div><span id="summary-label-two">最快單圈</span><strong id="best-lap"></strong></div></div><div class="table-head"><span>名次 / 車手</span><span id="result-column">完賽時間</span></div><ol id="leaderboard"></ol><p id="result-note" class="result-note"></p><div class="result-actions"><button id="next-result" class="primary hidden">下一步 · 結算積分 →</button><button id="restart" class="primary">再跑一場 ${Zr}</button><button id="back-menu" class="secondary">回主選單</button></div></div></section>
   <aside id="debug" class="debug hidden"><b>TELEMETRY · F3</b><pre id="debug-data"></pre><button id="debug-reset">Reset kart</button><button id="debug-restart">Restart race</button></aside>`,this.get("choose").insertAdjacentHTML("beforebegin",'<button id="online" class="primary large multiplayer-button">多人競速 · 建立 / 加入房間</button>'),this.get("choose").insertAdjacentHTML("afterend",'<button id="championship" class="secondary large cup-button">排名賽 · 三站積分巡迴 →</button>'),this.get("choose").textContent="單站競速 · 選擇座駕",this.get("choose").classList.replace("primary","secondary");const i=document.createElement("div");i.className="menu-entrance",this.get("online").before(i),i.append(this.get("online")),i.insertAdjacentHTML("beforeend",`<button id="records-open" class="records-button" aria-label="查看各賽道最速紀錄" title="各賽道最速紀錄">${Ln("M8 3h8v6a4 4 0 0 1-8 0V3m0 2H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 2v5m-4 3h8m-6-3h4v3H10z")}<span>最速紀錄</span></button>`),this.get("records-open").onclick=()=>this.records.show();const n=document.createElement("div");n.className="menu-race-modes hidden",this.get("choose").before(n),n.append(this.get("choose"),this.get("championship")),this.get("menu").tabIndex=0,this.get("menu").setAttribute("aria-label","遊戲首頁，可向下捲動"),this.root.querySelector(".desktop-note").textContent="鍵盤 / 觸控操作 · 1–8 人連線 · 無需登入",this.get("hud").insertAdjacentHTML("beforeend",'<div id="finish-countdown" class="finish-countdown hidden" role="timer" aria-label="完賽結算倒數"><div><small>首位車手已完賽</small><strong><b id="finish-seconds">20</b><span>秒後結算</span></strong></div><p>逾時將依進度估算完賽成績</p></div><div id="race-format" class="race-format"></div><div id="network-status" class="network-status"></div><div id="inventory" class="inventory"><div id="item-slot" class="item-slot"><span id="item-symbol">?</span><div><strong id="item-name">空道具槽</strong><small id="item-detail"></small></div><kbd>Z</kbd></div><div id="item-slot-right" class="item-slot"><span id="item-symbol-right">?</span><div><strong id="item-name-right">空道具槽</strong><small id="item-detail-right"></small></div><kbd>X</kbd></div><small id="item-status"></small></div>'),this.menu=this.get("menu"),this.hud=this.get("hud");const s=document.createElement("div");s.className="race-left-stack",s.append(this.hud.querySelector(".race-top"),this.get("race-format"),this.liveRecord.root,this.get("network-status"),this.get("inventory"),this.get("race-message")),this.hud.append(s),this.pauseScreen=this.get("pause-screen"),this.results=this.get("results"),this.results.querySelector(".result-summary").after(this.resultRecord.root),this.count=this.get("countdown"),this.debug=this.get("debug"),this.mini=this.get("minimap"),this.ctx=this.mini.getContext("2d");const a=(o,l)=>this.get(o).addEventListener("click",l);a("choose",e.garage),a("online",e.online),a("championship",e.championship),a("next-result",e.nextResult),a("pause-button",e.pause),a("resume",e.pause),a("restart-pause",e.restart),a("menu-pause",e.menu),a("restart",e.restart),a("back-menu",e.menu),a("debug-reset",e.reset),a("debug-restart",e.restart),a("sound",e.audio),a("quality",e.quality),this.root.querySelector(".wordmark").addEventListener("click",o=>{o.preventDefault(),this.race.state==="menu"?e.menu():e.pause()})}race;actions;root;menu;hud;pauseScreen;results;count;mini;ctx;debug;showDebug=!1;garage=!1;lastResult="";series=[];cupStage=0;resultView="times";canAdvance=!0;resultReady=!0;resultsBusy=!1;liveRecord=new yg;records=new _g;resultRecord=new Mg;newRecordIds=[];lastStage="";elements=new Map;mapCache=null;get(t){let e=this.elements.get(t);return e||(e=this.root.querySelector("#"+t),e&&this.elements.set(t,e)),e}showToast(t){const e=this.get("toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}toggleDebug(){this.showDebug=!this.showDebug,this.debug.classList.toggle("hidden",!this.showDebug)}update(t,e,i){const n=this.race,s=n.player.body,a=n.state!=="menu",o=n.state==="finished";this.menu.classList.toggle("hidden",a||this.garage),this.hud.classList.toggle("hidden",!a||o),this.get("pause-button").classList.toggle("hidden",!a||o),this.pauseScreen.classList.toggle("hidden",!n.paused),this.results.classList.toggle("hidden",!o),this.root.classList.toggle("in-race",a);const l=`${n.position}<span>/ ${n.racers.length}</span>`,c=`${Math.min(3,n.player.completedLaps+1)} <span>/ 3</span>`;this.get("position").innerHTML!==l&&(this.get("position").innerHTML=l),this.get("lap").innerHTML!==c&&(this.get("lap").innerHTML=c),this.get("timer").textContent=Ri(n.player.finishTime??n.time),a&&!o&&this.liveRecord.update(n.time,n.player.finishTime,n.player.simulated),this.get("speed").textContent=String(Math.round(s.speed*3.6)),this.get("nitro").querySelectorAll("span").forEach((m,p)=>m.classList.toggle("charged",p<s.nitroCharges)),this.get("nitro-recharge").style.width=s.nitroMeter*100+"%",this.get("drift-fill").style.width=Math.min(100,s.driftCharge/2.7*100)+"%",this.get("drift-fill").style.background=["#d2e4e3","#60dcff","#ffdc6c","#ff97d7"][s.driftLevel],this.get("drift-level").textContent=s.drifting?s.driftLevel?"LEVEL "+s.driftLevel:"CHARGING":"READY";const h=this.get("boost-label");h.classList.toggle("visible",s.boost),h.textContent=s.itemBoostTime>0?"GALE BOOST":s.nitroTime>0?"NITRO BOOST":"MINI TURBO "+s.turboLevel,this.get("speed-lines").classList.toggle("active",s.boost&&a&&!o&&!n.paused);const d=n.finishRemaining,f=this.get("finish-countdown");f.classList.toggle("hidden",d===null||n.state!=="racing"),f.classList.toggle("urgent",d!==null&&d<=5);const u=String(Math.ceil(d??20));this.get("finish-seconds").textContent!==u&&(this.get("finish-seconds").textContent=u);const g=s.vx*s.projection.tx+s.vz*s.projection.tz<-4;this.get("race-message").textContent=n.player.finishTime!==null?"已完賽 · 自動巡航，等待本關結算":g?"方向相反 · 請沿賽道前進":s.airborne?"高空落下 · 保持方向，準備落地":s.route?"捷徑路線 · 小心窄道":s.offroad?"草地減速 · 回到柏油路面":i?"QA 自動駕駛中":"";let v=n.state==="countdown"?n.countdown>3?"READY":String(Math.ceil(n.countdown)):n.state==="racing"&&n.time<.85?"GO!":"";this.count.textContent!==v&&(this.count.textContent=v,this.count.classList.remove("pop"),this.count.offsetWidth,this.count.classList.add("pop")),this.count.classList.toggle("hidden",!v||n.paused),this.get("network-status").classList.toggle("hidden",!n.online),this.get("inventory").classList.toggle("hidden",!n.items.enabled);for(const m of[0,1]){const p=m?"-right":"",y=m?s.itemTypeRight:s.itemType,x=m?s.itemChargesRight:s.itemCharges,_=ar[y]??ar[0];this.get("item-symbol"+p).textContent=_.short,this.get("item-name"+p).textContent=_.name,this.get("item-detail"+p).textContent=y?`${x} 次 · ${m?"X":"Z"} 使用`:"等待補給 ?",this.get("item-slot"+p).title=_.description,this.get("item-slot"+p).classList.toggle("loaded",y>0)}this.get("item-status").textContent=s.hitTime>0?s.hitSlide?"受到攻擊 · 滑移旋轉":"受到攻擊 · 停車旋轉":s.shieldTime>0?`護罩 1 次 · ${s.shieldTime.toFixed(1)}s`:s.itemBoostTime>0?`推進 ${s.itemBoostTime.toFixed(1)}s`:"",this.root.querySelector(".map-title").textContent=n.track.definition.name,this.pauseScreen.querySelector("p").textContent=n.online?"線上比賽會繼續進行，關閉選單即可繼續駕駛。":"比賽已暫停，準備好就繼續。",this.get("restart-pause").classList.toggle("hidden",n.online),this.get("restart").textContent=n.online?"回房間 · 重新開始":n.settings.mode==="championship"?"重跑巡迴排名賽":"再跑一場",this.get("race-format").textContent=`${n.settings.mode==="championship"?`浪灣巡迴 · ${this.cupStage+1} / ${Qe(n.settings.cupTracks).length} 站`:"單站競速"} · ${n.settings.aiEnabled===!1?"無 AI":"AI "+In[n.settings.difficulty].name} · ${zl[n.settings.activeWeather??"sunny"]} · ${n.items.enabled?"道具賽":"純競速"}`,a&&this.drawMap(),o?this.updateResults():this.resultRecord.clear(),this.showDebug&&(this.get("debug-data").textContent=`FPS ${t.toFixed(0)} | calls ${e}
Speed ${(s.speed*3.6).toFixed(1)} km/h
CP ${Math.max(0,n.player.nextCheckpoint-1)%32} / 32
Lap ${n.player.completedLaps} / 3
Position ${n.position} / ${n.racers.length}
x ${s.x.toFixed(1)} z ${s.z.toFixed(1)}
Drift ${s.driftCharge.toFixed(2)} · L${s.driftLevel}
Nitro ${s.nitroCharges} / 3
Track ${n.track.id} · route ${s.route}
Height ${s.y.toFixed(1)} · air ${s.airborne}
Item ${s.itemType} × ${s.itemCharges}
Surface ${s.surface}
AI recovery ${n.racers.slice(1).reduce((m,p)=>m+p.ai.recoveries,0)}`)}drawMap(){const t=this.ctx,e=this.race.track,i=this.mini.width,n=this.mini.height;t.clearRect(0,0,i,n);const s=e.bounds,a=Math.min((i-30)/(s.maxX-s.minX),(n-30)/(s.maxZ-s.minZ)),o=(l,c)=>[i/2+(l-(s.minX+s.maxX)/2)*a,n/2+(c-(s.minZ+s.maxZ)/2)*a];if(this.mapCache)t.drawImage(this.mapCache,0,0);else{t.beginPath(),e.points.forEach((d,f)=>{const[u,g]=o(d.x,d.z);f===0?t.moveTo(u,g):t.lineTo(u,g)}),t.closePath(),t.strokeStyle="rgba(227,244,236,.17)",t.lineWidth=15,t.lineJoin="round",t.stroke(),t.strokeStyle="rgba(237,250,238,.65)",t.lineWidth=3,t.stroke();for(const d of e.branches){t.beginPath(),d.points.forEach((u,g)=>{const[v,m]=o(u.x,u.z);g?t.lineTo(v,m):t.moveTo(v,m)});const f=e.definition.theme==="city";t.strokeStyle=f?"rgba(237,250,238,.65)":"#ffbc69",t.lineWidth=3,t.setLineDash(f?[]:[5,4]),t.stroke(),t.setLineDash([])}t.fillStyle="#73e8ff";for(const d of this.race.items.enabled?e.itemLocations:[]){const f=e.routeAt(d.route,d.u),[u,g]=o(f.x,f.z);t.fillRect(u-4,g-4,8,8)}const l=e.at(0),[c,h]=o(l.x,l.z);t.strokeStyle="#ffffff",t.lineWidth=4,t.beginPath(),t.moveTo(c-l.nx*8,h-l.nz*8),t.lineTo(c+l.nx*8,h+l.nz*8),t.stroke(),this.mapCache=document.createElement("canvas"),this.mapCache.width=i,this.mapCache.height=n,this.mapCache.getContext("2d").drawImage(this.mini,0,0)}for(const l of[...this.race.racers].reverse()){const[c,h]=o(l.body.x,l.body.z);t.beginPath(),t.arc(c,h,l.id===this.race.localPlayerId?7:4.6,0,Math.PI*2),t.fillStyle=l.id===this.race.localPlayerId?"#dcfa57":"#"+l.color.toString(16).padStart(6,"0"),t.fill(),l.id===this.race.localPlayerId&&(t.strokeStyle="#143d47",t.lineWidth=3,t.stroke())}}updateResults(){const t=this.race,e=t.settings.mode==="championship",i=e&&this.resultView==="points",n=Qe(t.settings.cupTracks).length,s=this.cupStage>=n-1;this.resultRecord.update(t.track.id,t.player.finishTime,t.player.simulated,!t.online||this.resultReady,this.newRecordIds.join(","));const a=this.get("next-result");a.classList.toggle("hidden",!e||i&&s),a.disabled=!this.canAdvance||!this.resultReady||this.resultsBusy,a.textContent=this.resultReady?this.canAdvance?i?`下一站 · ${Dn(Qe(t.settings.cupTracks)[Math.min(n-1,this.cupStage+1)]).name} →`:"下一步 · 結算累計積分 →":"等待房主繼續…":"正在同步成績…",this.get("restart").classList.toggle("hidden",e&&!(i&&s)),this.get("restart").disabled=t.online&&!this.canAdvance;const o=`${this.resultView}:${this.cupStage}:${this.series.length}:${this.newRecordIds.join()}:`+t.standings.map(l=>`${l.id}:${l.finishTime}:${l.completedLaps}`).join("|");if(o!==this.lastResult){if(this.lastResult=o,this.get("results-title").textContent=e?`第 ${this.cupStage+1} 站 · 衝線！`:"衝線！",this.get("summary-label-one").textContent="你的完賽時間",this.get("summary-label-two").textContent="最快單圈",this.get("result-column").textContent="完賽時間",i){const l=Fc(this.series),c=l.find(h=>h.id===t.localPlayerId);if(!c)return;this.get("results-title").textContent=s?"總積分排名":"累計積分 · 浪灣巡迴",this.get("finish-position").textContent=String(l.indexOf(c)+1).padStart(2,"0"),this.get("summary-label-one").textContent="你的累計積分",this.get("finish-time").textContent=c.points+" PTS",this.get("summary-label-two").textContent=s?"巡迴總用時":"本關獲得",this.get("best-lap").textContent=s?Ri(c.totalTime):"+"+c.lastPoints+" PTS",this.get("result-column").textContent="原積分 + 本關 → 累計",this.get("leaderboard").innerHTML=l.map((h,d)=>`<li class="${h.id===t.localPlayerId?"is-player":""} points-arrive"><span class="result-rank">${String(d+1).padStart(2,"0")}</span><i style="background:#${(t.racer(h.id)?.color??14215393).toString(16)}"></i><strong>${Nl(h.name)}<em>${h.id===t.localPlayerId?"你":h.human?"PLAYER":"AI"}</em></strong><span class="points-total"><small>${h.points-h.lastPoints} + ${h.lastPoints}</small><b>${h.points}</b></span></li>`).join(""),this.get("result-note").textContent=`${s?n+" 站完成！":"完成 "+(this.cupStage+1)+" / "+n+" 站。"} 名次積分 15 / 12 / 10 / 7 / 5 / 3 / 2 / 1；未完賽 0 分。同分先比較冠、亞、季軍等名次次數，再比總用時。`;return}this.get("finish-position").textContent=String(t.position).padStart(2,"0"),this.get("finish-time").textContent=Ri(t.player.finishTime)+(t.player.simulated?" *":""),this.get("best-lap").textContent=Number.isFinite(t.player.bestLap)?Ri(t.player.bestLap):"—",this.get("leaderboard").innerHTML=t.standings.map((l,c)=>`<li class="${l.id===t.localPlayerId?"is-player":""}"><span class="result-rank">${String(c+1).padStart(2,"0")}</span><i style="background:#${l.color.toString(16)}"></i><strong>${Nl(l.name)}${this.newRecordIds.includes(l.id)?'<small class="new-record">NEW RECORD</small>':""}${l.id===t.localPlayerId?"<em>你</em>":l.human?"":"<em>AI</em>"}</strong><span>${l.disconnected&&l.finishTime===null?"離線 · 未完賽":l.finishTime!==null?Ri(l.finishTime)+(l.simulated?" *":""):"—"}</span></li>`).join(""),this.get("result-note").textContent=t.racers.some(l=>l.simulated)?"* 為 20 秒期限內未完賽的估算成績；依已完成里程、平均車速與剩餘距離計算，保留當下順位。":"所有車手已完賽。下一場，換你領跑。"}}}class Tg{ctx=null;enabled=!0;engine=null;gain=null;init(){this.ctx||(this.ctx=new AudioContext,this.engine=this.ctx.createOscillator(),this.gain=this.ctx.createGain(),this.engine.type="triangle",this.gain.gain.value=0,this.engine.connect(this.gain),this.gain.connect(this.ctx.destination),this.engine.start()),this.ctx.resume()}tone(t,e=.12,i=.055,n="sine"){if(!this.ctx||!this.enabled)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain(),o=this.ctx.currentTime;s.type=n,s.frequency.setValueAtTime(t,o),a.gain.setValueAtTime(i,o),a.gain.exponentialRampToValueAtTime(.001,o+e),s.connect(a),a.connect(this.ctx.destination),s.start(o),s.stop(o+e),s.onended=()=>{s.disconnect(),a.disconnect()}}boost(){this.tone(220,.3,.045,"sawtooth"),this.tone(880,.5,.025)}finish(){[523,659,784,1047].forEach((t,e)=>setTimeout(()=>this.tone(t,.4,.05),e*150))}update(t,e){!this.ctx||!this.engine||!this.gain||(this.engine.frequency.setTargetAtTime(45+t*4.5,this.ctx.currentTime,.1),this.gain.gain.setTargetAtTime(e&&this.enabled?.019:0,this.ctx.currentTime,.06))}toggle(){this.enabled=!this.enabled}}class Xi{domElement=document.createElement("canvas");ctx=this.domElement.getContext("2d",{alpha:!1});outputColorSpace="";toneMapping=0;toneMappingExposure=1;info={render:{calls:0,triangles:0},memory:{geometries:0,textures:0}};width=1;height=1;pixelRatio=1;staticShapes=[];cacheReady=!1;geometry=new WeakMap;faces=[];viewMatrix=new Bt;projection=new Bt;normal=new D;a=new D;b=new D;c=new D;light=new D(-.4,.85,.3).normalize();setPixelRatio(t){this.pixelRatio=1}setSize(t,e){this.width=t,this.height=e,this.domElement.width=t,this.domElement.height=e}invalidate(){this.cacheReady=!1,this.staticShapes=[]}shape(t,e,i){const n=Array.isArray(t.material)?t.material[0]:t.material;if(!n.visible||n.opacity<.1)return null;const s=t.geometry;let a=this.geometry.get(s);if(!a){const h=s.getAttribute("position");if(!h)return null;const d=new Float32Array(h.count*3);for(let u=0;u<h.count;u++)d[u*3]=h.getX(u),d[u*3+1]=h.getY(u),d[u*3+2]=h.getZ(u);const f=s.index?Array.from(s.index.array):Array.from({length:h.count},(u,g)=>g);a={vertices:d,indices:f},this.geometry.set(s,a)}s.boundingSphere||s.computeBoundingSphere();const o=s.boundingSphere.center.clone().applyMatrix4(e),l=s.boundingSphere.radius*e.getMaxScaleOnAxis();if(l>1700)return null;let c=0;return l>200&&o.y<0?c=-2:l>200&&o.y<1&&(c=-1),{...a,color:i??n.color??new Ct(16777215),opacity:n.opacity,matrix:e.clone(),center:o,radius:l,layer:c,doubleSided:n.side===Te}}collect(t,e){const i=[];return t.traverse(n=>{if(!(n instanceof Ot)||!n.visible)return;let s=n,a=!1;for(;s;){if(!s.visible)return;s.userData.dynamic&&(a=!0),s=s.parent}if(a===e)if(n instanceof ii){const o=new Bt,l=new Bt,c=new Ct;for(let h=0;h<n.count;h++){if(n.getMatrixAt(h,o),o.elements[0]===0&&o.elements[5]===0&&o.elements[10]===0)continue;l.multiplyMatrices(n.matrixWorld,o),n.instanceColor?n.getColorAt(h,c):c.set(16777215);const d=this.shape(n,l,n.instanceColor?c.clone():void 0);d&&i.push(d)}}else{const o=this.shape(n,n.matrixWorld);o&&i.push(o)}}),i}render(t,e){t.updateMatrixWorld(),e.updateMatrixWorld(),this.viewMatrix.copy(e.matrixWorld).invert(),this.projection.copy(e.projectionMatrix),this.cacheReady||(this.staticShapes=this.collect(t,!1),this.cacheReady=!0),this.faces.length=0;let i=0;for(const s of[...this.staticShapes,...this.collect(t,!0)]){const a=s.center.clone().applyMatrix4(this.viewMatrix),o=Math.tan(e.fov*Math.PI/360);if(a.z-s.radius>-.2||a.z+s.radius<-145||Math.abs(a.x)>-a.z*o*e.aspect+s.radius||Math.abs(a.y)>-a.z*o+s.radius)continue;i++;const l=new Bt().multiplyMatrices(this.viewMatrix,s.matrix),c=l.elements,h=s.vertices,d=new Float32Array(h.length);for(let g=0;g<h.length;g+=3){const v=h[g],m=h[g+1],p=h[g+2];d[g]=c[0]*v+c[4]*m+c[8]*p+c[12],d[g+1]=c[1]*v+c[5]*m+c[9]*p+c[13],d[g+2]=c[2]*v+c[6]*m+c[10]*p+c[14]}const f=new It().getNormalMatrix(s.matrix),u=s.color.clone().convertLinearToSRGB();for(let g=0;g<s.indices.length;g+=3){const v=s.indices[g]*3,m=s.indices[g+1]*3,p=s.indices[g+2]*3;let y=[[d[v],d[v+1],d[v+2]],[d[m],d[m+1],d[m+2]],[d[p],d[p+1],d[p+2]]];if(y.every(R=>R[2]>-.3)||y.every(R=>R[2]<-210))continue;if(y.some(R=>R[2]>-.3)){const R=[];for(let I=0;I<y.length;I++){const z=y[I],B=y[(I+1)%y.length],X=z[2]<=-.3,G=B[2]<=-.3;if(X&&R.push(z),X!==G){const et=(-.3-z[2])/(B[2]-z[2]);R.push([z[0]+(B[0]-z[0])*et,z[1]+(B[1]-z[1])*et,-.3])}}y=R}if(y.length<3)continue;const x=[];for(const R of y)x.push(this.width*.5+R[0]/-R[2]*this.projection.elements[0]*this.width*.5,this.height*.5-R[1]/-R[2]*this.projection.elements[5]*this.height*.5);const _=(x[2]-x[0])*(x[5]-x[1])-(x[3]-x[1])*(x[4]-x[0]);if(!s.doubleSided&&_>=0||x.filter((R,I)=>I%2===0).every(R=>R<0)||x.filter((R,I)=>I%2===0).every(R=>R>this.width)||x.filter((R,I)=>I%2===1).every(R=>R<0)||x.filter((R,I)=>I%2===1).every(R=>R>this.height))continue;this.a.fromArray(h,v),this.b.fromArray(h,m),this.c.fromArray(h,p),this.normal.crossVectors(this.b.sub(this.a),this.c.sub(this.a)).applyMatrix3(f).normalize();const b=.7+Math.max(0,this.normal.dot(this.light))*.33,T=y.reduce((R,I)=>R-I[2],0)/y.length,A=Math.min(.65,Math.max(0,(T-100)/160)),P=(u.r*b*(1-A)+.64*A)*255,E=(u.g*b*(1-A)+.87*A)*255,M=(u.b*b*(1-A)+.93*A)*255;this.faces.push({points:x,depth:T,fill:`rgb(${Math.min(255,P)|0},${Math.min(255,E)|0},${Math.min(255,M)|0})`,opacity:s.opacity,layer:s.layer})}}const n=this.ctx;n.globalAlpha=1,n.fillStyle=t.userData.showroom?"#173e49":"#a4dfed",n.fillRect(0,0,this.width,this.height),n.fillStyle="#4fc5d1",t.userData.showroom||n.fillRect(0,this.height*.42,this.width,this.height*.58),this.faces.sort((s,a)=>s.layer-a.layer||a.depth-s.depth);for(const s of this.faces){n.globalAlpha=s.opacity,n.fillStyle=s.fill,n.beginPath(),n.moveTo(s.points[0],s.points[1]);for(let a=2;a<s.points.length;a+=2)n.lineTo(s.points[a],s.points[a+1]);n.closePath(),n.fill(),s.opacity===1&&(n.lineWidth=.55,n.strokeStyle=s.fill,n.stroke())}n.globalAlpha=1,this.info.render.calls=i,t.traverse(s=>{if(!s.userData.plate||!s.visible)return;for(let u=s.parent;u;u=u.parent)if(!u.visible)return;const a=new D(0,0,1).transformDirection(s.matrixWorld),o=s.getWorldPosition(new D);if(a.dot(e.position.clone().sub(o))<=0||o.distanceTo(e.position)>45)return;const l=o.clone().project(e);if(l.z>1||l.z<0)return;const c=new D(.86,0,0).applyMatrix4(s.matrixWorld).project(e),h=Math.max(24,Math.min(130,Math.abs(c.x-l.x)*this.width)),d=(l.x*.5+.5)*this.width,f=(-l.y*.5+.5)*this.height;n.fillStyle="#fff5d8",n.fillRect(d-h/2,f-h*.16,h,h*.32),n.fillStyle="#174953",n.font=`bold ${Math.max(8,h*.15)}px system-ui`,n.textAlign="center",n.textBaseline="middle",n.fillText(String(s.userData.plate),d,f,h*.92)}),this.info.render.triangles=this.faces.length,this.info.memory.geometries=this.staticShapes.length}dispose(){this.staticShapes=[],this.faces=[]}}const Fl=1e4,Ki=["x","y","z","vx","vz","heading","steering","speed","drifting","driftDirection","driftCharge","driftLevel","nitroCharges","nitroMeter","nitroTime","turboTime","turboLevel","boostEvent","collisionEvent","resetEvent","miniTurboEvent","nitroLatch","offroad","progress","safeS","vy","airborne","pitch","landingEvent","route","routeU","roll"];function wg(r,t,e,i,n,s,a){const o=Math.max(-4,Math.min(4,s))*a,l=o/2,c=Math.cos(l),h=Math.sin(l);r+=(i*c+n*h)*a,t+=(n*c-i*h)*a;const d=Math.cos(o),f=Math.sin(o);return{x:r,z:t,heading:e+o,vx:i*d+n*f,vz:n*d-i*f}}const or=["x","y","z","vx","vz","heading","steering","speed","drifting","driftDirection","driftCharge","driftLevel","nitroCharges","nitroMeter","nitroTime","turboTime","turboLevel","boostEvent","collisionEvent","resetEvent","miniTurboEvent","nitroLatch","offroad","progress","safeS","vy","airborne","pitch","landingEvent","route","routeU","itemType","itemCharges","itemLatch","itemCooldown","shieldTime","itemBoostTime","pulseTime","hitTime","itemEvent","pickupEvent","spinPhase","spinEvent","itemTypeRight","itemChargesRight","itemLatchRight","itemCooldownRight","lastPickupType","lastPickupSlot","shieldEvent","shieldImpactTime","hitSlide","roll"];function es(r){const t=["珊瑚 CORA","岬角 KAI","泡泡 BUB","燈塔 LUMI","波點 DOT","海鹽 SALT","小錨 ANKR"];return Array.from({length:8},(e,i)=>{const n=r.members.find(s=>s.seat===i);return{id:i,name:n?.name??t[Math.max(0,i-r.capacity)%t.length],kart:n?.kart??i%3,human:!!n,disconnected:!!n&&n.seen<0}}).filter(e=>r.aiEnabled!==!1||e.human)}function Ag(r){const t=r??{};return{throttle:t.throttle===1?1:0,brake:t.brake===1?1:0,steer:typeof t.steer=="number"&&Number.isFinite(t.steer)?Math.max(-1,Math.min(1,t.steer)):0,drift:t.drift===!0,nitro:t.nitro===!0,item:t.item===!0,itemRight:t.itemRight===!0}}const Tc=new URLSearchParams(location.search),Ol=Tc.has("nortc"),Rg=Tc.has("relayonly"),Cg=[{urls:["stun:stun.cloudflare.com:3478","stun:stun.l.google.com:19302"]}];class Pg{constructor(t,e){this.events=t,this.obstacles=e,window.addEventListener("pagehide",this.pagehide)}events;obstacles;room=null;id="";token="";cursor=0;round=0;seq=0;resetSeq=0;input=rr();peers=new Map;signals=[];worker=null;snapshot=null;closed=!1;pollBusy=!1;pollTimer=0;inputTimer=0;lastGood=0;lastSeq=-1;lastInputSeq=new Map;finishSent=!1;dropped=new Set;leaving=new Set;generation=0;qaAuto=!1;ws=null;wsOpen=!1;wsTimer=0;wsAttempts=0;pingTimer=0;rtt=-1;rttAt=0;snapAt=0;iceServers=Cg;gateway=!1;clockOffset=null;clockSamples=[];ownReport=null;onState=null;expectedBuild="";sentDirect=0;sentRelay=0;get isHost(){return this.room?.host===this.id}get seat(){return this.room?.members.find(t=>t.id===this.id)?.seat??0}peerOpen(t){const e=this.peers.get(t);return e?.pc.connectionState==="connected"&&e.channel?.readyState==="open"}others(){return this.room?this.room.members.filter(t=>t.id!==this.id&&t.seen>=0&&!this.leaving.has(t.id)):[]}get direct(){return this.room?this.isHost?this.others().filter(t=>Date.now()-t.seen<Fl).every(t=>this.peerOpen(t.id)):this.peerOpen(this.room.host):!1}get status(){if(!this.room)return"正在連線…";if(this.room.phase==="lobby")return this.wsOpen?"房間連線正常 · 即時":"房間連線正常";const t=this.rtt>=0&&Date.now()-this.rttAt<6e3?` ${Math.round(this.rtt)}ms`:"";if(this.gateway){const e=this.others();return(this.wsOpen?"伺服器主持"+t:"伺服器主持 · 輪詢中")+(e.length?` · 直連 ${e.filter(i=>this.peerOpen(i.id)).length}/${e.length}`:"")}if(this.isHost){const e=this.others();return e.length?`主持中 · 直連 ${e.filter(i=>this.peerOpen(i.id)).length}/${e.length}`:"主持中"}return this.direct?"直連"+t:this.wsOpen?"伺服器轉送"+t:"伺服器輪詢"}async api(t,e){const i=await fetch(Qi(t),{method:"POST",headers:{"content-type":"application/json",...Tn(),...this.token?{authorization:"Bearer "+this.token}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(7e3)}),n=await i.json();if(i.status===401&&us&&n.error==="請先輸入通關密碼"&&(qa(""),location.reload()),!i.ok)throw Object.assign(new Error(n.error??"連線失敗"),{status:i.status});return n}async enter(t,e,i,n,s="coast",a=nn){const o=await this.api(n?`/api/rooms/${n.toUpperCase()}/join`:"/api/rooms",{name:t,kart:e,capacity:i,track:s,...a});this.id=o.id,this.token=o.token,this.lastGood=Date.now(),this.room=o.room,this.events.room(this.room),this.connectWs(),await this.refreshIce(),this.poll(),this.inputTimer=window.setInterval(()=>{performance.now()-this.lastSendAt>80&&this.sendInput()},33),this.pingTimer=window.setInterval(()=>this.ping(),2e3)}async action(t,e={}){if(!this.room)return;const i=await this.api(`/api/rooms/${this.room.code}/action`,{id:this.id,action:t,...e});return i.room&&this.acceptRoom(i.room,i.snapshot),i}acceptRoom(t,e){if(this.closed||t.revision<(this.room?.revision??0))return;const i=!!this.room&&t.host!==this.room.host,n=t.revision!==(this.room?.revision??-1);if(i&&(this.worker?.terminate(),this.worker=null,this.finishSent=t.phase==="finished",this.lastInputSeq.clear(),this.dropped.clear(),!this.gateway)){for(const s of this.peers.values())s.pc.close();this.peers.clear(),this.signals=[]}if(this.room=t,this.events.room(t),t.phase==="closed"){this.shutdown("房間已關閉");return}t.phase==="lobby"&&this.worker&&(this.worker.terminate(),this.worker=null,this.snapshot=null,this.finishSent=!1);for(const[s,a]of this.peers)t.members.some(o=>o.id===s)||(a.pc.close(),this.peers.delete(s));if(this.gateway)for(const s of t.members){if(s.id<=this.id||s.seen<0||this.leaving.has(s.id))continue;const a=this.peers.get(s.id),o=a?.pc.connectionState,l=a?Date.now()-a.created:0;(!a||(o==="failed"||o==="closed")&&l>8e3||o!=="connected"&&l>2e4)&&this.offer(s.id).catch(()=>{})}if(this.isHost&&!this.gateway)for(const s of t.members){if(s.id===this.id)continue;const a=s.seen<0||this.leaving.has(s.id)||Date.now()-s.seen>Fl,o=this.peers.get(s.id);!a&&(!o||(o.pc.connectionState==="failed"||o.pc.connectionState==="closed")&&Date.now()-o.created>8e3)&&this.offer(s.id).catch(()=>{}),this.worker&&a!==this.dropped.has(s.seat)&&(this.worker.postMessage({kind:"disconnect",seat:s.seat,value:a}),a?this.dropped.add(s.seat):this.dropped.delete(s.seat))}t.phase!=="lobby"&&t.round!==this.round?(this.round=t.round,this.itemSeq=0,this.itemRightSeq=0,this.seq=0,this.resetSeq=0,this.lastSeq=-1,this.snapshot=e?.round===t.round?e:null,this.finishSent=!1,this.lastInputSeq.clear(),this.dropped.clear(),this.worker?.terminate(),this.worker=null,this.beginRound(t).catch(s=>this.events.error(s.message))):i&&this.isHost&&t.phase!=="lobby"&&(e?.round===t.round&&(!this.snapshot||e.seq>this.snapshot.seq)&&(this.snapshot=e),this.beginRound(t).catch(s=>this.events.error(s.message))),this.isHost&&n&&this.broadcastRoom()}broadcastRoom(){if(!this.room||!this.isHost)return;const t=JSON.stringify({kind:"room-state",room:this.room});for(const{control:i}of this.peers.values())i?.readyState==="open"&&i.send(t);const e=this.others().filter(i=>this.peers.get(i.id)?.control?.readyState!=="open").map(i=>i.id);e.length&&this.wsSend({kind:"room-state",to:e,room:this.room})}async beginRound(t){if(await this.events.start(t),!(this.closed||this.round!==t.round||this.room?.phase==="lobby")){if(this.sentDirect=this.sentRelay=0,this.pingBurst(),this.snapshot&&this.events.snapshot(this.snapshot),this.gateway){this.wsSend({kind:"obstacles",to:"server",round:t.round,obstacles:this.obstacles});return}this.isHost&&!this.worker&&(this.worker=new Worker(new URL(""+new URL("RaceWorker-DO7hF4Fj.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=e=>this.hostSnapshot(e.data),this.worker.onerror=()=>this.events.error("比賽主持程式發生錯誤，請房主重新開賽"),this.worker.postMessage({kind:"init",round:t.round,track:t.track,settings:An(t),roster:es(this.room??t),obstacles:this.obstacles,resume:this.snapshot?.round===t.round?this.snapshot:void 0}))}}async poll(){if(this.closed||!this.room||this.pollBusy)return;this.pollBusy=!0;const t=this.generation,e=this.signals.splice(0,24);this.room.phase==="racing"||this.room.phase;try{const i=this.room.phase==="racing",n=this.gateway||!this.isHost,s=this.gateway?!1:this.direct,a=n&&(this.snapAt===0||performance.now()-this.snapAt>400),o=i&&!s&&(!this.wsOpen||a),l=await this.api(`/api/rooms/${this.room.code}/sync`,{id:this.id,cursor:this.cursor,signals:e,relay:o,recover:n,input:n&&o?this.packet():void 0,snapshot:this.isHost&&!this.gateway&&this.snapshot?this.snapshot:void 0});if(this.closed||t!==this.generation)return;this.lastGood=Date.now(),this.acceptRoom(l.room,l.snapshot);for(const c of l.signals??[])this.cursor=Math.max(this.cursor,c.id),await this.handleSignal(c.sender,c.payload).catch(()=>{});if(this.isHost)for(const c of l.inputs??[])this.hostInput(c.seat,c.input);l.snapshot&&this.acceptSnapshot(l.snapshot)}catch(i){this.signals.unshift(...e);const n=i;if(n.status===401||n.status===404||n.status===410){this.shutdown(n.message);return}if(Date.now()-this.lastGood>45e3){this.shutdown("連線中斷超過 45 秒，請重新加入房間。");return}Date.now()-this.lastGood>8e3&&this.events.error("連線不穩，正在重新連線…")}finally{this.pollBusy=!1;const i=this.room?.phase==="racing"&&!(!this.gateway&&this.direct)&&(!this.wsOpen||(this.gateway||!this.isHost)&&performance.now()-this.snapAt>400);this.closed||(this.pollTimer=window.setTimeout(()=>this.poll(),i?100:700))}}makePeer(t){this.peers.get(t)?.pc.close();const e=new RTCPeerConnection({iceServers:this.iceServers,bundlePolicy:"max-bundle",...Rg?{iceTransportPolicy:"relay"}:{}}),i={pc:e,channel:null,control:null,pending:[],created:Date.now()};return this.peers.set(t,i),e.onicecandidate=n=>{n.candidate&&this.pushSignal(t,{candidate:n.candidate.toJSON()})},e.ondatachannel=n=>n.channel.label==="room-control"?this.bindControlChannel(t,n.channel):this.bindChannel(t,n.channel),i}bindControlChannel(t,e){const i=this.peers.get(t);i&&(i.control=e,e.onopen=()=>{this.isHost&&this.room&&e.send(JSON.stringify({kind:"room-state",room:this.room}))},e.onmessage=n=>{if(!(this.closed||typeof n.data!="string"||n.data.length>48e3))try{const s=JSON.parse(n.data);if(s.kind==="ping"){e.send(JSON.stringify({kind:"pong",t:s.t}));return}if(s.kind==="pong"){typeof s.t=="number"&&(this.rtt=performance.now()-s.t,this.rttAt=Date.now());return}if(this.isHost&&s.kind==="leave"&&this.room?.members.some(a=>a.id===t)){this.leaving.add(t);const a=this.room.members.find(o=>o.id===t).seat;this.worker?.postMessage({kind:"disconnect",seat:a,value:!0}),this.dropped.add(a)}else!this.isHost&&t===this.room?.host&&s.kind==="room-state"&&s.room?.code===this.room.code&&s.room.host===t&&Number.isSafeInteger(s.room.revision)&&this.acceptRoom(s.room)}catch{}})}bindChannel(t,e){const i=this.peers.get(t);i&&(i.channel=e,e.onmessage=n=>{if(!(typeof n.data!="string"||n.data.length>48e3))try{const s=JSON.parse(n.data);if(this.gateway){const a=this.room?.members.find(o=>o.id===t);a&&s.k==="s"&&s.id===a.seat&&s.r===this.round&&this.onState?.(s,"p2p");return}if(this.isHost){const a=this.room?.members.find(o=>o.id===t);a&&s.kind==="input"&&this.hostInput(a.seat,s)}else!this.gateway&&t===this.room?.host&&s.kind==="snapshot"&&this.acceptSnapshot(s)}catch{}})}async offer(t){if(typeof RTCPeerConnection>"u"||Ol)return;const e=this.makePeer(t);this.bindChannel(t,e.pc.createDataChannel("race",{ordered:!1,maxRetransmits:0})),this.bindControlChannel(t,e.pc.createDataChannel("room-control",{ordered:!0})),await e.pc.setLocalDescription(await e.pc.createOffer()),this.pushSignal(t,{description:e.pc.localDescription})}async handleSignal(t,e){if(typeof RTCPeerConnection>"u"||Ol||!this.room?.members.some(n=>n.id===t&&n.seen>=0)||this.leaving.has(t)||!this.gateway&&!this.isHost&&t!==this.room.host)return;let i=this.peers.get(t);if(e.description?.type==="offer"){if(this.gateway?this.id<t:this.isHost)return;i?.pc.remoteDescription?i=this.makePeer(t):i??=this.makePeer(t)}if(i??=this.makePeer(t),e.description){await i.pc.setRemoteDescription(e.description);for(const n of i.pending.splice(0))await i.pc.addIceCandidate(n);e.description.type==="offer"&&(await i.pc.setLocalDescription(await i.pc.createAnswer()),this.pushSignal(t,{description:i.pc.localDescription}))}else e.candidate&&(i.pc.remoteDescription?await i.pc.addIceCandidate(e.candidate):i.pending.push(e.candidate))}itemSeq=0;itemRightSeq=0;lastSendAt=0;packet(){const t=this.ownReport?.();return{kind:"input",round:this.round,seq:++this.seq,controls:this.input,reset:this.resetSeq,itemSeq:this.itemSeq,itemRightSeq:this.itemRightSeq,...t?{own:t}:{}}}sendInput(){if(!this.room||this.room.phase==="lobby"||this.closed)return;this.lastSendAt=performance.now();const t=this.packet(),e=t.own;if(this.gateway){if(e){const i=JSON.stringify({k:"s",r:this.round,id:this.seat,e:e.ep,t:e.t,b:e.b,w:e.w}),n=[];for(const s of this.others()){const a=this.peerOpen(s.id)?this.peers.get(s.id).channel:null;a?a.bufferedAmount<32e3&&(a.send(i),this.sentDirect++):(n.push(s.id),this.sentRelay++)}n.length&&(t.relay=n)}this.wsSend({kind:"input",to:"server",packet:t});return}if(this.isHost)this.hostInput(this.seat,t);else{const i=this.peers.get(this.room.host)?.channel;i?.readyState==="open"?i.bufferedAmount<32e3&&i.send(JSON.stringify(t)):this.wsSend({kind:"input",to:this.room.host,packet:t})}}hostInput(t,e){e.kind!=="input"||e.round!==this.round||!Number.isFinite(e.seq)||e.seq<=(this.lastInputSeq.get(t)??-1)||(this.lastInputSeq.set(t,e.seq),this.worker?.postMessage({kind:"input",seat:t,packet:{...e,controls:Ag(e.controls)}}))}hostSnapshot(t){if(this.closed||this.room?.phase==="lobby"||t.round!==this.round)return;this.snapshot=t,this.acceptSnapshot(t);const e=JSON.stringify(t);for(const{channel:n}of this.peers.values())n?.readyState==="open"&&n.bufferedAmount<64e3&&n.send(e);const i=this.others().filter(n=>!this.peerOpen(n.id)).map(n=>n.id);i.length&&this.wsSend({kind:"snapshot",to:i,data:t}),t.state==="finished"&&!this.finishSent&&(this.finishSent=!0,this.action("finish",{round:t.round,results:t.racers.map(n=>({id:n.id,finishTime:n.finishTime,simulated:n.simulated,assisted:n.assisted,completedLaps:n.completedLaps,nextCheckpoint:n.nextCheckpoint,checkpointTimes:n.checkpointTimes}))}).catch(()=>{this.finishSent=!1}))}acceptSnapshot(t){if(this.closed||this.room?.phase==="lobby"||t.round!==this.round||t.seq<=this.lastSeq||!this.room||t.racers?.length!==es(this.room).length)return;const e=new Set(es(this.room).map(i=>i.id));t.racers.some(i=>!e.delete(i.id))||e.size||(this.lastSeq=t.seq,this.snapshot=t,this.snapAt=performance.now(),this.events.snapshot(t))}connectWs(){if(this.closed||!this.room||this.ws||typeof WebSocket>"u")return;const t=new WebSocket(gg());this.ws=t,t.onopen=()=>{this.room&&t.send(JSON.stringify({kind:"auth",room:this.room.code,id:this.id,token:this.token}))},t.onmessage=e=>{if(!(typeof e.data!="string"||e.data.length>96e3))try{this.onWsMessage(JSON.parse(e.data))}catch{}},t.onerror=()=>t.close(),t.onclose=()=>{this.ws===t&&(this.ws=null,this.wsOpen=!1,!this.closed&&(this.wsTimer=window.setTimeout(()=>this.connectWs(),Math.min(8e3,500*2**Math.min(this.wsAttempts++,4)))))}}onWsMessage(t){if(!(this.closed||!this.room))switch(t.kind){case"auth-ok":this.wsOpen=!0,this.wsAttempts=0,this.pingBurst();break;case"auth-failed":this.wsAttempts=4,this.ws?.close();break;case"pong":if(typeof t.t=="number"){const e=performance.now(),i=e-t.t;this.rtt=i,this.rttAt=Date.now(),typeof t.st=="number"&&i>=0&&i<2e3&&(this.clockSamples.push({rtt:i,offset:t.st+i/2-e}),this.clockSamples.length>16&&this.clockSamples.shift(),this.clockOffset=this.clockSamples.reduce((n,s)=>s.rtt<n.rtt?s:n).offset)}break;case"input":if(this.isHost){const e=this.room.members.find(i=>i.id===t.from);e&&t.packet?.kind==="input"&&this.hostInput(e.seat,t.packet)}break;case"snapshot":if(t.data?.kind!=="snapshot")break;this.gateway?t.from==="server"&&this.acceptSnapshot(t.data):!this.isHost&&t.from===this.room.host&&this.acceptSnapshot(t.data);break;case"room-state":!this.isHost&&t.from===this.room.host&&t.room?.code===this.room.code&&t.room.host===t.from&&Number.isSafeInteger(t.room.revision)&&this.acceptRoom(t.room);break;case"state":if(this.gateway&&t.data?.k==="s"){const e=this.room.members.find(i=>i.id===t.from);e&&t.data.id===e.seat&&t.data.r===this.round&&this.onState?.(t.data,"relay")}break;case"signal":typeof t.from=="string"&&t.payload&&this.handleSignal(t.from,t.payload).catch(()=>{});break;case"undelivered":typeof t.to=="string"&&t.payload&&this.signals.push({to:t.to,payload:t.payload});break}}wsSend(t){const e=this.ws;return!this.wsOpen||!e||e.readyState!==WebSocket.OPEN||e.bufferedAmount>256e3?!1:(e.send(JSON.stringify(t)),!0)}pushSignal(t,e){this.wsSend({kind:"signal",to:t,payload:e})||this.signals.push({to:t,payload:e})}ping(){if(this.closed||!this.room||this.isHost&&!this.gateway)return;const t=JSON.stringify({kind:"ping",t:performance.now()}),e=this.peers.get(this.room.host)?.control;!this.gateway&&this.direct&&e?.readyState==="open"?e.send(t):this.wsOpen&&this.ws?.send(t)}pingBurst(){for(let t=0;t<6;t++)window.setTimeout(()=>this.ping(),t*160)}telemetry(t){if(!this.gateway||!this.room)return;const e=this.others();fetch(Qi("/api/telemetry"),{method:"POST",keepalive:!0,headers:{"content-type":"application/json",...Tn()},body:JSON.stringify({room:this.room.code,round:this.round,seat:this.seat,players:e.length+1,rtt:Math.round(this.rtt),offset:this.clockOffset===null?null:Math.round(this.clockOffset),ws:this.wsOpen,direct:e.filter(i=>this.peerOpen(i.id)).length,links:e.map(i=>this.peers.get(i.id)?.pc.connectionState??"none"),sentDirect:this.sentDirect,sentRelay:this.sentRelay,...t})}).catch(()=>{})}async refreshIce(){try{const t=await fetch(Qi("/api/ice"),{headers:Tn(),cache:"no-store",signal:AbortSignal.timeout(4e3)});if(!t.ok)return;const e=await t.json();this.gateway=e.serverHost===!0,this.expectedBuild=typeof e.build=="string"?e.build:"",Array.isArray(e.iceServers)&&e.iceServers.length&&(this.iceServers=e.iceServers)}catch{}}async leave(){this.notifyLeaving();try{await this.action("leave",{snapshot:this.isHost?this.snapshot:void 0})}finally{this.dispose()}}notifyLeaving(){const t=this.room&&!this.isHost?this.peers.get(this.room.host)?.control:null;t?.readyState==="open"&&t.send(JSON.stringify({kind:"leave"}))}pagehide=()=>{this.closed||!this.room||(this.notifyLeaving(),fetch(Qi(`/api/rooms/${this.room.code}/action`),{method:"POST",keepalive:!0,headers:{"content-type":"application/json",...Tn(),authorization:"Bearer "+this.token},body:JSON.stringify({id:this.id,action:"leave",snapshot:this.isHost?this.snapshot:void 0})}).catch(()=>{}),this.dispose())};shutdown(t){this.dispose(),this.events.closed(t)}dispose(){this.closed=!0,this.generation++,window.removeEventListener("pagehide",this.pagehide),clearTimeout(this.pollTimer),clearInterval(this.inputTimer),clearInterval(this.pingTimer),clearTimeout(this.wsTimer);const t=this.ws;this.ws=null,this.wsOpen=!1,t?.close(),this.worker?.terminate(),this.worker=null;for(const e of this.peers.values())e.pc.close();this.peers.clear()}}const Jr=1/120,Xs=30,Ci=r=>or.indexOf(r),Lg=new Set(Ki),Dg=or.map((r,t)=>({key:r,i:t})).filter(r=>!Lg.has(r.key)),Ig=Ki.map(Ci),Ug=["itemType","itemCharges","itemLatch","itemCooldown","itemEvent","pickupEvent","itemTypeRight","itemChargesRight","itemLatchRight","itemCooldownRight","lastPickupType","lastPickupSlot"].map(r=>({key:r,i:Ci(r)})),Ng=["shieldTime","itemBoostTime","pulseTime"].map(r=>({key:r,i:Ci(r)})),wi={hitTime:Ci("hitTime"),hitSlide:Ci("hitSlide"),spinPhase:Ci("spinPhase"),spinEvent:Ci("spinEvent"),shieldEvent:Ci("shieldEvent")},Qr=()=>({n:0,sum:0,max:0,age:0,ageMax:0}),Fg=()=>({frames:0,f34:0,f50:0,f100:0,fMax:0,drops:0,lost:0,resync:0,hits:0,clockJumps:0,clockAdj:0,snaps:0,snapLate:0,snapGapMax:0,snapAge:0,snapAgeMax:0,p2p:Qr(),relay:Qr(),snap:Qr(),far:0,ghosts:0});class Og{constructor(t){this.race=t}race;received=0;target=null;clock=null;send=null;zero=null;floor=1/0;owning=!1;ep=-1;tick=0;w=0;puppets=new Map;tele=Fg();lastSend=0;lastFrame=0;now(t=performance.now()){return this.zero===null?0:(t-this.zero)/1e3}syncClock(t,e){const i=a=>t.state==="racing"?a-t.time*1e3:a+t.countdown*1e3,n=this.clock?.()??null;let s;if(t.st!==void 0&&n!==null?s=i(t.st)-n:s=this.floor=Math.min(this.floor+.5,i(e)),this.zero===null||Math.abs(s-this.zero)>150)this.zero!==null&&this.tele.clockJumps++,this.zero=s;else{const a=fe(s-this.zero,-.5,.5);this.zero+=a,this.tele.clockAdj+=Math.abs(a)}}accept(t){const e=this.race,i=performance.now(),n=this.tele;if(this.received){const l=i-this.received;n.snapGapMax=Math.max(n.snapGapMax,l),l>80&&n.snapLate++}n.snaps++,this.received=i,this.target=t;const s=t.state==="countdown"||t.state==="racing";s&&this.syncClock(t,i);const a=this.now(i),o=fe(a-t.time,0,.25);if(!s)e.state=t.state,e.time=t.time,e.countdown=t.countdown;else if(e.state!=="countdown"&&e.state!=="racing"&&(e.state=a<0?"countdown":"racing",e.countdown=Math.max(0,-a)),t.state==="racing"){const l=(a-t.time)*1e3;n.snapAge+=l,n.snapAgeMax=Math.max(n.snapAgeMax,l)}t.items&&e.items.accept(t.items),t.traffic&&e.traffic.accept(t.traffic);for(const l of t.racers){const c=e.racer(l.id);if(!c)continue;const h=l.id===e.localPlayerId;if(c.body.fixed=!h,c.simulated=l.simulated,c.disconnected=l.disconnected,c.assisted=c.assisted||l.assisted===!0,h&&s&&l.ep!==void 0&&l.finishTime===null){l.ep!==this.ep||!this.owning?this.adopt(c,l,t):this.effects(c,l,o);continue}if(h&&this.owning){const d=c.body;this.owning=!1,this.puppets.set(c.id,{t:a,fresh:-1/0,x:d.x,y:d.y,z:d.z,vx:d.vx,vy:d.vy,vz:d.vz,h:d.heading,w:this.w,ox:0,oy:0,oz:0,oh:0,dist:c.distance,distT:a,ep:void 0,done:!1,via:"snap"})}c.completedLaps=l.completedLaps,c.nextCheckpoint=l.nextCheckpoint,c.finishTime=l.finishTime,c.bestLap=l.bestLap||1/0,this.hosted(c,l,t,a)}e.finishDeadline=t.finishDeadline??(e.racers.some(l=>l.finishTime!==null)?Math.min(...e.racers.map(l=>l.finishTime??1/0))+20:null),e.finishOrder=e.racers.filter(l=>l.finishTime!==null).sort((l,c)=>l.finishTime-c.finishTime).map(l=>l.id)}adopt(t,e,i){const n=this.race,s=t.body,a=s;for(let o=0;o<or.length;o++)Number.isFinite(Number(e.body[o]))&&(a[or[o]]=e.body[o]);s.projection=n.track.project(s.x,s.z,void 0,s.route,s.y),s.surface=s.airborne?"AIR":s.offroad?"GRASS":s.route?"SHORTCUT":"ROAD",t.completedLaps=e.completedLaps,t.nextCheckpoint=e.nextCheckpoint,t.distance=e.distance,t.finishTime=null,t.bestLap=e.bestLap||1/0,t.lastS=e.lastS??s.progress,t.lastLapTime=e.lastLapTime??0,t.checkpointTimes=[...e.checkpointTimes??[]],t.pads=new Set(e.pads??[]),t.lastX=s.x,t.lastZ=s.z,t.lastRoute=s.route,t.resetSeen=s.resetEvent,t.ai.steering=s.steering,t.ai.resetSeen=s.resetEvent,this.ep!==-1&&this.tele.resync++,this.ep=e.ep,this.owning=!0,this.w=0,this.puppets.delete(t.id),this.tick=i.state==="racing"?Math.round(i.time*120):0}effects(t,e,i){const n=t.body,s=n,a=e.body;for(const{key:l,i:c}of Ug)s[l]=a[c];Number(a[wi.shieldEvent])!==n.shieldEvent&&(n.shieldEvent=Number(a[wi.shieldEvent]),n.shieldImpactTime=.08);for(const{key:l,i:c}of Ng){const h=Math.max(0,Number(a[c])-i),d=Number(s[l]);Math.abs(d-h)<=.1||(l==="itemBoostTime"&&h>d+.5&&n.boostEvent++,s[l]=h)}const o=Number(a[wi.spinEvent]);if(o!==n.spinEvent){const l=Number(a[wi.hitTime])-i;l>0&&(bc(n,Number(a[wi.hitSlide])),n.hitTime=l,n.spinPhase=Math.min(1,Number(a[wi.spinPhase])+i/ds),this.tele.hits++),n.spinEvent=o}}hosted(t,e,i,n){const s=t.body,a=this.puppets.get(t.id);for(const{key:l,i:c}of Dg)Number.isFinite(Number(e.body[c]))&&(s[l]=e.body[c]);(!a||a.ep!==e.ep||e.ot===void 0||e.ot>a.fresh)&&this.place(t,Ig.map(l=>e.body[l]),i.time,e.ot??i.time,void 0,"snap",n);const o=this.puppets.get(t.id);o.ep=e.ep,o.done=e.finishTime!==null,o.dist=e.distance,o.distT=e.ot??i.time}ingest(t,e){const i=this.race,n=i.racer(t?.id),s=n&&this.puppets.get(n.id);if(!n||!s||n.id===i.localPlayerId||t.r!==this.target?.round||s.done||s.ep===void 0||t.e!==s.ep||!Number.isFinite(t.t)||!Number.isFinite(t.w)||!(t.t>s.fresh)||!Array.isArray(t.b)||t.b.length!==Ki.length)return;const a=n.body;t.b.every((o,l)=>typeof a[Ki[l]]=="boolean"?typeof o=="boolean":Number.isFinite(o))&&this.place(n,t.b,t.t,t.t,t.w,e,this.now())}place(t,e,i,n,s,a,o){const l=t.body,c=l,h=this.puppets.get(t.id),d=this.race.state==="racing",f=h&&d?this.pose(h,o,!0):null,u=l.resetEvent,g=l.route;for(let _=0;_<Ki.length;_++)(typeof e[_]=="boolean"||Number.isFinite(Number(e[_])))&&(c[Ki[_]]=e[_]);s??=h&&i>h.t&&i-h.t<.2?fe(Je(l.heading-h.h)/(i-h.t),-4,4):h?.w??0;const v={t:i,fresh:n,x:l.x,y:l.y,z:l.z,vx:l.vx,vy:l.vy,vz:l.vz,h:l.heading,w:s,ox:0,oy:0,oz:0,oh:0,dist:h?.dist??t.distance,distT:h?.distT??i,ep:h?.ep,done:h?.done??!1,via:a};if(this.puppets.set(t.id,v),f&&l.resetEvent!==u&&this.ghost(t),!f||l.resetEvent!==u||l.route!==g)return;const m=this.pose(v,o,!0),p=Math.hypot(f.x-m.x,f.z-m.z),y=this.tele[a],x=(o-i)*1e3;if(y.n++,y.sum+=p,y.max=Math.max(y.max,p),y.age+=x,y.ageMax=Math.max(y.ageMax,x),p>8){this.tele.far++,this.ghost(t);return}v.ox=f.x-m.x,v.oy=f.y-m.y,v.oz=f.z-m.z,v.oh=Je(f.h-m.h),p>1.5&&this.ghost(t)}pose(t,e,i){const n=i?fe(e-t.t,-.3,.4):0,s=wg(t.x,t.z,t.h,t.vx,t.vz,t.w,n);return{x:s.x+t.ox,y:t.y+t.vy*n+t.oy,z:s.z+t.oz,h:s.heading+t.oh,vx:s.vx,vz:s.vz}}ghost(t){this.owning&&!t.body.ghost&&t.id!==this.race.localPlayerId&&(t.body.ghost=!0,this.tele.ghosts++)}park(t){const e=this.race.player.body,i=e.hitTime>0||e.shieldImpactTime>0;for(const n of this.race.racers){const s=this.puppets.get(n.id);if(!s||n.id===this.race.localPlayerId)continue;const a=n.body,o=this.pose(s,t,!0);(t-s.t>.4||i||n.body.hitTime>0||n.body.shieldImpactTime>0)&&this.ghost(n),a.soft=!0,a.x=o.x,a.y=o.y,a.z=o.z,a.heading=Je(o.h),a.vx=o.vx,a.vz=o.vz}}yielded(){for(const t of this.race.racers){const e=t.body;if(!e.pushX&&!e.pushZ)continue;const i=this.puppets.get(t.id);i&&(i.ox+=e.pushX,i.oz+=e.pushZ),e.pushX=e.pushZ=0}}report(){if(!this.owning||this.zero===null)return null;const t=this.race.player,e=t.body,i=n=>Math.round(n*1e3)/1e3;return{ep:this.ep,t:this.race.state==="countdown"?i(Math.min(0,this.now())):Math.round(this.tick/120*1e4)/1e4,b:Ki.map(n=>typeof e[n]=="number"?i(e[n]):e[n]),w:i(this.w),laps:t.completedLaps,next:t.nextCheckpoint,dist:i(t.distance),lastS:i(t.lastS),best:Number.isFinite(t.bestLap)?t.bestLap:0,lapAt:t.lastLapTime,fin:t.finishTime,ct:t.checkpointTimes.slice(-4),pads:[...t.pads]}}frame(t,e){const i=this.race,n=performance.now(),s=this.target,a=this.tele;if(s&&this.zero!==null){const o=this.now(n),l=s.state==="countdown"||s.state==="racing";if(l&&o<0)i.state="countdown",i.countdown=-o,i.time=0,this.owning&&(this.tick=0);else if(l){if(i.state="racing",i.countdown=0,this.lastFrame){const f=n-this.lastFrame;a.frames++,a.fMax=Math.max(a.fMax,f),f>34&&a.f34++,f>50&&a.f50++,f>100&&a.f100++}if(this.owning){const f=Math.floor(o*120+1e-6);this.tick>f+6&&(this.tick=f);let u=f-this.tick;if(u>Xs){a.drops++,a.lost+=(u-Xs)*Jr,this.tick=f-Xs,u=Xs;for(const g of i.racers)g.id!==i.localPlayerId&&this.ghost(g)}if(u>0){const g=i.player.body,v=g.heading,m=g.resetEvent;for(let p=0;p<u;p++)i.time=++this.tick/120,this.park(i.time),i.stepOwner(t,Jr),this.yielded();this.w=g.resetEvent===m?fe(Je(g.heading-v)/(u*Jr),-4,4):0}}i.time=o}this.lastFrame=l&&o>=0?n:0;const c=i.state==="racing";c&&n-this.received<200&&i.traffic.extrapolate(e);const h=Math.exp(-e*10),d=fe(o-s.time,0,.25);for(const f of i.racers){const u=this.puppets.get(f.id);if(!u||this.owning&&f.id===i.localPlayerId)continue;const g=f.body,v=s.racers.find(y=>y.id===f.id);u.ox*=h,u.oy*=h,u.oz*=h,u.oh*=h;const m=this.pose(u,o,c);g.x=m.x,g.y=m.y,g.z=m.z,g.heading=Je(m.h),g.vx=m.vx,g.vz=m.vz,g.projection=i.track.project(g.x,g.z,g.projection.route===g.route?g.projection.index:void 0,g.route,g.y),g.surface=g.airborne?"AIR":g.offroad?"GRASS":g.route?"SHORTCUT":"ROAD";const p=v?Number(v.body[wi.hitTime]):0;p>0&&c&&(g.hitTime=Math.max(0,p-d),g.spinPhase=Math.min(1,Number(v.body[wi.spinPhase])+d/ds)),g.ghost&&(!this.owning||o-u.t<=.4&&Math.hypot(u.ox,u.oz)<.5&&Math.hypot(g.x-i.player.body.x,g.z-i.player.body.z)>2.8)&&(g.ghost=!1),f.distance=u.done||!c?u.dist:u.dist+g.speed*fe(o-u.distT,0,.5)}}n-this.lastSend>=30&&(this.lastSend=n,this.send?.())}}let zg;class po{constructor(t){this.change=t,this.root.className="track-picker",this.root.innerHTML=zg??=li.map((e,i)=>{const n=new hs(e.id,!1),s=n.bounds,a=Math.min(166/(s.maxX-s.minX),86/(s.maxZ-s.minZ)),o=(h,d)=>`${(90+(h-(s.minX+s.maxX)/2)*a).toFixed(1)},${(49+(d-(s.minZ+s.maxZ)/2)*a).toFixed(1)}`,l=n.points.filter((h,d)=>d%4===0).map(h=>o(h.x,h.z)).join(" "),c=n.branches.map(h=>`<polyline class="${e.theme==="city"?"street-line":"shortcut-line"}" points="${h.points.filter((d,f)=>f%3===0).map(d=>o(d.x,d.z)).join(" ")}"/>`).join("");return`<button type="button" class="track-choice" data-track="${e.id}" style="--track-color:#${e.color.toString(16)}"><span class="track-choice-meta">0${i+1}<small>${e.difficulty}</small></span><svg viewBox="0 0 180 100" aria-hidden="true"><polygon points="${l}"/>${c}</svg><strong>${e.name}</strong><small>${e.description}</small><span class="track-pending" role="status"><i class="loading-spinner" aria-hidden="true"></i>切換中…</span></button>`}).join(""),this.root.querySelectorAll("[data-track]").forEach(e=>e.onclick=()=>{this.set(e.dataset.track),this.change(this.selected)}),this.set("coast")}change;root=document.createElement("div");selected="coast";pending=null;enabled=!0;setPending(t){this.pending=t,this.root.setAttribute("aria-busy",String(t!==null)),this.set(this.selected,this.enabled)}set(t,e=!0){this.enabled=e,this.selected=this.pending??li.find(i=>i.id===t)?.id??"coast",this.root.querySelectorAll("[data-track]").forEach(i=>{const n=i.dataset.track===this.pending;i.classList.toggle("selected",i.dataset.track===this.selected),i.classList.toggle("is-pending",n),i.setAttribute("aria-pressed",String(i.dataset.track===this.selected)),i.setAttribute("aria-busy",String(n)),i.disabled=!e||this.pending!==null})}}class kg{constructor(t){this.change=t,this.root.className="cup-picker",this.root.innerHTML='<div class="setup-label">自訂巡迴賽道 <span>先選站次，再點賽道</span></div><div class="cup-stations"></div><p class="cup-hint">可調整順序；重複選取時會交換站次。</p><div class="cup-circuits"></div>',this.picker=new po(e=>{if(!this.enabled||this.pending)return;const i=[...this.value],n=i.indexOf(e);n!==this.active&&(n>=0&&(i[n]=i[this.active]),i[this.active]=e,this.set(i,this.enabled),this.change([...i]))}),this.root.querySelector(".cup-circuits").append(this.picker.root),this.set(this.value)}change;root=document.createElement("section");value=Qe();active=0;enabled=!0;pending=!1;picker;set(t,e=!0,i=!1){this.value=Qe(t),this.enabled=e,this.pending=i,this.active=Math.min(this.active,this.value.length-1);const n=this.root.querySelector(".cup-stations");n.children.length!==this.value.length&&(n.innerHTML=this.value.map((s,a)=>`<button type="button" data-stage="${a}"><small>第 ${a+1} 站</small><strong></strong><span class="cup-pending"><i class="loading-spinner" aria-hidden="true"></i>更新中…</span></button>`).join(""),n.querySelectorAll("[data-stage]").forEach(s=>s.onclick=()=>{this.pending||!this.enabled||(this.active=Number(s.dataset.stage),this.set(this.value,this.enabled))})),this.root.setAttribute("aria-busy",String(i)),this.root.querySelectorAll("[data-stage]").forEach((s,a)=>{s.querySelector("strong").textContent=Dn(this.value[a]).name,s.classList.toggle("selected",a===this.active),s.classList.toggle("is-pending",i&&a===this.active),s.setAttribute("aria-pressed",String(a===this.active)),s.disabled=i||!e}),this.picker.setPending(null),this.picker.set(this.value[this.active],e&&!i),i&&this.picker.setPending(this.value[this.active])}}class $a{constructor(t){this.change=t,this.root.className="race-options",this.root.innerHTML=`<div class="setup-label">比賽模式</div><div class="mode-options"><button data-field="mode" data-value="single"><strong>單站競速</strong><small>自由選擇賽道 · 3 圈決勝</small></button><button data-field="mode" data-value="championship"><strong>排名賽 · 浪灣巡迴</strong><small>三條不同賽道 · 累計積分</small></button></div>
      <div class="cup-settings"><div class="setup-label">賽程安排</div><div class="mode-options"><button data-field="trackOrder" data-value="custom"><strong>自訂賽程</strong><small>選擇賽道與出賽順序</small></button><button data-field="trackOrder" data-value="random"><strong>隨機賽程</strong><small>開賽時統一抽出，不重複</small></button></div><p class="random-cup-hint setup-hint"></p></div>
      <div class="setup-label">AI 車手</div><div class="mode-options"><button data-field="aiEnabled" data-value="true"><strong>加入 AI</strong><small>補齊 8 台車同場競速</small></button><button data-field="aiEnabled" data-value="false"><strong>不加入 AI</strong><small>只讓房內真人出賽 · 可獨自挑戰</small></button></div>
      <div class="ai-difficulty"><div class="setup-label">AI 強度</div><div class="difficulty-options">${Object.entries(In).map(([e,i])=>`<button data-field="difficulty" data-value="${e}" title="${i.description}">${i.name}</button>`).join("")}</div><p class="difficulty-hint setup-hint"></p></div>
      <div class="setup-label">氣候 <span>晚霞與雨夜自動開啟車燈</span></div><div class="weather-options">${Object.entries(zl).map(([e,i])=>`<button data-field="weather" data-value="${e}"><strong>${e==="sunny"?"☀":e==="sunset"?"◒":e==="rain"?"☂":"⤨"} ${i}</strong><small>${e==="rain"?"濕滑路面 · 提早入彎":e==="random"?"每一站由房間統一抽選":e==="sunset"?"暖色霞光 · 日落疾行":"明亮海岸 · 標準抓地"}</small></button>`).join("")}</div>
      <div class="setup-label">道具規則 <span>獨立套用至所有關卡</span></div><div class="mode-options item-options"><button data-field="itemsEnabled" data-value="true"><strong>道具賽</strong><small>問號補給 · 10 種等機率道具 · 雙槽</small></button><button data-field="itemsEnabled" data-value="false"><strong>純競速</strong><small>無問號道具 · 漂移與氮氣照常</small></button></div>`,this.cup=new kg(e=>{this.set({...this.value,cupTracks:e}),this.change({...this.value},"cupTracks")}),this.root.querySelector(".cup-settings").append(this.cup.root),this.root.querySelectorAll("[data-field]").forEach(e=>{e.dataset.field==="mode"&&(e.dataset.mode=e.dataset.value),e.dataset.field==="difficulty"&&(e.dataset.difficulty=e.dataset.value),e.onclick=()=>{if(!this.enabled||this.pending)return;const i=e.dataset.field,n={...this.value,[i]:i==="itemsEnabled"||i==="aiEnabled"?e.dataset.value==="true":e.dataset.value};(i==="weather"||i==="mode")&&(n.activeWeather=void 0),this.set(n),this.change({...this.value},i)},e.insertAdjacentHTML("beforeend",'<span class="option-pending" role="status"><i class="loading-spinner" aria-hidden="true"></i>切換中…</span>')}),this.set(this.value)}change;root=document.createElement("div");value={...nn};enabled=!0;pending=null;pendingField=null;cup;setPending(t,e=null){this.pending=t,this.pendingField=e,this.root.setAttribute("aria-busy",String(!!t)),this.set(this.value,this.enabled)}set(t,e=!0){this.value=An(this.pending??t),this.enabled=e,this.root.querySelectorAll("[data-field]").forEach(a=>{const o=a.dataset.field,l=a.dataset.value===String(this.value[o]);a.disabled=!e||!!this.pending;const c=!!this.pending&&l&&this.pendingField===o;a.classList.toggle("is-pending",c),a.setAttribute("aria-busy",String(c)),a.classList.toggle("selected",l),a.setAttribute("aria-pressed",String(l))});const i=this.value.mode==="championship",n=this.value.trackOrder==="random";this.root.querySelector(".difficulty-hint").textContent=In[this.value.difficulty].description,this.root.querySelector(".ai-difficulty").classList.toggle("hidden",!this.value.aiEnabled),this.root.querySelector(".cup-settings").classList.toggle("hidden",!i),this.root.querySelector('[data-field="weather"][data-value="random"]').classList.toggle("hidden",!i);const s=this.root.querySelector(".random-cup-hint");s.classList.toggle("hidden",!n),s.textContent=`開賽時從 ${li.length} 條賽道隨機抽出 3 條，同房所有人使用相同順序。`,this.cup.root.classList.toggle("hidden",!i||n),this.cup.set(this.value.cupTracks,e&&!this.pending,!!this.pending&&this.pendingField==="cupTracks")}}async function Bg(r,t){const e=document.activeElement,i=document.createElement("textarea");i.value=r,i.readOnly=!0,i.setAttribute("aria-label","複製內容"),i.style.cssText="position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;font-size:16px;",t.append(i);let n=!1;try{i.focus(),i.select(),i.setSelectionRange(0,r.length),n=document.execCommand("copy")}catch{}finally{i.remove(),e?.focus({preventScroll:!0})}if(n)return!0;try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(r),!0}catch{}return!1}class Hg{constructor(t){this.actions=t,this.root.className="lobby-layer hidden",this.root.innerHTML=`<div class="lobby-card"><button id="lobby-close" class="text-button lobby-back">← 返回</button><div class="eyebrow">COASTAL CREW · ONLINE</div><h2>一起追上海風。</h2><p class="lobby-intro">最多 8 人同場競速，可選擇 AI 補位或只有真人出賽。</p>
      <div id="lobby-entry"><div id="entry-choice" class="entry-choice"><button id="open-create" class="primary"><strong>建立房間</strong><small>設定比賽 · 一個人也能玩</small></button><button id="open-join" class="secondary"><strong>加入房間</strong><small>輸入朋友的房間代碼</small></button></div><div id="entry-create" class="hidden"><label class="field-label">車手名字 <input id="driver-name" maxlength="12" autocomplete="off" placeholder="你的名字會印在前後車牌"></label>
      <div class="lobby-ride"><div><small>我的座駕</small><strong class="chosen-kart"></strong></div><button id="entry-choose-kart" class="secondary">進入車庫選車 →</button></div>
      <div id="entry-race-options"></div><div class="lobby-option"><h3>建立房間</h3><label class="field-label">真人名額 <select id="new-capacity">${Array.from({length:8},(o,l)=>`<option value="${l+1}" ${l===1?"selected":""}>${l+1} 人 + ${7-l} 台 AI</option>`).join("")}</select></label><button id="create-room" class="primary">建立房間</button></div></div><div id="entry-join" class="hidden"><label class="field-label">房間代碼 <input id="join-code" maxlength="6" autocomplete="off" placeholder="例如 A2B3C4"></label><button id="join-room" class="primary">加入房間 →</button><p class="lobby-tip">加入後可修改名字與選車；賽道、模式和 AI 強度由房主設定。</p></div></div>
      <div id="lobby-room" class="hidden"><div class="room-code-row"><div><span>房間代碼</span><strong id="room-code"></strong></div><button id="copy-room" class="secondary">複製房間號碼</button></div>
      <div id="copy-fallback" class="hidden"><label class="field-label">房間號碼 <input id="copy-value" readonly></label><p class="lobby-tip">瀏覽器未允許自動複製，請按 Ctrl+C／⌘C 或長按複製。</p></div><label id="capacity-label" class="field-label">真人名額 <select id="room-capacity">${Array.from({length:8},(o,l)=>`<option value="${l+1}">${l+1} 人 + ${7-l} 台 AI</option>`).join("")}</select><span id="capacity-pending" class="pending-label hidden" role="status"><i class="loading-spinner" aria-hidden="true"></i>切換中…</span></label>
      <div id="room-race-options"></div><div id="room-tracks"></div><p class="lobby-tip">房主選擇賽道。切換賽道後，所有車手需重新準備。</p><div class="room-profile"><label class="field-label">我的車手名字 <input id="room-name" maxlength="12" autocomplete="off"></label><button id="save-name" class="secondary">更新名字</button></div><div class="lobby-ride"><div><small>我的座駕</small><strong class="chosen-kart"></strong></div><button id="room-choose-kart" class="secondary">進入車庫選車 →</button></div><div id="room-members" class="room-members"></div><p id="room-summary"></p><div class="room-actions"><button id="ready-room" class="secondary">準備好了</button><button id="start-room" class="primary">開始比賽</button><button id="leave-room" class="text-button">離開房間</button></div><p class="lobby-tip">所有人到齊並按下準備後，由房主開賽。途中退出由 AI 接手；房主離開時自動移交主持權。</p></div>
      <p id="lobby-status" class="lobby-status" role="status"></p></div>`,document.querySelector("#app").append(this.root),this.input("driver-name").value=localStorage.getItem("tidebreak-name")??"";const e=new URLSearchParams(location.search).get("room");e&&(this.input("join-code").value=e.toUpperCase().slice(0,6));const i=(o,l)=>this.get(o).addEventListener("click",()=>{this.run(l)}),n=()=>{const o=this.input("driver-name").value.trim();if(!o)throw new Error("請先填寫車手名字");return localStorage.setItem("tidebreak-name",o),o};this.picker=new po(o=>{this.run(async()=>{this.picker.setPending(o);try{await t.track(o)}finally{this.picker.setPending(null)}})}),this.get("room-tracks").append(this.picker.root),this.setKart(0),this.entryOptions=new $a(()=>{}),this.get("entry-race-options").append(this.entryOptions.root),this.roomOptions=new $a((o,l)=>{this.run(async()=>{this.roomOptions.setPending(o,l);try{await t.settings(o)}finally{this.roomOptions.setPending(null)}})}),this.get("room-race-options").append(this.roomOptions.root);const s=()=>this.kart;i("entry-choose-kart",t.choose),i("room-choose-kart",t.choose),i("create-room",()=>t.create(n(),s(),Number(this.input("new-capacity").value),this.entryOptions.value)),i("open-create",async()=>{this.input("driver-name").value.trim()||(this.input("driver-name").value="車手"+crypto.getRandomValues(new Uint16Array(1))[0].toString().padStart(4,"0").slice(-4));const o=this.get("open-create");o.disabled=!0,o.setAttribute("aria-busy","true"),o.innerHTML='<i class="loading-spinner"></i> 建立中…';try{await t.create(n(),s(),1,{...nn})}finally{o.disabled=!1,o.setAttribute("aria-busy","false"),o.innerHTML="<strong>建立房間</strong><small>立即建立 · 再選賽道與人數</small>"}}),i("open-join",()=>this.showEntry("join")),i("join-room",()=>{const o=this.input("join-code").value.trim().toUpperCase();if(!/^[A-Z2-9]{6}$/.test(o))throw new Error("請填寫 6 碼房間代碼");return this.input("driver-name").value.trim()||(this.input("driver-name").value="車手"+crypto.getRandomValues(new Uint16Array(1))[0].toString().padStart(4,"0").slice(-4)),t.join(n(),s(),o)}),i("lobby-close",()=>this.room?t.leave():this.entryView==="choice"?t.close():this.showEntry("choice")),i("leave-room",t.leave);const a=async o=>{const l=this.input("room-name").value.trim();if(!l)throw new Error("請先填寫車手名字");await t.ready(s(),o,l),this.nameDirty=!1,this.input("driver-name").value=l,localStorage.setItem("tidebreak-name",l)};this.input("room-name").oninput=()=>{this.nameDirty=!0},this.get("save-name").setAttribute("aria-live","polite"),i("save-name",()=>this.updateName(()=>a(!1))),i("ready-room",()=>a(!this.ready)),i("start-room",t.start),this.get("room-capacity").addEventListener("change",()=>{this.run(async()=>{this.pendingCapacity=Number(this.input("room-capacity").value),this.get("capacity-pending").classList.remove("hidden"),this.input("room-capacity").disabled=!0;try{await t.capacity(this.pendingCapacity)}finally{this.pendingCapacity=null,this.get("capacity-pending").classList.add("hidden")}})}),this.get("copy-room").onclick=()=>{this.copyRoomCode()},this.input("copy-value").onclick=()=>this.input("copy-value").select(),this.input("join-code").onkeydown=o=>{o.key==="Enter"&&(o.preventDefault(),this.get("join-room").click())},this.showEntry(e?"join":"choice")}actions;root=document.createElement("section");room=null;id="";busy=!1;ready=!1;kart=0;picker;entryOptions;roomOptions;entryView="choice";pendingCapacity=null;nameDirty=!1;nameStatusTimer=0;get(t){return this.root.querySelector("#"+t)}input(t){return this.get(t)}setKart(t){this.kart=t,this.root.querySelectorAll(".chosen-kart").forEach(e=>e.textContent=Pn[t].name+" · "+Pn[t].subtitle.split(" · ")[1])}showEntry(t){this.entryView=t;for(const e of["choice","create","join"])this.get("entry-"+e).classList.toggle("hidden",e!==t);this.message(""),t==="join"&&this.input("join-code").focus()}async copyRoomCode(){if(!this.room)return;const t=this.room.code,e=await Bg(t,this.root);if(this.get("copy-fallback").classList.toggle("hidden",e),e)this.message("房間號碼已複製");else{const i=this.input("copy-value");i.value=t,i.focus(),i.select(),this.message("房間號碼已選取，請手動複製")}}resetNameStatus(){clearTimeout(this.nameStatusTimer),this.nameStatusTimer=0;const t=this.get("save-name");t.textContent="更新名字",t.classList.remove("is-saved"),t.setAttribute("aria-busy","false"),t.disabled=!1,this.input("room-name").readOnly=!1}async updateName(t){this.resetNameStatus();const e=this.get("save-name"),i=this.room?.code;e.disabled=!0,e.setAttribute("aria-busy","true"),this.input("room-name").readOnly=!0,e.innerHTML='<i class="loading-spinner" aria-hidden="true"></i><span>更新中…</span>';try{if(await t(),this.room?.code!==i)return;e.textContent="更新完成",e.classList.add("is-saved"),this.nameStatusTimer=window.setTimeout(()=>this.resetNameStatus(),2e3)}catch(n){throw this.resetNameStatus(),n}finally{e.disabled=!1,e.setAttribute("aria-busy","false"),this.input("room-name").readOnly=!1}}show(){this.root.classList.remove("hidden")}hide(){this.root.classList.add("hidden")}message(t){this.get("lobby-status").textContent=t}async run(t){if(!this.busy){this.busy=!0,this.picker.set(this.picker.selected,!1),this.roomOptions.set(this.roomOptions.value,!1),this.get("lobby-status").classList.add("is-busy"),this.message("處理中…");try{await t(),this.get("lobby-status").textContent==="處理中…"&&this.message("")}catch(e){this.message(e.message)}finally{this.busy=!1,this.get("lobby-status").classList.remove("is-busy"),this.room&&this.update(this.room,this.id)}}}update(t,e){this.room=t,this.id=e;const i=t.host===e;if(this.ready=!!t.members.find(o=>o.id===e)?.ready,this.get("room-tracks").classList.toggle("hidden",t.mode==="championship"),this.picker.set(t.track,i&&t.mode==="single"&&!this.busy),this.roomOptions.set(t,i&&!this.busy),this.setKart(t.members.find(o=>o.id===e)?.kart??this.kart),this.get("lobby-entry").classList.add("hidden"),this.get("lobby-room").classList.remove("hidden"),this.get("room-code").textContent=t.code,this.input("room-capacity").value=String(this.pendingCapacity??t.capacity),this.input("room-capacity").disabled=!i||this.busy,!this.nameDirty){const o=t.members.find(l=>l.id===e)?.name??"";this.input("room-name").value=o,this.input("driver-name").value=o}const n=this.get("room-members");n.replaceChildren();const s=t.aiEnabled===!1?t.capacity:8;for(let o=0;o<s;o++){const l=t.members[o],c=document.createElement("div");c.className="room-member";const h=document.createElement("strong");h.textContent=l?l.name+(l.id===t.host?" · 房主":""):o<t.capacity?"等待車手加入":"AI 車手";const d=document.createElement("span");d.textContent=l?l.ready?"✓ 已準備":"選車中":o<t.capacity?"空位":"電腦對手",l?.id===e&&c.classList.add("is-you"),c.append(h,d),n.append(c)}this.get("room-summary").textContent=`${t.members.length} / ${t.capacity} 位玩家 · ${t.aiEnabled===!1?"不加入 AI":8-t.capacity+" 台 AI"} · ${t.mode==="championship"?(t.cupTracks?.length??3)+" 站排名賽 · 每站 3 圈":"單站 3 圈"}`,this.get("room-capacity").querySelectorAll("option").forEach(o=>{const l=Number(o.value);o.textContent=t.aiEnabled===!1?`${l} 人 · 無 AI`:`${l} 人 + ${8-l} 台 AI`}),this.get("ready-room").textContent=this.ready?"取消準備":"準備好了";const a=this.get("start-room");a.classList.toggle("hidden",!i),a.disabled=t.members.length!==t.capacity||t.members.some(o=>!o.ready)}reset(){this.resetNameStatus(),this.room=null,this.ready=!1,this.nameDirty=!1,this.get("lobby-entry").classList.remove("hidden"),this.get("lobby-room").classList.add("hidden"),this.get("copy-fallback").classList.add("hidden"),this.showEntry("choice")}dispose(){clearTimeout(this.nameStatusTimer),this.root.remove()}}class Vg{constructor(t,e){this.confirm=t,this.back=e,this.root.className="garage-page hidden",this.root.setAttribute("aria-label","獨立選車頁"),this.root.innerHTML=`<header class="garage-nav"><button class="text-button" id="garage-back">← 返回</button><strong>TIDEBREAK <span> / GARAGE</span></strong><span id="garage-mode">SOLO SESSION</span></header><div class="garage-layout"><div class="garage-showroom"><div class="eyebrow">01 / PICK YOUR RIDE</div><h1>你的車。<br>你的節奏。</h1><p>三種個性，一樣有機會領跑。</p><div id="kart-preview" aria-label="可旋轉的原創卡丁車預覽"></div><div class="preview-caption"><span id="preview-name"></span><span>原創郵差機器人 · 浪灣車庫</span></div></div><div class="garage-options"><div class="garage-kart-cards">${Pn.map((n,s)=>`<button class="garage-kart" data-ride="${s}" style="--kart-color:#${n.color.toString(16)}"><span class="garage-kart-number">0${s+1}</span><div><strong>${n.name}</strong><small>${n.subtitle}</small></div><div class="garage-stats">${["極速","加速","轉向"].map((a,o)=>`<span>${a}<i>${Array.from({length:5},(l,c)=>`<b class="${c<n.stats[o]?"lit":""}"></b>`).join("")}</i></span>`).join("")}</div><span class="ride-check">✓</span></button>`).join("")}</div><div id="garage-race-options"></div><section id="garage-tracks"><div class="garage-section-label">02 / CHOOSE YOUR CIRCUIT <span>3 圈 · 8 位車手</span></div><div id="garage-track-picker"></div><p class="garage-hint">橘色虛線為合法捷徑。新賽道的上坡不需要氮氣也能通過。</p></section><p id="garage-online-tip" class="garage-hint hidden">賽道由房主在房間中設定。選好座駕後，返回房間按下「準備好了」。</p><div class="garage-bottom"><div><kbd>SPACE</kbd> 漂移 <kbd>SHIFT</kbd> 氮氣 <kbd>Z / X</kbd> 左 / 右道具</div><button id="garage-confirm" class="primary">開始三圈比賽 →</button></div><p id="garage-error" role="status"></p></div></div>`,document.querySelector("#app").append(this.root),this.picker=new po(()=>{}),this.get("garage-track-picker").append(this.picker.root),this.options=new $a(()=>this.updateMode()),this.get("garage-race-options").append(this.options.root),this.get("garage-back").onclick=()=>{this.busy||(this.hide(),this.back())},this.get("garage-confirm").onclick=async()=>{if(!this.busy){this.busy=!0,this.get("garage-error").textContent="正在準備…";try{await this.confirm(this.kart,this.options.value.mode==="championship"?Qe(this.options.value.cupTracks)[0]:this.picker.selected,this.mode,this.options.value),this.hide()}catch(n){this.get("garage-error").textContent=n.message}finally{this.busy=!1}}},this.root.querySelectorAll("[data-ride]").forEach(n=>n.onclick=()=>{this.busy||this.select(Number(n.dataset.ride))}),this.scene.background=new Ct(1523273),this.scene.userData.showroom=!0,this.scene.add(new hc(16121838,4745322,3));const i=new fc(16770232,3);i.position.set(5,9,4),this.scene.add(i),this.platform=new Ot(new qe(3.3,3.6,.3,48),new ae({color:3235428})),this.platform.position.y=-.16,this.scene.add(this.platform),this.camera.position.set(6,4.3,7.5),this.camera.lookAt(0,1,0),window.addEventListener("resize",this.resize)}confirm;back;root=document.createElement("section");visible=!1;mode="solo";kart=0;name="YOU";scene=new ac;camera=new Ie(38,1,.1,80);renderer=null;view=null;picker;options;platform;busy=!1;get(t){return this.root.querySelector("#"+t)}show(t,e,i,n="YOU",s=nn){if(this.mode=i,this.name=n||"YOU",this.visible=!0,this.root.classList.remove("hidden"),this.get("garage-error").textContent="",this.get("garage-mode").textContent=i==="solo"?"SOLO SESSION":"ONLINE CREW",this.get("garage-confirm").textContent=i==="solo"?"開始三圈比賽 →":"確認座駕 · 返回房間 →",this.get("garage-tracks").classList.toggle("hidden",i==="online"),this.get("garage-online-tip").classList.toggle("hidden",i==="solo"),this.picker.set(e),this.options.set(s),this.get("garage-race-options").classList.toggle("hidden",i==="online"),this.updateMode(),!this.renderer){const a=document.createElement("canvas"),o=a.getContext("webgl2",{antialias:!0});this.renderer=o?new Ga({canvas:a,context:o,antialias:!0}):new Xi,this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=Me,this.renderer.toneMapping=Ka,this.get("kart-preview").append(this.renderer.domElement)}this.select(t),this.resize()}updateMode(){const t=this.options.value.mode==="championship";this.picker.set(this.picker.selected,!t),this.get("garage-tracks").classList.toggle("hidden",this.mode==="online"||t),this.get("garage-confirm").textContent=this.mode==="online"?"確認座駕 · 返回房間 →":t?`開始 ${this.options.value.cupTracks.length} 站排名賽 →`:"開始三圈比賽 →",this.get("garage-tracks").querySelector(".garage-hint").textContent=t?`依序跑完 ${this.options.value.cupTracks.length} 站，每站 3 圈。名次積分：15 / 12 / 10 / 7 / 5 / 3 / 2 / 1。`:"橘色虛線為合法捷徑。上坡不需要氮氣也能通過。"}select(t){this.kart=t,this.root.querySelectorAll("[data-ride]").forEach(i=>{i.classList.toggle("selected",Number(i.dataset.ride)===t),i.setAttribute("aria-pressed",String(Number(i.dataset.ride)===t))}),this.get("preview-name").textContent=Pn[t].subtitle,this.view&&(this.scene.remove(this.view.group),this.view.dispose());const e=new Mc({...Pn[t]},new hs);e.x=e.z=0,e.y=0,e.heading=0,this.view=new Sc(e,this.name),this.view.group.userData.dynamic=!0,this.scene.add(this.view.group)}tick(t){!this.visible||!this.renderer||!this.view||(this.view.body.heading=Math.sin(t*.3)*.4+.25,this.view.sync(t),this.renderer.render(this.scene,this.camera))}resize=()=>{if(!this.visible||!this.renderer)return;const t=this.get("kart-preview"),e=t.clientWidth,i=t.clientHeight;!e||!i||(this.renderer.setSize(e,i),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())};hide(){this.visible=!1,this.root.classList.add("hidden")}dispose(){window.removeEventListener("resize",this.resize),this.view?.dispose(),this.platform.geometry.dispose(),this.platform.material.dispose(),this.renderer?.dispose(),this.root.remove()}}class Gg{constructor(t){this.scene=t,this.group.userData.dynamic=!0;const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d");i.fillStyle="#ccf7f4",i.fillRect(0,0,128,128),i.strokeStyle="#289baf",i.lineWidth=10,i.strokeRect(5,5,118,118),i.fillStyle="#124856",i.textAlign="center",i.textBaseline="middle",i.font="900 94px Arial",i.fillText("?",64,69),this.texture=new ls(e),this.texture.colorSpace=Me;const n=new ie(1.65,1.65,1.65),s=new ae({map:this.texture,color:13172735}),a=new Ce({color:9161419,wireframe:!0,transparent:!0,opacity:.28});for(let u=0;u<20;u++){const g=new Ot(n,s);g.userData.dynamic=!0,g.userData.plate="?",this.group.add(g),this.boxes.push(g);const v=new Ot(n,a);v.userData.dynamic=!0,this.group.add(v),this.ghosts.push(v)}this.bolts=this.pool(new en(.65,1),new Ce({color:6744319}),56),this.traps=this.pool(new qe(1.5,1.8,.25,9),new ae({color:16759649}),56);const o=[];for(let u=0;u<3;u++)for(let g=0;g<5;g++){const v=(_,b)=>{const T=_/5,A=u*Math.PI*2/3,P=.12+T*1.45,E=Math.sin(T*Math.PI)*.36+.04;return[Math.sin(A)*P+Math.cos(A)*E*b,.1+1.2*(1-T)**2,Math.cos(A)*P-Math.sin(A)*E*b]},m=v(g,-1),p=v(g,1),y=v(g+1,-1),x=v(g+1,1);o.push(...m,...y,...p,...p,...y,...x)}const l=new ge;l.setAttribute("position",new Yt(o,3)),l.computeVertexNormals(),this.bananas=this.pool(l,new ae({color:16768334,emissive:5587984,side:Te}),56);const c=document.createElement("canvas");c.width=128,c.height=64;const h=c.getContext("2d");h.fillStyle="#ffcf70",h.fillRect(0,0,128,64),h.fillStyle="#395261";for(let u=-64;u<160;u+=40)h.beginPath(),h.moveTo(u,0),h.lineTo(u+18,0),h.lineTo(u+82,64),h.lineTo(u+64,64),h.fill();this.fenceTexture=new ls(c),this.fenceTexture.colorSpace=Me;const d=[new ie(4.4,.42,.35).translate(0,1.4,0),new ie(4.4,.3,.3).translate(0,.65,0)];for(const u of[-1,1])d.push(new ie(.28,1.9,.4).translate(u*1.9,.95,0),new ie(.75,.15,1.1).translate(u*1.9,.075,0));const f=uo(d);d.forEach(u=>u.dispose()),this.fences=this.pool(f,new ae({map:this.fenceTexture,color:16777215,emissive:1839110}),56),this.shields=this.pool(new en(1,1),new Ce({color:8636415,wireframe:!0,transparent:!0,opacity:.75}),8),this.waves=this.pool(new hr(1,.035,4,32),new Ce({color:14787839}),8),t.add(this.group)}scene;group=new Pe;boxes=[];ghosts=[];bolts;traps;bananas;fences;shields;waves;color=new Ct;dummy=new Jt;hidden=new Bt().makeScale(0,0,0);texture;fenceTexture;pool(t,e,i){const n=new ii(t,e,i);n.userData.dynamic=!0,n.frustumCulled=!1,n.instanceMatrix.setUsage(as);for(let s=0;s<i;s++)n.setMatrixAt(s,this.hidden),n.setColorAt(s,this.color.set(16777215));return this.group.add(n),n}update(t,e){if(this.group.visible=t.items.enabled,!t.items.enabled)return;const i=t.items.boxPositions;for(let n=0;n<this.boxes.length;n++){const s=i[n];if(!s){this.boxes[n].visible=this.ghosts[n].visible=!1;continue}const a=t.time>=t.items.boxes[n];this.boxes[n].position.set(s.x,s.y+.7+Math.sin(e*2+n)*.17,s.z),this.boxes[n].rotation.set(.12,e*.65+n*.5,.12),this.boxes[n].visible=a,this.ghosts[n].position.copy(this.boxes[n].position),this.ghosts[n].rotation.copy(this.boxes[n].rotation),this.ghosts[n].visible=!a}for(let n=0;n<56;n++){this.bolts.setMatrixAt(n,this.hidden),this.traps.setMatrixAt(n,this.hidden),this.bananas.setMatrixAt(n,this.hidden),this.fences.setMatrixAt(n,this.hidden);const s=t.items.objects[n];if(!s)continue;this.dummy.position.set(s.x,s.y,s.z),this.dummy.rotation.set(0,s.kind===10?s.yaw??0:s.kind===1||s.kind===6?e*8:s.id,0),this.dummy.scale.setScalar(s.kind===6?1.35:s.kind===8?1.2:1),this.dummy.updateMatrix();const a=s.kind===10?this.fences:s.kind===9?this.bananas:s.kind===1||s.kind===6?this.bolts:this.traps;a.setColorAt(n,this.color.set(s.kind===9||s.kind===10?16777215:s.kind===6?16740766:s.kind===8?15759954:s.kind===1?6744319:16759649)),a.setMatrixAt(n,this.dummy.matrix)}for(let n=0;n<8;n++)this.shields.setMatrixAt(n,this.hidden),this.waves.setMatrixAt(n,this.hidden);for(const n of t.racers){const s=n.body;this.shields.setMatrixAt(n.id,this.hidden),this.waves.setMatrixAt(n.id,this.hidden),s.shieldTime>0&&(this.dummy.position.set(s.x,s.y+1.1,s.z),this.dummy.rotation.set(0,e,0),this.dummy.scale.set(2.5,2,2.8),this.dummy.updateMatrix(),this.shields.setMatrixAt(n.id,this.dummy.matrix)),s.pulseTime>0&&(this.dummy.position.set(s.x,s.y+.5,s.z),this.dummy.rotation.set(Math.PI/2,0,0),this.dummy.scale.setScalar(1+(1-s.pulseTime/.65)*13),this.dummy.updateMatrix(),this.waves.setMatrixAt(n.id,this.dummy.matrix))}for(const n of[this.bolts,this.traps,this.bananas,this.fences,this.shields,this.waves])n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0)}dispose(){this.scene.remove(this.group),this.texture.dispose(),this.fenceTexture.dispose();const t=new Set,e=new Set;this.group.traverse(i=>{if(i instanceof Ot){t.add(i.geometry);for(const n of Array.isArray(i.material)?i.material:[i.material])e.add(n)}}),t.forEach(i=>i.dispose()),e.forEach(i=>i.dispose())}}const Wg=typeof location<"u"&&location.search.includes("netdebug=nodraw");class Xg{scene=new ac;camera=new Ie(60,innerWidth/innerHeight,.2,1200);renderer;path=new hs;world;race;views=[];chase;particles;weatherEffects;trafficVisuals;appliedWeather=null;weatherPlan=[];input;ui;garage;itemVisuals;lastPickup=0;audio=new Tg;accumulator=0;last=0;elapsed=0;fps=60;frame=0;raf=0;auto=!1;lowQuality=!1;lastBoost=0;lastImpact=0;lastMini=0;lastLap=0;lastCount="";hadFinish=!1;pads=new Set;telemetryTime=0;network=null;remote=null;lobby;lobbyRosterKey="";preparing=!1;prepared=Promise.resolve();frameTimes=[];constructor(){const t=document.createElement("div");t.className="build-tag",t.textContent="v1120-2249",document.body.append(t),this.checkBuild(),window.setInterval(()=>{this.checkBuild()},3e5);const e=document.createElement("canvas"),i=e.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});this.renderer=i?new Ga({canvas:e,context:i,antialias:!0}):new Xi,this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=Me,this.renderer.toneMapping=Ka,this.renderer.toneMappingExposure=1.15,this.renderer.domElement.className="game-canvas",this.renderer.domElement.setAttribute("aria-label","浪灣疾行 3D 賽道"),document.querySelector("#app").append(this.renderer.domElement),this.world=new Dl(this.scene,this.path),this.race=new sg(this.path,this.world.obstacles),this.chase=new hg(this.camera),this.particles=new ug(this.scene),this.itemVisuals=new Gg(this.scene),this.trafficVisuals=new Km(this.scene),this.weatherEffects=new dg(this.scene),this.rebuildKarts(),this.input=new pg(n=>this.key(n)),this.ui=new Eg(this.race,{start:()=>this.start(),select:n=>this.select(n),menu:()=>this.menu(),pause:()=>this.pause(),restart:()=>this.start(),reset:()=>this.resetKart(),audio:()=>this.toggleAudio(),quality:()=>this.toggleQuality(),autopilot:()=>this.toggleAuto(),online:()=>this.lobby.show(),garage:()=>{this.race.settings.mode="single",this.openGarage("solo")},championship:()=>{this.race.settings.mode="championship",this.openGarage("solo")},nextResult:()=>{this.nextResult()}}),this.garage=new Vg(async(n,s,a,o)=>{a==="online"?(this.lobby.setKart(n),this.network?.room&&await this.network.action("ready",{kart:n,ready:!1}),this.lobby.show(),this.ui.garage=!1):(await this.prepared,this.race.settings={...o},this.setTrack(s),this.race.selected=n,await this.start(),this.ui.garage=!1)},()=>{this.ui.garage=!1,this.garage.mode==="online"&&this.lobby.show()}),this.lobby=new Hg({create:(n,s,a,o)=>this.connect(n,s,a,void 0,o),join:(n,s,a)=>this.connect(n,s,2,a),ready:async(n,s,a)=>{await this.prepared,await this.network?.action("ready",{kart:n,ready:s,...a?{name:a}:{}})},capacity:async n=>{await this.network?.action("capacity",{capacity:n})},track:async n=>{await this.network?.action("track",{track:n})},settings:async n=>{await this.network?.action("settings",{...n})},choose:()=>this.openGarage("online"),start:async()=>{this.audio.init(),await this.prepared,await this.network?.action("start")},leave:async()=>this.leaveOnline(),close:()=>this.lobby.hide()}),this.renderer instanceof Xi&&(this.ui.get("quality").textContent="畫質 · 相容模式",this.ui.get("quality").title="此瀏覽器未開放 WebGL，使用 Canvas 3D 相容顯示"),window.addEventListener("resize",this.resize),document.addEventListener("visibilitychange",this.visibility),this.raf=requestAnimationFrame(this.tick),this.prepared=this.warmup(),new URLSearchParams(location.search).has("room")&&this.lobby.show()}openGarage(t){this.input.clear(),this.lobby.hide(),this.ui.garage=!0,this.garage.show(t==="online"?this.lobby.kart:this.race.selected,this.path.id,t,t==="online"?this.lobby.input("driver-name").value:"YOU",this.race.settings)}setTrack(t){if(this.path.id===t)return;this.world.dispose(),this.path=new hs(t),this.world=new Dl(this.scene,this.path),this.race.track=this.path,this.race.obstacles=this.world.obstacles,this.appliedWeather=null,this.applyWeather(),this.network&&(this.network.obstacles=this.world.obstacles),this.race.reset(this.race.selected,!1),this.rebuildKarts(),this.chase.reset(),this.particles.clear(),this.ui.mapCache=null;const e=this.ui.root.querySelector(".track-tag");e.querySelector("span").textContent=this.path.definition.english,e.querySelector("strong").textContent=this.path.definition.name,e.querySelector("small").textContent=this.path.definition.description,this.renderer instanceof Xi&&this.renderer.invalidate()}applyWeather(){const t=this.race.settings.activeWeather??"sunny";if(t!==this.appliedWeather){this.appliedWeather=t,this.world.setWeather(t),this.weatherEffects.setWeather(t);for(const e of this.race.racers)e.body.wetRoad=t==="rain";this.renderer instanceof Xi&&this.renderer.invalidate()}}rebuildKarts(){if(this.views.length===this.race.racers.length&&this.views.every((t,e)=>t.body.spec.id===this.race.racers[e].body.spec.id&&t.name===this.race.racers[e].name&&t.body.spec.color===this.race.racers[e].color)){this.views.forEach((t,e)=>t.body=this.race.racers[e].body);return}this.views.forEach(t=>{this.scene.remove(t.group),t.dispose()}),this.views=this.race.racers.map(t=>{const e=new Sc(t.body,t.name);return e.group.userData.dynamic=!0,this.scene.add(e.group),e}),this.renderer instanceof Xi&&this.renderer.invalidate()}async warmup(){if(!(this.renderer instanceof Ga))return;const t=this.renderer;this.preparing=!0,this.ui?.showToast("正在準備賽道與車輛…"),await new Promise(n=>requestAnimationFrame(()=>n())),this.scene.updateMatrixWorld(!0);const e=[];this.scene.traverse(n=>{if(n instanceof Ot){e.push({obj:n,culled:n.frustumCulled,visible:n.visible}),n.frustumCulled=!1,n.visible=!0;for(const s of Array.isArray(n.material)?n.material:[n.material]){const a=s.map;a&&t.initTexture(a)}}});const i=new Di(32,32);try{await t.compileAsync(this.scene,this.camera),t.setRenderTarget(i),t.render(this.scene,this.camera)}finally{t.setRenderTarget(null),i.dispose(),e.forEach(n=>{n.obj.frustumCulled=n.culled,n.obj.visible=n.visible}),this.preparing=!1,this.last=performance.now(),this.accumulator=0}}async connect(t,e,i,n,s=nn){this.network?.dispose(),this.network=new Pg({room:a=>this.onRoom(a),start:a=>this.startOnline(a),snapshot:a=>this.remote?.accept(a),error:a=>{this.lobby.message(a),this.ui.showToast(a)},closed:a=>{this.clearOnline(),this.lobby.show(),this.lobby.message(a)}},this.world.obstacles);try{await this.network.enter(t,e,i,n,this.path.id,s),this.audio.init()}catch(a){throw this.network.dispose(),this.network=null,a}}onRoom(t){if(this.race.settings=An(t),this.applyWeather(),this.ui.newRecordIds=t.newRecordIds??[],this.input.setItemsEnabled(t.itemsEnabled!==!1),this.ui.series=t.series,this.ui.cupStage=t.stage,this.ui.resultView=t.resultView,this.ui.resultReady=t.phase==="finished",this.ui.canAdvance=this.network.isHost,t.phase==="finished"&&this.race.state==="finished"&&this.ui.updateResults(),t.phase==="lobby"){this.setTrack(t.track),this.lobby.update(t,this.network.id);const e=this.race.state!=="menu";this.remote=null,this.race.online=!0,this.race.state="menu",this.race.paused=!1,this.garage.visible||this.lobby.show();const i=JSON.stringify([t.track,t.mode,t.difficulty,t.itemsEnabled,t.aiEnabled,t.capacity,t.members.map(n=>[n.seat,n.name,n.kart])]);(i!==this.lobbyRosterKey||e)&&(this.ui.mapCache=null,this.lobbyRosterKey=i,this.race.configure(es(t),this.network.seat),this.race.state="menu",this.rebuildKarts(),this.chase.reset(),this.particles.clear(),this.auto=!1,this.network.qaAuto=!1,this.prepared=this.prepared.then(()=>this.warmup()))}}async startOnline(t){if(await this.prepared,!this.network||this.network.closed||this.network.room?.round!==t.round||this.network.room.phase==="lobby")return;this.setTrack(t.track),this.network.itemSeq=0,this.network.itemRightSeq=0,this.ui.newRecordIds=[],this.race.settings=An(t),this.applyWeather(),this.race.configure(es(t),this.network.seat),this.race.countdown=4,this.ui.liveRecord.begin(this.path.id),this.rebuildKarts(),this.particles.clear(),this.chase.reset(),this.input.clear(),this.accumulator=0,this.auto=!1,this.network.qaAuto=!1,this.hadFinish=!1,this.lastBoost=0,this.lastImpact=0,this.lastMini=0,this.lastLap=0,this.lastCount="",this.ui.lastResult="",this.remote=new Og(this.race);const e=this.remote,i=this.network;e.send=()=>i.sendInput(),e.clock=()=>i.gateway?i.clockOffset:null,i.ownReport=()=>e.report(),i.onState=(n,s)=>e.ingest(n,s),this.race.bumps={n:0,sum:0,max:0},this.teleAt=performance.now(),this.teleDone=!1,location.search.includes("netdebug")&&(window.__remote=e),this.lobby.hide(),this.garage.hide(),this.ui.garage=!1,this.lastPickup=0,document.activeElement?.blur(),this.prepared=this.warmup(),await this.prepared}async leaveOnline(){await this.network?.leave().catch(()=>{}),this.clearOnline(),this.lobby.hide()}clearOnline(){this.network?.dispose(),this.network=null,this.remote=null,this.lobbyRosterKey="",this.lobby.reset(),this.ui.series=[],this.ui.cupStage=0,this.ui.resultView="times",this.ui.canAdvance=!0,this.ui.resultReady=!0,this.race.online=!1,this.race.roster=null,this.race.localPlayerId=0,this.race.reset(0,!1),this.rebuildKarts(),this.chase.reset(),this.garage.hide(),this.ui.garage=!1}select(t){this.race.reset(t,!1),this.rebuildKarts(),this.chase.reset()}async start(t=!1){if(this.network){this.network.isHost?await this.network.action("lobby").catch(e=>this.ui.showToast(e.message)):this.ui.showToast("等待房主返回房間，準備下一場");return}if(await this.prepared,this.race.settings=An(this.race.settings),!t){this.ui.series=[],this.ui.cupStage=0;const e=this.race.settings;e.mode==="championship"&&(e.trackOrder==="random"&&(e.cupTracks=Ic().slice(0,3)),this.setTrack(Qe(e.cupTracks)[0])),this.weatherPlan=[];for(let i=0;i<(e.mode==="championship"?Qe(e.cupTracks).length:1);i++){const n=["sunny","sunset","rain"].filter(s=>s!==this.weatherPlan[i-1]);this.weatherPlan.push(e.weather==="random"?n[Math.floor(wn()*n.length)]:e.weather)}}this.race.settings.activeWeather=this.weatherPlan[this.ui.cupStage]??"sunny",this.applyWeather(),this.ui.resultView="times",this.ui.resultReady=!0,this.ui.canAdvance=!0,this.audio.init(),this.race.reset(this.race.selected,!0),this.ui.liveRecord.begin(this.path.id),this.rebuildKarts(),this.prepared=this.warmup(),await this.prepared,this.particles.clear(),this.chase.reset(),this.input.clear(),this.accumulator=0,this.auto=!1,this.lastBoost=0,this.lastImpact=0,this.lastMini=0,this.lastLap=0,this.lastPickup=0,this.hadFinish=!1,this.pads.clear(),this.lastCount="",this.ui.lastResult="",document.activeElement?.blur(),this.ui.get("restart").blur()}async nextResult(){if(!(this.ui.resultsBusy||this.race.state!=="finished"||!this.ui.resultReady||!this.ui.canAdvance)){this.ui.resultsBusy=!0;try{this.network?await this.network.action(this.ui.resultView==="times"?"show-points":"next-stage",{round:this.network.round}):this.ui.resultView==="times"?this.ui.resultView="points":this.ui.cupStage<Qe(this.race.settings.cupTracks).length-1&&(this.ui.cupStage++,this.setTrack(Qe(this.race.settings.cupTracks)[this.ui.cupStage]),await this.start(!0))}catch(t){this.ui.showToast(t.message)}finally{this.ui.resultsBusy=!1}}}menu(){if(this.network){this.leaveOnline();return}this.race.reset(this.race.selected,!1),this.auto=!1,this.input.clear(),this.rebuildKarts(),this.particles.clear(),this.chase.reset(),this.garage.hide(),this.ui.garage=!1}pause(){this.race.state==="menu"||this.race.state==="finished"||(this.race.paused=!this.race.paused,this.input.clear(),this.accumulator=0)}teleAt=0;teleDone=!1;reportPlay(t){const e=this.remote,i=this.network,n=this.race;if(!e||!i||this.teleDone)return;const s=n.state==="finished"||n.player.finishTime!==null;if(n.state!=="racing"&&!s||!s&&t-this.teleAt<1e4)return;this.teleAt=t,this.teleDone=s;const a=l=>Math.round(l*100)/100,o=l=>Object.fromEntries(Object.entries(l).map(([c,h])=>[c,typeof h=="number"?a(h):h&&typeof h=="object"?o(h):h]));i.telemetry({v:"1120-2249",track:this.path.id,t:a(n.time),over:s,fin:n.player.finishTime,fps:Math.round(this.fps),owning:e.owning,ep:e.ep,hidden:document.hidden,...o(e.tele),bumps:o(n.bumps)})}staleShown=!1;staleBuild(){if(this.staleShown)return;this.staleShown=!0;const t=document.createElement("div");t.className="build-stale",t.textContent="有新版本 ";const e=document.createElement("button");e.textContent="重新整理",e.onclick=()=>location.reload(),t.append(e),document.body.append(t)}async checkBuild(){try{const t=await fetch("./build.txt?t="+Date.now(),{cache:"no-store",signal:AbortSignal.timeout(6e3)});if(!t.ok)return;const e=(await t.text()).trim();/^\d{4}-\d{4}$/.test(e)&&e!=="1120-2249"&&this.staleBuild()}catch{}}resetKart(){this.race.state!=="racing"||this.race.paused||this.race.player.finishTime!==null||(this.race.resetRacer(),this.chase.reset(),this.ui.showToast("救援完成 · 回到上一個檢查點"))}toggleAudio(){this.audio.init(),this.audio.toggle(),this.ui.get("sound").setAttribute("aria-label",this.audio.enabled?"關閉音效":"開啟音效"),this.ui.get("sound").classList.toggle("muted",!this.audio.enabled)}toggleQuality(){if(this.renderer instanceof Xi){this.ui.showToast("目前使用相容模式 · 開啟圖形加速可提升畫質");return}this.lowQuality=!this.lowQuality,this.renderer.setPixelRatio(this.lowQuality?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,1.5)),this.ui.get("quality").textContent=this.lowQuality?"畫質 · 效能":"畫質 · 標準"}toggleAuto(){}key(t){if(this.network&&this.race.state==="racing"&&!this.race.paused&&this.race.player.finishTime===null&&(t==="KeyZ"&&this.network.itemSeq++,t==="KeyX"&&this.network.itemRightSeq++,(t==="KeyZ"||t==="KeyX")&&this.network.sendInput()),this.network&&t==="Blur"){this.input.clear();return}t==="Escape"&&this.pause(),t==="KeyR"&&this.resetKart(),t==="F3"&&this.ui.toggleDebug(),t==="Blur"&&["racing","countdown"].includes(this.race.state)&&!this.race.paused&&this.pause(),t==="Enter"&&this.race.state==="menu"&&!this.network&&this.lobby.root.classList.contains("hidden")&&(this.garage.visible?this.garage.get("garage-confirm").click():this.lobby.show())}resize=()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)};visibility=()=>{if(this.network){document.hidden&&this.input.clear();return}document.hidden&&["racing","countdown"].includes(this.race.state)&&!this.race.paused&&this.pause()};feedback(){if(this.race.state==="menu")return;const t=this.race.player.body;if(t.pickupEvent!==this.lastPickup&&(this.lastPickup=t.pickupEvent,this.ui.showToast(ar[t.lastPickupType||t.itemType].name+" · 按 "+(t.lastPickupSlot?"X":"Z")+" 使用"),this.audio.tone(660,.12)),t.boostEvent!==this.lastBoost&&(this.lastBoost=t.boostEvent,this.audio.boost()),t.collisionEvent!==this.lastImpact&&(this.lastImpact=t.collisionEvent,this.audio.tone(75,.1,.03,"triangle")),t.miniTurboEvent!==this.lastMini&&(this.lastMini=t.miniTurboEvent,this.ui.showToast("MINI TURBO · LEVEL "+t.turboLevel)),this.race.player.completedLaps!==this.lastLap&&(this.lastLap=this.race.player.completedLaps,this.lastLap<3&&this.ui.showToast(this.lastLap===2?"最後一圈 · 全力衝刺！":"第 2 圈 · 繼續加速！")),this.race.state==="finished"&&!this.hadFinish){this.hadFinish=!0,!this.network&&this.race.settings.mode==="championship"&&this.ui.series.length===this.ui.cupStage&&this.ui.series.push(Nc(this.path.id,this.race.racers)),this.audio.finish();for(let i=0;i<90;i++)this.particles.emit(t.x+(Math.random()-.5)*10,t.y+2+Math.random()*6,t.z+(Math.random()-.5)*10,[14482007,16746852,7464447][i%3],.16,2+Math.random(),(Math.random()-.5)*4,1,(Math.random()-.5)*4)}const e=this.race.state==="countdown"?String(Math.ceil(this.race.countdown)):this.race.state==="racing"&&this.race.time<1?"GO":"";e&&e!==this.lastCount&&(this.lastCount=e,this.audio.tone(e==="GO"?880:440,.17))}tick=t=>{const e=Math.min((t-this.last)/1e3||.016666666666666666,.1);if(this.last=t,this.elapsed+=e,this.fps+=(1/e-this.fps)*.035,this.input.setMobileVisible(!this.garage.visible&&this.lobby.root.classList.contains("hidden")&&["racing","countdown"].includes(this.race.state)&&!this.race.paused&&this.race.player.finishTime===null),this.remote&&this.network){const i=this.race.paused?rr():this.auto?this.race.player.ai.controls(this.race.player.body,this.race.bodies,e,this.race.time):this.input.controls;this.network.input=i,this.remote.frame(i,e),this.reportPlay(t)}else if(!this.race.paused&&!this.preparing)for(this.accumulator=Math.min(this.accumulator+e,.15);this.accumulator>=1/120;)this.race.step(1/120,this.input.controls,this.auto),this.accumulator-=1/120;(!this.race.paused||this.remote)&&(this.views.forEach(i=>i.sync(this.elapsed)),this.chase.update(this.race.player.body,e,this.race.state==="menu",this.elapsed),this.particles.update(e,this.race.bodies,this.elapsed),this.feedback()),this.audio.update(this.race.player.body.speed,this.race.state==="racing"&&!this.race.paused),this.itemVisuals.update(this.race,this.elapsed),this.trafficVisuals.update(this.race),this.weatherEffects.update(this.race.paused&&!this.remote?0:e,this.race.racers,this.race.player,this.lowQuality),this.garage.visible?this.garage.tick(this.elapsed):!this.preparing&&!Wg&&this.renderer.render(this.scene,this.camera),this.frame++%3===0&&(this.ui.update(this.fps,this.renderer.info.render.calls,this.auto),this.network&&(this.ui.get("network-status").textContent=this.network.status+" · "+this.network.room?.code),this.network?.expectedBuild&&this.network.expectedBuild!=="1120-2249"&&this.staleBuild()),this.raf=requestAnimationFrame(this.tick)};dispose(){this.network?.dispose(),this.lobby.dispose(),this.garage.dispose(),this.itemVisuals.dispose(),this.weatherEffects.dispose(),this.trafficVisuals.dispose(),this.ui.records.dispose(),this.ui.resultRecord.dispose(),this.ui.liveRecord.dispose(),cancelAnimationFrame(this.raf),this.input.dispose(),window.removeEventListener("resize",this.resize),document.removeEventListener("visibilitychange",this.visibility),this.audio.ctx?.close(),this.views.forEach(t=>t.dispose()),this.scene.traverse(t=>{t instanceof Ot&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose()))}),this.world.signTextures.forEach(t=>t.dispose()),this.renderer.dispose(),this.ui.records.dispose(),this.ui.root.remove(),this.renderer.domElement.remove()}}(async()=>{await xg();try{const r=new Xg}catch(r){console.error(r),document.querySelector("#app").innerHTML='<div class="error-screen"><h1>需要開啟 WebGL</h1><p>請使用最新版 Chrome 或 Edge，並在瀏覽器設定中開啟圖形加速。</p><button onclick="location.reload()">重新載入</button></div>'}})();
