function abrirPresente() {
    // Esconde os elementos iniciais
    document.getElementById('presente').style.display = 'none';
    document.getElementById('titulo').classList.add('hidden');

    // Mostra a mensagem
    const mensagem = document.getElementById('mensagem');
    mensagem.classList.remove('hidden');

    // Explosão de confetes
    confetti({
        particleCount: 450,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#bb0000', '#e100ff', '#6bc1ff', '#ffd700']
    });
}

function reiniciar() {
    location.reload();
}