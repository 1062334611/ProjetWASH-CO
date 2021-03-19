var usernom = document.querySelector("#usernom"),//recevoir nom
    userprenom = document.querySelector("#userprenom"),//recevoir prenom
    email = document.querySelector("#email"),//recevoir e-mail
    telephone = document.querySelector("#telephone"),//recevoir téléphone
    userSujet = document.querySelector("#userSujet"),//recevoir sujet
    userContenu = document.querySelector("#userContenu"),//recevoir contenu
    items = document.querySelectorAll(".item_"),//recevoir les indices de tous les paragraphes d'invite
    aCho = document.querySelector("#choose"), oBtn = document.querySelector("#handup");
var test1 = false, test2 = false, test3 = false, test4 = false , test5 = false, test6 = false;
usernom.onfocus = function () {
    items[0].innerHTML = "Veuillez entrer votre nom";
    items[0].style.color = "green";
};
usernom.onblur = function () {
    var reg = /^\w{2,30}$/;
    if (this.value == "") {
        items[0].innerHTML = "Vous n'avez rien entré ici!";
        items[0].style.color = "red";
        usernom.style.border="1px solid red";
    } else {
        if (!reg.exec(usernom.value)) {
            items[0].innerHTML = "Veuillez entrer votre nom (2-30 lettres)!";
            items[0].style.color = "red";
            usernom.style.border="1px solid red";
        } else {
            items[0].innerHTML = "Format correct";
            items[0].style.color = "green";
            test1 = true;
        }
    }
};
//-------------------------------------------------------------nom part termine;

userprenom.onfocus = function () {
    items[1].innerHTML = "Veuillez entrer votre nom!";
    items[1].style.color = "green";
};
userprenom.onblur = function () {
    var reg = /^\w{2,30}$/;
    if (this.value == "") {
        items[1].innerHTML = "Vous n'avez rien entré ici!";
        items[1].style.color = "red";
        userprenom.style.border="1px solid red";
    } else {
        if (!reg.exec(userprenom.value)) {
            items[1].innerHTML = "Veuillez entrer votre prénom correct! (2-30 lettres) ";
            items[1].style.color = "red";
            userprenom.style.border="1px solid red";
        } else {
            items[1].innerHTML = "Format correct";
            items[1].style.color = "green";
            test2 = true
        }
    }
};
//---------------------------------------------------------------------------------prénom part termine

email.onfocus = function () {
    items[2].innerHTML = "Veuillez entrer le format correct de votre e-mail";
    items[2].style.color = "green";
};
email.onblur = function () {
    var reg = /^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
    if (this.value == "") {
        items[2].innerHTML = "Vous n'avez rien entré ici!";
        items[2].style.color = "red";
        email.style.border="1px solid red";
    } else {
        if (!reg.exec(email.value)) {
            items[2].innerHTML = "Veuillez saisir l'adresse e-mail correcte!";
            items[2].style.color = "red";
            email.style.border="1px solid red";
        } else {
            items[2].innerHTML = "Format correct";
            items[2].style.color = "green";
            test3 = true;
        }
    }
};
//----------------------------------------------------------------------e-mail part termine
telephone.onfocus = function () {
    items[3].innerHTML = "Veuillez entrer votre numéro de téléphone";
    items[3].style.color = "green";
};
telephone.onblur = function () {
    var reg = /^\d{10}$/;
    if (this.value == "") {
        items[3].innerHTML = "Vous n'avez rien entré ici!";
        items[3].style.color = "red";
        telephone.style.border="1px solid red";
    } else {
        if (!reg.exec(telephone.value)) {
            items[3].innerHTML = "Veuillez entrer votre numéro de téléphone mobile à 10 chiffres!";
            items[3].style.color = "red";
            telephone.style.border="1px solid red";
        } else {
            items[3].innerHTML = "Format correct";
            items[3].style.color = "green";
            test4 = true;
        }
    }
};
//----------------------------------------------------------------------numéro téléphone part termine
userSujet.onfocus = function () {
    items[4].innerHTML = "Veuillez entrer votre sujet";
    items[4].style.color = "green";
};
userSujet.onblur = function () {
    var reg = /^\w{1,30}$/;
    if (this.value == "") {
        items[4].innerHTML = "Vous n'avez rien entré ici!";
        items[4].style.color = "red";
        userSujet.style.border="1px solid red";
    } else {
        if (!reg.exec(userAccount.value)) {
            items[4].innerHTML = "Veuillez entrer votre sujet à 1-30 lettres";
            userSujet.style.border="1px solid red";
        } else {
            items[4].innerHTML = "Format correct";
            items[4].style.color = "green";
            test5 = true;
        }
    }
};
//----------------------------------------------------------------------sujet part termine
userContenu.onfocus = function () {
    items[5].innerHTML = "Veuillez entrer votre contenu";
    items[5].style.color = "green";
};
userContenu.onblur = function () {
    var reg = /^\w{1,1000}$/;
    if (this.value == "") {
        items[5].innerHTML = "Vous n'avez rien entré ici!";
        items[5].style.color = "red";
        userContenu.style.border="1px solid red";
    } else {
        if (!reg.exec(userAccount.value)) {
            items[5].innerHTML = "Veuillez entrer votre contenu au moins une lettre";
            items[5].style.color = "red";
            userContenu.style.border="1px solid red";
        } else {
            items[5].innerHTML = "Format correct";
            items[5].style.color = "green";
            test6 = true;
        }
    }
};
//----------------------------------------------------------------------contenu termine
oBtn.onclick = function () {
    if ( test1 == false || test2 == false || test3 == false || test4 == false || test5 == false|| test6 == false) {
        alert(" Le format des informations que vous avez renseignées est incorrect ! ")
    } else {
        alert(" Votre message a bien été envoyé ! ")
    }
};
