export function setupCounter() {
  let clickTimes = [];
  let bestMillis = Number.MAX_SAFE_INTEGER;
  let bestSeriesMillis = Number.MAX_SAFE_INTEGER;
  let totalClicks = 0;
  const pageLoadTime = Date.now();
  // Thsi may change based on the type of mouse used
  let totalHeating = 0;
  const MOUSE_HEATING_CONSTANT = 0.428; // TBH those are random numbers HAHA
  const DEHEATING_CONSTANT = 0.00000006; // ☝️ same as the above

  const element = document.querySelector('#counter');
  const bestClickTimeElement = document.querySelector('#best-click-time');
  const bestSeriesTimeElement = document.querySelector('#best-series-time');
  const lastClickTimeElement = document.querySelector('#last-click-time');
  const lastSeriesTimeElement = document.querySelector('#last-series-time');
  const totalClicksElement = document.querySelector('#total-clicks');
  const averageLast3SecondsElement = document.querySelector('#average-last-3-seconds');
  const averageLast10SecondsElement = document.querySelector('#average-last-10-seconds');
  const allTimeAverageElement = document.querySelector('#all-time-average');
  const heatingElement = document.querySelector('#mouse-heating');

  element.addEventListener('click', handleClick);

  document.addEventListener('keydown', function(event) {
    if (event.key === 'r') {
      // Reset counters
      clickTimes = [];
      bestMillis = Number.MAX_SAFE_INTEGER;
      bestSeriesMillis = Number.MAX_SAFE_INTEGER;
      totalClicks = 0;

      // Reset displayed values
      totalClicksElement.innerText = `Total Clicks: ${totalClicks}`;
      bestClickTimeElement.innerText = `Best ms between clicks: ${bestMillis} ms`;
      lastClickTimeElement.innerText = `Last click time: 0 ms`;
      averageLast3SecondsElement.innerText = `Average of the last 3 s: 0 ms`;
      averageLast10SecondsElement.innerText = `Average of the last 10 s: 0 ms`;
      allTimeAverageElement.innerText = `All time average: 0 ms`;
    }
  });

  function handleClick() {
    const clickTime = Date.now();
    totalClicks++;
    totalClicksElement.innerText = `Total Clicks: ${totalClicks}`;

    if (clickTimes.length > 0) {
      const millisBetweenClicks = clickTime - clickTimes[clickTimes.length - 1];
      bestMillis = Math.min(bestMillis, millisBetweenClicks);
      bestClickTimeElement.innerText = `Best ms between clicks: ${bestMillis} ms`;
      lastClickTimeElement.innerText = `Last click time: ${millisBetweenClicks} ms`;
    }

    clickTimes.push(clickTime);

    if (clickTimes.length === 5) {
      const seriesMillis = clickTimes[4] - clickTimes[0];
      bestSeriesMillis = Math.min(bestSeriesMillis, seriesMillis);
      bestSeriesTimeElement.innerText = `Best ms for a series of 5 clicks: ${bestSeriesMillis}`;
      lastSeriesTimeElement.innerText = `Last series time: ${seriesMillis}`;
      clickTimes.shift();
    }

    const last3SecondsAverage = calculateAverage(getLastNSeconds(3));
    averageLast3SecondsElement.innerText = `Average of the last 3 s: ${last3SecondsAverage} ms`;

    const last10SecondsAverage = calculateAverage(getLastNSeconds(10));
    averageLast10SecondsElement.innerText = `Average of the last 10 s: ${last10SecondsAverage} ms`;

    const totalDuration = (Date.now() - pageLoadTime) / 1000; // Duration in seconds
    const allTimeAverage = calculateTotalAverage(totalClicks, totalDuration);
    allTimeAverageElement.innerText = `All time average: ${allTimeAverage} clicks/second`;

    const clickDuration = getClickDuration();
    const heating = calculateHeating(clickDuration);

    totalHeating += heating;

    heatingElement.innerText = `Mouse Heating: ${totalHeating.toFixed(10)} J`;
  }

  // Add a cooling loop
  setInterval(coolMouse, 100);
  function coolMouse() {
    // Using a simplistic cooling model: reducing heating every 100ms
    totalHeating = Math.max(0, totalHeating - DEHEATING_CONSTANT);

    heatingElement.innerText = `Mouse Heating: ${totalHeating.toFixed(10)} J`;
  }

  function calculateTotalAverage(clicks, duration) {
    return (clicks / duration).toFixed(2);
  }

  function getClickDuration() {
    return clickTimes.length > 0 ? (Date.now() - clickTimes[clickTimes.length - 1]) / 1000 : 0;
  }

  function calculateHeating(duration) {
    // Using a simplified model for estimation
    return MOUSE_HEATING_CONSTANT * Math.pow(duration, 2);
  }

  function getLastNSeconds(seconds) {
    const threshold = Date.now() - seconds * 1000;
    const lastNSecondsClicks = clickTimes.filter(time => time >= threshold);
    const clickDurations = [];

    for(let i = 1; i < lastNSecondsClicks.length; i++) {
      clickDurations.push(lastNSecondsClicks[i] - lastNSecondsClicks[i - 1]);
    }

    return clickDurations;
  }

  function calculateAverage(array) {
    const sum = array.reduce((acc, val) => acc + val, 0);
    return array.length ? (sum / array.length).toFixed(2) : 0;
  }
}
