// certificates.js

const certificates = [
    {
        id: 1,
        title: "Web Development",
        image: "/docs/Certificado de Desarrollo Web.svg"
    },
    {
        id: 2,
        title: "Office",
        image: "/docs/operador de office plus.jpg"
    },
    {
        id: 3,
        title: "PC Repair",
        image: "/docs/rpc.jpg"
    }

];

const grid = document.getElementById('certificates-grid');
const modal = new bootstrap.Modal(document.getElementById('certModal'));


function renderCertificates() {
    grid.innerHTML = '';

    certificates.forEach(cert => {
        const card = `
            <div class="col">
                <div class="card certificate-card bg-dark border-secondary" data-id="${cert.id}">
                    <img src="${cert.image}" class="cert-img" alt="${cert.title}" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title">${cert.title}</h5>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}


// Abrir modal al hacer clic en cualquier parte de la tarjeta
document.addEventListener('click', (e) => {
    const card = e.target.closest('.certificate-card');
    if (card) {
        const id = parseInt(card.dataset.id);
        const cert = certificates.find(c => c.id === id);
        
        if (cert) {
            /* document.getElementById('modalTitle').textContent = cert.title; */
            document.getElementById('modalImage').src = cert.image;
            modal.show();
        }
    }
});


// Cargar al iniciar
document.addEventListener('DOMContentLoaded', () => {
    renderCertificates();
});
