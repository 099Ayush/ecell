var arr = [
    'Nature, in the broadest sense, is the natural, physical, or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.',
    'Nature, in the broadest sense, is the natural, physical, or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.',
    'Nature, in the broadest sense, is the natural, physical, or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.',
    'Nature, in the broadest sense, is the natural, physical, or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.',
    'Nature, in the broadest sense, is the natural, physical, or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.'
]

var titles = [
    'Sunset with a Silhouette of Mountains',
    'A Glowing Ring Illustration',
    'The Night Sky Merging with the Sunset',
    'Another One',
    'Nothing, Just an Abstract Illustration'
]

var det_btn_html = "<button class=\"details\"></button>";

var n_img = 5;

$(document).ready(function () {


    $('#loader, #loader .table, #loader .table-cell').css('height', $(window).height() + 'px');
    $('#cover').css('display', 'none').css('background', 'transparent');

    $(window).on('resize', function () {
        $('#loader, #loader .table, #loader .table-cell').css('height', $(window).height() + 'px');
        $('#book').css('top', ($(window).height() - parseFloat($('#book').height())) / 2 + 'px');
    });

    arr.forEach(element => {
        $('#bar').html($('#bar').html() + det_btn_html);
    });
    $('.details').eq(0).addClass('tour-element').attr('data-desc', 'Click here to know more about the image.').html(titles[0]);
    $('.details').eq(1).addClass('tour-element').attr('data-desc', 'Click here to flip to the corresponding image.');

});

function onwindowload() {
    setTimeout(() => {
        $('.focus, .focus-cover').css('display', 'none');
    }, 300);

    let active_img = 1;
    let prev_img = 5 - (6 - active_img) % 5;
    let next_img = active_img % n_img + 1;

    $('#desc').html(arr[active_img - 1]);
    $('#title').html(titles[active_img - 1]);

    $('.details').eq(active_img - 1).html(titles[active_img - 1]);

    $('#right-cover').on('click', function () {
        $('#cover').css('display', 'initial');
        $('.details').eq(active_img - 1).html('');
        active_img = next_img;
        $('.front').attr('src', './images/img' + active_img + '.jpg');
        $('.front').removeClass().addClass('tmp');
        $('.back').removeClass().addClass('front');
        $('.tmp').removeClass().addClass('back');
        $('#desc').html(arr[active_img - 1]);
        $('#title').html(titles[active_img - 1]);
        $('.details').eq(active_img - 1).html(titles[active_img - 1]);
        $('#img #bgi').css('background', 'url(\'./images/img' + active_img + '.jpg\') center');
        $('#img #bgi').css('background-size', 'cover');
        $('#img img').attr('src', './images/img' + active_img + '.jpg');
        prev_img = 5 - (6 - active_img) % 5;
        next_img = active_img % n_img + 1;
<<<<<<< HEAD
        $('#cover').css('display', 'none');
    });

    $('#left-cover').on('click', function () {
        $('#cover').css('display', 'initial');
        $('.details').eq(active_img - 1).html('');
        active_img = prev_img;
        $('.front').attr('src', './images/img' + active_img + '.jpg');
        $('.front').removeClass().addClass('tmp');
        $('.back').removeClass().addClass('front');
        $('.tmp').removeClass().addClass('back');
        $('#desc').html(arr[active_img - 1]);
        $('#title').html(titles[active_img - 1]);
        $('.details').eq(active_img - 1).html(titles[active_img - 1]);
        $('#img #bgi').css('background', 'url(\'./images/img' + active_img + '.jpg\') center');
        $('#img #bgi').css('background-size', 'cover');
        $('#img img').attr('src', './images/img' + active_img + '.jpg');
        prev_img = 5 - (6 - active_img) % 5;
        next_img = active_img % n_img + 1;
        $('#cover').css('display', 'none');
=======

        $('.left.top').css('transform', 'rotateY(180deg)');
        $('.left.bottom').css('transform', 'rotateY(0deg)');
        $('#cover').css('display', 'initial');

        async function asnc() {
            $('.left, .right').css('transition', 'none');
            $('.top').attr('src', './images/img' + active_img + '.jpg');
            $('.left.top').css('transform', 'rotateY(0deg)');
            $('.left.bottom').css('transform', 'rotateY(-180deg)').attr('src', './images/img' + prev_img + '.jpg');
            $('#back .left').attr('src', './images/img' + prev_img + '.jpg');
            $('#back .right, .right.bottom').attr('src', './images/img' + next_img + '.jpg');

            setTimeout(() => {
                $('.left, .right').css('transition', 'all 0.5s ease-in-out');
                $('#cover').css('display', 'none');
            }, 100);

            $('#desc').html(arr[active_img - 1]);
            $('#title').html(titles[active_img - 1]);
            $('#img img').attr('src', 'images/img' + active_img + '.jpg');
            $('#img #bgi').css('background-image', 'url(images/img' + active_img + '.jpg)');
        }

        setTimeout(async function () {
            let $t = $('#book').clone();
            await (async () => $t.appendTo('body'))();
            await asnc();
            setTimeout(() => $t.remove(), 10);
        }, 500);
    });

    $('.right').hover(function () {
        $('.left.bottom').css('z-index', 1);
        $('.left.top').css('z-index', 2);
        $('.right.bottom').css('z-index', 3);
        $('.right.top').css('z-index', 4);
    }).on('click', async function () {

        active_img = active_img % n_img + 1;
        prev_img = 5 - (6 - active_img) % 5;
        next_img = active_img % n_img + 1;

        $('.right.top').css('transform', 'rotateY(-180deg)');
        $('.right.bottom').css('transform', 'rotateY(0deg)');
        $('#cover').css('display', 'initial');

        async function asnc() {
            $('.left, .right').css('transition', 'none');
            $('.top').attr('src', './images/img' + active_img + '.jpg');
            $('.right.top').css('transform', 'rotateY(0deg)');
            $('.right.bottom').css('transform', 'rotateY(180deg)').attr('src', './images/img' + next_img + '.jpg');
            $('#back .right').attr('src', './images/img' + next_img + '.jpg');
            $('#back .left, .left.bottom').attr('src', './images/img' + prev_img + '.jpg');

            setTimeout(() => {
                $('.left, .right').css('transition', 'all 0.5s ease-in-out');
                $('#cover').css('display', 'none');
            }, 100);

            $('#desc').html(arr[active_img - 1]);
            $('#title').html(titles[active_img - 1]);
            $('#img img').attr('src', 'images/img' + active_img + '.jpg');
            $('#img #bgi').css('background-image', 'url(images/img' + active_img + '.jpg)');
        }

        setTimeout(async function () {
            let $t = $('#book').clone();
            await (async () => $t.appendTo('body'))();
            await asnc();
            setTimeout(() => $t.remove(), 10);
        }, 500);
>>>>>>> f4c5f3cdfa3287d68674384426fd7c7e59304f6a
    });

    $(window).on('resize', function () {
        $('#loader, #loader .table, #loader .table-cell').css('height', $(window).height() + 'px');
    });

    $('.ham').on('click', function () {
        $m = $('.menu-cover');
        $m.css('display', 'block').css('opacity');
        $m.css('opacity', 1);
        $('.ham-exit').css('opacity', 1);
        let count = 0;
        return $('.site-nav-item, .spitem').each(function () {
            var $t, fun;
            count++;
            $t = $(this);
            fun = function () {
                $t.css('opacity');
                $t.css('transform');
                $t.css('opacity', '1');
                return $t.css('transform', 'none');
            };
            return setTimeout(fun, count * 150);
        });
    });

    $('.ham-exit').click(function () {
        var count, fun, fun2;
        count = 0;
        $('.site-nav-item, .spitem').each(function () {
            var $t, fun;
            $t = $(this);
            fun = function () {
                $t.css('opacity');
                $t.css('transform');
                $t.css('opacity', '0');
                return $t.css('transform', 'scale(0.5)');
            };
            setTimeout(fun, count * 150);
            return count++;
        });
        fun = function () {
            $m = $('.menu-cover');
            $e = $('.ham-exit');
            $m.css('opacity');
            $m.css('opacity', '0');
            $e.css('opacity');
            return $e.css('opacity', '0');
        };
        fun2 = function () {
            return $('.menu-cover').css('display', 'none');
        };
        setTimeout(fun, (count - 5) * 150);
        return setTimeout(fun2, count * 150);
    });

    $('.details').on('click', function () {
        if ($('.details').index(this) + 1 === active_img) {
            $('#cover2').css('display', 'block');
            $('#cover2').css('opacity');
            $('#cover2').addClass('active');
            $('#dialog').addClass('active');
        } else {
            $('#cover').css('display', 'initial');
            $('.details').eq(active_img - 1).html('');
            active_img = $('.details').index(this) + 1;
            $('.front').attr('src', './images/img' + active_img + '.jpg');
            $('.front').removeClass().addClass('tmp');
            $('.back').removeClass().addClass('front');
            $('.tmp').removeClass().addClass('back');
            $('#desc').html(arr[active_img - 1]);
            $('#title').html(titles[active_img - 1]);
            $('.details').eq(active_img - 1).html(titles[active_img - 1]);
            $('#img #bgi').css('background', 'url(\'./images/img' + active_img + '.jpg\') center');
            $('#img #bgi').css('background-size', 'cover');
            $('#img img').attr('src', './images/img' + active_img + '.jpg');
            prev_img = 5 - (6 - active_img) % 5;
            next_img = active_img % n_img + 1;
            $('#cover').css('display', 'none');
        }
    });

    $('#cover2').on('click', function () {
        $('#cover2').css('opacity');
        $('#cover2, #dialog').removeClass('active');
        setTimeout(function () {
            $('#cover2').css('display', 'none');
        }, 300);
    })

    $('#close').on('click', function () {
        $('#cover2').css('opacity');
        $('#cover2, #dialog').removeClass('active');
        setTimeout(function () {
            $('#cover2').css('display', 'none');
        }, 300);
    });
}

function focuss($t) {
    $('.focus').addClass('active');
    $('.focus').css('left');
    $('.focus').css('left', $t.offset().left + 'px');
    $('.focus').css('top');
    $('.focus').css('top', $t.offset().top + 'px');
    $('.focus').css('height');
    $('.focus').css('height', $t.css('height'));
    $('.focus').css('width');
    $('.focus').css('width', $t.css('width'));
    if ($t.hasClass('left') || $t.hasClass('right')) $('.focus').css('width', parseFloat($t.css('width')) / 2 + 'px');
    if ($t.hasClass('right')) $('.focus').css('left', $t.offset().left + parseFloat($t.css('width')) / 2 + 'px');

    let $i = $('.intro-dialog');
    $i.removeClass('active');
    $('#focus-desc').html($t.data('desc'));
    $i.addClass('active');
}

let int = 0;

let introcount = 0,
    introinit = -1;

$(window).on('load', function () {
    $('.tour-element').each(function (index, element) {
        if ($(this).css('display') !== 'none') {
            introcount = index;
            if (introinit === -1) introinit = index;
        }
    });
    setTimeout(function () {
        $('#loader').animate({
            opacity: 0
        }, 500);
        setTimeout(function () {
            $('#loader').css('display', 'none');

            if (!localStorage.notFirstVisitToGallery) {
                while ($('.tour-element').eq(int).css('display') === 'none') int++;
                focuss($('.tour-element').eq(int));
                localStorage.notFirstVisitToGallery = "1";
                return;
            }
            onwindowload();
        }, 500);
    }, 1000);
});

$('#next').unbind().on('click', function () {
    int++;
    while ($('.tour-element').eq(int).css('display') === 'none') int++;
    console.log(int === introcount);
    if (int === introcount) {
        $('#next').css('display', 'none');
        $('#skip').html('Done');
    } else {
        $('#next').css('display', 'inline');
        $('#skip').html('Skip');
    }

    if (int === introinit) {
        $('#prev').css('display', 'none');
    } else {
        $('#prev').css('display', 'initial');
    }
    focuss($('.tour-element').eq(int));
});

$('#prev').unbind().on('click', function () {
    int--;
    while ($('.tour-element').eq(int).css('display') === 'none') int--;
    console.log(int === introcount);
    if (int === introcount) {
        $('#next').css('display', 'none');
        $('#skip').html('Done');
    } else {
        $('#next').css('display', 'inline');
        $('#skip').html('Skip');
    }

    if (int === introinit) {
        $('#prev').css('display', 'none');
    } else {
        $('#prev').css('display', 'initial');
    }
    focuss($('.tour-element').eq(int));
});

$('#skip').unbind().on('click', function () {
    $('.intro-dialog').removeClass('active');
    $('.focus').css('left', 0).css('top', 0).css('width', '100vw').css('height', '100vh');
    onwindowload();
});