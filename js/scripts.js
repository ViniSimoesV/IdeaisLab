document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.classList.add('hover');
        });
        item.addEventListener('mouseleave', function () {
            item.classList.remove('hover');
        });
    });
});


function searchSite(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.innerHTML = section.innerHTML.replace(/<mark class="highlight">|<\/mark>/g, ''); // Remove previous highlights
        if (query) {
            const regex = new RegExp(`(${query})`, 'gi');
            section.innerHTML = section.innerHTML.replace(regex, '<mark class="highlight">$1</mark>');
            // Verifica se a seção contém a palavra destacada
            if (section.innerHTML.includes('<mark class="highlight">')) {
                // Obtém o ID da seção atual
                const id = section.getAttribute('id');
                // Encontra o link de âncora correspondente e clica nele para rolar até a seção
                const anchorLink = document.querySelector(`.menu a[href="#${id}"]`);
                if (anchorLink) {
                    anchorLink.click(); // Simula o clique no link de âncora para rolar a página
                }
            }
        }
    });
}


// Login Modal
const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const closeButton = document.querySelector('.close-button');

loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    loginModal.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    loginModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
});


// Simulação de pesquisa
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = searchBar.value.toLowerCase();
        const articles = document.querySelectorAll('.news article');
        articles.forEach(article => {
            const title = article.querySelector('h2').textContent.toLowerCase();
            const content = article.querySelector('p').textContent.toLowerCase();
            if (title.includes(query) || content.includes(query)) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    }
});


// Scroll Animado
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -60
    }, 500);
});