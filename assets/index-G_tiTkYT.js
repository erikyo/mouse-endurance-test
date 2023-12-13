(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function S(){let l=[],c=Number.MAX_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER,i=0;const e=Date.now(),t=document.querySelector("#counter"),d=document.querySelector("#best-click-time"),k=document.querySelector("#best-series-time"),f=document.querySelector("#last-click-time"),T=document.querySelector("#last-series-time"),p=document.querySelector("#total-clicks"),g=document.querySelector("#average-last-3-seconds"),v=document.querySelector("#average-last-10-seconds"),x=document.querySelector("#all-time-average");t.addEventListener("click",w),document.addEventListener("keydown",function(s){s.key==="r"&&(l=[],c=Number.MAX_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER,i=0,p.innerText=`Total Clicks: ${i}`,d.innerText=`Best ms between clicks: ${c} ms`,f.innerText="Last click time: 0 ms",g.innerText="Average of the last 3 s: 0 ms",v.innerText="Average of the last 10 s: 0 ms",x.innerText="All time average: 0 ms")});function w(){const s=Date.now();if(i++,p.innerText=`Total Clicks: ${i}`,l.length>0){const m=s-l[l.length-1];c=Math.min(c,m),d.innerText=`Best ms between clicks: ${c} ms`,f.innerText=`Last click time: ${m} ms`}if(l.push(s),l.length===5){const m=l[4]-l[0];a=Math.min(a,m),k.innerText=`Best ms for a series of 5 clicks: ${a}`,T.innerText=`Last series time: ${m}`,l.shift()}const r=b(h(3));g.innerText=`Average of the last 3 s: ${r} ms`;const o=b(h(10));v.innerText=`Average of the last 10 s: ${o} ms`;const u=(Date.now()-e)/1e3,n=A(i,u);x.innerText=`All time average: ${n} clicks/second`}function A(s,r){return(s/r).toFixed(2)}function h(s){const r=Date.now()-s*1e3,o=l.filter(n=>n>=r),u=[];for(let n=1;n<o.length;n++)u.push(o[n]-o[n-1]);return u}function b(s){const r=s.reduce((o,u)=>o+u,0);return s.length?(r/s.length).toFixed(2):0}}document.querySelector("#app").innerHTML=`
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
          <div class="counter-box w-full h-20 mb-2 bg-pink-500 p-4 rounded w-full h-12">
            <p id="average-last-3-seconds" class="text-xl">Average of the last 3 seconds: 0</p>
          </div>
          <div class="counter-box w-full h-20 mb-2 bg-yellow-500 p-4 rounded w-full h-12">
            <p id="average-last-10-seconds" class="text-xl">Average of the last 10 seconds: 0</p>
          </div>
          <div class="counter-box w-full h-20 mb-2 500 p-4 rounded">
            <p id="all-time-average" class="text-xl">Average of the last 30 seconds: 0</p>
          </div>
          <p>Press 'r' to reset</p>
        </div>
      </div>
    </div>
  </div>
`;S();
