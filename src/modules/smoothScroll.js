const smoothScrollFunc = () => {
    const linksHead = document.querySelectorAll('.menu-list__link');

    const mainScroll = document.querySelector('.main__scroll');
    const btnScroll = document.querySelector('.main__button');
    const logoScroll = document.querySelector('.header__logo');

    const newArray = [...linksHead, mainScroll, btnScroll, logoScroll];

    newArray.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const ID = event.target.getAttribute('href').substr(1);

            document.getElementById(ID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });
};

export default smoothScrollFunc;
