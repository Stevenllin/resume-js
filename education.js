const objLoadingStar = document.getElementById('loadingStar');

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

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.classList.add('button-active');

const objLoading1 = document.getElementById('loading1');
const bios3 = document.querySelectorAll('.bio3');
const bios4 = document.querySelectorAll('.bio4');

const icons = document.querySelectorAll('.icon');
const iconsPic = document.querySelectorAll('.icon > img');

let iconFlag = false;

function changeBtn(){
    if(btn1.classList.contains('button-active')){
        btn1.style.setProperty('padding-left', '5px');
        btn1.style.setProperty('border-left', '3px solid orange');
        btn2.style.removeProperty('padding-right');
        btn2.style.removeProperty('border-right');
    }

    if(btn2.classList.contains('button-active')){
        btn2.style.setProperty('padding-right', '5px');
        btn2.style.setProperty('border-right', '3px solid #2828FF');
        btn1.style.removeProperty('padding-left');
        btn1.style.removeProperty('border-left');
    }
}

function changeIcon(){

    icons.forEach(icon => icon.style.setProperty('display', 'none'));

    if(btn1.classList.contains('button-active')){
        icons[1].style.setProperty('display', 'none');
        icons[0].style.setProperty('display', 'flex');
        
    }

    if(btn2.classList.contains('button-active')){
        icons[0].style.setProperty('display', 'none');
        icons[1].style.setProperty('display', 'flex');
    }
}

const btn = document.querySelector('.button');

changeIcon();
changeBtn();
setTimeout(() => { btn.style.setProperty('display', 'flex') }, 3000);

function txtPageIn(x){
    let objLoading = x;
    let objOpacity = objLoading.style.opacity = 0;
    let objOpacityInt = parseInt(objOpacity);     
    
    let fader = setInterval(function(){
        objOpacityInt += 0.01;
        if(objLoading.classList.contains('loading1')){
            document.getElementById('loading1').style.opacity = objOpacityInt;
        }

        if(objLoading.classList.contains('bio4')){
            bios4.forEach(bio4 => bio4.style.setProperty('opacity', `${objOpacityInt}`));
        }

        if(objLoading.classList.contains('bio3')){
            bios3.forEach(bio3 => bio3.style.setProperty('opacity', `${objOpacityInt}`))
        }

        if(objLoading.classList.contains('box1')){
            document.querySelector('.box1').style.opacity = objOpacityInt;
        }
    
        if(objOpacityInt > 1){
            window.clearInterval(fader);
        } 
    }, 10);
}

function txtPageOut(x){
    let objLoading = x;

    if(objLoading.classList.contains('bio3') && iconFlag == false){         
        return
    }

    let objOpacity = objLoading.style.opacity = 1;
    let objOpacityInt = parseInt(objOpacity);
    
    let fader = setInterval(function(){
        objOpacityInt -= 0.01;
        if(objLoading.classList.contains('loading1')){
            document.getElementById('loading1').style.opacity = objOpacityInt;
        }
        
        if(objLoading.classList.contains('bio3') && iconFlag == true){
            bios3.forEach(bio3 => bio3.style.setProperty('opacity', `${objOpacityInt}`));
        }

        if(objLoading.classList.contains('box1')){
            document.querySelector('.box1').style.opacity = objOpacityInt;
        }
    
        if(objOpacityInt <= 0){
            window.clearInterval(fader);
        } 
    }, 10);
}

function textFunIn(x){
    let textPos = x

    if(textPos.classList.contains('loading1')){
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
};

function textFunOut(x){
    let textPos = x

    if(textPos.classList.contains('loading1')){
        let textSpace = textPos.style.setProperty('transform', `translateY(0%)`);
        let i = 0;
        let fader = setInterval(function(){
            i = i + 1;
            textSpace = textPos.style.setProperty('transform', `translateY(-${i}%)`);
            if (i >= 20){
                window.clearInterval(fader);
            }
        }, 10)
    }
};

function txtPageIn1(){
    bios3.forEach(bio3 => bio3.style.setProperty('display', 'none'));
    bios4.forEach(bio4 => bio4.style.setProperty('display', 'none'));

    if(btn1.classList.contains('button-active')){
        bios4[0].style.setProperty('display', 'flex');
        txtPageIn(bios4[0]);
    }

    if(btn2.classList.contains('button-active')){
        console.log(1)
        bios4[1].style.setProperty('display', 'flex');
        txtPageIn(bios4[1]);
    }

    if(this.id == 'school'){
        bios4.forEach(bio4 => bio4.style.setProperty('display', 'none'));
        bios3[0].style.setProperty('display', 'flex');
        iconFlag = true;
        txtPageIn(bios3[0]);
    }

    if(this.id == 'quiz'){
        bios4.forEach(bio4 => bio4.style.setProperty('display', 'none'));
        bios3[1].style.setProperty('display', 'flex');
        iconFlag = true;
        txtPageIn(bios3[1]);
    }

    if(this.id == 'youth'){
        bios4.forEach(bio4 => bio4.style.setProperty('display', 'none'));
        bios3[2].style.setProperty('display', 'flex');
        iconFlag = true;
        txtPageIn(bios3[2]);
    }

    if(this.id =='book'){
        bios4.forEach(bio4 => bio4.style.setProperty('display', 'none'));
        bios3[3].style.setProperty('display', 'flex');
        iconFlag = true;
        txtPageIn(bios3[3]);
    }

    if(this.id == 'conference'){
        bios4.forEach(bio4 => bio4.style.setProperty('display', 'none'));
        bios3[4].style.setProperty('display', 'flex');
        iconFlag = true;
        txtPageIn(bios3[4]);
    }

    if(this.id == 'project'){
        bios4.forEach(bio4 => bio4.style.setProperty('display', 'none'));
        bios3[5].style.setProperty('display', 'flex');
        iconFlag = true;
        txtPageIn(bios3[5]);
    }

    if(this.id == 'document'){
        bios4.forEach(bio4 => bio4.style.setProperty('display', 'none'));
        bios3[6].style.setProperty('display', 'flex');
        iconFlag = true;
        txtPageIn(bios3[6]);
    }
}

iconsPic.forEach(icon => icon.addEventListener('click', txtPageIn1));

const bio2 = document.getElementById('bio2');
const img4 = document.querySelector('.img4');

function spin(deg){
    let i = 0;

    let spinner = setInterval(function(){
        i++;

        bio2.style.setProperty('transform', `rotate(${i}deg)`)
        img4.style.setProperty('transform', `rotate(-${i}deg)`)
        
        if(i >= deg){
            window.clearInterval(spinner);
        } 
    }, 20);
}

function reverse(deg){
    bio2.style.setProperty('transform', `rotate(45deg)`)
    img4.style.setProperty('transform', `rotate(45deg)`)

    let i = deg;
    
    let spinner = setInterval(function(){
        i--;
        
        bio2.style.setProperty('transform', `rotate(${i}deg)`)
        img4.style.setProperty('transform', `rotate(-${i}deg)`)
        
        if(i <= 0){
            window.clearInterval(spinner);
        } 
    }, 20);
}

const box1 = document.querySelector('.box1');

box1.style.setProperty('transform', 'translate(-600px, -100px)');

function rotateOpen(){
    spin(45);
    txtPageIn(box1);

    let i = 0;
    let rotater = setInterval(function(){
        i++;
        y = -100 + i;
        x = 15 * Math.pow((y + 100), 0.5) - 150; 
        
        box1.style.setProperty('transform', `translate(${x}px, ${y}px)`);
        
        if(x == 0){
            window.clearInterval(rotater);
        }
    }, 8)
}

function rotateClose(){
    reverse(45);
    txtPageOut(box1);

    let i = 100;
    let rotater = setInterval(function(){
        i++;
        y = -100 + i;
        x = 15 * Math.pow((y + 100), 0.5) - 150; 
        
        box1.style.setProperty('transform', `translate(${x}px, ${y}px)`);

        if(y == 375){
            window.clearInterval(rotater);
        }
    }, 8)
}

setTimeout(() => {
    textFunIn(objLoading1);
    txtPageIn(objLoading1);   
}, 2000);

setTimeout(() => {
    txtPageIn1();
}, 2500);

setTimeout(()=>{
    rotateOpen();
}, 2750);

function btnClick(){
    let i;
    for(i = 0; i < bios3.length; i++){
        txtPageOut(bios3[i]);
    }
    
    
    if(btn2.classList.contains('button-active')){
        setTimeout(() => {
            btn2.classList.remove('button-active');
            btn1.classList.add('button-active');
        }, 100);
        
        setTimeout(() => {
            changeBtn();
            rotateClose();
        }, 500);
        
        
        setTimeout(() => {
            changeIcon();
            txtPageIn1();
            iconFlag = false;
        }, 600);
        
        
        setTimeout(() => {
            rotateOpen();
            changePic();
        }, 3400);
    }
    
    if(btn1.classList.contains('button-active')){
        setTimeout(() => {
            btn1.classList.remove('button-active');
            btn2.classList.add('button-active');
        }, 100);

        setTimeout(() => {
            changeBtn();
            rotateClose();
        }, 500);
        

        setTimeout(() => {
            changeIcon();
            txtPageIn1();
            iconFlag = false;
        }, 600);
        
        setTimeout(() => {
            rotateOpen();
            changePic();
        }, 3400);
    }
}

btn1.addEventListener('click', () => debounceFunction(btnClick, 300));
btn2.addEventListener('click', () => debounceFunction(btnClick, 300));

let imgSource = document.getElementById('img4').src

const balls = document.querySelectorAll('.ball');

function changePic(){
    if(btn1.classList.contains('button-active')){
        balls[1].style.setProperty('display', 'none');
        balls[0].style.removeProperty('display');
        document.getElementById('img4').src = "images/college02.jpg";
    }
    if(btn2.classList.contains('button-active')){
        balls[0].style.setProperty('display', 'none');
        balls[1].style.removeProperty('display');
        document.getElementById('img4').src = "images/sideproject.jpg";
    }
}

changePic();