var menubtn1 =document.querySelector("#menubtn1")
var menubtn2 =document.querySelector("#menubtn2")
var menubtn3 =document.querySelector("#menubtn3")





menubtn1.addEventListener("click", function () {
    console.log("Click sur mon menubtn1");
    var submenu = document.querySelector("#menubtn1 .submenu");
    console.dir(submenu);
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
  });
  menubtn2.addEventListener("click", function () {
    console.log("Click sur mon menubtn2");
    var submenu = document.querySelector("#menubtn2 .submenu");
    console.dir(submenu);
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
  });
  menubtn3.addEventListener("click", function () {
    console.log("Click sur mon menubtn3");
    var submenu = document.querySelector("#menubtn3 .submenu");
    console.dir(submenu);
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
  });

