var randomNum = Math.floor(Math.random()*6)+1;
var image = "dice"+randomNum+".png";
var imageLink= "./images/"+image;
var firstImage = document.querySelectorAll("img")[0];
firstImage.setAttribute("src",imageLink);

var randomNum2 = Math.floor(Math.random()*6)+1;
var image2 = "dice"+randomNum2+".png";
var imageLink2= "./images/"+image2;
var secondImage = document.querySelectorAll("img")[1];
secondImage.setAttribute("src",imageLink2);

if (randomNum>randomNum2){
    document.querySelector("h1").innerHTML="🎉Player 1 wins!";
}
else if (randomNum<randomNum2){
    document.querySelector("h1").innerHTML="Player 2 wins!🎉";
}
else{
    document.querySelector("h1").innerHTML="It is a DRAW!!";
}
