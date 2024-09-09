async function quickSortHelper(arr, low, high) {
    if (low < high) {
        let pi = await partition(arr, low, high);

        await quickSortHelper(arr, low, pi - 1);
        await quickSortHelper(arr, pi + 1, high);
    }
}

async function partition(arr, low, high) {
    let pivot = arr[high];
    let bars = document.getElementsByClassName('bar');
    bars[high].style.backgroundColor = 'red';

    let i = low - 1;
    for (let j = low; j < high; j++) {
        bars[j].style.backgroundColor = 'yellow';
        await sleep(100);

        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
            bars[i].style.height = `${arr[i]}px`;
            bars[j].style.height = `${arr[j]}px`;
        }
        bars[j].style.backgroundColor = 'teal';
    }
    swap(arr, i + 1, high);
    bars[i + 1].style.height = `${arr[i + 1]}px`;
    bars[high].style.height = `${arr[high]}px`;

    bars[high].style.backgroundColor = 'teal';
    bars[i + 1].style.backgroundColor = 'green';
    return i + 1;
}

async function quickSort() {
    await quickSortHelper(array, 0, array.length - 1);
    for (let i = 0; i < array.length; i++) {
        document.getElementsByClassName('bar')[i].style.backgroundColor = 'green';
    }
}
