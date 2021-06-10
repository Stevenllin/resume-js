let objLoading1 = document.getElementById('loading1');
let objLoading2 = document.getElementById('loading2');
let objLoadingStar = document.getElementById('loadingStar');

function txtPage(x){
    let objLoading = x;

    let objOpacity = objLoading.style.opacity = 0;
    let objOpacityInt = parseInt(objOpacity);     

    let fader = setInterval(function(){
        objOpacityInt += 0.01;
        if(x.classList.contains('loading1')){
            document.getElementById('loading1').style.opacity = objOpacityInt;
        }else if(x.classList.contains('loading2')){
            document.getElementById('loading2').style.opacity = objOpacityInt;
        }
        if(objOpacityInt > 1){
            window.clearInterval(fader);
        }
    }, 10);
}

function starPage(x){
    let objLoading = x;

    let objOpacity = objLoading.style.opacity = 0;
    let objOpacityInt = parseInt(objOpacity);     

    let fader = setInterval(function(){
        objOpacityInt += 0.005;
        document.getElementById('loadingStar').style.opacity = objOpacityInt;   
        
        if(objOpacityInt > 1){
            window.clearInterval(fader);
        }
    }, 15);
}

function textFun(y){
    let textPos = y
    let textSpace = textPos.style.setProperty('transform', `translateY(20%)`);
    let i = 20
    let fader = setInterval(function(){
        i = i - 1;
        textSpace = textPos.style.setProperty('transform', `translateY(${i}%)`);
        if (i <= 0){
            window.clearInterval(fader);
        }
    }, 10)
}

starPage(objLoadingStar);

setTimeout(() => {
    textFun(objLoading1);
    txtPage(objLoading1);
    
}, 2000);

setTimeout(() => {
    txtPage(objLoading2);
    textFun(objLoading2);
    
}, 2800);

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){
    this.classList.add('trigger-enter');

    setTimeout(() => { this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active') }, 300);

    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${dropdownCoords.width}px`);
    background.style.setProperty('height', `${dropdownCoords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px`);
}

function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
    background.style.setProperty('width', `0px`);
    background.style.setProperty('height', `0px`);
    background.style.setProperty('transform', `0px, 0px`);
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

const picTxts = document.querySelectorAll('.pic-txt');

function picOpen(){
    if(this.children[0].classList.contains('pic-txt-pos1')){
        picTxts[1].style.setProperty('opacity', 0.3);
        picTxts[2].style.setProperty('opacity', 0.3);
    }

    if(this.children[0].classList.contains('pic-txt-pos2')){
        picTxts[0].style.setProperty('opacity', 0.3);
        picTxts[2].style.setProperty('opacity', 0.3);
    }

    if(this.children[0].classList.contains('pic-txt-pos3')){
        picTxts[0].style.setProperty('opacity', 0.3);
        picTxts[1].style.setProperty('opacity', 0.3);
    }
}

function picClose(){
    if(this.children[0].classList.contains('pic-txt-pos1')){
        picTxts[1].style.removeProperty('opacity');
        picTxts[2].style.removeProperty('opacity');
    }

    if(this.children[0].classList.contains('pic-txt-pos2')){
        picTxts[0].style.removeProperty('opacity');
        picTxts[2].style.removeProperty('opacity');
    }

    if(this.children[0].classList.contains('pic-txt-pos3')){
        picTxts[0].style.removeProperty('opacity');
        picTxts[1].style.removeProperty('opacity');
    }
}

picTxts.forEach(picTxt => picTxt.addEventListener('mouseenter', picOpen));
picTxts.forEach(picTxt => picTxt.addEventListener('mouseleave', picClose));




