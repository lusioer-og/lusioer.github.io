let noCount=2;
window.onload = function() {
    changeGif();
};

function add() {
    let noEl=document.getElementById("yes-button");
    let yesEl=document.getElementById("no-button");
    noCount+=1;
    if (noCount <6)
    {
        noEl.style.width= 50*noCount +"px";
        noEl.style.fontSize= 10*noCount +"px";
        noEl.style.height= 20*noCount +"px";
    }
    else{
        yesEl.remove();
    }
}
function changeGif() {
    let gifEl=document.getElementById("gif-container");
    let textEl=document.getElementById("text");
    
    switch (noCount) {
    case 2:
        gifEl.innerHTML = "<img src='gifs/1.1.gif' alt='flirty'>";
        setTimeout(() => {
            gifEl.innerHTML = "<img src='gifs/1.2.gif' alt='shy'>";},1750);
        break;
    case 3:
        textEl.innerHTML = "<h1>Abui Maya gardainau?<h1>";   
        gifEl.innerHTML = "<img src='gifs/2.1.gif' alt='flirty'>";
        setTimeout(() => {
            gifEl.innerHTML = "<img src='gifs/2.2.gif' alt='shy'>";},1000);
        break;
    case 4:
        textEl.innerHTML = "<h1>Sachai Maya Gardainau?<h1>";
        gifEl.innerHTML = "<img src='gifs/3.1.gif' alt='flirty'>";
        setTimeout(() => {
            gifEl.innerHTML = "<img src='gifs/3.2.gif' alt='shy'>";},1000);
        break;
    case 5:
        textEl.innerHTML = "<h1>HYAAA Najiskikana Bhanana<h1>";
        gifEl.innerHTML = "<img src='gifs/4.1.gif' alt='flirty'>";
        setTimeout(() => {
            gifEl.innerHTML = "<img src='gifs/4.2.gif' alt='shy'>";},2000);
        break;
    case 6:
        textEl.innerHTML = "<h1>HAHAA Katii Naa Aba ta garxau holani?<h1>";
        gifEl.innerHTML = "<img src='gifs/5.1.gif' alt='flirty'>";
        setTimeout(() => {
            gifEl.innerHTML = "<img src='gifs/5.2.gif' alt='shy'>";},3000);
        break;
        
}
}
function yes() {
    let noEl=document.getElementById("yes-button");
    let textEl=document.getElementById("text");
    let gifEl=document.getElementById("gif-container");
    textEl.innerHTML = "<h1>HEHEEE I Love You So Much More Baby<h1>";
    gifEl.innerHTML = "<img src='gifs/6.1.gif' alt='flirty'>";
        setTimeout(() => {
            gifEl.innerHTML = "<img src='gifs/6.2.gif' alt='shy'>";},3000);
    noEl.remove();
}