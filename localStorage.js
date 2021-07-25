function leDados (){
    let strNome = document.getElementById('nome');
    let strEmail = document.getElementById('ereplyto');
    let strComentario = document.getElementById('Comentarios');
    let info = JSON.parse(localStorage.getItem('db'))
    if (info == null)
    {
        localStorage.setItem('db', '[]');
        info = [];
    }
    let registro = {
        nome: strNome.value,
        email: strEmail.value,
        comentario: strComentario.value
    }
    info.push(registro);
    localStorage.setItem('db', JSON.stringify(info));
    alert('Comentário feito com sucesso!');
    strNome = '';
    strEmail = '';
    strComentario = '';
}


document.getElementsByName('BTEnvia').addEventListener ('click', leDados);