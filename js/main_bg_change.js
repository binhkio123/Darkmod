// Set class for some object need to change background
const imageURL = [
    {
        name : "saber",
        link : "url('https://c.wallhere.com/photos/fd/a8/minimalism_texture_black_background_black_armor_rose_illustration_fan_art_dark_background-1426209.jpg!d');",
    },
    {
        name : "violet",
        link : "url('https://c.wallhere.com/photos/b3/76/anime_anime_girls_fan_art_illustration_minimalism_monochrome_dark_background_Violet_Evergarden-1967121.jpg!d');",
    },
    {
        name : "unknown_01",
        link : "url('https://w.wallha.com/ws/13/yZ87sr3l.png');",
    },
    {
        name : "unknown_02",
        link : "url('https://w.wallha.com/ws/13/9AKyQn5W.png');",
    },
    {
        name : "rem",
        link : "url('https://w.wallha.com/ws/12/YvP3U25e.png');",
    },
    {
        name : "unknown_03",
        link : "url('https://i.pinimg.com/originals/ab/0b/66/ab0b66549f3ece0b9e18e4ed06f11e1b.jpg');",
    },
    {
        name : "unknown_04",
        link : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToqzBmvPrXsN73acmbIxJRz-8MqNOfezVdRSD23sw64ScLwlXZ7o_NF3XqpSyf5RKDgU&usqp=CAU');",
    },
]

$(document).ready(function(){
    $("html body, html body.srp, html body.aAU, .LX3sZb #gb, header#gb, .RvYhPd, .MOkH4e .hgbeOc, .main").addClass("bg-set");
    let stt = 0;
    setInterval(() => {
        if(stt === imageURL.length) stt = 0;
        let curURL = imageURL[stt].link;
        let bg = document.getElementsByClassName("bg-set");
        document.css
        $(".bg-set").css("background-image", "var(" + curURL);
        console.log(curURL);
        stt++;
    },1000)
});