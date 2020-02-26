document.getElementsByTagName("header")[0].style.height = screen.height - 170 + "px";
document.getElementsByClassName("About")[0].style.height = screen.height - 170 + "px";
document.getElementsByClassName("Projects")[0].style.height = screen.height -170 + "px";

var elem = document.getElementsByTagName("header")[0];
var opa = 0;
var id = setInterval(fadeIn, 5);

function fadeIn(){
    if(opa == 1){
        clearInterval(id);
    } else {
        opa += 0.002;
        elem.style.opacity = opa;
    }
}
    


