const Trainer = document.getElementById('Trainer');
const Obor = document.getElementById('Obor');
const Reviews = document.getElementById('Reviews');
const Block1 = document.querySelector('.block-1');
const Block2 = document.querySelector('.block-2');
const Block3 = document.querySelector('.block-3');

function Activating (elem1, elem2, elem3, block1, block2, block3) {
    elem1.addEventListener('click', function () {
        if (!elem1.classList.contains('active')) {
            elem2.classList.remove('active'), elem3.classList.remove('active');
            elem1.classList.add('active');
            block1.classList.remove('none'), block2.classList.add('none'),
                block3.classList.add('none');
        }
    })
}

Activating(Obor, Trainer, Reviews, Block2, Block1, Block3);
Activating(Trainer, Obor, Reviews, Block1, Block2, Block3);
Activating(Reviews, Obor, Trainer, Block3, Block2, Block1);
