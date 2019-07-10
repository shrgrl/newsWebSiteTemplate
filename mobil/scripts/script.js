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
    ["4", "İş Sağlığı ve Güvenliği Haftası", "10"],
    ["6", "Hıdrellez Kültür ve Bahar Bayramı"],
    ["7", "Trafik Haftası"],
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
    ["20", "Kutlu Doğum Haftası", "26"],
    ["21", "Ebeler Haftası", "28"],
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

function init() {
    
    var gunlerTablosu = document.getElementById("gunler");
    gunlerTablosu.innerHTML="";

    var buAyinBilgileri = bilgiler[suAnkiTarih.getMonth()];
    
    for(var i = 0; i < buAyinBilgileri.length; i++){
                     
        var donguSiniri = parseInt(buAyinBilgileri[i][0]);
        if(buAyinBilgileri[i].length > 2)
            donguSiniri = parseInt(buAyinBilgileri[i][2]);
                
        for(var j = buAyinBilgileri[i][0]; j <= donguSiniri; j++){
            
            var aralik="";
            if(buAyinBilgileri[i].length > 2)
                aralik="-"+buAyinBilgileri[i][2];
                
            var tarih = buAyinBilgileri[i][0] + aralik + " " + aylar[suAnkiTarih.getMonth()];
            icerikEkle(j, buAyinBilgileri[i][1], tarih);
        } 
                
    }
    
}

function icerikEkle(gun, icerik, tarih) {
    var gunlerTablosu = document.getElementById("gunler");
    
    var satirlar = gunlerTablosu.getElementsByTagName("tr");
    if(satirlar.length < 1)
        satirEkle();
    var sonSatir = satirlar[satirlar.length-1];
    var sutunlar = sonSatir.getElementsByTagName("td");

    var indis = 0;
    
    //Gelen güne ait sutun olusturulmuş mu
    var element = document.getElementById(gun);
    if(element === null){
        if(sutunlar[0].innerHTML.length < 1)
            indis = 0;
        else if(sutunlar[2].innerHTML.length <1 )
            indis = 2;
        else{
            satirEkle();
            indis = 0;
            sonSatir = satirlar[satirlar.length-1];
            sutunlar = sonSatir.getElementsByTagName("td");
        }
        
        var p = document.createElement("p");
        var pTextNode = document.createTextNode(gun+" "+aylar[suAnkiTarih.getMonth()]);
        p.appendChild(pTextNode);
        sutunlar[indis].setAttribute("id", gun);
        sutunlar[indis].appendChild(p);

    
    }
    else{
        var satir = element.parentNode;
        sutunlar = satir.getElementsByTagName("td");
        if(element === sutunlar[2])
            indis = 2;
    }
    



    
    var hGrp = document.createElement("hgroup");
    var h5Icerik = document.createElement("h5");
    var h5IcerikTextNode = document.createTextNode(icerik);
    h5Icerik.appendChild(h5IcerikTextNode);
    hGrp.appendChild(h5Icerik);
    var h5Tarih = document.createElement("h5");
    var h5TarihTextNode = document.createTextNode(tarih);
    h5Tarih.appendChild(h5TarihTextNode);
    hGrp.appendChild(h5Tarih);
    sutunlar[indis+1].appendChild(hGrp);     


}

function satirEkle() {
    var gunlerTablosu = document.getElementById("gunler");

    //Boşluk olması için bir tane boş ekliyorum
    var yeniSatir2 = document.createElement("tr");
    yeniSatir2.style.width="100%";
    gunlerTablosu.appendChild(yeniSatir2);    
    
    var yeniSatir = document.createElement("tr");
    yeniSatir.style.width="100%";
    gunlerTablosu.appendChild(yeniSatir);

    
    for(var i=0; i < 2; i++){            
        var tdBir = document.createElement("td");
        tdBir.setAttribute("class", "col-typ1");
        yeniSatir.appendChild(tdBir);

        var tdIki = document.createElement("td");
        tdIki.setAttribute("class", "col-typ2");
        yeniSatir.appendChild(tdIki);
    }    
}

function oncekiAy_click(){
    if(suAnkiTarih.getMonth() >= 0 && suAnkiTarih.getMonth() != 0){
        suAnkiTarih.setMonth(suAnkiTarih.getMonth()-1);
        init();
    }else
        alert("Önceki yılın bilgileri girilmemiştir.");
}
    
 function sonrakiAy_click(){
    if(suAnkiTarih.getMonth() < aylar.length && bilgiler.length-1 > suAnkiTarih.getMonth()){
        suAnkiTarih.setMonth(suAnkiTarih.getMonth()+1);
        init();
    }else
        alert("Bilgiler eylül ayına kadar girilmiştir.");
}