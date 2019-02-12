<script language="javascript">    function mailpage()
    {
chaine_mail = "ivanvn82@gmail.com.fr?Subject=Inscription &Cc="+document.inscription.Mail.value+"&body=Vos coordonnées sont:+ %0A%0D 2eme ligne ";   
chaine_mail += "&body=";
chaine_mail +=  "&body=NOM  : "  + document.inscription.Nom.value ;
chaine_mail += " Prenom : " + document.inscription.Prenom.value ;
chaine_mail += " Adresse : "  + document.inscription.Adresse.value ;
chaine_mail += " Code Postal : " + document.inscription.cp.value ;
chaine_mail += " Ville : " + document.inscription.Ville.value ;
chaine_mail += "Date de naissance : " + document.inscription.Datedenaissance.value ;
chaine_mail += "Sexe : " +  document.inscription.Sexe.value ;
chaine_mail += "E - Mail : " + document.inscription.Mail.value ;
document.inscription.action=chaine_mail;
document.inscription.submit(); 
}
</script>