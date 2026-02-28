# Jogo de Clicar no Alvo

Este é um jogo simples de clicar no alvo desenvolvido com HTML, CSS e JavaScript.

## Introdução
O objetivo do jogo é clicar no círculo vermelho o máximo de vezes possível dentro de um tempo limite de 30 segundos. Cada clique no alvo aumenta sua pontuação. O alvo mudará de posição toda vez que for clicado.

## Como jogar
1. Clique no botão "Iniciar Jogo".
2. Tente clicar no círculo vermelho que aparece na tela.
3. Veja quantos pontos você consegue fazer antes que o tempo acabe!

## Funcionamento do Visual
O design do jogo foi pensado para ser limpo e focado na jogabilidade:

- **Área de Jogo:** Centralizada na tela, possui um tamanho fixo de 400x400 pixels com uma borda escura de 2px para delimitar claramente o espaço onde o alvo pode aparecer.
- **O Alvo:** Um círculo vermelho de 40x40 pixels que utiliza posicionamento absoluto para se mover aleatoriamente dentro da área de jogo.
- **Interface:** O título, o placar e o cronômetro estão organizados na parte superior, enquanto o botão de início fica posicionado logo abaixo da área de jogo, garantindo que todos os elementos importantes estejam centralizados e fáceis de visualizar.
- **Responsividade:** O container principal utiliza sombras e bordas arredondadas para um visual moderno, destacando-se do fundo da página.

## Lógica do Jogo (JavaScript)
A interatividade do jogo é controlada por um script que gerencia o estado da partida:

- **Controle de Tempo:** Utilizamos a função `setInterval` para criar um cronômetro que decrementa o tempo restante a cada 1 segundo (1000 milissegundos). Quando o tempo chega a zero, o jogo é encerrado.
- **Posicionamento Aleatório:** Sempre que o jogo começa ou o alvo é clicado, a função `Math.random` é usada para calcular coordenadas (X e Y) aleatórias. Isso garante que o alvo pule para uma nova posição imprevisível dentro dos limites de 400x400 pixels da área de jogo.
- **Pontuação e Cliques:** Um "escutador de eventos" (EventListener) aguarda cliques no alvo. Quando detectado, a pontuação é incrementada e o alvo se move instantaneamente.
- **Finalização:** Ao término dos 30 segundos, o alvo é escondido e um alerta do navegador (`alert`) informa a pontuação final do jogador. O botão de início é então reabilitado para uma nova partida.
