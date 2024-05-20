function imgSlider(anything) {
    document.querySelector('.imgbox img').src = '/Landing Page - starbucks/Imagens/' + anything + '.png';
}


function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
