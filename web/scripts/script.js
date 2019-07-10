var suAnkiTarih = new Date();
var satirlar;
var aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

var eylul = [
    ["1", "Dünya Barış Günü"],    
    ["3", "Halk Sağlığı Haftası", "9"],    
    ["12", "İlköğretim Haftası", "18"],    
    ["19", "Şehitler ve Gaziler Haftası", "25"],    
    ["25", "İtfaiyecilik Haftası", "30"],    
    ["26", "Dil Bayramı"],    
    ["27", "Dünya Turizm Günü"]   
];

var agustos = [
    ["30", "Zafer Bayramı"]  
];

var temmuz =[
    ["1", "Kabotaj ve Denizcilik Günü"],
    ["5", "Nasrettin Hoca Şenlikleri", "10"],
    ["11", "Dünya Nüfus Günü"],
    ["24", "Gazeteciler (Basın) Bayramı"],           
];

var haziran = [
    ["5", "Dünya Çevre Günü	"],    
    ["13", "Çevre Koruma Haftası", "19"],    
    ["17", "Dünya Çölleşme ve Kuraklıkla Mücadele Haftası"],    
    ["20", "Dünya Mülteciler Günü", ""],    
    ["26", "Uyuşturucu Kullanımı ve Trafiği ile Mücadele Günü"]    
];

var mayis = [
    ["7", "Trafik Haftası"],
    ["4", "İş Sağlığı ve Güvenliği Haftası", "10"],
    ["6", "Hıdrellez Kültür ve Bahar Bayramı"],
    ["10", "Danıştay ve İdari Yargı Haftası"],
    ["10", "Müzeler Haftası", "16"],
    ["10", "Engelliler Haftası", "16"],
    ["12", "Hemşirelik Haftası", "18"],
    ["14", "Dünya Eczacılık Günü"],
    ["14", "Dünya Çiftçiler Günü"],
    ["15", "Yeryüzü İklim Günü"],
    ["15", "Hava Şehitlerini Anma Günü"],
    ["17", "Dünya Telekomünikasyon Günü"],
    ["19", "Gençlik Haftası", "25"],
    ["21", "Dünya Süt Günü"],
    ["29", "İstanbul'un Fethi"],
    ["31", "Dünya Sigarasız Günü"],
    ["31", "Dünya Hostesler Günü"]
];

var nisan = [
    ["1", "Dünya Sağlık Günü ve Kanser Haftası", "7"],
    ["5", "Avukatlar Günü"],
    ["8", "Sağlık Haftası", "14"],
    ["10", "Polis Teşkilatının Kuruluşu"],
    ["15", "Turizim Haftası", "22"],
    ["21", "Ebeler Haftası", "28"],
    ["20", "Kutlu Doğum Haftası", "26"],
    ["23", "Ulusal Egemenlik ve Çocuk Bayramı"],
    ["28", "Kardeşlik Haftası", "4"]
];

var mart = [
    ["1" ,"Yeşilay Haftası", "7"],
    ["8", "Dünya Kadınlar Günü"],
    ["12", "İstiklal Marşının Kabulü"],
    ["15", "Dünya Tüketiciler Günü"],
    ["18", "Şehitler Günü"],
    ["18", "Çanakkale Zaferi"],
    ["18", "Yaşlılara Saygı Haftası", "24"],
    ["21", "Nevruz Bayramı"],
    ["21", "Orman Haftası", "26"],
    ["21", "Dünya Şiir Günü"],
    ["22", "Dünya Su Günü"],
    ["23", "Dünya Meteorolojı Günü"],
    ["24", "Dünya Verem Günü"],
    ["27", "Dünya Tiyatrolar Günü"],
    ["28", "Kütüphane Haftası"],
    ["28", "Vergi Haftası" ,"31"]
];

var subat = [
    ["9", "Dünya Sigarayı Bırakma Günü"],
    ["14", "Sevgililer Günü"],
    ["28", "Sivil Savunma Günü"]
];

var ocak = [
    ["4", "Veremle Savaş Eğitimi Haftası"],
    ["4", "Enerji Tasarrufu Haftası", "10"],
    ["7", "Beyaz Baston Körler Haftası", "14"],
    ["10", "Çalışan Gazeteciler Günü"],
    ["10", "İdareciler Günü"],
    ["25", "Cüzam Haftası", "31"],
    ["26", "Dünya Gümrük Günü"]  
];

var bilgiler = [ocak, subat, mart, nisan, mayis, haziran, temmuz, agustos, eylul];
    
function onemliGunler() {

    //Tabloya erişme
    var gunlerTablosu = document.getElementById("gunler").childNodes[1];
    satirlar = gunlerTablosu.getElementsByTagName("tr");
    
    //Günleri ayarlama
    kutuNumaralandir();
    
    //Önceki ve sonraki aya geçme tuşları 
    var onceki = gunlerTablosu.getElementsByClassName("onceki")[0];
    onceki.style.cursor="pointer";
    
    var sonraki = gunlerTablosu.getElementsByClassName("sonraki")[0];
    sonraki.style.cursor="pointer";
    
    onceki.onclick = function(){
        if(suAnkiTarih.getMonth() >= 0 && suAnkiTarih.getMonth() != 0){
            suAnkiTarih.setMonth(suAnkiTarih.getMonth()-1);
            kutuNumaralandir();
        }else
            alert("Önceki yılın bilgileri girilmemiştir.");
    };
    
    sonraki.onclick = function(){
        if(suAnkiTarih.getMonth() < aylar.length && bilgiler.length-1 > suAnkiTarih.getMonth()){
            suAnkiTarih.setMonth(suAnkiTarih.getMonth()+1);
            kutuNumaralandir();
        }else
            alert("Bilgiler eylül ayına kadar girilmiştir.");
    };

}
    
function tabloIcerigiDoldur(gelenAy){
    //İçerik doldurma kısmı
    for(var i = 0; i < gelenAy.length; i++){
        var baslangic = parseInt(gelenAy[i][0]);
        var icerik = gelenAy[i][1];
        var bitis = 0;
        
        var arananSutun = document.getElementById(baslangic);
        
        //Eğer önemli gün bir gün sürüyorsa
        if(gelenAy[i].length < 3){
           
            var h5 = document.createElement("h5");
            var h5TextNode = document.createTextNode(icerik);
            h5.style.cursor = "pointer";
            h5.appendChild(h5TextNode);
            
            arananSutun.appendChild(h5);
            
            continue;
        }
        
        bitis = parseInt(gelenAy[i][2]);
                
        for(var j = baslangic; j <= bitis; j++){

            var h5 = document.createElement("h5");
            var h5TextNode = document.createTextNode(icerik);
            //h5.style.color = renkler[renkSayac]; 
            h5.style.cursor = "pointer";
            h5.appendChild(h5TextNode);
                     
            arananSutun = document.getElementById(j);
            arananSutun.appendChild(h5);
            
        }
    }
    
    //Tablonun en alt satırı boş ise gizleme
    var sonSatir = satirlar[satirlar.length-1];
    var ilkKutu = sonSatir.getElementsByTagName("td")[0];
    var h4 = ilkKutu.getElementsByTagName("h4");
    if(h4.length === 0)
        sonSatir.style.display="none";
    
}

function kutuNumaralandir(){

    var ayinIlkGunu = new Date(suAnkiTarih.getFullYear(), suAnkiTarih.getMonth(), 1);
    var ayinSonGunu = new Date(suAnkiTarih.getFullYear(), suAnkiTarih.getMonth() + 1, 0);

    var gunSayac = 1;
    var ayinBiriHangiGunIndis = ayinIlkGunu.getDay();
    
    if(ayinBiriHangiGunIndis === 0)
        ayinBiriHangiGunIndis = 6;
    else
        ayinBiriHangiGunIndis = ayinBiriHangiGunIndis - 1;
        
    var ayKacCekiyor = ayinSonGunu.getDate() + 1;
    
    //Tablo başlığı
    var tarihBaşlik = satirlar[0].childNodes[3];
    tarihBaşlik.innerHTML = aylar[suAnkiTarih.getMonth()] + " " + suAnkiTarih.getFullYear();
    
    //Kutuları numaralandırma
    //ilk iki satir tarih bilgisi olduğu için döngü 3. satırdan başlatılıyor
    for (var i = 2; i < satirlar.length; i++) {
        var sutunlar = satirlar[i].getElementsByTagName("td");
        satirlar[i].style.display="";
        
        for (var j = 0; j  < sutunlar.length; j++) {
            
            var kutu = sutunlar[j];
            
            //Kutuyu ayarlama
            kutu.innerHTML = ""; 
            kutu.style.width = "139px";
            kutu.setAttribute("id","");
               
            if((j >= ayinBiriHangiGunIndis || i > 2) && gunSayac < ayKacCekiyor){
                
                kutu.setAttribute("id", gunSayac);
                            
                var h4 = document.createElement("h4");
                var gun = document.createTextNode(gunSayac++);
                h4.appendChild(gun);
                               
                kutu.appendChild(h4);
            }    
            
            if(j>4){
                kutu.style.backgroundColor="cornsilk";
            }

        }   
    }
    
    tabloIcerigiDoldur(bilgiler[suAnkiTarih.getMonth()]);
}