async function heapSort() {
    const bars = document.getElementsByClassName('bar');
    let arr = Array.from(bars).map(bar => parseInt(bar.style.height));
    await buildHeap(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!isSorting) return;  // Stop sorting if requested

        [arr[0], arr[i]] = [arr[i], arr[0]];
        bars[0].style.height = `${arr[0]}px`;
        bars[i].style.height = `${arr[i]}px`;
        bars[i].style.backgroundColor = 'green';

        await heapify(arr, 0, i);
    }
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = 'green';
    }
}

async function buildHeap(arr) {
    if (!isSorting) return;  // Stop sorting if requested

    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, i, n);
    }
}

async function heapify(arr, root, size) {
    if (!isSorting) return;  // Stop sorting if requested

    const bars = document.getElementsByClassName('bar');
    let largest = root;
    let left = 2 * root + 1;
    let right = 2 * root + 2;

    if (left < size && arr[left] > arr[largest]) largest = left;
    if (right < size && arr[right] > arr[largest]) largest = right;

    if (largest !== root) {
        [arr[root], arr[largest]] = [arr[largest], arr[root]];
        bars[root].style.height = `${arr[root]}px`;
        bars[largest].style.height = `${arr[largest]}px`;

        await heapify(arr, largest, size);
    }
}
