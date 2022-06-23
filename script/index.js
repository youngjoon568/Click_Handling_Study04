const $texts = document.querySelectorAll(".gnb li");
const $btns = document.querySelectorAll(".img-btns button");
const $imgs = document.querySelectorAll(".img-list .img-item");
const $boxs = document.querySelectorAll(".box");
const $menuBtn = document.querySelector(".menu-icon");
const $nav = document.querySelector(".nav");

const handleEvent = (listTarget, listArr, listClass) => {
    [...listArr].map(t => {
        t.classList.remove(listClass);
    });

    listTarget.classList.add(listClass);
};

const handleClick = (taget, i) => {
    taget.addEventListener("click", e => {
        e.preventDefault();
        handleEvent($texts[i], $texts, "textHandle");
        handleEvent($btns[i], $btns, "btnHandle");
        handleEvent($boxs[i], $boxs, "boxHandle");
        handleEvent($imgs[i], $imgs, "imgHandle");
    }); 
};

for(let i = 0; i < $texts.length; i++) {
    handleClick($btns[i], i);
    handleClick($texts[i], i);
}

let isClick = false;

$menuBtn.addEventListener("click", () => {
    isClick = !isClick;
    if(isClick) {
        $nav.style = "display: block;";
    } else {
        $nav.style = "display: none;";
    }
});