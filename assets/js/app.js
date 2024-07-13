function writeTxt(element,speed,repet=false)
{
    var txt=element,a=0, string="",txtString=txt.innerHTML;
    function write()
    {
        string +=txtString[a];
        txt.innerHTML=string+" <span class='cursor'>|</span>";
        a++;
        if(txtString.length !== a)
            setTimeout(write,speed);
        else
        {
            txt.innerHTML=string;
            a=0;string="";
        }
    }
    document.addEventListener("DOMContentLoaded",write);
    if(repet)
    {
       setInterval(()=>{write()},10000);
       repet=false;
    }
}

writeTxt(document.querySelector('#Home h2'),50);


// Scroll to Top
let bagToTop = document.getElementById('back-to-top');
document.onscroll = () => BackTop();
function BackTop()
{
    let bagToTopValue = document.getElementById('progress');
    let scrTop = document.documentElement.scrollTop;
    let scrollVal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(scrTop * 100 / scrollVal);
    if (document.documentElement.scrollTop > 20) {
        bagToTop.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
        bagToTop.style.display = "flex";
    } else bagToTop.style.display = "none";
}

bagToTop.addEventListener("click", () => document.documentElement.scrollTop = 0);