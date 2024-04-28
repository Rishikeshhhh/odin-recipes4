const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(size) {
    container.innerHTML = '';
    container.style.width = `${size * 30}px`; // Each square is 30px

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', colorSquare);
        container.appendChild(square);
    }
}

function colorSquare(e) {
    const square = e.target;
    const currentColor = square.style.backgroundColor || 'rgb(255, 255, 255)';
    const newColor = darkenColor(generateRandomColor(currentColor), 0.1);
    square.style.backgroundColor = newColor;
}

function generateRandomColor(currentColor) {
    if (currentColor === 'rgb(255, 255, 255)') {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    } else {
        return currentColor;
    }
}

function darkenColor(color, factor) {
    const rgb = color.match(/\d+/g);
    const r = Math.floor(rgb[0] * (1 - factor));
    const g = Math.floor(rgb[1] * (1 - factor));
    const b = Math.floor(rgb[2] * (1 - factor));
    return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener('click', () => {
    let newSize = prompt('Enter the number of squares per side for the new grid (max 100):');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createGrid(newSize);
    }
});

// Initial grid creation
createGrid(16);
