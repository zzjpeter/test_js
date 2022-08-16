let timer;

//开始调用
function start() {//先清除上一个计时器，再开启一个计时器
    window.clearInterval(timer);
    //1000毫秒调用begin()
    timer = window.setInterval("begin()", 1000);
}

//思路：每过1秒钟调用1次时间，并且将时间显示在某个元素内部
function begin() {
    //得到现在的时间
    let time = new Date();
    //得到h1元素
    let clock = document.getElementById("clock");
    //将时间显示在h1中
    clock.innerHTML = time.toLocaleString();
}

//暂停
function pause() {
    //清除计时器
    window.clearInterval(timer);
}
