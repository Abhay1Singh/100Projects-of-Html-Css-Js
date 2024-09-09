async function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    const bars = document.getElementsByClassName('bar');

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swap(arr, i, largest);
        bars[i].style.height = `${arr[i]}px`;
        bars[largest].style.height = `${arr[largest]}px`;

        bars[i].style.backgroundColor = 'red';
        bars[largest].style.backgroundColor = 'red';
        await sleep(100);
        bars[i].style.backgroundColor = 'teal';
        bars[largest].style.backgroundColor = 'teal';

        await heapify(arr, n, largest);
    }
}

async function heapSort() {
    const bars = document.getElementsByClassName('bar');
    let n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(array, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        swap(array, 0, i);
        bars[0].style.height = `${array[0]}px`;
        bars[i].style.height = `${array[i]}px`;

        bars[i].style.backgroundColor = 'green';
        await sleep(100);

        await heapify(array, i, 0);
    }

    bars[0].style.backgroundColor = 'green';
}
