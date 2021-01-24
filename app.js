var milisecond = document.getElementById("msec")
var second = document.getElementById("sec")
var minute = document.getElementById("min")
var hour = document.getElementById("hour")
var count = 00
var counts = 00
var countm = 00
var counth = 00
var interval;
function timer() {
    count++
    milisecond.innerHTML = count;
    if (count == 99) {
        if (counts <= 58) {
            count = 0
            milisecond.innerHTML = count
            counts++
            second.innerHTML = counts
        }
    }
    else if( counts == 59 & count == 98){
        if (countm <= 58) {
            count = 0
            milisecond.innerHTML = count
            counts = 0
            second.innerHTML = counts
            countm++
            minute.innerHTML = countm
        }
    }
    else if(countm > 59 & counts == 58 & count == 98){
        countm = 0
        counth++
        hour.innerHTML = counth
    }
}
function start() {
   interval = setInterval(timer,10)
   var a = document.getElementById("start")
   a.className += " disabled" 
   var b = document.getElementById("stop")
   b.className="appbtn start"
}

function stop() {
    clearInterval(interval)
    var a = document.getElementById("stop")
    a.className += " disabled" 
    var b = document.getElementById("start")
    b.className="appbtn start"
}
function resetc(){
    document.getElementById("fawhite").style.color = "white"
}
function resetb() {
    document.getElementById("fawhite").style.color = "black"
}

function reset() {
    count = "0" + "0";
    counts = "0" + "0";;
    countm = "0" + "0";;
    counth = "0" + "0";;
    milisecond.innerHTML = count
    second.innerHTML = counts
    minute.innerHTML = countm
    hour.innerHTML = counth
    stop()
    var a = document.getElementById("stop")
    a.className += " disabled" 
    var b = document.getElementById("start")
    b.className="appbtn start"
}