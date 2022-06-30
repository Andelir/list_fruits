document.documentElement.style.setProperty("--color-pair", "#003566");
document.documentElement.style.setProperty("--color-odd", "#0081a7");

function changeColor(color) {
    let colorOdd = document.documentElement.style.getPropertyValue("--color-pair");
    document.documentElement.style.setProperty("--color-pair", color);
    document.documentElement.style.setProperty("--color-odd", colorOdd);
  }
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };