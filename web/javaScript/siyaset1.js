var image = document.getElementById("image"); //Id si Image olan Fotoğraflar bulup getiriyoruz
var imageArray = ["../foto/2.jpg","../foto/1.jpg","../foto/3.jpg","../foto/4.jpg","../foto/uzungol.jpg","../foto/6.jpg"];//Fotoğrafların isimleri yazıyoruz
var imageIndex = 0;
function changeImage()
{
   image.setAttribute("src",imageArray[imageIndex]); //Burada dizinin ilk elemanından Başladık ve sonrakı satırda adım adım artırıyoruz
   imageIndex++;
   if (imageIndex >= imageArray.length)//Eğer dizinin sonuna gelsek "Bir daha baştan başlıyalım"
   {
      imageIndex = 0;
   }
}
window.onload = function() { // Fonksiyonumuzu Çağırıyoruz...

   setInterval(changeImage,2000);// setInterval fonksiyon yardımı ile her 2 saniye fotğraflar "Slider deki" değiştireceğiz

}