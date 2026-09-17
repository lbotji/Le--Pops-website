/* ==========================================
   LA POPS JAVASCRIPT
========================================== */


/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* CLOSE MOBILE MENU AFTER CLICK */

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

    });

});


/* ==========================================
   SOCIAL MEDIA LINKS
==========================================

   When you create your Instagram and Facebook
   pages, replace the # symbols below.
*/


const instagramURL = "#";

const facebookURL = "#";


const instagramLinks = [

    document.getElementById("instagramLink"),

    document.getElementById("footerInstagram")

];


const facebookLinks = [

    document.getElementById("facebookLink"),

    document.getElementById("footerFacebook")

];


instagramLinks.forEach((link) => {

    if (link) {

        link.href = instagramURL;

        if (instagramURL !== "#") {

            link.target = "_blank";

        }

    }

});


facebookLinks.forEach((link) => {

    if (link) {

        link.href = facebookURL;

        if (facebookURL !== "#") {

            link.target = "_blank";

        }

    }

});