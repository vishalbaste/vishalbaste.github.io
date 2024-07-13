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

writeTxt(document.querySelector('#Home h2'),50)