function hoveButton()
{
    document.getElementById("butt").style.backgroundColor="#05a5b5";
}

function hoverOut()
{
    document.getElementById("butt").style.backgroundColor="#2cefa7";
}
function show()
{
    document.getElementById("work").style.visibility="visible";
}
function hide()
{
    document.getElementById("work").style.visibility="hidden";
}

var n = 0;
function hoverspan()

{
    n = n + 1;
    document.getElementById("user1").innerHTML = n ;
}



var k = 0;
var test1 = document.getElementById("hoverspan1");
var test2 = document.getElementById("user2");


test1.addEventListener("mouseout",function()
    {
    k = k + 1;
    test2.innerHTML = k;
    });




var j =0;
var test3 = document.getElementById("hoverspan3");
var test4 = document.getElementById("user3");


test3.addEventListener("mouseout",function()
    {
    j = j + 1;
    test4.innerHTML = j;
    });

function changeColor()
{
    document.getElementById("paragraphe").style.color = "#05a5b5";
    document.getElementById("paragraphe").style.textDecoration = "underline";
}

function changeToggel()
{
    document.getElementById("paragraphe").style.color = "#6d6d6d";
    document.getElementById("paragraphe").style.textDecoration = "none";
}