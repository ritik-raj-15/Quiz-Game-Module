let minutes=0;
let seconds=0;
let modifiedMin=0;
let modifiedSec=0;
let temp=0;
let x = setInterval(()=>{
    if(seconds<59)
        seconds++;
    else{
    minutes++;
    temp++;
    seconds=0;
    }
     modifiedSec=seconds<10 ? `0${seconds}`:seconds;
     modifiedMin=minutes<10 ? `0${minutes}`:minutes;
    document.getElementById("print").innerHTML=`${modifiedMin} : ${modifiedSec}`;
    var myBar=document.getElementById("myBar");
    if(modifiedMin==14 && modifiedSec==59)
    {
        document.getElementById("print").innerHTML=`Time Taken :- ${modifiedMin} : ${modifiedSec}`;
        myBar.style.width="100%";
    }
    myBar.style.width=(temp/900)*100+"%";
    temp++;
},1000);
setTimeout(function(){
    clearInterval(x);
    show(10);
},900000);

