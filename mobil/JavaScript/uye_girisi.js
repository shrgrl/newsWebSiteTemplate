
function kontrol()
{
    var sifre=document.getElementById('sifre');
    var mail=document.getElementById('posta');
   
   if(mail.value.length < 8 || sifre.value.length < 4 )// eposta adresi 6 karakterden az olamaz
   {
     alert('Kullanci Adi 4 Ve  E-posta adresiniz 8 karakterden az olamaz!');
   }
    else if( mail.value.indexOf('@')==-1  || mail.value.indexOf('.')==-1  )// eposta içerisinde @ işareti yoksa hata vereilsin VEYA
                                                                        // eposta içerisinde . işareti yoksa hata verilsin
   {
     alert('E-Posta adresini doğru giriniz (. ve @ işaretleri içermeli)!');
     return false;
   }
   return true;
 }