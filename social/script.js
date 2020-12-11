AOS.init({
    once: true
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 50) {
        $('header').addClass('onscroll');
    } else {
        $('header').removeClass('onscroll');
    }
});

$('#hero-n-counter').css('min-height', `calc(100vh - ${$('header').css('height')})`);

$('.card-details').hover(function () {
    const index = $('.card-details').index($(this));
    $('.card-image').eq(index).css('filter', 'blur(10px)');
    $(this).width(parseFloat($('.card-image').width()) + 20 + 'px');
    $(this).addClass('show');
}, function () {
    const index = $('.card-details').index($(this));
    $('.card-image').eq(index).css('filter', 'blur(0)');
    $(this).removeClass('show');
});

if ($(window).width() <= 1000) {
    let navActive = false;
    let working = false;
    $('#nav-button').on('click', function() {
        if (working) return;
        working = true;
        if (!navActive) {
            $('nav').addClass('show');
            $('nav').css('height', $('nav li').length * parseFloat($('nav li').css('height')) + 30 + 'px');
            $(this).addClass('active');
            navActive = true;
        } else {
            $('nav').removeClass('show');
            $('nav').css('height', 0);
            $(this).removeClass('active');
            navActive = false;
        }

        setTimeout(() => {working = false}, 500);
    });
}

const $root = $('html, body'), $h = $('header li');

$h.click(function () {
    $h.removeClass('active');
    $(this).addClass('active');
    $root.animate({
        scrollTop: $( $(this).find('a').attr('href') ).offset().top
    }, 500);

    return false;
});

const anchors = $('a').filter('#home, #why, #launch, #speaker, #marathon, #contact');
// console.log(anchors);
const s = anchors.map(it => anchors.eq(it).offset().top - 150);
s.push(100000000);
console.log(s);

const $n = $('nav li');

function isScrolledIntoView(elem)
{
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

let countDone = false;
$(window).on('scroll', function() {
    const winScroll = $(window).scrollTop();
    let i = 0;
    while (winScroll >= s[i + 1]) i++;

    $n.removeClass('active');
    $n.eq(i).addClass('active');

    if (countDone) return;
    if (isScrolledIntoView($('#counter1'))) {
        console.log('inView');
        countDoneFunc();
    }
});

if (isScrolledIntoView($('#counter1'))) {
    countDoneFunc();
}

function countDoneFunc() {
    countDone = true;
    $('.counter').each(function() {
        let i = 0;
        const p = parseInt($(this).data('max'));
        const $t = $(this).find('.count-num');
        const time = 1;
        const interval = setInterval(function() {
            $t.html(parseInt(i));
            i += p / time /1000;
            if (i > p) {
                $t.html(p);
                clearInterval(interval);
            }
        }, 1);
    });
}