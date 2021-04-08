let promotionText = document.getElementById("promotion-text");
let seizoensAanbiedingButton = document.getElementById("promotion-link");

let currentDate = new Date();
let month = currentDate.getUTCMonth() + 1;
let day = currentDate.getUTCDay();

if ( month >= 4 && month <= 8 ) {
    promotionText.innerHTML = "Voor u is nu het heerlijke lente-zomer arrangement in de aanbieding. Klik voor een uitgebreide beschrijving van deze behandeling hieronder.";
    seizoensAanbiedingButton.href = "zomer-arrangement.html";
} else if (month >= 9 || month <= 3) {
    promotionText.innerHTML = "Voor u is nu het heerlijke herfst-winter arrangement in de aanbieding. Klik voor een uitgebreide beschrijving van deze behandeling hieronder.";
    seizoensAanbiedingButton.href = "herfst-winter-massage.html";
}
