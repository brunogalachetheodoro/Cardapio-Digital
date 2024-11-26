
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

revelar.reveal ('.titulos-efeito', {
    duration: 2000,
    origin: 'left',
    distance: '90px'
})

revelar.reveal ('.estilo-img-wpp', {
    duration: 2000,
    distance: '90px',
    origin: 'left',
})

revelar.reveal ('.padrao-bege', {
    duration: 2000,
    distance: '90px',
    origin: 'bottom',
})

revelar.reveal ('.padrao-vinho', {
    duration: 2000,
    distance: '90px',
    origin: 'bottom',
})

revelar.reveal ('.end1', {
    duration: 2000,
    delay: 500,
    distance: '90px',
    origin: 'left',
})

revelar.reveal ('.end2', {
    duration: 2000,
    delay: 1000,
    distance: '90px',
    origin: 'left',
})

revelar.reveal ('.end3', {
    duration: 2000,
    delay: 1500,
    distance: '90px',
    origin: 'left',
})

revelar.reveal ('.endereco-img', {
    duration: 3000,
    distance: '40px',
    origin: 'bottom',
})

//Efeito clique cardápio

//Rodizio

function cliqueIndividual() {
    if(document.getElementById('individual').style.height === '13rem') {
        document.getElementById('individual').style.height = '20rem'
        document.getElementById('hidden-individual').innerHTML='1 Entrada Fria + 1 Entrada Quente <br> + Prato Principal Frio + <br> Prato Principal Quente <br> + Temaki + Bebida + Sobremesa <br> <span class="estilo-linha-rodizio">Consulte Opções no Whatsapp <br> R$149,90</span>'
    } else {
        document.getElementById('individual').style.height = '13rem'
        document.getElementById('hidden-individual').innerHTML = ''
    }
}

function cliqueCasal() {
    if(document.getElementById('casal').style.height === '13rem') {
        document.getElementById('casal').style.height = '20rem'
        document.getElementById('hidden-casal').innerHTML='2 Entradas Frias + 2 Entradas Quentes <br> + 2 Pratos Principais Frios <br> + 2 Pratos Principais Quentes <br> + 2 Temakis + Bebida + Sobremesa <br> <span class="estilo-linha-rodizio">Consulte Opções no Whatsapp <br> R$229,90</span>'
    } else {
        document.getElementById('casal').style.height ='13rem'
        document.getElementById('hidden-casal').innerHTML=''
    }
}

function cliqueFamilia() {
    if(document.getElementById('familia').style.height==='13rem') {
        document.getElementById('familia').style.height='20rem'
        document.getElementById('hidden-familia').innerHTML='4 Entradas Frias + 4 Entradas Quentes <br> + 4 Pratos Principais Frios <br> + 4 Pratos Principais Quentes <br> + 4 Temakis + Bebida + Sobremesa <br> <span class="estilo-linha-rodizio">Consulte Opções no Whatsapp <br> R$299,90</span>'
    } else {
        document.getElementById('familia').style.height='13rem'
        document.getElementById('hidden-familia').innerHTML=''
    }
}

//Combinado

function cliqueAllMight() {
    if(document.getElementById('all-might').style.height==='13rem') {
        document.getElementById('all-might').style.height='20rem'
    } else {
        document.getElementById('all-might').style.height='13rem'
    }
}