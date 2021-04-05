<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/accueil.css" />
</head>
<body>
    <div style="width:100%; background-color:gray; color:white;height:30px; float:right;">
        <a id="connexion" href="#">Mon compte <i class="fa fa-user"></i></a>
     </div>
    <header>
        <img id="logo" src="img/logo/logo_small.png" alt="Logo" />
        <div id="panier">
            <a href="#">Mon panier <i class="fa fa-shopping-basket"></i></a>
        </div>
        <h2> <center> WASH&CO <img id="logo2" src="img/logo/logo_small_icon_only.png" alt="Logo2" /> </center></h2>
        <center>Votre bien être est notre priorité</center>
        
        <form>
            <div id="search">
                <input type="search" id="maRecherche" name="q">
                <button style="height:30px;"><i class="fa fa-search"></i></button>
            </div>
        </form>
        <nav>

            <ul>
                <li><a href="index.html"> Accueil</a></li>
                <li><a href="SoinsCorp.html">Soins corporels</a></li>
                <li><a href="SoinVisage.html">Soins du visage</a></li>
                <li><a href="accesoires.html">Accessoires</a></li>
                <li><a style="background-color:black;" href="contact.html">Contact</a></li>
                
            </ul>

        </nav>
    </header>


<?php
// 定义变量并默认设置为空值
error_reporting(0);
$nameErr = $emailErr = $prenameErr = $telephoneErr=$Errsujet =$Errcomment=$genderErr=$fonctionErr=$dateContactErr=$dateNaissanceErr=$new_dateErr=$new_date2Err= "";
$name = $email = $prename = $comment = $mailsujet= $telephone = $gender=$fonction=$dateContact=$dateNaissance=$new_date=$new_date2= "";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    if (empty($_POST["name"]))
    {
        $nameErr = "Vous n'avez rien entré ici!" ;

    }
    else
    {
        $name = test_input($_POST["name"]);
        // 检测名字是否只包含字母跟空格
        if (!preg_match("/^[a-zA-Z ]*$/",$name))
        {
            $nameErr = "Autoriser uniquement les lettres et les espaces"; 
        }
    }


     if (empty($_POST["prename"]))
    {
        $prenameErr = "Vous n'avez rien entré ici!";
    }
    else
    {
        $prename = test_input($_POST["prename"]);
        // 检测名字是否只包含字母跟空格
        if (!preg_match("/^[a-zA-Z ]*$/",$prename))
        {
            $prenameErr = "Autoriser uniquement les lettres et les espaces"; 
        }
    }
    if (empty($_POST["email"]))
    {
      $emailErr = "Vous n'avez rien entré ici!";
    }
    else
    {
        $email = test_input($_POST["email"]);
        // 检测邮箱是否合法
        if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email))
        {
            $emailErr = "Veuillez saisir l'adresse e-mail correcte!"; 
        }
    }
    
    if (empty($_POST["telephone"]))
    {
      $telephoneErr = "Vous n'avez rien entré ici!";
    }
    else
    {
        $telephone = test_input($_POST["telephone"]);
        // 检测邮箱是否合法
        if (!preg_match('`[0-9]{10}`',$telephone))
        {
            $telephoneErr = "Veuillez entrer votre numéro de téléphone mobile à 10 chiffres!"; 
        }
    }
    
   
    
     if (empty($_POST["mailsujet"]))
    {
        $Errsujet = "Vous n'avez rien entré ici!";
    }
    else
    {
        $mailsujet = test_input($_POST["mailsujet"]);
    }

    if (empty($_POST["comment"]))

    {

        $Errcomment = "Vous n'avez rien entré ici!";
    }
    else
    {
        $comment = test_input($_POST["comment"]);
    }
    
    if(empty($_POST["gender"])){
        $genderErr="Vous n'avez pas encore choisit!";
    }
    else{
        $gender=test_input($_POST["gender"]);
    }

    if(empty($_POST["fonction"])){
        $fonctionErr="Vous n'avez pas encore choisit!";
    }
    else{
        $fonction=test_input($_POST["fonction"]);
    }
}


function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


?>



    

    <div style="display:flex;">
        <aside style="height: 1000px">
            <h2>WASH&CO <img id="logo2" src="img/logo/logo_small_icon_only.png" alt="Logo2" /></h2>
            <a href="index.html"> Accueil</a><br />
            <a href="contact.html">Contact</a><br />
            <hr />
            <h2>Catégories <img id="logo3" src="img/logo/logo_small_icon_only_inverted.png" alt="logo3" /></h2>
            <a href="SoinsCorp.html">Soins corporels</a><br />
            <a href="SoinVisage.html">Soins du visage</a><br />
            <a href="accesoires.html">Accessoires</a>
        </aside>
       <div style="display:flex;flex:1">
            <form id="formulaire" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
                <h2>Contactez-nous ici <img id="logo3" src="img/logo/logo_small_icon_only_inverted.png" alt="logo3" /></h2>

                <div>
                    <label>Date du contact</label>
                    <input id="date" type="date" style="margin-left:40px" name="dateContact" value="<?php echo date('Y-m-d'); ?>">
                    <?php $new_date=date('Y-m-d',strtotime($_POST['dateContact']));
                    ?>
                </div>

                <div style="margin-top:10px">
                    <label>Nom</label>
                    <input type="text" style="width: 40%;margin-left: 126px" name="name" value="<?php echo $name;?>"placeholder="Saisissez votre nom">
                    <br>
                    <span class="error" style="color:red"><?php echo $nameErr;?></span>
                </div>

                <div style="margin-top:10px">
                    <label>Prenom</label>
                    <input type="text"style="width: 40%;margin-left: 126px" name="prename" value="<?php echo $prename;?>"placeholder="Saisissez votre prénom">
                    <br>
                    <span class="error"style="color:red"><?php echo $prenameErr;?></span>
                </div>

                <div style="margin-top:10px">
                    <label>Genre</label>
                    <select style="width: 41%;margin-left:116px" name="gender" value="<?php echo $gender;?>">
                        <option value="Femme">Femme</option>
                        <option value="Homme">Homme</option>
                    </select>
                </div>

                

                <div style="margin-top:10px">
                    <label>Adresse e-mail</label>
                    <input type="tel" style="width: 40%;margin-left:47px" name="email" value="<?php echo $email;?>" placeholder="Saisissez votre adresse e-mail">
                    <br>
                    <span class="error"style="color:red"><?php echo $emailErr;?></span>
                </div>
                

                <div style="margin-top:10px">
                    <label>Numéro de téléphone </label>
                    <input type="tel" style="width: 40%;" name="telephone" value="<?php echo $telephone;?>"placeholder="Veuillez entrer votre numéro de téléphone">
                    <br>
                    <span class="error"style="color:red"><?php echo $telephoneErr;?></span>
                </div>
                

                <div style="margin-top:10px">
                    <label>Date de naissance </label>
                    <input id="date" type="date" style="margin-left: 25px" name="dateNaissance" value="<?php echo date('Y-m-d'); ?>">
                    <?php $new_date2=date('Y-m-d',strtotime($_POST['dateNaissance']));
                    ?>
                </div>


                <div style="margin-top:10px">
                    <label>Fonction</label>
                    <select style="width: 41%;margin-left:95px"name="fonction" value="<?php echo $fonction;?>">
                        <option value="Enseignant">Enseignant</option>
                        <option value="Client">Client</option>
                    </select>
                </div>

               
                <div style="margin-top:10px">
                    <label>Sujet</label>
                    <input type="text" id="userSujet"  name="mailsujet" value="<?php echo $mailsujet;?>"placeholder="Entrez le sujet de votre mail" style="width: 40%;margin-left:117px">
                    <br>
                    <span class="error"style="color:red"><?php echo $Errsujet;?></span>
                </div>
                


                <div style="margin-top:10px">
                    <label>Contenu</label><br />
                    <input type="text" id="userContenu" name="comment" value="<?php echo $comment;?>"placeholder="Le contenu de votre message" style="width: 80%;height:150px">
                    <br>
                    <span class="error"style="color:red"><?php echo $Errcomment;?></span>
                </div>
               <input type="submit" name="submit" value="Envoyer"> 
            </form>
            
           
            
        </div>
    </div>
    <br><br>
          
   
 <?php
  $dest = "wujian1062334611@gmail.com";
  $sujet = "Contact information Wash&Co";
  $PrintDatecontact="Date du contact :$new_date\r\n";
  $printName = "Nom:$name\r\n";
  $printprename = "Prénom:$prename\r\n";
  $printGender = "Genre:$gender\r\n";
  $printTelephone = "Numéro de télépohne:$telephone\r\n";
  $printEmail="Adresse d'e-mail: $email\r\n";
  $PrintDatenaissance="Date de naissance :$new_date2\r\n";
  $printFonction="Fonction: $fonction\r\n";
  $printSujet="Sujet:$mailsujet\r\n";
  $printContenu="Contenu:$comment";
  $corp = "Veuillz touver ci-joint les informations de contact de client:\r\n$PrintDatecontact$printName$printprename$printGender$printTelephone$printEmail$PrintDatenaissance$printFonction$printSujet$printContenu";
  $headers = "From: wujian1062334611@gmail.com";
  if(preg_match('`[0-9]{10}`',$telephone) && preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email) && preg_match("/^[a-zA-Z ]*$/",$prename) && preg_match("/^[a-zA-Z ]*$/",$name) && $mailsujet && $comment ){
    mail($dest, $sujet, $corp,$headers);
    
    echo "<script>alert('Votre message a été envoyé avec succès.Il sera traité dans les meilleurs délais.Nous vous remercions de votre intérêt pour Wash&Co');</script>";
}

  if(!preg_match('`[0-9]{10}`',$telephone) || !preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email) || !preg_match("/^[a-zA-Z ]*$/",$prename) || !preg_match("/^[a-zA-Z ]*$/",$name) || empty($mailsujet)  || empty($comment)  ){
    
    echo "<script>alert('Échec envoi mail.Format de la formulaire incorrect.Veuillez remplir à nouveau le formulaire');</script>";
}

 

?>




</body>
<footer >
    <center>
        <p>
            Contact <br />
            email: ngassamfey@eisti.eu jian.wu@eisti.eu<br />
            téléphone: 0753210077 0776931738 <br />
        </p>

        <p> © 2021 CY-Tech</p>
    </center>

</footer>
</html>
