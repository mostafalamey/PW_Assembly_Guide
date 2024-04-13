
const hu1d45Btn = document.querySelector('#hu1d45');
const hu1sd60Btn = document.querySelector('#hu1sd60');
const hu1d60Btn = document.querySelector('#hu1d60');
const hu1d1d60Btn = document.querySelector('#hu1d1d60');
const hu3d60Btn = document.querySelector('#hu3d60');


hu1d45Btn.addEventListener('click', () => {
    window.location.href = 'BaseUnits/baseUnits.html';
});

hu1sd60Btn.addEventListener('click', () => {
    window.location.href = 'BaseCornerUnits/baseCornerUnits.html';
});

hu1d60Btn.addEventListener('click', () => {
    window.location.href = 'HighUnit_1Door/highUnit_1door.html';
});

hu1d1d60Btn.addEventListener('click', () => {
    window.location.href = 'WallCornerUnits/wallCornerUnits.html';
});

hu3d60Btn.addEventListener('click', () => {
    window.location.href = 'HighUnits/highUnits.html';
});
