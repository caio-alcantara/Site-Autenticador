var user1 = ["caio123", "123456"]

function verificar() {
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    let paragrafo = document.getElementById('paragrafo')
    if (usuario.length == 0 || senha.length == 0) {
        paragrafo.style.color = 'red'
        paragrafo.innerHTML = 'Preencha todos os campos'
    } else {
        if (usuario == user1[0] && senha == user1[1]) {
            window.location.href = 'teste.html'

        } else {
            paragrafo.style.color = 'red'
            paragrafo.innerHTML = 'Usuário ou senha inválidos.'
        }
    }
    
}
