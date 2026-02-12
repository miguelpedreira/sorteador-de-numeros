document.addEventListener('DOMContentLoaded', function() {
    const numeroInput = document.getElementById('numero');
    const numero2Input = document.getElementById('numero2');
    const button = document.querySelector('button');
    const alertaAnimado = document.getElementById('alerta-animado');
    const alertaMensagem = document.getElementById('alerta-mensagem');
    const alertaTitulo = document.getElementById('alerta-titulo');
    const alertaFechar = document.getElementById('alerta-fechar');

    function mostrarAlerta(titulo, mensagem) {
        alertaTitulo.textContent = titulo;
        alertaMensagem.textContent = mensagem;
        alertaAnimado.classList.remove('alerta-oculto');
        alertaAnimado.classList.add('alerta-visivel');
    }

    function fecharAlerta() {
        alertaAnimado.classList.remove('alerta-visivel');
        alertaAnimado.classList.add('alerta-oculto');
    }

    alertaFechar.addEventListener('click', fecharAlerta);

    button.addEventListener('click', function() {
        const min = parseInt(numeroInput.value);
        const max = parseInt(numero2Input.value);

        if (isNaN(min) || isNaN(max)) {
            mostrarAlerta('Erro!', 'Por favor, preencha ambos os números!');
            return;
        }

        if (min >= max) {
            mostrarAlerta('Erro!', 'O primeiro número deve ser menor que o segundo!');
            return;
        }

        const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
        
        mostrarAlerta('🎉 Sorteio Realizado!', `Número sorteado: ${resultado}`);
    });
});