
if (window.matchMedia("(max-width: 768px)").matches) { 
    function clickMenu() {
        if (menuescondido.style.display == 'block') {
            menuescondido.style.display = 'none';
        } else {
            menuescondido.style.display = 'block';
        }
    }

    const menuLinks = document.querySelectorAll('#menuescondido a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuescondido.style.display = 'none';
        });
    });
}

