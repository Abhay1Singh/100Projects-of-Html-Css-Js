async function mergeSort() {
    const bars = document.getElementsByClassName('bar');
    let arr = Array.from(bars).map(bar => parseInt(bar.style.height));
    await mergeSortHelper(arr, 0, arr.length - 1);
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = `${arr[i]}px`;
        bars[i].style.backgroundColor = 'green';
    }
}

async function mergeSortHelper(arr, l, r) {
    if (!isSorting) return;  // Stop sorting if requested

    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        await mergeSortHelper(arr, l, mid);
        await mergeSortHelper(arr, mid + 1, r);
        await merge(arr, l, mid, r);
    }
}

async function merge(arr, l, mid, r) {
    if (!isSorting) return;  // Stop sorting if requested

    const bars = document.getElementsByClassName('bar');
    let n1 = mid - l + 1;
    let n2 = r - mid;

    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) left[i] = arr[l + i];
    for (let i = 0; i < n2; i++) right[i] = arr[mid + 1 + i];

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (!isSorting) return;  // Stop sorting if requested

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
        k++;
        await sleep(sortSpeed);
    }

    while (i < n1) {
        if (!isSorting) return;  // Stop sorting if requested

        arr[k] = left[i];
        bars[k].style.height = `${left[i]}px`;
        bars[k].style.backgroundColor = 'lightgreen';
        i++;
        k++;
        await sleep(sortSpeed);
    }

    while (j < n2) {
        if (!isSorting) return;  // Stop sorting if requested

        arr[k] = right[j];
        bars[k].style.height = `${right[j]}px`;
        bars[k].style.backgroundColor = 'lightgreen';
        j++;
        k++;
        await sleep(sortSpeed);
    }
}
