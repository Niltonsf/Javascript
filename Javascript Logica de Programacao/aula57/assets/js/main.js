const container = document.querySelector('.container');
const p = container.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroudColorBody = estilosBody.backgroundColor;

for (let value of p) {
    value.style.backgroundColor = backgroudColorBody;
    value.style.color = 'white';
}