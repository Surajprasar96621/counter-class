class Counter {
    constructor() {
      this.count = 0;
      this.running = false;
      this.intervalId = null;
      this.countDisplay = document.getElementById("count-display");
    }
  
    startStop() {
      if (this.running) {
        this.stop();
      } else {
        this.start();
      }
    }
  
    start() {
      this.running = true;
      this.intervalId = setInterval(() => {
        this.count++;
        this.updateDisplay();
      }, 1000);
    }
  
    stop() {
      this.running = false;
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    increment() {
      this.stop();
      this.count++;
      this.updateDisplay();
    }
  
    decrement() {
      this.stop();
      this.count--;
      this.updateDisplay();
    }
  
    updateDisplay() {
      this.countDisplay.textContent = this.count;
    }
  }
  
  const counter = new Counter();
  
  const startStopButton = document.getElementById("start-stop-button");
  const incrementButton = document.getElementById("increment-button");
  const decrementButton = document.getElementById("decrement-button");
  
  startStopButton.addEventListener('click', () => counter.startStop());
  incrementButton.addEventListener('click', () => counter.increment());
  decrementButton.addEventListener('click', () => counter.decrement());
  