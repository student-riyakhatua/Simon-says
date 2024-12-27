let gameSeq=[];
let userSeq=[];
let btns=["red","green","orange","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let body=document.querySelector("body");
//console.log("start");

document.addEventListener("keypress",function(){
   
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
   
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let random=Math.floor(Math.random()*4);
    let randomColor=btns[random];
    gameSeq.push(randomColor);
   let randomBtn=document.querySelector(`.${randomColor}`);
    console.log(gameSeq);
//    console.log(randomBtn);
//    console.log(randomColor);

    gameFlash(randomBtn);
}

function check(index){
    
    if(gameSeq[index]==userSeq[index]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,500);
        }
      
    }
    else{
       
        h2.innerHTML=`game over! your score is <b>${level}</b><br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    //console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
   // console.log(userSeq);

    check(userSeq.length-1);
}
    let btnAll=document.querySelectorAll(".btn");
    for(btn of btnAll){
        btn.addEventListener("click",btnPress);
    }

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}