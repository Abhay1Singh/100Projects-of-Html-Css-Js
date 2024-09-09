async function selectionSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < bars.length; i++) {
        let minIdx = i;
        bars[minIdx].style.backgroundColor = 'red';

        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.backgroundColor = 'yellow';
            await sleep(50);

            if (parseInt(bars[j].style.height) < parseInt(bars[minIdx].style.height)) {
                bars[minIdx].style.backgroundColor = 'teal'; // Reset previous min color
                minIdx = j;
            }
            bars[j].style.backgroundColor = 'teal';
        }
        if (minIdx !== i) {
            let temp = bars[i].style.height;
            bars[i].style.height = bars[minIdx].style.height;
            bars[minIdx].style.height = temp;
        }
        bars[i].style.backgroundColor = 'green'; // Mark sorted element
    }
}
