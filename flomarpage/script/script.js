const explorebut = document.getElementById('explorebutt');

explorebut.addEventListener('click', () => {
    const produsee = document.getElementById('produse');
    
    if (produsee) {
        produsee.scrollIntoView({ behavior: 'smooth' });
    }
});