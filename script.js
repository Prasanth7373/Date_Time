function Date_Time(){
    var date=new Date();
    var hr=date.getHours();
    var mi=date.getMinutes();
    var sec=date.getSeconds();
    var session=document.getElementById("se");

    if (hr>=12)
    {
        session.innerHTML="PM";
    }
    else
    {
        session.innerHTML="AM";
    }

    if (hr>=12)
    {
        hr=hr-12;
    }

    if (mi>=0 && mi<=9)
    {
        mi="0"+mi;
    } 
    if (sec>=0 && sec<=9)
    {
        sec="0"+sec;
    }

    let x=document.getElementById("h").innerHTML=hr;
    let y=document.getElementById("m").innerHTML=mi;
    let z=document.getElementById("s").innerHTML=sec;
}
setInterval(Date_Time,10);