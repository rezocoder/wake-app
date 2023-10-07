$(document).ready(function () {
    setTimeout(() => {
        $('#preloader').fadeOut('slow');
    }, 1000)
});


$(document).ready(function () {
    $(".burger-menu").hide();
});

$("#openMenu").click(function () {
    $(".burger-menu")
        .show()
        .css("width", "100%");
});

$("#close").click(function () {
    $(".burger-menu").css("width", "0");
    setTimeout(() => {
        $(".burger-menu").hide();
    }, 200)
});


let scrollPosition = 0;
$("#signUp").click(function () {
    scrollPosition = $(window).scrollTop();
    $("#popup").fadeIn();
    $("#overlay").fadeIn();
    $("#logInForm").hide();
    if (window.innerWidth < 575) {
        $("main").css({
            "position": "fixed",
            "top": -scrollPosition + 60 + "px",
        });
        console.log(window.innerWidth)
    } else {
        $("main").css({
            "position": "fixed",
            "top": -scrollPosition + 72 + "px",
        });
    }
    $("footer").css({
        "visibility": "hidden"
    });

    $("body").css("overflow-y", "scroll");
});

// Close the popup with a fade-out effect
$("#overlay").click(function () {
    $("#popup").fadeOut();
    $("#overlay").fadeOut();
    $("main").css("position", "static");
    $(window).scrollTop(scrollPosition);
    $("footer").css({
        "visibility": "visible"
    });
});



$(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
});



$(".menu-item").click(function () {
    $(".menu-item").addClass("active");
    $(this).removeClass("active");


    $("#signUpForm, #logInForm").hide();
    // Show the corresponding content based on the clicked element
    if ($(this).attr("id") === "showSignUp") {
        $("#signUpForm").show();
    } else {
        //console.log('works')
        $("#logInForm").show();
    }
});