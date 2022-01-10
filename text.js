var i=1;
document.querySelector(".toggle-btn").addEventListener("click",themeChange);


function themeChange()
{
   i=(i+1)%3;

   if(i===2)
   {
     document.querySelector(".inner-circle-1").classList.add("inner-circle-2");
     document.querySelector(".inner-circle-2").style.backgroundColor="#E1701A";
     document.querySelector("body").style.backgroundColor="#EDEDED";
     document.querySelector("header").style.color="#333";
     document.querySelector(".output-tab").style.backgroundColor="#fff";
     document.querySelector(".output-tab h3").style.color="#333";
     document.querySelector(".panel").style.backgroundColor="#B2B1B9";
     document.querySelector(".delete-btn").style.backgroundColor="#00AF91";
     document.querySelector(".reset-btn").style.backgroundColor="#00AF91";
     document.querySelector(".equal-btn").style.backgroundColor="#E1701A";
   }  
   else if(i===0)
   {
     document.querySelector(".inner-circle-1").classList.add("inner-circle-3");
     document.querySelector(".inner-circle-3").style.backgroundColor="#3CA59D";
     document.querySelector("body").style.backgroundColor="#301B3F";
     document.querySelector("header").style.color="#FFD523";
     document.querySelector(".output-tab").style.backgroundColor="#440A67";
     document.querySelector(".output-tab h3").style.color="#FFD523";
     document.querySelector(".panel").style.backgroundColor="#440A67";
     
     var buttons=document.getElementsByClassName("btn");

     for (var j=0;j<buttons.length;++j)
     {
     	buttons[j].style.backgroundColor="#6A097D";
     	buttons[j].style.color="#FFD523";
     }
     
     document.querySelector(".delete-btn").style.backgroundColor="#6F4A8E";
     document.querySelector(".delete-btn").style.color="#fff";
     document.querySelector(".reset-btn").style.backgroundColor="#6F4A8E";
     document.querySelector(".reset-btn").style.color="#fff";
     document.querySelector(".equal-btn").style.backgroundColor="#3CA59D";
     document.querySelector(".equal-btn").style.color="#000";
   }  
   else
   {
   	  document.querySelector(".inner-circle-1").classList.remove("inner-circle-3");
   	  document.querySelector(".inner-circle-1").classList.remove("inner-circle-2");
   	  document.querySelector(".inner-circle-1").style.backgroundColor="#F54748";
   	  document.querySelector("body").style.backgroundColor="#293B5F";
	  document.querySelector("header").style.color="#fff";
	  document.querySelector(".output-tab").style.backgroundColor="#0A1931";
	  document.querySelector(".output-tab h3").style.color="#fff";
	  document.querySelector(".panel").style.backgroundColor="#0A1931";

       var buttons=document.getElementsByClassName("btn");

     for (var j=0;j<buttons.length-2;++j)
     {
     	buttons[j].style.backgroundColor="#EEEEEE";
     	buttons[j].style.color="#333";
     }

	  document.querySelector(".delete-btn").style.backgroundColor="#476072";
	  document.querySelector(".delete-btn").style.color="#fff";
	  document.querySelector(".reset-btn").style.backgroundColor="#476072";
	  document.querySelector(".equal-btn").style.backgroundColor="#F54748";
	  document.querySelector(".equal-btn").style.color="#fff";
   }

}  



var screen=document.getElementById("output");
var buttons=document.getElementsByClassName("btn");

var screenvalue="";
for (let i=0;i<buttons.length;++i)
{
	buttons[i].addEventListener("click",function(){
    
    let input=buttons[i].innerText;
	

    if (input==='X')
    {
    	input="*";
    	screenvalue+=input;
    	screen.innerText=screenvalue;
    }
    else if(input==='DEL')
    {
    	screenvalue=screenvalue.slice(0,-1);
    	screen.innerText=screenvalue;
    }
    else if(input==="RESET")
    {
    	screenvalue="";
    	screen.innerText="0";
    }
    else if(input==="=")
    {
       screenvalue=eval(screenvalue);
       screen.innerText=screenvalue;
    }
    else
    {
    	screenvalue+=input;
    	screen.innerText=screenvalue;
    }

    console.log(screenvalue);
  });


}

