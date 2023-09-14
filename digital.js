let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


// console.log(curreentTime);

setInterval(() => {
    let curreentTime = new Date();

    hrs.innerHTML = (curreentTime.getHours()<10?"0":"") + curreentTime.getHours();
    min.innerHTML = (curreentTime.getMinutes()<10?"0":"") + curreentTime.getMinutes();
    sec.innerHTML = (curreentTime.getSeconds()<10?"0":"") + curreentTime.getSeconds();
}, 1000);

