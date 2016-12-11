/*global $, jQuery, alert */
var get_projects = require('./project_separate.js').get_projects;

function toggleOverlay() {
    "use strict";
	var overlay = document.getElementById('overlay');
	var specialBox = document.getElementById('specialBox');
	overlay.style.opacity = .8;
	if(overlay.style.display == "flex"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
	} else {
		overlay.style.display = "flex";
		specialBox.style.display = "flex";
	}
}

var HT = {
    isTouch: function () {
        "use strict";
        return 'ontouchstart' in document.documentElement;
    },
    ready: function () {
        "use strict";
        HT.fajax();
        HT.filters();
        HT.sidebar();
        HT.newsletter();
        if ($('.intro').length) {
            if ($(window).width() && !HT.isTouch()) {//HANDLE FULL BLEED VIDEO
                HT.intro.setup();
            } else {
                $('.intro').remove();
                $('header').removeClass('introHeader');
            }
        }
        if ($("body.home").length) {
            return undefined;
        }
        if ($("body.project").length) {
            return undefined;
        }
    },
    intro: {
        scrollPoint: 0,
        on: false,
        setup: function () {
            "use strict";
            $('.intro').show();
            $(window).scrollTop(0);
            $('footer').addClass('introStatic');
            $('body').css('padding-top', $(window).height() + 'px');
            $('.page.container').addClass('noPad');
            HT.intro.scrollPoint = $(window).height();
            HT.intro.on = true;
            $('.intro-logo').css({'top': (HT.intro.scrollPoint / 2 - 21)});
            $('header.introHeader .intro-down').click(function () {
                $('html, body').animate({scrollTop: HT.intro.scrollPoint - 65}, 1000);
            });
            $('.introVideo').css({'min-height': $(window).height()});
            $('.intro-logo img').click(function () {
                $('header.introHeader .intro-down').trigger('click');
            });
        },
        close : function () {
            "use strict";
            HT.intro.on = false;
            $('.intro').remove();
            $('.page.container').removeClass('noPad');
            $('body').css({'padding-top': 0});
            $('header').removeClass('introHeader');
            $('footer').removeClass('introStatic');
            $(window).scrollTop(0);
            var num = 0;
            setTimeout(function () {
                $('.filters').toggleClass('open');
            }, num);
        },
        parallax: function () {
            "use strict";
            if ($(window).scrollTop() < HT.intro.scrollPoint) {
                $('.introVideo').css({'top': ($(window).scrollTop() / -3)});
            }
        },
        logoScroll: function () {
            "use strict";
            var top = (HT.intro.scrollPoint / 2 - 21);
            $('.intro-logo').css({'top': (top - $(window).scrollTop())});
        },
        scroll: function () {
            "use strict";
            HT.intro.parallax();
            HT.intro.logoScroll();
            if ($(window).scrollTop() < HT.intro.scrollPoint) {
                $('.intro').css({'height':  HT.intro.scrollPoint - $(window).scrollTop()});
            }
        },
        resize: function () {
            "use strict";
            if ($(window).scrollTop() === 0) {
                $('.intro-logo').css({'top': ($(window).height() / 2 - 21)});
            }
        }
    },

    scroll: function () {
        "use strict";
        if ($("body.journal") && $('.posts-loader').length) {
            HT.checkPosts();
        }
        if (HT.intro.on) {
            HT.intro.scroll();
            if ($(window).scrollTop() >= HT.intro.scrollPoint - 65) {
                HT.intro.close();
            }
        }
    },
    checkPosts: function () {
        "use strict";
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $('.posts-loader').offset().top,
            elemBottom = elemTop + $('.posts-loader').height();

        if ((elemBottom <= docViewBottom) && (elemTop - 100 >= docViewTop) && $('.posts-loader').hasClass('inactive')) {
            $('.posts-loader').addClass('active').removeClass('inactive');
            HT.loadPosts();
        }
    },
    scrollbarWidth: function () {
        "use strict";
        var parent, child, width;
        
        if (width === undefined) {
            parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
            child = parent.children();
            width = child.innerWidth() - child.height(99).innerWidth();
            parent.remove();
        }
        return width;
    },
    loadPosts: function () {
        "use strict";
        var postContainer = $('.posts'),
            page = parseInt(postContainer.data('p'), 10) + 1,
            dataString = 'p=' + page + '&',
            cat = postContainer.data('cat');
        if (postContainer.data('cat')) {
            dataString += 'cat=' + cat;
        }

        $.ajax({
            url: '/assets/includes/posts.php',
            data: dataString,
            dataType: 'html',
            beforeSend:  function () {
                $('.posts-loader').addClass('loading');
            },
            success: function (response) {
                if (response.indexOf("post") >= 0) {
                    postContainer.append(response);
                    postContainer.data('p', page);
                    $('.posts-loader').removeClass('loading').removeClass('active').addClass('inactive');
                } else {
                    $('.posts-loader').remove();
                }
            }

        });
    },
    fajax: function () {
        "use strict";
        $('body').hide();

        $(window).load(function () {
            setTimeout(function () {
                $('html').removeClass('loaded');
                $('body').show();
            }, 550);
        });
        
        $("a.fade, .projects a, .pager a").click(function (event) {
            event.preventDefault();
            var num = 0,
                link = $(this);
            if ($('header').hasClass('introHeader') && link.hasClass('fade')) {
                $('header.introHeader .intro-down').trigger('click');
                num = 1300;
            }
            setTimeout(function () {
                var linkLocation = link.attr('href');
                
                function redirectPage() {
                    window.location = linkLocation;
                }
                $('body').fadeOut(400, redirectPage);
            }, num);
        });
         

    },
    filters: function () {
        "use strict";
        $('.filters #projects').click(function () {
            var num = 0;
            $('#page-container').html = project_separate.get_projects();

        });
    },
    sidebar: function () {
        "use strict";
        var sidebar = $('.sidebar');
        $('header .about-me').click(function () {
            if (!$('header').hasClass('introHeader')) {
                if (parseInt($('footer').css('padding-right'), 10) > 0) {
                    $('footer, header, body, .filters.open').css('padding-right', 0);
                    $('.overlay, header, footer').unbind('touchmove', function (e) {
                        e.preventDefault();
                    });
                } else {
                    $('footer, header, body, .filters.open').css('padding-right', HT.scrollbarWidth);
                    $('.overlay, header, footer').bind('touchmove', function (e) {
                        e.preventDefault();
                    });
                }
                sidebar.toggleClass('active');
                $('html').toggleClass('sidebar-open');
            }
        });
    },
    newsletter: function () {
        "use strict";
        $('#newsForm').submit(function (e) {
            e.preventDefault();
            var form = $(this);
            $.ajax({
                url: '/assets/includes/newsletter.php',
                data: form.serialize(),
                beforeSend:  function () {
                },
                success: function (response) {
                    var resp = $.parseJSON(response);
                    form.find('input[type=text]').val(resp.msg);
                    if (resp.msg !== 'Thanks!') {
                        form.find('input[type=text]').addClass('err');
                    }
                }
            });
        });

    }
};

$(document).ready(function () {
    "use strict";
    HT.ready();
});

$(document).scroll(function () {
    "use strict";
    HT.scroll();
});
$(window).resize(function () {
    "use strict";
    HT.intro.resize();
});