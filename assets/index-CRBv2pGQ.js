(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const El=Array.from({length:32},(r,t)=>{const e=-Math.PI/2+t*Math.PI/16;return[135*Math.sin(e),3+11*((1+Math.cos(e))/2)**3,100*Math.sin(2*e)]}),ir=[[-86,2.4,90],[-86,2.4,0],[-86,2.4,-90],[-86,2.4,-150]];for(let r=1;r<=12;r++){const t=Math.PI+r*Math.PI/12;ir.push([Math.cos(t)*86,2.4,-150+Math.sin(t)*86])}ir.push([86,2.4,-90],[86,2.4,0],[86,2.4,90],[86,2.4,150]);for(let r=1;r<=12;r++){const t=r*Math.PI/12;ir.push([Math.cos(t)*86,2.4,150+Math.sin(t)*86])}const ci=[{id:"coast",name:"晴空海岸",english:"COASTLINE",description:"海濱直道 · 珊瑚髮夾 · 港灣 S 彎",difficulty:"入門",color:5621710,points:[[-80,1.4,170],[-80,1.4,90],[-100,2,10],[-125,3,-45],[-118,4,-125],[-55,5,-165],[10,6,-160],[70,5,-135],[80,3,-92],[44,2,-68],[45,1.5,-28],[100,1.4,0],[145,1.4,-2],[172,2,36],[145,3,77],[82,4,85],[42,5,120],[70,4,155],[113,2,175],[123,1.4,223],[70,1.4,252],[0,1.4,255],[-60,1.4,235]]},{id:"terraces",name:"珊瑚階丘",english:"CORAL TERRACES",description:"連續山彎 · 高低階丘 · 果園捷徑",difficulty:"進階",color:16755296,points:[[-170,3,210],[-172,5,120],[-210,10,60],[-210,16,-15],[-170,21,-65],[-220,24,-120],[-210,21,-200],[-140,17,-242],[-65,14,-228],[-10,18,-180],[-45,24,-115],[-5,28,-65],[60,24,-95],[108,19,-162],[172,13,-175],[230,8,-118],[214,6,-48],[154,9,-5],[148,15,57],[210,20,94],[228,23,167],[180,18,227],[108,12,240],[66,8,181],[24,5,135],[-35,8,155],[-54,10,223],[-110,7,257]],shortcut:{from:4,to:8,via:[[-150,22,-111],[-118,18,-186]],name:"果園捷徑"}},{id:"skyfall",name:"雲際斷崖",english:"SKYFALL VIADUCT",description:"高架盤山 · 41 公尺落差 · 雲橋捷徑",difficulty:"挑戰",color:11181055,points:[[-160,5,240],[-200,11,170],[-180,22,88],[-230,30,22],[-223,40,-70],[-168,49,-115],[-160,55,-195],[-90,58,-238],[-10,58,-240],[70,17,-240],[160,16,-232],[218,21,-180],[188,27,-121],[113,33,-97],[85,29,-38],[150,23,2],[219,18,42],[226,14,113],[172,11,149],[106,14,111],[41,19,130],[48,23,199],[91,18,247],[57,12,296],[-24,8,302],[-85,6,284]],shortcut:{from:18,to:22,via:[[136,14,176],[117,16,213]],name:"雲橋捷徑"},drop:{from:8,to:9,floor:17}},{id:"crosswind",name:"八字雲橋",english:"CROSSWIND EIGHT",description:"8 字交錯 · 上下層雲橋 · 內灣捷徑",difficulty:"立體交錯",color:8437759,newCircuit:!0,overpass:!0,palette:{sky:12904186,grass:9947815,road:5663878,rail:9357301},points:El,shortcut:{from:10,to:15,via:[[97,8.5,65]],name:"短弧雲徑"}},{id:"orbit",name:"蜿蜒花丘",english:"BLOOM RIDGE",description:"連續折彎 · 緩坡花丘 · 短程花徑",difficulty:"彎道節奏",color:13869311,newCircuit:!0,palette:{sky:14735859,grass:11455382,road:7497601,rail:13676268},points:[[-180,3,130],[-180,4,60],[-210,6,5],[-175,8,-55],[-215,10,-108],[-172,12,-164],[-105,10,-182],[-65,7,-140],[-28,5,-182],[20,4,-170],[35,6,-107],[-8,8,-65],[30,10,-20],[80,12,-55],[110,10,-118],[170,7,-144],[206,4,-95],[170,3,-32],[207,5,30],[176,7,100],[105,9,132],[61,7,91],[16,5,140],[-40,3,116],[-70,4,173],[-132,3,182]],shortcut:{from:20,to:22,via:[[61,7,126]],name:"花丘短徑"}},{id:"sunport",name:"晴港疾線",english:"SUNPORT SPRINT",description:"長直線衝刺 · 港口連續彎 · 單一路線",difficulty:"極速衝刺",color:16760680,newCircuit:!0,palette:{sky:12445935,grass:10996608,road:5794675,rail:16760437},points:[[-105,3,200],[-105,3,80],[-105,3,-80],[-105,3,-200],[-65,4,-247],[10,5,-252],[78,6,-218],[110,7,-155],[74,7,-102],[123,6,-45],[80,5,25],[122,4,88],[82,3,156],[35,3,213],[-40,3,235]]},{id:"mistpine",name:"霧杉山徑",english:"MISTPINE PASS",description:"貼壁登山 · 連續折彎 · 杉林下坡",difficulty:"山道攻彎",color:9157537,newCircuit:!0,theme:"mountain",palette:{sky:12504787,grass:6720361,road:5397857,rail:12371906},points:[[-155,6,130],[-160,8,65],[-130,11,10],[-178,14,-45],[-165,17,-110],[-100,20,-138],[-48,23,-113],[0,26,-147],[63,29,-152],[112,32,-102],[83,35,-46],[110,37,7],[156,34,44],[161,29,107],[114,24,144],[78,20,121],[26,16,148],[-24,13,174],[-82,9,167]]},{id:"metro",name:"霓港街區",english:"NEON HARBOR",description:"雙路分流 · 行人穿越 · 雙向城市車流",difficulty:"城市穿梭",color:9489367,newCircuit:!0,theme:"city",palette:{sky:12968427,grass:10005155,road:5464941,rail:10993098},points:[[-155,2.4,150],[-155,2.4,65],[-155,2.4,-15],[-155,2.4,-100],[-145,2.4,-150],[-95,2.4,-180],[0,2.4,-180],[100,2.4,-180],[145,2.4,-135],[145,2.4,-60],[110,2.4,-15],[145,2.4,35],[145,2.4,125],[100,2.4,170],[15,2.4,170],[-80,2.4,170]],branches:[{from:1,to:3,via:[[-108,2.4,20],[-108,2.4,-55]],name:"東街補給道",bonusItems:!0}]},{id:"velodrome",name:"湛藍競速場",english:"AZURE SPEEDWAY",description:"雙直線 · 漸進內傾彎道 · 無捷徑",difficulty:"高速橢圓",color:9350906,newCircuit:!0,theme:"speedway",banking:.24,palette:{sky:12969458,grass:8040335,road:5464689,rail:12768743},points:ir}];function Cn(r){return ci.find(t=>t.id===r)??ci[0]}function Je(r){const t=Array.isArray(r)?r.filter((e,i)=>ci.some(n=>n.id===e)&&r.indexOf(e)===i):[];return[...t,...ci.map(e=>e.id).filter(e=>!t.includes(e))].slice(0,3)}function Tl(){const r=ci.map(t=>t.id);for(let t=r.length-1;t>0;t--){const e=Math.floor(Sn()*(t+1));[r[t],r[e]]=[r[e],r[t]]}return r}function Sn(){return typeof globalThis.crypto<"u"?crypto.getRandomValues(new Uint32Array(1))[0]/4294967296:Math.random()}const wl=[15,12,10,7,5,3,2,1];function Al(r,t){return{track:r,entries:[...t].sort((e,i)=>(e.finishTime??1/0)-(i.finishTime??1/0)||e.id-i.id).map((e,i)=>({id:e.id,name:e.name,human:e.human,finishTime:e.finishTime,simulated:e.simulated,disconnected:e.disconnected,position:i+1,points:e.finishTime===null?0:wl[i]??0}))}}function Rl(r){const t=new Map;for(const[e,i]of r.entries())for(const n of i.entries){let s=t.get(n.id);s||(s={id:n.id,name:n.name,human:n.human,points:0,lastPoints:0,totalTime:0,finishes:Array(8).fill(0),completed:0},t.set(n.id,s)),s.points+=n.points,e===r.length-1&&(s.lastPoints=n.points),n.finishTime!==null&&(s.totalTime+=n.finishTime,s.completed++,s.finishes[n.position-1]++)}return[...t.values()].sort((e,i)=>{if(e.points!==i.points)return i.points-e.points;for(let n=0;n<8;n++)if(e.finishes[n]!==i.finishes[n])return i.finishes[n]-e.finishes[n];return i.completed-e.completed||e.totalTime-i.totalTime||e.id-i.id})}const Dc={sunny:"晴空日光",sunset:"傍晚晚霞",rain:"雨天夜晚",random:"每站隨機氣候"},Qi={mode:"single",difficulty:"normal",cupTracks:["coast","terraces","skyfall"],itemsEnabled:!0,aiEnabled:!0,cupLength:"three",trackOrder:"custom",weather:"sunny",activeWeather:"sunny"};function bn(r){const t=r.mode==="single"&&r.weather==="random"?"sunny":r.weather??"sunny";return{...Qi,...r,cupLength:"three",cupTracks:Je(r.cupTracks),itemsEnabled:r.itemsEnabled!==!1,aiEnabled:r.aiEnabled!==!1,weather:t,activeWeather:r.activeWeather??(t==="random"?"sunny":t)}}const Pn={easy:{name:"簡單",description:"維持既有車速與氮氣策略，不使用漂移",pace:1,nitroChance:1},normal:{name:"普通",description:"車速略高、過彎更熟練，偶爾使用氮氣",pace:1.12,nitroChance:.3},hard:{name:"困難",description:"更快車速、精準過彎，較常使用氮氣",pace:1.24,nitroChance:.6}};const Ba="180",Cl=0,go=1,Pl=2,Ic=1,Ll=2,vi=3,xi=0,Ue=1,Ee=2,Ci=0,En=1,qr=2,vo=3,_o=4,Dl=5,Xi=100,Il=101,Ul=102,Nl=103,Fl=104,Ol=200,zl=201,kl=202,Bl=203,$r=204,Yr=205,Hl=206,Vl=207,Gl=208,Wl=209,Xl=210,ql=211,$l=212,Yl=213,jl=214,jr=0,Kr=1,Zr=2,Ln=3,Jr=4,Qr=5,ta=6,ea=7,Ha=0,Kl=1,Zl=2,Pi=0,Jl=1,Ql=2,th=3,Va=4,eh=5,ih=6,nh=7,Uc=300,Dn=301,In=302,ia=303,na=304,nr=306,sa=1e3,ji=1001,ra=1002,Be=1003,sh=1004,gs=1005,Qe=1006,cr=1007,Ki=1008,li=1009,Nc=1010,Fc=1011,ts=1012,Ga=1013,Zi=1014,ri=1015,hs=1016,Wa=1017,Xa=1018,es=1020,Oc=35902,zc=35899,kc=1021,Bc=1022,ti=1023,is=1026,ns=1027,qa=1028,$a=1029,Hc=1030,Ya=1031,ja=1033,Vs=33776,Gs=33777,Ws=33778,Xs=33779,aa=35840,oa=35841,ca=35842,la=35843,ha=36196,da=37492,ua=37496,fa=37808,pa=37809,ma=37810,ga=37811,va=37812,_a=37813,xa=37814,ya=37815,Ma=37816,Sa=37817,ba=37818,Ea=37819,Ta=37820,wa=37821,Aa=36492,Ra=36494,Ca=36495,Pa=36283,La=36284,Da=36285,Ia=36286,rh=3200,ah=3201,Vc=0,oh=1,Ai="",ye="srgb",Un="srgb-linear",Ys="linear",Kt="srgb",sn=7680,xo=519,ch=512,lh=513,hh=514,Gc=515,dh=516,uh=517,fh=518,ph=519,yo=35044,ss=35048,Mo="300 es",ai=2e3,js=2001;class On{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lr=Math.PI/180,Ks=180/Math.PI;function ds(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[r&255]+Se[r>>8&255]+Se[r>>16&255]+Se[r>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function kt(r,t,e){return Math.max(t,Math.min(e,r))}function mh(r,t){return(r%t+t)%t}function hr(r,t,e){return(1-e)*r+e*t}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3];const f=s[a+0],u=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=u,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==f||l!==u||h!==g){let m=1-o;const p=c*f+l*u+h*g+d*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const S=Math.sqrt(_),T=Math.atan2(S,p*y);m=Math.sin(m*T)/S,o=Math.sin(o*T)/S}const x=o*y;if(c=c*m+f*x,l=l*m+u*x,h=h*m+g*x,d=d*m+v*x,m===1-o){const S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=s[a],f=s[a+1],u=s[a+2],g=s[a+3];return t[e]=o*g+h*d+c*u-l*f,t[e+1]=c*g+h*f+l*d-o*u,t[e+2]=l*g+h*u+o*f-c*d,t[e+3]=h*g-o*d-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),d=o(s/2),f=c(i/2),u=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*d+l*u*g,this._y=l*u*d-f*h*g,this._z=l*h*g+f*u*d,this._w=l*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+l*u*g,this._y=l*u*d-f*h*g,this._z=l*h*g-f*u*d,this._w=l*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-l*u*g,this._y=l*u*d+f*h*g,this._z=l*h*g+f*u*d,this._w=l*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-l*u*g,this._y=l*u*d+f*h*g,this._z=l*h*g-f*u*d,this._w=l*h*d+f*u*g;break;case"YZX":this._x=f*h*d+l*u*g,this._y=l*u*d+f*h*g,this._z=l*h*g-f*u*d,this._w=l*h*d-f*u*g;break;case"XZY":this._x=f*h*d-l*u*g,this._y=l*u*d-f*h*g,this._z=l*h*g+f*u*d,this._w=l*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=i+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(a-n)*u}else if(i>o&&i>d){const u=2*Math.sqrt(1+i-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(n+a)/u,this._z=(s+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-i-d);this._w=(s-l)/u,this._x=(n+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-i-o);this._w=(a-n)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*i+e*this._x,this._y=u*n+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=n*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*n-o*i),h=2*(o*e-s*n),d=2*(s*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=n+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dr=new D,So=new tn;class It{constructor(t,e,i,n,s,a,o,c,l){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,l)}set(t,e,i,n,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],u=i[5],g=i[8],v=n[0],m=n[3],p=n[6],y=n[1],_=n[4],x=n[7],S=n[2],T=n[5],A=n[8];return s[0]=a*v+o*y+c*S,s[3]=a*m+o*_+c*T,s[6]=a*p+o*x+c*A,s[1]=l*v+h*y+d*S,s[4]=l*m+h*_+d*T,s[7]=l*p+h*x+d*A,s[2]=f*v+u*y+g*S,s[5]=f*m+u*_+g*T,s[8]=f*p+u*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*s,u=l*s-a*c,g=e*d+i*f+n*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(n*l-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=f*v,t[4]=(h*e-n*c)*v,t[5]=(n*s-o*e)*v,t[6]=u*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-n*l,n*c,-n*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ur.makeScale(t,e)),this}rotate(t){return this.premultiply(ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new It;function Wc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gh(){const r=Zs("canvas");return r.style.display="block",r}const bo={};function rs(r){r in bo||(bo[r]=!0,console.warn(r))}function vh(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Eo=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),To=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _h(){const r={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Kt&&(n.r=_i(n.r),n.g=_i(n.g),n.b=_i(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(n.r=Tn(n.r),n.g=Tn(n.g),n.b=Tn(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ai?Ys:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Un]:{primaries:t,whitePoint:i,transfer:Ys,toXYZ:Eo,fromXYZ:To,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:i,transfer:Kt,toXYZ:Eo,fromXYZ:To,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),r}const Xt=_h();function _i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Tn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rn;class xh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rn===void 0&&(rn=Zs("canvas")),rn.width=t.width,rn.height=t.height;const n=rn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=rn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=_i(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yh=0;class Ka{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(fr(n[a].image)):s.push(fr(n[a]))}else s=fr(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function fr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mh=0;const pr=new D;class Te extends On{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,i=ji,n=ji,s=Qe,a=Ki,o=ti,c=li,l=Te.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=ds(),this.name="",this.source=new Ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pr).x}get height(){return this.source.getSize(pr).y}get depth(){return this.source.getSize(pr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sa:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sa:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Uc;Te.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,n=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,x=(u+1)/2,S=(p+1)/2,T=(h+f)/4,A=(d+v)/4,P=(g+m)/4;return _>x&&_>S?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=T/i,s=A/i):x>S?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=T/n,s=P/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=A/s,n=P/s),this.set(i,n,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sh extends On{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new Te(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ka(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Sh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Xc extends Te{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends Te{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(s,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vs.copy(i.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gn),_s.subVectors(this.max,Gn),an.subVectors(t.a,Gn),on.subVectors(t.b,Gn),cn.subVectors(t.c,Gn),yi.subVectors(on,an),Mi.subVectors(cn,on),Fi.subVectors(an,cn);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Fi.z,Fi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Fi.z,0,-Fi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Fi.y,Fi.x,0];return!mr(e,an,on,cn,_s)||(e=[1,0,0,0,1,0,0,0,1],!mr(e,an,on,cn,_s))?!1:(xs.crossVectors(yi,Mi),e=[xs.x,xs.y,xs.z],mr(e,an,on,cn,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new D,new D,new D,new D,new D,new D,new D,new D],$e=new D,vs=new en,an=new D,on=new D,cn=new D,yi=new D,Mi=new D,Fi=new D,Gn=new D,_s=new D,xs=new D,Oi=new D;function mr(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Oi.fromArray(r,s);const o=n.x*Math.abs(Oi.x)+n.y*Math.abs(Oi.y)+n.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=i.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Eh=new en,Wn=new D,gr=new D;class zn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Eh.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wn.subVectors(t,this.center);const e=Wn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Wn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wn.copy(t.center).add(gr)),this.expandByPoint(Wn.copy(t.center).sub(gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ui=new D,vr=new D,ys=new D,Si=new D,_r=new D,Ms=new D,xr=new D;class qc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){vr.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(vr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ys),o=Si.dot(this.direction),c=-Si.dot(ys),l=Si.lengthSq(),h=Math.abs(1-a*a);let d,f,u,g;if(h>0)if(d=a*c-o,f=a*o-c,g=s*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),u=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),u=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),u=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(vr).addScaledVector(ys,f),u}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const i=ui.dot(this.direction),n=ui.dot(ui)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,n=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,n=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,n,s){_r.subVectors(e,t),Ms.subVectors(i,t),xr.crossVectors(_r,Ms);let a=this.direction.dot(xr),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,t);const c=o*this.direction.dot(Ms.crossVectors(Si,Ms));if(c<0)return null;const l=o*this.direction.dot(_r.cross(Si));if(l<0||c+l>a)return null;const h=-o*Si.dot(xr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(t,e,i,n,s,a,o,c,l,h,d,f,u,g,v,m){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,l,h,d,f,u,g,v,m)}set(t,e,i,n,s,a,o,c,l,h,d,f,u,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/ln.setFromMatrixColumn(t,0).length(),s=1/ln.setFromMatrixColumn(t,1).length(),a=1/ln.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=u+g*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=g+u*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,u=c*d,g=l*h,v=l*d;e[0]=f+v*o,e[4]=g*o-u,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,u=c*d,g=l*h,v=l*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=g*l-u,e[8]=f*l+v,e[1]=c*d,e[5]=v*l+f,e[9]=u*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,u=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-f*d,e[8]=g*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*d+g,e[10]=f-v*d}else if(t.order==="XZY"){const f=a*c,u=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+v,e[5]=a*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Th,t,wh)}lookAt(t,e,i){const n=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),bi.crossVectors(i,Oe),bi.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),bi.crossVectors(i,Oe)),bi.normalize(),Ss.crossVectors(Oe,bi),n[0]=bi.x,n[4]=Ss.x,n[8]=Oe.x,n[1]=bi.y,n[5]=Ss.y,n[9]=Oe.y,n[2]=bi.z,n[6]=Ss.z,n[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],u=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],_=i[7],x=i[11],S=i[15],T=n[0],A=n[4],P=n[8],E=n[12],M=n[1],R=n[5],I=n[9],z=n[13],B=n[2],X=n[6],G=n[10],et=n[14],V=n[3],rt=n[7],lt=n[11],St=n[15];return s[0]=a*T+o*M+c*B+l*V,s[4]=a*A+o*R+c*X+l*rt,s[8]=a*P+o*I+c*G+l*lt,s[12]=a*E+o*z+c*et+l*St,s[1]=h*T+d*M+f*B+u*V,s[5]=h*A+d*R+f*X+u*rt,s[9]=h*P+d*I+f*G+u*lt,s[13]=h*E+d*z+f*et+u*St,s[2]=g*T+v*M+m*B+p*V,s[6]=g*A+v*R+m*X+p*rt,s[10]=g*P+v*I+m*G+p*lt,s[14]=g*E+v*z+m*et+p*St,s[3]=y*T+_*M+x*B+S*V,s[7]=y*A+_*R+x*X+S*rt,s[11]=y*P+_*I+x*G+S*lt,s[15]=y*E+_*z+x*et+S*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*d-n*l*d-s*o*f+i*l*f+n*o*u-i*c*u)+v*(+e*c*u-e*l*f+s*a*f-n*a*u+n*l*h-s*c*h)+m*(+e*l*d-e*o*u-s*a*d+i*a*u+s*o*h-i*l*h)+p*(-n*o*h-e*c*d+e*o*f+n*a*d-i*a*f+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=d*m*l-v*f*l+v*c*u-o*m*u-d*c*p+o*f*p,_=g*f*l-h*m*l-g*c*u+a*m*u+h*c*p-a*f*p,x=h*v*l-g*d*l+g*o*u-a*v*u-h*o*p+a*d*p,S=g*d*c-h*v*c-g*o*f+a*v*f+h*o*m-a*d*m,T=e*y+i*_+n*x+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(v*f*s-d*m*s-v*n*u+i*m*u+d*n*p-i*f*p)*A,t[2]=(o*m*s-v*c*s+v*n*l-i*m*l-o*n*p+i*c*p)*A,t[3]=(d*c*s-o*f*s-d*n*l+i*f*l+o*n*u-i*c*u)*A,t[4]=_*A,t[5]=(h*m*s-g*f*s+g*n*u-e*m*u-h*n*p+e*f*p)*A,t[6]=(g*c*s-a*m*s-g*n*l+e*m*l+a*n*p-e*c*p)*A,t[7]=(a*f*s-h*c*s+h*n*l-e*f*l-a*n*u+e*c*u)*A,t[8]=x*A,t[9]=(g*d*s-h*v*s-g*i*u+e*v*u+h*i*p-e*d*p)*A,t[10]=(a*v*s-g*o*s+g*i*l-e*v*l-a*i*p+e*o*p)*A,t[11]=(h*o*s-a*d*s-h*i*l+e*d*l+a*i*u-e*o*u)*A,t[12]=S*A,t[13]=(h*v*n-g*d*n+g*i*f-e*v*f-h*i*m+e*d*m)*A,t[14]=(g*o*n-a*v*n-g*i*c+e*v*c+a*i*m-e*o*m)*A,t[15]=(a*d*n-h*o*n+h*i*c-e*d*c-a*i*f+e*o*f)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,f=s*l,u=s*h,g=s*d,v=a*h,m=a*d,p=o*d,y=c*l,_=c*h,x=c*d,S=i.x,T=i.y,A=i.z;return n[0]=(1-(v+p))*S,n[1]=(u+x)*S,n[2]=(g-_)*S,n[3]=0,n[4]=(u-x)*T,n[5]=(1-(f+p))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(g+_)*A,n[9]=(m-y)*A,n[10]=(1-(f+v))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=ln.set(n[0],n[1],n[2]).length();const a=ln.set(n[4],n[5],n[6]).length(),o=ln.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ye.copy(this);const l=1/s,h=1/a,d=1/o;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=d,Ye.elements[9]*=d,Ye.elements[10]*=d,e.setFromRotationMatrix(Ye),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=ai,c=!1){const l=this.elements,h=2*s/(e-t),d=2*s/(i-n),f=(e+t)/(e-t),u=(i+n)/(i-n);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===ai)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===js)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=ai,c=!1){const l=this.elements,h=2/(e-t),d=2/(i-n),f=-(e+t)/(e-t),u=-(i+n)/(i-n);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===ai)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===js)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ln=new D,Ye=new Bt,Th=new D(0,0,0),wh=new D(1,1,1),bi=new D,Ss=new D,Oe=new D,wo=new Bt,Ao=new tn;class Xe{constructor(t=0,e=0,i=0,n=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],d=n[2],f=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ah=0;const Ro=new D,hn=new tn,fi=new Bt,bs=new D,Xn=new D,Rh=new D,Ch=new tn,Co=new D(1,0,0),Po=new D(0,1,0),Lo=new D(0,0,1),Do={type:"added"},Ph={type:"removed"},dn={type:"childadded",child:null},yr={type:"childremoved",child:null};class Jt extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const t=new D,e=new Xe,i=new tn,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Bt},normalMatrix:{value:new It}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hn.setFromAxisAngle(t,e),this.quaternion.multiply(hn),this}rotateOnWorldAxis(t,e){return hn.setFromAxisAngle(t,e),this.quaternion.premultiply(hn),this}rotateX(t){return this.rotateOnAxis(Co,t)}rotateY(t){return this.rotateOnAxis(Po,t)}rotateZ(t){return this.rotateOnAxis(Lo,t)}translateOnAxis(t,e){return Ro.copy(t).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Co,t)}translateY(t){return this.translateOnAxis(Po,t)}translateZ(t){return this.translateOnAxis(Lo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?bs.copy(t):bs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Xn,bs,this.up):fi.lookAt(bs,Xn,this.up),this.quaternion.setFromRotationMatrix(fi),n&&(fi.extractRotation(n.matrixWorld),hn.setFromRotationMatrix(fi),this.quaternion.premultiply(hn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Do),dn.child=t,this.dispatchEvent(dn),dn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ph),yr.child=t,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Do),dn.child=t,this.dispatchEvent(dn),dn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,t,Rh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,Ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Jt.DEFAULT_UP=new D(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new D,pi=new D,Mr=new D,mi=new D,un=new D,fn=new D,Io=new D,Sr=new D,br=new D,Er=new D,Tr=new he,wr=new he,Ar=new he;class Ze{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),je.subVectors(t,e),n.cross(je);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){je.subVectors(n,e),pi.subVectors(i,e),Mr.subVectors(t,e);const a=je.dot(je),o=je.dot(pi),c=je.dot(Mr),l=pi.dot(pi),h=pi.dot(Mr),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,u=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-u-g,g,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,n,s,a,o,c){return this.getBarycoord(t,e,i,n,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(t,e,i,n,s,a){return Tr.setScalar(0),wr.setScalar(0),Ar.setScalar(0),Tr.fromBufferAttribute(t,e),wr.fromBufferAttribute(t,i),Ar.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Tr,s.x),a.addScaledVector(wr,s.y),a.addScaledVector(Ar,s.z),a}static isFrontFacing(t,e,i,n){return je.subVectors(i,e),pi.subVectors(t,e),je.cross(pi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),je.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;un.subVectors(n,i),fn.subVectors(s,i),Sr.subVectors(t,i);const c=un.dot(Sr),l=fn.dot(Sr);if(c<=0&&l<=0)return e.copy(i);br.subVectors(t,n);const h=un.dot(br),d=fn.dot(br);if(h>=0&&d<=h)return e.copy(n);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(un,a);Er.subVectors(t,s);const u=un.dot(Er),g=fn.dot(Er);if(g>=0&&u<=g)return e.copy(s);const v=u*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(fn,o);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return Io.subVectors(s,n),o=(d-h)/(d-h+(u-g)),e.copy(n).addScaledVector(Io,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(i).addScaledVector(un,a).addScaledVector(fn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Rr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Xt.workingColorSpace){if(t=mh(t,1),e=kt(e,0,1),i=kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Rr(a,s,t+1/3),this.g=Rr(a,s,t),this.b=Rr(a,s,t-1/3)}return Xt.colorSpaceToWorking(this,n),this}setStyle(t,e=ye){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const i=Yc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Xt.workingToColorSpace(be.copy(this),t),Math.round(kt(be.r*255,0,255))*65536+Math.round(kt(be.g*255,0,255))*256+Math.round(kt(be.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(be.copy(this),e);const i=be.r,n=be.g,s=be.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-s)/d+(n<s?6:0);break;case n:c=(s-i)/d+2;break;case s:c=(i-n)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ye){Xt.workingToColorSpace(be.copy(this),t);const e=be.r,i=be.g,n=be.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Es);const i=hr(Ei.h,Es.h,e),n=hr(Ei.s,Es.s,e),s=hr(Ei.l,Es.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Ct;Ct.NAMES=Yc;let Lh=0;class kn extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=En,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$r,this.blendDst=Yr,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ln,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sn,this.stencilZFail=sn,this.stencilZPass=sn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==En&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$r&&(i.blendSrc=this.blendSrc),this.blendDst!==Yr&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ln&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Re extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new D,Ts=new Ht;let Dh=0;class He{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yo,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yo&&(t.usage=this.usage),t}}class jc extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Kc extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Yt extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ih=0;const We=new Bt,Cr=new Jt,pn=new D,ze=new en,qn=new en,xe=new D;class me extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wc(t)?Kc:jc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new It().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return Cr.lookAt(t),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pn).negate(),this.translate(pn.x,pn.y,pn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(ze.min,qn.min),ze.expandByPoint(xe),xe.addVectors(ze.max,qn.max),ze.expandByPoint(xe)):(ze.expandByPoint(qn.min),ze.expandByPoint(qn.max))}ze.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)xe.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xe.fromBufferAttribute(o,l),c&&(pn.fromBufferAttribute(t,l),xe.add(pn)),n=Math.max(n,i.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new D,c[P]=new D;const l=new D,h=new D,d=new D,f=new Ht,u=new Ht,g=new Ht,v=new D,m=new D;function p(P,E,M){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),u.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),h.sub(l),d.sub(l),u.sub(f),g.sub(f);const R=1/(u.x*g.y-g.x*u.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(R),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(v),o[E].add(v),o[M].add(v),c[P].add(m),c[E].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,E=y.length;P<E;++P){const M=y[P],R=M.start,I=M.count;for(let z=R,B=R+I;z<B;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const _=new D,x=new D,S=new D,T=new D;function A(P){S.fromBufferAttribute(n,P),T.copy(S);const E=o[P];_.copy(E),_.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(T,E);const R=x.dot(c[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,R)}for(let P=0,E=y.length;P<E;++P){const M=y[P],R=M.start,I=M.count;for(let z=R,B=R+I;z<B;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);const n=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let f=0,u=t.count;f<u;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let u=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?u=c[v]*o.data.stride+o.offset:u=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[u++]}return new He(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=t(f,i);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(n[c]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new Bt,zi=new qc,ws=new zn,No=new D,As=new D,Rs=new D,Cs=new D,Pr=new D,Ps=new D,Fo=new D,Ls=new D;class Ot extends Jt{constructor(t=new me,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Pr.fromBufferAttribute(d,t),a?Ps.addScaledVector(Pr,h):Ps.addScaledVector(Pr.sub(e),h))}e.add(Ps)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),zi.copy(t.ray).recast(t.near),!(ws.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ws,No)===null||zi.origin.distanceToSquared(No)>(t.far-t.near)**2))&&(Uo.copy(s).invert(),zi.copy(t.ray).applyMatrix4(Uo),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,u.start),_=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let x=y,S=_;x<S;x+=3){const T=o.getX(x),A=o.getX(x+1),P=o.getX(x+2);n=Ds(this,p,t,i,l,h,d,T,A,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);n=Ds(this,a,t,i,l,h,d,y,_,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,u.start),_=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let x=y,S=_;x<S;x+=3){const T=x,A=x+1,P=x+2;n=Ds(this,p,t,i,l,h,d,T,A,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const y=m,_=m+1,x=m+2;n=Ds(this,a,t,i,l,h,d,y,_,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Uh(r,t,e,i,n,s,a,o){let c;if(t.side===Ue?c=i.intersectTriangle(a,s,n,!0,o):c=i.intersectTriangle(n,s,a,t.side===xi,o),c===null)return null;Ls.copy(o),Ls.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ls);return l<e.near||l>e.far?null:{distance:l,point:Ls.clone(),object:r}}function Ds(r,t,e,i,n,s,a,o,c,l){r.getVertexPosition(o,As),r.getVertexPosition(c,Rs),r.getVertexPosition(l,Cs);const h=Uh(r,t,e,i,As,Rs,Cs,Fo);if(h){const d=new D;Ze.getBarycoord(Fo,As,Rs,Cs,d),n&&(h.uv=Ze.getInterpolatedAttribute(n,o,c,l,d,new Ht)),s&&(h.uv1=Ze.getInterpolatedAttribute(s,o,c,l,d,new Ht)),a&&(h.normal=Ze.getInterpolatedAttribute(a,o,c,l,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};Ze.getNormal(As,Rs,Cs,f.normal),h.face=f,h.barycoord=d}return h}class ie extends me{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function g(v,m,p,y,_,x,S,T,A,P,E){const M=x/A,R=S/P,I=x/2,z=S/2,B=T/2,X=A+1,G=P+1;let et=0,V=0;const rt=new D;for(let lt=0;lt<G;lt++){const St=lt*R-z;for(let zt=0;zt<X;zt++){const Qt=zt*M-I;rt[v]=Qt*y,rt[m]=St*_,rt[p]=B,l.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(zt/A),d.push(1-lt/P),et+=1}}for(let lt=0;lt<P;lt++)for(let St=0;St<A;St++){const zt=f+St+X*lt,Qt=f+St+X*(lt+1),ne=f+(St+1)+X*(lt+1),qt=f+(St+1)+X*lt;c.push(zt,Qt,qt),c.push(Qt,ne,qt),V+=6}o.addGroup(u,V,E),u+=V,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nn(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ae(r){const t={};for(let e=0;e<r.length;e++){const i=Nn(r[e]);for(const n in i)t[n]=i[n]}return t}function Nh(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Zc(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Fh={clone:Nn,merge:Ae};var Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nn(t.uniforms),this.uniformsGroups=Nh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Jc extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new D,Oo=new Ht,zo=new Ht;class De extends Jc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Oo,zo),e.subVectors(zo,Oo)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mn=-90,gn=1;class kh extends Jt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new De(mn,gn,t,e);n.layers=this.layers,this.add(n);const s=new De(mn,gn,t,e);s.layers=this.layers,this.add(s);const a=new De(mn,gn,t,e);a.layers=this.layers,this.add(a);const o=new De(mn,gn,t,e);o.layers=this.layers,this.add(o);const c=new De(mn,gn,t,e);c.layers=this.layers,this.add(c);const l=new De(mn,gn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qc extends Te{constructor(t=[],e=Dn,i,n,s,a,o,c,l,h){super(t,e,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bh extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Qc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ie(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:Nn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:Ci});s.uniforms.tEquirect.value=e;const a=new Ot(n,s),o=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Qe),new kh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}class Ce extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hh={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;l.inputState.pinching&&f>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hh)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Js{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=i}clone(){return new Js(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tl extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vh extends Te{constructor(t=null,e=1,i=1,n,s,a,o,c,l=Be,h=Be,d,f){super(null,a,o,c,l,h,n,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko extends He{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vn=new Bt,Bo=new Bt,Is=[],Ho=new en,Gh=new Bt,$n=new Ot,Yn=new zn;class ei extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Gh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new en),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vn),Ho.copy(t.boundingBox).applyMatrix4(vn),this.boundingBox.union(Ho)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vn),Yn.copy(t.boundingSphere).applyMatrix4(vn),this.boundingSphere.union(Yn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if($n.geometry=this.geometry,$n.material=this.material,$n.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yn.copy(this.boundingSphere),Yn.applyMatrix4(i),t.ray.intersectsSphere(Yn)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,vn),Bo.multiplyMatrices(i,vn),$n.matrixWorld=Bo,$n.raycast(t,Is);for(let a=0,o=Is.length;a<o;a++){const c=Is[a];c.instanceId=s,c.object=this,e.push(c)}Is.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vh(new Float32Array(n*this.count),n,this.count,qa,ri));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=n*t;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dr=new D,Wh=new D,Xh=new It;class Vi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Dr.subVectors(i,e).cross(Wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Dr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Xh.getNormalMatrix(t),n=this.coplanarPoint(Dr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new zn,qh=new Ht(.5,.5),Us=new D;class Za{constructor(t=new Vi,e=new Vi,i=new Vi,n=new Vi,s=new Vi,a=new Vi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai,i=!1){const n=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],f=s[6],u=s[7],g=s[8],v=s[9],m=s[10],p=s[11],y=s[12],_=s[13],x=s[14],S=s[15];if(n[0].setComponents(l-a,u-h,p-g,S-y).normalize(),n[1].setComponents(l+a,u+h,p+g,S+y).normalize(),n[2].setComponents(l+o,u+d,p+v,S+_).normalize(),n[3].setComponents(l-o,u-d,p-v,S-_).normalize(),i)n[4].setComponents(c,f,m,x).normalize(),n[5].setComponents(l-c,u-f,p-m,S-x).normalize();else if(n[4].setComponents(l-c,u-f,p-m,S-x).normalize(),e===ai)n[5].setComponents(l+c,u+f,p+m,S+x).normalize();else if(e===js)n[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);const e=qh.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Us.x=n.normal.x>0?t.max.x:t.min.x,Us.y=n.normal.y>0?t.max.y:t.min.y,Us.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class el extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qs=new D,tr=new D,Vo=new Bt,jn=new qc,Ns=new zn,Ir=new D,Go=new D;class $h extends Jt{constructor(t=new me,e=new el){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Qs.fromBufferAttribute(e,n-1),tr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Qs.distanceTo(tr);t.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(n),Ns.radius+=s,t.ray.intersectsSphere(Ns)===!1)return;Vo.copy(n).invert(),jn.copy(t.ray).applyMatrix4(Vo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=l){const p=h.getX(v),y=h.getX(v+1),_=Fs(this,t,jn,c,p,y,v);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(u),p=Fs(this,t,jn,c,v,m,g-1);p&&e.push(p)}}else{const u=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=l){const p=Fs(this,t,jn,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Fs(this,t,jn,c,g-1,u,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fs(r,t,e,i,n,s,a){const o=r.geometry.attributes.position;if(Qs.fromBufferAttribute(o,n),tr.fromBufferAttribute(o,s),e.distanceSqToSegment(Qs,tr,Ir,Go)>i)return;Ir.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ir);if(!(l<t.near||l>t.far))return{distance:l,point:Go.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Wo=new D,Xo=new D;class Yh extends $h{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Wo.distanceTo(Xo);t.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class as extends Te{constructor(t,e,i,n,s,a,o,c,l){super(t,e,i,n,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class il extends Te{constructor(t,e,i=Zi,n,s,a,o=Be,c=Be,l,h=is,d=1){if(h!==is&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ka(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class nl extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ja extends me{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new D,h=new Ht;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=i+d/e*n;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qe extends me{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],f=[],u=[];let g=0;const v=[],m=i/2;let p=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(u,2));function y(){const x=new D,S=new D;let T=0;const A=(e-t)/i;for(let P=0;P<=s;P++){const E=[],M=P/s,R=M*(e-t)+t;for(let I=0;I<=n;I++){const z=I/n,B=z*c+o,X=Math.sin(B),G=Math.cos(B);S.x=R*X,S.y=-M*i+m,S.z=R*G,d.push(S.x,S.y,S.z),x.set(X,A,G).normalize(),f.push(x.x,x.y,x.z),u.push(z,1-M),E.push(g++)}v.push(E)}for(let P=0;P<n;P++)for(let E=0;E<s;E++){const M=v[E][P],R=v[E+1][P],I=v[E+1][P+1],z=v[E][P+1];(t>0||E!==0)&&(h.push(M,R,z),T+=3),(e>0||E!==s-1)&&(h.push(R,I,z),T+=3)}l.addGroup(p,T,0),p+=T}function _(x){const S=g,T=new Ht,A=new D;let P=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let I=1;I<=n;I++)d.push(0,m*M,0),f.push(0,M,0),u.push(.5,.5),g++;const R=g;for(let I=0;I<=n;I++){const B=I/n*c+o,X=Math.cos(B),G=Math.sin(B);A.x=E*G,A.y=m*M,A.z=E*X,d.push(A.x,A.y,A.z),f.push(0,M,0),T.x=X*.5+.5,T.y=G*.5*M+.5,u.push(T.x,T.y),g++}for(let I=0;I<n;I++){const z=S+I,B=R+I;x===!0?h.push(B,B+1,z):h.push(B+1,B,z),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fn extends qe{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Fn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qa extends me{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],a=[];o(n),l(i),h(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new D,x=new D,S=new D;for(let T=0;T<e.length;T+=3)u(e[T+0],_),u(e[T+1],x),u(e[T+2],S),c(_,x,S,y)}function c(y,_,x,S){const T=S+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const E=y.clone().lerp(x,P/T),M=_.clone().lerp(x,P/T),R=T-P;for(let I=0;I<=R;I++)I===0&&P===T?A[P][I]=E:A[P][I]=E.clone().lerp(M,I/R)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){const M=Math.floor(E/2);E%2===0?(f(A[P][M+1]),f(A[P+1][M]),f(A[P][M])):(f(A[P][M+1]),f(A[P+1][M+1]),f(A[P+1][M]))}}function l(y){const _=new D;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(y),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function h(){const y=new D;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const x=m(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;a.push(x,1-S)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const _=a[y+0],x=a[y+2],S=a[y+4],T=Math.max(_,x,S),A=Math.min(_,x,S);T>.9&&A<.1&&(_<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function u(y,_){const x=y*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){const y=new D,_=new D,x=new D,S=new D,T=new Ht,A=new Ht,P=new Ht;for(let E=0,M=0;E<s.length;E+=9,M+=6){y.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),S.copy(y).add(_).add(x).divideScalar(3);const R=m(S);v(T,M+0,y,R),v(A,M+2,_,R),v(P,M+4,x,R)}}function v(y,_,x,S){S<0&&y.x===1&&(a[_]=y.x-1),x.x===0&&x.z===0&&(a[_]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.vertices,t.indices,t.radius,t.details)}}class jh{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-a,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===a)return n/(s-1);const h=i[n],f=i[n+1]-h,u=(a-h)/f;return(n+u)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),c=e||(a.isVector2?new Ht:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new D,n=[],s=[],a=[],o=new D,c=new Bt;for(let u=0;u<=t;u++){const g=u/t;n[u]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(kt(n[u-1].dot(n[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(n[u],s[u])}if(e===!0){let u=Math.acos(kt(s[0].dot(s[t]),-1,1));u/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(u=-u);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],u*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function to(){let r=0,t=0,e=0,i=0;function n(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,u*=h,n(a,o,f,u)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+i*o}}}const Os=new D,Ur=new to,Nr=new to,Fr=new to;class os extends jh{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new D){const i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=n[(o-1)%s]:(Os.subVectors(n[0],n[1]).add(n[0]),l=Os);const d=n[o%s],f=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(Os.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Os),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ur.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,g,v,m),Nr.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,g,v,m),Fr.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ur.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Nr.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Fr.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return i.set(Ur.calc(c),Nr.calc(c),Fr.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new D().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ji extends Qa{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ji(t.radius,t.detail)}}class Ii extends me{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,d=t/o,f=e/c,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*f-a;for(let _=0;_<l;_++){const x=_*d-s;g.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const _=y+l*p,x=y+l*(p+1),S=y+1+l*(p+1),T=y+1+l*p;u.push(_,x,T),u.push(x,S,T)}this.setIndex(u),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.widthSegments,t.heightSegments)}}class us extends me{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new D,f=new D,u=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],_=p/i;let x=0;p===0&&a===0?x=.5/e:p===i&&c===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){const T=S/e;d.x=-t*Math.cos(n+T*s)*Math.sin(a+_*o),d.y=t*Math.cos(a+_*o),d.z=t*Math.sin(n+T*s)*Math.sin(a+_*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(T+x,1-_),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const _=h[p][y+1],x=h[p][y],S=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&u.push(_,x,T),(p!==i-1||c<Math.PI)&&u.push(x,S,T)}this.setIndex(u),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sr extends me{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],c=[],l=[],h=new D,d=new D,f=new D;for(let u=0;u<=i;u++)for(let g=0;g<=n;g++){const v=g/n*s,m=u/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/n),l.push(u/i)}for(let u=1;u<=i;u++)for(let g=1;g<=n;g++){const v=(n+1)*u+g-1,m=(n+1)*(u-1)+g-1,p=(n+1)*(u-1)+g,y=(n+1)*u+g;a.push(v,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ae extends kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kh extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zh extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class eo extends Jt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sl extends eo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Or=new Bt,qo=new D,$o=new D;class rl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;qo.setFromMatrixPosition(t.matrixWorld),e.position.copy(qo),$o.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($o),e.updateMatrixWorld(),Or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Or,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jh extends rl{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Ks*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Qh extends eo{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Jh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class al extends Jc{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class td extends rl{constructor(){super(new al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ol extends eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new td}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ed extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Yo(r,t,e,i){const n=id(i);switch(e){case kc:return r*t;case qa:return r*t/n.components*n.byteLength;case $a:return r*t/n.components*n.byteLength;case Hc:return r*t*2/n.components*n.byteLength;case Ya:return r*t*2/n.components*n.byteLength;case Bc:return r*t*3/n.components*n.byteLength;case ti:return r*t*4/n.components*n.byteLength;case ja:return r*t*4/n.components*n.byteLength;case Vs:case Gs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case oa:case la:return Math.max(r,16)*Math.max(t,8)/4;case aa:case ca:return Math.max(r,8)*Math.max(t,8)/2;case ha:case da:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ua:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ma:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ga:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case _a:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case xa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ya:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ba:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Aa:case Ra:case Ca:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Pa:case La:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Da:case Ia:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function id(r){switch(r){case li:case Nc:return{byteLength:1,components:1};case ts:case Fc:case hs:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Zi:case Ga:case ri:return{byteLength:4,components:1};case Oc:case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);function cl(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function nd(r){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=r.SHORT;else if(l instanceof Uint32Array)u=r.UNSIGNED_INT;else if(l instanceof Int32Array)u=r.INT;else if(l instanceof Int8Array)u=r.BYTE;else if(l instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],v=d[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const v=d[u];r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:s,update:a}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
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
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
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
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
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
#endif`,fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vd=`#ifdef USE_IRIDESCENCE
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
#endif`,_d=`#ifdef USE_BUMPMAP
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ad=`#define PI 3.141592653589793
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
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cd=`vec3 transformedNormal = objectNormal;
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
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
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
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
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
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eu=`PhysicalMaterial material;
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
#endif`,iu=`struct PhysicalMaterial {
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
}`,nu=`
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
#endif`,su=`#if defined( RE_IndirectDiffuse )
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
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ou=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fu=`#if defined( USE_POINTS_UV )
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
#endif`,pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xu=`#ifdef USE_MORPHTARGETS
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
#endif`,yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Su=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wu=`#ifdef USE_NORMALMAP
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
#endif`,Au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ru=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Du=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vu=`float getShadowMask() {
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
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wu=`#ifdef USE_SKINNING
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
#endif`,Xu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qu=`#ifdef USE_SKINNING
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
#endif`,$u=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ku=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zu=`#ifdef USE_TRANSMISSION
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
#endif`,Ju=`#ifdef USE_TRANSMISSION
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`#include <common>
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
}`,df=`#if DEPTH_PACKING == 3200
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
}`,uf=`#define DISTANCE
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
}`,ff=`#define DISTANCE
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
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
}`,vf=`uniform vec3 diffuse;
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
}`,_f=`#include <common>
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
}`,xf=`uniform vec3 diffuse;
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
}`,yf=`#define LAMBERT
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
}`,Mf=`#define LAMBERT
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
}`,Sf=`#define MATCAP
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
}`,bf=`#define MATCAP
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
}`,Ef=`#define NORMAL
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
}`,Tf=`#define NORMAL
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
}`,wf=`#define PHONG
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
}`,Af=`#define PHONG
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
}`,Rf=`#define STANDARD
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
}`,Cf=`#define STANDARD
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
}`,Pf=`#define TOON
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
}`,Lf=`#define TOON
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
}`,Df=`uniform float size;
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
}`,If=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Nf=`uniform vec3 color;
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
}`,Ff=`uniform float rotation;
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
}`,Of=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:cd,alphatest_pars_fragment:ld,aomap_fragment:hd,aomap_pars_fragment:dd,batching_pars_vertex:ud,batching_vertex:fd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:vd,bumpmap_pars_fragment:_d,clipping_planes_fragment:xd,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:Sd,color_fragment:bd,color_pars_fragment:Ed,color_pars_vertex:Td,color_vertex:wd,common:Ad,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Ld,emissivemap_fragment:Dd,emissivemap_pars_fragment:Id,colorspace_fragment:Ud,colorspace_pars_fragment:Nd,envmap_fragment:Fd,envmap_common_pars_fragment:Od,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Kd,envmap_vertex:Bd,fog_vertex:Hd,fog_pars_vertex:Vd,fog_fragment:Gd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:qd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Yd,lights_pars_begin:jd,lights_toon_fragment:Zd,lights_toon_pars_fragment:Jd,lights_phong_fragment:Qd,lights_phong_pars_fragment:tu,lights_physical_fragment:eu,lights_physical_pars_fragment:iu,lights_fragment_begin:nu,lights_fragment_maps:su,lights_fragment_end:ru,logdepthbuf_fragment:au,logdepthbuf_pars_fragment:ou,logdepthbuf_pars_vertex:cu,logdepthbuf_vertex:lu,map_fragment:hu,map_pars_fragment:du,map_particle_fragment:uu,map_particle_pars_fragment:fu,metalnessmap_fragment:pu,metalnessmap_pars_fragment:mu,morphinstance_vertex:gu,morphcolor_vertex:vu,morphnormal_vertex:_u,morphtarget_pars_vertex:xu,morphtarget_vertex:yu,normal_fragment_begin:Mu,normal_fragment_maps:Su,normal_pars_fragment:bu,normal_pars_vertex:Eu,normal_vertex:Tu,normalmap_pars_fragment:wu,clearcoat_normal_fragment_begin:Au,clearcoat_normal_fragment_maps:Ru,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Pu,opaque_fragment:Lu,packing:Du,premultiplied_alpha_fragment:Iu,project_vertex:Uu,dithering_fragment:Nu,dithering_pars_fragment:Fu,roughnessmap_fragment:Ou,roughnessmap_pars_fragment:zu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:Bu,shadowmap_vertex:Hu,shadowmask_pars_fragment:Vu,skinbase_vertex:Gu,skinning_pars_vertex:Wu,skinning_vertex:Xu,skinnormal_vertex:qu,specularmap_fragment:$u,specularmap_pars_fragment:Yu,tonemapping_fragment:ju,tonemapping_pars_fragment:Ku,transmission_fragment:Zu,transmission_pars_fragment:Ju,uv_pars_fragment:Qu,uv_pars_vertex:tf,uv_vertex:ef,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:af,backgroundCube_frag:of,cube_vert:cf,cube_frag:lf,depth_vert:hf,depth_frag:df,distanceRGBA_vert:uf,distanceRGBA_frag:ff,equirect_vert:pf,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:vf,meshbasic_vert:_f,meshbasic_frag:xf,meshlambert_vert:yf,meshlambert_frag:Mf,meshmatcap_vert:Sf,meshmatcap_frag:bf,meshnormal_vert:Ef,meshnormal_frag:Tf,meshphong_vert:wf,meshphong_frag:Af,meshphysical_vert:Rf,meshphysical_frag:Cf,meshtoon_vert:Pf,meshtoon_frag:Lf,points_vert:Df,points_frag:If,shadow_vert:Uf,shadow_frag:Nf,sprite_vert:Ff,sprite_frag:Of},st={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},si={basic:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ae([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ae([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ae([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ae([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ae([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ae([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ae([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ae([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ae([st.common,st.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ae([st.lights,st.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};si.physical={uniforms:Ae([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const zs={r:0,b:0,g:0},Bi=new Xe,zf=new Bt;function kf(r,t,e,i,n,s,a){const o=new Ct(0);let c=s===!0?0:1,l,h,d=null,f=0,u=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function v(_){let x=!1;const S=g(_);S===null?p(o,c):S&&S.isColor&&(p(S,1),x=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===nr)?(h===void 0&&(h=new Ot(new ie(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Nn(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Bi.copy(x.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zf.makeRotationFromEuler(Bi)),h.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Kt,(d!==S||f!==S.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,u=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ot(new Ii(2,2),new Di({name:"BackgroundMaterial",uniforms:Nn(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Kt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,u=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,x){_.getRGB(zs,Zc(r)),i.buffers.color.setClear(zs.r,zs.g,zs.b,x,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:v,addToRenderList:m,dispose:y}}function Bf(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null);let s=n,a=!1;function o(M,R,I,z,B){let X=!1;const G=d(z,I,R);s!==G&&(s=G,l(s.object)),X=u(M,z,I,B),X&&g(M,z,I,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(M,R,I,z),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function d(M,R,I){const z=I.wireframe===!0;let B=i[M.id];B===void 0&&(B={},i[M.id]=B);let X=B[R.id];X===void 0&&(X={},B[R.id]=X);let G=X[z];return G===void 0&&(G=f(c()),X[z]=G),G}function f(M){const R=[],I=[],z=[];for(let B=0;B<e;B++)R[B]=0,I[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:z,object:M,attributes:{},index:null}}function u(M,R,I,z){const B=s.attributes,X=R.attributes;let G=0;const et=I.getAttributes();for(const V in et)if(et[V].location>=0){const lt=B[V];let St=X[V];if(St===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(M,R,I,z){const B={},X=R.attributes;let G=0;const et=I.getAttributes();for(const V in et)if(et[V].location>=0){let lt=X[V];lt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));const St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),B[V]=St,G++}s.attributes=B,s.attributesNum=G,s.index=z}function v(){const M=s.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const I=s.newAttributes,z=s.enabledAttributes,B=s.attributeDivisors;I[M]=1,z[M]===0&&(r.enableVertexAttribArray(M),z[M]=1),B[M]!==R&&(r.vertexAttribDivisor(M,R),B[M]=R)}function y(){const M=s.newAttributes,R=s.enabledAttributes;for(let I=0,z=R.length;I<z;I++)R[I]!==M[I]&&(r.disableVertexAttribArray(I),R[I]=0)}function _(M,R,I,z,B,X,G){G===!0?r.vertexAttribIPointer(M,R,I,B,X):r.vertexAttribPointer(M,R,I,z,B,X)}function x(M,R,I,z){v();const B=z.attributes,X=I.getAttributes(),G=R.defaultAttributeValues;for(const et in X){const V=X[et];if(V.location>=0){let rt=B[et];if(rt===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const lt=rt.normalized,St=rt.itemSize,zt=t.get(rt);if(zt===void 0)continue;const Qt=zt.buffer,ne=zt.type,qt=zt.bytesPerElement,$=ne===r.INT||ne===r.UNSIGNED_INT||rt.gpuType===Ga;if(rt.isInterleavedBufferAttribute){const K=rt.data,ut=K.stride,Pt=rt.offset;if(K.isInstancedInterleavedBuffer){for(let Mt=0;Mt<V.locationSize;Mt++)p(V.location+Mt,K.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)m(V.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let Mt=0;Mt<V.locationSize;Mt++)_(V.location+Mt,St/V.locationSize,ne,lt,ut*qt,(Pt+St/V.locationSize*Mt)*qt,$)}else{if(rt.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)p(V.location+K,rt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let K=0;K<V.locationSize;K++)_(V.location+K,St/V.locationSize,ne,lt,St*qt,St/V.locationSize*K*qt,$)}}else if(G!==void 0){const lt=G[et];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(V.location,lt);break;case 3:r.vertexAttrib3fv(V.location,lt);break;case 4:r.vertexAttrib4fv(V.location,lt);break;default:r.vertexAttrib1fv(V.location,lt)}}}}y()}function S(){P();for(const M in i){const R=i[M];for(const I in R){const z=R[I];for(const B in z)h(z[B].object),delete z[B];delete R[I]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const I in R){const z=R[I];for(const B in z)h(z[B].object),delete z[B];delete R[I]}delete i[M.id]}function A(M){for(const R in i){const I=i[R];if(I[M.id]===void 0)continue;const z=I[M.id];for(const B in z)h(z[B].object),delete z[B];delete I[M.id]}}function P(){E(),a=!0,s!==n&&(s=n,l(s.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Hf(r,t,e){let i;function n(l){i=l}function s(l,h){r.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,d){d!==0&&(r.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,i,1)}function c(l,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];e.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vf(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==ti&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==li&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ri&&!P)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:S,maxSamples:T}}function Gf(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Vi,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||i!==0||n;return n=f,i=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!n||g===null||g.length===0||s&&!m)s?h(null):l();else{const y=s?0:i,_=y*4;let x=p.clippingState||null;c.value=x,x=h(g,f,_,u);for(let S=0;S!==_;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=u+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=u;_!==v;++_,x+=4)a.copy(d[_]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Wf(r){let t=new WeakMap;function e(a,o){return o===ia?a.mapping=Dn:o===na&&(a.mapping=In),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ia||o===na)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Bh(c.height);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",n),e(l.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Mn=4,jo=[.125,.215,.35,.446,.526,.582],qi=20,zr=new al,Ko=new Ct;let kr=null,Br=0,Hr=0,Vr=!1;const Gi=(1+Math.sqrt(5))/2,_n=1/Gi,Zo=[new D(-Gi,_n,0),new D(Gi,_n,0),new D(-_n,0,Gi),new D(_n,0,Gi),new D(0,Gi,-_n),new D(0,Gi,_n),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Xf=new D;class Jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=Xf}=s;kr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Br,Hr),this._renderer.xr.enabled=Vr,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dn||t.mapping===In?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:hs,format:ti,colorSpace:Un,depthBuffer:!1},n=Qo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qf(s)),this._blurMaterial=$f(s,t,e)}return n}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,i,n,s){const c=new De(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Ko),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null));const v=new Re({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new Ot(new ie,v);let p=!1;const y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,p=!0):(v.color.copy(Ko),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[_],s.y,s.z)):x===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[_]));const S=this._cubeSize;ks(n,x*S,_>2?S:0,S,S),d.setRenderTarget(n),p&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=f,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Dn||t.mapping===In;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ks(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,zr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zo[(n-s-1)%Zo.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ot(this._lodPlanes[n],l),f=l.uniforms,u=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*qi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):qi;m>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let y=0;for(let A=0;A<qi;++A){const P=A/v,E=Math.exp(-P*P/2);p.push(E),A===0?y+=E:A<m&&(y+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const x=this._sizeLods[n],S=3*x*(n>_-Mn?n-_+Mn:0),T=4*(this._cubeSize-x);ks(e,S,T,3*x,2*x),c.setRenderTarget(e),c.render(d,zr)}}function qf(r){const t=[],e=[],i=[];let n=r;const s=r-Mn+1+jo.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);e.push(o);let c=1/o;a>r-Mn?c=jo[a-r+Mn-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*u),_=new Float32Array(m*g*u),x=new Float32Array(p*g*u);for(let T=0;T<u;T++){const A=T%3*2/3-1,P=T>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(E,v*g*T),_.set(f,m*g*T);const M=[T,T,T,T,T,T];x.set(M,p*g*T)}const S=new me;S.setAttribute("position",new He(y,v)),S.setAttribute("uv",new He(_,m)),S.setAttribute("faceIndex",new He(x,p)),t.push(S),n>Mn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Qo(r,t,e){const i=new Li(r,t,e);return i.texture.mapping=nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function $f(r,t,e){const i=new Float32Array(qi),n=new D(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:io(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function tc(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ec(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function Yf(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===ia||c===na,h=c===Dn||c===In;if(l||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Jo(r)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&n(u)?(e===null&&(e=new Jo(r)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function n(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function jf(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&rs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Kf(r,t,e,i){const n={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];const u=s.get(f);u&&(t.remove(u),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const u in f)t.update(f[u],r.ARRAY_BUFFER)}function l(d){const f=[],u=d.index,g=d.attributes.position;let v=0;if(u!==null){const y=u.array;v=u.version;for(let _=0,x=y.length;_<x;_+=3){const S=y[_+0],T=y[_+1],A=y[_+2];f.push(S,T,T,A,A,S)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const S=_+0,T=_+1,A=_+2;f.push(S,T,T,A,A,S)}}else return;const m=new(Wc(f)?Kc:jc)(f,1);m.version=v;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const f=s.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Zf(r,t,e){let i;function n(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){r.drawElements(i,u,s,f*a),e.update(u,i,1)}function l(f,u,g){g!==0&&(r.drawElementsInstanced(i,u,s,f*a,g),e.update(u,i,g))}function h(f,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,i,1)}function d(f,u,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,u,0,s,f,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*v[y];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Jf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Qf(r,t,e){const i=new WeakMap,n=new he;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;u===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const T=new Float32Array(x*S*4*d),A=new Xc(T,x,S,d);A.type=ri,A.needsUpdate=!0;const P=_*4;for(let M=0;M<d;M++){const R=m[M],I=p[M],z=y[M],B=x*S*4*M;for(let X=0;X<R.count;X++){const G=X*P;u===!0&&(n.fromBufferAttribute(R,X),T[B+G+0]=n.x,T[B+G+1]=n.y,T[B+G+2]=n.z,T[B+G+3]=0),g===!0&&(n.fromBufferAttribute(I,X),T[B+G+4]=n.x,T[B+G+5]=n.y,T[B+G+6]=n.z,T[B+G+7]=0),v===!0&&(n.fromBufferAttribute(z,X),T[B+G+8]=n.x,T[B+G+9]=n.y,T[B+G+10]=n.z,T[B+G+11]=z.itemSize===4?n.w:1)}}f={count:d,texture:A,size:new Ht(x,S)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let u=0;for(let v=0;v<l.length;v++)u+=l[v];const g=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function tp(r,t,e,i){let n=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(n.get(d)!==l&&(t.update(d),n.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;n.get(f)!==l&&(f.update(),n.set(f,l))}return d}function a(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const ll=new Te,ic=new il(1,1),hl=new Xc,dl=new bh,ul=new Qc,nc=[],sc=[],rc=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function Bn(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=nc[n];if(s===void 0&&(s=new Float32Array(n),nc[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ge(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ve(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function rr(r,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function ep(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ip(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2fv(this.addr,t),ve(e,t)}}function np(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;r.uniform3fv(this.addr,t),ve(e,t)}}function sp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4fv(this.addr,t),ve(e,t)}}function rp(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;oc.set(i),r.uniformMatrix2fv(this.addr,!1,oc),ve(e,i)}}function ap(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;ac.set(i),r.uniformMatrix3fv(this.addr,!1,ac),ve(e,i)}}function op(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;rc.set(i),r.uniformMatrix4fv(this.addr,!1,rc),ve(e,i)}}function cp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function lp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2iv(this.addr,t),ve(e,t)}}function hp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3iv(this.addr,t),ve(e,t)}}function dp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4iv(this.addr,t),ve(e,t)}}function up(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function fp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2uiv(this.addr,t),ve(e,t)}}function pp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3uiv(this.addr,t),ve(e,t)}}function mp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4uiv(this.addr,t),ve(e,t)}}function gp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(ic.compareFunction=Gc,s=ic):s=ll,e.setTexture2D(t||s,n)}function vp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||dl,n)}function _p(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ul,n)}function xp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||hl,n)}function yp(r){switch(r){case 5126:return ep;case 35664:return ip;case 35665:return np;case 35666:return sp;case 35674:return rp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return cp;case 35667:case 35671:return lp;case 35668:case 35672:return hp;case 35669:case 35673:return dp;case 5125:return up;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return xp}}function Mp(r,t){r.uniform1fv(this.addr,t)}function Sp(r,t){const e=Bn(t,this.size,2);r.uniform2fv(this.addr,e)}function bp(r,t){const e=Bn(t,this.size,3);r.uniform3fv(this.addr,e)}function Ep(r,t){const e=Bn(t,this.size,4);r.uniform4fv(this.addr,e)}function Tp(r,t){const e=Bn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function wp(r,t){const e=Bn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Ap(r,t){const e=Bn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Rp(r,t){r.uniform1iv(this.addr,t)}function Cp(r,t){r.uniform2iv(this.addr,t)}function Pp(r,t){r.uniform3iv(this.addr,t)}function Lp(r,t){r.uniform4iv(this.addr,t)}function Dp(r,t){r.uniform1uiv(this.addr,t)}function Ip(r,t){r.uniform2uiv(this.addr,t)}function Up(r,t){r.uniform3uiv(this.addr,t)}function Np(r,t){r.uniform4uiv(this.addr,t)}function Fp(r,t,e){const i=this.cache,n=t.length,s=rr(e,n);ge(i,s)||(r.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||ll,s[a])}function Op(r,t,e){const i=this.cache,n=t.length,s=rr(e,n);ge(i,s)||(r.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||dl,s[a])}function zp(r,t,e){const i=this.cache,n=t.length,s=rr(e,n);ge(i,s)||(r.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||ul,s[a])}function kp(r,t,e){const i=this.cache,n=t.length,s=rr(e,n);ge(i,s)||(r.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||hl,s[a])}function Bp(r){switch(r){case 5126:return Mp;case 35664:return Sp;case 35665:return bp;case 35666:return Ep;case 35674:return Tp;case 35675:return wp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Ip;case 36295:return Up;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}class Hp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yp(e.type)}}class Vp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bp(e.type)}}class Gp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function cc(r,t){r.seq.push(t),r.map[t.id]=t}function Wp(r,t,e){const i=r.name,n=i.length;for(Gr.lastIndex=0;;){const s=Gr.exec(i),a=Gr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){cc(e,l===void 0?new Hp(o,r,t):new Vp(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Gp(o),cc(e,d)),e=d}}}class qs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Wp(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function lc(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const Xp=37297;let qp=0;function $p(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const hc=new It;function Yp(r){Xt._getMatrix(hc,Xt.workingColorSpace,r);const t=`mat3( ${hc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(r)){case Ys:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dc(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+$p(r.getShaderSource(t),o)}else return s}function jp(r,t){const e=Yp(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kp(r,t){let e;switch(t){case Jl:e="Linear";break;case Ql:e="Reinhard";break;case th:e="Cineon";break;case Va:e="ACESFilmic";break;case ih:e="AgX";break;case nh:e="Neutral";break;case eh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bs=new D;function Zp(){Xt.getLuminanceCoefficients(Bs);const r=Bs.x.toFixed(4),t=Bs.y.toFixed(4),e=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zn).join(`
`)}function Qp(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tm(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Zn(r){return r!==""}function uc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(r){return r.replace(em,nm)}const im=new Map;function nm(r,t){let e=Ft[t];if(e===void 0){const i=im.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ua(e)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(r){return r.replace(sm,rm)}function rm(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function mc(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function am(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ic?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ll?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function om(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Dn:case In:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cm(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===In&&(t="ENVMAP_MODE_REFRACTION"),t}function lm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ha:t="ENVMAP_BLENDING_MULTIPLY";break;case Kl:t="ENVMAP_BLENDING_MIX";break;case Zl:t="ENVMAP_BLENDING_ADD";break}return t}function hm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function dm(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=am(e),l=om(e),h=cm(e),d=lm(e),f=hm(e),u=Jp(e),g=Qp(s),v=n.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zn).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zn).join(`
`),p.length>0&&(p+=`
`)):(m=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zn).join(`
`),p=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Pi?Kp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,jp("linearToOutputTexel",e.outputColorSpace),Zp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zn).join(`
`)),a=Ua(a),a=uc(a,e),a=fc(a,e),o=Ua(o),o=uc(o,e),o=fc(o,e),a=pc(a),o=pc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+a,x=y+p+o,S=lc(n,n.VERTEX_SHADER,_),T=lc(n,n.FRAGMENT_SHADER,x);n.attachShader(v,S),n.attachShader(v,T),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(R){if(r.debug.checkShaderErrors){const I=n.getProgramInfoLog(v)||"",z=n.getShaderInfoLog(S)||"",B=n.getShaderInfoLog(T)||"",X=I.trim(),G=z.trim(),et=B.trim();let V=!0,rt=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,S,T);else{const lt=dc(n,S,"vertex"),St=dc(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+lt+`
`+St)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||et==="")&&(rt=!1);rt&&(R.diagnostics={runnable:V,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:et,prefix:p}})}n.deleteShader(S),n.deleteShader(T),P=new qs(n,v),E=tm(n,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,Xp)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}let um=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pm(t),e.set(t,i)),i}}class pm{constructor(t){this.id=um++,this.code=t,this.usedTimes=0}}function mm(r,t,e,i,n,s,a){const o=new $c,c=new fm,l=new Set,h=[],d=n.logarithmicDepthBuffer,f=n.vertexTextures;let u=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,R,I,z){const B=I.fog,X=z.geometry,G=E.isMeshStandardMaterial?I.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),V=et&&et.mapping===nr?et.image.height:null,rt=g[E.type];E.precision!==null&&(u=n.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,St=lt!==void 0?lt.length:0;let zt=0;X.morphAttributes.position!==void 0&&(zt=1),X.morphAttributes.normal!==void 0&&(zt=2),X.morphAttributes.color!==void 0&&(zt=3);let Qt,ne,qt,$;if(rt){const $t=si[rt];Qt=$t.vertexShader,ne=$t.fragmentShader}else Qt=E.vertexShader,ne=E.fragmentShader,c.update(E),qt=c.getVertexShaderID(E),$=c.getFragmentShaderID(E);const K=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,Mt=z.isBatchedMesh===!0,Gt=!!E.map,Me=!!E.matcap,L=!!et,se=!!E.aoMap,Dt=!!E.lightMap,At=!!E.bumpMap,mt=!!E.normalMap,re=!!E.displacementMap,gt=!!E.emissiveMap,Nt=!!E.metalnessMap,_e=!!E.roughnessMap,de=E.anisotropy>0,C=E.clearcoat>0,b=E.dispersion>0,O=E.iridescence>0,q=E.sheen>0,j=E.transmission>0,W=de&&!!E.anisotropyMap,yt=C&&!!E.clearcoatMap,it=C&&!!E.clearcoatNormalMap,vt=C&&!!E.clearcoatRoughnessMap,_t=O&&!!E.iridescenceMap,Q=O&&!!E.iridescenceThicknessMap,ct=q&&!!E.sheenColorMap,wt=q&&!!E.sheenRoughnessMap,xt=!!E.specularMap,at=!!E.specularColorMap,Ut=!!E.specularIntensityMap,U=j&&!!E.transmissionMap,tt=j&&!!E.thicknessMap,nt=!!E.gradientMap,dt=!!E.alphaMap,Z=E.alphaTest>0,Y=!!E.alphaHash,pt=!!E.extensions;let Lt=Pi;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Lt=r.toneMapping);const te={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:Qt,fragmentShader:ne,defines:E.defines,customVertexShaderID:qt,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Un,alphaToCoverage:!!E.alphaToCoverage,map:Gt,matcap:Me,envMap:L,envMapMode:L&&et.mapping,envMapCubeUVHeight:V,aoMap:se,lightMap:Dt,bumpMap:At,normalMap:mt,displacementMap:f&&re,emissiveMap:gt,normalMapObjectSpace:mt&&E.normalMapType===oh,normalMapTangentSpace:mt&&E.normalMapType===Vc,metalnessMap:Nt,roughnessMap:_e,anisotropy:de,anisotropyMap:W,clearcoat:C,clearcoatMap:yt,clearcoatNormalMap:it,clearcoatRoughnessMap:vt,dispersion:b,iridescence:O,iridescenceMap:_t,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:ct,sheenRoughnessMap:wt,specularMap:xt,specularColorMap:at,specularIntensityMap:Ut,transmission:j,transmissionMap:U,thicknessMap:tt,gradientMap:nt,opaque:E.transparent===!1&&E.blending===En&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:Z,alphaHash:Y,combine:E.combine,mapUv:Gt&&v(E.map.channel),aoMapUv:se&&v(E.aoMap.channel),lightMapUv:Dt&&v(E.lightMap.channel),bumpMapUv:At&&v(E.bumpMap.channel),normalMapUv:mt&&v(E.normalMap.channel),displacementMapUv:re&&v(E.displacementMap.channel),emissiveMapUv:gt&&v(E.emissiveMap.channel),metalnessMapUv:Nt&&v(E.metalnessMap.channel),roughnessMapUv:_e&&v(E.roughnessMap.channel),anisotropyMapUv:W&&v(E.anisotropyMap.channel),clearcoatMapUv:yt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(E.sheenRoughnessMap.channel),specularMapUv:xt&&v(E.specularMap.channel),specularColorMapUv:at&&v(E.specularColorMap.channel),specularIntensityMapUv:Ut&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:tt&&v(E.thicknessMap.channel),alphaMapUv:dt&&v(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(mt||de),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Gt||dt),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Gt&&E.map.isVideoTexture===!0&&Xt.getTransfer(E.map.colorSpace)===Kt,decodeVideoTextureEmissive:gt&&E.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(E.emissiveMap.colorSpace)===Kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ee,flipSided:E.side===Ue,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&E.extensions.multiDraw===!0||Mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)M.push(R),M.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(y(M,E),_(M,E),M.push(r.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const M=g[E.type];let R;if(M){const I=si[M];R=Fh.clone(I.uniforms)}else R=E.uniforms;return R}function S(E,M){let R;for(let I=0,z=h.length;I<z;I++){const B=h[I];if(B.cacheKey===M){R=B,++R.usedTimes;break}}return R===void 0&&(R=new dm(r,M,E,s),h.push(R)),R}function T(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function gm(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function vm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function gc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function vc(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(d,f,u,g,v,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,f,u,g,v,m){const p=a(d,f,u,g,v,m);u.transmission>0?i.push(p):u.transparent===!0?n.push(p):e.push(p)}function c(d,f,u,g,v,m){const p=a(d,f,u,g,v,m);u.transmission>0?i.unshift(p):u.transparent===!0?n.unshift(p):e.unshift(p)}function l(d,f){e.length>1&&e.sort(d||vm),i.length>1&&i.sort(f||gc),n.length>1&&n.sort(f||gc)}function h(){for(let d=t,f=r.length;d<f;d++){const u=r[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:c,finish:h,sort:l}}function _m(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new vc,r.set(i,[a])):n>=s.length?(a=new vc,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function xm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ct};break;case"SpotLight":e={position:new D,direction:new D,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function ym(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Mm=0;function Sm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function bm(r){const t=new xm,e=ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const n=new D,s=new Bt,a=new Bt;function o(l){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,y=0,_=0,x=0,S=0,T=0,A=0;l.sort(Sm);for(let E=0,M=l.length;E<M;E++){const R=l[E],I=R.color,z=R.intensity,B=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=I.r*z,d+=I.g*z,f+=I.b*z;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],z);A++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const et=R.shadow,V=e.get(R);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.directionalShadow[u]=V,i.directionalShadowMap[u]=X,i.directionalShadowMatrix[u]=R.shadow.matrix,y++}i.directional[u]=G,u++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(I).multiplyScalar(z),G.distance=B,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[v]=G;const et=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,et.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[v]=et.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=X,x++}v++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(I).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const et=R.shadow,V=e.get(R);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,V.shadowCameraNear=et.camera.near,V.shadowCameraFar=et.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=R.shadow.matrix,_++}i.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(z),G.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==u||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==S||P.numLightProbes!==A)&&(i.directional.length=u,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=u,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=S,P.numLightProbes=A,i.version=Mm++)}function c(l,h){let d=0,f=0,u=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const _=l[p];if(_.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),d++}else if(_.isSpotLight){const x=i.spot[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),u++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function _c(r){const t=new bm(r),e=[],i=[];function n(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Em(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new _c(r),t.set(n,[o])):s>=a.length?(o=new _c(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wm=`uniform sampler2D shadow_pass;
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
}`;function Am(r,t,e){let i=new Za;const n=new Ht,s=new Ht,a=new he,o=new Kh({depthPacking:ah}),c=new Zh,l={},h=e.maxTextureSize,d={[xi]:Ue,[Ue]:xi,[Ee]:Ee},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Tm,fragmentShader:wm}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=r.getRenderTarget(),M=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ci),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==vi&&this.type===vi,B=p===vi&&this.type!==vi;for(let X=0,G=T.length;X<G;X++){const et=T[X],V=et.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const rt=V.getFrameExtents();if(n.multiply(rt),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/rt.x),n.x=s.x*rt.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/rt.y),n.y=s.y*rt.y,V.mapSize.y=s.y)),V.map===null||z===!0||B===!0){const St=this.type!==vi?{minFilter:Be,magFilter:Be}:{};V.map!==null&&V.map.dispose(),V.map=new Li(n.x,n.y,St),V.map.texture.name=et.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const lt=V.getViewportCount();for(let St=0;St<lt;St++){const zt=V.getViewport(St);a.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),I.viewport(a),V.updateMatrices(et,St),i=V.getFrustum(),x(A,P,V.camera,et,this.type)}V.isPointLightShadow!==!0&&this.type===vi&&y(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,M,R)};function y(T,A){const P=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Li(n.x,n.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,P,f,v,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,P,u,v,null)}function _(T,A,P,E){let M=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=M.uuid,z=A.uuid;let B=l[I];B===void 0&&(B={},l[I]=B);let X=B[z];X===void 0&&(X=M.clone(),B[z]=X,A.addEventListener("dispose",S)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,E===vi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=r.properties.get(M);I.light=P}return M}function x(T,A,P,E,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===vi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const z=t.update(T),B=T.material;if(Array.isArray(B)){const X=z.groups;for(let G=0,et=X.length;G<et;G++){const V=X[G],rt=B[V.materialIndex];if(rt&&rt.visible){const lt=_(T,rt,E,M);T.onBeforeShadow(r,T,A,P,z,lt,V),r.renderBufferDirect(P,null,z,lt,T,V),T.onAfterShadow(r,T,A,P,z,lt,V)}}}else if(B.visible){const X=_(T,B,E,M);T.onBeforeShadow(r,T,A,P,z,X,null),r.renderBufferDirect(P,null,z,X,T,null),T.onAfterShadow(r,T,A,P,z,X,null)}}const I=T.children;for(let z=0,B=I.length;z<B;z++)x(I[z],A,P,E,M)}function S(T){T.target.removeEventListener("dispose",S);for(const P in l){const E=l[P],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Rm={[jr]:Kr,[Zr]:ta,[Jr]:ea,[Ln]:Qr,[Kr]:jr,[ta]:Zr,[ea]:Jr,[Qr]:Ln};function Cm(r,t){function e(){let U=!1;const tt=new he;let nt=null;const dt=new he(0,0,0,0);return{setMask:function(Z){nt!==Z&&!U&&(r.colorMask(Z,Z,Z,Z),nt=Z)},setLocked:function(Z){U=Z},setClear:function(Z,Y,pt,Lt,te){te===!0&&(Z*=Lt,Y*=Lt,pt*=Lt),tt.set(Z,Y,pt,Lt),dt.equals(tt)===!1&&(r.clearColor(Z,Y,pt,Lt),dt.copy(tt))},reset:function(){U=!1,nt=null,dt.set(-1,0,0,0)}}}function i(){let U=!1,tt=!1,nt=null,dt=null,Z=null;return{setReversed:function(Y){if(tt!==Y){const pt=t.get("EXT_clip_control");Y?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),tt=Y;const Lt=Z;Z=null,this.setClear(Lt)}},getReversed:function(){return tt},setTest:function(Y){Y?K(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(Y){nt!==Y&&!U&&(r.depthMask(Y),nt=Y)},setFunc:function(Y){if(tt&&(Y=Rm[Y]),dt!==Y){switch(Y){case jr:r.depthFunc(r.NEVER);break;case Kr:r.depthFunc(r.ALWAYS);break;case Zr:r.depthFunc(r.LESS);break;case Ln:r.depthFunc(r.LEQUAL);break;case Jr:r.depthFunc(r.EQUAL);break;case Qr:r.depthFunc(r.GEQUAL);break;case ta:r.depthFunc(r.GREATER);break;case ea:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=Y}},setLocked:function(Y){U=Y},setClear:function(Y){Z!==Y&&(tt&&(Y=1-Y),r.clearDepth(Y),Z=Y)},reset:function(){U=!1,nt=null,dt=null,Z=null,tt=!1}}}function n(){let U=!1,tt=null,nt=null,dt=null,Z=null,Y=null,pt=null,Lt=null,te=null;return{setTest:function($t){U||($t?K(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function($t){tt!==$t&&!U&&(r.stencilMask($t),tt=$t)},setFunc:function($t,hi,ii){(nt!==$t||dt!==hi||Z!==ii)&&(r.stencilFunc($t,hi,ii),nt=$t,dt=hi,Z=ii)},setOp:function($t,hi,ii){(Y!==$t||pt!==hi||Lt!==ii)&&(r.stencilOp($t,hi,ii),Y=$t,pt=hi,Lt=ii)},setLocked:function($t){U=$t},setClear:function($t){te!==$t&&(r.clearStencil($t),te=$t)},reset:function(){U=!1,tt=null,nt=null,dt=null,Z=null,Y=null,pt=null,Lt=null,te=null}}}const s=new e,a=new i,o=new n,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,u=[],g=null,v=!1,m=null,p=null,y=null,_=null,x=null,S=null,T=null,A=new Ct(0,0,0),P=0,E=!1,M=null,R=null,I=null,z=null,B=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,et=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=et>=2);let rt=null,lt={};const St=r.getParameter(r.SCISSOR_BOX),zt=r.getParameter(r.VIEWPORT),Qt=new he().fromArray(St),ne=new he().fromArray(zt);function qt(U,tt,nt,dt){const Z=new Uint8Array(4),Y=r.createTexture();r.bindTexture(U,Y),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pt=0;pt<nt;pt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,Z):r.texImage2D(tt+pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Z);return Y}const $={};$[r.TEXTURE_2D]=qt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(r.DEPTH_TEST),a.setFunc(Ln),At(!1),mt(go),K(r.CULL_FACE),se(Ci);function K(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function ut(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Pt(U,tt){return d[U]!==tt?(r.bindFramebuffer(U,tt),d[U]=tt,U===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=tt),U===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function Mt(U,tt){let nt=u,dt=!1;if(U){nt=f.get(tt),nt===void 0&&(nt=[],f.set(tt,nt));const Z=U.textures;if(nt.length!==Z.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,pt=Z.length;Y<pt;Y++)nt[Y]=r.COLOR_ATTACHMENT0+Y;nt.length=Z.length,dt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,dt=!0);dt&&r.drawBuffers(nt)}function Gt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Me={[Xi]:r.FUNC_ADD,[Il]:r.FUNC_SUBTRACT,[Ul]:r.FUNC_REVERSE_SUBTRACT};Me[Nl]=r.MIN,Me[Fl]=r.MAX;const L={[Ol]:r.ZERO,[zl]:r.ONE,[kl]:r.SRC_COLOR,[$r]:r.SRC_ALPHA,[Xl]:r.SRC_ALPHA_SATURATE,[Gl]:r.DST_COLOR,[Hl]:r.DST_ALPHA,[Bl]:r.ONE_MINUS_SRC_COLOR,[Yr]:r.ONE_MINUS_SRC_ALPHA,[Wl]:r.ONE_MINUS_DST_COLOR,[Vl]:r.ONE_MINUS_DST_ALPHA,[ql]:r.CONSTANT_COLOR,[$l]:r.ONE_MINUS_CONSTANT_COLOR,[Yl]:r.CONSTANT_ALPHA,[jl]:r.ONE_MINUS_CONSTANT_ALPHA};function se(U,tt,nt,dt,Z,Y,pt,Lt,te,$t){if(U===Ci){v===!0&&(ut(r.BLEND),v=!1);return}if(v===!1&&(K(r.BLEND),v=!0),U!==Dl){if(U!==m||$t!==E){if((p!==Xi||x!==Xi)&&(r.blendEquation(r.FUNC_ADD),p=Xi,x=Xi),$t)switch(U){case En:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qr:r.blendFunc(r.ONE,r.ONE);break;case vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _o:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case En:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _o:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,_=null,S=null,T=null,A.set(0,0,0),P=0,m=U,E=$t}return}Z=Z||tt,Y=Y||nt,pt=pt||dt,(tt!==p||Z!==x)&&(r.blendEquationSeparate(Me[tt],Me[Z]),p=tt,x=Z),(nt!==y||dt!==_||Y!==S||pt!==T)&&(r.blendFuncSeparate(L[nt],L[dt],L[Y],L[pt]),y=nt,_=dt,S=Y,T=pt),(Lt.equals(A)===!1||te!==P)&&(r.blendColor(Lt.r,Lt.g,Lt.b,te),A.copy(Lt),P=te),m=U,E=!1}function Dt(U,tt){U.side===Ee?ut(r.CULL_FACE):K(r.CULL_FACE);let nt=U.side===Ue;tt&&(nt=!nt),At(nt),U.blending===En&&U.transparent===!1?se(Ci):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const dt=U.stencilWrite;o.setTest(dt),dt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(U){M!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),M=U)}function mt(U){U!==Cl?(K(r.CULL_FACE),U!==R&&(U===go?r.cullFace(r.BACK):U===Pl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),R=U}function re(U){U!==I&&(G&&r.lineWidth(U),I=U)}function gt(U,tt,nt){U?(K(r.POLYGON_OFFSET_FILL),(z!==tt||B!==nt)&&(r.polygonOffset(tt,nt),z=tt,B=nt)):ut(r.POLYGON_OFFSET_FILL)}function Nt(U){U?K(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function _e(U){U===void 0&&(U=r.TEXTURE0+X-1),rt!==U&&(r.activeTexture(U),rt=U)}function de(U,tt,nt){nt===void 0&&(rt===null?nt=r.TEXTURE0+X-1:nt=rt);let dt=lt[nt];dt===void 0&&(dt={type:void 0,texture:void 0},lt[nt]=dt),(dt.type!==U||dt.texture!==tt)&&(rt!==nt&&(r.activeTexture(nt),rt=nt),r.bindTexture(U,tt||$[U]),dt.type=U,dt.texture=tt)}function C(){const U=lt[rt];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(U){Qt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Qt.copy(U))}function wt(U){ne.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ne.copy(U))}function xt(U,tt){let nt=l.get(tt);nt===void 0&&(nt=new WeakMap,l.set(tt,nt));let dt=nt.get(U);dt===void 0&&(dt=r.getUniformBlockIndex(tt,U.name),nt.set(U,dt))}function at(U,tt){const dt=l.get(tt).get(U);c.get(tt)!==dt&&(r.uniformBlockBinding(tt,dt,U.__bindingPointIndex),c.set(tt,dt))}function Ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},rt=null,lt={},d={},f=new WeakMap,u=[],g=null,v=!1,m=null,p=null,y=null,_=null,x=null,S=null,T=null,A=new Ct(0,0,0),P=0,E=!1,M=null,R=null,I=null,z=null,B=null,Qt.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:ut,bindFramebuffer:Pt,drawBuffers:Mt,useProgram:Gt,setBlending:se,setMaterial:Dt,setFlipSided:At,setCullFace:mt,setLineWidth:re,setPolygonOffset:gt,setScissorTest:Nt,activeTexture:_e,bindTexture:de,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:O,texImage2D:_t,texImage3D:Q,updateUBOMapping:xt,uniformBlockBinding:at,texStorage2D:it,texStorage3D:vt,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:yt,scissor:ct,viewport:wt,reset:Ut}}function Pm(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return u?new OffscreenCanvas(C,b):Zs("canvas")}function v(C,b,O){let q=1;const j=de(C);if((j.width>O||j.height>O)&&(q=O/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const W=Math.floor(q*j.width),yt=Math.floor(q*j.height);d===void 0&&(d=g(W,yt));const it=b?g(W,yt):d;return it.width=W,it.height=yt,it.getContext("2d").drawImage(C,0,0,W,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+yt+")."),it}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(C,b,O,q,j=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W=b;if(b===r.RED&&(O===r.FLOAT&&(W=r.R32F),O===r.HALF_FLOAT&&(W=r.R16F),O===r.UNSIGNED_BYTE&&(W=r.R8)),b===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.R8UI),O===r.UNSIGNED_SHORT&&(W=r.R16UI),O===r.UNSIGNED_INT&&(W=r.R32UI),O===r.BYTE&&(W=r.R8I),O===r.SHORT&&(W=r.R16I),O===r.INT&&(W=r.R32I)),b===r.RG&&(O===r.FLOAT&&(W=r.RG32F),O===r.HALF_FLOAT&&(W=r.RG16F),O===r.UNSIGNED_BYTE&&(W=r.RG8)),b===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RG8UI),O===r.UNSIGNED_SHORT&&(W=r.RG16UI),O===r.UNSIGNED_INT&&(W=r.RG32UI),O===r.BYTE&&(W=r.RG8I),O===r.SHORT&&(W=r.RG16I),O===r.INT&&(W=r.RG32I)),b===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RGB8UI),O===r.UNSIGNED_SHORT&&(W=r.RGB16UI),O===r.UNSIGNED_INT&&(W=r.RGB32UI),O===r.BYTE&&(W=r.RGB8I),O===r.SHORT&&(W=r.RGB16I),O===r.INT&&(W=r.RGB32I)),b===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),O===r.UNSIGNED_INT&&(W=r.RGBA32UI),O===r.BYTE&&(W=r.RGBA8I),O===r.SHORT&&(W=r.RGBA16I),O===r.INT&&(W=r.RGBA32I)),b===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),b===r.RGBA){const yt=j?Ys:Xt.getTransfer(q);O===r.FLOAT&&(W=r.RGBA32F),O===r.HALF_FLOAT&&(W=r.RGBA16F),O===r.UNSIGNED_BYTE&&(W=yt===Kt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(C,b){let O;return C?b===null||b===Zi||b===es?O=r.DEPTH24_STENCIL8:b===ri?O=r.DEPTH32F_STENCIL8:b===ts&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===es?O=r.DEPTH_COMPONENT24:b===ri?O=r.DEPTH_COMPONENT32F:b===ts&&(O=r.DEPTH_COMPONENT16),O}function S(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==Qe?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&h.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),M(b)}function P(C){const b=i.get(C);if(b.__webglInit===void 0)return;const O=C.source,q=f.get(O);if(q){const j=q[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(C),Object.keys(q).length===0&&f.delete(O)}i.remove(C)}function E(C){const b=i.get(C);r.deleteTexture(b.__webglTexture);const O=C.source,q=f.get(O);delete q[b.__cacheKey],a.memory.textures--}function M(C){const b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let j=0;j<b.__webglFramebuffer[q].length;j++)r.deleteFramebuffer(b.__webglFramebuffer[q][j]);else r.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)r.deleteFramebuffer(b.__webglFramebuffer[q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=C.textures;for(let q=0,j=O.length;q<j;q++){const W=i.get(O[q]);W.__webglTexture&&(r.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(O[q])}i.remove(C)}let R=0;function I(){R=0}function z(){const C=R;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),R+=1,C}function B(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function X(C,b){const O=i.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,C,b);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+b)}function G(C,b){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){$(O,C,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+b)}function et(C,b){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){$(O,C,b);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+b)}function V(C,b){const O=i.get(C);if(C.version>0&&O.__version!==C.version){K(O,C,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+b)}const rt={[sa]:r.REPEAT,[ji]:r.CLAMP_TO_EDGE,[ra]:r.MIRRORED_REPEAT},lt={[Be]:r.NEAREST,[sh]:r.NEAREST_MIPMAP_NEAREST,[gs]:r.NEAREST_MIPMAP_LINEAR,[Qe]:r.LINEAR,[cr]:r.LINEAR_MIPMAP_NEAREST,[Ki]:r.LINEAR_MIPMAP_LINEAR},St={[ch]:r.NEVER,[ph]:r.ALWAYS,[lh]:r.LESS,[Gc]:r.LEQUAL,[hh]:r.EQUAL,[fh]:r.GEQUAL,[dh]:r.GREATER,[uh]:r.NOTEQUAL};function zt(C,b){if(b.type===ri&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Qe||b.magFilter===cr||b.magFilter===gs||b.magFilter===Ki||b.minFilter===Qe||b.minFilter===cr||b.minFilter===gs||b.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,rt[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,rt[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,rt[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,lt[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,lt[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,St[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Be||b.minFilter!==gs&&b.minFilter!==Ki||b.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(C,b){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const q=b.source;let j=f.get(q);j===void 0&&(j={},f.set(q,j));const W=B(b);if(W!==C.__cacheKey){j[W]===void 0&&(j[W]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[W].usedTimes++;const yt=j[C.__cacheKey];yt!==void 0&&(j[C.__cacheKey].usedTimes--,yt.usedTimes===0&&E(b)),C.__cacheKey=W,C.__webglTexture=j[W].texture}return O}function ne(C,b,O){return Math.floor(Math.floor(C/O)/b)}function qt(C,b,O,q){const W=C.updateRanges;if(W.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,O,q,b.data);else{W.sort((Q,ct)=>Q.start-ct.start);let yt=0;for(let Q=1;Q<W.length;Q++){const ct=W[yt],wt=W[Q],xt=ct.start+ct.count,at=ne(wt.start,b.width,4),Ut=ne(ct.start,b.width,4);wt.start<=xt+1&&at===Ut&&ne(wt.start+wt.count-1,b.width,4)===at?ct.count=Math.max(ct.count,wt.start+wt.count-ct.start):(++yt,W[yt]=wt)}W.length=yt+1;const it=r.getParameter(r.UNPACK_ROW_LENGTH),vt=r.getParameter(r.UNPACK_SKIP_PIXELS),_t=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Q=0,ct=W.length;Q<ct;Q++){const wt=W[Q],xt=Math.floor(wt.start/4),at=Math.ceil(wt.count/4),Ut=xt%b.width,U=Math.floor(xt/b.width),tt=at,nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,Ut,U,tt,nt,O,q,b.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,it),r.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,_t)}}function $(C,b,O){let q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=r.TEXTURE_3D);const j=Qt(C,b),W=b.source;e.bindTexture(q,C.__webglTexture,r.TEXTURE0+O);const yt=i.get(W);if(W.version!==yt.__version||j===!0){e.activeTexture(r.TEXTURE0+O);const it=Xt.getPrimaries(Xt.workingColorSpace),vt=b.colorSpace===Ai?null:Xt.getPrimaries(b.colorSpace),_t=b.colorSpace===Ai||it===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Q=v(b.image,!1,n.maxTextureSize);Q=_e(b,Q);const ct=s.convert(b.format,b.colorSpace),wt=s.convert(b.type);let xt=_(b.internalFormat,ct,wt,b.colorSpace,b.isVideoTexture);zt(q,b);let at;const Ut=b.mipmaps,U=b.isVideoTexture!==!0,tt=yt.__version===void 0||j===!0,nt=W.dataReady,dt=S(b,Q);if(b.isDepthTexture)xt=x(b.format===ns,b.type),tt&&(U?e.texStorage2D(r.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,xt,Q.width,Q.height,0,ct,wt,null));else if(b.isDataTexture)if(Ut.length>0){U&&tt&&e.texStorage2D(r.TEXTURE_2D,dt,xt,Ut[0].width,Ut[0].height);for(let Z=0,Y=Ut.length;Z<Y;Z++)at=Ut[Z],U?nt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,at.width,at.height,ct,wt,at.data):e.texImage2D(r.TEXTURE_2D,Z,xt,at.width,at.height,0,ct,wt,at.data);b.generateMipmaps=!1}else U?(tt&&e.texStorage2D(r.TEXTURE_2D,dt,xt,Q.width,Q.height),nt&&qt(b,Q,ct,wt)):e.texImage2D(r.TEXTURE_2D,0,xt,Q.width,Q.height,0,ct,wt,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,xt,Ut[0].width,Ut[0].height,Q.depth);for(let Z=0,Y=Ut.length;Z<Y;Z++)if(at=Ut[Z],b.format!==ti)if(ct!==null)if(U){if(nt)if(b.layerUpdates.size>0){const pt=Yo(at.width,at.height,b.format,b.type);for(const Lt of b.layerUpdates){const te=at.data.subarray(Lt*pt/at.data.BYTES_PER_ELEMENT,(Lt+1)*pt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Lt,at.width,at.height,1,ct,te)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,Q.depth,ct,at.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,xt,at.width,at.height,Q.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?nt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,Q.depth,ct,wt,at.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,xt,at.width,at.height,Q.depth,0,ct,wt,at.data)}else{U&&tt&&e.texStorage2D(r.TEXTURE_2D,dt,xt,Ut[0].width,Ut[0].height);for(let Z=0,Y=Ut.length;Z<Y;Z++)at=Ut[Z],b.format!==ti?ct!==null?U?nt&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,at.width,at.height,ct,at.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,xt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?nt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,at.width,at.height,ct,wt,at.data):e.texImage2D(r.TEXTURE_2D,Z,xt,at.width,at.height,0,ct,wt,at.data)}else if(b.isDataArrayTexture)if(U){if(tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,xt,Q.width,Q.height,Q.depth),nt)if(b.layerUpdates.size>0){const Z=Yo(Q.width,Q.height,b.format,b.type);for(const Y of b.layerUpdates){const pt=Q.data.subarray(Y*Z/Q.data.BYTES_PER_ELEMENT,(Y+1)*Z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,ct,wt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ct,wt,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,ct,wt,Q.data);else if(b.isData3DTexture)U?(tt&&e.texStorage3D(r.TEXTURE_3D,dt,xt,Q.width,Q.height,Q.depth),nt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ct,wt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,ct,wt,Q.data);else if(b.isFramebufferTexture){if(tt)if(U)e.texStorage2D(r.TEXTURE_2D,dt,xt,Q.width,Q.height);else{let Z=Q.width,Y=Q.height;for(let pt=0;pt<dt;pt++)e.texImage2D(r.TEXTURE_2D,pt,xt,Z,Y,0,ct,wt,null),Z>>=1,Y>>=1}}else if(Ut.length>0){if(U&&tt){const Z=de(Ut[0]);e.texStorage2D(r.TEXTURE_2D,dt,xt,Z.width,Z.height)}for(let Z=0,Y=Ut.length;Z<Y;Z++)at=Ut[Z],U?nt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,ct,wt,at):e.texImage2D(r.TEXTURE_2D,Z,xt,ct,wt,at);b.generateMipmaps=!1}else if(U){if(tt){const Z=de(Q);e.texStorage2D(r.TEXTURE_2D,dt,xt,Z.width,Z.height)}nt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,wt,Q)}else e.texImage2D(r.TEXTURE_2D,0,xt,ct,wt,Q);m(b)&&p(q),yt.__version=W.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function K(C,b,O){if(b.image.length!==6)return;const q=Qt(C,b),j=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+O);const W=i.get(j);if(j.version!==W.__version||q===!0){e.activeTexture(r.TEXTURE0+O);const yt=Xt.getPrimaries(Xt.workingColorSpace),it=b.colorSpace===Ai?null:Xt.getPrimaries(b.colorSpace),vt=b.colorSpace===Ai||yt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const _t=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,ct=[];for(let Y=0;Y<6;Y++)!_t&&!Q?ct[Y]=v(b.image[Y],!0,n.maxCubemapSize):ct[Y]=Q?b.image[Y].image:b.image[Y],ct[Y]=_e(b,ct[Y]);const wt=ct[0],xt=s.convert(b.format,b.colorSpace),at=s.convert(b.type),Ut=_(b.internalFormat,xt,at,b.colorSpace),U=b.isVideoTexture!==!0,tt=W.__version===void 0||q===!0,nt=j.dataReady;let dt=S(b,wt);zt(r.TEXTURE_CUBE_MAP,b);let Z;if(_t){U&&tt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Ut,wt.width,wt.height);for(let Y=0;Y<6;Y++){Z=ct[Y].mipmaps;for(let pt=0;pt<Z.length;pt++){const Lt=Z[pt];b.format!==ti?xt!==null?U?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,0,0,Lt.width,Lt.height,xt,Lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,Ut,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,0,0,Lt.width,Lt.height,xt,at,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,Ut,Lt.width,Lt.height,0,xt,at,Lt.data)}}}else{if(Z=b.mipmaps,U&&tt){Z.length>0&&dt++;const Y=de(ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Ut,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ct[Y].width,ct[Y].height,xt,at,ct[Y].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,ct[Y].width,ct[Y].height,0,xt,at,ct[Y].data);for(let pt=0;pt<Z.length;pt++){const te=Z[pt].image[Y].image;U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,0,0,te.width,te.height,xt,at,te.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,Ut,te.width,te.height,0,xt,at,te.data)}}else{U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xt,at,ct[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,xt,at,ct[Y]);for(let pt=0;pt<Z.length;pt++){const Lt=Z[pt];U?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,0,0,xt,at,Lt.image[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,Ut,xt,at,Lt.image[Y])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),W.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ut(C,b,O,q,j,W){const yt=s.convert(O.format,O.colorSpace),it=s.convert(O.type),vt=_(O.internalFormat,yt,it,O.colorSpace),_t=i.get(b),Q=i.get(O);if(Q.__renderTarget=b,!_t.__hasExternalTextures){const ct=Math.max(1,b.width>>W),wt=Math.max(1,b.height>>W);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,W,vt,ct,wt,b.depth,0,yt,it,null):e.texImage2D(j,W,vt,ct,wt,0,yt,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),gt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,j,Q.__webglTexture,0,re(b)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,j,Q.__webglTexture,W),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(C,b,O){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const q=b.depthTexture,j=q&&q.isDepthTexture?q.type:null,W=x(b.stencilBuffer,j),yt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=re(b);gt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,W,b.width,b.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,W,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,W,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,C)}else{const q=b.textures;for(let j=0;j<q.length;j++){const W=q[j],yt=s.convert(W.format,W.colorSpace),it=s.convert(W.type),vt=_(W.internalFormat,yt,it,W.colorSpace),_t=re(b);O&&gt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,vt,b.width,b.height):gt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t,vt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,vt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const j=q.__webglTexture,W=re(b);if(b.depthTexture.format===is)gt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(b.depthTexture.format===ns)gt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Gt(C){const b=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=C.texture.mipmaps;q&&q.length>0?Mt(b.__webglFramebuffer[0],C):Mt(b.__webglFramebuffer,C)}else if(O){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=r.createRenderbuffer(),Pt(b.__webglDepthbuffer[q],C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=b.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,W)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Pt(b.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,W),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,W)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(C,b,O){const q=i.get(C);b!==void 0&&ut(q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Gt(C)}function L(C){const b=C.texture,O=i.get(C),q=i.get(b);C.addEventListener("dispose",A);const j=C.textures,W=C.isWebGLCubeRenderTarget===!0,yt=j.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=b.version,a.memory.textures++),W){O.__webglFramebuffer=[];for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[it]=[];for(let vt=0;vt<b.mipmaps.length;vt++)O.__webglFramebuffer[it][vt]=r.createFramebuffer()}else O.__webglFramebuffer[it]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let it=0;it<b.mipmaps.length;it++)O.__webglFramebuffer[it]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(yt)for(let it=0,vt=j.length;it<vt;it++){const _t=i.get(j[it]);_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&gt(C)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let it=0;it<j.length;it++){const vt=j[it];O.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[it]);const _t=s.convert(vt.format,vt.colorSpace),Q=s.convert(vt.type),ct=_(vt.internalFormat,_t,Q,vt.colorSpace,C.isXRRenderTarget===!0),wt=re(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,ct,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,O.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(W){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),zt(r.TEXTURE_CUBE_MAP,b);for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)ut(O.__webglFramebuffer[it][vt],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt);else ut(O.__webglFramebuffer[it],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let it=0,vt=j.length;it<vt;it++){const _t=j[it],Q=i.get(_t);let ct=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),zt(ct,_t),ut(O.__webglFramebuffer,C,_t,r.COLOR_ATTACHMENT0+it,ct,0),m(_t)&&p(ct)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),zt(it,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)ut(O.__webglFramebuffer[vt],C,b,r.COLOR_ATTACHMENT0,it,vt);else ut(O.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,it,0);m(b)&&p(it),e.unbindTexture()}C.depthBuffer&&Gt(C)}function se(C){const b=C.textures;for(let O=0,q=b.length;O<q;O++){const j=b[O];if(m(j)){const W=y(C),yt=i.get(j).__webglTexture;e.bindTexture(W,yt),p(W),e.unbindTexture()}}}const Dt=[],At=[];function mt(C){if(C.samples>0){if(gt(C)===!1){const b=C.textures,O=C.width,q=C.height;let j=r.COLOR_BUFFER_BIT;const W=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=i.get(C),it=b.length>1;if(it)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const vt=C.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[_t]);const Q=i.get(b[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,O,q,0,0,O,q,j,r.NEAREST),c===!0&&(Dt.length=0,At.length=0,Dt.push(r.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Dt.push(W),At.push(W),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,At)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,yt.__webglColorRenderbuffer[_t]);const Q=i.get(b[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function re(C){return Math.min(n.maxSamples,C.samples)}function gt(C){const b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function _e(C,b){const O=C.colorSpace,q=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Un&&O!==Ai&&(Xt.getTransfer(O)===Kt?(q!==ti||j!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=et,this.setTextureCube=V,this.rebindTextures=Me,this.setupRenderTarget=L,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=gt}function Lm(r,t){function e(i,n=Ai){let s;const a=Xt.getTransfer(n);if(i===li)return r.UNSIGNED_BYTE;if(i===Wa)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Xa)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Oc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===zc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nc)return r.BYTE;if(i===Fc)return r.SHORT;if(i===ts)return r.UNSIGNED_SHORT;if(i===Ga)return r.INT;if(i===Zi)return r.UNSIGNED_INT;if(i===ri)return r.FLOAT;if(i===hs)return r.HALF_FLOAT;if(i===kc)return r.ALPHA;if(i===Bc)return r.RGB;if(i===ti)return r.RGBA;if(i===is)return r.DEPTH_COMPONENT;if(i===ns)return r.DEPTH_STENCIL;if(i===qa)return r.RED;if(i===$a)return r.RED_INTEGER;if(i===Hc)return r.RG;if(i===Ya)return r.RG_INTEGER;if(i===ja)return r.RGBA_INTEGER;if(i===Vs||i===Gs||i===Ws||i===Xs)if(a===Kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===aa||i===oa||i===ca||i===la)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ca)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===la)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ha||i===da||i===ua)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ha||i===da)return a===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ua)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fa||i===pa||i===ma||i===ga||i===va||i===_a||i===xa||i===ya||i===Ma||i===Sa||i===ba||i===Ea||i===Ta||i===wa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fa)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pa)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ma)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ga)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===va)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_a)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xa)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ya)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ma)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sa)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ba)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ea)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ta)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wa)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Aa||i===Ra||i===Ca)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Aa)return a===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ra)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ca)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pa||i===La||i===Da||i===Ia)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===La)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ia)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
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

}`;class Um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new nl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Di({vertexShader:Dm,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nm extends On{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Um,p={},y=e.getContextAttributes();let _=null,x=null;const S=[],T=[],A=new Ht;let P=null;const E=new De;E.viewport=new he;const M=new De;M.viewport=new he;const R=[E,M],I=new ed;let z=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=S[$];return K===void 0&&(K=new Lr,S[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=S[$];return K===void 0&&(K=new Lr,S[$]=K),K.getGripSpace()},this.getHand=function($){let K=S[$];return K===void 0&&(K=new Lr,S[$]=K),K.getHandSpace()};function X($){const K=T.indexOf($.inputSource);if(K===-1)return;const ut=S[K];ut!==void 0&&(ut.update($.inputSource,$.frame,l||a),ut.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",et);for(let $=0;$<S.length;$++){const K=T[$];K!==null&&(T[$]=null,S[$].disconnect(K))}z=null,B=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(_),u=null,f=null,d=null,n=null,x=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(_=t.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",G),n.addEventListener("inputsourceschange",et),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Pt=null,Mt=null;y.depth&&(Mt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=y.stencil?ns:is,Pt=y.stencil?es:Zi);const Gt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Gt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Li(f.textureWidth,f.textureHeight,{format:ti,type:li,depthTexture:new il(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ut={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(n,e,ut),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Li(u.framebufferWidth,u.framebufferHeight,{format:ti,type:li,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),qt.setContext(n),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et($){for(let K=0;K<$.removed.length;K++){const ut=$.removed[K],Pt=T.indexOf(ut);Pt>=0&&(T[Pt]=null,S[Pt].disconnect(ut))}for(let K=0;K<$.added.length;K++){const ut=$.added[K];let Pt=T.indexOf(ut);if(Pt===-1){for(let Gt=0;Gt<S.length;Gt++)if(Gt>=T.length){T.push(ut),Pt=Gt;break}else if(T[Gt]===null){T[Gt]=ut,Pt=Gt;break}if(Pt===-1)break}const Mt=S[Pt];Mt&&Mt.connect(ut)}}const V=new D,rt=new D;function lt($,K,ut){V.setFromMatrixPosition(K.matrixWorld),rt.setFromMatrixPosition(ut.matrixWorld);const Pt=V.distanceTo(rt),Mt=K.projectionMatrix.elements,Gt=ut.projectionMatrix.elements,Me=Mt[14]/(Mt[10]-1),L=Mt[14]/(Mt[10]+1),se=(Mt[9]+1)/Mt[5],Dt=(Mt[9]-1)/Mt[5],At=(Mt[8]-1)/Mt[0],mt=(Gt[8]+1)/Gt[0],re=Me*At,gt=Me*mt,Nt=Pt/(-At+mt),_e=Nt*-At;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_e),$.translateZ(Nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Mt[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const de=Me+Nt,C=L+Nt,b=re-_e,O=gt+(Pt-_e),q=se*L/C*de,j=Dt*L/C*de;$.projectionMatrix.makePerspective(b,O,q,j,de,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function St($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let K=$.near,ut=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),I.near=M.near=E.near=K,I.far=M.far=E.far=ut,(z!==I.near||B!==I.far)&&(n.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,B=I.far),I.layers.mask=$.layers.mask|6,E.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Pt=$.parent,Mt=I.cameras;St(I,Pt);for(let Gt=0;Gt<Mt.length;Gt++)St(Mt[Gt],Pt);Mt.length===2?lt(I,E,M):I.projectionMatrix.copy(E.projectionMatrix),zt($,I,Pt)};function zt($,K,ut){ut===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ut.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ks*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function($){return p[$]};let Qt=null;function ne($,K){if(h=K.getViewerPose(l||a),g=K,h!==null){const ut=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let Pt=!1;ut.length!==I.cameras.length&&(I.cameras.length=0,Pt=!0);for(let L=0;L<ut.length;L++){const se=ut[L];let Dt=null;if(u!==null)Dt=u.getViewport(se);else{const mt=d.getViewSubImage(f,se);Dt=mt.viewport,L===0&&(t.setRenderTargetTextures(x,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(x))}let At=R[L];At===void 0&&(At=new De,At.layers.enable(L),At.viewport=new he,R[L]=At),At.matrix.fromArray(se.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(se.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),L===0&&(I.matrix.copy(At.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pt===!0&&I.cameras.push(At)}const Mt=n.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const L=d.getDepthInformation(ut[0]);L&&L.isValid&&L.texture&&m.init(L,n.renderState)}if(Mt&&Mt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let L=0;L<ut.length;L++){const se=ut[L].camera;if(se){let Dt=p[se];Dt||(Dt=new nl,p[se]=Dt);const At=d.getCameraImage(se);Dt.sourceTexture=At}}}}for(let ut=0;ut<S.length;ut++){const Pt=T[ut],Mt=S[ut];Pt!==null&&Mt!==void 0&&Mt.update(Pt,K,l||a)}Qt&&Qt($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const qt=new cl;qt.setAnimationLoop(ne),this.setAnimationLoop=function($){Qt=$},this.dispose=function(){}}}const Hi=new Xe,Fm=new Bt;function Om(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,Hi.copy(x),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(Hi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function zm(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function l(y,_){let x=n[y.id];x===void 0&&(g(y),x=h(y),n[y.id]=x,y.addEventListener("dispose",m));const S=_.program;i.updateUBOMapping(y,S);const T=t.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function h(y){const _=d();y.__bindingPointIndex=_;const x=r.createBuffer(),S=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,x),x}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=n[y.id],x=y.uniforms,S=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,A=x.length;T<A;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,M=P.length;E<M;E++){const R=P[E];if(u(R,T,E,S)===!0){const I=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let X=0;X<z.length;X++){const G=z[X],et=v(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,I+B,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,B),B+=et.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,_,x,S){const T=y.value,A=_+"_"+x;if(S[A]===void 0)return typeof T=="number"||typeof T=="boolean"?S[A]=T:S[A]=T.clone(),!0;{const P=S[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return S[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const _=y.uniforms;let x=0;const S=16;for(let A=0,P=_.length;A<P;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,R=E.length;M<R;M++){const I=E[M],z=Array.isArray(I.value)?I.value:[I.value];for(let B=0,X=z.length;B<X;B++){const G=z[B],et=v(G),V=x%S,rt=V%et.boundary,lt=V+rt;x+=rt,lt!==0&&S-lt<et.storage&&(x+=S-lt),I.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=et.storage}}}const T=x%S;return T>0&&(x+=S-T),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function p(){for(const y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:c,update:l,dispose:p}}class Na{constructor(t={}){const{canvas:e=gh(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=ye;let T=0,A=0,P=null,E=-1,M=null;const R=new he,I=new he;let z=null;const B=new Ct(0);let X=0,G=e.width,et=e.height,V=1,rt=null,lt=null;const St=new he(0,0,G,et),zt=new he(0,0,G,et);let Qt=!1;const ne=new Za;let qt=!1,$=!1;const K=new Bt,ut=new D,Pt=new he,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Me(){return P===null?V:1}let L=i;function se(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",Z,!1),L===null){const N="webgl2";if(L=se(N,w),L===null)throw se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Dt,At,mt,re,gt,Nt,_e,de,C,b,O,q,j,W,yt,it,vt,_t,Q,ct,wt,xt,at,Ut;function U(){Dt=new jf(L),Dt.init(),xt=new Lm(L,Dt),At=new Vf(L,Dt,t,xt),mt=new Cm(L,Dt),At.reversedDepthBuffer&&f&&mt.buffers.depth.setReversed(!0),re=new Jf(L),gt=new gm,Nt=new Pm(L,Dt,mt,gt,At,xt,re),_e=new Wf(x),de=new Yf(x),C=new nd(L),at=new Bf(L,C),b=new Kf(L,C,re,at),O=new tp(L,b,C,re),Q=new Qf(L,At,Nt),it=new Gf(gt),q=new mm(x,_e,de,Dt,At,at,it),j=new Om(x,gt),W=new _m,yt=new Em(Dt),_t=new kf(x,_e,de,mt,O,u,c),vt=new Am(x,O,At),Ut=new zm(L,re,At,mt),ct=new Hf(L,Dt,re),wt=new Zf(L,Dt,re),re.programs=q.programs,x.capabilities=At,x.extensions=Dt,x.properties=gt,x.renderLists=W,x.shadowMap=vt,x.state=mt,x.info=re}U();const tt=new Nm(x,L);this.xr=tt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(G,et,!1))},this.getSize=function(w){return w.set(G,et)},this.setSize=function(w,N,k=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,et=N,e.width=Math.floor(w*V),e.height=Math.floor(N*V),k===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(G*V,et*V).floor()},this.setDrawingBufferSize=function(w,N,k){G=w,et=N,V=k,e.width=Math.floor(w*k),e.height=Math.floor(N*k),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(St)},this.setViewport=function(w,N,k,H){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,N,k,H),mt.viewport(R.copy(St).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(zt)},this.setScissor=function(w,N,k,H){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,N,k,H),mt.scissor(I.copy(zt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){mt.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){lt=w},this.getClearColor=function(w){return w.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,k=!0){let H=0;if(w){let F=!1;if(P!==null){const J=P.texture.format;F=J===ja||J===Ya||J===$a}if(F){const J=P.texture.type,ot=J===li||J===Zi||J===ts||J===es||J===Wa||J===Xa,ft=_t.getClearColor(),ht=_t.getClearAlpha(),Tt=ft.r,Rt=ft.g,bt=ft.b;ot?(g[0]=Tt,g[1]=Rt,g[2]=bt,g[3]=ht,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Tt,v[1]=Rt,v[2]=bt,v[3]=ht,L.clearBufferiv(L.COLOR,0,v))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),_t.dispose(),W.dispose(),yt.dispose(),gt.dispose(),_e.dispose(),de.dispose(),O.dispose(),at.dispose(),Ut.dispose(),q.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",ii),tt.removeEventListener("sessionend",lo),Ui.stop()};function nt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=re.autoReset,N=vt.enabled,k=vt.autoUpdate,H=vt.needsUpdate,F=vt.type;U(),re.autoReset=w,vt.enabled=N,vt.autoUpdate=k,vt.needsUpdate=H,vt.type=F}function Z(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Y(w){const N=w.target;N.removeEventListener("dispose",Y),pt(N)}function pt(w){Lt(w),gt.remove(w)}function Lt(w){const N=gt.get(w).programs;N!==void 0&&(N.forEach(function(k){q.releaseProgram(k)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,k,H,F,J){N===null&&(N=Mt);const ot=F.isMesh&&F.matrixWorld.determinant()<0,ft=_l(w,N,k,H,F);mt.setMaterial(H,ot);let ht=k.index,Tt=1;if(H.wireframe===!0){if(ht=b.getWireframeAttribute(k),ht===void 0)return;Tt=2}const Rt=k.drawRange,bt=k.attributes.position;let Vt=Rt.start*Tt,jt=(Rt.start+Rt.count)*Tt;J!==null&&(Vt=Math.max(Vt,J.start*Tt),jt=Math.min(jt,(J.start+J.count)*Tt)),ht!==null?(Vt=Math.max(Vt,0),jt=Math.min(jt,ht.count)):bt!=null&&(Vt=Math.max(Vt,0),jt=Math.min(jt,bt.count));const le=jt-Vt;if(le<0||le===1/0)return;at.setup(F,H,ft,k,ht);let ee,Zt=ct;if(ht!==null&&(ee=C.get(ht),Zt=wt,Zt.setIndex(ee)),F.isMesh)H.wireframe===!0?(mt.setLineWidth(H.wireframeLinewidth*Me()),Zt.setMode(L.LINES)):Zt.setMode(L.TRIANGLES);else if(F.isLine){let Et=H.linewidth;Et===void 0&&(Et=1),mt.setLineWidth(Et*Me()),F.isLineSegments?Zt.setMode(L.LINES):F.isLineLoop?Zt.setMode(L.LINE_LOOP):Zt.setMode(L.LINE_STRIP)}else F.isPoints?Zt.setMode(L.POINTS):F.isSprite&&Zt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Zt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Et=F._multiDrawStarts,oe=F._multiDrawCounts,Wt=F._multiDrawCount,Ne=ht?C.get(ht).bytesPerElement:1,nn=gt.get(H).currentProgram.getUniforms();for(let Fe=0;Fe<Wt;Fe++)nn.setValue(L,"_gl_DrawID",Fe),Zt.render(Et[Fe]/Ne,oe[Fe])}else if(F.isInstancedMesh)Zt.renderInstances(Vt,le,F.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,oe=Math.min(k.instanceCount,Et);Zt.renderInstances(Vt,le,oe)}else Zt.render(Vt,le)};function te(w,N,k){w.transparent===!0&&w.side===Ee&&w.forceSinglePass===!1?(w.side=Ue,w.needsUpdate=!0,ms(w,N,k),w.side=xi,w.needsUpdate=!0,ms(w,N,k),w.side=Ee):ms(w,N,k)}this.compile=function(w,N,k=null){k===null&&(k=w),p=yt.get(k),p.init(N),_.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==k&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const J=F.material;if(J)if(Array.isArray(J))for(let ot=0;ot<J.length;ot++){const ft=J[ot];te(ft,k,F),H.add(ft)}else te(J,k,F),H.add(J)}),p=_.pop(),H},this.compileAsync=function(w,N,k=null){const H=this.compile(w,N,k);return new Promise(F=>{function J(){if(H.forEach(function(ot){gt.get(ot).currentProgram.isReady()&&H.delete(ot)}),H.size===0){F(w);return}setTimeout(J,10)}Dt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let $t=null;function hi(w){$t&&$t(w)}function ii(){Ui.stop()}function lo(){Ui.start()}const Ui=new cl;Ui.setAnimationLoop(hi),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(w){$t=w,tt.setAnimationLoop(w),w===null?Ui.stop():Ui.start()},tt.addEventListener("sessionstart",ii),tt.addEventListener("sessionend",lo),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(N),N=tt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,P),p=yt.get(w,_.length),p.init(N),_.push(p),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ne.setFromProjectionMatrix(K,ai,N.reversedDepth),$=this.localClippingEnabled,qt=it.init(this.clippingPlanes,$),m=W.get(w,y.length),m.init(),y.push(m),tt.enabled===!0&&tt.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&ar(J,N,-1/0,x.sortObjects)}ar(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,lt),Gt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Gt&&_t.addToRenderList(m,w),this.info.render.frame++,qt===!0&&it.beginShadows();const k=p.state.shadowsArray;vt.render(k,w,N),qt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const J=N.cameras;if(F.length>0)for(let ot=0,ft=J.length;ot<ft;ot++){const ht=J[ot];uo(H,F,w,ht)}Gt&&_t.render(w);for(let ot=0,ft=J.length;ot<ft;ot++){const ht=J[ot];ho(m,w,ht,ht.viewport)}}else F.length>0&&uo(H,F,w,N),Gt&&_t.render(w),ho(m,w,N);P!==null&&A===0&&(Nt.updateMultisampleRenderTarget(P),Nt.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,N),at.resetDefaultState(),E=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],qt===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ar(w,N,k,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ne.intersectsSprite(w)){H&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);const ot=O.update(w),ft=w.material;ft.visible&&m.push(w,ot,ft,k,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ne.intersectsObject(w))){const ot=O.update(w),ft=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Pt.copy(ot.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(K)),Array.isArray(ft)){const ht=ot.groups;for(let Tt=0,Rt=ht.length;Tt<Rt;Tt++){const bt=ht[Tt],Vt=ft[bt.materialIndex];Vt&&Vt.visible&&m.push(w,ot,Vt,k,Pt.z,bt)}}else ft.visible&&m.push(w,ot,ft,k,Pt.z,null)}}const J=w.children;for(let ot=0,ft=J.length;ot<ft;ot++)ar(J[ot],N,k,H)}function ho(w,N,k,H){const F=w.opaque,J=w.transmissive,ot=w.transparent;p.setupLightsView(k),qt===!0&&it.setGlobalState(x.clippingPlanes,k),H&&mt.viewport(R.copy(H)),F.length>0&&ps(F,N,k),J.length>0&&ps(J,N,k),ot.length>0&&ps(ot,N,k),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function uo(w,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Li(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?hs:li,minFilter:Ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const J=p.state.transmissionRenderTarget[H.id],ot=H.viewport||R;J.setSize(ot.z*x.transmissionResolutionScale,ot.w*x.transmissionResolutionScale);const ft=x.getRenderTarget(),ht=x.getActiveCubeFace(),Tt=x.getActiveMipmapLevel();x.setRenderTarget(J),x.getClearColor(B),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&_t.render(k);const Rt=x.toneMapping;x.toneMapping=Pi;const bt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),qt===!0&&it.setGlobalState(x.clippingPlanes,H),ps(w,k,H),Nt.updateMultisampleRenderTarget(J),Nt.updateRenderTargetMipmap(J),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let jt=0,le=N.length;jt<le;jt++){const ee=N[jt],Zt=ee.object,Et=ee.geometry,oe=ee.material,Wt=ee.group;if(oe.side===Ee&&Zt.layers.test(H.layers)){const Ne=oe.side;oe.side=Ue,oe.needsUpdate=!0,fo(Zt,k,H,Et,oe,Wt),oe.side=Ne,oe.needsUpdate=!0,Vt=!0}}Vt===!0&&(Nt.updateMultisampleRenderTarget(J),Nt.updateRenderTargetMipmap(J))}x.setRenderTarget(ft,ht,Tt),x.setClearColor(B,X),bt!==void 0&&(H.viewport=bt),x.toneMapping=Rt}function ps(w,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,J=w.length;F<J;F++){const ot=w[F],ft=ot.object,ht=ot.geometry,Tt=ot.group;let Rt=ot.material;Rt.allowOverride===!0&&H!==null&&(Rt=H),ft.layers.test(k.layers)&&fo(ft,N,k,ht,Rt,Tt)}}function fo(w,N,k,H,F,J){w.onBeforeRender(x,N,k,H,F,J),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,k,H,w,J),F.transparent===!0&&F.side===Ee&&F.forceSinglePass===!1?(F.side=Ue,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,w,J),F.side=xi,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,w,J),F.side=Ee):x.renderBufferDirect(k,N,H,F,w,J),w.onAfterRender(x,N,k,H,F,J)}function ms(w,N,k){N.isScene!==!0&&(N=Mt);const H=gt.get(w),F=p.state.lights,J=p.state.shadowsArray,ot=F.state.version,ft=q.getParameters(w,F.state,J,N,k),ht=q.getProgramCacheKey(ft);let Tt=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?de:_e).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Tt===void 0&&(w.addEventListener("dispose",Y),Tt=new Map,H.programs=Tt);let Rt=Tt.get(ht);if(Rt!==void 0){if(H.currentProgram===Rt&&H.lightsStateVersion===ot)return mo(w,ft),Rt}else ft.uniforms=q.getUniforms(w),w.onBeforeCompile(ft,x),Rt=q.acquireProgram(ft,ht),Tt.set(ht,Rt),H.uniforms=ft.uniforms;const bt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=it.uniform),mo(w,ft),H.needsLights=yl(w),H.lightsStateVersion=ot,H.needsLights&&(bt.ambientLightColor.value=F.state.ambient,bt.lightProbe.value=F.state.probe,bt.directionalLights.value=F.state.directional,bt.directionalLightShadows.value=F.state.directionalShadow,bt.spotLights.value=F.state.spot,bt.spotLightShadows.value=F.state.spotShadow,bt.rectAreaLights.value=F.state.rectArea,bt.ltc_1.value=F.state.rectAreaLTC1,bt.ltc_2.value=F.state.rectAreaLTC2,bt.pointLights.value=F.state.point,bt.pointLightShadows.value=F.state.pointShadow,bt.hemisphereLights.value=F.state.hemi,bt.directionalShadowMap.value=F.state.directionalShadowMap,bt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,bt.spotShadowMap.value=F.state.spotShadowMap,bt.spotLightMatrix.value=F.state.spotLightMatrix,bt.spotLightMap.value=F.state.spotLightMap,bt.pointShadowMap.value=F.state.pointShadowMap,bt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Rt,H.uniformsList=null,Rt}function po(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=qs.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function mo(w,N){const k=gt.get(w);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function _l(w,N,k,H,F){N.isScene!==!0&&(N=Mt),Nt.resetTextureUnits();const J=N.fog,ot=H.isMeshStandardMaterial?N.environment:null,ft=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Un,ht=(H.isMeshStandardMaterial?de:_e).get(H.envMap||ot),Tt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Rt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!k.morphAttributes.position,Vt=!!k.morphAttributes.normal,jt=!!k.morphAttributes.color;let le=Pi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(le=x.toneMapping);const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Zt=ee!==void 0?ee.length:0,Et=gt.get(H),oe=p.state.lights;if(qt===!0&&($===!0||w!==M)){const we=w===M&&H.id===E;it.setState(H,w,we)}let Wt=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==oe.state.version||Et.outputColorSpace!==ft||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==ht||H.fog===!0&&Et.fog!==J||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==Tt||Et.vertexTangents!==Rt||Et.morphTargets!==bt||Et.morphNormals!==Vt||Et.morphColors!==jt||Et.toneMapping!==le||Et.morphTargetsCount!==Zt)&&(Wt=!0):(Wt=!0,Et.__version=H.version);let Ne=Et.currentProgram;Wt===!0&&(Ne=ms(H,N,F));let nn=!1,Fe=!1,Hn=!1;const ce=Ne.getUniforms(),Ve=Et.uniforms;if(mt.useProgram(Ne.program)&&(nn=!0,Fe=!0,Hn=!0),H.id!==E&&(E=H.id,Fe=!0),nn||M!==w){mt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ce.setValue(L,"projectionMatrix",w.projectionMatrix),ce.setValue(L,"viewMatrix",w.matrixWorldInverse);const Pe=ce.map.cameraPosition;Pe!==void 0&&Pe.setValue(L,ut.setFromMatrixPosition(w.matrixWorld)),At.logarithmicDepthBuffer&&ce.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Fe=!0,Hn=!0)}if(F.isSkinnedMesh){ce.setOptional(L,F,"bindMatrix"),ce.setOptional(L,F,"bindMatrixInverse");const we=F.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ce.setValue(L,"boneTexture",we.boneTexture,Nt))}F.isBatchedMesh&&(ce.setOptional(L,F,"batchingTexture"),ce.setValue(L,"batchingTexture",F._matricesTexture,Nt),ce.setOptional(L,F,"batchingIdTexture"),ce.setValue(L,"batchingIdTexture",F._indirectTexture,Nt),ce.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&ce.setValue(L,"batchingColorTexture",F._colorsTexture,Nt));const Ge=k.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&Q.update(F,k,Ne),(Fe||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,ce.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ve.envMap.value=ht,Ve.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Ve.envMapIntensity.value=N.environmentIntensity),Fe&&(ce.setValue(L,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&xl(Ve,Hn),J&&H.fog===!0&&j.refreshFogUniforms(Ve,J),j.refreshMaterialUniforms(Ve,H,V,et,p.state.transmissionRenderTarget[w.id]),qs.upload(L,po(Et),Ve,Nt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qs.upload(L,po(Et),Ve,Nt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(L,"center",F.center),ce.setValue(L,"modelViewMatrix",F.modelViewMatrix),ce.setValue(L,"normalMatrix",F.normalMatrix),ce.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const we=H.uniformsGroups;for(let Pe=0,or=we.length;Pe<or;Pe++){const Ni=we[Pe];Ut.update(Ni,Ne),Ut.bind(Ni,Ne)}}return Ne}function xl(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function yl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,k){const H=gt.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),gt.get(w.texture).__webglTexture=N,gt.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const k=gt.get(w);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Ml=L.createFramebuffer();this.setRenderTarget=function(w,N=0,k=0){P=w,T=N,A=k;let H=!0,F=null,J=!1,ot=!1;if(w){const ht=gt.get(w);if(ht.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(ht.__webglFramebuffer===void 0)Nt.setupRenderTarget(w);else if(ht.__hasExternalTextures)Nt.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const bt=w.depthTexture;if(ht.__boundDepthTexture!==bt){if(bt!==null&&gt.has(bt)&&(w.width!==bt.image.width||w.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(w)}}const Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ot=!0);const Rt=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?F=Rt[N][k]:F=Rt[N],J=!0):w.samples>0&&Nt.useMultisampledRTT(w)===!1?F=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(Rt)?F=Rt[k]:F=Rt,R.copy(w.viewport),I.copy(w.scissor),z=w.scissorTest}else R.copy(St).multiplyScalar(V).floor(),I.copy(zt).multiplyScalar(V).floor(),z=Qt;if(k!==0&&(F=Ml),mt.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&mt.drawBuffers(w,F),mt.viewport(R),mt.scissor(I),mt.setScissorTest(z),J){const ht=gt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ht.__webglTexture,k)}else if(ot){const ht=N;for(let Tt=0;Tt<w.textures.length;Tt++){const Rt=gt.get(w.textures[Tt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Tt,Rt.__webglTexture,k,ht)}}else if(w!==null&&k!==0){const ht=gt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ht.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(w,N,k,H,F,J,ot,ft=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(ht=ht[ot]),ht){mt.bindFramebuffer(L.FRAMEBUFFER,ht);try{const Tt=w.textures[ft],Rt=Tt.format,bt=Tt.type;if(!At.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&k>=0&&k<=w.height-F&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(N,k,H,F,xt.convert(Rt),xt.convert(bt),J))}finally{const Tt=P!==null?gt.get(P).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,N,k,H,F,J,ot,ft=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(ht=ht[ot]),ht)if(N>=0&&N<=w.width-H&&k>=0&&k<=w.height-F){mt.bindFramebuffer(L.FRAMEBUFFER,ht);const Tt=w.textures[ft],Rt=Tt.format,bt=Tt.type;if(!At.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.bufferData(L.PIXEL_PACK_BUFFER,J.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(N,k,H,F,xt.convert(Rt),xt.convert(bt),0);const jt=P!==null?gt.get(P).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,jt);const le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vh(L,le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,J),L.deleteBuffer(Vt),L.deleteSync(le),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,k=0){const H=Math.pow(2,-k),F=Math.floor(w.image.width*H),J=Math.floor(w.image.height*H),ot=N!==null?N.x:0,ft=N!==null?N.y:0;Nt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ot,ft,F,J),mt.unbindTexture()};const Sl=L.createFramebuffer(),bl=L.createFramebuffer();this.copyTextureToTexture=function(w,N,k=null,H=null,F=0,J=null){J===null&&(F!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=F,F=0):J=0);let ot,ft,ht,Tt,Rt,bt,Vt,jt,le;const ee=w.isCompressedTexture?w.mipmaps[J]:w.image;if(k!==null)ot=k.max.x-k.min.x,ft=k.max.y-k.min.y,ht=k.isBox3?k.max.z-k.min.z:1,Tt=k.min.x,Rt=k.min.y,bt=k.isBox3?k.min.z:0;else{const Ge=Math.pow(2,-F);ot=Math.floor(ee.width*Ge),ft=Math.floor(ee.height*Ge),w.isDataArrayTexture?ht=ee.depth:w.isData3DTexture?ht=Math.floor(ee.depth*Ge):ht=1,Tt=0,Rt=0,bt=0}H!==null?(Vt=H.x,jt=H.y,le=H.z):(Vt=0,jt=0,le=0);const Zt=xt.convert(N.format),Et=xt.convert(N.type);let oe;N.isData3DTexture?(Nt.setTexture3D(N,0),oe=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Nt.setTexture2DArray(N,0),oe=L.TEXTURE_2D_ARRAY):(Nt.setTexture2D(N,0),oe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Wt=L.getParameter(L.UNPACK_ROW_LENGTH),Ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Fe=L.getParameter(L.UNPACK_SKIP_ROWS),Hn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bt);const ce=w.isDataArrayTexture||w.isData3DTexture,Ve=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const Ge=gt.get(w),we=gt.get(N),Pe=gt.get(Ge.__renderTarget),or=gt.get(we.__renderTarget);mt.bindFramebuffer(L.READ_FRAMEBUFFER,Pe.__webglFramebuffer),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let Ni=0;Ni<ht;Ni++)ce&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(w).__webglTexture,F,bt+Ni),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(N).__webglTexture,J,le+Ni)),L.blitFramebuffer(Tt,Rt,ot,ft,Vt,jt,ot,ft,L.DEPTH_BUFFER_BIT,L.NEAREST);mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||gt.has(w)){const Ge=gt.get(w),we=gt.get(N);mt.bindFramebuffer(L.READ_FRAMEBUFFER,Sl),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,bl);for(let Pe=0;Pe<ht;Pe++)ce?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,F,bt+Pe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,F),Ve?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.__webglTexture,J,le+Pe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,J),F!==0?L.blitFramebuffer(Tt,Rt,ot,ft,Vt,jt,ot,ft,L.COLOR_BUFFER_BIT,L.NEAREST):Ve?L.copyTexSubImage3D(oe,J,Vt,jt,le+Pe,Tt,Rt,ot,ft):L.copyTexSubImage2D(oe,J,Vt,jt,Tt,Rt,ot,ft);mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ve?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(oe,J,Vt,jt,le,ot,ft,ht,Zt,Et,ee.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(oe,J,Vt,jt,le,ot,ft,ht,Zt,ee.data):L.texSubImage3D(oe,J,Vt,jt,le,ot,ft,ht,Zt,Et,ee):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,J,Vt,jt,ot,ft,Zt,Et,ee.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,J,Vt,jt,ee.width,ee.height,Zt,ee.data):L.texSubImage2D(L.TEXTURE_2D,J,Vt,jt,ot,ft,Zt,Et,ee);L.pixelStorei(L.UNPACK_ROW_LENGTH,Wt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Hn),J===0&&N.generateMipmaps&&L.generateMipmap(oe),mt.unbindTexture()},this.initRenderTarget=function(w){gt.get(w).__webglFramebuffer===void 0&&Nt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Nt.setTextureCube(w,0):w.isData3DTexture?Nt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Nt.setTexture2DArray(w,0):Nt.setTexture2D(w,0),mt.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,mt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const xc=(r,t,e)=>({x:r.x+(t.x-r.x)*e,y:r.y+(t.y-r.y)*e,z:r.z+(t.z-r.z)*e,u:r.u+(t.u-r.u)*e}),fl=r=>r?.4:.55;function yc(r,t=0){const e=t?r.branch(t).length:r.length,i=Math.ceil(e/(r.id==="orbit"?1:2)),n=r.width(t)+r.verge(t),s=[];for(const a of[-1,1]){const o=l=>{const h=r.routeAt(t,l),d=h.x+h.nx*n*a,f=h.z+h.nz*n*a;return{x:d,y:r.deckHeight(t,l,d,f),z:f,u:l}},c=l=>Math.min(r.junctionClearance(t,l.u,l.x,l.z)+.12,r.selfOverlapClearance(t,l.u,l.x,l.z,n)+.045);for(let l=0;l<i;l++){let h=o(l/i*e),d=o((l+1)/i*e);if(Math.abs(h.y-d.y)>=9)continue;const f=c(h),u=c(d);if(!(f<0&&u<0)){if(f<0!=u<0){let g=0,v=1;for(let p=0;p<14;p++){const y=(g+v)/2;c(xc(h,d,y))>=0==f>=0?g=y:v=y}const m=xc(h,d,(g+v)/2);f<0?h=m:d=m}s.push({a:h,b:d,side:a,route:t})}}}return s}class Mc{segments;cells=new Map;cellSize=12;candidates=new Set;constructor(t){this.segments=[...yc(t),...t.branches.flatMap(e=>yc(t,e.route))];for(const e of this.segments){const{a:i,b:n}=e;for(let s=Math.floor((Math.min(i.x,n.x)-.4)/this.cellSize);s<=Math.floor((Math.max(i.x,n.x)+.4)/this.cellSize);s++)for(let a=Math.floor((Math.min(i.z,n.z)-.4)/this.cellSize);a<=Math.floor((Math.max(i.z,n.z)+.4)/this.cellSize);a++){const o=s+":"+a,c=this.cells.get(o)??[];c.push(e),this.cells.set(o,c)}}}resolve(t){const e=this.candidates;e.clear();for(let a=Math.floor((t.x-3)/this.cellSize);a<=Math.floor((t.x+3)/this.cellSize);a++)for(let o=Math.floor((t.z-3)/this.cellSize);o<=Math.floor((t.z+3)/this.cellSize);o++)for(const c of this.cells.get(a+":"+o)??[])e.add(c);const i=Math.sin(t.heading),n=Math.cos(t.heading);let s=0;for(let a=0;a<3;a++){let o=!1;for(const c of e){const{a:l,b:h}=c;if(t.y>Math.max(l.y,h.y)+1.35||t.y+1.25<Math.min(l.y,h.y))continue;const d=h.x-l.x,f=h.z-l.z,u=Math.hypot(d,f);if(u<1e-4)continue;const g=d/u,v=f/u,m=-v,p=g,y=t.x+i*.1-(l.x+h.x)*.5,_=t.z+n*.1-(l.z+h.z)*.5,x=fl(c.route)*.5+.025;let S=1/0,T=0,A=0,P=!1;for(const[M,R]of[[i,n],[n,-i],[g,v],[m,p]]){const I=1.85*Math.abs(i*M+n*R)+1.34*Math.abs(n*M-i*R),z=u*.5*Math.abs(g*M+v*R)+x*Math.abs(m*M+p*R),B=y*M+_*R,X=I+z-Math.abs(B);if(X<=0){P=!0;break}if(X<S){S=X;const G=Math.abs(B)>1e-4?Math.sign(B):Math.sign((m*M+p*R)*c.side)||1;T=M*G,A=R*G}}if(P)continue;t.x+=T*(S+.001),t.z+=A*(S+.001),o=!0;const E=t.vx*T+t.vz*A;if(E<0){s=Math.max(s,-E);const M=t.vx-T*E,R=t.vz-A*E,I=-E*.42;t.vx=M*.985+T*I,t.vz=R*.985+A*I}}if(!o)break}return s}}const Ie=(r,t,e)=>Math.max(t,Math.min(e,r)),ue=(r,t,e)=>r+(t-r)*e,$i=(r,t,e,i)=>ue(r,t,1-Math.exp(-e*i)),ke=(r,t)=>(r%t+t)%t,oi=r=>Math.atan2(Math.sin(r),Math.cos(r));function fs(r=7319){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Ri=r=>`${Math.floor(r/60).toString().padStart(2,"0")}:${Math.floor(r%60).toString().padStart(2,"0")}.${Math.floor(r*1e3%1e3).toString().padStart(3,"0")}`,Sc=new Map;let Hs=0;const bc=r=>{const t=new os(r.map(e=>new D(...e)),!0,"centripetal");return t.arcLengthDivisions=4e3,t.updateArcLengths(),t};function km(r,t){const e=r.getLength(),i=Math.ceil(e/3),n=e/i,s=Array.from({length:i},(l,h)=>r.getPointAt(h/i)),a=Math.ceil(t*2/n),o=s.map((l,h)=>{const d=new D;let f=0;for(let u=-a;u<=a;u++){const g=Math.exp(-.5*(u*n/t)**2);d.addScaledVector(s[ke(h+u,i)],g),f+=g}return d.divideScalar(f)}),c=new os(o,!0,"centripetal");return c.arcLengthDivisions=4e3,c.updateArcLengths(),c}function Bm(r){const t=Cn(r);if(!t.newCircuit)return t;const e=Sc.get(t.id);if(e)return e;Hs||(Hs=bc(Cn("coast").points).getLength()*.95);let i=1,n=t.points.map(o=>[...o]);const s=()=>{const o=bc(n),c=o.getLength(),l=o.getLengths(4e3),h=f=>{const u=f/n.length*4e3,g=Math.floor(u);return ue(l[g],l[Math.min(4e3,g+1)],u-g)};let d=c;for(const f of t.branches??[]){const u=new D(...n[f.from]),g=new D(...n[f.to]),v=o.getTangent(f.from/n.length),m=o.getTangent(f.to/n.length),p=new os([u,u.clone().addScaledVector(v,15),...f.via.map(([y,_,x])=>new D(y*i,_,x*i)),g.clone().addScaledVector(m,-15),g],!1,"centripetal");p.arcLengthDivisions=1e3,d=Math.max(d,c-(h(f.to)-h(f.from))+p.getLength())}return d};for(let o=0;o<4;o++){const c=s();if(c<=Hs)break;i*=Hs/c*.99,n=t.points.map(([l,h,d])=>[l*i,h,d*i])}const a={...t,points:n,shortcut:t.shortcut?{...t.shortcut,via:t.shortcut.via.map(([o,c,l])=>[o*i,c,l*i])}:void 0};return t.branches&&(a.branches=t.branches.map(o=>({...o,via:o.via.map(([c,l,h])=>[c*i,l,h*i])}))),Sc.set(t.id,a),a}class cs{collisionWorld;cityFork;get barriers(){return this.collisionWorld??=new Mc(this)}halfWidth=8.8;shoulder=4;count=720;points=[];length;curve;definition;id;branches=[];get shortcut(){return this.branches[0]??null}branch(t){return this.branches[t-1]??null}drop=null;bounds={minX:0,maxX:0,minZ:0,maxZ:0};itemS=135;itemRows;itemLocations;crossings;constructor(t="coast",e=!0){this.definition=Bm(t),this.id=this.definition.id;const i=this.definition.points;this.curve=new os(i.map(c=>new D(...c)),!0,"centripetal"),this.curve.arcLengthDivisions=4e3,this.curve.updateArcLengths(),this.id==="mistpine"&&(this.curve=km(this.curve,10)),this.length=this.curve.getLength();for(let c=0;c<this.count;c++){const l=this.curve.getPointAt(c/this.count),h=this.curve.getTangentAt(c/this.count),d=Math.hypot(h.x,h.z);this.points.push({x:l.x,y:l.y,z:l.z,tx:h.x/d,tz:h.z/d,nx:h.z/d,nz:-h.x/d,s:c/this.count*this.length,u:c/this.count*this.length,route:0,bank:0})}const n=c=>this.project(i[c][0],i[c][2],void 0,0,i[c][1]).s,s=this.definition.drop;s&&(this.drop={from:n(s.from),to:n(s.to),floor:s.floor,launch:i[s.from][1]});const a=this.definition.branches??(this.definition.shortcut?[this.definition.shortcut]:[]);for(const[c,l]of a.entries()){const h=c+1,d=n(l.from),f=n(l.to),u=this.at(d),g=this.at(f),v=_=>new D(_.x,_.y,_.z),m=new os([v(u),new D(u.x+u.tx*15,u.y,u.z+u.tz*15),...l.via.map(_=>new D(..._)),new D(g.x-g.tx*15,g.y,g.z-g.tz*15),v(g)],!1,"centripetal");m.arcLengthDivisions=1e3,m.updateArcLengths();const p=m.getLength(),y=[];for(let _=0;_<=180;_++){const x=m.getPointAt(_/180),S=m.getTangentAt(_/180),T=Math.hypot(S.x,S.z);y.push({x:x.x,y:x.y,z:x.z,tx:S.x/T,tz:S.z/T,nx:S.z/T,nz:-S.x/T,s:ue(d,f,_/180),u:p*_/180,route:h,bank:0})}this.branches.push({from:d,to:f,length:p,points:y,name:l.name,route:h,bonusItems:l.bonusItems});for(const _ of y){if(Math.min(_.u,p-_.u)>75)continue;const x=this.project(_.x,_.z,void 0,0,_.y),S=Math.max(0,Math.min(1,(x.distance-7)/13));_.y=ue(x.y,_.y,S*S*(3-2*S))}}if(this.id==="metro"&&this.shortcut){const c=this.shortcut,l=c.points[0],h=c.points[c.points.length-1],d=Math.hypot(h.x-l.x,h.z-l.z);this.cityFork={from:c.from,to:c.to,x:l.x,z:l.z,dx:(h.x-l.x)/d,dz:(h.z-l.z)/d,length:d}}if(this.itemRows=[this.itemS,this.length*.47,this.length*.86].map(c=>(this.shortcut&&c>this.shortcut.from-20&&c<this.shortcut.to+45&&(c=this.shortcut.to+55),this.drop&&c>this.drop.from-60&&c<this.drop.to+55&&(c=this.drop.to+70),c)),this.definition.newCircuit){const c=(l,h)=>l>45&&l<this.length-45&&(!this.shortcut||l<this.shortcut.from-30||l>this.shortcut.to+45)&&this.itemRows.every(d=>Math.abs(this.delta(d,l))>h);this.itemRows.length=0;for(const l of[.1,.47,.83])for(let h=0;h<this.length;h+=8){const d=ke(this.length*l+h,this.length);if(c(d,this.length*.16)){this.itemRows.push(d);break}}for(let l=55;this.itemRows.length<3&&l<this.length-45;l+=8)c(l,55)&&this.itemRows.push(l)}this.itemLocations=this.itemRows.map(c=>({route:0,u:c}));for(const c of this.branches)c.bonusItems&&this.itemLocations.push({route:c.route,u:c.length*.5});this.crossings=this.id==="metro"?[.37,.63,.85].map(c=>this.length*c):[];const o=[...this.points,...this.branches.flatMap(c=>c.points)];this.bounds={minX:Math.min(...o.map(c=>c.x)),maxX:Math.max(...o.map(c=>c.x)),minZ:Math.min(...o.map(c=>c.z)),maxZ:Math.max(...o.map(c=>c.z))},e&&(this.collisionWorld=new Mc(this))}at(t){const e=ke(t,this.length)/this.length*this.count,i=Math.floor(e),n=e-i,s=this.points[i],a=this.points[(i+1)%this.count],o=ue(s.tx,a.tx,n),c=ue(s.tz,a.tz,n),l=Math.hypot(o,c);return{x:ue(s.x,a.x,n),y:this.id==="orbit"?this.bloomHeight(ue(s.x,a.x,n),ue(s.z,a.z,n),i,ue(s.y,a.y,n)):this.surfaceHeight(ke(t,this.length),ue(s.y,a.y,n)),z:ue(s.z,a.z,n),tx:o/l,tz:c/l,nx:c/l,nz:-o/l,s:ke(t,this.length),u:ke(t,this.length),route:0,bank:this.bankAt(t)}}bankAt(t){const e=this.definition.banking;if(!e)return 0;const i=this.points[Math.floor(ke(t-18,this.length)/this.length*this.count)],n=this.points[Math.floor(ke(t+18,this.length)/this.length*this.count)],s=oi(Math.atan2(n.tx,n.tz)-Math.atan2(i.tx,i.tz))/36;return Math.max(-e,Math.min(e,-s*22))}surfaceHeight(t,e){if(!this.drop)return e;const i=this.drop;if(t>=i.from-70&&t<i.from-36){const n=(t-(i.from-70))/34;return ue(e,i.launch,n*n*(3-2*n))}return t>=i.from-36&&t<i.from?i.launch:t>=i.from&&t<=i.to?i.floor:e}forkProgress(t,e,i){const n=this.cityFork;if(!n||i<n.from-25||i>n.to+25)return i;const s=(t-n.x)*n.dx+(e-n.z)*n.dz,a=Math.max(0,Math.min(1,(s+20)/20,(n.length+20-s)/20)),o=a*a*(3-2*a);return ue(i,n.from+s/n.length*(n.to-n.from),o)}routeAt(t,e){const i=this.branch(t);if(!t||!i)return this.at(e);if(e<0)return this.at(i.from+e);if(e>i.length)return this.at(i.to+e-i.length);const n=Math.min(179.999999,Math.max(0,e)/i.length*180),s=Math.floor(n),a=n-s,o=i.points[s],c=i.points[s+1],l=ue(o.tx,c.tx,a),h=ue(o.tz,c.tz,a),d=Math.hypot(l,h),f=Math.min(40,i.length*.27),u=Math.min(32,i.length*.23),g=e<f?i.from+e:e>i.length-u?i.to-(i.length-e):ue(i.from+f,i.to-u,(e-f)/(i.length-f-u)),v=ue(o.x,c.x,a),m=ue(o.z,c.z,a);return{x:v,y:ue(o.y,c.y,a),z:m,tx:l/d,tz:h/d,nx:h/d,nz:-l/d,s:this.forkProgress(v,m,g),u:e,route:t,bank:0}}width(t=0){return t?this.definition.newCircuit?6.2:4.6:this.halfWidth}verge(t=0){return t?this.definition.newCircuit?2.4:1.4:this.shoulder}inDrop(t){return!!this.drop&&t>=this.drop.from&&t<=this.drop.to+15}project(t,e,i,n=0,s){const a=this.branch(n),o=a?.points??this.points,c=a?o.length-1:this.count,l=a?.length??this.length;let h=1/0,d=1/0,f=0,u=0;const g=p=>{p=a?Math.max(0,Math.min(c-1,p)):ke(p,c);const y=o[p],_=o[(p+1)%o.length],x=_.x-y.x,S=_.z-y.z,T=Math.max(0,Math.min(1,((t-y.x)*x+(e-y.z)*S)/(x*x+S*S))),A=(t-y.x-x*T)**2+(e-y.z-S*T)**2,P=this.definition.overpass&&s!==void 0?s-(y.y+(_.y-y.y)*T):0,E=A+P*P*4;E<h&&(h=E,d=A,f=p,u=T)};if(i===void 0)for(let p=0;p<c;p++)g(p);else{for(let p=-16;p<=16;p++)g(i+p);if(d>900)for(let p=0;p<c;p++)g(p)}const v=this.routeAt(n,(f+u)/c*l),m=(t-v.x)*v.nx+(e-v.z)*v.nz;return{...v,y:n?this.deckHeight(n,v.u,t,e):this.id==="orbit"?this.bloomHeight(t,e,f,v.y):v.y+Math.tan(v.bank)*m,s:this.forkProgress(t,e,v.s),index:f,distance:Math.sqrt(d),lateral:m}}drivingProjection(t,e,i){const n=this.project(t,e,i.index,i.route,i.y);if(!this.branches.length)return n;if(!n.route){if(n.distance<=this.halfWidth+this.shoulder+.15)return n;let o=n;for(const c of this.branches){const l=Math.min(85,c.length*.48);if(n.s<=c.from-12||n.s>=c.from+l+20)continue;const h=this.project(t,e,void 0,c.route,n.y);h.u<l&&h.distance+1<o.distance&&h.distance<this.width(c.route)+this.verge(c.route)+.15&&(o=h)}return o}const s=this.branch(n.route),a=Math.min(85,s.length*.48);if(n.u<a||n.u>s.length-a){const o=this.project(t,e,void 0,0,n.y),c=n.u<a&&Math.abs(this.delta(o.s,s.from))<a+20,l=n.u>s.length-a&&Math.abs(this.delta(o.s,s.to))<a+20;if((c||l)&&o.distance<this.halfWidth+this.shoulder+.15&&n.distance>this.width(n.route)+this.verge(n.route)-.15||n.u>s.length-.2&&o.s>=s.to-1)return o}return n}legalPosition(t,e,i){return t.distance<=this.width(t.route)+this.verge(t.route)+.1?!0:this.junctionClearance(t.route,t.u,e,i)<.1}selfOverlapClearance(t,e,i,n,s){if(this.id!=="orbit")return 1e3;const a=this.branch(t),o=a?.length??this.length,c=a?180:this.count;return this.project(i,n,Math.floor(e/o*c),t).distance-s}foldedCornerTransition(t,e,i,n){if(this.id!=="orbit"||t.route)return!1;const s=this.at(e);return Math.hypot(i-s.x,n-s.z)<=this.halfWidth+this.shoulder+.2&&Math.abs(oi(Math.atan2(t.tx,t.tz)-Math.atan2(s.tx,s.tz)))>.35}ahead(t,e,i=!1){if(t.route)return this.routeAt(t.route,t.u+e);const n=typeof i=="number"?i:1,s=this.branch(n);if(i&&s&&t.s>=s.from-e-10&&t.s<s.from+Math.min(85,s.length*.48)+20){if(t.s<s.from)return this.routeAt(n,Math.max(0,t.s-s.from+e));const a="lateral"in t?Number(t.lateral):0,o=this.project(t.x+t.nx*a,t.z+t.nz*a,void 0,n,t.y);return this.routeAt(n,o.u+e)}return this.at(t.s+e)}junctionClearance(t,e,i,n,s=!1){if(!this.branches.length)return 1e3;const a=this.branch(t),o=this.routeAt(t,e);if(a&&Math.min(e,a.length-e)>85)return 1e3;let c=1e3;for(const l of[0,...this.branches.map(h=>h.route)]){if(l===t||s&&t>0&&l>t)continue;const h=this.branch(l);if(!t&&h&&Math.min(Math.abs(this.delta(e,h.from)),Math.abs(this.delta(e,h.to)))>95)continue;const d=this.project(i,n,void 0,l,o.y);h&&Math.min(d.u,h.length-d.u)>85||Math.abs(d.y-o.y)>4||(c=Math.min(c,d.distance-(this.width(l)+(s?0:this.verge(l)))))}return c}deckHeight(t,e,i,n){const s=this.routeAt(t,e),a=this.branch(t);if(!t)return this.id==="orbit"?this.project(i,n,Math.floor(e/this.length*this.count)).y:s.y+Math.tan(s.bank)*((i-s.x)*s.nx+(n-s.z)*s.nz);if(!a||Math.min(e,a.length-e)>85)return s.y;const o=this.project(i,n,void 0,0,s.y),c=Math.max(0,Math.min(1,(o.distance-8.8)/9));return ue(o.y,s.y,c*c*(3-2*c))}bloomHeight(t,e,i,n){let s=0,a=0;for(let o=-24;o<=24;o++){const c=this.points[ke(i+o,this.count)],l=Math.exp(-((t-c.x)**2+(e-c.z)**2)/40.5);a+=c.y*l,s+=l}return s>1e-20?a/s:n}railOpening(t,e,i=this.halfWidth+this.shoulder){const n=this.at(t),s=n.x+n.nx*i*e,a=n.z+n.nz*i*e;return this.junctionClearance(0,t,s,a)<.35||this.selfOverlapClearance(0,t,s,a,i)<-.1}overLowerRoad(t,e,i){return!!this.definition.overpass&&this.points.some(n=>n.y<i-4&&Math.hypot(t-n.x,e-n.z)<18)}nearAnyRoad(t,e){const i=this.project(t,e);return Math.min(i.distance,...this.branches.map(n=>this.project(t,e,void 0,n.route).distance))}delta(t,e){return ke(t-e+this.length/2,this.length)-this.length/2}}function no(r,t=!1){const e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new me;let l=0;for(let h=0;h<r.length;++h){const d=r[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;s[u]===void 0&&(s[u]=[]),s[u].push(d.attributes[u]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(e){let h=0;const d=[];for(let f=0;f<r.length;++f){const u=r[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=r[f].attributes.position.count}c.setIndex(d)}for(const h in s){const d=Ec(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let v=0;v<a[h].length;++v)u.push(a[h][v][f]);const g=Ec(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Ec(r){let t,e,i,n=-1,s=0;for(let l=0;l<r.length;++l){const h=r[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new He(a,e,i);let c=0;for(let l=0;l<r.length;++l){const h=r[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){const v=h.getComponent(f,g);o.setComponent(f+d,g,v)}}else a.set(h.array,c);c+=h.count*e}return n!==void 0&&(o.gpuType=n),o}const Yi=6;class Hm{constructor(t){if(this.track=t,this.enabled=t.id==="metro",!!this.enabled){this.cars=[.18,.49,.8,.29,.6,.91].map((e,i)=>({id:i,s:t.length*e,direction:i<3?1:-1,speed:[10.5,12.5,11.5,11,12,10][i],x:0,y:0,z:0,radius:3.4,heading:0,halfWidth:1.28,halfLength:2.85,vx:0,vz:0}));for(const e of this.cars)this.placeCar(e);this.pedestrians=t.crossings.flatMap((e,i)=>[0,1].map(n=>({id:i*2+n,crossing:i,active:!1,fallTime:0,lane:0,direction:1,speed:2.3,x:0,y:0,z:0,heading:0,stride:0})))}}track;enabled;cars=[];pedestrians=[];placeCar(t){const e=this.track.at(t.s),i=t.direction*3.8;t.x=e.x+e.nx*i,t.z=e.z+e.nz*i,t.y=this.track.deckHeight(0,e.s,t.x,t.z),t.heading=Math.atan2(e.tx*t.direction,e.tz*t.direction),t.vx=e.tx*t.direction*t.speed,t.vz=e.tz*t.direction*t.speed}placePedestrian(t){const e=this.track.at(this.track.crossings[t.crossing]),i=(t.id%2-.5)*1.5;t.x=e.x+e.nx*t.lane+e.tx*i,t.z=e.z+e.nz*t.lane+e.tz*i,t.y=e.y,t.heading=Math.atan2(e.nx*t.direction,e.nz*t.direction)}fillEmptyCrossings(){for(let t=0;t<this.track.crossings.length;t++){const e=this.pedestrians[t*2],i=this.pedestrians[t*2+1];if(e.active||i.active)continue;const n=[e,i].filter(o=>o.fallTime<=0);if(!n.length)continue;const s=Math.min(n.length,Sn()<.32?2:1),a=Sn()<.5?-1:1;for(let o=0;o<s;o++){const c=n[o];c.active=!0,c.fallTime=0,c.direction=a,c.lane=-a*(11.8+o*.6),c.speed=2.3+Sn()*.7,c.stride=0,this.placePedestrian(c)}}}step(t,e){if(this.enabled){for(const i of this.cars)i.s=ke(i.s+i.direction*i.speed*t,this.track.length),this.placeCar(i);for(const i of this.pedestrians){if(i.fallTime>0){i.fallTime=Math.max(0,i.fallTime-t);continue}if(i.active){if(i.lane+=i.direction*i.speed*t,i.stride+=i.speed*t,i.lane*i.direction>12.1){i.active=!1;continue}this.placePedestrian(i)}}this.fillEmptyCrossings()}}contacts(t,e){if(this.enabled){for(const i of this.pedestrians)if(i.active)for(const n of t){const s=n.body;if(n.finishTime!==null||Math.abs(s.y-i.y)>2.4)continue;const a=Math.sin(s.heading),o=Math.cos(s.heading),c=i.x-s.x,l=i.z-s.z;if(!(Math.abs(c*a+l*o)>2.15||Math.abs(c*o-l*a)>1.55)){i.active=!1,i.fallTime=1,i.heading=s.heading,e.hit(s,0,0);break}}this.fillEmptyCrossings()}}snapshot(){const t=e=>Math.round(e*1e3)/1e3;return{cars:this.cars.map(e=>t(e.s)),pedestrians:this.pedestrians.map(e=>[e.active?1:0,t(e.lane),e.direction,t(e.speed),t(e.stride),t(e.fallTime),t(e.heading)])}}accept(t){if(!(!this.enabled||t.cars?.length!==Yi||t.pedestrians?.length!==6)){for(let e=0;e<Yi;e++)Number.isFinite(t.cars[e])&&(this.cars[e].s=t.cars[e],this.placeCar(this.cars[e]));for(let e=0;e<6;e++){const i=t.pedestrians[e];if(i?.length!==7||!i.every(Number.isFinite))continue;const n=this.pedestrians[e];[n.lane,n.direction,n.speed,n.stride,n.fallTime]=i.slice(1,6),n.active=i[0]===1&&n.fallTime<=0,this.placePedestrian(n),n.fallTime>0&&(n.heading=i[6])}}}extrapolate(t){if(this.enabled){t=Ie(t,0,.05);for(const e of this.cars)e.s=ke(e.s+e.direction*e.speed*t,this.track.length),this.placeCar(e);for(const e of this.pedestrians){if(e.fallTime>0){e.fallTime=Math.max(0,e.fallTime-t);continue}e.active&&(e.lane+=e.direction*e.speed*t,e.stride+=e.speed*t,this.placePedestrian(e))}}}}class Vm{constructor(t){this.scene=t,this.group.userData.dynamic=!0,this.bodies=this.pool(new ie(2.5,1.05,5.6),Yi,16777215),this.roofs=this.pool(new ie(2.18,.18,2.85),Yi,16777215),this.glass=this.pool(new ie(2.08,.7,2.72),Yi,2641250),this.wheels=this.pool(new qe(.62,.62,.32,10).rotateZ(Math.PI/2),Yi*4,2307133);const e=no([new ie(.6,.3,.12).translate(-.77,0,0),new ie(.6,.3,.12).translate(.77,0,0)]);this.lamps=this.pool(e,Yi*2,16777215,!0),this.torsos=this.pool(new ie(.63,.76,.38),6,16777215),this.heads=this.pool(new Ji(.27,1),6,15780261),this.legs=this.pool(new ie(.21,.72,.24),12,3360860),this.arms=this.pool(new ie(.17,.62,.19),12,16777215),t.add(this.group)}scene;group=new Ce;pedestrianPose=new Jt;partMatrix=new Bt;dummy=new Jt;hidden=new Bt().makeScale(0,0,0);color=new Ct;bodies;roofs;glass;wheels;lamps;torsos;heads;legs;arms;pool(t,e,i,n=!1){const s=n?new Re({color:i}):new ae({color:i}),a=new ei(t,s,e);a.userData.dynamic=!0,a.frustumCulled=!1,a.instanceMatrix.setUsage(ss);for(let o=0;o<e;o++)a.setMatrixAt(o,this.hidden),a.setColorAt(o,this.color.set(16777215));return this.group.add(a),a}part(t,e,i,n,s,a,o=16777215,c=0){this.dummy.position.set(i,n,s),this.dummy.rotation.set(c,a,0,"YXZ"),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),t.setMatrixAt(e,this.dummy.matrix),t.setColorAt(e,this.color.setHex(o))}pedestrianPart(t,e,i,n,s,a=16777215,o=0){this.dummy.position.set(i,n,s),this.dummy.rotation.set(o,0,0),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.partMatrix.multiplyMatrices(this.pedestrianPose.matrix,this.dummy.matrix),t.setMatrixAt(e,this.partMatrix),t.setColorAt(e,this.color.setHex(a))}update(t){const e=t.traffic;if(this.group.visible=e.enabled,!e.enabled)return;const i=[7977170,14985100,13950659,12232919,10470836,14008719];for(const s of e.cars){const{id:a,x:o,y:c,z:l,heading:h}=s,d=Math.sin(h),f=Math.cos(h),u=f,g=-d;this.part(this.bodies,a,o,c+1,l,h,i[a]),this.part(this.roofs,a,o-d*.3,c+2.22,l-f*.3,h,i[a]),this.part(this.glass,a,o-d*.15,c+1.82,l-f*.15,h);for(let v=0;v<4;v++){const m=v%2?1:-1,p=v<2?1.8:-1.8;this.part(this.wheels,a*4+v,o+u*m*1.25+d*p,c+.64,l+g*m*1.25+f*p,h)}for(const v of[-1,1])this.part(this.lamps,a*2+(v===1?0:1),o+d*v*2.86,c+1.08,l+f*v*2.86,h,v===1?16772540:15890545)}const n=[15049093,8830661,12363473,10861437,14859632,9547482];for(const s of e.pedestrians){const{id:a,x:o,y:c,z:l,heading:h}=s;if(!s.active&&s.fallTime<=0){this.torsos.setMatrixAt(a,this.hidden),this.heads.setMatrixAt(a,this.hidden);for(let v=0;v<2;v++)this.legs.setMatrixAt(a*2+v,this.hidden),this.arms.setMatrixAt(a*2+v,this.hidden);continue}const d=s.fallTime>0,f=d?Math.min(1,(1-s.fallTime)/.18):0,u=f*f*(3-2*f)*Math.PI/2,g=d?0:Math.sin(s.stride*4)*.45;this.pedestrianPose.position.set(o,c+Math.sin(u)*.24,l),this.pedestrianPose.rotation.set(u,h,0,"YXZ"),this.pedestrianPose.updateMatrix(),this.pedestrianPart(this.torsos,a,0,1.15,0,n[a]),this.pedestrianPart(this.heads,a,0,1.85,0);for(let v=0;v<2;v++){const m=v?1:-1;this.pedestrianPart(this.legs,a*2+v,.17*m,.43,0,16777215,g*m),this.pedestrianPart(this.arms,a*2+v,.43*m,1.12,0,n[a],-g*m)}}for(const s of[this.bodies,this.roofs,this.glass,this.wheels,this.lamps,this.torsos,this.heads,this.legs,this.arms])s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0)}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{if(t instanceof Ot){t.geometry.dispose();for(const e of Array.isArray(t.material)?t.material:[t.material])e.dispose()}})}}function Fa(r){const t=new Map;for(const i of[...r.children]){if(!(i instanceof Ot)||Array.isArray(i.material))continue;const n=t.get(i.material)??[];n.push(i),t.set(i.material,n)}const e=[];for(const[i,n]of t){if(n.length<2)continue;const s=n.map(o=>(o.updateMatrix(),o.geometry.clone().applyMatrix4(o.matrix))),a=no(s);s.forEach(o=>o.dispose()),a&&(n.forEach(o=>r.remove(o)),r.add(new Ot(a,i)),e.push(a))}return e}const Tc=(r,t,e)=>({x:r.x+(t.x-r.x)*e,y:r.y+(t.y-r.y)*e,z:r.z+(t.z-r.z)*e,u:r.u+(t.u-r.u)*e});function wc(r,t){const e=[];for(let i=0;i<r.length;i++){const n=r[i],s=r[(i+1)%r.length],a=t(n),o=t(s);if(a>=0&&e.push(n),a>=0!=o>=0){let c=0,l=1;for(let h=0;h<12;h++){const d=(c+l)/2;t(Tc(n,s,d))>=0==a>=0?c=d:l=d}e.push(Tc(n,s,(c+l)/2))}}return e}function pl(r,t){const e=new me;e.setAttribute("position",new Yt(r,3)),e.computeVertexNormals();const i=new Ot(e,new ae({color:t,side:Ee}));return i.receiveShadow=!0,i}function $s(r,t){for(let e=1;e<t.length-1;e++)for(const i of[t[0],t[e],t[e+1]])r.push(i.x,i.y,i.z)}function Kn(r,t,e,i,n,s=!1,a=0){const o=[],c=a?r.branch(a).length:r.length,l=a?180:r.count,h=(f,u)=>{const g=r.routeAt(a,f),v=g.x+g.nx*u,m=g.z+g.nz*u;return{x:v,y:s&&u===e?-1.1:r.deckHeight(a,f,v,m)+i,z:m,u:f}},d=r.id==="orbit"&&!s?Math.ceil(Math.abs(e-t)/2):1;for(let f=0;f<l;f++)for(let u=0;u<d;u++){const g=f/l*c,v=(f+1)/l*c;if(Math.abs(r.routeAt(a,g).y-r.routeAt(a,v).y)>=9||s&&r.definition.overpass&&Math.max(r.routeAt(a,g).y,r.routeAt(a,v).y)>6.5)continue;if(s){const S=h((g+v)/2,t);if(r.junctionClearance(a,S.u,S.x,S.z)<3)continue}const m=t+(e-t)*u/d,p=t+(e-t)*(u+1)/d;let y=[h(g,m),h(v,m),h(v,p),h(g,p)];const _=!a&&!s&&t*e>0&&Math.min(Math.abs(t),Math.abs(e))>=r.halfWidth-.001,x=!!a&&t*e>0&&Math.min(Math.abs(t),Math.abs(e))>=r.width(a)-.001;if((a||s||_)&&(y=wc(y,S=>r.junctionClearance(a,S.u,S.x,S.z,!!a&&!x||_)+.06)),s||_||x){const S=r.width(a)+(s?r.verge(a):0);y=wc(y,T=>r.selfOverlapClearance(a,T.u,T.x,T.z,S)+.045)}if(r.id==="orbit"&&!s)for(const S of y)S.y=r.deckHeight(a,S.u,S.x,S.z)+i;$s(o,y)}return pl(o,n)}function Wr(r,t=0,e=.08,i=1.2,n=10215638){const s=[],a=fl(t);for(const o of r.barriers.segments){if(o.route!==t)continue;const c=[o.a,o.b].map(l=>{const h=r.routeAt(t,l.u);return[[-1,e],[-1,e+i],[1,e+i],[1,e]].map(([d,f])=>({...l,x:l.x+h.nx*a*.5*d,y:l.y+f,z:l.z+h.nz*a*.5*d}))});for(let l=0;l<4;l++)$s(s,[c[0][l],c[1][l],c[1][(l+1)%4],c[0][(l+1)%4]]);$s(s,c[0]),$s(s,c[1])}return pl(s,n)}function Gm(r){const t=new Ce,e=fs(86219),i=[],n=[],s=(c,l,h,d,f,u,g,v=0,m=!1)=>(m?n:i).push({x:c,y:l,z:h,sx:d,sy:f,sz:u,color:g,yaw:v});if(r.definition.theme==="city"){for(const l of r.crossings){const h=r.at(l),d=Math.atan2(h.tx,h.tz);for(let f=-7.7;f<=7.8;f+=1.7)s(h.x+h.nx*f,h.y+.065,h.z+h.nz*f,.95,.035,5,15855847,d);for(const f of[-1,1]){const u=h.x+h.nx*14.2*f,g=h.z+h.nz*14.2*f;s(u,h.y+2,g,.18,4,.18,5269107,0,!0),s(u,h.y+4.1,g,1.5,1.5,.14,4357039,d),s(u,h.y+4.1,g+.1,1,1,.12,14938347,d),s(u,h.y+.13,g,2.7,.26,7.5,12700617,d)}}const c=[11978452,13811892,10730182,13029827,11580106];for(let l=-220;l<=205;l+=38)for(let h=-225;h<=215;h+=38){if(r.nearAnyRoad(l,h)<29)continue;const d=15+e()*33,f=16+e()*6,u=16+e()*5,g=c[Math.floor(e()*c.length)];s(l,d/2-1,h,f,d,u,g),s(l,d-.7,h,f+1,.8,u+1,14674147);for(let v=5;v<d-3;v+=5)s(l,v,h+u*.5+.035,f*.77,2.3,.1,5075334),s(l+f*.5+.035,v,h,.1,2.3,u*.77,5075334);s(l,2.7,h+u*.5+.8,f*.85,.35,2,7576488),d>28&&s(l+3,d+2.5,h,1,6,1,7440532)}for(const l of[0,...r.branches.map(h=>h.route)]){const h=l?r.branch(l).length:r.length;for(let d=0;d<h;d+=8){const f=r.routeAt(l,d),u=Math.atan2(f.tx,f.tz);for(const g of[-1,1]){const v=r.width(l)+r.verge(l)+2.2,m=f.x+f.nx*v*g,p=f.z+f.nz*v*g;r.junctionClearance(l,d,m,p)<3||r.nearAnyRoad(m,p)<r.width(l)+r.verge(l)+.5||s(m,f.y-.02,p,3.2,.28,7.7,12043460,u)}}}}else if(r.definition.theme==="speedway"){s(0,-.7,0,105,.8,330,7252616),s(0,-.1875,0,65,.225,255,8501142),s(0,.025,0,42,.2,2,12769225);for(const c of[-1,1])for(let l=0;l<5;l++)for(let h=0;h<16;h++){const d=c*(111+l*2.5),f=-112+h*15;if(r.nearAnyRoad(d,f)<18)continue;const u=1.5+l*1.3;s(d,(u-1.12)/2,f,2.4,u+1.12,14.5,l%2?4350856:9152191);for(let g=0;g<5;g++)s(d,1.9+l*1.3,f-5+g*2.4,.75,.8,.7,[9030095,15124363,14214107,12882853][(h+g+l)%4])}for(const c of[-1,1])for(const l of[-130,0,130])s(c*134,12,l,.65,26,.65,8623784,0,!0),s(c*134,-1,l,1.6,.24,1.6,10333113),s(c*134,25,l,8,1.1,2.1,15068393);s(40,-.61,0,14,1.02,70,8623784),s(40,3.4,0,14,7,70,11978967),s(40,7.3,0,18,.8,75,15002597);for(let c=0;c<7;c++)s(31.8,3.2,-27+c*9,.1,3.4,5.5,3497079);s(0,6,-190,28,10,2,2903141),s(0,6,-188.9,24,6,.12,11258578);for(const c of[-10,10])s(c,-.06,-190,.65,2.12,.65,8623784,0,!0)}const a=new Jt,o=new Ct;for(const[c,l]of[[i,new ie(1,1,1)],[n,new qe(.5,.5,1,8)]]){if(!c.length){l.dispose();continue}const h=new ei(l,new ae({color:16777215}),c.length);h.receiveShadow=!0,c.forEach((d,f)=>{a.position.set(d.x,d.y,d.z),a.scale.set(d.sx,d.sy,d.sz),a.rotation.set(0,d.yaw,0),a.updateMatrix(),h.setMatrixAt(f,a.matrix),h.setColorAt(f,o.setHex(d.color))}),t.add(h)}return t}function Wm(r){const t=r.definition.points[0][0]/-155,e=new Ce,i=fs(60417),n=[],s=[],a=[],o=v=>10+3*Math.sin(v/r.length*Math.PI*6)+2*Math.cos(v/r.length*Math.PI*14),c=(v,m,p)=>[v.x+v.nx*m,v.y+p,v.z+v.nz*m],l=(v,m,p,y,_)=>{if([v,m,p,y].some(S=>r.nearAnyRoad(S[0],S[2])<13.15))return;const x=new Ct(_);for(const S of[v,m,p,v,p,y])n.push(...S),s.push(x.r,x.g,x.b)},h=Math.ceil(r.length/4);for(let v=0;v<h;v++){const m=r.at(v/h*r.length),p=r.at((v+1)/h*r.length),y=o(m.s),_=o(p.s),x=c(m,-14.5,-.8),S=c(p,-14.5,-.8),T=c(m,-16.4,y*.48),A=c(p,-16.4,_*.48),P=c(m,-19.5,y),E=c(p,-19.5,_);l(x,S,A,T,v%4===0?8491140:7372663),l(T,A,E,P,v%3===0?10332312:9016971),l(P,E,c(p,-28,_),c(m,-28,y),6455133),l(c(m,13.3,-.3),c(p,13.3,-.3),c(p,26,-7),c(m,26,-7),6388825),l(c(m,26,-7),c(p,26,-7),[p.x+p.nx*40,-1.2,p.z+p.nz*40],[m.x+m.nx*40,-1.2,m.z+m.nz*40],7243111)}const d=new me;d.setAttribute("position",new Yt(n,3)),d.setAttribute("color",new Yt(s,3)),d.computeVertexNormals(),e.add(new Ot(d,new ae({vertexColors:!0,side:Ee,flatShading:!0})));for(const[v,m,p,y,_]of[[-15,-20,55,92,7636851],[-63,-15,34,64,7439980],[18,35,43,73,8163443]]){const x=new Ot(new Fn(p*t,y,9,4),new ae({color:_,flatShading:!0}));x.position.set(v*t,y/2-1.2,m*t),e.add(x)}for(let v=30;v<r.length;v+=21){const m=r.at(v),p=m.x-m.nx*23.5,y=m.z-m.nz*23.5;r.nearAnyRoad(p,y)>19&&a.push({x:p,y:m.y+o(v),z:y,height:8+i()*4});const _=m.x+m.nx*35,x=m.z+m.nz*35;r.nearAnyRoad(_,x)>27&&a.push({x:_,y:Math.max(-1.2,m.y-13),z:x,height:9+i()*6})}const f=new ei(new qe(.35,.55,1,6),new ae({color:8087888}),a.length),u=new ei(new Fn(1,1,7),new ae({color:16777215,flatShading:!0}),a.length*2),g=new Jt;return a.forEach((v,m)=>{g.position.set(v.x,v.y+v.height*.24,v.z),g.scale.set(1,v.height*.48,1),g.updateMatrix(),f.setMatrixAt(m,g.matrix);for(let p=0;p<2;p++)g.position.set(v.x,v.y+v.height*(p?.79:.56),v.z),g.scale.set(v.height*(p?.23:.31),v.height*.57,v.height*(p?.23:.31)),g.updateMatrix(),u.setMatrixAt(m*2+p,g.matrix),u.setColorAt(m*2+p,new Ct(p?4550230:3562824))}),e.add(f,u),e}class Xm{constructor(t){this.scene=t}scene;groups=new Map;add(t,e,i,n,s,a,o,c,l=0,h=0,d=0){if(!this.groups.has(t)){const f=t==="box"?new ie(1,1,1):t==="cone"?new Fn(.5,1,6):t==="cylinder"?new qe(.5,.5,1,8):t==="sphere"?new Ji(.5,1):new us(.5,6,4);this.groups.set(t,{geometry:f,items:[]})}this.groups.get(t).items.push({position:new D(e,i,n),scale:new D(s,a,o),rotation:new Xe(d,l,h,"YXZ"),color:new Ct(c)})}finish(){const t=new Bt,e=new tn;for(const{geometry:i,items:n}of this.groups.values()){const s=new ei(i,new ae({color:16777215}),n.length);n.forEach((a,o)=>{e.setFromEuler(a.rotation),t.compose(a.position,e,a.scale),s.setMatrixAt(o,t),s.setColorAt(o,a.color)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,this.scene.add(s)}}}class Ac{constructor(t,e){this.scene=t,this.path=e;const i=new Set(t.children),n=fs(3381),s=new Xm(t),a=[16171118,15239532,7650499,16049322,15379090,10268382,15987679],o=e.definition.palette,c=e.definition.theme==="mountain",l=e.definition.theme==="city",h=e.definition.theme==="speedway",d=o?.sky??(e.id==="skyfall"?11982575:e.id==="terraces"?12182751:10805229);this.clearSky=d,t.background=new Ct(d),t.fog=new Js(d,210,760);const f=new sl(16777215,7968375,2.45);this.hemisphere=f,t.add(f);const u=new ol(16774879,2.4);u.position.set(-80,180,80),this.sun=u,t.add(u),this.water=new Ot(new Ii(4e3,4e3),new ae({color:4768722})),this.water.rotation.x=-Math.PI/2,this.water.position.y=-3,t.add(this.water);const g=(y,_,x,S)=>{const T=new Ot(new qe(1,1,3,80),new ae({color:S}));T.scale.set(y,1,_),T.position.set(20,x-1.5,50),t.add(T)},v=e.id!=="coast";g(v?325:245,v?390:300,-1.7,c?8161648:16311728),g(v?300:220,v?370:281,-1.12,o?.grass??(e.id==="skyfall"?9024931:9752192)),t.add(Kn(e,-e.halfWidth,e.halfWidth,.02,o?.road??5466998));for(const y of[-1,1])t.add(Kn(e,y*e.halfWidth,y*(e.halfWidth+e.shoulder),0,o?.grass??10408577)),t.add(Kn(e,y*(e.halfWidth+e.shoulder),y*(e.halfWidth+e.shoulder+2.5),0,o?.grass??9094009,!0));for(let y=0;y<e.length;y+=2){const _=e.at(y),x=Math.atan2(_.tx,_.tz);for(const S of[-1,1]){const T=e.halfWidth-.25;e.railOpening(y,S,T)||s.add("box",_.x+_.nx*T*S,e.deckHeight(0,y,_.x+_.nx*T*S,_.z+_.nz*T*S)+.045,_.z+_.nz*T*S,.6,.1,2.08,Math.floor(y/4)%2?15921120:16744796,x,_.bank)}Math.floor(y)%10<4&&s.add("box",_.x,_.y+.055,_.z,.17,.025,1.85,12372165,x)}t.add(Wr(e,0,.08,l?.32:1.2,o?.rail??10215638));for(const y of e.branches){const _=y.route;t.add(Kn(e,-e.width(_),e.width(_),.04,l?o.road:12622439,!1,_));for(const x of[-1,1])t.add(Kn(e,x*e.width(_),x*(e.width(_)+e.verge(_)),0,l?o.grass:15255703,!1,_));t.add(Wr(e,_,.08,l?.32:1.1,l?o.rail:15844738)),l||t.add(Wr(e,_,-.65,.65,9204566));for(let x=18;x<y.length-18;x+=3){const S=e.routeAt(_,x),T=Math.atan2(S.tx,S.tz);if(e.junctionClearance(_,x,S.x,S.z)>0&&(Math.floor(x)%15<3&&s.add("box",S.x,S.y+.08,S.z,l?.17:.7,.04,1.8,l?12372165:16116924,T),!l&&Math.floor(x)%24<3))for(const A of[-1,1]){const P=S.x+S.nx*4.5*A,E=S.z+S.nz*4.5*A,M=e.id==="orbit"?Math.min(...[-.8,.8].flatMap(R=>[-.8,.8].map(I=>e.deckHeight(_,x,P+R,E+I))))-.12:S.y;e.overLowerRoad(P,E,S.y)||s.add("box",P,(M-1.5)/2,E,1.4,M+1.1,1.4,12167823,T)}}if(!l){const x=e.at(y.from-18),S=this.sign("SHORTCUT  ↗",16762224,11,2.5);S.position.set(x.x,x.y+6,x.z),S.rotation.y=Math.atan2(-x.tx,-x.tz),t.add(S)}}if(l){const y=e.at(e.shortcut.from-25),_=this.sign("CENTRAL  /  EAST SUPPLY",12178139,21,2.7);_.position.set(y.x,y.y+6.5,y.z),_.rotation.y=Math.atan2(-y.tx,-y.tz),t.add(_)}if((l||h)&&t.add(Gm(e)),c&&t.add(Wm(e)),v&&!c)for(let y=35;y<e.length;y+=30){const _=e.at(y);if(!(_.y<8))for(const x of[-1,1]){const S=_.x+_.nx*7*x,T=_.z+_.nz*7*x,A=e.id==="orbit"?Math.min(...[-1.1,1.1].flatMap(P=>[-1.1,1.1].map(E=>e.deckHeight(0,y,S+P,T+E))))-.12:_.y;e.overLowerRoad(S,T,_.y)||s.add("box",S,(A-1.2)/2,T,2.2,A+1.2,2.2,e.id==="skyfall"?14212580:13939336)}}if(e.id==="orbit"){const y=e.definition.points[0][0]/-180,_=-100*y,x=-75*y;s.add("cylinder",_,.5,x,30*y,3,30*y,15191785),s.add("cylinder",_,3.4,x,1.3,5,1.3,8371335),s.add("sphere",_,6.3,x,3,3,3,16570476);for(let T=0;T<6;T++){const A=T/6*Math.PI*2;s.add("sphere",_+Math.cos(A)*3,6,x+Math.sin(A)*3,3.8,1.8,3.8,15775961)}for(let T=0;T<10;T++){const A=T/10*Math.PI*2;s.add("sphere",_+Math.cos(A)*10*y,2.3,x+Math.sin(A)*10*y,2,2,2,13146335)}const S=this.sign("BLOOM RIDGE / GARDEN",14270965,18,3);S.position.set(_,11,x),t.add(S)}if(e.id==="sunport"){const y=e.definition.points[0][0]/-105;for(let _=0;_<9;_++){const x=-149*y,S=(-160+_*39)*y;if(!(e.nearAnyRoad(x,S)<22)){s.add("box",x,2,S,13,6,26,[16760680,7390680,15900563][_%3]);for(let T=-4;T<=4;T+=2)s.add("box",x+T,2,S+13.05,.3,5.5,.1,16377281)}}}if(e.definition.overpass){const y=e.points.reduce((x,S)=>x.y>S.y?x:S),_=this.sign("CROSSWIND / UPPER DECK",11392767,19,2.6);_.position.set(y.x,y.y+6,y.z),_.rotation.y=Math.atan2(-y.tx,-y.tz),t.add(_)}if(e.drop){const y=e.drop,_=e.at(y.from-.5),x=Math.atan2(_.tx,_.tz),S=this.sign("SKY DROP  ↓",16760165,15,3);S.position.set(_.x-_.tx*16,_.y+7,_.z-_.tz*16),S.rotation.y=x+Math.PI,t.add(S);for(const T of[-1,1])s.add("box",_.x+_.nx*11.5*T,_.y+2.8,_.z+_.nz*11.5*T,.7,5.5,.7,16755037,x);s.add("box",_.x,_.y+.12,_.z,17.6,.24,1.6,16763750,x);for(let T=y.from;T<y.to;T+=6){const A=e.at(T);s.add("box",A.x,A.y-.5,A.z,26,1,7,4812165,Math.atan2(A.tx,A.tz))}}for(const y of[64,390,750])for(let _=0;_<3;_++){const x=e.at(y+_*1.6),S=Math.atan2(x.tx,x.tz),T=e.at(x.s-.5),A=e.at(x.s+.5),P=-Math.atan(A.y-T.y);s.add("box",x.x,x.y+.04,x.z,6,.035,.65,14482007,S,x.bank,P)}for(let y=0;y<(c||l||h?0:88);y++){const _=y/88*e.length,x=e.at(_),S=y%2?1:-1,T=19+n()*8,A=x.x+x.nx*T*S,P=x.z+x.nz*T*S;e.nearAnyRoad(A,P)<17||this.palm(s,A,-1,P,7+n()*5,n()*6.28)}for(let y=0;y<(c||l||h?0:200);y++){const _=-160+n()*370,x=-185+n()*430,S=e.project(_,x);if(e.nearAnyRoad(_,x)<25||S.distance>85||((_-20)/210)**2+((x-50)/265)**2>.96)continue;const T=7+n()*7,A=7+n()*6,P=7+n()*17,E=a[Math.floor(n()*a.length)],M=Math.round(n()*3)*Math.PI/2;s.add("box",_,P/2-1,x,T,P,A,E,M),s.add("box",_,P-.6,x,T+1,.7,A+1,16249052,M),s.add("box",_,P+1,x,T*.7,2.5,A*.6,E,M);for(let R=3;R<P-1;R+=3.3)for(let I=-1;I<=1;I++)s.add("box",_+I*T*.26,R,x+A/2+.025,1.15,1.65,.1,4557204);s.add("box",_,3.1,x+A/2+.9,T*.85,.4,2.6,y%2?16748385:7587790),s.add("box",_,.8,x+A/2+.08,1.8,3.3,.12,3896704)}for(let y=0;y<(c?16:34);y++){const _=e.at(50+y*37),x=y%2?1:-1,S=_.x+_.nx*16*x,T=_.z+_.nz*16*x;if(e.junctionClearance(0,_.s,S,T)<1.5)continue;const A=h?-1.12:_.y,P=_.y+7;s.add("cylinder",S,(A+P)/2,T,.2,P-A,.2,4549235),h&&s.add("box",S,A+.12,T,.8,.24,.8,8623784),s.add("sphere",S,_.y+7.1,T,1.1,.55,1.1,16774607)}for(let y=0;y<20;y++){const _=e.at(110+y*61),x=(e.halfWidth+2.5)*(y%2?1:-1),S=_.x+_.nx*x,T=_.z+_.nz*x;if(e.junctionClearance(0,_.s,S,T)<1.5)continue;const A=e.deckHeight(0,_.s,S,T),P=Math.atan2(_.tx,_.tz),E=e.at(_.s-1),M=e.at(_.s+1),R=e.deckHeight(0,E.s,E.x+E.nx*x,E.z+E.nz*x),I=e.deckHeight(0,M.s,M.x+M.nx*x,M.z+M.nz*x),z=-Math.atan((I-R)/2),B=new D(0,1,0).applyEuler(new Xe(z,P,_.bank,"YXZ"));s.add("cone",S+B.x*.655,A+B.y*.655,T+B.z*.655,.72,1.05,.72,16745298,P,_.bank,z),s.add("box",S+B.x*.065,A+B.y*.065,T+B.z*.065,.87,.13,.87,15657180,P,_.bank,z),this.obstacles.push({x:S,y:A,z:T,radius:.35})}for(let y=0;y<38;y++){const _=n()*Math.PI*2,x=20+Math.cos(_)*(235+n()*14),S=50+Math.sin(_)*(287+n()*10);s.add("sphere",x,-1.8,S,6+n()*9,3+n()*7,6+n()*10,10795183)}for(let y=0;y<15;y++){const _=-700+n()*1400,x=-700+n()*1400;for(let S=0;S<4;S++)s.add("sphere",_+S*11,80+n()*12,x,29,9,15,15333623)}for(let y=0;y<90;y++){const _=-600+n()*1200,x=-500+n()*1100;((_-20)/250)**2+((x-50)/305)**2<1.1||s.add("box",_,-2.92,x,4+n()*12,.03,.28,8837598)}const m=e.at(e.length-70);for(let y=0;y<3;y++)for(let _=0;_<13;_++){const x=(_-6)*1.6,S=18+y*1.4,T=m.x+m.nx*S+m.tx*x,A=m.z+m.nz*S+m.tz*x,P=m.y+y*.9+.3;s.add("box",T,h?(P-1.12)/2:m.y+y*.9,A,1.4,h?P+1.12:.6,1.2,15387024,Math.atan2(m.tx,m.tz)),s.add("sphere",T,m.y+(h?.725:1.1)+y*.9,A,.75,.85,.75,a[(_+y)%a.length]),s.add("sphere",T,m.y+(h?1.375:1.75)+y*.9,A,.47,.47,.47,15916730)}this.gate=this.makeGate(),t.add(this.gate);const p=c?[[e.length*.18,"MISTPINE / CLIMB",12702363],[e.length*.53,"RIDGELINE / SUMMIT",15780744],[e.length*.8,"FOREST / DESCENT",11523012]]:l?[[e.length*.4,"NEON / HARBOR",10865624],[e.length*.66,"CITY / CROSSING",12899013],[e.length*.9,"DOWNTOWN",12175834]]:h?[[e.length*.2,"AZURE / SPEEDWAY",11323368],[e.length*.55,"BANKED / TURN",12637153],[e.length*.85,"CHASE / THE LINE",11061471]]:[[230,"SUNNY SIDE",16751462],[620,"COAST CLUB",5555658],[1060,"TIDEBREAK",15268697]];for(const[y,_,x]of p){const S=e.at(y),T=this.sign(_,x,13,4.5);if(T.position.set(S.x+S.nx*18,S.y+6,S.z+S.nz*18),T.rotation.y=Math.atan2(-S.nx,-S.nz),t.add(T),h){const A=T.position.y-2.25;for(const P of[-1,1]){const E=T.position.x+S.tx*4.8*P,M=T.position.z+S.tz*4.8*P;s.add("cylinder",E,(A-1.12)/2,M,.32,A+1.12,.32,7440791),s.add("box",E,-1,M,1,.24,1,10530747)}}}s.finish();for(const y of[...t.children])i.has(y)||this.group.add(y);t.add(this.group)}scene;path;obstacles=[];group=new Ce;water;hemisphere;sun;clearSky=10805229;gate;signTextures=[];setWeather(t){const e=t==="sunset",i=t==="rain",n=i?1583945:e?15311248:this.clearSky;this.scene.background.setHex(n),this.scene.fog=new Js(n,i?105:210,i?510:760),this.hemisphere.color.setHex(i?11257838:e?16766653:16777215),this.hemisphere.groundColor.setHex(i?3424856:e?10250352:7968375),this.hemisphere.intensity=i?1.55:e?1.9:2.45,this.sun.color.setHex(i?10467823:e?16756333:16774879),this.sun.intensity=i?.8:e?2.1:2.4,this.sun.position.set(-80,e?40:180,80),this.water.material.color.setHex(i?2573667:e?10978467:4768722)}dispose(){this.scene.remove(this.group);const t=new Set,e=new Set;this.group.traverse(i=>{if(i instanceof Ot){t.add(i.geometry);for(const n of Array.isArray(i.material)?i.material:[i.material])e.add(n)}}),t.forEach(i=>i.dispose()),e.forEach(i=>i.dispose()),this.signTextures.forEach(i=>i.dispose())}palm(t,e,i,n,s,a){t.add("cylinder",e,i+s*.5,n,.63,s,.63,12687718,0,.06);for(let o=0;o<6;o++){const c=a+o*Math.PI/3;t.add("sphere",e+Math.cos(c)*2,i+s+.2,n+Math.sin(c)*2,1.3,.65,6.8,o%2?4368499:6340221,-c+Math.PI/2,.12)}t.add("sphere",e,i+s,n,1.3,1,1.3,8873542)}sign(t,e,i,n){const s=document.createElement("canvas");s.width=1024,s.height=256;const a=s.getContext("2d");a.fillStyle="#"+e.toString(16).padStart(6,"0"),a.fillRect(0,0,1024,256),a.fillStyle="#164b54",a.textAlign="center",a.textBaseline="middle",a.font="italic 900 112px Arial",a.fillText(t,512,139,940);const o=new as(s);return o.colorSpace=ye,this.signTextures.push(o),new Ot(new Ii(i,n),new Re({map:o,side:Ee}))}makeGate(){const t=new Ce,e=this.path.at(0);t.position.set(e.x,e.y,e.z),t.rotation.y=Math.atan2(e.tx,e.tz);const i=new ae({color:16750182});for(const h of[-11,11]){const d=new Ot(new ie(1.6,10,1.6),i);d.position.set(h,5,0),t.add(d)}const n=new Ot(new ie(24,2.5,1.4),i);n.position.y=10,t.add(n);const s=this.sign("TIDEBREAK",15268697,18,2.5);s.position.set(0,10,-.73),s.rotation.y=Math.PI,t.add(s);const a=this.sign("TIDEBREAK",15268697,18,2.5);a.position.set(0,10,.73),t.add(a);const o=new ae({color:16118239}),c=new ae({color:2509140}),l=new ie(1.1,.035,1.05);for(let h=0;h<16;h++)for(let d=0;d<3;d++){const f=new Ot(l,(h+d)%2?c:o);f.position.set((h-7.5)*1.1,.09,(d-1)*1.05),t.add(f)}for(let h=0;h<8;h++){const d=new Ot(new ie(2.4,.025,.15),o);d.position.set(h%2?-2.4:2.4,.08,-9-Math.floor(h/2)*5.7),t.add(d)}return Fa(t),t}}const wn=[{id:"ripple",name:"漣漪",subtitle:"RIPPLE · 均衡型",color:15268697,speed:35,accel:17,turn:1,stats:[4,4,4]},{id:"comet",name:"珊瑚彗星",subtitle:"COMET · 極速型",color:16740430,speed:37,accel:15.7,turn:.91,stats:[5,3,3]},{id:"skipper",name:"海風",subtitle:"SKIPPER · 靈巧型",color:5562367,speed:33.5,accel:18.8,turn:1.1,stats:[3,5,5]}],so=()=>({throttle:0,brake:0,steer:0,drift:!1,nitro:!1,item:!1,itemRight:!1}),ro=1;class ao{constructor(t,e){this.spec=t,this.track=e,this.projection=e.project(0,0)}spec;track;x=0;y=0;z=0;vx=0;vz=0;heading=0;steering=0;speed=0;drifting=!1;driftDirection=0;driftCharge=0;driftLevel=0;nitroCharges=1;nitroMeter=0;nitroTime=0;turboTime=0;turboLevel=0;boostEvent=0;collisionEvent=0;resetEvent=0;miniTurboEvent=0;nitroLatch=!1;impactCooldown=0;offroad=!1;surface="ROAD";progress=0;projection;safeS=0;distanceTravelled=0;vy=0;airborne=!1;pitch=0;roll=0;landingEvent=0;route=0;routeU=0;itemType=0;itemCharges=0;itemLatch=!1;itemCooldown=0;itemTypeRight=0;itemChargesRight=0;itemLatchRight=!1;itemCooldownRight=0;lastPickupType=0;lastPickupSlot=0;shieldEvent=0;shieldImpactTime=0;shieldTime=0;itemBoostTime=0;pulseTime=0;hitTime=0;itemEvent=0;pickupEvent=0;spinPhase=0;spinEvent=0;hitSlide=0;wetRoad=!1;place(t,e=0){const i=this.track.at(t);this.x=i.x+i.nx*e,this.z=i.z+i.nz*e,this.y=this.track.deckHeight(0,i.s,this.x,this.z),this.roll=i.bank,this.vy=0,this.airborne=!1,this.pitch=0,this.route=0,this.routeU=i.s,this.hitTime=0,this.spinPhase=0,this.hitSlide=0,this.heading=Math.atan2(i.tx,i.tz),this.vx=0,this.vz=0,this.speed=0,this.steering=0,this.drifting=!1,this.driftCharge=0,this.driftLevel=0,this.nitroTime=0,this.turboTime=0,this.projection=this.track.project(this.x,this.z,Math.floor(i.s/this.track.length*this.track.count),0,this.y),this.progress=i.s,this.safeS=i.s}reset(t=this.safeS,e=0){this.place(t,e),this.resetEvent++}awardNitro(t){for(this.nitroMeter+=t;this.nitroMeter>=1&&this.nitroCharges<3;)this.nitroCharges++,this.nitroMeter--;this.nitroCharges===3&&(this.nitroMeter=Math.min(this.nitroMeter,.99))}get boost(){return this.nitroTime>0||this.turboTime>0||this.itemBoostTime>0}step(t,e,i=[],n=1){if(this.impactCooldown=Math.max(0,this.impactCooldown-e),this.nitroTime=Math.max(0,this.nitroTime-e),this.turboTime=Math.max(0,this.turboTime-e),this.shieldImpactTime=Math.max(0,this.shieldImpactTime-e),this.itemCooldownRight=Math.max(0,this.itemCooldownRight-e),this.itemCooldown=Math.max(0,this.itemCooldown-e),this.shieldTime=Math.max(0,this.shieldTime-e),this.itemBoostTime=Math.max(0,this.itemBoostTime-e),this.pulseTime=Math.max(0,this.pulseTime-e),this.hitTime>0){if(this.hitTime=Math.max(0,this.hitTime-e),this.spinPhase=Math.min(1,this.spinPhase+e/ro),this.hitSlide){this.steering=0,this.nitroLatch=t.nitro,this.stepSlideHit(e,i);return}this.vx=this.vz=this.speed=this.steering=0,this.nitroLatch=t.nitro,this.updateHeight(e,0);return}t.nitro&&!this.nitroLatch&&this.nitroCharges>0&&this.nitroTime<=0&&this.speed>3&&(this.nitroCharges--,this.nitroTime=2.1,this.boostEvent++),this.nitroLatch=t.nitro;const s=this.track.drivingProjection(this.x,this.z,this.projection);this.projection=s,this.offroad=Math.abs(s.lateral)>this.track.width(s.route),this.surface=this.airborne?"AIR":this.offroad?"GRASS":s.route?"SHORTCUT":"ROAD";const a=this.x,o=this.z;let c=this.vx*Math.sin(this.heading)+this.vz*Math.cos(this.heading);const l=this.spec.handlingScale??1,h=this.spec.driftChargeScale??1;this.steering=$i(this.steering,t.steer,7*l,e),!this.drifting&&t.drift&&Math.abs(t.steer)>.2&&c>11&&!this.airborne&&!this.offroad&&(this.drifting=!0,this.driftDirection=Math.sign(t.steer),this.driftCharge=0),this.drifting&&(!t.drift||c<7||this.offroad||this.airborne)&&(this.driftLevel>0&&!this.offroad&&(this.turboLevel=this.driftLevel,this.turboTime=[0,.65,1.15,1.8][this.driftLevel],this.miniTurboEvent++,this.boostEvent++,this.awardNitro([0,.2,.36,.55][this.driftLevel])),this.drifting=!1,this.driftCharge=0,this.driftLevel=0),this.drifting&&(this.driftCharge=Ie(this.driftCharge+e*(.88+Math.abs(this.steering)*.12)*h,0,3.5),this.driftLevel=this.driftCharge>=2.7?3:this.driftCharge>=1.65?2:this.driftCharge>=.65?1:0,this.awardNitro(e*.065*h));const f=(1.82-.57*Ie(Math.abs(c)/this.spec.speed,0,1.5))*this.spec.turn*(this.airborne?.48:1),u=this.drifting?this.steering*.88+this.driftDirection*.32:this.steering;this.heading=oi(this.heading+u*f*Ie(Math.abs(c)/9,0,1)*Math.sign(c||1)*e);const g=Math.sin(this.heading),v=Math.cos(this.heading),m=v,p=-g;c=this.vx*g+this.vz*v;let y=this.vx*m+this.vz*p,_=this.spec.speed*n;this.itemBoostTime>0?_*=1.42:this.nitroTime>0?_*=1.36:this.turboTime>0&&(_*=1+[0,.1,.17,.25][this.turboLevel]),this.offroad&&(_*=.9),t.throttle>0&&(c+=this.spec.accel*t.throttle*(this.boost?1.6:1)*e);const x=this.track.ahead(s,3),S=this.track.routeAt(s.route,s.u-3),T=Math.max(-.45,Math.min(.45,(x.y-S.y)/6));!this.airborne&&!this.track.inDrop(s.s)&&(c-=9.8*T*(g*s.tx+v*s.tz)*e),t.brake>0&&(c>1?c=Math.max(-.2,c-31*l*l*t.brake*e):c-=this.spec.accel*.54*e),!t.throttle&&!t.brake&&(c*=Math.exp(-.43*e)),c>_&&(c=$i(c,_,this.offroad?1.5:2.7,e)),c=Ie(c,-8,_+1.5);const A=(this.airborne?2:this.drifting?2.4:this.offroad?7.6:9.5)*(this.wetRoad&&!this.airborne?.78:1),P=this.drifting?-this.driftDirection*Math.abs(c)*.19:this.wetRoad&&!this.airborne?-this.steering*Math.abs(c)*.045:0,E=this.airborne?0:Math.abs(s.bank);y=$i(y,P,A*l*(1+E*.65),e),y=Ie(y,-14,14),this.vx=g*c+m*y,this.vz=v*c+p*y;const M=Math.max(1,Math.ceil(Math.hypot(this.vx,this.vz)*e/.5));for(let R=0;R<M;R++)this.x+=this.vx*e/M,this.z+=this.vz*e/M,this.resolveWorldContacts(i);this.projection=this.track.drivingProjection(this.x,this.z,s),this.progress=this.projection.s,this.route=this.projection.route,this.routeU=this.projection.u,this.updateHeight(e,T),this.speed=Math.hypot(this.vx,this.vz),this.distanceTravelled+=Math.hypot(this.x-a,this.z-o),(this.projection.distance>30||!Number.isFinite(this.x+this.z+this.vx+this.vz))&&this.reset()}stepSlideHit(t,e){const i=this.track.drivingProjection(this.x,this.z,this.projection),n=this.x,s=this.z,a=Math.sin(this.heading),o=Math.cos(this.heading),c=Math.hypot(this.vx,this.vz),l=(this.vx*o-this.vz*a)*Math.exp(-2.2*t),h=Math.sqrt(Math.max(0,c*c-l*l))*Math.sign(this.vx*a+this.vz*o||1);this.vx=a*h+o*l,this.vz=o*h-a*l;const d=Math.max(1,Math.ceil(c*t/.5));for(let g=0;g<d;g++)this.x+=this.vx*t/d,this.z+=this.vz*t/d,this.resolveWorldContacts(e);this.projection=this.track.drivingProjection(this.x,this.z,i),this.progress=this.projection.s,this.route=this.projection.route,this.routeU=this.projection.u,this.offroad=Math.abs(this.projection.lateral)>this.track.width(this.route);const f=this.track.ahead(this.projection,3),u=this.track.routeAt(this.route,this.routeU-3);this.speed=Math.hypot(this.vx,this.vz),this.updateHeight(t,Ie((f.y-u.y)/6,-.45,.45)),this.surface=this.airborne?"AIR":this.offroad?"GRASS":this.route?"SHORTCUT":"ROAD",this.distanceTravelled+=Math.hypot(this.x-n,this.z-s),(this.projection.distance>30||!Number.isFinite(this.x+this.z+this.vx+this.vz))&&this.reset()}resolveWorldContacts(t=[]){let e=this.track.barriers.resolve(this),i=!1;const n=Math.sin(this.heading),s=Math.cos(this.heading);for(const a of t)if(!(a.y!==void 0&&Math.abs(this.y-a.y)>2.5)&&!(Math.abs(this.x-a.x)>a.radius+2.1||Math.abs(this.z-a.z)>a.radius+2.1)){if(a.halfLength!==void 0&&a.halfWidth!==void 0&&a.heading!==void 0){const o=Math.sin(a.heading),c=Math.cos(a.heading),l=this.x-a.x,h=this.z-a.z;let d=1/0,f=0,u=0,g=!1;for(const[v,m]of[[n,s],[s,-n],[o,c],[c,-o]]){const p=1.85*Math.abs(n*v+s*m)+1.34*Math.abs(s*v-n*m),y=a.halfLength*Math.abs(o*v+c*m)+a.halfWidth*Math.abs(c*v-o*m),_=l*v+h*m,x=p+y-Math.abs(_);if(x<=0){g=!0;break}if(x<d){d=x;const S=Math.sign(_)||1;f=v*S,u=m*S}}if(!g){this.x+=f*(d+.005),this.z+=u*(d+.005),i=!0;const v=(this.vx-(a.vx??0))*f+(this.vz-(a.vz??0))*u;v<0&&(e=Math.max(e,-v),this.vx-=f*v*1.15,this.vz-=u*v*1.15)}continue}for(const o of[-.45,0,.7]){const c=this.x+n*o-a.x,l=this.z+s*o-a.z,h=a.radius+1.25,d=Math.hypot(c,l);if(d>=h)continue;const f=d>.001?c/d:-n,u=d>.001?l/d:-s;this.x+=f*(h-d+.01),this.z+=u*(h-d+.01),i=!0;const g=this.vx*f+this.vz*u;g<0&&(e=Math.max(e,-g),this.vx-=f*g*1.4,this.vz-=u*g*1.4)}}i&&(e=Math.max(e,this.track.barriers.resolve(this))),e>1.2&&this.impactCooldown<=0&&(this.collisionEvent++,this.impactCooldown=.25),this.speed=Math.hypot(this.vx,this.vz)}updateHeight(t,e){const i=this.projection.y,n=oi(this.heading-Math.atan2(this.projection.tx,this.projection.tz));this.roll=$i(this.roll,this.airborne?0:this.projection.bank*Math.cos(n),12,t),!this.airborne&&this.y-i>.8&&(this.airborne=!0,this.vy=0),this.airborne?(this.vy-=18*t,this.y+=this.vy*t,this.y<=i&&(this.y=i,this.vy=0,this.airborne=!1,this.landingEvent++)):(this.y=i,this.vy=0),this.pitch=$i(this.pitch,this.airborne?Math.max(-.2,Math.min(.58,-Math.atan2(this.vy,Math.max(12,this.speed)))):-Math.atan(e),this.airborne?2.6:7,t)}}function qm(r){const t=new Set;for(let e=0;e<r.length;e++)for(let i=e+1;i<r.length;i++){const n=r[e],s=r[i],a=s.x-n.x,o=s.z-n.z,c=Math.hypot(a,o),l=2.3;if(c>=l||Math.abs(n.y-s.y)>2.8||n.hitTime>0||s.hitTime>0||n.shieldImpactTime>0||s.shieldImpactTime>0||n.shieldTime>0&&s.itemBoostTime>0||s.shieldTime>0&&n.itemBoostTime>0)continue;const h=c>.001?a/c:1,d=c>.001?o/c:0,f=(l-c)*.5;t.add(n),t.add(s),n.x-=h*f,n.z-=d*f,s.x+=h*f,s.z+=d*f;const u=(s.vx-n.vx)*h+(s.vz-n.vz)*d;if(u<0){const g=-u*.56;n.vx-=h*g,n.vz-=d*g,s.vx+=h*g,s.vz+=d*g}}for(const e of t)e.resolveWorldContacts()}class $m{constructor(t,e,i="normal"){this.index=t,this.skill=e,this.difficulty=i,this.lane=(t%3-1)*2.8,this.random=fs(1103+t*117),this.nitroWait=1.5+this.random()*2}index;skill;difficulty;steering=0;stuck=0;recoveries=0;resetSeen=0;recoveryTime=0;avoidShortcut=!1;lane;random;nitroWait;controls(t,e,i,n,s=0,a=[]){const o=t.track,c=t.progress,l=s?1:Pn[this.difficulty].pace,h=l>1;t.resetEvent!==this.resetSeen&&(this.resetSeen=t.resetEvent,this.avoidShortcut=!0),this.stuck=t.hitTime<=0&&t.speed<2?this.stuck+i:0,this.recoveryTime=Math.max(0,this.recoveryTime-i),this.stuck>.6&&this.recoveryTime===0&&Math.abs(t.projection.lateral)>o.width(t.route)*.75&&(this.recoveryTime=1.65,this.stuck=0),this.stuck>3.2&&(t.reset(t.safeS,this.lane*.4),this.stuck=0,this.recoveries++);let d=0;for(const M of e){if(t===M||Math.abs(t.y-M.y)>3)continue;const R=o.delta(M.progress,c);R>0&&R<16&&Math.abs(M.projection.lateral-t.projection.lateral)<2.8&&(d=t.projection.lateral<=M.projection.lateral?-2.4:2.4)}let f=!1;for(const M of a){if(Math.hypot(M.x-t.x,M.z-t.z)>45)continue;const R=o.project(M.x,M.z,t.projection.index,t.route,t.y),I=o.delta(R.s,c);R.distance>o.width(t.route)||I<0||I>34||Math.abs(R.lateral-t.projection.lateral)<3.8&&(d=R.lateral>=0?-4.5:4.5,I<12&&(f=!0))}const u=o.definition.theme==="city"&&!s?this.index%(o.branches.length+1):!s&&!this.avoidShortcut&&this.skill>=.65&&this.index%3!==0,g=t.projection.route?2.3:4.6,v=this.recoveryTime>0?0:Ie(this.lane*.72+d+Math.sin(n*(.25+this.skill*.12)+this.index*1.7)*(1.1-this.skill*.6),-g,g),m=this.recoveryTime>0?6:Ie(5.5+t.speed/l*(.36+(1-this.skill)*.1),8,22),p=o.ahead(t.projection,m,u),y=Math.atan2(p.x+p.nx*v-t.x,p.z+p.nz*v-t.z),_=oi(y-t.heading);if(this.recoveryTime>.85)return{throttle:0,brake:1,steer:-Math.sign(_),drift:!1,nitro:!1};const x=Ie(_*(2.6+this.skill*.4),-1,1);let S=0;for(const M of[7,18,30,40]){const R=o.ahead(t.projection,M-5,u),I=o.ahead(t.projection,M+5,u);S=Math.max(S,Math.abs(oi(Math.atan2(I.tx,I.tz)-Math.atan2(R.tx,R.tz)))/10)}const T=Ie(Math.sqrt((17.6+this.skill*8.2)*1.1*l*l*(t.wetRoad?.9:1)/Math.max(.008,S)),15,t.spec.speed*(t.boost?1.35:1));let A=Math.min(t.spec.speed*(.97+this.skill*.03)*(t.boost?1.35:1),T)*(1-(1-this.skill)*.025*Math.sin(n*.9+this.index*2));Math.abs(_)>.6&&(A*=.82),t.offroad&&(A=Math.min(A,13)),t.projection.route&&(A=Math.min(A,(25+this.skill*4)*l)),h&&o.drop&&(t.airborne||o.inDrop(c)||o.delta(o.drop.from,c)>0&&o.delta(o.drop.from,c)<65)&&(A=Math.min(A,34)),f&&(A=Math.min(A,12)),s&&(A=Math.min(A,s)),this.steering=$i(this.steering,x,(7+this.skill*6)*l,i);const P=!s&&t.hitTime<=0&&t.nitroTime<=0&&!t.nitroLatch&&t.speed>3&&t.nitroCharges>0;this.nitroWait=Math.max(0,this.nitroWait-i);let E=this.difficulty==="easy"&&P;return this.difficulty!=="easy"&&this.nitroWait===0&&(this.nitroWait=1.5+this.random(),E=P&&!t.boost&&!t.offroad&&!t.airborne&&this.recoveryTime===0&&t.speed>18&&S<.028&&Math.abs(_)<.3&&this.random()<Pn[this.difficulty].nitroChance),{throttle:t.speed<A+1?1:0,brake:t.speed>A+2?Ie((t.speed-A)*.2,0,1):0,steer:this.steering,drift:!1,nitro:E}}}const er=[{name:"空道具槽",short:"?",description:"穿過問號補給方塊取得隨機道具，最多攜帶兩種",color:11982037},{name:"三連脈衝",short:"Ⅲ",description:"每次發射一枚脈衝球，共三發；命中立即消失，對手停車旋轉一圈",color:6546687},{name:"泡膠陷阱",short:"◉",description:"放下泡膠，對手碰到會停車旋轉一圈；保留 18 秒",color:16760678},{name:"疾風電池",short:"»",description:"啟動 3 秒加速；衝撞對手會使對手停車旋轉一圈",color:15465320},{name:"潮汐護罩",short:"◇",description:"抵擋一次道具攻擊後消失；未被擊中時最多保留 5 秒",color:9618943},{name:"環形震波",short:"◎",description:"使 13 公尺內對手停車旋轉一圈，並清除附近陷阱與脈衝",color:14983935},{name:"追風飛彈",short:"➤",description:"追蹤前方對手；命中保留車速、隨機向左右彈開並旋轉一圈，最多飛行 6 秒",color:16740766},{name:"雙芯渦輪",short:"Ⅱ",description:"可分兩次使用，每次提供 2 秒推進；不能無限疊加",color:8449980},{name:"震盪地雷",short:"✹",description:"接觸引爆，使 8 公尺內車輛保留車速、隨機左右滑移並旋轉一圈",color:16751462},{name:"榜首香蕉皮",short:"#1",description:"向榜首前方落下香蕉皮；自己領先時改攻擊第二名。碰到會左右滑開旋轉，護罩可擋一次",color:16769899},{name:"榜首柵欄",short:"▥",description:"向榜首前方落下柵欄；自己領先時改攻擊第二名。碰到會車速歸零、原地旋轉一圈，護罩可擋一次",color:16755810}];class Ym{constructor(t,e=!0){this.track=t,this.enabled=e,this.boxPositions=t.itemLocations.flatMap(({route:i,u:n})=>{const s=t.routeAt(i,n),a=Math.min(6,t.width(i)-1.8);return[-1,-.5,0,.5,1].map(o=>{const c=s.x+s.nx*o*a,l=s.z+s.nz*o*a;return{x:c,y:t.deckHeight(i,n,c,l)+1.15,z:l,s:s.s,route:i}})}),this.boxes=this.boxPositions.map(()=>0)}track;enabled;boxes;objects=[];serial=0;random=Sn;picked=0;hits=0;used=new Set;boxPositions;snapshot(){return{boxes:[...this.boxes],objects:this.objects.map(t=>({...t})),serial:this.serial,enabled:this.enabled}}accept(t){this.boxes=t.boxes,this.objects=t.objects,this.serial=t.serial,this.enabled=t.enabled!==!1}tryPickup(t,e){const i=t.body;if(!(!this.enabled||i.itemType&&i.itemTypeRight||i.hitTime>0||i.airborne||t.finishTime!==null))for(let n=0;n<this.boxPositions.length;n++){const s=this.boxPositions[n];if(i.route!==s.route||e<this.boxes[n]||Math.abs(this.track.delta(i.progress,s.s))>5||Math.abs(i.y+1-s.y)>2.2||Math.hypot(i.x-s.x,i.z-s.z)>1.9)continue;!i.itemType&&i.itemTypeRight&&(i.itemType=i.itemTypeRight,i.itemCharges=i.itemChargesRight,i.itemCooldown=i.itemCooldownRight,i.itemTypeRight=i.itemChargesRight=0);const a=1+Math.floor(this.random()*(er.length-1)),o=a===1?3:a===7?2:1,c=i.itemType!==0;c?(i.itemTypeRight=a,i.itemChargesRight=o):(i.itemType=a,i.itemCharges=o),this.boxes[n]=e+5,i.lastPickupType=a,i.lastPickupSlot=c?1:0,i.pickupEvent++,this.picked++;break}}use(t,e,i,n=0){const s=t.body,a=n?s.itemTypeRight:s.itemType,o=n?s.itemChargesRight:s.itemCharges;if(!this.enabled||!a||!o||(n?s.itemCooldownRight:s.itemCooldown)>0||s.hitTime>0||t.finishTime!==null)return!1;n?(s.itemChargesRight--,s.itemCooldownRight=.32):(s.itemCharges--,s.itemCooldown=.32),s.itemEvent++,this.used.add(a);const c=Math.sin(s.heading),l=Math.cos(s.heading);if(a===1||a===2||a===6||a===8){const h=e.filter(g=>g.id!==t.id&&g.finishTime===null&&this.track.delta(g.body.progress,s.progress)>1&&this.track.delta(g.body.progress,s.progress)<(a===6?180:100)).sort((g,v)=>this.track.delta(g.body.progress,s.progress)-this.track.delta(v.body.progress,s.progress))[0],d=a===1||a===6,f=d?3:-3.6,u=this.track.drivingProjection(s.x+c*f,s.z+l*f,s.projection);this.objects.push({id:++this.serial,kind:a,owner:t.id,x:s.x+c*f,y:s.y+(d?1:.18),z:s.z+l*f,vx:c*58,vz:l*58,life:a===6?6:a===1?4.5:18,age:0,route:u.route,u:u.u,target:h?.id??-1}),this.objects.length>56&&this.objects.shift()}else if(a===9||a===10){const h=e.filter(f=>f.finishTime===null).sort((f,u)=>u.distance-f.distance||f.id-u.id),d=h[0]?.id===t.id?h[1]:h[0];if(d){const f=d.body,u=this.track.ahead(f.projection,Math.max(12,Math.min(32,f.speed*.7+4))),g=Math.max(-this.track.width(u.route)+2,Math.min(this.track.width(u.route)-2,f.projection.lateral));this.objects.push({id:++this.serial,kind:a,owner:t.id,x:u.x+u.nx*g,y:u.y+12.25,z:u.z+u.nz*g,vx:0,vz:0,life:18,age:0,route:u.route,u:u.u,target:d.id,groundY:this.track.deckHeight(u.route,u.u,u.x+u.nx*g,u.z+u.nz*g)+.25,yaw:Math.atan2(u.tx,u.tz)}),this.objects.length>56&&this.objects.shift()}}else if(a===3||a===7)s.itemBoostTime=Math.max(s.itemBoostTime,a===7?2:3),s.boostEvent++;else if(a===4)s.shieldTime=5;else if(a===5){s.pulseTime=.65;for(const h of e)h.id!==t.id&&h.finishTime===null&&Math.hypot(s.x-h.body.x,s.z-h.body.z)<13&&Math.abs(s.y-h.body.y)<4&&this.hit(h.body,0,0);this.objects=this.objects.filter(h=>Math.hypot(h.x-s.x,h.z-s.z)>13||Math.abs(h.y-s.y)>4)}return n?s.itemChargesRight||(s.itemTypeRight=0):s.itemCharges||(s.itemType=0),!0}hit(t,e,i,n=!1){if(t.hitTime>0)return!1;if(t.shieldTime>0)return t.shieldTime=0,t.shieldEvent++,t.shieldImpactTime=.08,!1;if(t.hitSlide=n?this.random()<.5?-1:1:0,t.steering=0,n){const s=Math.hypot(t.vx,t.vz),a=Math.sin(t.heading),o=Math.cos(t.heading),c=Math.min(9,s*.32)*t.hitSlide,l=Math.sqrt(Math.max(0,s*s-c*c))*Math.sign(t.vx*a+t.vz*o||1);t.vx=a*l+o*c,t.vz=o*l-a*c,t.speed=s}else t.vx=t.vz=t.speed=0,t.nitroTime=t.turboTime=t.itemBoostTime=0;return t.hitTime=ro,t.spinPhase=0,t.spinEvent++,t.collisionEvent++,t.drifting=!1,t.driftCharge=0,t.driftLevel=0,this.hits++,!0}contactsActive=new Set;contacts(t){if(!this.enabled)return;const e=new Set;for(let i=0;i<t.length;i++)for(let n=i+1;n<t.length;n++){const s=t[i],a=t[n];if(s.finishTime!==null||a.finishTime!==null||Math.abs(s.body.y-a.body.y)>2.8||Math.hypot(s.body.x-a.body.x,s.body.z-a.body.z)>2.65)continue;const o=`${i}:${n}`;if(e.add(o),this.contactsActive.has(o))continue;const c=a.body.itemBoostTime>0&&a.body.speed>8,l=s.body.itemBoostTime>0&&s.body.speed>8;c&&this.hit(s.body,0,0),l&&this.hit(a.body,0,0)}this.contactsActive=e}control(t,e,i,n){const s=t.body;if(!this.enabled)return;let a=e.item===!0,o=e.itemRight===!0;if(!t.human||t.disconnected){const c=i.some(h=>h.id!==t.id&&h.finishTime===null&&Math.hypot(h.body.x-s.x,h.body.z-s.z)<15),l=(n+t.id*.31)%2.3<.1;a=s.itemType>0&&s.itemCooldown<=0&&l&&(s.itemType!==5||c),o=s.itemTypeRight>0&&s.itemCooldownRight<=0&&l&&!a&&(s.itemTypeRight!==5||c)}a&&!s.itemLatch&&this.use(t,i,n,0),o&&!s.itemLatchRight&&this.use(t,i,n,1),s.itemLatch=a,s.itemLatchRight=o}step(t,e,i){if(this.enabled){for(const n of e)this.tryPickup(n,i);for(const n of this.objects){if(n.life-=t,n.age+=t,n.life<=0||(n.kind===9||n.kind===10)&&(n.y=(n.groundY??n.y)+12*Math.max(0,1-(n.age/.6)**2),n.age<.6))continue;const s=n.x,a=n.y,o=n.z,c=n.kind===1||n.kind===6;if(c){n.u+=(n.kind===6?68:58)*t;let d=this.track.routeAt(n.route,n.u);n.route&&d.route===0&&(n.route=0,n.u=d.s);const f=e.find(m=>m.id===n.target),u=f?this.track.branch(f.body.route):null;n.kind===6&&u&&!n.route&&Math.abs(this.track.delta(d.s,u.from))<12&&(n.route=u.route,n.u=Math.max(0,d.s-u.from),d=this.track.routeAt(n.route,n.u));const g=f&&f.finishTime===null?Math.max(-this.track.width(n.route)+1.5,Math.min(this.track.width(n.route)-1.5,f.body.projection.lateral)):0,v=1-Math.exp(-t*(n.kind===6?22:15));n.x+=(d.x+d.nx*g-n.x)*v,n.z+=(d.z+d.nz*g-n.z)*v,n.y=this.track.deckHeight(n.route,n.u,n.x,n.z)+1,n.vx=(n.x-s)/t,n.vz=(n.z-o)/t}let l,h=1/0;for(const d of e){if(d.finishTime!==null||n.kind!==9&&n.kind!==10&&d.id===n.owner&&n.age<1.2)continue;const f=d.body,u=n.x-s,g=n.z-o,v=u*u+g*g,m=v>0?Math.max(0,Math.min(1,((f.x-s)*u+(f.z-o)*g)/v)):0;if(!(Math.abs(f.y+.6-(a+(n.y-a)*m))>2.5)){if(n.kind===10){const p=n.yaw??0,y=f.x-n.x,_=f.z-n.z;if(Math.abs(y*Math.cos(p)-_*Math.sin(p))>3.25||Math.abs(y*Math.sin(p)+_*Math.cos(p))>1.5)continue}else if(Math.hypot(f.x-s-u*m,f.z-o-g*m)>(c?2:2.25))continue;m<h&&(h=m,l=d)}}if(l){if(n.kind===8){for(const d of e)d.finishTime===null&&Math.abs(d.body.y-n.y)<3&&Math.hypot(d.body.x-n.x,d.body.z-n.z)<8&&this.hit(d.body,0,0,!0);l.body.pulseTime=.65}else this.hit(l.body,0,0,n.kind===6||n.kind===9);n.life=0}}this.objects=this.objects.filter(n=>n.life>0)}}}const jm=["YOU","珊瑚 CORA","岬角 KAI","泡泡 BUB","燈塔 LUMI","波點 DOT","海鹽 SALT","小錨 ANKR"],Km=[15268697,16739405,6016255,13538815,16296252,10214789,16749001,15988204];class Zm{constructor(t,e=[]){this.track=t,this.obstacles=e,this.reset(0,!1)}track;obstacles;state="menu";racers=[];time=0;countdown=3.8;paused=!1;totalLaps=3;checkpointCount=32;finishOrder=[];finishDeadline=null;get finishRemaining(){return this.finishDeadline===null?null:Math.max(0,this.finishDeadline-this.time)}selected=0;localPlayerId=0;roster=null;bodies=[];online=!1;settings={...Qi};items;traffic;collisionObstacles=[];racer(t){return this.racers.find(e=>e.id===t)}get player(){return this.racers.find(t=>t.id===this.localPlayerId)??this.racers[0]}configure(t,e){this.roster=t,this.localPlayerId=e,this.online=!0,this.reset(t.find(i=>i.id===e)?.kart??0,!0)}reset(t=this.selected,e=!0){this.settings=bn(this.settings),this.selected=t,this.state=e?"countdown":"menu",this.time=0,this.countdown=3.8,this.paused=!1,this.finishOrder=[],this.finishDeadline=null,this.traffic=new Hm(this.track),this.collisionObstacles=[...this.obstacles,...this.traffic.cars],this.items=new Ym(this.track,this.settings.itemsEnabled!==!1);const i=this.settings.aiEnabled===!1?this.roster?.filter(n=>n.human).map(n=>n.id)??[0]:Array.from({length:8},(n,s)=>s);this.racers=i.map((n,s)=>{const a=this.roster?.find(u=>u.id===n),o=a?a.human:n===0,c=[1,1,.93,.86,.79,.72,.65,.57][n],l=wn[a?.kart??(n===0?t:n%3)],h=o?1:Pn[this.settings.difficulty].pace,d=new ao({...l,speed:l.speed*(o?1:(.99+c*.05)*h),accel:l.accel*(o?1:1.02+c*.07),turn:l.turn*h,handlingScale:h,color:o?l.color:Km[n]},this.track);d.wetRoad=this.settings.activeWeather==="rain";const f=-9-Math.floor(s/2)*5.7;return d.place(f,s%2===0?-2.4:2.4),{id:n,name:a?.name??jm[n],color:d.spec.color,body:d,ai:new $m(n,c,this.settings.difficulty),completedLaps:0,nextCheckpoint:0,distance:f,lastS:d.progress,lastX:d.x,lastZ:d.z,lastRoute:0,finishTime:null,checkpointTimes:[],lastLapTime:0,bestLap:1/0,resetSeen:0,human:o,disconnected:a?.disconnected??!1,simulated:!1,assisted:!o||!!a?.disconnected,pads:new Set}}),this.bodies=this.racers.map(n=>n.body)}step(t,e,i=!1,n){if(this.paused||this.state==="menu"||this.state==="finished")return;if(this.state==="countdown"){this.countdown-=t,this.countdown<=0&&(this.state="racing",this.countdown=0);return}this.time+=t,this.traffic.step(t,this.time);const s=this.bodies;for(const a of this.racers){if((a.disconnected||i&&a.id===this.localPlayerId)&&(a.assisted=!0),a.finishTime!==null){a.body.nitroTime=a.body.turboTime=a.body.itemBoostTime=0,a.body.step(a.ai.controls(a.body,[],t,this.time,21,this.traffic.cars),t,this.collisionObstacles);continue}const o=a.human&&!a.disconnected?a.id===this.localPlayerId?i?a.ai.controls(a.body,s,t,this.time,0,this.traffic.cars):e:n?.get(a.id)??so():a.ai.controls(a.body,s,t,this.time,0,this.traffic.cars),c=this.racers[0].distance-a.distance,l=a.human?1:1+Ie(c/2e3,-.018,.025);this.items.control(a,o,this.racers,this.time),a.body.step(o,t,this.collisionObstacles,l);for(let h=0;h<3;h++){const d=[64,390,750][h],f=a.completedLaps*3+h;Math.abs(this.track.delta(a.body.progress,d))<2.8&&Math.abs(a.body.projection.lateral)<3.4&&a.body.speed>10&&!a.pads.has(f)&&(a.body.awardNitro(.35),a.pads.add(f))}}if(this.traffic.contacts(this.racers,this.items),this.items.contacts(this.racers),qm(this.finishOrder.length?this.racers.filter(a=>a.finishTime===null).map(a=>a.body):s),this.traffic.enabled)for(const a of s)a.resolveWorldContacts(this.collisionObstacles);this.items.step(t,this.racers,this.time);for(const a of this.racers)this.updateProgress(a,t);this.racers.every(a=>a.finishTime!==null)?this.state="finished":this.finishDeadline!==null&&this.time>=this.finishDeadline&&this.finishEstimated()}finishEstimated(){const t=this.totalLaps*this.track.length,e=this.racers.filter(n=>n.finishTime===null).sort((n,s)=>s.distance-n.distance||n.id-s.id);let i=Math.max(this.time,...this.racers.map(n=>n.finishTime??0));for(const n of e){const s=Ie(Math.max(0,n.distance)/Math.max(1,this.time),8,n.body.spec.speed*1.1),a=this.time+Math.max(0,t-n.distance)/s;n.finishTime=Math.max(i+.01,a),i=n.finishTime,n.simulated=!0,n.completedLaps=this.totalLaps,n.nextCheckpoint=this.totalLaps*this.checkpointCount+1,n.distance=t,this.finishOrder.push(n.id)}this.state="finished"}updateProgress(t,e){const i=t.body;if(t.finishTime!==null)return;if(t.resetSeen!==i.resetEvent){this.resetRacer(t);return}const n=this.track.drivingProjection(i.x,i.z,i.projection);i.projection=n,i.progress=n.s,i.route=n.route,i.routeU=n.u;const s=this.track.delta(n.s,t.lastS),a=Math.hypot(i.x-t.lastX,i.z-t.lastZ),o=n.route!==t.lastRoute,c=o&&a<Math.max(1,i.speed*e*2+.2)&&Math.abs(s)<Math.min(32,this.track.length/this.checkpointCount*.8)&&this.track.junctionClearance(n.route,n.u,i.x,i.z)<1.2,l=!o&&a<Math.max(1,i.speed*e*2+.2)&&Math.abs(s)<Math.min(32,this.track.length/this.checkpointCount*.8)&&this.track.foldedCornerTransition(n,t.lastS,i.x,i.z),h=c||l;if(t.lastS=n.s,t.lastX=i.x,t.lastZ=i.z,t.lastRoute=n.route,t.finishTime!==null)return;if(Math.abs(s)>Math.max(4,i.speed*e*2+1)&&!h||!this.track.legalPosition(n,i.x,i.z)){this.resetRacer(t);return}const d=t.distance;t.distance+=s;const f=this.track.length/this.checkpointCount,u=t.nextCheckpoint*f;if(s>0&&d<u&&t.distance>=u&&Math.abs(this.track.delta(n.s,u))<(h?Math.abs(s)+1:4)&&(t.checkpointTimes.push(this.time),t.nextCheckpoint++,i.safeS=u+1,u>0&&t.nextCheckpoint%this.checkpointCount===1)){t.completedLaps++;const g=this.time-t.lastLapTime;t.bestLap=Math.min(t.bestLap,g),t.lastLapTime=this.time,i.awardNitro(.65),t.completedLaps===this.totalLaps&&(t.finishTime=this.time,this.finishDeadline??=this.time+20,this.finishOrder.push(t.id))}}resetRacer(t=this.player){const e=Math.max(-9,(t.nextCheckpoint-1)*this.track.length/this.checkpointCount+1);t.body.reset(e),t.lastS=t.body.progress,t.lastX=t.body.x,t.lastZ=t.body.z,t.lastRoute=t.body.route,t.distance=e,t.resetSeen=t.body.resetEvent}get standings(){return[...this.racers].sort((t,e)=>t.finishTime!==null&&e.finishTime!==null?t.finishTime-e.finishTime:t.finishTime!==null?-1:e.finishTime!==null?1:e.distance-t.distance)}get position(){return this.standings.findIndex(t=>t.id===this.localPlayerId)+1}}const Ke=new ie(1,1,1),wi=new us(1,10,7),Jm=new qe(.5,.5,.39,12),Qm=new qe(.24,.24,.405,8),xn=new ae({color:2505798}),tg=new ae({color:2371641}),yn=new ae({color:16774362}),eg=new ae({color:1526875}),ig=new ae({color:11059903});function pe(r,t,e,i,n){const s=new Ot(t,e);return s.position.set(i[0],i[1],i[2]),s.scale.set(n[0],n[1],n[2]),r.add(s),s}class ml{constructor(t,e="YOU"){this.body=t,this.name=e,this.material=new ae({color:t.spec.color});const i=this.material;this.group.add(this.shell),pe(this.shell,Ke,xn,[0,.46,0],[1.65,.28,2.6]),pe(this.shell,wi,i,[0,.73,.32],[.88,.38,1.35]),pe(this.shell,Ke,i,[0,.88,1.04],[1.5,.3,1.2]),pe(this.shell,Ke,yn,[0,1.045,1.04],[.22,.032,1.15]),pe(this.shell,Ke,xn,[0,.61,1.77],[1.8,.22,.23]),pe(this.shell,Ke,xn,[0,.57,-1.37],[1.8,.2,.26]);for(const l of[-1,1]){pe(this.shell,Ke,i,[l*.99,.86,-.42],[.33,.29,1.2]),pe(this.shell,wi,yn,[l*.55,.86,1.59],[.23,.12,.08]),pe(this.shell,Ke,ig,[l*.72,.8,-1.35],[.25,.35,.36]);const h=pe(this.group,new Fn(.25,1.4,6),new Re({color:7203327}),[l*.72,.79,-2],[1,1,1]);h.rotation.x=-Math.PI/2,this.flames.push(h)}if(t.spec.id==="comet"&&(pe(this.shell,Ke,xn,[0,1.15,-1.06],[.18,.8,.16]),pe(this.shell,Ke,i,[0,1.51,-1.06],[2,.15,.48])),t.spec.id==="skipper")for(const l of[-1,1])pe(this.shell,wi,i,[l*.75,1.1,-.7],[.2,.4,.5]);for(const l of[-1.03,1.03])for(const h of[-.93,.94]){const d=new Ce;d.position.set(l,.5,h);const f=new Ot(Jm,tg);f.rotation.z=Math.PI/2,d.add(f);const u=new Ot(Qm,yn);u.rotation.z=Math.PI/2,d.add(u),this.group.add(d),this.wheels.push(d)}this.driver.position.set(0,.85,-.32),this.shell.add(this.driver),pe(this.driver,wi,yn,[0,.38,0],[.42,.48,.34]),pe(this.driver,wi,i,[0,1.05,0],[.57,.53,.48]),pe(this.driver,wi,eg,[0,1.06,.34],[.48,.24,.2]);for(const l of[-.16,.16])pe(this.driver,Ke,yn,[l,1.1,.53],[.085,.11,.022]);pe(this.driver,Ke,xn,[0,1.67,0],[.055,.3,.055]),pe(this.driver,wi,i,[0,1.87,0],[.12,.12,.12]);for(const l of[-1,1]){const h=pe(this.driver,wi,yn,[l*.4,.4,.27],[.15,.29,.17]);h.rotation.x=-.75}const n=new Ot(new sr(.27,.055,5,10),xn);n.rotation.x=.6,n.position.set(0,1.26,.22),this.shell.add(n),this.shadow=new Ot(new Ja(1.65,20),new Re({color:1526608,transparent:!0,opacity:.21,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.scale.y=1.35,this.group.add(this.shadow),this.owned.push(n.geometry,...Fa(this.shell),...Fa(this.driver));const s=document.createElement("canvas");s.width=512,s.height=160;const a=s.getContext("2d");a.fillStyle="#fff5d8",a.fillRect(0,0,512,160),a.strokeStyle="#174953",a.lineWidth=12,a.strokeRect(6,6,500,148),a.fillStyle="#174953",a.textAlign="center",a.textBaseline="middle";let o=78;for(a.font=`800 ${o}px system-ui,sans-serif`;a.measureText(e).width>462&&o>24;)o-=2,a.font=`800 ${o}px system-ui,sans-serif`;a.fillText(e,256,82),this.plateTexture=new as(s),this.plateTexture.colorSpace=ye,this.plateTexture.generateMipmaps=!1,this.plateTexture.minFilter=Qe,this.plateMaterial=new Re({map:this.plateTexture,side:xi});const c=new Ii(1.72,.54);this.owned.push(c);for(const l of[-1,1]){const h=new Ot(c,this.plateMaterial);h.position.set(0,.81,l===1?1.91:-1.54),h.rotation.y=l===1?0:Math.PI,h.userData.plate=e,this.group.add(h)}}body;name;group=new Ce;shell=new Ce;driver=new Ce;wheels=[];flames=[];shadow;material;owned=[];plateTexture;plateMaterial;sync(t){const e=this.body;this.group.position.set(e.x,e.y+.11,e.z),this.group.rotation.set(e.pitch,e.heading+(e.hitTime>0?e.spinPhase*Math.PI*2*(e.hitSlide||1):0),e.roll,"YXZ"),this.shell.rotation.z=-e.steering*Math.min(e.speed/35,1)*.065,this.driver.rotation.z=-e.steering*.13,this.shadow.position.y=-.01,this.shadow.visible=!e.airborne;for(let i=0;i<this.wheels.length;i++){i%2===1&&(this.wheels[i].rotation.y=e.steering*.34);const n=this.wheels[i].children;n[0].rotation.x=t*e.speed*1.8,n[1].rotation.x=t*e.speed*1.8}this.flames.forEach((i,n)=>{i.visible=e.boost,i.scale.setScalar(.8+Math.sin(t*45+n)*.17)})}dispose(){this.plateTexture.dispose(),this.plateMaterial.dispose(),this.material.dispose(),this.flames.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.owned.forEach(t=>t.dispose())}}class ng{constructor(t){this.camera=t}camera;target=new D;desired=new D;look=new D;initialized=!1;reset(){this.initialized=!1}update(t,e,i=!1,n=0){const s=Math.sin(t.heading),a=Math.cos(t.heading),o=t.drifting?t.driftDirection*.65:0;if(i){const c=t.heading+.8+Math.sin(n*.14)*.08;this.desired.set(t.x+Math.sin(c)*12,t.y+5.3,t.z+Math.cos(c)*12),this.look.set(t.x-Math.cos(c)*4.2,t.y+1,t.z+Math.sin(c)*4.2)}else this.desired.set(t.x-s*10.7+a*o,t.y+5.9,t.z-a*10.7-s*o),this.look.set(t.x+s*6,t.y+1.35,t.z+a*6);this.initialized||(this.camera.position.copy(this.desired),this.target.copy(this.look),this.initialized=!0),this.camera.position.lerp(this.desired,1-Math.exp(-e*5)),this.camera.position.y=Math.max(this.camera.position.y,t.y+3.7),this.target.lerp(this.look,1-Math.exp(-e*8)),this.camera.lookAt(this.target),this.camera.fov=$i(this.camera.fov,i?47:58+Math.min(t.speed/35,1)*7+(t.boost?7:0),3,e),this.camera.updateProjectionMatrix()}}class sg{constructor(t){this.scene=t,this.group.userData.dynamic=!0;const e=fs(7421);for(let c=0;c<300;c++)this.drops[c*3]=(e()-.5)*110,this.drops[c*3+1]=e()*45,this.drops[c*3+2]=(e()-.5)*110;const i=new me;i.setAttribute("position",new He(this.lines,3).setUsage(ss)),this.rain=new Yh(i,new el({color:11192553,transparent:!0,opacity:.45,depthWrite:!1})),this.rain.frustumCulled=!1,this.lamps=new ei(new us(1,8,5),new Re({color:16777215,toneMapped:!1}),32);const n=new me;n.setAttribute("position",new Yt([-7,0,0,7,0,0,-7,0,18,7,0,18],3)),n.setAttribute("uv",new Yt([0,0,1,0,0,1,1,1],2)),n.setIndex([0,2,1,1,2,3]),n.computeVertexNormals();const s=document.createElement("canvas");s.width=128,s.height=256;const a=s.getContext("2d"),o=a.createImageData(128,256);for(let c=0;c<256;c++)for(let l=0;l<128;l++){const h=1-c/255,d=l/127*2-1,f=Math.min(1,h/.055),u=(1-h)**1.6,g=Math.exp(-2.5*(d/(.085+h*.48))**2),v=Math.exp(-1.8*(d/(.22+h*.72))**2),m=f*u*(g*.48+v*.15)*(1-d*d)**2,p=(c*128+l)*4;o.data[p]=255,o.data[p+1]=239,o.data[p+2]=208,o.data[p+3]=Math.round(255*m)}a.putImageData(o,0,0),this.beamTexture=new as(s),this.beams=new ei(n,new Re({map:this.beamTexture,transparent:!0,depthWrite:!1,side:Ee,blending:qr,toneMapped:!1}),16);for(const c of[this.lamps,this.beams])c.frustumCulled=!1,c.userData.dynamic=!0,c.instanceMatrix.setUsage(ss);for(let c=0;c<32;c++)this.lamps.setMatrixAt(c,this.hidden),this.lamps.setColorAt(c,new Ct(c%4<2?16774079:16735304));for(let c=0;c<16;c++)this.beams.setMatrixAt(c,this.hidden);this.focusLight.castShadow=!1,this.focusLight.target.userData.dynamic=!0,this.group.add(this.rain,this.lamps,this.beams,this.focusLight,this.focusLight.target),t.add(this.group),this.setWeather("sunny")}scene;group=new Ce;weather="sunny";focusLight=new Qh(16772558,38,34,.46,1,1.25);rain;lamps;beams;drops=new Float32Array(300*3);lines=new Float32Array(300*6);dummy=new Jt;hidden=new Bt().makeScale(0,0,0);orientation=new tn;offset=new D;beamTexture;setWeather(t){this.weather=t,this.rain.visible=t==="rain",this.lamps.visible=this.beams.visible=this.focusLight.visible=t!=="sunny",this.focusLight.intensity=t==="rain"?38:26,this.beams.material.opacity=t==="rain"?.85:.65}update(t,e,i,n=!1){if(this.weather==="sunny")return;const s=i.body,a=s.track.ahead(s.projection,16),o=Math.sin(s.heading),c=Math.cos(s.heading);if(this.focusLight.position.set(s.x+o*1.7,s.y+1.15,s.z+c*1.7),this.focusLight.target.position.set(s.x+o*18,a.y+.08,s.z+c*18),this.weather==="rain"){const l=i.body,h=n?150:300;this.rain.geometry.setDrawRange(0,h*2);for(let d=0;d<h;d++){const f=d*3,u=d*6;this.drops[f+1]-=t*(24+d%7),this.drops[f+1]<-4&&(this.drops[f+1]+=45),this.lines[u]=l.x+this.drops[f],this.lines[u+1]=l.y+this.drops[f+1],this.lines[u+2]=l.z+this.drops[f+2],this.lines[u+3]=this.lines[u]-.25,this.lines[u+4]=this.lines[u+1]-1.8,this.lines[u+5]=this.lines[u+2]+.16}this.rain.geometry.attributes.position.needsUpdate=!0}for(let l=0;l<32;l++)this.lamps.setMatrixAt(l,this.hidden);for(let l=0;l<16;l++)this.beams.setMatrixAt(l,this.hidden);for(const[l,h]of e.entries()){const d=h.body,f=d.heading+(d.hitTime>0?d.spinPhase*Math.PI*2*(d.hitSlide||1):0);this.dummy.rotation.set(d.pitch,f,0,"YXZ"),this.orientation.copy(this.dummy.quaternion);for(let u=0;u<4;u++)this.offset.set(u%2?-.95:.95,u<2?1.06:.84,u<2?1.98:-1.66).applyQuaternion(this.orientation),this.dummy.position.set(d.x+this.offset.x,d.y+this.offset.y,d.z+this.offset.z),this.dummy.scale.set(.21,.12,.085),this.dummy.updateMatrix(),this.lamps.setMatrixAt(l*4+u,this.dummy.matrix);if(!d.airborne)for(let u=0;u<2;u++)this.offset.set(u?-.64:.64,.17,1.95).applyQuaternion(this.orientation),this.dummy.position.set(d.x+this.offset.x,d.y+this.offset.y,d.z+this.offset.z),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.beams.setMatrixAt(l*2+u,this.dummy.matrix)}this.lamps.instanceMatrix.needsUpdate=!0,this.beams.instanceMatrix.needsUpdate=!0}dispose(){this.scene.remove(this.group),this.rain.geometry.dispose(),this.rain.material.dispose();for(const t of[this.lamps,this.beams])t.geometry.dispose(),t.material.dispose();this.beamTexture.dispose()}}const ni=340;class rg{mesh;cursor=0;life=new Float32Array(ni);maxLife=new Float32Array(ni);pos=new Float32Array(ni*3);vel=new Float32Array(ni*3);size=new Float32Array(ni);mat=new Bt;dummy=new Jt;emission=0;skid;skidIndex=0;color=new Ct;constructor(t){this.mesh=new ei(new Ji(1,0),new Re({transparent:!0,opacity:.72,depthWrite:!1}),ni),this.mesh.userData.dynamic=!0,this.mesh.instanceMatrix.setUsage(ss),this.mesh.frustumCulled=!1;for(let e=0;e<ni;e++)this.mesh.setColorAt(e,this.color);t.add(this.mesh),this.skid=new ei(new Ii(.14,.55),new Re({color:2309955,transparent:!0,opacity:.34,depthWrite:!1,side:Ee}),480),this.skid.userData.dynamic=!0,this.skid.frustumCulled=!1,t.add(this.skid),this.clear()}clear(){this.life.fill(0),this.cursor=0,this.skidIndex=0,this.mat.makeScale(0,0,0);for(let t=0;t<ni;t++)this.mesh.setMatrixAt(t,this.mat);for(let t=0;t<480;t++)this.skid.setMatrixAt(t,this.mat);this.mesh.instanceMatrix.needsUpdate=!0,this.skid.instanceMatrix.needsUpdate=!0}emit(t,e,i,n,s,a,o=0,c=1,l=0){const h=this.cursor++%ni;this.life[h]=a,this.maxLife[h]=a,this.size[h]=s,this.pos.set([t,e,i],h*3),this.vel.set([o,c,l],h*3),this.mesh.setColorAt(h,this.color.setHex(n))}update(t,e,i){this.emission+=t;const n=this.emission>1/35;n&&(this.emission=0);for(const s of e){if(!n||s.speed<6)continue;const a=Math.sin(s.heading),o=Math.cos(s.heading),c=o,l=-a;if(s.drifting||s.hitTime>0&&s.hitSlide!==0&&!s.airborne)for(const h of[-1,1]){const d=s.x-a*.95+c*h,f=s.z-o*.95+l*h;this.emit(d,s.y+.38,f,15134433,.25,.7,-a*2,1.2,-o*2),s.driftLevel>0&&this.emit(d,s.y+.28,f,[0,7200767,16766549,16746172][s.driftLevel],.1,.38,c*h*3,1.8,l*h*3),this.dummy.position.set(d,s.y+.095,f),this.dummy.rotation.set(-Math.PI/2,0,-s.heading),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.skid.setMatrixAt(this.skidIndex++%480,this.dummy.matrix),this.skid.instanceMatrix.needsUpdate=!0}if(s.boost)for(const h of[-1,1])this.emit(s.x-a*1.8+c*h*.65,s.y+.7,s.z-o*1.8+l*h*.65,s.nitroTime>0?7533311:16762465,.19,.28,-a*9,.2,-o*9)}for(let s=0;s<ni;s++){if(this.life[s]-=t,this.life[s]<=0){this.mat.makeScale(0,0,0),this.mesh.setMatrixAt(s,this.mat);continue}for(let o=0;o<3;o++)this.pos[s*3+o]+=this.vel[s*3+o]*t;const a=this.size[s]*(this.life[s]/this.maxLife[s]);this.dummy.position.fromArray(this.pos,s*3),this.dummy.rotation.set(i*.6,s,0),this.dummy.scale.setScalar(a),this.dummy.updateMatrix(),this.mesh.setMatrixAt(s,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}function ag(r,t={}){const e=r.has("KeyA")||r.has("ArrowLeft")||t.left===!0,i=r.has("KeyD")||r.has("ArrowRight")||t.right===!0;return{throttle:r.has("KeyW")||r.has("ArrowUp")||t.throttle===!0?1:0,brake:r.has("KeyS")||r.has("ArrowDown")||t.brake===!0?1:0,steer:(e?1:0)-(i?1:0),drift:r.has("Space")||t.drift===!0,nitro:r.has("ShiftLeft")||r.has("ShiftRight")||t.nitro===!0,item:r.has("KeyZ")||t.item===!0,itemRight:r.has("KeyX")||t.itemRight===!0}}class og{constructor(t){this.action=t,window.addEventListener("keydown",this.down),window.addEventListener("keyup",this.up),window.addEventListener("blur",this.blur),this.media.addEventListener("change",this.mediaChange),this.mobileControls.className="mobile-controls",this.mobileControls.setAttribute("aria-label","觸控駕駛按鈕"),this.mobileControls.innerHTML='<div class="mobile-steering"><button type="button" data-mobile="left" aria-label="左轉">◀</button><button type="button" data-mobile="right" aria-label="右轉">▶</button></div><div class="mobile-pedals"><button type="button" data-mobile="brake" aria-label="煞車與倒車">煞車</button><button type="button" data-mobile="throttle" aria-label="加速">加速</button></div><div class="mobile-actions"><button type="button" data-mobile="drift">漂移</button><button type="button" data-mobile="nitro">氮氣</button></div><div class="mobile-items"><button type="button" data-mobile="item" aria-label="使用左邊道具">Z 左道具</button><button type="button" data-mobile="itemRight" aria-label="使用右邊道具">X 右道具</button></div><button type="button" class="mobile-reset" data-action="KeyR" aria-label="救援重置車輛">救援 R</button>',document.querySelector("#app").append(this.mobileControls),this.buttons=[...this.mobileControls.querySelectorAll("[data-mobile]")],this.buttons.forEach(e=>{const i=e.dataset.mobile;e.addEventListener("pointerdown",s=>{if(s.preventDefault(),!this.active||!this.media.matches||this.pointers.has(s.pointerId))return;e.setPointerCapture(s.pointerId);const a=!this.touch[i];this.pointers.set(s.pointerId,i),this.refreshTouch(),a&&i==="item"&&this.action("KeyZ"),a&&i==="itemRight"&&this.action("KeyX")});const n=s=>{s.preventDefault(),this.pointers.delete(s.pointerId),this.refreshTouch()};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("lostpointercapture",n),e.addEventListener("contextmenu",s=>s.preventDefault())}),this.mobileControls.querySelector("[data-action]").onclick=()=>{this.active&&this.action("KeyR")}}action;keys=new Set;touch={throttle:!1,brake:!1,left:!1,right:!1,drift:!1,nitro:!1,item:!1,itemRight:!1};mobileControls=document.createElement("div");pointers=new Map;active=!1;buttons=[];media=matchMedia("(max-width: 768px)");refreshTouch(){for(const t of Object.keys(this.touch))this.touch[t]=[...this.pointers.values()].includes(t);this.buttons.forEach(t=>t.classList.toggle("pressed",this.touch[t.dataset.mobile]))}down=t=>{if(!(t.target instanceof HTMLElement&&(t.target.matches("input,select,textarea")||t.target.isContentEditable))){if(document.querySelector("#menu:not(.hidden),.lobby-layer:not(.hidden),.garage-page:not(.hidden),.records-layer:not(.hidden)")){!t.repeat&&t.code==="Enter"&&!(t.target instanceof HTMLButtonElement)&&this.action(t.code);return}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","F3"].includes(t.code)&&!(t.target instanceof HTMLButtonElement&&t.code==="Space")&&t.preventDefault(),t.repeat||this.action(t.code),this.keys.add(t.code)}};up=t=>{this.keys.delete(t.code)};blur=()=>{this.clear(),this.action("Blur")};mediaChange=()=>{this.media.matches||this.clearTouch()};clearTouch(){this.pointers.clear(),this.refreshTouch()}clear(){this.keys.clear(),this.clearTouch()}setMobileVisible(t){this.active!==t&&(this.active=t,this.mobileControls.classList.toggle("is-active",t),t||this.clearTouch())}setItemsEnabled(t){this.mobileControls.classList.toggle("without-items",!t)}get controls(){return ag(this.keys,this.touch)}dispose(){window.removeEventListener("keydown",this.down),window.removeEventListener("keyup",this.up),window.removeEventListener("blur",this.blur),this.media.removeEventListener("change",this.mediaChange),this.mobileControls.remove()}}const Rc=new Map;function cg(r){const t=Rc.get(r);if(t)return t;const e=Cn(r),i=new cs(r,!1),n=i.bounds,s=Math.min(164/Math.max(1,n.maxX-n.minX),84/Math.max(1,n.maxZ-n.minZ)),a=(f,u)=>`${(90+(f-(n.minX+n.maxX)/2)*s).toFixed(1)},${(50+(u-(n.minZ+n.maxZ)/2)*s).toFixed(1)}`,o=i.points.filter((f,u)=>u%4===0).map(f=>a(f.x,f.z)).join(" "),c=i.branches.map(f=>`<polyline class="${e.theme==="city"?"record-street":"record-shortcut"}" points="${f.points.filter((u,g)=>g%3===0).map(u=>a(u.x,u.z)).join(" ")}"/>`).join(""),[l,h]=a(i.at(0).x,i.at(0).z).split(","),d=`<svg class="record-outline" viewBox="0 0 180 100" role="img" aria-label="${e.name}賽道輪廓"><polygon points="${o}"/>${c}<circle class="record-start" cx="${l}" cy="${h}" r="3.5"/></svg>`;return Rc.set(r,d),d}const ls="https://kart.ottaster.com".replace(/\/$/,""),Oa="kart_key",gl=()=>{try{return localStorage.getItem(Oa)??""}catch{return""}},za=r=>{try{r?localStorage.setItem(Oa,r):localStorage.removeItem(Oa)}catch{}},An=r=>ls+r,Jn=()=>{const r=gl();return r?{"x-kart-key":r}:{}};function lg(){const r=ls?ls.replace(/^http/,"ws")+"/ws":(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws",t=gl();return t?r+"?key="+encodeURIComponent(t):r}async function hg(){try{return(await fetch(An("/api/ice"),{headers:Jn(),cache:"no-store",signal:AbortSignal.timeout(6e3)})).ok}catch{return!1}}async function dg(){ls&&(await hg()||(za(""),await new Promise(r=>{const t=document.createElement("div");t.className="access-gate",t.innerHTML='<form><h1>TIDEBREAK · 浪灣疾行</h1><p>輸入通關密碼</p><input name="pw" type="password" autocomplete="current-password" autofocus><button>進入</button><div class="err"></div></form>',document.body.append(t);const e=t.querySelector("form"),i=t.querySelector("input"),n=t.querySelector(".err");e.onsubmit=async s=>{s.preventDefault(),n.textContent="",e.querySelector("button").disabled=!0;try{const a=await fetch(An("/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({pw:i.value}),signal:AbortSignal.timeout(8e3)}),o=await a.json().catch(()=>({}));if(a.ok&&typeof o.key=="string"){za(o.key),t.remove(),r();return}n.textContent=a.status===401?"密碼不對":"連不上伺服器，請稍後再試"}catch{n.textContent="連不上伺服器，請稍後再試"}e.querySelector("button").disabled=!1,i.focus()},i.focus()})))}async function oo(r){const t=await fetch(An("/api/records"),{headers:Jn(),signal:AbortSignal.any([r,AbortSignal.timeout(7e3)]),cache:"no-store"});if(!t.ok)throw new Error("讀取紀錄失敗，請稍後重試。");return(await t.json()).records}class ug{root=document.createElement("section");request=null;returnFocus=null;constructor(){this.root.className="modal-layer records-layer hidden",this.root.setAttribute("role","dialog"),this.root.setAttribute("aria-modal","true"),this.root.setAttribute("aria-labelledby","records-title"),this.root.innerHTML='<div class="records-card"><button id="records-close" class="text-button">← 返回首頁</button><div class="eyebrow">TIDEBREAK · WORLD RECORDS</div><h2 id="records-title">浪灣最速殿堂</h2><p>各賽道最快三圈總時間，與所有車手共同競爭。</p><p class="records-rules">所有模式共用紀錄 · 僅計真人駕駛 · 不計 AI 代駕與估算成績</p><div class="records-list" aria-live="polite"></div><button id="records-retry" class="secondary hidden">重新載入紀錄</button></div>',document.querySelector("#app").append(this.root),this.root.querySelector("#records-close").onclick=()=>this.hide(),this.root.querySelector("#records-retry").onclick=()=>{this.load()},this.root.addEventListener("keydown",t=>{if(t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),this.hide()),t.key==="Tab"){const e=[...this.root.querySelectorAll("button:not(.hidden)")],i=e[0],n=e[e.length-1];t.shiftKey&&document.activeElement===i?(t.preventDefault(),n.focus()):!t.shiftKey&&document.activeElement===n&&(t.preventDefault(),i.focus())}})}show(){this.returnFocus=document.activeElement,this.root.classList.remove("hidden"),this.root.querySelector("button").focus(),this.load()}hide(){this.request?.abort(),this.root.classList.add("hidden"),this.returnFocus?.focus()}async load(){this.request?.abort();const t=new AbortController;this.request=t;const e=this.root.querySelector(".records-list"),i=this.root.querySelector("#records-retry");i.classList.add("hidden"),e.innerHTML='<p class="records-loading"><i class="loading-spinner"></i>正在讀取共用紀錄…</p>';try{const n=await oo(t.signal);if(t.signal.aborted)return;e.replaceChildren(),ci.forEach((s,a)=>{const o=n.find(v=>v.track===s.id)?.record,c=document.createElement("article");c.className="record-row";const l=document.createElement("span");l.className="record-number",l.textContent=String(a+1).padStart(2,"0");const h=document.createElement("figure");h.className="record-map",h.innerHTML=cg(s.id);const d=document.createElement("div"),f=document.createElement("strong"),u=document.createElement("small"),g=document.createElement("b");f.textContent=s.name,u.textContent=o?o.name:"等待第一位紀錄保持人",g.textContent=o?Ri(o.timeMs/1e3):"無紀錄",d.append(f,u),c.append(l,h,d,g),e.append(c)})}catch(n){if(t.signal.aborted)return;e.textContent=n.message,i.classList.remove("hidden")}}dispose(){this.request?.abort(),this.root.remove()}}class fg{root=document.createElement("section");request=null;record=null;track="coast";loaded=!1;holder;time;gap;retry;constructor(){this.root.className="live-record",this.root.setAttribute("aria-label","本關共用最快紀錄"),this.root.innerHTML='<div class="live-record-heading"><span>♕ 本關最快三圈</span><strong class="live-record-time">—</strong></div><div class="live-record-detail"><span class="live-record-holder">讀取中…</span><small class="live-record-gap"></small></div><button type="button" class="live-record-retry hidden">重試</button>',this.holder=this.root.querySelector(".live-record-holder"),this.time=this.root.querySelector(".live-record-time"),this.gap=this.root.querySelector(".live-record-gap"),this.retry=this.root.querySelector("button"),this.retry.onclick=()=>this.begin(this.track)}begin(t){this.track=t,this.request?.abort();const e=new AbortController;this.request=e,this.loaded=!1,this.record=null,this.time.textContent="—",this.holder.textContent="正在讀取紀錄…",this.gap.textContent="",this.retry.classList.add("hidden"),this.root.classList.remove("record-ahead"),oo(e.signal).then(i=>{e.signal.aborted||(this.loaded=!0,this.record=i.find(n=>n.track===t)?.record??null,this.holder.textContent=this.record?.name??"等待第一位紀錄保持人",this.time.textContent=this.record?Ri(this.record.timeMs/1e3):"無紀錄")}).catch(()=>{e.signal.aborted||(this.holder.textContent="紀錄暫時無法讀取",this.retry.classList.remove("hidden"))})}update(t,e,i){if(!this.loaded)return;if(!this.record){this.gap.textContent="真人三圈總時間";return}const n=this.record.timeMs/1e3-(e??t);this.root.classList.toggle("record-ahead",e!==null&&!i&&n>0),this.gap.textContent=e!==null?i?"估算不計紀錄":n>0?`快 ${n.toFixed(3)} 秒 · 待結算`:n===0?"追平目前紀錄":`慢 ${(-n).toFixed(3)} 秒`:n>=0?`還有 ${n.toFixed(1)} 秒`:`超出 ${(-n).toFixed(1)} 秒`}dispose(){this.request?.abort(),this.root.remove()}}class pg{root=document.createElement("section");key="";request=null;title;holder;time;gap;retry;constructor(){this.root.className="result-record",this.root.setAttribute("aria-live","polite"),this.root.innerHTML='<span class="result-record-title"></span><div class="result-record-values"><strong class="result-record-holder"></strong><b class="result-record-time"></b></div><small class="result-record-gap"></small><button type="button" class="result-record-retry hidden">重新讀取紀錄</button>',this.title=this.root.querySelector(".result-record-title"),this.holder=this.root.querySelector(".result-record-holder"),this.time=this.root.querySelector(".result-record-time"),this.gap=this.root.querySelector(".result-record-gap"),this.retry=this.root.querySelector("button"),this.retry.onclick=()=>{this.key=""}}update(t,e,i,n,s){const a=[t,e,i,n,s].join(":");if(a===this.key||(this.key=a,this.request?.abort(),this.retry.classList.add("hidden"),this.title.textContent=`本關最速紀錄 · ${Cn(t).name}`,this.holder.innerHTML='<i class="loading-spinner" aria-hidden="true"></i> 讀取共用紀錄中…',this.time.textContent="",this.gap.textContent=n?"":"等待本場成績同步…",!n))return;const o=new AbortController;this.request=o,oo(o.signal).then(c=>{if(o.signal.aborted||this.key!==a)return;const l=c.find(f=>f.track===t)?.record;if(!l){this.holder.textContent="無紀錄",this.time.textContent="—",this.gap.textContent="等待首位真人車手創下完整三圈紀錄。";return}if(this.holder.textContent=l.name,this.time.textContent=Ri(l.timeMs/1e3),e===null){this.gap.textContent="";return}const h=Math.round(e*1e3)-l.timeMs,d=i?"估算成績 · ":"";this.gap.textContent=d+(h===0?"與目前最快紀錄相同":`本場${h>0?"慢":"快"} ${(Math.abs(h)/1e3).toFixed(3)} 秒`)}).catch(()=>{o.signal.aborted||this.key!==a||(this.holder.textContent="暫時無法讀取紀錄",this.time.textContent="—",this.gap.textContent="",this.retry.classList.remove("hidden"))})}clear(){this.key&&(this.key="",this.request?.abort(),this.request=null)}dispose(){this.clear(),this.root.remove()}}const Rn=r=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${r}"/></svg>`,mg=Rn("M5 21V4m0 0c5-5 9 5 15 0v10c-6 5-10-5-15 0"),gg=Rn("m13 2-9 12h7l-1 8 10-12h-7l1-8"),Xr=Rn("m9 5 7 7-7 7"),Cc=r=>r.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);class vg{constructor(t,e){this.race=t,this.actions=e,this.root=document.createElement("div"),this.root.className="interface",document.querySelector("#app").append(this.root),this.root.innerHTML=`
   <header class="topbar"><a class="wordmark" href="#" aria-label="回主選單"><span class="brand-glyph">T</span>TIDEBREAK<span class="edition">COASTAL CIRCUIT</span></a><div class="toolbar"><button class="icon-button" id="quality" title="切換畫質">畫質 · 標準</button><button class="icon-button" id="sound" title="切換音效" aria-label="關閉音效">${Rn("M11 5 6 9H3v6h3l5 4V5m4 3c3 2 3 6 0 8m3-11c5 4 5 10 0 14")}</button><button class="icon-button hidden" id="pause-button" aria-label="暫停比賽">${Rn("M9 5v14M15 5v14")}</button></div></header>
   <section id="menu" class="menu"><div class="menu-content"><div class="eyebrow"><span></span> 浪灣市 · 海岸巡迴賽</div><h1>TIDE<br><span>BREAK.</span></h1><div class="title-zh">浪灣疾行</div><p class="menu-copy">追上海風。把下一個彎，<br>變成你的超車機會。</p><div class="race-info"><span>${mg}<strong>3</strong> 圈</span><span><strong>1–8</strong> 位車手</span><span>${ci.length} 條賽道</span></div><button id="choose" class="primary large">選擇座駕 ${Xr}</button><div class="desktop-note">鍵盤操作 · 單人競速</div></div><div class="track-tag"><span>01 / COASTLINE</span><strong>晴空海岸</strong><small>海濱直道 ／ 珊瑚髮夾 ／ 港灣 S 彎</small></div><div class="menu-footer"><span>原創街機卡丁車</span><span>海風正好，出發吧。</span></div></section>
   <section id="hud" class="hud hidden"><div class="race-top"><div class="position-box"><span class="micro">POSITION</span><strong id="position">8<span>/ 8</span></strong></div><div class="lap-box"><span class="micro">LAP</span><strong id="lap">1 <span>/ 3</span></strong></div><div class="timer-box"><span class="micro">RACE TIME</span><strong id="timer">00:00.000</strong></div></div><div id="race-message" class="race-message"></div><div class="map-panel"><div class="map-title">晴空海岸 <span>01</span></div><canvas id="minimap" width="380" height="340" aria-label="賽道小地圖"></canvas><span class="map-label"><i></i> YOU <span>● 對手</span></span></div><div class="driving-hud"><div id="boost-label" class="boost-label">NITRO BOOST</div><div class="speed"><strong id="speed">0</strong><span>KM/H</span></div><div class="nitro-row"><span class="micro">NITRO <kbd>SHIFT</kbd></span><div id="nitro" class="nitro-cells">${[0,1,2].map(()=>`<span>${gg}</span>`).join("")}</div></div><div class="nitro-recharge"><i id="nitro-recharge"></i></div><div class="drift-row"><span class="micro">DRIFT <kbd>SPACE</kbd></span><span id="drift-level">READY</span></div><div class="drift-track"><i id="drift-fill"></i><span></span><span></span></div></div><div class="control-strip"><span><kbd>WASD</kbd> 駕駛</span><span><kbd>SPACE</kbd> 漂移</span><span><kbd>SHIFT</kbd> 氮氣</span><span><kbd>Z / X</kbd> 左 / 右道具</span><span><kbd>R</kbd> 救援</span><span><kbd>ESC</kbd> 暫停</span></div></section>
   <div id="countdown" class="countdown hidden"></div><div id="speed-lines" class="speed-lines"></div><div id="toast" class="toast"></div>
   <section id="pause-screen" class="modal-layer hidden"><div class="pause-card"><span class="eyebrow">TAKE A BREATHER</span><h2>稍作停靠。</h2><p>比賽已暫停，準備好就繼續。</p><button id="resume" class="primary">繼續比賽 ${Xr}</button><button id="restart-pause" class="secondary">重新比賽</button><button id="menu-pause" class="text-button">回主選單</button><div class="pause-controls"><p><kbd>W / ↑</kbd> 加速 <kbd>S / ↓</kbd> 煞車 / 倒車</p><p><kbd>A / ←</kbd> 左轉 <kbd>D / →</kbd> 右轉</p><p><kbd>SPACE + 方向</kbd> 漂移，放開獲得小噴射</p><p><kbd>SHIFT</kbd> 氮氣 <kbd>Z / X</kbd> 左 / 右道具 <kbd>R</kbd> 救援 <kbd>F3</kbd> 除錯</p></div></div></section>
   <section id="results" class="modal-layer results-layer hidden"><div class="results-card"><div class="results-header"><div><span class="eyebrow">COASTAL CIRCUIT · RACE COMPLETE</span><h2 id="results-title">衝線！</h2></div><div class="finish-medal" id="finish-position">01</div></div><div class="result-summary"><div><span id="summary-label-one">你的完賽時間</span><strong id="finish-time"></strong></div><div><span id="summary-label-two">最快單圈</span><strong id="best-lap"></strong></div></div><div class="table-head"><span>名次 / 車手</span><span id="result-column">完賽時間</span></div><ol id="leaderboard"></ol><p id="result-note" class="result-note"></p><div class="result-actions"><button id="next-result" class="primary hidden">下一步 · 結算積分 →</button><button id="restart" class="primary">再跑一場 ${Xr}</button><button id="back-menu" class="secondary">回主選單</button></div></div></section>
   <aside id="debug" class="debug hidden"><b>TELEMETRY · F3</b><pre id="debug-data"></pre><button id="debug-reset">Reset kart</button><button id="debug-restart">Restart race</button></aside>`,this.get("choose").insertAdjacentHTML("beforebegin",'<button id="online" class="primary large multiplayer-button">多人競速 · 建立 / 加入房間</button>'),this.get("choose").insertAdjacentHTML("afterend",'<button id="championship" class="secondary large cup-button">排名賽 · 三站積分巡迴 →</button>'),this.get("choose").textContent="單站競速 · 選擇座駕",this.get("choose").classList.replace("primary","secondary");const i=document.createElement("div");i.className="menu-entrance",this.get("online").before(i),i.append(this.get("online")),i.insertAdjacentHTML("beforeend",`<button id="records-open" class="records-button" aria-label="查看各賽道最速紀錄" title="各賽道最速紀錄">${Rn("M8 3h8v6a4 4 0 0 1-8 0V3m0 2H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 2v5m-4 3h8m-6-3h4v3H10z")}<span>最速紀錄</span></button>`),this.get("records-open").onclick=()=>this.records.show();const n=document.createElement("div");n.className="menu-race-modes hidden",this.get("choose").before(n),n.append(this.get("choose"),this.get("championship")),this.get("menu").tabIndex=0,this.get("menu").setAttribute("aria-label","遊戲首頁，可向下捲動"),this.root.querySelector(".desktop-note").textContent="鍵盤 / 觸控操作 · 1–8 人連線 · 無需登入",this.get("hud").insertAdjacentHTML("beforeend",'<div id="finish-countdown" class="finish-countdown hidden" role="timer" aria-label="完賽結算倒數"><div><small>首位車手已完賽</small><strong><b id="finish-seconds">20</b><span>秒後結算</span></strong></div><p>逾時將依進度估算完賽成績</p></div><div id="race-format" class="race-format"></div><div id="network-status" class="network-status"></div><div id="inventory" class="inventory"><div id="item-slot" class="item-slot"><span id="item-symbol">?</span><div><strong id="item-name">空道具槽</strong><small id="item-detail"></small></div><kbd>Z</kbd></div><div id="item-slot-right" class="item-slot"><span id="item-symbol-right">?</span><div><strong id="item-name-right">空道具槽</strong><small id="item-detail-right"></small></div><kbd>X</kbd></div><small id="item-status"></small></div>'),this.menu=this.get("menu"),this.hud=this.get("hud");const s=document.createElement("div");s.className="race-left-stack",s.append(this.hud.querySelector(".race-top"),this.get("race-format"),this.liveRecord.root,this.get("network-status"),this.get("inventory"),this.get("race-message")),this.hud.append(s),this.pauseScreen=this.get("pause-screen"),this.results=this.get("results"),this.results.querySelector(".result-summary").after(this.resultRecord.root),this.count=this.get("countdown"),this.debug=this.get("debug"),this.mini=this.get("minimap"),this.ctx=this.mini.getContext("2d");const a=(o,c)=>this.get(o).addEventListener("click",c);a("choose",e.garage),a("online",e.online),a("championship",e.championship),a("next-result",e.nextResult),a("pause-button",e.pause),a("resume",e.pause),a("restart-pause",e.restart),a("menu-pause",e.menu),a("restart",e.restart),a("back-menu",e.menu),a("debug-reset",e.reset),a("debug-restart",e.restart),a("sound",e.audio),a("quality",e.quality),this.root.querySelector(".wordmark").addEventListener("click",o=>{o.preventDefault(),this.race.state==="menu"?e.menu():e.pause()})}race;actions;root;menu;hud;pauseScreen;results;count;mini;ctx;debug;showDebug=!1;garage=!1;lastResult="";series=[];cupStage=0;resultView="times";canAdvance=!0;resultReady=!0;resultsBusy=!1;liveRecord=new fg;records=new ug;resultRecord=new pg;newRecordIds=[];lastStage="";elements=new Map;mapCache=null;get(t){let e=this.elements.get(t);return e||(e=this.root.querySelector("#"+t),e&&this.elements.set(t,e)),e}showToast(t){const e=this.get("toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}toggleDebug(){this.showDebug=!this.showDebug,this.debug.classList.toggle("hidden",!this.showDebug)}update(t,e,i){const n=this.race,s=n.player.body,a=n.state!=="menu",o=n.state==="finished";this.menu.classList.toggle("hidden",a||this.garage),this.hud.classList.toggle("hidden",!a||o),this.get("pause-button").classList.toggle("hidden",!a||o),this.pauseScreen.classList.toggle("hidden",!n.paused),this.results.classList.toggle("hidden",!o),this.root.classList.toggle("in-race",a);const c=`${n.position}<span>/ ${n.racers.length}</span>`,l=`${Math.min(3,n.player.completedLaps+1)} <span>/ 3</span>`;this.get("position").innerHTML!==c&&(this.get("position").innerHTML=c),this.get("lap").innerHTML!==l&&(this.get("lap").innerHTML=l),this.get("timer").textContent=Ri(n.player.finishTime??n.time),a&&!o&&this.liveRecord.update(n.time,n.player.finishTime,n.player.simulated),this.get("speed").textContent=String(Math.round(s.speed*3.6)),this.get("nitro").querySelectorAll("span").forEach((m,p)=>m.classList.toggle("charged",p<s.nitroCharges)),this.get("nitro-recharge").style.width=s.nitroMeter*100+"%",this.get("drift-fill").style.width=Math.min(100,s.driftCharge/2.7*100)+"%",this.get("drift-fill").style.background=["#d2e4e3","#60dcff","#ffdc6c","#ff97d7"][s.driftLevel],this.get("drift-level").textContent=s.drifting?s.driftLevel?"LEVEL "+s.driftLevel:"CHARGING":"READY";const h=this.get("boost-label");h.classList.toggle("visible",s.boost),h.textContent=s.itemBoostTime>0?"GALE BOOST":s.nitroTime>0?"NITRO BOOST":"MINI TURBO "+s.turboLevel,this.get("speed-lines").classList.toggle("active",s.boost&&a&&!o&&!n.paused);const d=n.finishRemaining,f=this.get("finish-countdown");f.classList.toggle("hidden",d===null||n.state!=="racing"),f.classList.toggle("urgent",d!==null&&d<=5);const u=String(Math.ceil(d??20));this.get("finish-seconds").textContent!==u&&(this.get("finish-seconds").textContent=u);const g=s.vx*s.projection.tx+s.vz*s.projection.tz<-4;this.get("race-message").textContent=n.player.finishTime!==null?"已完賽 · 自動巡航，等待本關結算":g?"方向相反 · 請沿賽道前進":s.airborne?"高空落下 · 保持方向，準備落地":s.route?"捷徑路線 · 小心窄道":s.offroad?"草地減速 · 回到柏油路面":i?"QA 自動駕駛中":"";let v=n.state==="countdown"?n.countdown>3?"READY":String(Math.ceil(n.countdown)):n.state==="racing"&&n.time<.85?"GO!":"";this.count.textContent!==v&&(this.count.textContent=v,this.count.classList.remove("pop"),this.count.offsetWidth,this.count.classList.add("pop")),this.count.classList.toggle("hidden",!v||n.paused),this.get("network-status").classList.toggle("hidden",!n.online),this.get("inventory").classList.toggle("hidden",!n.items.enabled);for(const m of[0,1]){const p=m?"-right":"",y=m?s.itemTypeRight:s.itemType,_=m?s.itemChargesRight:s.itemCharges,x=er[y]??er[0];this.get("item-symbol"+p).textContent=x.short,this.get("item-name"+p).textContent=x.name,this.get("item-detail"+p).textContent=y?`${_} 次 · ${m?"X":"Z"} 使用`:"等待補給 ?",this.get("item-slot"+p).title=x.description,this.get("item-slot"+p).classList.toggle("loaded",y>0)}this.get("item-status").textContent=s.hitTime>0?s.hitSlide?"受到攻擊 · 滑移旋轉":"受到攻擊 · 停車旋轉":s.shieldTime>0?`護罩 1 次 · ${s.shieldTime.toFixed(1)}s`:s.itemBoostTime>0?`推進 ${s.itemBoostTime.toFixed(1)}s`:"",this.root.querySelector(".map-title").textContent=n.track.definition.name,this.pauseScreen.querySelector("p").textContent=n.online?"線上比賽會繼續進行，關閉選單即可繼續駕駛。":"比賽已暫停，準備好就繼續。",this.get("restart-pause").classList.toggle("hidden",n.online),this.get("restart").textContent=n.online?"回房間 · 重新開始":n.settings.mode==="championship"?"重跑巡迴排名賽":"再跑一場",this.get("race-format").textContent=`${n.settings.mode==="championship"?`浪灣巡迴 · ${this.cupStage+1} / ${Je(n.settings.cupTracks).length} 站`:"單站競速"} · ${n.settings.aiEnabled===!1?"無 AI":"AI "+Pn[n.settings.difficulty].name} · ${Dc[n.settings.activeWeather??"sunny"]} · ${n.items.enabled?"道具賽":"純競速"}`,a&&this.drawMap(),o?this.updateResults():this.resultRecord.clear(),this.showDebug&&(this.get("debug-data").textContent=`FPS ${t.toFixed(0)} | calls ${e}
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
AI recovery ${n.racers.slice(1).reduce((m,p)=>m+p.ai.recoveries,0)}`)}drawMap(){const t=this.ctx,e=this.race.track,i=this.mini.width,n=this.mini.height;t.clearRect(0,0,i,n);const s=e.bounds,a=Math.min((i-30)/(s.maxX-s.minX),(n-30)/(s.maxZ-s.minZ)),o=(c,l)=>[i/2+(c-(s.minX+s.maxX)/2)*a,n/2+(l-(s.minZ+s.maxZ)/2)*a];if(this.mapCache)t.drawImage(this.mapCache,0,0);else{t.beginPath(),e.points.forEach((d,f)=>{const[u,g]=o(d.x,d.z);f===0?t.moveTo(u,g):t.lineTo(u,g)}),t.closePath(),t.strokeStyle="rgba(227,244,236,.17)",t.lineWidth=15,t.lineJoin="round",t.stroke(),t.strokeStyle="rgba(237,250,238,.65)",t.lineWidth=3,t.stroke();for(const d of e.branches){t.beginPath(),d.points.forEach((u,g)=>{const[v,m]=o(u.x,u.z);g?t.lineTo(v,m):t.moveTo(v,m)});const f=e.definition.theme==="city";t.strokeStyle=f?"rgba(237,250,238,.65)":"#ffbc69",t.lineWidth=3,t.setLineDash(f?[]:[5,4]),t.stroke(),t.setLineDash([])}t.fillStyle="#73e8ff";for(const d of this.race.items.enabled?e.itemLocations:[]){const f=e.routeAt(d.route,d.u),[u,g]=o(f.x,f.z);t.fillRect(u-4,g-4,8,8)}const c=e.at(0),[l,h]=o(c.x,c.z);t.strokeStyle="#ffffff",t.lineWidth=4,t.beginPath(),t.moveTo(l-c.nx*8,h-c.nz*8),t.lineTo(l+c.nx*8,h+c.nz*8),t.stroke(),this.mapCache=document.createElement("canvas"),this.mapCache.width=i,this.mapCache.height=n,this.mapCache.getContext("2d").drawImage(this.mini,0,0)}for(const c of[...this.race.racers].reverse()){const[l,h]=o(c.body.x,c.body.z);t.beginPath(),t.arc(l,h,c.id===this.race.localPlayerId?7:4.6,0,Math.PI*2),t.fillStyle=c.id===this.race.localPlayerId?"#dcfa57":"#"+c.color.toString(16).padStart(6,"0"),t.fill(),c.id===this.race.localPlayerId&&(t.strokeStyle="#143d47",t.lineWidth=3,t.stroke())}}updateResults(){const t=this.race,e=t.settings.mode==="championship",i=e&&this.resultView==="points",n=Je(t.settings.cupTracks).length,s=this.cupStage>=n-1;this.resultRecord.update(t.track.id,t.player.finishTime,t.player.simulated,!t.online||this.resultReady,this.newRecordIds.join(","));const a=this.get("next-result");a.classList.toggle("hidden",!e||i&&s),a.disabled=!this.canAdvance||!this.resultReady||this.resultsBusy,a.textContent=this.resultReady?this.canAdvance?i?`下一站 · ${Cn(Je(t.settings.cupTracks)[Math.min(n-1,this.cupStage+1)]).name} →`:"下一步 · 結算累計積分 →":"等待房主繼續…":"正在同步成績…",this.get("restart").classList.toggle("hidden",e&&!(i&&s)),this.get("restart").disabled=t.online&&!this.canAdvance;const o=`${this.resultView}:${this.cupStage}:${this.series.length}:${this.newRecordIds.join()}:`+t.standings.map(c=>`${c.id}:${c.finishTime}:${c.completedLaps}`).join("|");if(o!==this.lastResult){if(this.lastResult=o,this.get("results-title").textContent=e?`第 ${this.cupStage+1} 站 · 衝線！`:"衝線！",this.get("summary-label-one").textContent="你的完賽時間",this.get("summary-label-two").textContent="最快單圈",this.get("result-column").textContent="完賽時間",i){const c=Rl(this.series),l=c.find(h=>h.id===t.localPlayerId);if(!l)return;this.get("results-title").textContent=s?"總積分排名":"累計積分 · 浪灣巡迴",this.get("finish-position").textContent=String(c.indexOf(l)+1).padStart(2,"0"),this.get("summary-label-one").textContent="你的累計積分",this.get("finish-time").textContent=l.points+" PTS",this.get("summary-label-two").textContent=s?"巡迴總用時":"本關獲得",this.get("best-lap").textContent=s?Ri(l.totalTime):"+"+l.lastPoints+" PTS",this.get("result-column").textContent="原積分 + 本關 → 累計",this.get("leaderboard").innerHTML=c.map((h,d)=>`<li class="${h.id===t.localPlayerId?"is-player":""} points-arrive"><span class="result-rank">${String(d+1).padStart(2,"0")}</span><i style="background:#${(t.racer(h.id)?.color??14215393).toString(16)}"></i><strong>${Cc(h.name)}<em>${h.id===t.localPlayerId?"你":h.human?"PLAYER":"AI"}</em></strong><span class="points-total"><small>${h.points-h.lastPoints} + ${h.lastPoints}</small><b>${h.points}</b></span></li>`).join(""),this.get("result-note").textContent=`${s?n+" 站完成！":"完成 "+(this.cupStage+1)+" / "+n+" 站。"} 名次積分 15 / 12 / 10 / 7 / 5 / 3 / 2 / 1；未完賽 0 分。同分先比較冠、亞、季軍等名次次數，再比總用時。`;return}this.get("finish-position").textContent=String(t.position).padStart(2,"0"),this.get("finish-time").textContent=Ri(t.player.finishTime)+(t.player.simulated?" *":""),this.get("best-lap").textContent=Number.isFinite(t.player.bestLap)?Ri(t.player.bestLap):"—",this.get("leaderboard").innerHTML=t.standings.map((c,l)=>`<li class="${c.id===t.localPlayerId?"is-player":""}"><span class="result-rank">${String(l+1).padStart(2,"0")}</span><i style="background:#${c.color.toString(16)}"></i><strong>${Cc(c.name)}${this.newRecordIds.includes(c.id)?'<small class="new-record">NEW RECORD</small>':""}${c.id===t.localPlayerId?"<em>你</em>":c.human?"":"<em>AI</em>"}</strong><span>${c.disconnected&&c.finishTime===null?"離線 · 未完賽":c.finishTime!==null?Ri(c.finishTime)+(c.simulated?" *":""):"—"}</span></li>`).join(""),this.get("result-note").textContent=t.racers.some(c=>c.simulated)?"* 為 20 秒期限內未完賽的估算成績；依已完成里程、平均車速與剩餘距離計算，保留當下順位。":"所有車手已完賽。下一場，換你領跑。"}}}class _g{ctx=null;enabled=!0;engine=null;gain=null;init(){this.ctx||(this.ctx=new AudioContext,this.engine=this.ctx.createOscillator(),this.gain=this.ctx.createGain(),this.engine.type="triangle",this.gain.gain.value=0,this.engine.connect(this.gain),this.gain.connect(this.ctx.destination),this.engine.start()),this.ctx.resume()}tone(t,e=.12,i=.055,n="sine"){if(!this.ctx||!this.enabled)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain(),o=this.ctx.currentTime;s.type=n,s.frequency.setValueAtTime(t,o),a.gain.setValueAtTime(i,o),a.gain.exponentialRampToValueAtTime(.001,o+e),s.connect(a),a.connect(this.ctx.destination),s.start(o),s.stop(o+e),s.onended=()=>{s.disconnect(),a.disconnect()}}boost(){this.tone(220,.3,.045,"sawtooth"),this.tone(880,.5,.025)}finish(){[523,659,784,1047].forEach((t,e)=>setTimeout(()=>this.tone(t,.4,.05),e*150))}update(t,e){!this.ctx||!this.engine||!this.gain||(this.engine.frequency.setTargetAtTime(45+t*4.5,this.ctx.currentTime,.1),this.gain.gain.setTargetAtTime(e&&this.enabled?.019:0,this.ctx.currentTime,.06))}toggle(){this.enabled=!this.enabled}}class Wi{domElement=document.createElement("canvas");ctx=this.domElement.getContext("2d",{alpha:!1});outputColorSpace="";toneMapping=0;toneMappingExposure=1;info={render:{calls:0,triangles:0},memory:{geometries:0,textures:0}};width=1;height=1;pixelRatio=1;staticShapes=[];cacheReady=!1;geometry=new WeakMap;faces=[];viewMatrix=new Bt;projection=new Bt;normal=new D;a=new D;b=new D;c=new D;light=new D(-.4,.85,.3).normalize();setPixelRatio(t){this.pixelRatio=1}setSize(t,e){this.width=t,this.height=e,this.domElement.width=t,this.domElement.height=e}invalidate(){this.cacheReady=!1,this.staticShapes=[]}shape(t,e,i){const n=Array.isArray(t.material)?t.material[0]:t.material;if(!n.visible||n.opacity<.1)return null;const s=t.geometry;let a=this.geometry.get(s);if(!a){const h=s.getAttribute("position");if(!h)return null;const d=new Float32Array(h.count*3);for(let u=0;u<h.count;u++)d[u*3]=h.getX(u),d[u*3+1]=h.getY(u),d[u*3+2]=h.getZ(u);const f=s.index?Array.from(s.index.array):Array.from({length:h.count},(u,g)=>g);a={vertices:d,indices:f},this.geometry.set(s,a)}s.boundingSphere||s.computeBoundingSphere();const o=s.boundingSphere.center.clone().applyMatrix4(e),c=s.boundingSphere.radius*e.getMaxScaleOnAxis();if(c>1700)return null;let l=0;return c>200&&o.y<0?l=-2:c>200&&o.y<1&&(l=-1),{...a,color:i??n.color??new Ct(16777215),opacity:n.opacity,matrix:e.clone(),center:o,radius:c,layer:l,doubleSided:n.side===Ee}}collect(t,e){const i=[];return t.traverse(n=>{if(!(n instanceof Ot)||!n.visible)return;let s=n,a=!1;for(;s;){if(!s.visible)return;s.userData.dynamic&&(a=!0),s=s.parent}if(a===e)if(n instanceof ei){const o=new Bt,c=new Bt,l=new Ct;for(let h=0;h<n.count;h++){if(n.getMatrixAt(h,o),o.elements[0]===0&&o.elements[5]===0&&o.elements[10]===0)continue;c.multiplyMatrices(n.matrixWorld,o),n.instanceColor?n.getColorAt(h,l):l.set(16777215);const d=this.shape(n,c,n.instanceColor?l.clone():void 0);d&&i.push(d)}}else{const o=this.shape(n,n.matrixWorld);o&&i.push(o)}}),i}render(t,e){t.updateMatrixWorld(),e.updateMatrixWorld(),this.viewMatrix.copy(e.matrixWorld).invert(),this.projection.copy(e.projectionMatrix),this.cacheReady||(this.staticShapes=this.collect(t,!1),this.cacheReady=!0),this.faces.length=0;let i=0;for(const s of[...this.staticShapes,...this.collect(t,!0)]){const a=s.center.clone().applyMatrix4(this.viewMatrix),o=Math.tan(e.fov*Math.PI/360);if(a.z-s.radius>-.2||a.z+s.radius<-145||Math.abs(a.x)>-a.z*o*e.aspect+s.radius||Math.abs(a.y)>-a.z*o+s.radius)continue;i++;const c=new Bt().multiplyMatrices(this.viewMatrix,s.matrix),l=c.elements,h=s.vertices,d=new Float32Array(h.length);for(let g=0;g<h.length;g+=3){const v=h[g],m=h[g+1],p=h[g+2];d[g]=l[0]*v+l[4]*m+l[8]*p+l[12],d[g+1]=l[1]*v+l[5]*m+l[9]*p+l[13],d[g+2]=l[2]*v+l[6]*m+l[10]*p+l[14]}const f=new It().getNormalMatrix(s.matrix),u=s.color.clone().convertLinearToSRGB();for(let g=0;g<s.indices.length;g+=3){const v=s.indices[g]*3,m=s.indices[g+1]*3,p=s.indices[g+2]*3;let y=[[d[v],d[v+1],d[v+2]],[d[m],d[m+1],d[m+2]],[d[p],d[p+1],d[p+2]]];if(y.every(R=>R[2]>-.3)||y.every(R=>R[2]<-210))continue;if(y.some(R=>R[2]>-.3)){const R=[];for(let I=0;I<y.length;I++){const z=y[I],B=y[(I+1)%y.length],X=z[2]<=-.3,G=B[2]<=-.3;if(X&&R.push(z),X!==G){const et=(-.3-z[2])/(B[2]-z[2]);R.push([z[0]+(B[0]-z[0])*et,z[1]+(B[1]-z[1])*et,-.3])}}y=R}if(y.length<3)continue;const _=[];for(const R of y)_.push(this.width*.5+R[0]/-R[2]*this.projection.elements[0]*this.width*.5,this.height*.5-R[1]/-R[2]*this.projection.elements[5]*this.height*.5);const x=(_[2]-_[0])*(_[5]-_[1])-(_[3]-_[1])*(_[4]-_[0]);if(!s.doubleSided&&x>=0||_.filter((R,I)=>I%2===0).every(R=>R<0)||_.filter((R,I)=>I%2===0).every(R=>R>this.width)||_.filter((R,I)=>I%2===1).every(R=>R<0)||_.filter((R,I)=>I%2===1).every(R=>R>this.height))continue;this.a.fromArray(h,v),this.b.fromArray(h,m),this.c.fromArray(h,p),this.normal.crossVectors(this.b.sub(this.a),this.c.sub(this.a)).applyMatrix3(f).normalize();const S=.7+Math.max(0,this.normal.dot(this.light))*.33,T=y.reduce((R,I)=>R-I[2],0)/y.length,A=Math.min(.65,Math.max(0,(T-100)/160)),P=(u.r*S*(1-A)+.64*A)*255,E=(u.g*S*(1-A)+.87*A)*255,M=(u.b*S*(1-A)+.93*A)*255;this.faces.push({points:_,depth:T,fill:`rgb(${Math.min(255,P)|0},${Math.min(255,E)|0},${Math.min(255,M)|0})`,opacity:s.opacity,layer:s.layer})}}const n=this.ctx;n.globalAlpha=1,n.fillStyle=t.userData.showroom?"#173e49":"#a4dfed",n.fillRect(0,0,this.width,this.height),n.fillStyle="#4fc5d1",t.userData.showroom||n.fillRect(0,this.height*.42,this.width,this.height*.58),this.faces.sort((s,a)=>s.layer-a.layer||a.depth-s.depth);for(const s of this.faces){n.globalAlpha=s.opacity,n.fillStyle=s.fill,n.beginPath(),n.moveTo(s.points[0],s.points[1]);for(let a=2;a<s.points.length;a+=2)n.lineTo(s.points[a],s.points[a+1]);n.closePath(),n.fill(),s.opacity===1&&(n.lineWidth=.55,n.strokeStyle=s.fill,n.stroke())}n.globalAlpha=1,this.info.render.calls=i,t.traverse(s=>{if(!s.userData.plate||!s.visible)return;for(let u=s.parent;u;u=u.parent)if(!u.visible)return;const a=new D(0,0,1).transformDirection(s.matrixWorld),o=s.getWorldPosition(new D);if(a.dot(e.position.clone().sub(o))<=0||o.distanceTo(e.position)>45)return;const c=o.clone().project(e);if(c.z>1||c.z<0)return;const l=new D(.86,0,0).applyMatrix4(s.matrixWorld).project(e),h=Math.max(24,Math.min(130,Math.abs(l.x-c.x)*this.width)),d=(c.x*.5+.5)*this.width,f=(-c.y*.5+.5)*this.height;n.fillStyle="#fff5d8",n.fillRect(d-h/2,f-h*.16,h,h*.32),n.fillStyle="#174953",n.font=`bold ${Math.max(8,h*.15)}px system-ui`,n.textAlign="center",n.textBaseline="middle",n.fillText(String(s.userData.plate),d,f,h*.92)}),this.info.render.triangles=this.faces.length,this.info.memory.geometries=this.staticShapes.length}dispose(){this.staticShapes=[],this.faces=[]}}const Pc=1e4,gi=["x","y","z","vx","vz","heading","steering","speed","drifting","driftDirection","driftCharge","driftLevel","nitroCharges","nitroMeter","nitroTime","turboTime","turboLevel","boostEvent","collisionEvent","resetEvent","miniTurboEvent","nitroLatch","offroad","progress","safeS","vy","airborne","pitch","landingEvent","route","routeU","itemType","itemCharges","itemLatch","itemCooldown","shieldTime","itemBoostTime","pulseTime","hitTime","itemEvent","pickupEvent","spinPhase","spinEvent","itemTypeRight","itemChargesRight","itemLatchRight","itemCooldownRight","lastPickupType","lastPickupSlot","shieldEvent","shieldImpactTime","hitSlide","roll"];function Qn(r){const t=["珊瑚 CORA","岬角 KAI","泡泡 BUB","燈塔 LUMI","波點 DOT","海鹽 SALT","小錨 ANKR"];return Array.from({length:8},(e,i)=>{const n=r.members.find(s=>s.seat===i);return{id:i,name:n?.name??t[Math.max(0,i-r.capacity)%t.length],kart:n?.kart??i%3,human:!!n,disconnected:!!n&&n.seen<0}}).filter(e=>r.aiEnabled!==!1||e.human)}function xg(r){const t=r??{};return{throttle:t.throttle===1?1:0,brake:t.brake===1?1:0,steer:typeof t.steer=="number"&&Number.isFinite(t.steer)?Math.max(-1,Math.min(1,t.steer)):0,drift:t.drift===!0,nitro:t.nitro===!0,item:t.item===!0,itemRight:t.itemRight===!0}}const vl=new URLSearchParams(location.search),Lc=vl.has("nortc"),yg=vl.has("relayonly"),Mg=[{urls:["stun:stun.cloudflare.com:3478","stun:stun.l.google.com:19302"]}];class Sg{constructor(t,e){this.events=t,this.obstacles=e,window.addEventListener("pagehide",this.pagehide)}events;obstacles;room=null;id="";token="";cursor=0;round=0;seq=0;resetSeq=0;input=so();peers=new Map;signals=[];worker=null;snapshot=null;closed=!1;pollBusy=!1;pollTimer=0;inputTimer=0;lastGood=0;lastSeq=-1;lastInputSeq=new Map;finishSent=!1;dropped=new Set;leaving=new Set;generation=0;qaAuto=!1;ws=null;wsOpen=!1;wsTimer=0;wsAttempts=0;pingTimer=0;rtt=-1;rttAt=0;snapAt=0;iceServers=Mg;gateway=!1;get isHost(){return this.room?.host===this.id}get seat(){return this.room?.members.find(t=>t.id===this.id)?.seat??0}peerOpen(t){const e=this.peers.get(t);return e?.pc.connectionState==="connected"&&e.channel?.readyState==="open"}others(){return this.room?this.room.members.filter(t=>t.id!==this.id&&t.seen>=0&&!this.leaving.has(t.id)):[]}get direct(){return this.room?this.isHost?this.others().filter(t=>Date.now()-t.seen<Pc).every(t=>this.peerOpen(t.id)):this.peerOpen(this.room.host):!1}get status(){if(!this.room)return"正在連線…";if(this.room.phase==="lobby")return this.wsOpen?"房間連線正常 · 即時":"房間連線正常";const t=this.rtt>=0&&Date.now()-this.rttAt<6e3?` ${Math.round(this.rtt)}ms`:"";if(this.gateway)return this.wsOpen?"伺服器主持"+t:"伺服器主持 · 輪詢中";if(this.isHost){const e=this.others();return e.length?`主持中 · 直連 ${e.filter(i=>this.peerOpen(i.id)).length}/${e.length}`:"主持中"}return this.direct?"直連"+t:this.wsOpen?"伺服器轉送"+t:"伺服器輪詢"}async api(t,e){const i=await fetch(An(t),{method:"POST",headers:{"content-type":"application/json",...Jn(),...this.token?{authorization:"Bearer "+this.token}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(7e3)}),n=await i.json();if(i.status===401&&ls&&n.error==="請先輸入通關密碼"&&(za(""),location.reload()),!i.ok)throw Object.assign(new Error(n.error??"連線失敗"),{status:i.status});return n}async enter(t,e,i,n,s="coast",a=Qi){const o=await this.api(n?`/api/rooms/${n.toUpperCase()}/join`:"/api/rooms",{name:t,kart:e,capacity:i,track:s,...a});this.id=o.id,this.token=o.token,this.lastGood=Date.now(),this.room=o.room,this.events.room(this.room),this.connectWs(),await this.refreshIce(),this.poll(),this.inputTimer=window.setInterval(()=>this.sendInput(),33),this.pingTimer=window.setInterval(()=>this.ping(),2e3)}async action(t,e={}){if(!this.room)return;const i=await this.api(`/api/rooms/${this.room.code}/action`,{id:this.id,action:t,...e});return i.room&&this.acceptRoom(i.room,i.snapshot),i}acceptRoom(t,e){if(this.closed||t.revision<(this.room?.revision??0))return;const i=!!this.room&&t.host!==this.room.host,n=t.revision!==(this.room?.revision??-1);if(i){this.worker?.terminate(),this.worker=null,this.finishSent=t.phase==="finished",this.lastInputSeq.clear(),this.dropped.clear();for(const s of this.peers.values())s.pc.close();this.peers.clear(),this.signals=[]}if(this.room=t,this.events.room(t),t.phase==="closed"){this.shutdown("房間已關閉");return}t.phase==="lobby"&&this.worker&&(this.worker.terminate(),this.worker=null,this.snapshot=null,this.finishSent=!1);for(const[s,a]of this.peers)t.members.some(o=>o.id===s)||(a.pc.close(),this.peers.delete(s));if(this.isHost&&!this.gateway)for(const s of t.members){if(s.id===this.id)continue;const a=s.seen<0||this.leaving.has(s.id)||Date.now()-s.seen>Pc,o=this.peers.get(s.id);!a&&(!o||(o.pc.connectionState==="failed"||o.pc.connectionState==="closed")&&Date.now()-o.created>8e3)&&this.offer(s.id).catch(()=>{}),this.worker&&a!==this.dropped.has(s.seat)&&(this.worker.postMessage({kind:"disconnect",seat:s.seat,value:a}),a?this.dropped.add(s.seat):this.dropped.delete(s.seat))}t.phase!=="lobby"&&t.round!==this.round?(this.round=t.round,this.itemSeq=0,this.itemRightSeq=0,this.seq=0,this.resetSeq=0,this.lastSeq=-1,this.snapshot=e?.round===t.round?e:null,this.finishSent=!1,this.lastInputSeq.clear(),this.dropped.clear(),this.worker?.terminate(),this.worker=null,this.beginRound(t).catch(s=>this.events.error(s.message))):i&&this.isHost&&t.phase!=="lobby"&&(e?.round===t.round&&(!this.snapshot||e.seq>this.snapshot.seq)&&(this.snapshot=e),this.beginRound(t).catch(s=>this.events.error(s.message))),this.isHost&&n&&this.broadcastRoom()}broadcastRoom(){if(!this.room||!this.isHost)return;const t=JSON.stringify({kind:"room-state",room:this.room});for(const{control:i}of this.peers.values())i?.readyState==="open"&&i.send(t);const e=this.others().filter(i=>this.peers.get(i.id)?.control?.readyState!=="open").map(i=>i.id);e.length&&this.wsSend({kind:"room-state",to:e,room:this.room})}async beginRound(t){if(await this.events.start(t),!(this.closed||this.round!==t.round||this.room?.phase==="lobby")){if(this.snapshot&&this.events.snapshot(this.snapshot),this.gateway){this.wsSend({kind:"obstacles",to:"server",round:t.round,obstacles:this.obstacles});return}this.isHost&&!this.worker&&(this.worker=new Worker(new URL(""+new URL("RaceWorker-D_Bp0-GK.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=e=>this.hostSnapshot(e.data),this.worker.onerror=()=>this.events.error("比賽主持程式發生錯誤，請房主重新開賽"),this.worker.postMessage({kind:"init",round:t.round,track:t.track,settings:bn(t),roster:Qn(this.room??t),obstacles:this.obstacles,resume:this.snapshot?.round===t.round?this.snapshot:void 0}))}}async poll(){if(this.closed||!this.room||this.pollBusy)return;this.pollBusy=!0;const t=this.generation,e=this.signals.splice(0,24);this.room.phase==="racing"||this.room.phase;try{const i=this.room.phase==="racing",n=this.gateway||!this.isHost,s=this.gateway?!1:this.direct,a=n&&(this.snapAt===0||performance.now()-this.snapAt>400),o=i&&!s&&(!this.wsOpen||a),c=await this.api(`/api/rooms/${this.room.code}/sync`,{id:this.id,cursor:this.cursor,signals:e,relay:o,recover:n,input:n&&o?this.packet():void 0,snapshot:this.isHost&&!this.gateway&&this.snapshot?this.snapshot:void 0});if(this.closed||t!==this.generation)return;this.lastGood=Date.now(),this.acceptRoom(c.room,c.snapshot);for(const l of c.signals??[])this.cursor=Math.max(this.cursor,l.id),await this.handleSignal(l.sender,l.payload).catch(()=>{});if(this.isHost)for(const l of c.inputs??[])this.hostInput(l.seat,l.input);c.snapshot&&this.acceptSnapshot(c.snapshot)}catch(i){this.signals.unshift(...e);const n=i;if(n.status===401||n.status===404||n.status===410){this.shutdown(n.message);return}if(Date.now()-this.lastGood>45e3){this.shutdown("連線中斷超過 45 秒，請重新加入房間。");return}Date.now()-this.lastGood>8e3&&this.events.error("連線不穩，正在重新連線…")}finally{this.pollBusy=!1;const i=this.room?.phase==="racing"&&!(!this.gateway&&this.direct)&&(!this.wsOpen||(this.gateway||!this.isHost)&&performance.now()-this.snapAt>400);this.closed||(this.pollTimer=window.setTimeout(()=>this.poll(),i?100:700))}}makePeer(t){this.peers.get(t)?.pc.close();const e=new RTCPeerConnection({iceServers:this.iceServers,bundlePolicy:"max-bundle",...yg?{iceTransportPolicy:"relay"}:{}}),i={pc:e,channel:null,control:null,pending:[],created:Date.now()};return this.peers.set(t,i),e.onicecandidate=n=>{n.candidate&&this.pushSignal(t,{candidate:n.candidate.toJSON()})},e.ondatachannel=n=>n.channel.label==="room-control"?this.bindControlChannel(t,n.channel):this.bindChannel(t,n.channel),i}bindControlChannel(t,e){const i=this.peers.get(t);i&&(i.control=e,e.onopen=()=>{this.isHost&&this.room&&e.send(JSON.stringify({kind:"room-state",room:this.room}))},e.onmessage=n=>{if(!(this.closed||typeof n.data!="string"||n.data.length>48e3))try{const s=JSON.parse(n.data);if(s.kind==="ping"){e.send(JSON.stringify({kind:"pong",t:s.t}));return}if(s.kind==="pong"){typeof s.t=="number"&&(this.rtt=performance.now()-s.t,this.rttAt=Date.now());return}if(this.isHost&&s.kind==="leave"&&this.room?.members.some(a=>a.id===t)){this.leaving.add(t);const a=this.room.members.find(o=>o.id===t).seat;this.worker?.postMessage({kind:"disconnect",seat:a,value:!0}),this.dropped.add(a)}else!this.isHost&&t===this.room?.host&&s.kind==="room-state"&&s.room?.code===this.room.code&&s.room.host===t&&Number.isSafeInteger(s.room.revision)&&this.acceptRoom(s.room)}catch{}})}bindChannel(t,e){const i=this.peers.get(t);i&&(i.channel=e,e.onmessage=n=>{if(!(typeof n.data!="string"||n.data.length>48e3))try{const s=JSON.parse(n.data);if(this.isHost){const a=this.room?.members.find(o=>o.id===t);a&&s.kind==="input"&&this.hostInput(a.seat,s)}else!this.gateway&&t===this.room?.host&&s.kind==="snapshot"&&this.acceptSnapshot(s)}catch{}})}async offer(t){if(typeof RTCPeerConnection>"u"||Lc)return;const e=this.makePeer(t);this.bindChannel(t,e.pc.createDataChannel("race",{ordered:!1,maxRetransmits:0})),this.bindControlChannel(t,e.pc.createDataChannel("room-control",{ordered:!0})),await e.pc.setLocalDescription(await e.pc.createOffer()),this.pushSignal(t,{description:e.pc.localDescription})}async handleSignal(t,e){if(typeof RTCPeerConnection>"u"||Lc||!this.room?.members.some(n=>n.id===t&&n.seen>=0)||this.leaving.has(t)||!this.isHost&&t!==this.room.host)return;let i=this.peers.get(t);if(e.description?.type==="offer"){if(this.isHost)return;i?.pc.remoteDescription?i=this.makePeer(t):i??=this.makePeer(t)}if(i??=this.makePeer(t),e.description){await i.pc.setRemoteDescription(e.description);for(const n of i.pending.splice(0))await i.pc.addIceCandidate(n);e.description.type==="offer"&&(await i.pc.setLocalDescription(await i.pc.createAnswer()),this.pushSignal(t,{description:i.pc.localDescription}))}else e.candidate&&(i.pc.remoteDescription?await i.pc.addIceCandidate(e.candidate):i.pending.push(e.candidate))}itemSeq=0;itemRightSeq=0;packet(){return{kind:"input",round:this.round,seq:++this.seq,controls:this.input,reset:this.resetSeq,itemSeq:this.itemSeq,itemRightSeq:this.itemRightSeq}}sendInput(){if(!this.room||this.room.phase==="lobby"||this.closed)return;const t=this.packet();if(this.gateway){this.wsSend({kind:"input",to:"server",packet:t});return}if(this.isHost)this.hostInput(this.seat,t);else{const e=this.peers.get(this.room.host)?.channel;e?.readyState==="open"?e.bufferedAmount<32e3&&e.send(JSON.stringify(t)):this.wsSend({kind:"input",to:this.room.host,packet:t})}}hostInput(t,e){e.kind!=="input"||e.round!==this.round||!Number.isFinite(e.seq)||e.seq<=(this.lastInputSeq.get(t)??-1)||(this.lastInputSeq.set(t,e.seq),this.worker?.postMessage({kind:"input",seat:t,packet:{...e,controls:xg(e.controls)}}))}hostSnapshot(t){if(this.closed||this.room?.phase==="lobby"||t.round!==this.round)return;this.snapshot=t,this.acceptSnapshot(t);const e=JSON.stringify(t);for(const{channel:n}of this.peers.values())n?.readyState==="open"&&n.bufferedAmount<64e3&&n.send(e);const i=this.others().filter(n=>!this.peerOpen(n.id)).map(n=>n.id);i.length&&this.wsSend({kind:"snapshot",to:i,data:t}),t.state==="finished"&&!this.finishSent&&(this.finishSent=!0,this.action("finish",{round:t.round,results:t.racers.map(n=>({id:n.id,finishTime:n.finishTime,simulated:n.simulated,assisted:n.assisted,completedLaps:n.completedLaps,nextCheckpoint:n.nextCheckpoint,checkpointTimes:n.checkpointTimes}))}).catch(()=>{this.finishSent=!1}))}acceptSnapshot(t){if(this.closed||this.room?.phase==="lobby"||t.round!==this.round||t.seq<=this.lastSeq||!this.room||t.racers?.length!==Qn(this.room).length)return;const e=new Set(Qn(this.room).map(i=>i.id));t.racers.some(i=>!e.delete(i.id))||e.size||(this.lastSeq=t.seq,this.snapshot=t,this.snapAt=performance.now(),this.events.snapshot(t))}connectWs(){if(this.closed||!this.room||this.ws||typeof WebSocket>"u")return;const t=new WebSocket(lg());this.ws=t,t.onopen=()=>{this.room&&t.send(JSON.stringify({kind:"auth",room:this.room.code,id:this.id,token:this.token}))},t.onmessage=e=>{if(!(typeof e.data!="string"||e.data.length>96e3))try{this.onWsMessage(JSON.parse(e.data))}catch{}},t.onerror=()=>t.close(),t.onclose=()=>{this.ws===t&&(this.ws=null,this.wsOpen=!1,!this.closed&&(this.wsTimer=window.setTimeout(()=>this.connectWs(),Math.min(8e3,500*2**Math.min(this.wsAttempts++,4)))))}}onWsMessage(t){if(!(this.closed||!this.room))switch(t.kind){case"auth-ok":this.wsOpen=!0,this.wsAttempts=0;break;case"auth-failed":this.wsAttempts=4,this.ws?.close();break;case"pong":typeof t.t=="number"&&(this.rtt=performance.now()-t.t,this.rttAt=Date.now());break;case"input":if(this.isHost){const e=this.room.members.find(i=>i.id===t.from);e&&t.packet?.kind==="input"&&this.hostInput(e.seat,t.packet)}break;case"snapshot":if(t.data?.kind!=="snapshot")break;this.gateway?t.from==="server"&&this.acceptSnapshot(t.data):!this.isHost&&t.from===this.room.host&&this.acceptSnapshot(t.data);break;case"room-state":!this.isHost&&t.from===this.room.host&&t.room?.code===this.room.code&&t.room.host===t.from&&Number.isSafeInteger(t.room.revision)&&this.acceptRoom(t.room);break;case"signal":typeof t.from=="string"&&t.payload&&this.handleSignal(t.from,t.payload).catch(()=>{});break;case"undelivered":typeof t.to=="string"&&t.payload&&this.signals.push({to:t.to,payload:t.payload});break}}wsSend(t){const e=this.ws;return!this.wsOpen||!e||e.readyState!==WebSocket.OPEN||e.bufferedAmount>256e3?!1:(e.send(JSON.stringify(t)),!0)}pushSignal(t,e){this.wsSend({kind:"signal",to:t,payload:e})||this.signals.push({to:t,payload:e})}ping(){if(this.closed||!this.room||this.isHost&&!this.gateway)return;const t=JSON.stringify({kind:"ping",t:performance.now()}),e=this.peers.get(this.room.host)?.control;!this.gateway&&this.direct&&e?.readyState==="open"?e.send(t):this.wsOpen&&this.ws?.send(t)}async refreshIce(){try{const t=await fetch(An("/api/ice"),{headers:Jn(),cache:"no-store",signal:AbortSignal.timeout(4e3)});if(!t.ok)return;const e=await t.json();this.gateway=e.serverHost===!0,Array.isArray(e.iceServers)&&e.iceServers.length&&(this.iceServers=e.iceServers)}catch{}}async leave(){this.notifyLeaving();try{await this.action("leave",{snapshot:this.isHost?this.snapshot:void 0})}finally{this.dispose()}}notifyLeaving(){const t=this.room&&!this.isHost?this.peers.get(this.room.host)?.control:null;t?.readyState==="open"&&t.send(JSON.stringify({kind:"leave"}))}pagehide=()=>{this.closed||!this.room||(this.notifyLeaving(),fetch(An(`/api/rooms/${this.room.code}/action`),{method:"POST",keepalive:!0,headers:{"content-type":"application/json",...Jn(),authorization:"Bearer "+this.token},body:JSON.stringify({id:this.id,action:"leave",snapshot:this.isHost?this.snapshot:void 0})}).catch(()=>{}),this.dispose())};shutdown(t){this.dispose(),this.events.closed(t)}dispose(){this.closed=!0,this.generation++,window.removeEventListener("pagehide",this.pagehide),clearTimeout(this.pollTimer),clearInterval(this.inputTimer),clearInterval(this.pingTimer),clearTimeout(this.wsTimer);const t=this.ws;this.ws=null,this.wsOpen=!1,t?.close(),this.worker?.terminate(),this.worker=null;for(const e of this.peers.values())e.pc.close();this.peers.clear()}}class bg{constructor(t){this.race=t,this.prediction=new ao(t.player.body.spec,t.track)}race;received=0;target=null;correction={x:0,z:0};prediction;accept(t){const e=this.race.state;this.race.state=t.state,this.race.time=t.time,this.race.countdown=t.countdown,this.received=performance.now(),this.target=t,t.items&&this.race.items.accept(t.items),t.traffic&&this.race.traffic.accept(t.traffic);for(const i of t.racers){const n=this.race.racer(i.id);if(!n)continue;const s=n.body;n.completedLaps=i.completedLaps,n.nextCheckpoint=i.nextCheckpoint,n.distance=i.distance,n.finishTime=i.finishTime,n.bestLap=i.bestLap||1/0,n.simulated=i.simulated,n.disconnected=i.disconnected,n.assisted=n.assisted||i.assisted===!0;const a=i.id===this.race.localPlayerId&&i.finishTime===null,o=Number(i.body[gi.indexOf("hitTime")])>0&&!Number(i.body[gi.indexOf("hitSlide")]),c=e==="countdown"||t.state!=="racing"||Number(i.body[gi.indexOf("resetEvent")])!==s.resetEvent||Number(i.body[gi.indexOf("route")])!==s.route||Number(i.body[gi.indexOf("spinEvent")])!==s.spinEvent||o;a&&c&&(this.correction={x:0,z:0});for(let l=0;l<gi.length;l++){const h=gi[l];Number.isFinite(Number(i.body[l]))&&(a&&!c&&["x","z","heading","vx","vz","speed","steering"].includes(h)||!a&&!c&&["x","y","z","heading"].includes(h)||(s[h]=i.body[l]))}a&&!c&&(this.correction.x=Number(i.body[0])-s.x,this.correction.z=Number(i.body[2])-s.z,Math.hypot(this.correction.x,this.correction.z)>8&&(s.x+=this.correction.x,s.z+=this.correction.z,this.correction={x:0,z:0}),s.vx+=(Number(i.body[3])-s.vx)*.32,s.vz+=(Number(i.body[4])-s.vz)*.32,s.heading=oi(s.heading+oi(Number(i.body[5])-s.heading)*.2)),s.projection=this.race.track.project(s.x,s.z,void 0,s.route,s.y),s.surface=s.airborne?"AIR":s.offroad?"GRASS":s.route?"SHORTCUT":"ROAD"}this.race.finishDeadline=t.finishDeadline??(this.race.racers.some(i=>i.finishTime!==null)?Math.min(...this.race.racers.map(i=>i.finishTime??1/0))+20:null),this.race.finishOrder=this.race.racers.filter(i=>i.finishTime!==null).sort((i,n)=>i.finishTime-n.finishTime).map(i=>i.id)}step(t,e){if(!this.target||this.race.state!=="racing")return;const i=this.race.player.body;if(this.race.player.finishTime===null&&performance.now()-this.received<1500){i.step(e,t,this.race.collisionObstacles);const n=1-Math.exp(-t*8);i.x+=this.correction.x*n,i.z+=this.correction.z*n,this.correction.x*=1-n,this.correction.z*=1-n}}interpolate(t){if(!this.target)return;this.race.state==="racing"&&performance.now()-this.received<200&&this.race.traffic.extrapolate(t);const e=Math.min((performance.now()-this.received)/1e3,.13),i=1-Math.exp(-t*18);for(const n of this.race.racers){if(n.id===this.race.localPlayerId&&n.finishTime===null)continue;const s=this.target.racers.find(h=>h.id===n.id);if(!s)continue;const a=n.body,o=Number(s.body[gi.indexOf("hitTime")]);o>0&&(a.hitTime=Math.max(0,o-e),a.spinPhase=Math.min(1,Number(s.body[gi.indexOf("spinPhase")])+e/ro));const c=Number(s.body[0])+a.vx*e,l=Number(s.body[2])+a.vz*e;a.x+=(c-a.x)*i,a.z+=(l-a.z)*i,a.heading=oi(a.heading+oi(Number(s.body[5])-a.heading)*i),a.y+=(Number(s.body[1])+a.vy*e-a.y)*i}}}let Eg;class co{constructor(t){this.change=t,this.root.className="track-picker",this.root.innerHTML=Eg??=ci.map((e,i)=>{const n=new cs(e.id,!1),s=n.bounds,a=Math.min(166/(s.maxX-s.minX),86/(s.maxZ-s.minZ)),o=(h,d)=>`${(90+(h-(s.minX+s.maxX)/2)*a).toFixed(1)},${(49+(d-(s.minZ+s.maxZ)/2)*a).toFixed(1)}`,c=n.points.filter((h,d)=>d%4===0).map(h=>o(h.x,h.z)).join(" "),l=n.branches.map(h=>`<polyline class="${e.theme==="city"?"street-line":"shortcut-line"}" points="${h.points.filter((d,f)=>f%3===0).map(d=>o(d.x,d.z)).join(" ")}"/>`).join("");return`<button type="button" class="track-choice" data-track="${e.id}" style="--track-color:#${e.color.toString(16)}"><span class="track-choice-meta">0${i+1}<small>${e.difficulty}</small></span><svg viewBox="0 0 180 100" aria-hidden="true"><polygon points="${c}"/>${l}</svg><strong>${e.name}</strong><small>${e.description}</small><span class="track-pending" role="status"><i class="loading-spinner" aria-hidden="true"></i>切換中…</span></button>`}).join(""),this.root.querySelectorAll("[data-track]").forEach(e=>e.onclick=()=>{this.set(e.dataset.track),this.change(this.selected)}),this.set("coast")}change;root=document.createElement("div");selected="coast";pending=null;enabled=!0;setPending(t){this.pending=t,this.root.setAttribute("aria-busy",String(t!==null)),this.set(this.selected,this.enabled)}set(t,e=!0){this.enabled=e,this.selected=this.pending??ci.find(i=>i.id===t)?.id??"coast",this.root.querySelectorAll("[data-track]").forEach(i=>{const n=i.dataset.track===this.pending;i.classList.toggle("selected",i.dataset.track===this.selected),i.classList.toggle("is-pending",n),i.setAttribute("aria-pressed",String(i.dataset.track===this.selected)),i.setAttribute("aria-busy",String(n)),i.disabled=!e||this.pending!==null})}}class Tg{constructor(t){this.change=t,this.root.className="cup-picker",this.root.innerHTML='<div class="setup-label">自訂巡迴賽道 <span>先選站次，再點賽道</span></div><div class="cup-stations"></div><p class="cup-hint">可調整順序；重複選取時會交換站次。</p><div class="cup-circuits"></div>',this.picker=new co(e=>{if(!this.enabled||this.pending)return;const i=[...this.value],n=i.indexOf(e);n!==this.active&&(n>=0&&(i[n]=i[this.active]),i[this.active]=e,this.set(i,this.enabled),this.change([...i]))}),this.root.querySelector(".cup-circuits").append(this.picker.root),this.set(this.value)}change;root=document.createElement("section");value=Je();active=0;enabled=!0;pending=!1;picker;set(t,e=!0,i=!1){this.value=Je(t),this.enabled=e,this.pending=i,this.active=Math.min(this.active,this.value.length-1);const n=this.root.querySelector(".cup-stations");n.children.length!==this.value.length&&(n.innerHTML=this.value.map((s,a)=>`<button type="button" data-stage="${a}"><small>第 ${a+1} 站</small><strong></strong><span class="cup-pending"><i class="loading-spinner" aria-hidden="true"></i>更新中…</span></button>`).join(""),n.querySelectorAll("[data-stage]").forEach(s=>s.onclick=()=>{this.pending||!this.enabled||(this.active=Number(s.dataset.stage),this.set(this.value,this.enabled))})),this.root.setAttribute("aria-busy",String(i)),this.root.querySelectorAll("[data-stage]").forEach((s,a)=>{s.querySelector("strong").textContent=Cn(this.value[a]).name,s.classList.toggle("selected",a===this.active),s.classList.toggle("is-pending",i&&a===this.active),s.setAttribute("aria-pressed",String(a===this.active)),s.disabled=i||!e}),this.picker.setPending(null),this.picker.set(this.value[this.active],e&&!i),i&&this.picker.setPending(this.value[this.active])}}class ka{constructor(t){this.change=t,this.root.className="race-options",this.root.innerHTML=`<div class="setup-label">比賽模式</div><div class="mode-options"><button data-field="mode" data-value="single"><strong>單站競速</strong><small>自由選擇賽道 · 3 圈決勝</small></button><button data-field="mode" data-value="championship"><strong>排名賽 · 浪灣巡迴</strong><small>三條不同賽道 · 累計積分</small></button></div>
      <div class="cup-settings"><div class="setup-label">賽程安排</div><div class="mode-options"><button data-field="trackOrder" data-value="custom"><strong>自訂賽程</strong><small>選擇賽道與出賽順序</small></button><button data-field="trackOrder" data-value="random"><strong>隨機賽程</strong><small>開賽時統一抽出，不重複</small></button></div><p class="random-cup-hint setup-hint"></p></div>
      <div class="setup-label">AI 車手</div><div class="mode-options"><button data-field="aiEnabled" data-value="true"><strong>加入 AI</strong><small>補齊 8 台車同場競速</small></button><button data-field="aiEnabled" data-value="false"><strong>不加入 AI</strong><small>只讓房內真人出賽 · 可獨自挑戰</small></button></div>
      <div class="ai-difficulty"><div class="setup-label">AI 強度</div><div class="difficulty-options">${Object.entries(Pn).map(([e,i])=>`<button data-field="difficulty" data-value="${e}" title="${i.description}">${i.name}</button>`).join("")}</div><p class="difficulty-hint setup-hint"></p></div>
      <div class="setup-label">氣候 <span>晚霞與雨夜自動開啟車燈</span></div><div class="weather-options">${Object.entries(Dc).map(([e,i])=>`<button data-field="weather" data-value="${e}"><strong>${e==="sunny"?"☀":e==="sunset"?"◒":e==="rain"?"☂":"⤨"} ${i}</strong><small>${e==="rain"?"濕滑路面 · 提早入彎":e==="random"?"每一站由房間統一抽選":e==="sunset"?"暖色霞光 · 日落疾行":"明亮海岸 · 標準抓地"}</small></button>`).join("")}</div>
      <div class="setup-label">道具規則 <span>獨立套用至所有關卡</span></div><div class="mode-options item-options"><button data-field="itemsEnabled" data-value="true"><strong>道具賽</strong><small>問號補給 · 10 種等機率道具 · 雙槽</small></button><button data-field="itemsEnabled" data-value="false"><strong>純競速</strong><small>無問號道具 · 漂移與氮氣照常</small></button></div>`,this.cup=new Tg(e=>{this.set({...this.value,cupTracks:e}),this.change({...this.value},"cupTracks")}),this.root.querySelector(".cup-settings").append(this.cup.root),this.root.querySelectorAll("[data-field]").forEach(e=>{e.dataset.field==="mode"&&(e.dataset.mode=e.dataset.value),e.dataset.field==="difficulty"&&(e.dataset.difficulty=e.dataset.value),e.onclick=()=>{if(!this.enabled||this.pending)return;const i=e.dataset.field,n={...this.value,[i]:i==="itemsEnabled"||i==="aiEnabled"?e.dataset.value==="true":e.dataset.value};(i==="weather"||i==="mode")&&(n.activeWeather=void 0),this.set(n),this.change({...this.value},i)},e.insertAdjacentHTML("beforeend",'<span class="option-pending" role="status"><i class="loading-spinner" aria-hidden="true"></i>切換中…</span>')}),this.set(this.value)}change;root=document.createElement("div");value={...Qi};enabled=!0;pending=null;pendingField=null;cup;setPending(t,e=null){this.pending=t,this.pendingField=e,this.root.setAttribute("aria-busy",String(!!t)),this.set(this.value,this.enabled)}set(t,e=!0){this.value=bn(this.pending??t),this.enabled=e,this.root.querySelectorAll("[data-field]").forEach(a=>{const o=a.dataset.field,c=a.dataset.value===String(this.value[o]);a.disabled=!e||!!this.pending;const l=!!this.pending&&c&&this.pendingField===o;a.classList.toggle("is-pending",l),a.setAttribute("aria-busy",String(l)),a.classList.toggle("selected",c),a.setAttribute("aria-pressed",String(c))});const i=this.value.mode==="championship",n=this.value.trackOrder==="random";this.root.querySelector(".difficulty-hint").textContent=Pn[this.value.difficulty].description,this.root.querySelector(".ai-difficulty").classList.toggle("hidden",!this.value.aiEnabled),this.root.querySelector(".cup-settings").classList.toggle("hidden",!i),this.root.querySelector('[data-field="weather"][data-value="random"]').classList.toggle("hidden",!i);const s=this.root.querySelector(".random-cup-hint");s.classList.toggle("hidden",!n),s.textContent=`開賽時從 ${ci.length} 條賽道隨機抽出 3 條，同房所有人使用相同順序。`,this.cup.root.classList.toggle("hidden",!i||n),this.cup.set(this.value.cupTracks,e&&!this.pending,!!this.pending&&this.pendingField==="cupTracks")}}async function wg(r,t){const e=document.activeElement,i=document.createElement("textarea");i.value=r,i.readOnly=!0,i.setAttribute("aria-label","複製內容"),i.style.cssText="position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;font-size:16px;",t.append(i);let n=!1;try{i.focus(),i.select(),i.setSelectionRange(0,r.length),n=document.execCommand("copy")}catch{}finally{i.remove(),e?.focus({preventScroll:!0})}if(n)return!0;try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(r),!0}catch{}return!1}class Ag{constructor(t){this.actions=t,this.root.className="lobby-layer hidden",this.root.innerHTML=`<div class="lobby-card"><button id="lobby-close" class="text-button lobby-back">← 返回</button><div class="eyebrow">COASTAL CREW · ONLINE</div><h2>一起追上海風。</h2><p class="lobby-intro">最多 8 人同場競速，可選擇 AI 補位或只有真人出賽。</p>
      <div id="lobby-entry"><div id="entry-choice" class="entry-choice"><button id="open-create" class="primary"><strong>建立房間</strong><small>設定比賽 · 一個人也能玩</small></button><button id="open-join" class="secondary"><strong>加入房間</strong><small>輸入朋友的房間代碼</small></button></div><div id="entry-create" class="hidden"><label class="field-label">車手名字 <input id="driver-name" maxlength="12" autocomplete="off" placeholder="你的名字會印在前後車牌"></label>
      <div class="lobby-ride"><div><small>我的座駕</small><strong class="chosen-kart"></strong></div><button id="entry-choose-kart" class="secondary">進入車庫選車 →</button></div>
      <div id="entry-race-options"></div><div class="lobby-option"><h3>建立房間</h3><label class="field-label">真人名額 <select id="new-capacity">${Array.from({length:8},(o,c)=>`<option value="${c+1}" ${c===1?"selected":""}>${c+1} 人 + ${7-c} 台 AI</option>`).join("")}</select></label><button id="create-room" class="primary">建立房間</button></div></div><div id="entry-join" class="hidden"><label class="field-label">房間代碼 <input id="join-code" maxlength="6" autocomplete="off" placeholder="例如 A2B3C4"></label><button id="join-room" class="primary">加入房間 →</button><p class="lobby-tip">加入後可修改名字與選車；賽道、模式和 AI 強度由房主設定。</p></div></div>
      <div id="lobby-room" class="hidden"><div class="room-code-row"><div><span>房間代碼</span><strong id="room-code"></strong></div><button id="copy-room" class="secondary">複製房間號碼</button></div>
      <div id="copy-fallback" class="hidden"><label class="field-label">房間號碼 <input id="copy-value" readonly></label><p class="lobby-tip">瀏覽器未允許自動複製，請按 Ctrl+C／⌘C 或長按複製。</p></div><label id="capacity-label" class="field-label">真人名額 <select id="room-capacity">${Array.from({length:8},(o,c)=>`<option value="${c+1}">${c+1} 人 + ${7-c} 台 AI</option>`).join("")}</select><span id="capacity-pending" class="pending-label hidden" role="status"><i class="loading-spinner" aria-hidden="true"></i>切換中…</span></label>
      <div id="room-race-options"></div><div id="room-tracks"></div><p class="lobby-tip">房主選擇賽道。切換賽道後，所有車手需重新準備。</p><div class="room-profile"><label class="field-label">我的車手名字 <input id="room-name" maxlength="12" autocomplete="off"></label><button id="save-name" class="secondary">更新名字</button></div><div class="lobby-ride"><div><small>我的座駕</small><strong class="chosen-kart"></strong></div><button id="room-choose-kart" class="secondary">進入車庫選車 →</button></div><div id="room-members" class="room-members"></div><p id="room-summary"></p><div class="room-actions"><button id="ready-room" class="secondary">準備好了</button><button id="start-room" class="primary">開始比賽</button><button id="leave-room" class="text-button">離開房間</button></div><p class="lobby-tip">所有人到齊並按下準備後，由房主開賽。途中退出由 AI 接手；房主離開時自動移交主持權。</p></div>
      <p id="lobby-status" class="lobby-status" role="status"></p></div>`,document.querySelector("#app").append(this.root),this.input("driver-name").value=localStorage.getItem("tidebreak-name")??"";const e=new URLSearchParams(location.search).get("room");e&&(this.input("join-code").value=e.toUpperCase().slice(0,6));const i=(o,c)=>this.get(o).addEventListener("click",()=>{this.run(c)}),n=()=>{const o=this.input("driver-name").value.trim();if(!o)throw new Error("請先填寫車手名字");return localStorage.setItem("tidebreak-name",o),o};this.picker=new co(o=>{this.run(async()=>{this.picker.setPending(o);try{await t.track(o)}finally{this.picker.setPending(null)}})}),this.get("room-tracks").append(this.picker.root),this.setKart(0),this.entryOptions=new ka(()=>{}),this.get("entry-race-options").append(this.entryOptions.root),this.roomOptions=new ka((o,c)=>{this.run(async()=>{this.roomOptions.setPending(o,c);try{await t.settings(o)}finally{this.roomOptions.setPending(null)}})}),this.get("room-race-options").append(this.roomOptions.root);const s=()=>this.kart;i("entry-choose-kart",t.choose),i("room-choose-kart",t.choose),i("create-room",()=>t.create(n(),s(),Number(this.input("new-capacity").value),this.entryOptions.value)),i("open-create",async()=>{this.input("driver-name").value.trim()||(this.input("driver-name").value="車手"+crypto.getRandomValues(new Uint16Array(1))[0].toString().padStart(4,"0").slice(-4));const o=this.get("open-create");o.disabled=!0,o.setAttribute("aria-busy","true"),o.innerHTML='<i class="loading-spinner"></i> 建立中…';try{await t.create(n(),s(),1,{...Qi})}finally{o.disabled=!1,o.setAttribute("aria-busy","false"),o.innerHTML="<strong>建立房間</strong><small>立即建立 · 再選賽道與人數</small>"}}),i("open-join",()=>this.showEntry("join")),i("join-room",()=>{const o=this.input("join-code").value.trim().toUpperCase();if(!/^[A-Z2-9]{6}$/.test(o))throw new Error("請填寫 6 碼房間代碼");return this.input("driver-name").value.trim()||(this.input("driver-name").value="車手"+crypto.getRandomValues(new Uint16Array(1))[0].toString().padStart(4,"0").slice(-4)),t.join(n(),s(),o)}),i("lobby-close",()=>this.room?t.leave():this.entryView==="choice"?t.close():this.showEntry("choice")),i("leave-room",t.leave);const a=async o=>{const c=this.input("room-name").value.trim();if(!c)throw new Error("請先填寫車手名字");await t.ready(s(),o,c),this.nameDirty=!1,this.input("driver-name").value=c,localStorage.setItem("tidebreak-name",c)};this.input("room-name").oninput=()=>{this.nameDirty=!0},this.get("save-name").setAttribute("aria-live","polite"),i("save-name",()=>this.updateName(()=>a(!1))),i("ready-room",()=>a(!this.ready)),i("start-room",t.start),this.get("room-capacity").addEventListener("change",()=>{this.run(async()=>{this.pendingCapacity=Number(this.input("room-capacity").value),this.get("capacity-pending").classList.remove("hidden"),this.input("room-capacity").disabled=!0;try{await t.capacity(this.pendingCapacity)}finally{this.pendingCapacity=null,this.get("capacity-pending").classList.add("hidden")}})}),this.get("copy-room").onclick=()=>{this.copyRoomCode()},this.input("copy-value").onclick=()=>this.input("copy-value").select(),this.input("join-code").onkeydown=o=>{o.key==="Enter"&&(o.preventDefault(),this.get("join-room").click())},this.showEntry(e?"join":"choice")}actions;root=document.createElement("section");room=null;id="";busy=!1;ready=!1;kart=0;picker;entryOptions;roomOptions;entryView="choice";pendingCapacity=null;nameDirty=!1;nameStatusTimer=0;get(t){return this.root.querySelector("#"+t)}input(t){return this.get(t)}setKart(t){this.kart=t,this.root.querySelectorAll(".chosen-kart").forEach(e=>e.textContent=wn[t].name+" · "+wn[t].subtitle.split(" · ")[1])}showEntry(t){this.entryView=t;for(const e of["choice","create","join"])this.get("entry-"+e).classList.toggle("hidden",e!==t);this.message(""),t==="join"&&this.input("join-code").focus()}async copyRoomCode(){if(!this.room)return;const t=this.room.code,e=await wg(t,this.root);if(this.get("copy-fallback").classList.toggle("hidden",e),e)this.message("房間號碼已複製");else{const i=this.input("copy-value");i.value=t,i.focus(),i.select(),this.message("房間號碼已選取，請手動複製")}}resetNameStatus(){clearTimeout(this.nameStatusTimer),this.nameStatusTimer=0;const t=this.get("save-name");t.textContent="更新名字",t.classList.remove("is-saved"),t.setAttribute("aria-busy","false"),t.disabled=!1,this.input("room-name").readOnly=!1}async updateName(t){this.resetNameStatus();const e=this.get("save-name"),i=this.room?.code;e.disabled=!0,e.setAttribute("aria-busy","true"),this.input("room-name").readOnly=!0,e.innerHTML='<i class="loading-spinner" aria-hidden="true"></i><span>更新中…</span>';try{if(await t(),this.room?.code!==i)return;e.textContent="更新完成",e.classList.add("is-saved"),this.nameStatusTimer=window.setTimeout(()=>this.resetNameStatus(),2e3)}catch(n){throw this.resetNameStatus(),n}finally{e.disabled=!1,e.setAttribute("aria-busy","false"),this.input("room-name").readOnly=!1}}show(){this.root.classList.remove("hidden")}hide(){this.root.classList.add("hidden")}message(t){this.get("lobby-status").textContent=t}async run(t){if(!this.busy){this.busy=!0,this.picker.set(this.picker.selected,!1),this.roomOptions.set(this.roomOptions.value,!1),this.get("lobby-status").classList.add("is-busy"),this.message("處理中…");try{await t(),this.get("lobby-status").textContent==="處理中…"&&this.message("")}catch(e){this.message(e.message)}finally{this.busy=!1,this.get("lobby-status").classList.remove("is-busy"),this.room&&this.update(this.room,this.id)}}}update(t,e){this.room=t,this.id=e;const i=t.host===e;if(this.ready=!!t.members.find(o=>o.id===e)?.ready,this.get("room-tracks").classList.toggle("hidden",t.mode==="championship"),this.picker.set(t.track,i&&t.mode==="single"&&!this.busy),this.roomOptions.set(t,i&&!this.busy),this.setKart(t.members.find(o=>o.id===e)?.kart??this.kart),this.get("lobby-entry").classList.add("hidden"),this.get("lobby-room").classList.remove("hidden"),this.get("room-code").textContent=t.code,this.input("room-capacity").value=String(this.pendingCapacity??t.capacity),this.input("room-capacity").disabled=!i||this.busy,!this.nameDirty){const o=t.members.find(c=>c.id===e)?.name??"";this.input("room-name").value=o,this.input("driver-name").value=o}const n=this.get("room-members");n.replaceChildren();const s=t.aiEnabled===!1?t.capacity:8;for(let o=0;o<s;o++){const c=t.members[o],l=document.createElement("div");l.className="room-member";const h=document.createElement("strong");h.textContent=c?c.name+(c.id===t.host?" · 房主":""):o<t.capacity?"等待車手加入":"AI 車手";const d=document.createElement("span");d.textContent=c?c.ready?"✓ 已準備":"選車中":o<t.capacity?"空位":"電腦對手",c?.id===e&&l.classList.add("is-you"),l.append(h,d),n.append(l)}this.get("room-summary").textContent=`${t.members.length} / ${t.capacity} 位玩家 · ${t.aiEnabled===!1?"不加入 AI":8-t.capacity+" 台 AI"} · ${t.mode==="championship"?(t.cupTracks?.length??3)+" 站排名賽 · 每站 3 圈":"單站 3 圈"}`,this.get("room-capacity").querySelectorAll("option").forEach(o=>{const c=Number(o.value);o.textContent=t.aiEnabled===!1?`${c} 人 · 無 AI`:`${c} 人 + ${8-c} 台 AI`}),this.get("ready-room").textContent=this.ready?"取消準備":"準備好了";const a=this.get("start-room");a.classList.toggle("hidden",!i),a.disabled=t.members.length!==t.capacity||t.members.some(o=>!o.ready)}reset(){this.resetNameStatus(),this.room=null,this.ready=!1,this.nameDirty=!1,this.get("lobby-entry").classList.remove("hidden"),this.get("lobby-room").classList.add("hidden"),this.get("copy-fallback").classList.add("hidden"),this.showEntry("choice")}dispose(){clearTimeout(this.nameStatusTimer),this.root.remove()}}class Rg{constructor(t,e){this.confirm=t,this.back=e,this.root.className="garage-page hidden",this.root.setAttribute("aria-label","獨立選車頁"),this.root.innerHTML=`<header class="garage-nav"><button class="text-button" id="garage-back">← 返回</button><strong>TIDEBREAK <span> / GARAGE</span></strong><span id="garage-mode">SOLO SESSION</span></header><div class="garage-layout"><div class="garage-showroom"><div class="eyebrow">01 / PICK YOUR RIDE</div><h1>你的車。<br>你的節奏。</h1><p>三種個性，一樣有機會領跑。</p><div id="kart-preview" aria-label="可旋轉的原創卡丁車預覽"></div><div class="preview-caption"><span id="preview-name"></span><span>原創郵差機器人 · 浪灣車庫</span></div></div><div class="garage-options"><div class="garage-kart-cards">${wn.map((n,s)=>`<button class="garage-kart" data-ride="${s}" style="--kart-color:#${n.color.toString(16)}"><span class="garage-kart-number">0${s+1}</span><div><strong>${n.name}</strong><small>${n.subtitle}</small></div><div class="garage-stats">${["極速","加速","轉向"].map((a,o)=>`<span>${a}<i>${Array.from({length:5},(c,l)=>`<b class="${l<n.stats[o]?"lit":""}"></b>`).join("")}</i></span>`).join("")}</div><span class="ride-check">✓</span></button>`).join("")}</div><div id="garage-race-options"></div><section id="garage-tracks"><div class="garage-section-label">02 / CHOOSE YOUR CIRCUIT <span>3 圈 · 8 位車手</span></div><div id="garage-track-picker"></div><p class="garage-hint">橘色虛線為合法捷徑。新賽道的上坡不需要氮氣也能通過。</p></section><p id="garage-online-tip" class="garage-hint hidden">賽道由房主在房間中設定。選好座駕後，返回房間按下「準備好了」。</p><div class="garage-bottom"><div><kbd>SPACE</kbd> 漂移 <kbd>SHIFT</kbd> 氮氣 <kbd>Z / X</kbd> 左 / 右道具</div><button id="garage-confirm" class="primary">開始三圈比賽 →</button></div><p id="garage-error" role="status"></p></div></div>`,document.querySelector("#app").append(this.root),this.picker=new co(()=>{}),this.get("garage-track-picker").append(this.picker.root),this.options=new ka(()=>this.updateMode()),this.get("garage-race-options").append(this.options.root),this.get("garage-back").onclick=()=>{this.busy||(this.hide(),this.back())},this.get("garage-confirm").onclick=async()=>{if(!this.busy){this.busy=!0,this.get("garage-error").textContent="正在準備…";try{await this.confirm(this.kart,this.options.value.mode==="championship"?Je(this.options.value.cupTracks)[0]:this.picker.selected,this.mode,this.options.value),this.hide()}catch(n){this.get("garage-error").textContent=n.message}finally{this.busy=!1}}},this.root.querySelectorAll("[data-ride]").forEach(n=>n.onclick=()=>{this.busy||this.select(Number(n.dataset.ride))}),this.scene.background=new Ct(1523273),this.scene.userData.showroom=!0,this.scene.add(new sl(16121838,4745322,3));const i=new ol(16770232,3);i.position.set(5,9,4),this.scene.add(i),this.platform=new Ot(new qe(3.3,3.6,.3,48),new ae({color:3235428})),this.platform.position.y=-.16,this.scene.add(this.platform),this.camera.position.set(6,4.3,7.5),this.camera.lookAt(0,1,0),window.addEventListener("resize",this.resize)}confirm;back;root=document.createElement("section");visible=!1;mode="solo";kart=0;name="YOU";scene=new tl;camera=new De(38,1,.1,80);renderer=null;view=null;picker;options;platform;busy=!1;get(t){return this.root.querySelector("#"+t)}show(t,e,i,n="YOU",s=Qi){if(this.mode=i,this.name=n||"YOU",this.visible=!0,this.root.classList.remove("hidden"),this.get("garage-error").textContent="",this.get("garage-mode").textContent=i==="solo"?"SOLO SESSION":"ONLINE CREW",this.get("garage-confirm").textContent=i==="solo"?"開始三圈比賽 →":"確認座駕 · 返回房間 →",this.get("garage-tracks").classList.toggle("hidden",i==="online"),this.get("garage-online-tip").classList.toggle("hidden",i==="solo"),this.picker.set(e),this.options.set(s),this.get("garage-race-options").classList.toggle("hidden",i==="online"),this.updateMode(),!this.renderer){const a=document.createElement("canvas"),o=a.getContext("webgl2",{antialias:!0});this.renderer=o?new Na({canvas:a,context:o,antialias:!0}):new Wi,this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=ye,this.renderer.toneMapping=Va,this.get("kart-preview").append(this.renderer.domElement)}this.select(t),this.resize()}updateMode(){const t=this.options.value.mode==="championship";this.picker.set(this.picker.selected,!t),this.get("garage-tracks").classList.toggle("hidden",this.mode==="online"||t),this.get("garage-confirm").textContent=this.mode==="online"?"確認座駕 · 返回房間 →":t?`開始 ${this.options.value.cupTracks.length} 站排名賽 →`:"開始三圈比賽 →",this.get("garage-tracks").querySelector(".garage-hint").textContent=t?`依序跑完 ${this.options.value.cupTracks.length} 站，每站 3 圈。名次積分：15 / 12 / 10 / 7 / 5 / 3 / 2 / 1。`:"橘色虛線為合法捷徑。上坡不需要氮氣也能通過。"}select(t){this.kart=t,this.root.querySelectorAll("[data-ride]").forEach(i=>{i.classList.toggle("selected",Number(i.dataset.ride)===t),i.setAttribute("aria-pressed",String(Number(i.dataset.ride)===t))}),this.get("preview-name").textContent=wn[t].subtitle,this.view&&(this.scene.remove(this.view.group),this.view.dispose());const e=new ao({...wn[t]},new cs);e.x=e.z=0,e.y=0,e.heading=0,this.view=new ml(e,this.name),this.view.group.userData.dynamic=!0,this.scene.add(this.view.group)}tick(t){!this.visible||!this.renderer||!this.view||(this.view.body.heading=Math.sin(t*.3)*.4+.25,this.view.sync(t),this.renderer.render(this.scene,this.camera))}resize=()=>{if(!this.visible||!this.renderer)return;const t=this.get("kart-preview"),e=t.clientWidth,i=t.clientHeight;!e||!i||(this.renderer.setSize(e,i),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())};hide(){this.visible=!1,this.root.classList.add("hidden")}dispose(){window.removeEventListener("resize",this.resize),this.view?.dispose(),this.platform.geometry.dispose(),this.platform.material.dispose(),this.renderer?.dispose(),this.root.remove()}}class Cg{constructor(t){this.scene=t,this.group.userData.dynamic=!0;const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d");i.fillStyle="#ccf7f4",i.fillRect(0,0,128,128),i.strokeStyle="#289baf",i.lineWidth=10,i.strokeRect(5,5,118,118),i.fillStyle="#124856",i.textAlign="center",i.textBaseline="middle",i.font="900 94px Arial",i.fillText("?",64,69),this.texture=new as(e),this.texture.colorSpace=ye;const n=new ie(1.65,1.65,1.65),s=new ae({map:this.texture,color:13172735}),a=new Re({color:9161419,wireframe:!0,transparent:!0,opacity:.28});for(let u=0;u<20;u++){const g=new Ot(n,s);g.userData.dynamic=!0,g.userData.plate="?",this.group.add(g),this.boxes.push(g);const v=new Ot(n,a);v.userData.dynamic=!0,this.group.add(v),this.ghosts.push(v)}this.bolts=this.pool(new Ji(.65,1),new Re({color:6744319}),56),this.traps=this.pool(new qe(1.5,1.8,.25,9),new ae({color:16759649}),56);const o=[];for(let u=0;u<3;u++)for(let g=0;g<5;g++){const v=(x,S)=>{const T=x/5,A=u*Math.PI*2/3,P=.12+T*1.45,E=Math.sin(T*Math.PI)*.36+.04;return[Math.sin(A)*P+Math.cos(A)*E*S,.1+1.2*(1-T)**2,Math.cos(A)*P-Math.sin(A)*E*S]},m=v(g,-1),p=v(g,1),y=v(g+1,-1),_=v(g+1,1);o.push(...m,...y,...p,...p,...y,..._)}const c=new me;c.setAttribute("position",new Yt(o,3)),c.computeVertexNormals(),this.bananas=this.pool(c,new ae({color:16768334,emissive:5587984,side:Ee}),56);const l=document.createElement("canvas");l.width=128,l.height=64;const h=l.getContext("2d");h.fillStyle="#ffcf70",h.fillRect(0,0,128,64),h.fillStyle="#395261";for(let u=-64;u<160;u+=40)h.beginPath(),h.moveTo(u,0),h.lineTo(u+18,0),h.lineTo(u+82,64),h.lineTo(u+64,64),h.fill();this.fenceTexture=new as(l),this.fenceTexture.colorSpace=ye;const d=[new ie(4.4,.42,.35).translate(0,1.4,0),new ie(4.4,.3,.3).translate(0,.65,0)];for(const u of[-1,1])d.push(new ie(.28,1.9,.4).translate(u*1.9,.95,0),new ie(.75,.15,1.1).translate(u*1.9,.075,0));const f=no(d);d.forEach(u=>u.dispose()),this.fences=this.pool(f,new ae({map:this.fenceTexture,color:16777215,emissive:1839110}),56),this.shields=this.pool(new Ji(1,1),new Re({color:8636415,wireframe:!0,transparent:!0,opacity:.75}),8),this.waves=this.pool(new sr(1,.035,4,32),new Re({color:14787839}),8),t.add(this.group)}scene;group=new Ce;boxes=[];ghosts=[];bolts;traps;bananas;fences;shields;waves;color=new Ct;dummy=new Jt;hidden=new Bt().makeScale(0,0,0);texture;fenceTexture;pool(t,e,i){const n=new ei(t,e,i);n.userData.dynamic=!0,n.frustumCulled=!1,n.instanceMatrix.setUsage(ss);for(let s=0;s<i;s++)n.setMatrixAt(s,this.hidden),n.setColorAt(s,this.color.set(16777215));return this.group.add(n),n}update(t,e){if(this.group.visible=t.items.enabled,!t.items.enabled)return;const i=t.items.boxPositions;for(let n=0;n<this.boxes.length;n++){const s=i[n];if(!s){this.boxes[n].visible=this.ghosts[n].visible=!1;continue}const a=t.time>=t.items.boxes[n];this.boxes[n].position.set(s.x,s.y+.7+Math.sin(e*2+n)*.17,s.z),this.boxes[n].rotation.set(.12,e*.65+n*.5,.12),this.boxes[n].visible=a,this.ghosts[n].position.copy(this.boxes[n].position),this.ghosts[n].rotation.copy(this.boxes[n].rotation),this.ghosts[n].visible=!a}for(let n=0;n<56;n++){this.bolts.setMatrixAt(n,this.hidden),this.traps.setMatrixAt(n,this.hidden),this.bananas.setMatrixAt(n,this.hidden),this.fences.setMatrixAt(n,this.hidden);const s=t.items.objects[n];if(!s)continue;this.dummy.position.set(s.x,s.y,s.z),this.dummy.rotation.set(0,s.kind===10?s.yaw??0:s.kind===1||s.kind===6?e*8:s.id,0),this.dummy.scale.setScalar(s.kind===6?1.35:s.kind===8?1.2:1),this.dummy.updateMatrix();const a=s.kind===10?this.fences:s.kind===9?this.bananas:s.kind===1||s.kind===6?this.bolts:this.traps;a.setColorAt(n,this.color.set(s.kind===9||s.kind===10?16777215:s.kind===6?16740766:s.kind===8?15759954:s.kind===1?6744319:16759649)),a.setMatrixAt(n,this.dummy.matrix)}for(let n=0;n<8;n++)this.shields.setMatrixAt(n,this.hidden),this.waves.setMatrixAt(n,this.hidden);for(const n of t.racers){const s=n.body;this.shields.setMatrixAt(n.id,this.hidden),this.waves.setMatrixAt(n.id,this.hidden),s.shieldTime>0&&(this.dummy.position.set(s.x,s.y+1.1,s.z),this.dummy.rotation.set(0,e,0),this.dummy.scale.set(2.5,2,2.8),this.dummy.updateMatrix(),this.shields.setMatrixAt(n.id,this.dummy.matrix)),s.pulseTime>0&&(this.dummy.position.set(s.x,s.y+.5,s.z),this.dummy.rotation.set(Math.PI/2,0,0),this.dummy.scale.setScalar(1+(1-s.pulseTime/.65)*13),this.dummy.updateMatrix(),this.waves.setMatrixAt(n.id,this.dummy.matrix))}for(const n of[this.bolts,this.traps,this.bananas,this.fences,this.shields,this.waves])n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0)}dispose(){this.scene.remove(this.group),this.texture.dispose(),this.fenceTexture.dispose();const t=new Set,e=new Set;this.group.traverse(i=>{if(i instanceof Ot){t.add(i.geometry);for(const n of Array.isArray(i.material)?i.material:[i.material])e.add(n)}}),t.forEach(i=>i.dispose()),e.forEach(i=>i.dispose())}}class Pg{scene=new tl;camera=new De(60,innerWidth/innerHeight,.2,1200);renderer;path=new cs;world;race;views=[];chase;particles;weatherEffects;trafficVisuals;appliedWeather=null;weatherPlan=[];input;ui;garage;itemVisuals;lastPickup=0;audio=new _g;accumulator=0;last=0;elapsed=0;fps=60;frame=0;raf=0;auto=!1;lowQuality=!1;lastBoost=0;lastImpact=0;lastMini=0;lastLap=0;lastCount="";hadFinish=!1;pads=new Set;telemetryTime=0;network=null;remote=null;lobby;lobbyRosterKey="";preparing=!1;prepared=Promise.resolve();frameTimes=[];constructor(){const t=document.createElement("canvas"),e=t.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});this.renderer=e?new Na({canvas:t,context:e,antialias:!0}):new Wi,this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=ye,this.renderer.toneMapping=Va,this.renderer.toneMappingExposure=1.15,this.renderer.domElement.className="game-canvas",this.renderer.domElement.setAttribute("aria-label","浪灣疾行 3D 賽道"),document.querySelector("#app").append(this.renderer.domElement),this.world=new Ac(this.scene,this.path),this.race=new Zm(this.path,this.world.obstacles),this.chase=new ng(this.camera),this.particles=new rg(this.scene),this.itemVisuals=new Cg(this.scene),this.trafficVisuals=new Vm(this.scene),this.weatherEffects=new sg(this.scene),this.rebuildKarts(),this.input=new og(i=>this.key(i)),this.ui=new vg(this.race,{start:()=>this.start(),select:i=>this.select(i),menu:()=>this.menu(),pause:()=>this.pause(),restart:()=>this.start(),reset:()=>this.resetKart(),audio:()=>this.toggleAudio(),quality:()=>this.toggleQuality(),autopilot:()=>this.toggleAuto(),online:()=>this.lobby.show(),garage:()=>{this.race.settings.mode="single",this.openGarage("solo")},championship:()=>{this.race.settings.mode="championship",this.openGarage("solo")},nextResult:()=>{this.nextResult()}}),this.garage=new Rg(async(i,n,s,a)=>{s==="online"?(this.lobby.setKart(i),this.network?.room&&await this.network.action("ready",{kart:i,ready:!1}),this.lobby.show(),this.ui.garage=!1):(await this.prepared,this.race.settings={...a},this.setTrack(n),this.race.selected=i,await this.start(),this.ui.garage=!1)},()=>{this.ui.garage=!1,this.garage.mode==="online"&&this.lobby.show()}),this.lobby=new Ag({create:(i,n,s,a)=>this.connect(i,n,s,void 0,a),join:(i,n,s)=>this.connect(i,n,2,s),ready:async(i,n,s)=>{await this.prepared,await this.network?.action("ready",{kart:i,ready:n,...s?{name:s}:{}})},capacity:async i=>{await this.network?.action("capacity",{capacity:i})},track:async i=>{await this.network?.action("track",{track:i})},settings:async i=>{await this.network?.action("settings",{...i})},choose:()=>this.openGarage("online"),start:async()=>{this.audio.init(),await this.prepared,await this.network?.action("start")},leave:async()=>this.leaveOnline(),close:()=>this.lobby.hide()}),this.renderer instanceof Wi&&(this.ui.get("quality").textContent="畫質 · 相容模式",this.ui.get("quality").title="此瀏覽器未開放 WebGL，使用 Canvas 3D 相容顯示"),window.addEventListener("resize",this.resize),document.addEventListener("visibilitychange",this.visibility),this.raf=requestAnimationFrame(this.tick),this.prepared=this.warmup(),new URLSearchParams(location.search).has("room")&&this.lobby.show()}openGarage(t){this.input.clear(),this.lobby.hide(),this.ui.garage=!0,this.garage.show(t==="online"?this.lobby.kart:this.race.selected,this.path.id,t,t==="online"?this.lobby.input("driver-name").value:"YOU",this.race.settings)}setTrack(t){if(this.path.id===t)return;this.world.dispose(),this.path=new cs(t),this.world=new Ac(this.scene,this.path),this.race.track=this.path,this.race.obstacles=this.world.obstacles,this.appliedWeather=null,this.applyWeather(),this.network&&(this.network.obstacles=this.world.obstacles),this.race.reset(this.race.selected,!1),this.rebuildKarts(),this.chase.reset(),this.particles.clear(),this.ui.mapCache=null;const e=this.ui.root.querySelector(".track-tag");e.querySelector("span").textContent=this.path.definition.english,e.querySelector("strong").textContent=this.path.definition.name,e.querySelector("small").textContent=this.path.definition.description,this.renderer instanceof Wi&&this.renderer.invalidate()}applyWeather(){const t=this.race.settings.activeWeather??"sunny";if(t!==this.appliedWeather){this.appliedWeather=t,this.world.setWeather(t),this.weatherEffects.setWeather(t);for(const e of this.race.racers)e.body.wetRoad=t==="rain";this.renderer instanceof Wi&&this.renderer.invalidate()}}rebuildKarts(){if(this.views.length===this.race.racers.length&&this.views.every((t,e)=>t.body.spec.id===this.race.racers[e].body.spec.id&&t.name===this.race.racers[e].name&&t.body.spec.color===this.race.racers[e].color)){this.views.forEach((t,e)=>t.body=this.race.racers[e].body);return}this.views.forEach(t=>{this.scene.remove(t.group),t.dispose()}),this.views=this.race.racers.map(t=>{const e=new ml(t.body,t.name);return e.group.userData.dynamic=!0,this.scene.add(e.group),e}),this.renderer instanceof Wi&&this.renderer.invalidate()}async warmup(){if(!(this.renderer instanceof Na))return;const t=this.renderer;this.preparing=!0,this.ui?.showToast("正在準備賽道與車輛…"),await new Promise(n=>requestAnimationFrame(()=>n())),this.scene.updateMatrixWorld(!0);const e=[];this.scene.traverse(n=>{if(n instanceof Ot){e.push({obj:n,culled:n.frustumCulled,visible:n.visible}),n.frustumCulled=!1,n.visible=!0;for(const s of Array.isArray(n.material)?n.material:[n.material]){const a=s.map;a&&t.initTexture(a)}}});const i=new Li(32,32);try{await t.compileAsync(this.scene,this.camera),t.setRenderTarget(i),t.render(this.scene,this.camera)}finally{t.setRenderTarget(null),i.dispose(),e.forEach(n=>{n.obj.frustumCulled=n.culled,n.obj.visible=n.visible}),this.preparing=!1,this.last=performance.now(),this.accumulator=0}}async connect(t,e,i,n,s=Qi){this.network?.dispose(),this.network=new Sg({room:a=>this.onRoom(a),start:a=>this.startOnline(a),snapshot:a=>this.remote?.accept(a),error:a=>{this.lobby.message(a),this.ui.showToast(a)},closed:a=>{this.clearOnline(),this.lobby.show(),this.lobby.message(a)}},this.world.obstacles);try{await this.network.enter(t,e,i,n,this.path.id,s),this.audio.init()}catch(a){throw this.network.dispose(),this.network=null,a}}onRoom(t){if(this.race.settings=bn(t),this.applyWeather(),this.ui.newRecordIds=t.newRecordIds??[],this.input.setItemsEnabled(t.itemsEnabled!==!1),this.ui.series=t.series,this.ui.cupStage=t.stage,this.ui.resultView=t.resultView,this.ui.resultReady=t.phase==="finished",this.ui.canAdvance=this.network.isHost,t.phase==="finished"&&this.race.state==="finished"&&this.ui.updateResults(),t.phase==="lobby"){this.setTrack(t.track),this.lobby.update(t,this.network.id);const e=this.race.state!=="menu";this.remote=null,this.race.online=!0,this.race.state="menu",this.race.paused=!1,this.garage.visible||this.lobby.show();const i=JSON.stringify([t.track,t.mode,t.difficulty,t.itemsEnabled,t.aiEnabled,t.capacity,t.members.map(n=>[n.seat,n.name,n.kart])]);(i!==this.lobbyRosterKey||e)&&(this.ui.mapCache=null,this.lobbyRosterKey=i,this.race.configure(Qn(t),this.network.seat),this.race.state="menu",this.rebuildKarts(),this.chase.reset(),this.particles.clear(),this.auto=!1,this.network.qaAuto=!1,this.prepared=this.prepared.then(()=>this.warmup()))}}async startOnline(t){await this.prepared,!(!this.network||this.network.closed||this.network.room?.round!==t.round||this.network.room.phase==="lobby")&&(this.setTrack(t.track),this.network.itemSeq=0,this.network.itemRightSeq=0,this.ui.newRecordIds=[],this.race.settings=bn(t),this.applyWeather(),this.race.configure(Qn(t),this.network.seat),this.race.countdown=4,this.ui.liveRecord.begin(this.path.id),this.rebuildKarts(),this.particles.clear(),this.chase.reset(),this.input.clear(),this.accumulator=0,this.auto=!1,this.network.qaAuto=!1,this.hadFinish=!1,this.lastBoost=0,this.lastImpact=0,this.lastMini=0,this.lastLap=0,this.lastCount="",this.ui.lastResult="",this.remote=new bg(this.race),this.lobby.hide(),this.garage.hide(),this.ui.garage=!1,this.lastPickup=0,document.activeElement?.blur(),this.prepared=this.warmup(),await this.prepared)}async leaveOnline(){await this.network?.leave().catch(()=>{}),this.clearOnline(),this.lobby.hide()}clearOnline(){this.network?.dispose(),this.network=null,this.remote=null,this.lobbyRosterKey="",this.lobby.reset(),this.ui.series=[],this.ui.cupStage=0,this.ui.resultView="times",this.ui.canAdvance=!0,this.ui.resultReady=!0,this.race.online=!1,this.race.roster=null,this.race.localPlayerId=0,this.race.reset(0,!1),this.rebuildKarts(),this.chase.reset(),this.garage.hide(),this.ui.garage=!1}select(t){this.race.reset(t,!1),this.rebuildKarts(),this.chase.reset()}async start(t=!1){if(this.network){this.network.isHost?await this.network.action("lobby").catch(e=>this.ui.showToast(e.message)):this.ui.showToast("等待房主返回房間，準備下一場");return}if(await this.prepared,this.race.settings=bn(this.race.settings),!t){this.ui.series=[],this.ui.cupStage=0;const e=this.race.settings;e.mode==="championship"&&(e.trackOrder==="random"&&(e.cupTracks=Tl().slice(0,3)),this.setTrack(Je(e.cupTracks)[0])),this.weatherPlan=[];for(let i=0;i<(e.mode==="championship"?Je(e.cupTracks).length:1);i++){const n=["sunny","sunset","rain"].filter(s=>s!==this.weatherPlan[i-1]);this.weatherPlan.push(e.weather==="random"?n[Math.floor(Sn()*n.length)]:e.weather)}}this.race.settings.activeWeather=this.weatherPlan[this.ui.cupStage]??"sunny",this.applyWeather(),this.ui.resultView="times",this.ui.resultReady=!0,this.ui.canAdvance=!0,this.audio.init(),this.race.reset(this.race.selected,!0),this.ui.liveRecord.begin(this.path.id),this.rebuildKarts(),this.prepared=this.warmup(),await this.prepared,this.particles.clear(),this.chase.reset(),this.input.clear(),this.accumulator=0,this.auto=!1,this.lastBoost=0,this.lastImpact=0,this.lastMini=0,this.lastLap=0,this.lastPickup=0,this.hadFinish=!1,this.pads.clear(),this.lastCount="",this.ui.lastResult="",document.activeElement?.blur(),this.ui.get("restart").blur()}async nextResult(){if(!(this.ui.resultsBusy||this.race.state!=="finished"||!this.ui.resultReady||!this.ui.canAdvance)){this.ui.resultsBusy=!0;try{this.network?await this.network.action(this.ui.resultView==="times"?"show-points":"next-stage",{round:this.network.round}):this.ui.resultView==="times"?this.ui.resultView="points":this.ui.cupStage<Je(this.race.settings.cupTracks).length-1&&(this.ui.cupStage++,this.setTrack(Je(this.race.settings.cupTracks)[this.ui.cupStage]),await this.start(!0))}catch(t){this.ui.showToast(t.message)}finally{this.ui.resultsBusy=!1}}}menu(){if(this.network){this.leaveOnline();return}this.race.reset(this.race.selected,!1),this.auto=!1,this.input.clear(),this.rebuildKarts(),this.particles.clear(),this.chase.reset(),this.garage.hide(),this.ui.garage=!1}pause(){this.race.state==="menu"||this.race.state==="finished"||(this.race.paused=!this.race.paused,this.input.clear(),this.accumulator=0)}resetKart(){if(!(this.race.state!=="racing"||this.race.paused||this.race.player.finishTime!==null)){if(this.network){this.network.resetSeq++;return}this.race.resetRacer(),this.chase.reset(),this.ui.showToast("救援完成 · 回到上一個檢查點")}}toggleAudio(){this.audio.init(),this.audio.toggle(),this.ui.get("sound").setAttribute("aria-label",this.audio.enabled?"關閉音效":"開啟音效"),this.ui.get("sound").classList.toggle("muted",!this.audio.enabled)}toggleQuality(){if(this.renderer instanceof Wi){this.ui.showToast("目前使用相容模式 · 開啟圖形加速可提升畫質");return}this.lowQuality=!this.lowQuality,this.renderer.setPixelRatio(this.lowQuality?Math.min(devicePixelRatio,1):Math.min(devicePixelRatio,1.5)),this.ui.get("quality").textContent=this.lowQuality?"畫質 · 效能":"畫質 · 標準"}toggleAuto(){}key(t){if(this.network&&this.race.state==="racing"&&!this.race.paused&&this.race.player.finishTime===null&&(t==="KeyZ"&&this.network.itemSeq++,t==="KeyX"&&this.network.itemRightSeq++),this.network&&t==="Blur"){this.input.clear();return}t==="Escape"&&this.pause(),t==="KeyR"&&this.resetKart(),t==="F3"&&this.ui.toggleDebug(),t==="Blur"&&["racing","countdown"].includes(this.race.state)&&!this.race.paused&&this.pause(),t==="Enter"&&this.race.state==="menu"&&!this.network&&this.lobby.root.classList.contains("hidden")&&(this.garage.visible?this.garage.get("garage-confirm").click():this.lobby.show())}resize=()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)};visibility=()=>{if(this.network){document.hidden&&this.input.clear();return}document.hidden&&["racing","countdown"].includes(this.race.state)&&!this.race.paused&&this.pause()};feedback(){if(this.race.state==="menu")return;const t=this.race.player.body;if(t.pickupEvent!==this.lastPickup&&(this.lastPickup=t.pickupEvent,this.ui.showToast(er[t.lastPickupType||t.itemType].name+" · 按 "+(t.lastPickupSlot?"X":"Z")+" 使用"),this.audio.tone(660,.12)),t.boostEvent!==this.lastBoost&&(this.lastBoost=t.boostEvent,this.audio.boost()),t.collisionEvent!==this.lastImpact&&(this.lastImpact=t.collisionEvent,this.audio.tone(75,.1,.03,"triangle")),t.miniTurboEvent!==this.lastMini&&(this.lastMini=t.miniTurboEvent,this.ui.showToast("MINI TURBO · LEVEL "+t.turboLevel)),this.race.player.completedLaps!==this.lastLap&&(this.lastLap=this.race.player.completedLaps,this.lastLap<3&&this.ui.showToast(this.lastLap===2?"最後一圈 · 全力衝刺！":"第 2 圈 · 繼續加速！")),this.race.state==="finished"&&!this.hadFinish){this.hadFinish=!0,!this.network&&this.race.settings.mode==="championship"&&this.ui.series.length===this.ui.cupStage&&this.ui.series.push(Al(this.path.id,this.race.racers)),this.audio.finish();for(let i=0;i<90;i++)this.particles.emit(t.x+(Math.random()-.5)*10,t.y+2+Math.random()*6,t.z+(Math.random()-.5)*10,[14482007,16746852,7464447][i%3],.16,2+Math.random(),(Math.random()-.5)*4,1,(Math.random()-.5)*4)}const e=this.race.state==="countdown"?String(Math.ceil(this.race.countdown)):this.race.state==="racing"&&this.race.time<1?"GO":"";e&&e!==this.lastCount&&(this.lastCount=e,this.audio.tone(e==="GO"?880:440,.17))}tick=t=>{const e=Math.min((t-this.last)/1e3||.016666666666666666,.1);if(this.last=t,this.elapsed+=e,this.fps+=(1/e-this.fps)*.035,this.input.setMobileVisible(!this.garage.visible&&this.lobby.root.classList.contains("hidden")&&["racing","countdown"].includes(this.race.state)&&!this.race.paused&&this.race.player.finishTime===null),this.remote&&this.network){const i=this.race.paused?so():this.auto?this.race.player.ai.controls(this.race.player.body,this.race.bodies,e,this.race.time):this.input.controls;for(this.network.input=i,this.accumulator=Math.min(this.accumulator+e,.1);this.accumulator>=1/120;)this.remote.step(1/120,i),this.accumulator-=1/120;this.remote.interpolate(e)}else if(!this.race.paused&&!this.preparing)for(this.accumulator=Math.min(this.accumulator+e,.15);this.accumulator>=1/120;)this.race.step(1/120,this.input.controls,this.auto),this.accumulator-=1/120;(!this.race.paused||this.remote)&&(this.views.forEach(i=>i.sync(this.elapsed)),this.chase.update(this.race.player.body,e,this.race.state==="menu",this.elapsed),this.particles.update(e,this.race.bodies,this.elapsed),this.feedback()),this.audio.update(this.race.player.body.speed,this.race.state==="racing"&&!this.race.paused),this.itemVisuals.update(this.race,this.elapsed),this.trafficVisuals.update(this.race),this.weatherEffects.update(this.race.paused&&!this.remote?0:e,this.race.racers,this.race.player,this.lowQuality),this.garage.visible?this.garage.tick(this.elapsed):this.preparing||this.renderer.render(this.scene,this.camera),this.frame++%3===0&&(this.ui.update(this.fps,this.renderer.info.render.calls,this.auto),this.network&&(this.ui.get("network-status").textContent=this.network.status+" · "+this.network.room?.code)),this.raf=requestAnimationFrame(this.tick)};dispose(){this.network?.dispose(),this.lobby.dispose(),this.garage.dispose(),this.itemVisuals.dispose(),this.weatherEffects.dispose(),this.trafficVisuals.dispose(),this.ui.records.dispose(),this.ui.resultRecord.dispose(),this.ui.liveRecord.dispose(),cancelAnimationFrame(this.raf),this.input.dispose(),window.removeEventListener("resize",this.resize),document.removeEventListener("visibilitychange",this.visibility),this.audio.ctx?.close(),this.views.forEach(t=>t.dispose()),this.scene.traverse(t=>{t instanceof Ot&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose()))}),this.world.signTextures.forEach(t=>t.dispose()),this.renderer.dispose(),this.ui.records.dispose(),this.ui.root.remove(),this.renderer.domElement.remove()}}(async()=>{await dg();try{const r=new Pg}catch(r){console.error(r),document.querySelector("#app").innerHTML='<div class="error-screen"><h1>需要開啟 WebGL</h1><p>請使用最新版 Chrome 或 Edge，並在瀏覽器設定中開啟圖形加速。</p><button onclick="location.reload()">重新載入</button></div>'}})();
