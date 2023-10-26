document.addEventListener('DOMContentLoaded', function() {
    const imagemNome = window.location.hash.substr(1);
    const imagemElemento = document.getElementById('imagem');

    if (imagemNome) {
        imagemElemento.src = imagemNome;
        imagemElemento.onload = function() {
            console.log('Imagem carregada com sucesso!');
        }
        imagemElemento.onerror = function() {
            console.log('Erro ao carregar a imagem.');
            document.body.innerHTML = 'Erro ao carregar a imagem. Verifique se o nome e o caminho estão corretos.';
        }
    } else {
        document.body.innerHTML = 'Por favor, forneça o nome da imagem na URL como #nome_da_imagem.extensao';
    }
});
