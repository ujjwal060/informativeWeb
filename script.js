document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('header a');
    const currentPath = window.location.pathname;

    links.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath) {
            link.style.backgroundColor = 'black';
            link.style.color = 'white';
            link.style.borderRadius = '8px';
        }
    });
});
