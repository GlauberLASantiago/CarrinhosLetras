document.addEventListener('DOMContentLoaded', () => {
    const playerCar = document.getElementById('player-car');
    const gameContainer = document.getElementById('game-container');

    let carX = gameContainer.offsetWidth / 2 - playerCar.offsetWidth / 2; // Posição inicial X
    let carY = 50; // Posição inicial Y (na rua)
    const carSpeed = 10; // Velocidade do carro

    // Função para atualizar a posição do carro
    function updateCarPosition() {
        playerCar.style.left = `${carX}px`;
        playerCar.style.bottom = `${carY}px`;
    }

    // Event listener para as teclas do teclado
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                // Movimento para cima (não faz sentido em um jogo de carrinho 2D na rua, a menos que seja um efeito de "pulo" ou mudança de faixa)
                // Para simplificar, vamos focar em esquerda e direita para agora.
                break;
            case 'ArrowDown':
                // Movimento para baixo (idem ao ArrowUp)
                break;
            case 'ArrowLeft':
                carX -= carSpeed;
                break;
            case 'ArrowRight':
                carX += carSpeed;
                break;
        }

        // Limita o carro dentro da tela
        if (carX < 0) {
            carX = 0;
        }
        if (carX + playerCar.offsetWidth > gameContainer.offsetWidth) {
            carX = gameContainer.offsetWidth - playerCar.offsetWidth;
        }

        updateCarPosition();
    });

    // Inicializa a posição do carro
    updateCarPosition();

    // --- Ideias para expandir a lógica do jogo: ---

    // 1. Geração aleatória de casas e árvores:
    //    Crie funções para gerar elementos do cenário de forma dinâmica para tornar o jogo mais interessante.

    // 2. Outros carros-letras (obstáculos ou para coletar):
    //    Gere outros carrinhos com letras diferentes que as crianças podem desviar ou "coletar" (passar por cima).

    // 3. Pontuação:
    //    Adicione um sistema de pontuação para quando a criança coletar uma letra.

    // 4. Sons:
    //    Adicione sons para o motor, colisões, etc.

    // 5. Níveis/Progressão:
    //    Após coletar todas as letras, avança para um novo cenário ou um novo desafio.

    // 6. Mais interatividade:
    //    Quando o carrinho-letra "passar" por uma casa, talvez ela possa mudar de cor ou uma janela se acender.
});
