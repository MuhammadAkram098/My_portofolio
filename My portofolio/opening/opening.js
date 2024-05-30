const rating = document.getElementsByClassName('rating')[0];
const block = document.getElementsByClassName('block');

for (let i = 1; i < 100; i++) {
    rating.innerHTML += "<div class='block'></div>";
    block[i].style.transform = "rotate("+ 3.6 * i + "deg)";
    block[i].style.animationDelay = `${i/21}s`

    // 360deg / 100 = 3.6deg

    const counter = document.querySelector('.counter');
    counter.innerText = 0;

    const target = +counter.getAttribute('data-target');

    const numberCounter = () => {
        const value = +counter.innerText;
        if (value < target) {
            counter.innerText = Math.ceil(value + 1);
            setTimeout(() => {
                numberCounter()
            }, 40)
        }
    }

    numberCounter()
}

let go = document.getElementsByClassName('tombol')[0];