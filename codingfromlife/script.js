document.addEventListener('mousemove', function (event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    // Subtle color changes based on mouse movement
    const colorAbove = `rgb(${Math.floor(173 + 20 * x)}, ${Math.floor(216 - 20 * y)}, ${Math.floor(230 + 10 * y)})`;
    const colorBelow = `rgb(${Math.floor(211 + 10 * x)}, ${Math.floor(211 + 10 * y)}, ${Math.floor(211 - 10 * y)})`;

    document.documentElement.style.setProperty('--color-above', colorAbove);
    document.documentElement.style.setProperty('--color-below', colorBelow);
});
