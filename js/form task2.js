var day=document.getElementById("day")
 var  mounth= document.getElementById("mounth")
 var  year= document.getElementById("year")


function brithHtmlElement(date,start,end) {
    var brithElement="";
    for (var index =start; index<=end; index++) {
        brithElement +=`<option selected"${index}">${index}</option>`;
    } 
    date.innerHTML=brithElement;
}
brithHtmlElement(day,1,31);
brithHtmlElement(mounth,1,12);
brithHtmlElement(year,1900,2024);
