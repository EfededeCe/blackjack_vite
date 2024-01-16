(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const m=r=>{const e=r.substring(0,r.length-3);return isNaN(e)?e==="A"?11:10:Number(e)},g=["A","J","Q","K"],p=["co","pi","tr","di"],b=document.getElementById("btnPedir"),h=document.getElementById("btnDetener"),$=document.getElementById("btnNuevo"),P=document.querySelectorAll("small"),y=document.querySelectorAll(".divCartas"),s={especiales:g,tipos:p,$btnDetener:h,$btnNuevo:$,$btnPedir:b,$divCartasJugadores:y,$ptsJyPC:P},d=(r,e)=>(i[e]=i[e]+m(r),s.$ptsJyPC[e].innerText=i[e],i[e]),v=(r,e)=>{if(!r||r.length===0)throw new Error("tiposDeCarta es obligatorio como un arreglo de string");if(!e||e.length===0)throw new Error("tiposEspeciales es obligatorio como un arreglo de string");let n=[];for(let t=2;t<=10;t++)for(let o of r)n.push(t+"_"+o);for(let t of e)for(let o of r)n.push(t+"_"+o);const c=t=>{for(let o=t.length-1;o>0;o--){const l=Math.floor(Math.random()*(o+1));[t[o],t[l]]=[t[l],t[o]]}return t};return console.time("shuffle"),n=c(n),console.timeEnd("shuffle"),n},u=r=>{if(r.length===0)throw"No hay cartas en el mazo";return r.pop()},w=()=>{let r="";const[e,n]=i;(e>n||n>21)&&e<=21?r=`Felicidades, ganaste con ${e} contra ${n}`:(n>e||e>21)&&n<=21?r=`Lo siento, perdiste con ${e} contra ${n}`:r=`Lo siento, es un empate con ${e}`,setTimeout(()=>{alert(r)},500)},f=(r,e)=>{if(!r)throw new Error("La carta es un argumento obligatorio");const n=document.createElement("img");n.src=`./assets/mazo_poker/${r}.png`,n.classList.add("carta"),s.$divCartasJugadores[e].append(n)},a=(r,e)=>{if(!r)throw new Error("Puntos mínimos son necesarios");if(!e)throw new Error("El deck es necesario");let n;do{const c=u(e);n=d(c,i.length-1),f(c,i.length-1)}while(n<r&&r<=21);w()};let i=[];(()=>{let r=[];const e=(t=2)=>{i=[];for(let o of s.$divCartasJugadores)o.innerHTML="";for(let o of s.$ptsJyPC)o.textContent="0";s.$btnPedir.disabled=!1,s.$btnDetener.disabled=!1;for(let o=0;o<t;o++)i.push(0);r=v(s.tipos,s.especiales)};console.log(s.$btnPedir),s.$btnPedir.addEventListener("click",()=>{const t=u(r),o=d(t,0);console.log(t),console.log(o),f(t,0),o>21?(console.warn("Perdiste todo para siempre!!"),s.$btnPedir.disabled=!0,s.$btnDetener.disabled=!0,a(o,r)):o===21&&(console.warn("21 Ganaste!!!"),s.$btnPedir.disabled=!0,s.$btnDetener.disabled=!0,a(o,r))});const n=()=>{s.$btnPedir.disabled=!0,s.$btnDetener.disabled=!0,a(i[0],r)};s.$btnDetener.addEventListener("click",n);const c=()=>{e()};return s.$btnNuevo.addEventListener("click",c),{nuevoJuego:e}})();