var userAccount = document.querySelector("#userAccount"),//获取用户名
    userName = document.querySelector("#userName"),//获取姓名
    email = document.querySelector("#email"),//获取邮箱号码
    telephone = document.querySelector("#telephone"),//获取手机号码
    userSujet = document.querySelector("#userSujet"),
    userContenu = document.querySelector("#userContenu"),
    items = document.querySelectorAll(".item_"),//获取所有提示文段的下标
    aCho = document.querySelector("#choose"), oBtn = document.querySelector("#handup");
var test1 = false, test2 = false, test3 = false, test4 = false, test5 = false,test6 = false;
userAccount.onfocus = function () {
    items[0].innerHTML = "2-30 lettres";
    items[0].style.color = "green";
};
userAccount.onblur = function () {
    var reg = /^\w{2,30}$/;
    if (this.value == "") {
        items[0].innerHTML = "Veuillez saisir votre nom !";
        items[0].style.color = "red";
    } else {
        if (!reg.exec(userAccount.value)) {
            items[0].innerHTML = "2-30 lettres";
            items[0].style.color = "red";
        } else {
            items[0].innerHTML = "Le format est correct";
            items[0].style.color = "green";
            test1 = true;
        }
    }
};
//-------------------------------------------------------------nom termine;

userName.onfocus = function () {
    items[1].innerHTML = "Veuillez saisir votre prénom !";
    items[1].style.color = "green";
};
userName.onblur = function () {
    var reg = /^\w{2,30}$/;
    if (this.value == "") {
        items[1].innerHTML = "Veuillez saisir votre prénom !";
        items[1].style.color = "red";
    } else {
        if (!reg.exec(userName.value)) {
            items[1].innerHTML = "Veuillez saisir votre prénom et Confirmez qu'il est dans le bon format! ";
            items[1].style.color = "red";
        } else {
            items[1].innerHTML = "Le format est correct";
            items[1].style.color = "green";
            test2 = true
        }
    }
};
//---------------------------------------------------------------------------------prénom termine

email.onfocus = function () {
    items[2].innerHTML = "Veuillez saisir le format correct de votre e-mail";
    items[2].style.color = "green";
};
email.onblur = function () {
    var reg = /^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
    if (this.value == "") {
        items[2].innerHTML = "Veuillez saisir votre adresse e-mail!";
        items[2].style.color = "red";
    } else {
        if (!reg.exec(email.value)) {
            items[2].innerHTML = "Veuillez saisir le format d'e-mail correct";
            items[2].style.color = "red";
        } else {
            items[2].innerHTML = "Le format est correct";
            items[2].style.color = "green";
            test3 = true;
        }
    }
};
//----------------------------------------------------------------------e-mail termine
telephone.onfocus = function () {
    items[3].innerHTML = "Veuillez entrer votre numéro de téléphone";
    items[3].style.color = "green";
};
telephone.onblur = function () {
    var reg = /^\d{10}$/;
    if (this.value == "") {
        items[3].innerHTML = "Veuillez entrer votre numéro de téléphone mobile à 10 chiffres!";
        items[3].style.color = "red";
    } else {
        if (!reg.exec(telephone.value)) {
            items[3].innerHTML = "Veuillez entrer votre numéro de téléphone mobile à 10 chiffres!";
            items[3].style.color = "red";
        } else {
            items[3].innerHTML = "Le format est correct";
            items[3].style.color = "green";
            test4 = true;
        }
    }
};
//----------------------------------------------------------------------numéro téléphone termine
userSujet.onblur = function () {
    var reg = /^\w{1,30}$/;
    if (this.value == "") {
        items[4].innerHTML = "Veuillez saisir votre sujet !";
        items[4].style.color = "red";
    } else {
        if (!reg.exec(userAccount.value)) {
            items[4].innerHTML = "1-30 lettres";
            items[4].style.color = "red";
        } else {
            items[4].innerHTML = "Le format est correct";
            items[4].style.color = "green";
            test5 = true;
        }
    }
};
//----------------------------------------------------------------------sujet termine
userContenu.onblur = function () {
    var reg = /^\w{1,30}$/;
    if (this.value == "") {
        items[5].innerHTML = "Veuillez saisir votre contenu !";
        items[5].style.color = "red";
    } else {
        if (!reg.exec(userAccount.value)) {
            items[5].innerHTML = "1-30 lettres";
            items[5].style.color = "red";
        } else {
            items[5].innerHTML = "Le format est correct";
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
