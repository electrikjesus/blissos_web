import Splide from "@splidejs/splide";
document.addEventListener('DOMContentLoaded', function () {
    const splid = new Splide('#blisSplide', {
        arrows: false,
        autoplay: true,
        rewind: true
    });
    splid.mount();

    new Splide('#imgspl', {
        type: "fade",
        arrows: false,
        drag: false,
        pagination: false

    }).sync(splid).mount();

    new Splide('#projspl', {
        type: "loop",
        pagination: false,
        autoWidth: true,
        arrows: true,
        perPage: 3,
        perMove: 1
    }).mount();
});