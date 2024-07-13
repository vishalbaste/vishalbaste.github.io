"use-strict";
document.querySelector(".dark").addEventListener("click",darkMode);
document.querySelector(".menuIcon img").addEventListener("click",darkMode);

function darkMode(catche=true)
{
    var darkCheck=document.querySelector("#darkCheck"),
            darkBtnImg=document.querySelector(".dark-mode-btn img"),
                darkMenuImg=document.querySelector(".menuIcon img");
    if(darkCheck.checked)
    {
        darkCheck.checked = false;
            darkBtnImg.src="images/dark.svg";
                darkMenuImg.src="images/ligth.svg";

        localStorage.setItem("DMode",JSON.stringify({"darkmode" : false}));
    }
    else
    {
        darkCheck.checked = true;
            darkBtnImg.src="images/ligth.svg";
                darkMenuImg.src="images/dark.svg";
                    localStorage.setItem("DMode",JSON.stringify({"darkmode" : true}));
    }

    if(catche)
        document.querySelector("body").classList.toggle("darkskin");
}
if(localStorage.getItem("DMode"))
{
    var darkcatche = JSON.parse(localStorage.getItem("DMode"));
        if(darkcatche.darkmode === true)
        {
            document.querySelector("#darkCheck").checked = false;
            darkMode(true);
        }
        else
        {
            document.querySelector("#darkCheck").checked = true;
            darkMode(false);
        }
}

var menuIcon = document.querySelector(".menuopen"),
    menu= document.querySelector("nav");
        menuIcon.addEventListener("click",()=> menu.classList.toggle("active"));