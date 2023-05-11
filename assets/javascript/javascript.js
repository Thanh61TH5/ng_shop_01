$(document).ready(function () {
    $('.slider').slick({
        arrows: false,      // hiển thị nút prev/next
        dots: false,        // ẩn điểm chuyển đổi
        infinite: true,     // vòng lặp vô hạn
        slidesToShow: 1,    // 4 hình ảnh trên mỗi dòng
        slidesToScroll: 1,  // chuyển đổi từng slide mỗi lần click
        autoplay: true,     // tự động chuyển slide
        autoplaySpeed: 2000, // thời gian delay giữa các lần chuyển slide (đơn vị là millisecond)
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }

            }

        ]

    });


    $('.chevron-left').click(function () {
        $('.slider').slick('slickPrev');
    });

    $('.chevron-right').click(function () {
        $('.slider').slick('slickNext');
    });

    setInterval(function () {
        $('.slider').slick('slickNext'); // Chuyển đến slide tiếp theo sau mỗi 2s
    }, 6000); // Thời gian delay giữa các lần chuyển slide (2 giây trong trường hợp này)

});
$(document).ready(function () {
    $('.slideshow_sale').slick({
        arrows: false,      // hiển thị nút prev/next
        dots: false,        // ẩn điểm chuyển đổi
        infinite: true,     // vòng lặp vô hạn
        slidesToShow: 5,    // 4 hình ảnh trên mỗi dòng
        slidesToScroll: 1,  // chuyển đổi từng slide mỗi lần click
        autoplay: true,     // tự động chuyển slide
        autoplaySpeed: 2000, // thời gian delay giữa các lần chuyển slide (đơn vị là millisecond)
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2 // 2 hình ảnh trên từng dòng khi màn hình có độ rộng 768px trở xuống
                },},
            {
                breakpoint: 1076,
                settings: {
                    slidesToShow: 3,
                },},
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });
    $('.chevron-left').click(function () {
        $('.slideshow_sale').slick('slickPrev');
    });

    $('.chevron-right').click(function () {
        $('.slideshow_sale').slick('slickNext');
    });
    setInterval(function () {
        $('.slideshow_sale').slick('slickNext'); // Chuyển đến slide tiếp theo sau mỗi 2s
    }, 12000); // Thời gian delay giữa các lần chuyển slide (2 giây trong trường hợp này)



    $('.modal-link__acc').click(function () {
        $('.login').toggle();
        $('.register').toggle();
    });
    $('.top-store').click(function () {
        $('.bottom-header__store-brand').toggle();
    });

//     menu_click


});

// menu_click
$(document).ready(function() {
    $(".top_menu").on("click", function() {
        $(".menu_click").toggleClass("hidden");
        $("#overlay").toggleClass("hidden");
    });
    $("#overlay").on("click", function() {
        $(".menu_click").addClass("hidden");
        $("#overlay").addClass("hidden");
    });
});

// login
$(document).ready(function () {
    $("#login_form").submit(function(event) {
        // Prevent form from submitting
        event.preventDefault();

        $('.button_login').click(function (){
            $('.error__login-email').show();
            setTimeout(function (){
                $('.error__login-email').hide()
            },2000);
            $('.error__login-password').show();
                setTimeout(function (){
                    $('.error__login-password').hide()
                },2000);

        });
    });
});

// validate form register
$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault(); // Ngăn chặn submit form

        var password = $("#password").val();
        var repass = $("#reset_password").val();
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[a-zA-Z\d$*&@#]{8,}$/;// Regex để kiểm tra độ mạnh mật khẩu
        var email = $("#email").val(); // Lấy giá trị của trường email
        var emailRegex = /\S+@\S+\.\S+/; // Regex để kiểm tra định dạng email
        if (!emailRegex.test(email)) {
            $('.error__register-email').show();
            setTimeout(function () {
                $('.error__register-email').hide();
            }, 2000);
            return false; // Ngăn chặn submit mặc định của form
        } else if (!passwordRegex.test(password)) {
            $('.error__register-password').show();
            setTimeout(function () {
                $('.error__register-password').hide();
            }, 2000);
            return false; // Ngăn chặn submit mặc định của form
        } else if (password != repass) {
            $('.error__register-re_password').show();
            setTimeout(function () {
                $('.error__register-re_password').hide();
            }, 2000);
            return false;
        } else {
            $('.modal-notify__register-success').show();
            setTimeout(function () {
                $('.modal-notify__register-success').hide();
            }, 5000)
            return true;
        }
    });
});


// mobile






