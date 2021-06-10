let timerDebounce;

let debounceFunction = function (func, delay){
    
    clearTimeout(timerDebounce);
    timerDebounce = setTimeout(func, delay); 
}

let timerThrottle;

let throttleFunction = function(func, delay){

    if(timerThrottle){
        return
    }

    timerThrottle = setTimeout(function() {
        console.log(func);
        func();
        timerThrottle = undefined;
    }, delay);
}