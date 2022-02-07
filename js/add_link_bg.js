

$(document).ready(function () {
    let link;
    $("input.new-bg-img").blur(function () { 
        link = $("input.new-bg-img").val();
    });
    if(true){  //kiem tra link img
        $("#review").click(function () { 
            $(".bg-set").attr("style", "--link: url('" + link + "');");
            // $("body").css("background-image", "url('" + link + "') !important;");
            // $(".bg-set").attr("style", "background-image: url('" + link + "') !important;");
        });
        $("#reload").click(function () { 
            $("body").css("background-image", "var(--link)");
        });
        $(".bg-save-img").click(function () { 
            window.alert("save");
        });
    }
});
