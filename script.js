
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

// efeito reveal

window.revelar = ScrollReveal({reset:true})

//topo

revelar.reveal('.txt-topo', 
    {
        duration: 2000,
        distance: '90px'
    })

revelar.reveal ('.img-topo', {
    duration: 2000,
    distance: '90px',
    origin: 'top',
})