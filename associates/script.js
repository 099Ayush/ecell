var current_section = 1;
var doc_nav_active = 1;

$('section').css('z-index', 1).css('opacity', 0).css('top', $('#doc-nav').css('height')).css('height', $(window).height() - parseFloat($('#doc-nav').height()) + 'px');
$(window).on('resize', function () {
    $('section').css('height', $(window).height() - parseFloat($('#doc-nav').height()) + 'px');
})
$('#s' + current_section).css('z-index', 2).css('opacity', 1);

function mark1(n) {
    $n = $('.doc-nav-item:eq(' + (n - 1) + ')');
    $('#doc-nav-marker1').css('left', $n.offset().left - 20).css('width', parseFloat($n.css('width'))).css('opacity', 1);
}

function mark2(n) {
    $n = $('.doc-nav-item:eq(' + (n - 1) + ')');
    $('#doc-nav-marker2').css('left', $n.offset().left - 20).css('width', parseFloat($n.css('width'))).css('opacity', 1);
}

$(document).ready(function () {
    $('#loader, #loader .table, #loader .table-cell').css('height', $(window).height() + 'px');
    $('#cover').css('display', 'none').css('background', 'transparent');

    $(window).on('resize', function () {
        $('#loader, #loader .table, #loader .table-cell').css('height', $(window).height() + 'px');
    });
});

function onwindowload() {
    setTimeout(() => {
        $('.focus, .focus-cover').css('display', 'none');
    }, 300);
    $('section').css('overflow', 'auto');
    setTimeout(() => {
        let count = 0;
        $('#s1 .card').each(function () {
            let $t = $(this);
            setTimeout(() => {
                $t.css('transform', 'none').css('opacity', 1);
            }, count * 50);
            count++;
        });
    }, 100);

    $(window).on('resize', function () {
        $('#loader, #loader .table, #loader .table-cell').css('height', $(window).height() + 'px');
        mark1(doc_nav_active);
        mark2(doc_nav_active);
    });

    $('.doc-nav-item').hover(function () {
        mark1($(this).index() - 1);
    }).off('click').on('click', function () {
        if (current_section === $(this).index() - 1) {
            return;
        }
        $('.doc-nav-item').removeClass('active');
        $(this).addClass('active');
        current_section = doc_nav_active = $(this).index() - 1;
        mark1(doc_nav_active);
        mark2(doc_nav_active);
        $('#cover').css('display', 'block');

        $('section').animate({
            top: '-100vh',
            opacity: 0,
        }, 300).removeClass('active');

        let $s = $('#s' + doc_nav_active);

        $s.animate({
            scrollTop: 0
        }, 0);

        setTimeout(function () {
            $d = $('#doc-nav');
            $('section:not(#s' + doc_nav_active + ')').css('top', $d.css('height')).css('z-index', 1);
            $s.css('top', '100vh').addClass('active');
            $s.animate({
                top: $d.css('height'),
                opacity: 1,
            }, 300).css('z-index', 2);
            $('#cover').css('display', 'none');
        }, 400);

        if (current_section === 2) {
            setTimeout(() => {
                let count = 0;
                $('#s2 .card').each(function () {
                    let $t = $(this);
                    setTimeout(() => {
                        $t.css('transform', 'none').css('opacity', 1);
                    }, count * 50);
                    count++;
                });
            }, 600);
        }
    });

    $('.nav').hover(function () {
    }, function () {
        mark1(doc_nav_active);
    });

    let card_timeout;

    $('.card').hover(function () {
        let $t1 = $(this).find('.cbg1');
        let $t2 = $(this).find('.cbg2');
        let $t = $(this).find('.card-title');
        $t1.addClass('active');
        setTimeout(() => $t2.addClass('active'), 100);
        setTimeout(() => $t.addClass('active'), 200);
        card_timeout = setTimeout(function () {
            $t.find('.name, .more-info-btn').addClass('active');
        }, 300);
    }, function () {
        let $t1 = $(this).find('.cbg1');
        let $t2 = $(this).find('.cbg2');
        let $t = $(this).find('.card-title');
        $t.find('.name, .more-info-btn').removeClass('active');
        clearTimeout(card_timeout);
        card_timeout = setTimeout(function () {
            $t.removeClass('active');
            setTimeout(() => $t2.removeClass('active'), 100);
            setTimeout(() => $t1.removeClass('active'), 200);
        }, 250);
    });

    $('.more-info-btn').on('click', function () {
        let $t = $(this).parent().parent();
        $t.find('.logo').clone().appendTo('#clone').addClass('popup-logo');
        $('#name').html($t.find('.name').html());
        $('#info').html($t.find('.more-info').html());
        let $p1 = $('#popup');
        let $p = $('#popup-cover');
        $p.css('display', 'block');
        $p.css('opacity');
        $p.addClass('active');
        setTimeout(() => $p1.addClass('active'), 250);

    });

    $('#close').on('click', function () {
        $('#popup').removeClass('active');
        setTimeout(() => {
            let $p = $('#popup-cover');
            $p.removeClass('active');
            setTimeout(() => {
                $p.css('display', 'none');
                $('#clone').html('');
            }, 500);
        }, 100);
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

    var menu_hidden = 1, len = $('.doc-nav-menu-item').length;

    $('.nav-p').unbind().on('click', function () {
        if (menu_hidden) {
            show_menu();
        } else {
            hide_menu();
        }
    });

    function show_menu() {
        $('.nav-p').addClass('active');
        $('#cover').css('display', 'block');
        var count2 = 0;
        $('#doc-nav-menu').css('display', 'block');
        $('.doc-nav-menu-item').each(function () {
            var $t1, fun1;
            $t1 = $(this);
            fun = function () {
                $t1.css('transform');
                return $t1.css('transform', 'none');
            };
            setTimeout(fun, count2 * 150);
            return count2++;
        });
        setTimeout(function () {
            $('#cover').css('display', 'none');
        }, len * 150 + 150);
        menu_hidden = 0;
    }

    function hide_menu() {
        $('.nav-p').removeClass('active');
        $('#cover').css('display', 'block');
        var count2 = 0;
        $('.doc-nav-menu-item').each(function () {
            var $t1, fun1;
            $t1 = $(this);
            fun = function () {
                $t1.css('transform');
                return $t1.css('transform', 'translateX(-10em)');
            };
            setTimeout(fun, (len - count2) * 50);
            return count2++;
        });
        setTimeout(function () {
            $('#cover').css('display', 'none');
            $('#doc-nav-menu').css('display', 'none');
        }, len * 50 + 500);
        menu_hidden = 1;
    }

    $('.doc-nav-menu-item').on('click', function () {
        hide_menu();
        $('.doc-nav-item').eq($(this).index()).trigger('click');
        $('.nav-item-active').css('transform', 'translateY(-4em)');
        let $t = $(this);
        setTimeout(function () {
            $('.nav-item-active').html($t.html()).css('transform', 'none');
        }, 400);
    });
}

function focuss($t) {
    $('.focus').addClass('active');
    $('.focus').css('left');
    $('.focus').css('left', $t.offset().left);
    $('.focus').css('top');
    $('.focus').css('top', $t.offset().top);
    $('.focus').css('height');
    $('.focus').css('height', $t.css('height'));
    $('.focus').css('width');
    $('.focus').css('width', $t.css('width'));

    if ($t.hasClass('card')) {
        $('.focus').css('left');
        $('.focus').css('left', $t.offset().left - parseFloat($t.css('width')) / 2);
        $('.focus').css('top');
        $('.focus').css('top', $t.offset().top - parseFloat($t.css('height')) / 2);
        setTimeout(() => {
            $t.css('transform', 'none').css('opacity', 1);
        }, 300);
    }

    let $i = $('.intro-dialog');
    $i.removeClass('active');
    $('#desc').html($t.data('desc'));
    $i.addClass('active');
}

let int = 0;

let introcount = 0, introinit = -1;
$('.tour-element').each(function (index, element) {
    if ($(this).css('display') !== 'none') {
        introcount = index;
        if (introinit === -1) introinit = index;
    }
});

$(window).on('load', function () {

    mark1(1);
    mark2(1);

    $('section .table, section .table-cell').css('height', $(window).height() - parseFloat($('#doc-nav').css('height')) + 'px');
    setTimeout(function () {
        $('#loader').animate({
            opacity: 0
        }, 500);
        setTimeout(function () {
            $('#loader').css('display', 'none');

            if (!localStorage.notFirstVisitToAssociates) {
                while ($('.tour-element').eq(int).css('display') === 'none') int++;
                focuss($('.tour-element').eq(int));
                localStorage.notFirstVisitToAssociates = "1";
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