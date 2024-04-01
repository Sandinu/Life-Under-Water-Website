let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

//Change fontStyle
// function changeFontStyle(style){
//     document.body.style.fontFamily = style;
//     var content = document.querySelector('.item .content');
//     content.style.fontFamily = style;
// }
// let buttons = document.querySelector('.changeStyle');
// let btn = changeStyle.querySelectorAll('.btn');

// for(var i=0; i<btn.length; i++){
// btn[i].addEventListener('click',function(){
//     let current = document.getElementByClassName('active');
//     current[0].classList.remove('active');
//     this.classList.add('active');
// });
// } 

function changeFontStyle1(){
    document.getElementById('description1').style.fontFamily="'Courier New', Courier, monospace";
    document.getElementById('description2').style.fontFamily="'Courier New', Courier, monospace";
    document.getElementById('description3').style.fontFamily="'Courier New', Courier, monospace";
    document.getElementById('description4').style.fontFamily="'Courier New', Courier, monospace";
    document.getElementById('description5').style.fontFamily="'Courier New', Courier, monospace";
    document.getElementById('description6').style.fontFamily="'Courier New', Courier, monospace";
    document.getElementById('description7').style.fontFamily="'Courier New', Courier, monospace";
    document.getElementById('description8').style.fontFamily="'Courier New', Courier, monospace";
    document.getElementById('description9').style.fontFamily="'Courier New', Courier, monospace";
    document.getElementById('description10').style.fontFamily="'Courier New', Courier, monospace";
}
function changeFontStyle2(){
    document.getElementById('description1').style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('description2').style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('description3').style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('description4').style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('description5').style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('description6').style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('description7').style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('description8').style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('description9').style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('description10').style.fontFamily="'Times New Roman', Times, serif";
}
function changeFontStyle3(){
    document.getElementById('description1').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
    document.getElementById('description2').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
    document.getElementById('description3').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
    document.getElementById('description4').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
    document.getElementById('description5').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
    document.getElementById('description6').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
    document.getElementById('description7').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
    document.getElementById('description8').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
    document.getElementById('description9').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
    document.getElementById('description10').style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri";
}

function changeFontColor1(){
    document.getElementById('description1').style.color="black";
    document.getElementById('description2').style.color="black";
    document.getElementById('description3').style.color="black";
    document.getElementById('description4').style.color="black";
    document.getElementById('description5').style.color="black";
    document.getElementById('description6').style.color="black";
    document.getElementById('description7').style.color="black";
    document.getElementById('description8').style.color="black";
    document.getElementById('description9').style.color="black";
    document.getElementById('description10').style.color="black";
}
function changeFontColor2(){
    document.getElementById('description1').style.color="white";
    document.getElementById('description2').style.color="white";
    document.getElementById('description3').style.color="white";
    document.getElementById('description4').style.color="white";
    document.getElementById('description5').style.color="white";
    document.getElementById('description6').style.color="white";
    document.getElementById('description7').style.color="white";
    document.getElementById('description8').style.color="white";
    document.getElementById('description9').style.color="white";
    document.getElementById('description10').style.color="white";
}
