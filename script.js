
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
        document.getElementById('hidden-all-might').innerHTML='Tudo Posso.</span> <br> Com esse combinado você pode tudo. Diversas opções para vários tipos de gosto. <br> <span class="estilo-linha-rodizio">Consulte Opções no Whatsapp <br> R$129,90</span>'
    } else {
        document.getElementById('all-might').style.height='13rem'
        document.getElementById('hidden-all-might').innerHTML=''
    }
}

function cliqueMidoriya(){
    if(document.getElementById('midoriya').style.height==='13rem'){
        document.getElementById('midoriya').style.height='20rem'
        document.getElementById('hidden-midoriya').innerHTML='Nosso Protagonista.</span> <br> Impossível você não gostar desse combinado frito com Temaki. <br> <span class="estilo-linha-rodizio">Consulte Opções no Whatsapp <br> R$139,90</span>'
    } else {
        document.getElementById('midoriya').style.height='13rem'
        document.getElementById('hidden-midoriya').innerHTML=''
    }
}

function cliqueTodoroki(){
    if(document.getElementById('todoroki').style.height==='13rem'){
        document.getElementById('todoroki').style.height='20rem'
        document.getElementById('hidden-todoroki').innerHTML='Meio Quente. Meio Frio.</span> <br> Opções de crus e fritos no mesmo combinado. Para você que não deixa passar nada. <br> <span class="estilo-linha-rodizio">Consulte Opções no Whatsapp <br> R$109,90</span>'
    } else {
        document.getElementById('todoroki').style.height='13rem'
        document.getElementById('hidden-todoroki').innerHTML=''
    }
}

function cliqueBakugo(){
    if(document.getElementById('bakugo').style.height==='13rem'){
        document.getElementById('bakugo').style.height='20rem'
        document.getElementById('hidden-bakugo').innerHTML='<span class="estilo-linha-combinado">Uma Explosão de Sabor em Cada Mordida.</span> <br> Os melhores hot holls em um só combinado. <br> <span class="estilo-linha-rodizio">Consulte Opções no Whatsapp <br> R$139,90</span>'
    } else {
        document.getElementById('bakugo').style.height='13rem'
        document.getElementById('hidden-bakugo').innerHTML=''
    }
}

function cliqueUraraka(){
    if(document.getElementById('uraraka').style.height==='13rem'){
        document.getElementById('uraraka').style.height='20rem'
        document.getElementById('hidden-uraraka').innerHTML='<span class="estilo-linha-combinado">Sinta-se Leve Com Esse Sabor.</span> <br> As melhores opções para adoçar sua noite. <br> <span class="estilo-linha-rodizio">Consulte Opções no Whatsapp <br> R$129,90</span>'
    } else {
        document.getElementById('uraraka').style.height='13rem'
        document.getElementById('hidden-uraraka').innerHTML=''
    }
}

function cliqueMirio(){
    if(document.getElementById('mirio').style.height==='13rem'){
        document.getElementById('mirio').style.height='20rem'
        document.getElementById('hidden-mirio').innerHTML='<span class="estilo-linha-combinado">Um Dos Nossos Big Three.</span> <br> Desfrute dessa opção leve de crus. <br> <span class="estilo-linha-rodizio">Consulte Opções no Whatsapp <br> R$129,90</span>'
    } else {
        document.getElementById('mirio').style.height='13rem'
        document.getElementById('hidden-mirio').innerHTML=''
    }
}

//Poke

function cliqueMisto(){
    if(document.getElementById('misto').style.height==='13rem'){
        document.getElementById('misto').style.height='20rem'
        document.getElementById('hidden-misto').innerHTML='Salmão cru, Salmão grelhado, <br> Skin, Pepino, Couve crispy, <br> Cream Cheese, Molho tarê. <br> <span class="estilo-linha-rodizio"> R$49,90</span>'
    } else {
        document.getElementById('misto').style.height='13rem'
        document.getElementById('hidden-misto').innerHTML=''
    }
}

function cliqueHavaiano(){
    if(document.getElementById('havaiano').style.height==='13rem'){
        document.getElementById('havaiano').style.height='20rem'
        document.getElementById('hidden-havaiano').innerHTML='Salmão cru, Manga, Rabanete, <br> Cenoura, Pepino, <br> Cream Cheese, Molho tarê. <br> <span class="estilo-linha-rodizio"> R$29,90</span>'
    } else {
        document.getElementById('havaiano').style.height='13rem'
        document.getElementById('hidden-havaiano').innerHTML=''
    }
}

function cliqueEmpanado(){
    if(document.getElementById('empanado').style.height==='13rem'){
        document.getElementById('empanado').style.height='20rem'
        document.getElementById('hidden-empanado').innerHTML='Salmão empanado, Cebola roxa <br> Repolho, Couve crispy, <br> Cream Cheese, Molho tarê. <br> <span class="estilo-linha-rodizio"> R$39,90</span>'
    } else {
        document.getElementById('empanado').style.height='13rem'
        document.getElementById('hidden-empanado').innerHTML=''
    }
}

//Temaki

function cliqueSkin(){
    if(document.getElementById('skin').style.height==='13rem'){
        document.getElementById('skin').style.height='20rem'
        document.getElementById('hidden-skin').innerHTML='Pele de salmão grelhada, <br>Cream Cheese, Molho tarê<br> Cebolinha e Gergelim. <br> <span class="estilo-linha-rodizio"> R$25,90</span>'
    } else {
        document.getElementById('skin').style.height='13rem'
        document.getElementById('hidden-skin').innerHTML=''
    }
}

function cliquePhiladelphia(){
    if(document.getElementById('philadelphia').style.height==='13rem'){
        document.getElementById('philadelphia').style.height='20rem'
        document.getElementById('hidden-philadelphia').innerHTML='Salmão cru, <br>Cream Cheese, Cebolinha <br> e Gergelim <br> <span class="estilo-linha-rodizio"> R$29,90</span>'
    } else {
        document.getElementById('philadelphia').style.height='13rem'
        document.getElementById('hidden-philadelphia').innerHTML=''
    }
}

function cliqueHot(){
    if(document.getElementById('hot').style.height==='13rem'){
        document.getElementById('hot').style.height='20rem'
        document.getElementById('hidden-hot').innerHTML='Salmão grelhado, Farinha panko <br>Cream Cheese, Molho tarê,<br> Cebolinha e Gergelim <br> <span class="estilo-linha-rodizio"> R$35,90</span>'
    } else {
        document.getElementById('hot').style.height='13rem'
        document.getElementById('hidden-hot').innerHTML=''
    }
}

//Entradas

function cliqueHot(){
    if(document.getElementById('hot').style.height==='13rem'){
        document.getElementById('hot').style.height='20rem'
        document.getElementById('hidden-hot').innerHTML='Salmão grelhado, Farinha panko <br>Cream Cheese, Molho tarê,<br> Cebolinha e Gergelim <br> <span class="estilo-linha-rodizio"> R$35,90</span>'
    } else {
        document.getElementById('hot').style.height='13rem'
        document.getElementById('hidden-hot').innerHTML=''
    }
}

function cliqueHot(){
    if(document.getElementById('hot').style.height==='13rem'){
        document.getElementById('hot').style.height='20rem'
        document.getElementById('hidden-hot').innerHTML='Salmão grelhado, Farinha panko <br>Cream Cheese, Molho tarê,<br> Cebolinha e Gergelim <br> <span class="estilo-linha-rodizio"> R$35,90</span>'
    } else {
        document.getElementById('hot').style.height='13rem'
        document.getElementById('hidden-hot').innerHTML=''
    }
}

function cliqueHot(){
    if(document.getElementById('hot').style.height==='13rem'){
        document.getElementById('hot').style.height='20rem'
        document.getElementById('hidden-hot').innerHTML='Salmão grelhado, Farinha panko <br>Cream Cheese, Molho tarê,<br> Cebolinha e Gergelim <br> <span class="estilo-linha-rodizio"> R$35,90</span>'
    } else {
        document.getElementById('hot').style.height='13rem'
        document.getElementById('hidden-hot').innerHTML=''
    }
}