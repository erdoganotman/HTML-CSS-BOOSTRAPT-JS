var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?52710';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
"backgroundColor":"#4dc247",
"ctaText":"",
"borderRadius":"25",
"marginLeft":"0",
"marginBottom":"50",
"marginRight":"50",
"position":"right"
},
"brandSetting":{
"brandName":"GREENCARD ÇEKİLİŞİ",
"brandSubTitle":"Çevrimiçi",
"brandImg":"https://cdn.clare.ai/wati/images/WATI_logo_square_2.png",
"welcomeText":"Size Nasıl Yardımcı Olabilirim",
"messageText":"Merhabalar ben Ömer size nasıl yardımcı olabilirim ? {{page_link}}",
"backgroundColor":"#0a5f54",
"ctaText":"GÖRÜŞMEYİ BAŞLAT",
"borderRadius":"25",
"autoShow":false,
"phoneNumber":"+905310283223"
}
};
s.onload = function() {
CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);