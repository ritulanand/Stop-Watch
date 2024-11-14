
// Create variables to keep track of the stopwatch state
let minutes = 0;           // To track the minutes
let seconds = 0;           // To track the seconds
let milliseconds = 0;      // To track the milliseconds
let isRunning = false;     // To track whether the stopwatch is running
let interval;              // To store the interval ID for clearInterval

// Get the HTML elements
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

//  Implement functions to update and format the time

// Function to format time into MM:SS:MsMs format
function formatTime() {
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    let formattedMilliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    
    // Update the display with the formatted time
    display.textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

//  Functions to start, stop, and reset the stopwatch

// Start the stopwatch
function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        
        // Start the interval to update the stopwatch every 10ms
        interval = setInterval(() => {
            milliseconds++;
            
            // Check if we need to increment seconds and reset milliseconds
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
            }

            // Check if we need to increment minutes and reset seconds
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            // Update the display with the new time
            formatTime();
        }, 10); // 10 milliseconds interval
    }
}

// Stop the stopwatch
function stopStopwatch() {
    if (isRunning) {
        clearInterval(interval); // Clear the interval to stop the stopwatch
        isRunning = false;        // Update the isRunning state
    }
}

// Reset the stopwatch
function resetStopwatch() {
    clearInterval(interval); // Clear the interval to stop any running stopwatch
    isRunning = false;        // Update the isRunning state
    minutes = 0;              // Reset minutes
    seconds = 0;              // Reset seconds
    milliseconds = 0;         // Reset milliseconds
    
    // Update the display to show 00:00:00
    formatTime();
}

// Add event listeners to the buttons

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

