// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// Funciones Globales para Modales
window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }
};

window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
        document.body.style.overflow = 'auto';
    }
};

// Cerrar al hacer clic fuera del contenido
window.onclick = function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
};

// Copiar Email
window.copyEmail = function() {
    const email = "sebastianchb16@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const label = document.getElementById("email-label");
        label.innerText = "¡Copiado!";
        label.style.color = "#8b5cf6";
        setTimeout(() => {
            label.innerText = "Copiar Email";
            label.style.color = "";
        }, 2000);
    });
};
window.copyEmail = function() {
    const email = "sebastianchb16@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const label = document.getElementById("outlook-label"); // Actualizado aquí
        const originalText = label.innerText;
        label.innerText = "¡Copiado!";
        label.style.color = "#8b5cf6";
        setTimeout(() => {
            label.innerText = originalText;
            label.style.color = "";
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
};