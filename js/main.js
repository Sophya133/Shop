const menuButton = document.querySelector('#menu_button');
const navMenu = document.querySelector('.header__navigation');
const menuClose = document.querySelector('.header__navigation_close');
const sectionOverlay = document.querySelector('.section__overlay');

const navCategory = document.querySelector('#filter_category');
const navSubcategory = document.querySelector('#nav_subcategory');

const navBrand = document.querySelector('#filter_brand');
const navBrandList = document.querySelector('.filter__nav-brand');

const navConsist = document.querySelector('#filter_consist');
const navConsistList = document.querySelector('.filter__nav-consist');

const filterButton = document.querySelector('#filter_menu');
const filterIcon = document.querySelector('.filter__menu-icon');
const filterNav = document.querySelector('.filter__nav');

const filterCloseIcon = document.querySelector('#active_icon');
const filterClose = document.querySelector('#filter_close');

const filterVolume = document.querySelector('.filter__item-volume');
const sizeBox = document.querySelector('.filter__volume');

navMenu.style.display = "none";

menuButton.addEventListener("click", function () {
    if (navMenu.style.display == "none") {
        if (sectionOverlay)
            sectionOverlay.style.display = "block";
        navMenu.style.display = "block";
        navMenu.style.zIndex = "1";
    }
    else {
        navMenu.style.display = "none";
        if (sectionOverlay)
            sectionOverlay.style.display = "none";
    }
});

menuClose.addEventListener("click", function () {
    if (sectionOverlay)
        sectionOverlay.style.display = "none";
    navMenu.style.display = "none";
})

if(filterNav) {
    if(navSubcategory)
        navSubcategory.style.display = "block";
    if(navBrandList)
        navBrandList.style.display = "none";
    if(navConsistList)
        navConsistList.style.display = "none";
    if(filterNav)
        filterNav.style.display = "none";
    if(sizeBox)
        sizeBox.style.display = "none";

    navCategory.addEventListener("click", function(evt) {
        if(navSubcategory && navSubcategory.style.display == "none") {
            navBrandList.style.display = "none";
            navConsistList.style.display = "none";
            navSubcategory.style.display = "block";
        }
        else if(navSubcategory && navSubcategory.style.display == "block")
            navSubcategory.style.display = "none";
    });

    navBrand.addEventListener("click",function(evt) {
        if(navBrandList && navBrandList.style.display == "none") {
            navSubcategory.style.display = "none";
            navConsistList.style.display = "none";
            navBrandList.style.display = "block";
        }
        else if(navBrandList && navBrandList.style.display == "block") {
            navBrandList.style.display = "none";
        }
    });

    navConsist.addEventListener("click",function(evt) {
        if(navConsistList && navConsistList.style.display == "none") {
            navSubcategory.style.display = "none";
            navBrandList.style.display = "none";
            navConsistList.style.display = "block";
        }
        else if(navConsistList && navConsistList.style.display == "block") {
            navConsistList.style.display = "none";
        }
    });

    filterButton.addEventListener('click',function(evt) {
        if(filterNav && filterNav.style.display == "none")
            filterNav.style.display = "block";
    });

    filterIcon.addEventListener('click',function(evt) {
        if(filterNav && filterNav.style.display == "none")
            filterNav.style.display = "block";
    });

    filterClose.addEventListener("click",function() {
        filterNav.style.display = "none";
    });

    filterCloseIcon.addEventListener("click",function(evt) {
        filterNav.style.display = "none";
    });

    filterVolume.addEventListener("click",function(evt) {
        if(evt.target.className != "filter__volume-checkbox" && evt.target.className != "filter__volume-item")
        if(sizeBox && sizeBox.style.display == "none")
            sizeBox.style.display = "block";
        else if(sizeBox && sizeBox.style.display == "block")
            sizeBox.style.display = "none";
    });

}