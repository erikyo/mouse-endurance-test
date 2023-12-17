(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function _(){let s=[],n=Number.MAX_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER,i=0;const e=Date.now();let t=0;const d=.428,w=6e-8,A=document.querySelector("#counter"),f=document.querySelector("#best-click-time"),E=document.querySelector("#best-series-time"),g=document.querySelector("#last-click-time"),S=document.querySelector("#last-series-time"),p=document.querySelector("#total-clicks"),x=document.querySelector("#average-last-3-seconds"),h=document.querySelector("#average-last-10-seconds"),v=document.querySelector("#all-time-average"),b=document.querySelector("#mouse-heating");A.addEventListener("click",y),document.addEventListener("keydown",function(l){l.key==="r"&&(s=[],n=Number.MAX_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER,i=0,p.innerText=`Total Clicks: ${i}`,f.innerText=`Best ms between clicks: ${n} ms`,g.innerText="Last click time: 0 ms",x.innerText="Average of the last 3 s: 0 ms",h.innerText="Average of the last 10 s: 0 ms",v.innerText="All time average: 0 ms")});function y(){const l=Date.now();if(i++,p.innerText=`Total Clicks: ${i}`,s.length>0){const m=l-s[s.length-1];n=Math.min(n,m),f.innerText=`Best ms between clicks: ${n} ms`,g.innerText=`Last click time: ${m} ms`}if(s.push(l),s.length===5){const m=s[4]-s[0];a=Math.min(a,m),E.innerText=`Best ms for a series of 5 clicks: ${a}`,S.innerText=`Last series time: ${m}`,s.shift()}const o=k(T(3));x.innerText=`Average of the last 3 s: ${o} ms`;const r=k(T(10));h.innerText=`Average of the last 10 s: ${r} ms`;const u=(Date.now()-e)/1e3,c=N(i,u);v.innerText=`All time average: ${c} clicks/second`;const q=L(),$=C(q);t+=$,b.innerText=`Mouse Heating: ${t.toFixed(10)} J`}setInterval(M,100);function M(){t=Math.max(0,t-w),b.innerText=`Mouse Heating: ${t.toFixed(10)} J`}function N(l,o){return(l/o).toFixed(2)}function L(){return s.length>0?(Date.now()-s[s.length-1])/1e3:0}function C(l){return d*Math.pow(l,2)}function T(l){const o=Date.now()-l*1e3,r=s.filter(c=>c>=o),u=[];for(let c=1;c<r.length;c++)u.push(r[c]-r[c-1]);return u}function k(l){const o=l.reduce((r,u)=>r+u,0);return l.length?(o/l.length).toFixed(2):0}}document.querySelector("#app").innerHTML=`
  <div class="container w-full mx-auto">
    <div id="game-container">
      <div id="app" class="w-full flex flex-col items-center gap-8 items-center justify-center h-screen">
        <div id="counter" class="w-full h-80 bg-red-500 rounded-full cursor-pointer grid place-items-center text-white text-4xl font-bold">
          Click Me
        </div>
        <div id="score-container" class="w-full flex flex-col items-center text-white">
          <div class="counter-box w-full h-20 mb-2 bg-green-500 p-4 rounded">
            <p id="best-click-time" class="text-xl">best-clicke clicks: 0</p>
            <p id="last-click-time" class="text-xl">last-click clicks: 0</p>
          </div>
          <div class="counter-box w-full h-20 mb-2 bg-blue-500 p-4 rounded w-full h-12">
            <p id="best-series-time" class="text-xl">best-series clicks: 0</p>
            <p id="last-series-time" class="text-xl">last-series clicks: 0</p>
          </div>
          <div class="counter-box w-full h-20 mb-2 bg-purple-500 p-4 rounded w-full h-12">
            <p id="total-clicks" class="text-xl">total-clicks clicks: 0</p>
          </div>
          <div class="counter-box w-full h-20 mb-2 bg-orange-500 p-4 rounded w-full h-12">
            <p id="average-last-3-seconds" class="text-xl">Average of the last 3 seconds: 0</p>
          </div>
          <div class="counter-box w-full h-20 mb-2 bg-yellow-500 p-4 rounded w-full h-12">
            <p id="average-last-10-seconds" class="text-xl">Average of the last 10 seconds: 0</p>
          </div>
          <div class="counter-box w-full h-20 mb-2 bg-red-500 p-4 rounded w-full h-12">
            <p id="mouse-heating" class="text-xl">Mouse Heating: 0 J</p>
          </div>
          <div class="counter-box w-full h-20 mb-2 p-4 rounded">
            <p id="all-time-average" class="text-xl">Average of the last 30 seconds: 0</p>
          </div>
          <p>Press 'r' to reset</p>
        </div>
      </div>
    </div>
  </div>
`;_();
