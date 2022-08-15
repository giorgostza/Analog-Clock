const seconds_hand=document.getElementById("seconds")
const minutes_hand=document.getElementById("minutes")
const hours_hand=document.getElementById("hours")

function getTime(){
    
    const now=new Date();
    const seconds=now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours();

    const timeInterval=6;

    console.log(now);
    console.log(seconds * timeInterval);
    console.log(minutes * timeInterval + seconds/10);
    console.log(hours * 30 + minutes/2);

   

    // seconds_hand.style.transform="rotate(60deg)"

    seconds_hand.style.transform="rotate("+ (seconds * timeInterval) +"deg)"
    minutes_hand.style.transform="rotate("+ (minutes * timeInterval + seconds/10) +"deg)"
    hours_hand.style.transform="rotate("+ (hours * 30 + minutes/2) +"deg)"
}

setInterval(getTime,1000);
