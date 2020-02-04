var winWidth = document.querySelector('.parallax').offsetWidth;
var maxWinWidth = 753; // максимальное значение разрешения для планшетов

if (winWidth>maxWinWidth) {

    var parallax = (function () {
        var layer1 = document.querySelector(".parallax__layer_1");
        var layer2 = document.querySelector(".parallax__layer_2");
        var layer3 = document.querySelector(".parallax__layer_3");
        var layer4 = document.querySelector(".parallax__layer_4");

        return {
            move: function(block, windowScroll, k) {
                var shift = windowScroll / -k + "%";
                var transformString = "translate3d(0, " + shift + " ,0)";
                var style = block.style;
                style.transform = transformString;
                style.webkitTransform = transformString;

            },
            init: function(wScroll) {
                this.move(layer1, wScroll, 500);
                this.move(layer2, wScroll, 100);
                this.move(layer3, wScroll, 75);
                this.move(layer4, wScroll, 45);

            }
        }
    }());

}

window.onscroll = function() {
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
};