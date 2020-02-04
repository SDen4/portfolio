const gambBtnOpen = document.getElementById("gamburger-menu-button");
const popupMenuClose = document.getElementById("popup-menu-button-close");
const popupMenu = document.getElementById("popup-menu");
const curRight = Math.ceil( parseInt( window.getComputedStyle(popupMenu).right) );
let dur = 0;
let step = 1;
let int;


gambBtnOpen.addEventListener("click", function(e) {
    e.preventDefault();
    dur = curRight;
    int = setInterval(function(){
        dur += step;
        popupMenu.style.right = dur + "px";
        if (dur === 0) {
            clearInterval(int);
        }
    }, 1);
})

popupMenuClose.addEventListener("click", function(e) {
    e.preventDefault();
    dur = 0;
    int = setInterval(function(){
        dur -= step;
        popupMenu.style.right = dur + "px";
        if (dur === curRight) {
            clearInterval(int);
        }
    }, 1);
})
