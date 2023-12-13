import './style.css'
import {setupCounter} from './counter.js'

document.querySelector('#app').innerHTML = `
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
`

setupCounter()
