
    let time = 0;
    let intervalId;

    function startStopwatch() {
      intervalId = setInterval(() => {
        time++;
        displayTime();
      }, 1000); // Update time every second
      document.getElementById("startBtn").disabled = true;
      document.getElementById("stopBtn").disabled = false;
      document.getElementById("resetBtn").disabled = true;
    }

    function stopStopwatch() {
      clearInterval(intervalId);
      document.getElementById("startBtn").disabled = false;
      document.getElementById("stopBtn").disabled = true;
      document.getElementById("resetBtn").disabled = false;
    }

    function resetStopwatch() {
      clearInterval(intervalId);
      time = 0;
      displayTime();
      document.getElementById("startBtn").disabled = false;
      document.getElementById("stopBtn").disabled = true;
      document.getElementById("resetBtn").disabled = true;
    }

    function displayTime() {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      document.getElementById("timeDisplay").textContent = formattedTime;
    }

    document.getElementById("startBtn").addEventListener("click", startStopwatch);
    document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
    document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
