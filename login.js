function handleSubmit(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log('Usuário:', username);
    console.log('Senha:', password);

    if (username == 'jrg.C' && password == '1234') {
        window.location.href = 'jorge.html'
    } else {
        alert('User ou Password incorreto')
    }
}