async function bubbleSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            if (!isSorting) return;  // Stop sorting if requested

            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';

            await sleep(sortSpeed);

            const value1 = parseInt(bars[j].style.height);
            const value2 = parseInt(bars[j + 1].style.height);

            if (value1 > value2) {
                bars[j].style.height = `${value2}px`;
                bars[j + 1].style.height = `${value1}px`;
            }

            bars[j].style.backgroundColor = 'teal';
            bars[j + 1].style.backgroundColor = 'teal';
        }
        bars[bars.length - i - 1].style.backgroundColor = 'green';
    }
    bars[0].style.backgroundColor = 'green';
}
