var all = {
    init: function () {
        this.load();
        this.clicktab();
        this.lightbox();
        this.filter();
    },
    load:function(){
        const load = document.querySelector('.load');
        const ul = document.querySelector('.load ul')
        setTimeout(()=>{
            load.classList.add('none')
        },2000)
        setTimeout(()=>{
            ul.classList.add('none')
        },1500)
    },
    clicktab: function () {
        let btn = document.querySelectorAll('.nav__list li a')
        let box = document.querySelectorAll('.box')
        let act = document.querySelector('.active')
        let box_item = document.querySelectorAll('.box-item')
        let btn__progress = document.querySelector('.btn__progress')
        let skill = document.querySelectorAll('.skill')

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', () => {
                for (let i = 0; i < box.length; i++) {
                    box[i].classList.remove('hien')
                    act.classList.remove('active')
                    btn[i].classList.remove('color')
                    box_item[i].classList.remove('opaciti')
                }
                box[i].classList.add('hien')
                btn[i].classList.add('color')
                box_item[i].classList.add('opaciti')
            })
        }

        btn__progress.addEventListener('click', () => {
            for (let i = 0; i < skill.length; i++) {
                skill[i].classList.add('start')
            }

        })
    },
    filter: function () {
        var $grid = $('.interests__box').isotope({
            // options
            itemSelector: '.interests__item ',
        });
        // filter items on button click
        $('.interests__list').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        let li = document.querySelectorAll(' .interests__list li')
        for (let i = 0; i < li.length; i++) {
            li[i].addEventListener('click', () => {
                for (let k = 0; k < li.length; k++) {
                    li[k].classList.remove('border')
                }
                li[i].classList.add('border')
            })
        }

    },
    lightbox: function () {
        const boxItem = document.querySelector('.interests__box').children;
        const lightboxContainer = document.querySelector('.lightbox');
        const lightboxImg = document.querySelector('.lightbox-img');
        const counter = document.querySelector('.caption-counter')
        const text = document.querySelector('.caption-text')
        const prev = document.querySelector('.prev')
        const next = document.querySelector('.next')
        const close = document.querySelector('.lightbox-close')
        const ovelay = document.querySelector('.lightbox__overlay')
        let index;
        let imgSrc;


        for (let i = 0; i < boxItem.length; i++) {
            boxItem[i].querySelector('.btn__interests').addEventListener('click', () => {
                index = i;
                changeImg()
                lightbox();
                ovelay.classList.add('visible')
            })
        }
        /** Click Tắt */
        ovelay.addEventListener('click', () => {
            lightbox()
        })
        close.addEventListener('click', () => {
            lightbox()
        })
        lightboxImg.addEventListener('click', function () {
            sangtrai();
        })


        function sangtrai() {
            if (index == 0) {
                index = boxItem.length - 1
            }
            else {
                index--
            }
            changeImg();
        }
        // Chuyển ảnh slide
        prev.addEventListener('click', () => {
            if (index == 0) {
                index = boxItem.length - 1
            }
            else {
                index--
            }
            changeImg();
        })
        // Chuyển ảnh slide
        next.addEventListener('click', () => {
            if (index == boxItem.length - 1) {
                index = 0;
            } else {
                index++;
            }
            changeImg();

        })
        function lightbox() {
            lightboxContainer.classList.toggle('open')

        }
        /** Change img vs Text */
        function changeImg() {
            var a = boxItem[index].querySelector("img");
            imgSrc = boxItem[index].querySelector("img").getAttribute('src');
            lightboxImg.src = imgSrc;
            counter.innerHTML = (index + 1) + " of " + boxItem.length;
            text.innerHTML = boxItem[index].querySelector("a").innerHTML
        }
    },
}
all.init();




/** Onclick Switcher */
const nav = document.querySelector('.icon__change');
const change__bar = document.querySelector('.change__bar');
const li = document.querySelectorAll('.change__list li')
var color_kin = document.getElementById('color-kin')

nav.addEventListener('click', () => {
    change__bar.classList.toggle('left')
})
for (let i = 0; i < li.length; i++) {
    const color = li[i].getAttribute('data-color')
    li[i].style.background = color;
}
function change(href) {
    color_kin.setAttribute("href", href)
}


