(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
            $(this).siblings(".card-header").find(".btn i").addClass("fa-minus-circle").removeClass("fa-plus-circle");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
            $(this).parent().find(".card-header .btn i").removeClass("fa-plus-circle").addClass("fa-minus-circle");
        }).on('hide.bs.collapse', function(){
            $(this).parent().find(".card-header .btn i").removeClass("fa-minus-circle").addClass("fa-plus-circle");
        });


        
        $('#enrollmentForm').submit(function(event) {
            
            event.preventDefault(); // Prevent the form from submitting

            // Get form values
            var fullName = $('#fullName').val();
            var email = $('#email').val();
            var mobNumber = $('#mobNumber').val();
            var course = $('#course').val();

            // Store data in sessionStorage (or you can use localStorage if you want data to persist)
            sessionStorage.setItem('fullName', fullName);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('mobNumber', mobNumber);
            sessionStorage.setItem('course', course);

            console.log("Enrollment Data:", sessionStorage.getItem('fullName'));


            $('#fullname').val('');
            $('#mobnumber').val('');
            $('#email').val('');

            // Redirect to confirmation page
            window.location.href = 'payment.html';
        });


        // Add custom method to validate letters and spaces only
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    }, "Letters and spaces only please");

    // Validate the form on submit
    $('#enrollmentForm').validate({
        rules: {
            fullName: {
                required: true,
                lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            mobNumber: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            course: {
                required: true
            }
        },
        messages: {
            fullName: {
                required: "Please enter your full name"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            mobileNumber: {
                required: "Please enter your mobile number",
                digits: "Please enter only digits",
                minlength: "Please enter at least 10 digits",
                maxlength: "Please enter no more than 10 digits"
            },
            courseName: {
                required: "Please enter the course name"
            }
        },
        submitHandler: function(form) {
            // Form is valid, submit it
            form.submit();
        }
    });



    });

    
    
})(jQuery);

