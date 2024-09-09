async function insertionSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 1; i < bars.length; i++) {
        let key = parseInt(bars[i].style.height);
        let j = i - 1;

        bars[i].style.backgroundColor = 'red';
        await sleep(50);

        while (j >= 0 && parseInt(bars[j].style.height) > key) {
            bars[j + 1].style.height = bars[j].style.height;
            bars[j].style.backgroundColor = 'red';
            await sleep(50);
            bars[j].style.backgroundColor = 'teal';
            j = j - 1;
        }
        bars[j + 1].style.height = `${key}px`;
        bars[i].style.backgroundColor = 'teal';
    }
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = 'green';
    }
}
