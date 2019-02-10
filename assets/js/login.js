const INVITATION = '123456789';
var GLOBAL = {
    name: '',
    email: '',
    psswd: ''
};

var valid = () => {
    let invitation = document.getElementById('inputInvitation');
    let password = document.getElementById('inputPassword').value;
    let confirm_password = document.getElementById('inputConfirmPassword').value;
    let username = document.getElementById('inputUsername').value;
    let email = document.getElementById('inputEmail').value;
    let psswd = document.getElementById('inputPassword').value;

    console.log('invitation: ', invitation.value);
    console.log('password: ', password);
    console.log('confirm: ', confirm_password);

    if (!username) {
        alert("Entrez un nom d'utilisateur!");
        return ;
    }

    if (!email) {
        alert("Entrez un email!");
        return ;
    }

    if (!password || !confirm_password) {
        alert('Entrez un mot de passe!');
        return ;
    }

    if (password != confirm_password) {
        alert("Les mots de passe ne correspondent pas");
        return ;
    }

    if (invitation.value == INVITATION) {
        GLOBAL.name = username;
        GLOBAL.email = email;
        GLOBAL.psswd = psswd;
        console.log('GOLBAL: ', GLOBAL);
        localStorage.setItem('GLOBAL', JSON.stringify(GLOBAL));

        // window.location.replace("choice_screen.html");
        window.location.href = "choice_screen.html";
        return false;
    } else {
        alert("Votre code d'invitation n'est pas valide. Contactez votre parrain pour y avoir acces");
    }
    return false;
}