document.getElementsByTagName("header")[0].style.height = screen.height - 120 + "px";
document.getElementsByClassName("About")[0].style.height = screen.height - 120 + "px";

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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
    


