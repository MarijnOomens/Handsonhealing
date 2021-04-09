let promotionText = document.getElementById("promotion-text");
let seizoensAanbiedingButton = document.getElementById("promotion-link");

let currentDate = new Date();
let month = currentDate.getUTCMonth() + 1;
let day = currentDate.getUTCDay();

if ( month >= 3 && month <= 5 ) {
    promotionText.innerHTML = "Voor u is nu het heerlijke lente arrangement in de aanbieding. Klik voor een uitgebreide beschrijving van deze behandeling hieronder.";
    seizoensAanbiedingButton.href = "zomer-arrangement.html";
}
else if(month >= 6 && month <= 9) {
    //
}
else if (month >= 10 || month <= 2) {
    promotionText.innerHTML = "Voor u is nu het heerlijke herfst-winter arrangement in de aanbieding. Klik voor een uitgebreide beschrijving van deze behandeling hieronder.";
    seizoensAanbiedingButton.href = "herfst-winter-massage.html";
}
