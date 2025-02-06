function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    
    // Pegar a URL da imagem em alta resolução (removendo as dimensões do Picsum)
    const highResUrl = imgElement.src.replace('/200/150', '/1200/900');
    
    modal.style.display = "block";
    modalImg.src = highResUrl;
    
    // Prevenir scroll do body quando modal estiver aberto
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    
    // Restaurar scroll do body
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
