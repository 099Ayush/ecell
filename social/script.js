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
    const $c = $('.card-image');
    $c.eq(index).css('filter', 'blur(10px)');
    $(this).width(parseFloat($c.css('width')) + 20 + 'px');
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
        const $n = $('nav'), $l = $('nav li');
        if (!navActive) {
            $n.addClass('show');
            $n.css('height', $l.length * parseFloat($l.css('height')) + 30 + 'px');
            $(this).addClass('active');
            navActive = true;
        } else {
            $n.removeClass('show');
            $n.css('height', 0);
            $(this).removeClass('active');
            navActive = false;
        }

        setTimeout(() => {working = false}, 500);
    });
}

const $root = $('html, body'), $h = $('header li');

$h.on('click', function () {
    $root.animate({
        scrollTop: $( $(this).find('a').attr('href') ).offset().top
    }, 500);

    return false;
});

const anchors = $('a').filter('#home, #mission, #challenge, #participate, #speaker, #contact');
// console.log(anchors);
const s = anchors.map(it => anchors.eq(it).offset().top - 150);
s.push(100000000);

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

    (function() {
        if (countDone) return;
        if (isScrolledIntoView($('#counter1'))) {
            countDoneFunc();
        }
    })();

   $('.hl').each(function() {
       const $t = $(this);
       if ($t.data('done') === '1' || !isScrolledIntoView($(this))) return;
       const $1 = $t.find('.hl1'), $2 = $t.find('.hl2');

       setTimeout(function() {
           const interval = setInterval(function() {
               const h = $1.html();
               if (h === '') return;
               const c = h[0];
               $1.html(h.slice(1));
               $2.html($2.html() + c);

               if ($1.html() === '') clearInterval(interval);
           }, 20);
           $t.data('done', '1');
       }, 1000);
   });
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

$('.hl').each(function() {
   const $t = $(this);
   $t.html('<span class="hl2"></span><span class="hl1">' + $t.html() + '</span>');
});

