((doc) => {
    const navIconClose = doc.getElementById('nav-icon-close');
    const navIconHamburger = doc.getElementById('nav-icon-hamburger');
    const mbNavContainer = doc.querySelector('.navigation-container');
    const mbNavOverlay = doc.querySelector('.overlay');

    navIconHamburger.addEventListener('click', () => {
        mbNavContainer.style.width = "68.2%";
        // What does this do
        mbNavOverlay.style.width = "100%";
    });

    navIconClose.addEventListener('click', () => {
        mbNavContainer.style.width = "0";
        mbNavOverlay.style.width = "0";
    });
})(document);