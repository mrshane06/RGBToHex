const input1 = document.getElementById('red');
const input2 = document.getElementById('green');
const input3 = document.getElementById('blue');
const convert = document.getElementById('convert');
const answer = document.getElementById('answer');

//giving the values to the rgb and adding conditions to it for when it works or if its invalid
convert.addEventListener('click', () => {
    const r = parseInt(input1.value, 10);
    const g = parseInt(input2.value, 10);
    const b = parseInt(input3.value, 10);
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        const hex = rgbToHex(r, g, b);
        answer.textContent = `Hex: #${hex}`;
    } else {
        answer.textContent = 'Invalid RGB values';
    }
});

// function to convert the rgb to hex
function rgbToHex(r, g, b) {
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    return `${hexR}${hexG}${hexB}`;
}