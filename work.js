let objLoadingStar = document.getElementById('loadingStar');

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

starPage(objLoadingStar);

const workDropdown = document.querySelector('.workDropdown');
const icons = document.querySelectorAll('.workDropdown > svg');

function spinIcon(){
    let i = 0;
    let spinner = setInterval(function(){
        i = i + 3;
        
        icons.forEach(icon => icon.style.setProperty('transform', `rotate(${i}deg)`));
        
        if(i >= 360){
            window.clearInterval(spinner);
        } 
    }, 1);
}

function changeIcon(){
    if(openFlag1){
        icons[0].style.removeProperty('display');
        icons[1].style.setProperty('display', 'flex');
    }
    
    if(!openFlag1){
        icons[0].style.setProperty('display', 'flex');
        icons[1].style.removeProperty('display');
    }
}

const list1 = document.querySelector('.list1');
const list2 = document.querySelector('.list2');

let openFlag1 = false;
let openFlag2 = false;

function openDropdown1(){
    if(openFlag1){
        return
    }

    list1.style.setProperty('display', 'block');

    let listOpacity1 = list1.style.opacity = 0;
    let listOpacityInt1 = parseInt(listOpacity1);
    
    let fader = setInterval(function(){
        listOpacityInt1 += 0.01;
        document.querySelector('.list1').style.opacity = listOpacityInt1;
        if(listOpacityInt1 > 1){
            window.clearInterval(fader);
        } 
    }, 10);

    setTimeout(() => {
        openFlag1 = true;
        changeIcon();
    }, 400);

}

function openDropdown2(){
    if(openFlag2){
        return
    }

    list2.style.setProperty('display', 'block');

    let listOpacity2 = list2.style.opacity = 0;
    let listOpacityInt2 = parseInt(listOpacity2);
    
    let fader = setInterval(function(){
        listOpacityInt2 += 0.01;
        document.querySelector('.list2').style.opacity = listOpacityInt2;
        if(listOpacityInt2 > 1){
            window.clearInterval(fader);
        } 
    }, 10);
    openFlag2 = true;

}

function closeDropdown1(){
    console.log('close');
    if(!openFlag1){
        return 
    }
    closeDropdown2();
    let listOpacity1 = list1.style.opacity = 1;
    let listOpacityInt1 = parseInt(listOpacity1);

    setTimeout(function(){
        let fader = setInterval(function(){
            listOpacityInt1 -= 0.01;
            document.querySelector('.list1').style.opacity = listOpacityInt1;
            if(listOpacityInt1 <= 0){
                window.clearInterval(fader);
            } 
        }, 10);
        openFlag1 = false;
    }, 200);
    setTimeout(() => { list1.style.setProperty('display', 'none') }, 1000);

    setTimeout(() => {
        dropdownFlag = false;
        changeIcon();
    }, 400);
}

function closeDropdown2(){
    if(!openFlag2){
        return 
    }

    let listOpacity2 = list1.style.opacity = 1;
    let listOpacityInt2 = parseInt(listOpacity2);
    
    let fader = setInterval(function(){
        listOpacityInt2 -= 0.01;
        document.querySelector('.list2').style.opacity = listOpacityInt2;
        if(listOpacityInt2 <= 0){
            window.clearInterval(fader);
        } 
    }, 10);

    setTimeout(() => { list2.style.setProperty('display', 'none') }, 1000);
    openFlag2 = false;
}

workDropdown.addEventListener('click', spinIcon);
icons.forEach(icon => icon.addEventListener('click', openDropdown1));

list1.addEventListener('mouseenter', openDropdown2);

icons.forEach(icon => icon.addEventListener('click', closeDropdown1));

const lieNo1 = document.querySelector('.list1 > ul > li');

let colorFlag1 = false;

function toggleColor1(){
    if(!colorFlag1){
        this.style.setProperty('color', 'white');
        this.style.setProperty('text-shadow', '0 0 2px ,0 0 2px,0 0 1px');
        colorFlag1 = true;
    }
}

lieNo1.addEventListener('click', toggleColor1);

const lieNo2 = Array.from(document.querySelectorAll('.list2 > ul > li'));

const circle3s = document.querySelectorAll('.circle3');
const circle3Txts = document.querySelectorAll('.circle3 > p');
const circle3Imgs = document.querySelectorAll('.circle3 > img');
const circle4s = document.querySelectorAll('.circle4');
const circle4Txts = document.querySelectorAll('.circle4 > p');

let circleFlag = false

function click(){
    circle3s.forEach(circle3 => circle3.style.setProperty('display', 'none'));
    circle4s.forEach(circle4 => circle4.style.setProperty('display', 'none'));
    circle3Imgs.forEach(circle3Img => circle3Img.style.setProperty('display', 'none'));
    circle3Txts.forEach(circle3Txt => circle3Txt.style.setProperty('display', 'none'));
    circle4Txts.forEach(circle4Txt => circle4Txt.style.setProperty('display', 'none'));

    if(this.innerHTML == 'Carrefour OneAPP'){
        document.getElementById('carrefour').style.setProperty('display', 'flex');
        document.getElementById('carrefour-c4').style.setProperty('display', 'flex');
        document.getElementById('carrefour01').style.setProperty('display', 'flex');
        document.getElementById('carrefour02').style.setProperty('display', 'flex');

        circleFlag = true

        setTimeout(() => {
            circle3Imgs.forEach(circle3Img => circle3Img.style.setProperty('display', 'flex'));
            circle3Txts.forEach(circle3Txt => circle3Txt.style.setProperty('display', 'flex'));
            circle4Txts.forEach(circle4Txt => circle4Txt.style.setProperty('display', 'flex'));

            circle3Imgs.forEach(circle3Img => txtPageIn(circle3Img));
            circle3Txts.forEach(circle3Txt => txtPageIn(circle3Txt));
            circle4Txts.forEach(circle4Txt => txtPageIn(circle4Txt));
        }, 1500)
        
    }
    if(this.innerHTML == 'Amway LiveGo'){
        document.getElementById('amway').style.setProperty('display', 'flex');
        document.getElementById('amway-c4').style.setProperty('display', 'flex');
        document.getElementById('amway01').style.setProperty('display', 'flex');
        document.getElementById('amway02').style.setProperty('display', 'flex');
    }
    if(this.innerHTML == 'Bibian'){
        document.getElementById('bibian').style.setProperty('display', 'flex');
        document.getElementById('bibian-c4').style.setProperty('display', 'flex');
        document.getElementById('bibian01').style.setProperty('display', 'flex');
        document.getElementById('bibian02').style.setProperty('display', 'flex');
    }
    if(this.innerHTML == 'Cotton Field'){
        document.getElementById('cottonfield').style.setProperty('display', 'flex');
        document.getElementById('cotton-c4').style.setProperty('display', 'flex');
        document.getElementById('cotton01').style.setProperty('display', 'flex');
        document.getElementById('cotton02').style.setProperty('display', 'flex');
    }
}

lieNo2.forEach(li => li.addEventListener('click', click));
lieNo2.forEach(li => li.addEventListener('click', closeDropdown1));
lieNo2.forEach(li => li.addEventListener('click', () => txtPageOut(bio5)));

function clickWorkdropdown(){
    closeDropdown1();
    setTimeout(() => {
        circle3s.forEach(circle3 => circle3.style.setProperty('display', 'none'));
        circle4s.forEach(circle4 => circle4.style.setProperty('display', 'none'));
        circle3Imgs.forEach(circle3Img => circle3Img.style.setProperty('display', 'none'));
        circle3Txts.forEach(circle3Txt => circle3Txt.style.setProperty('display', 'none'));
        circle4Txts.forEach(circle4Txt => circle4Txt.style.setProperty('display', 'none'));

        bio5.style.setProperty('display', 'flex');

        txtPageIn(bio5);
    }, 1000);
}

list1.addEventListener('click', clickWorkdropdown);

let colorFlag2 = false;

function toggleColor2(){
    if(!colorFlag2){
        this.style.setProperty('color', 'white');
        this.style.setProperty('text-shadow', '0 0 2px ,0 0 2px,0 0 1px');
        colorFlag2 = true;
    }

    if(colorFlag2){
        lieNo2.forEach(li => li.style.removeProperty('color'));
        lieNo2.forEach(li => li.style.removeProperty('text-shadow'));
        this.style.setProperty('color', 'white');
        this.style.setProperty('text-shadow', '0 0 2px ,0 0 2px,0 0 1px');
    }
}

lieNo2.forEach(li => li.addEventListener('click', toggleColor2));


const svg = document.querySelector('.bio5 > ul > svg');
const uls = document.querySelectorAll('.bio5 > ul');
const bio5 = document.querySelector('.bio5');
uls[1].style.setProperty('display', 'none');
uls[1].style.setProperty('opacity', 0);
bio5.style.setProperty('opacity', 0);

let svgFlag = false;
let svgStatus = false;

function svgColor(){
    if(svgFlag == false){
        svg.style.setProperty('fill', 'white');
        svgFlag = true;
    }else if(svgFlag == true){
        svg.style.setProperty('fill', 'rgba(255,255,255,0.4)');
        svgFlag = false;
    }
}
bio5.addEventListener('mouseenter', svgColor);
bio5.addEventListener('mouseleave', svgColor);
bio5.addEventListener('click', closeDropdown1);

const objLoading1 = document.getElementById('loading1');

function txtPageIn(x){
    console.log(x);
    let objLoading = x;
    let objOpacity = objLoading.style.opacity = 0;
    let objOpacityInt = parseInt(objOpacity);     
    
    let fader = setInterval(function(){
        objOpacityInt += 0.01;
        if(objLoading.classList.contains('working')){
            document.getElementById('loading1').style.opacity = objOpacityInt;
        }

        if(objLoading.classList.contains('ul2')){
            uls[1].style.opacity = objOpacityInt;
        }

        if(objLoading.classList.contains('bio5')){
            document.querySelector('.bio5').style.opacity = objOpacityInt;
        }

        if(circleFlag == true){
            circle3Imgs.forEach(circle3Img => circle3Img.style.opacity = objOpacityInt);
            circle3Txts.forEach(circle3Txt => circle3Txt.style.opacity = objOpacityInt);
            circle4Txts.forEach(circle4Txt => circle4Txt.style.opacity = objOpacityInt);
        }
    
        if(objOpacityInt > 1){
            window.clearInterval(fader);
        } 
    }, 10);
}

function txtPageOut(x){
    let objLoading = x;

    let objOpacity = objLoading.style.opacity = 1;
    let objOpacityInt = parseInt(objOpacity);
    
    let fader = setInterval(function(){
        objOpacityInt -= 0.01;
        if(objLoading.classList.contains('bio5')){
            document.querySelector('.bio5').style.opacity = objOpacityInt;
        }
        
        if(objOpacityInt <= 0){
            window.clearInterval(fader);
        } 
    }, 10);

    setTimeout(() => bio5.style.setProperty('display', 'none'), 1000);
}

setTimeout(() => {
    // textFunIn(objLoading1);
    txtPageIn(objLoading1);  
    changeIcon();
}, 2000);

setTimeout(() => {
    txtPageIn(bio5);
}, 2800);

function svgControl(){
    if(svgStatus == false){
        bio5.style.setProperty('animation', 'bio5-scale 1.5s cubic-bezier(1,.02,.55,1.61)');
        bio5.style.setProperty('height', '350px');
        uls[1].style.removeProperty('display');
        setTimeout(() => txtPageIn(uls[1]), 1300);
        setTimeout(() => { svgStatus = true }, 2500);
    }else if(svgStatus == true){
        bio5.style.setProperty('animation', 'bio5-scale-reverse 1.5s cubic-bezier(1,.02,.55,1.61)');
        bio5.style.setProperty('height', '120px');
        uls[1].style.setProperty('display', 'none');
        uls[1].style.setProperty('opacity', 0);
        svgStatus = false;
    }
}

svg.addEventListener('click', () => debounceFunction(svgControl, 300));




