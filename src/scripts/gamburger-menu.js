const gambBtnOpen = document.getElementById("gamburger-menu-button");
const popupMenuClose = document.getElementById("popup-menu-button-close");
const popupMenu = document.getElementById("popup-menu");
const sreenLock = document.querySelector(".popup-menu-screen-lock");
const curRight = Math.round( parseInt( window.getComputedStyle(popupMenu).right)/10 )*10;

let step = 5;
let interval, duration;

//popup меню
gambBtnOpen.addEventListener("click", function(e) {
    e.preventDefault();
    duration = curRight;
    sreenLock.style.display = "block";
    interval = setInterval(function(){
        duration += step;
        popupMenu.style.right = duration + "px";
        if (duration >= 0) {
            clearInterval(interval);
        }
    }, 1);
})

popupMenuClose.addEventListener("click", function(e) {
    e.preventDefault();
    duration = 0;
    sreenLock.style.display = "none";
    interval = setInterval(function(){
        duration -= step;
        popupMenu.style.right = duration + "px";
        if (duration <= curRight) {
            clearInterval(interval);
        }
    }, 1);
})

//close popup menu by tap on free space
sreenLock.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target == sreenLock && curRight !==0 && duration === 0) {
        popupMenuClose.click();
    };
});



//scroll by navigation, incl from popup menu
setTimeout( ()=> {
    const anchors = document.querySelectorAll('a.nav__link');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = anchor.getAttribute('href');

            if(sectionId === "#developer") {
                document.querySelector(sectionId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                })
            } else {
                document.querySelector(sectionId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
            }

            if (curRight !==0 && duration === 0) {
                popupMenuClose.click();
            };
        });
    }
}, 1);


//scroll by "скролл"-button
    const scrollButton = document.querySelector("a.scroll");
    scrollButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            behavior: 'smooth',
            top: 950,
        })
    });