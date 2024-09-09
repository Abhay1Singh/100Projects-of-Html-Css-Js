let array = [];
let isSorting = false;  // To manage stop button functionality
let sortSpeed = 100;    // Default speed is 100ms

// Generate random array
function generateArray() {
    if (isSorting) return;  // Prevent generating array while sorting
    array = [];
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerHTML = ''; // Clear previous array

    const arraySize = 50;
    for (let i = 0; i < arraySize; i++) {
        const randomNum = Math.floor(Math.random() * 300) + 10;
        array.push(randomNum);

        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${randomNum}px`;
        bar.style.width = `${(100 / arraySize) - 1}%`;
        arrayContainer.appendChild(bar);
    }
}

// Adjust sorting speed dynamically based on user input
function adjustSpeed() {
    const speedInput = document.getElementById('speed').value;
    sortSpeed = speedInput;  // Update the speed
    document.getElementById('speed-value').innerText = `${speedInput}ms`;
}

// Call this to generate the first array when the page loads
generateArray();

// Stop the sorting at any time
function stopSort() {
    isSorting = false;  // Set this to false to stop any running sorting
}

// Start sorting based on the selected algorithm
async function startSort() {
    if (isSorting) return;  // Prevent starting sorting if already sorting
    isSorting = true;
    disableControls();
    const algorithm = document.getElementById('algorithms').value;

    switch (algorithm) {
        case 'bubble':
            await bubbleSort();
            break;
        case 'insertion':
            await insertionSort();
            break;
        case 'selection':
            await selectionSort();
            break;
        case 'merge':
            await mergeSort();
            break;
        case 'quick':
            await quickSort();
            break;
        case 'heap':
            await heapSort();
            break;
        default:
            break;
    }
    enableControls();
    isSorting = false;  // Reset sorting status
}

// Sleep function with adjustable speed
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function disableControls() {
    document.getElementById('algorithms').disabled = true;
    document.querySelector('.controls button').disabled = true;
    document.getElementById('speed').disabled = true;  // Disable speed control during sorting
}

function enableControls() {
    document.getElementById('algorithms').disabled = false;
    document.querySelector('.controls button').disabled = false;
    document.getElementById('speed').disabled = false;  // Re-enable speed control
}

