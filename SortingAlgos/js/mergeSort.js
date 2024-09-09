async function mergeSortHelper(arr, l, r) {
    if (!isSorting || l >= r) return;  // Stop if requested

    let mid = l + Math.floor((r - l) / 2);
    await mergeSortHelper(arr, l, mid);
    await mergeSortHelper(arr, mid + 1, r);
    await merge(arr, l, mid, r);
}

async function merge(arr, l, mid, r) {
    if (!isSorting) return;  // Stop if requested

    const bars = document.getElementsByClassName('bar');
    let n1 = mid - l + 1;
    let n2 = r - mid;

    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) left[i] = arr[l + i];
    for (let i = 0; i < n2; i++) right[i] = arr[mid + 1 + i];

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (!isSorting) return;  // Stop if requested
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            bars[k].style.height = `${left[i]}px`;
            bars[k].style.backgroundColor = 'lightgreen';
            i++;
        } else {
            arr[k] = right[j];
            bars[k].style.height = `${right[j]}px`;
            bars[k].style.backgroundColor = 'lightgreen';
            j++;
        }
        await sleep(sortSpeed);
        k++;
    }

    while (i < n1) {
        if (!isSorting) return;
        arr[k] = left[i];
        bars[k].style.height = `${left[i]}px`;
        bars[k].style.backgroundColor = 'lightgreen';
        i++;
        k++;
        await sleep(sortSpeed);
    }

    while (j < n2) {
        if (!isSorting) return;
        arr[k] = right[j];
        bars[k].style.height = `${right[j]}px`;
        bars[k].style.backgroundColor = 'lightgreen';
        j++;
        k++;
        await sleep(sortSpeed);
    }
}
