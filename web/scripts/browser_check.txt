function platformControl(){
    var isMobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;

    if(isMobile){
        window.location.href = "../mobil/index.html";
    }
}