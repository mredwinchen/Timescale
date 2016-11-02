function startTimecale(number, time) {
    var num = number;
    for (l = time; l < num; l++) {
        var i = l + 1;
        $(".swiper-wrapper").append('<div class="swiper-slide" id="' + i + '"></div>')
        if (i % 5 == 0) {
            $("#" + i + "").addClass("ssh");
            var n = i * 100;
            $("#" + i + "").append("<span>" + n + "</span>");
        } else if (i == 1) {
            $("#" + i + "").addClass("ssh");
            var n = i * 100;
            $("#" + i + "").append("<span>" + n + "</span>");
        }
    }
}
startTimecale(150, 0);
$(".numtitle").html(100);
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 20,
    speed: 50,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 0,
    paginationType: 'fraction',
    paginationFractionRender: function (swiper, currentClassName) {
        return '<span class="' + currentClassName + '" id="num"></span>';
    },
    onSlideChangeEnd: function (swiper) {
        var numTitle = (swiper.activeIndex + 1) * 100;
        $(".numtitle").html(numTitle)
    }
});