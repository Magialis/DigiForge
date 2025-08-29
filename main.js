const navigationButton = document.getElementById('navigation-button');
const navigationMenu = document.getElementById('navigation-menu');
const hamburgerLines = document.getElementById('hamburger-lines');
const closeIcon = document.getElementById('close-icon');

navigationButton.addEventListener('click', function (e) {
    e.preventDefault();

    const isMenuOpen = !hamburgerLines.classList.contains('header__content__button__line--is-active');

    if (isMenuOpen) {
        hamburgerLines.classList.add('header__content__button__line--is-active');
        closeIcon.style.display = 'none';
        navigationMenu.style.display = 'none';
    } else {
        hamburgerLines.classList.remove('header__content__button__line--is-active');
        closeIcon.style.display = 'block';
        navigationMenu.style.display = 'block';
    }
});

closeIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    hamburgerLines.classList.add('header__content__button__line--is-active');
    closeIcon.style.display = 'none';
    navigationMenu.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (button) {
            const targetTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);

            hideTabs();
            tab.classList.add('featured__content__item__image--is-active');

            removeActiveTitle();
            const tabItem = button.target.closest('.featured__content__tabs__item');
            const title = tabItem.querySelector('h3');
            title.classList.add('featured__content__tabs__item__title--is-active');
        });
    }

    function removeActiveTitle() {
        const titles = document.querySelectorAll('[id]');

        for (let i = 0; i < titles.length; i++) {
            titles[i].classList.remove('featured__content__tabs__item__title--is-active');
        }
    }

    function hideTabs() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('featured__content__item__image--is-active');
        }
    }

    const scrollBtn = document.getElementById('btn-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > window.innerHeight) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const message = document.getElementById('newsletter-message');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (email === '' || !email.includes('@')) {
                message.textContent = 'Please enter a valid email address.';
                message.style.color = 'red';
                return;
            }

            message.textContent = 'You have successfully subscribed to our newsletter!';
            message.style.color = 'green';
            form.reset();
        });
    }
});
