/*global document, window, console, Modernizr*/
var App = App || {};

App.MobileMenu = (function (window, $, Modernizr) {
    "use strict";
    return {
        init: function () {
            this.mobileMenu();
        },
        mobileMenu: function () {
            var $topMenu = $('#top-links__cms'),
                $mobileMenuBtn = $('#nav-mobile-button'),
                $mobileMenu = $('#header'),
                $mobileSubmenuLink = $mobileMenu.find('a.nav-dropdown'),
                $mobileSubmenu = $mobileMenu.find('.nav-block'),
                $mobileSubmenuLevel3Link = $mobileSubmenu.find('h2'),
                $mobileSubmenuLevel3 = $mobileSubmenu.find('ul');

            // Move toplinks to/from mobile menu on screen resize
            enquire.register("screen and (max-width:768px)", {
                match: function() {
                    $topMenu.appendTo('#nav');
                },
                unmatch: function() {
                    $topMenu.prependTo('#top-links__wrapper');
                }
            }, false);

            // Main Menu

            if (!Modernizr.csstransitions) {

                // CSS3 Menu using Transitions based on current class

                // Open/close mobile menu
                $mobileMenuBtn.on('click', function() {
                    $mobileMenu.toggleClass('nav-mobile-open');
                });

                // Open/close mobile submenus
                $mobileSubmenuLink.on('click', function(e) {
                    e.preventDefault();
                    $(this).toggleClass('nav-mobile-submenu-parent').siblings($mobileSubmenu).toggleClass('nav-mobile-submenu-open');
                });

                // Open/close mobile submenus level 3
                $mobileSubmenuLevel3Link.on('click', function(e) {
                    e.preventDefault();
                    $(this).toggleClass('nav-mobile-submenu-level3-parent').siblings($mobileSubmenuLevel3).toggleClass('nav-mobile-submenu-level3-open');
                });

            } else {

                // JS Fallback

                // Open/close mobile menu
                $mobileMenuBtn.on('click', function() {
                    $mobileMenu.toggleClass('nav-mobile-open');

                    // Animate opening of full menu. Max-height 2000px, transition: all 1s ease-in-out
                    if ($mobileMenu.hasClass('nav-mobile-open')) {
                        $mobileMenu.stop().animate({
                            'max-height': '2000'
                        }, '2500');
                    } else {
                        $mobileMenu.stop().animate({
                            'max-height': '0'
                        }, '2500');
                    }
                });

                // Open/close mobile submenus
                $mobileSubmenuLink.on('click', function(e) {
                    e.preventDefault();
                    $(this).toggleClass('nav-mobile-submenu-parent').siblings($mobileSubmenu).toggleClass('nav-mobile-submenu-open');

                    // Animate opening of submenu. Max-height 2000px, transition: all 1s ease-in-out
                    if ($(this).hasClass('nav-mobile-submenu-parent').siblings($mobileSubmenu).hasClass('nav-mobile-submenu-open')) {
                        $mobileSubmenu.stop().animate({
                            'max-height': '2000'
                        }, '2500');
                    } else {
                        $mobileSubmenu.stop().animate({
                            'max-height': '0'
                        }, '2500');
                    }
                });

                // Open/close mobile submenus level 3
                $mobileSubmenuLevel3Link.on('click', function(e) {
                    e.preventDefault();
                    $(this).toggleClass('nav-mobile-submenu-level3-parent').siblings($mobileSubmenuLevel3).toggleClass('nav-mobile-submenu-level3-open');

                    // Animate opening of submenu. Max-height 2000px, transition: all 1s ease-in-out
                    if ($(this).hasClass('nav-mobile-submenu-level3-parent').siblings($mobileSubmenuLevel3).hasClass('nav-mobile-submenu-level3-open')) {
                        $mobileSubmenuLevel3.stop().animate({
                            'max-height': '2000'
                        }, '2500');
                    } else {
                        $mobileSubmenuLevel3.stop().animate({
                            'max-height': '0'
                        }, '2500');
                    }
                });
            }
        }
    };
}(window, window.jQuery, Modernizr));

