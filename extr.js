var numsq=6;
var colors=choosecolor(numsq);
var squares=document.querySelectorAll(".square");
var res=document.getElementById("result");
var pickedColor=pickcolor();
var guesscolor=document.getElementById("pc");
var back=document.getElementById("h1back");
back.style.backgroundColor="#4286f4";
var reload=document.getElementById("h");
var esybtn=document.getElementById("esybtn");
var hardbtn=document.getElementById("hardbtn");

esybtn.addEventListener("click",function(){
	esybtn.classList.add("selector");
	hardbtn.classList.remove("selector");
	numsq=3;
	colors=choosecolor(numsq);
	pickedColor=pickcolor();
	guesscolor.textContent=pickedColor;
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	for(i=colors.length;i<6;i++)
	{
		squares[i].style.backgroundColor="#232323";
	}
});

hardbtn.addEventListener("click",function(){
	esybtn.classList.remove("selector");
	hardbtn.classList.add("selector");
	numsq=6;
	colors=choosecolor(numsq);
	pickedColor=pickcolor();
	guesscolor.textContent=pickedColor;
	for(var i=0;i<colors.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}
});
guesscolor.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor===pickedColor)
		{
			res.textContent="Correct";
			reload.textContent="Play Again?";
			changecolor(pickedColor);
			back.style.backgroundColor=pickedColor;
		}
		else
		{
			res.textContent="Try Again";
			this.style.backgroundColor="#232323";
		}
	});
}
function changecolor(color){
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickcolor(){
	var random=Math.floor(Math.random() *colors.length);
	return colors[random];
}
function choosecolor(numsq){
	var arr=[]
	for(var i=0;i<numsq;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
		var i=Math.floor(Math.random() * 256);
		var j=Math.floor(Math.random() * 256);
		var k=Math.floor(Math.random() * 256);
		return "rgb(" + i + ", "  + j + ", " + k + ")";
}

reload.addEventListener("click",function(){
	colors=choosecolor(numsq);
	pickedColor=pickcolor();
	guesscolor.textContent=pickedColor;
	for(var i=0;i<colors.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}
back.style.backgroundColor="#4286f4";
res.textContent="";
reload.textContent="New Game";
});

//https://code.jquery.com/jquery-2.1.4.js