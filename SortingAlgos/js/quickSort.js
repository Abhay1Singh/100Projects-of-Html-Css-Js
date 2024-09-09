async function quickSort() {
    const bars = document.getElementsByClassName('bar');
    let arr = Array.from(bars).map(bar => parseInt(bar.style.height));
    await quickSortHelper(arr, 0, arr.length - 1);
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = `${arr[i]}px`;
        bars[i].style.backgroundColor = 'green';
    }
}

async function quickSortHelper(arr, low, high) {
    if (!isSorting) return;  // Stop sorting if requested

    if (low < high) {
        let pi = await partition(arr, low, high);
        await quickSortHelper(arr, low, pi - 1);
        await quickSortHelper(arr, pi + 1, high);
    }
}

async function partition(arr, low, high) {
    if (!isSorting) return low;  // Stop sorting if requested

    const bars = document.getElementsByClassName('bar');
    let pivot = arr[high];
    let i = low - 1;

    bars[high].style.backgroundColor = 'red'; // Mark pivot
    for (let j = low; j < high; j++) {
        if (!isSorting) return high;  // Stop sorting if requested

        bars[j].style.backgroundColor = 'yellow';
        await sleep(sortSpeed);

        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            bars[i].style.height = `${arr[i]}px`;
            bars[j].style.height = `${arr[j]}px`;
        }

        bars[j].style.backgroundColor = 'teal';
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    bars[i + 1].style.height = `${arr[i + 1]}px`;
    bars[high].style.height = `${arr[high]}px`;
    bars[high].style.backgroundColor = 'teal';

    return i + 1;
}
