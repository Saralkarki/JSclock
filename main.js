

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    const secondDegrees = ((seconds/60)* 360) + 90;
    const minuteDegrees = ((minute/60)* 360)+ 90;
    const hourDegrees = ((hour/12)* 360)+ 90;
    const secondHand = document.getElementById("second");
    const minuteHand = document.querySelector("#minute");
    const hourHand = document.querySelector("#hour");
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hour,minute,seconds);
}
setInterval(setDate,1000);