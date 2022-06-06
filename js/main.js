const boxOne = {
    'name': 'One box',
    'x': 80,
    'y': 40,
    'z': 120,
    'price': (80 * 40 * 120) / 100
};
const boxTwo = {
    'name': 'Two box',
    'x': 60,
    'y': 120,
    'z': 80,
    'price': (60 * 120 * 80) / 100
};
const boxThree = {
    'name': 'Three box',
    'x': 60,
    'y': 80,
    'z': 20,
    'price': (60 * 80 * 20) / 100
};

const inpX = document.querySelector('#xSizeBox');
const inpY = document.querySelector('#ySizeBox');
const inpZ = document.querySelector('#zSizeBox');
const content = document.querySelector('#content');

let titleBox = `<h3>We have next type boxes :</h3>`;
let contentOne = `<div><b class="caption">One box</b><br/>Height :${boxOne.y} Width :${boxOne.x} Depth :${boxOne.z}</div>`
let contentTwo = `<div><b class="caption">Two box</b><br/>Height :${boxTwo.y} Width :${boxTwo.x} Depth :${boxTwo.z}</div>`
let contentThree = `<div><b class="caption">Three box</b><br/>Height :${boxThree.y} Width :${boxThree.x} Depth :${boxThree.z}</div>`

content.insertAdjacentHTML('afterbegin', contentThree);
content.insertAdjacentHTML('afterbegin', contentTwo);
content.insertAdjacentHTML('afterbegin', contentOne);
content.insertAdjacentHTML('afterbegin', titleBox);

const btn = document.querySelector('input[type="button"]');

btn.addEventListener("click", () => {

    const inpZ = document.querySelector('#zSizeBox');

    let thing = {
        'x': inpX.value,
        'y': inpY.value,
        'z': inpZ.value,
        'price': (inpX.value * inpY.value * inpZ.value) / 100
    }

    let boxes = [];
    if (boxOne.price >= thing.price) {

        boxes.push(boxOne);
    }
    if (boxTwo.price >= thing.price) {

        boxes.push(boxTwo);
    }
    if (boxThree.price >= thing.price) {

        boxes.push(boxThree);
    }

    let box = {
        'name': '',
        'x': 0,
        'y': 0,
        'z': 0,
        'price': 0
    };
    if (boxes.length == 1) {

        content.innerHTML = '';

        box = boxes[0];

    } else {
        for (let i = 0; i < boxes.length; i++) {

            if (box.price === 0) {

                box = boxes[i];

            } else if (boxes[i].price < box.price) {

                box = boxes[i];
            }
        }
    }
    let contentBox = `<div><b class="caption">You need this box: </b><br/>Name :<b>${box.name}</b><br/>Height :<b>${box.y}</b><br/>
     Width :<b>${box.x}</b> <br/>Depth :<b>${box.z}</b><br/>Price : <b>${box.price}</b></div>`;
    content.innerHTML = '';
    content.insertAdjacentHTML('afterbegin', contentBox);
});