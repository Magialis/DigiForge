const navigationButton = document.getElementById('navigation-button');
const navigationMenu = document.getElementById('navigation-menu');

navigationButton.addEventListener('click', function(){
    if(navigationMenu.style.display == 'block'){
        navigationMenu.style.display = 'none'
    } else {
        navigationMenu.style.display = 'block'
    };
});
