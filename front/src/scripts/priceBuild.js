const TYPE_SITE = [undefined, 20000, 20000, 30000, 30000, 60000, 70000, 90000];
const TYPE_SITE_TEXT = [
    undefined,
    "landing",
    "business_card",
    "corporate",
    "portfolio",
    "blog",
    "forum",
    "e-store",
];
const ONE_PAGE = 8000;
const DESIGN = 15000;
const TG_BOT = 9000;
export default function pricing(typeOfSite, amountPage, design, telegramBot) {
    let totalPrice = 0;
    amountPage--;
    totalPrice += TYPE_SITE[typeOfSite] + ONE_PAGE * amountPage + (design ? DESIGN : 0) + (telegramBot ? TG_BOT : 0);
    document.getElementById("priceText").innerText = `от ${totalPrice} руб.`;
}
export function jsonBuild() {
    let objectOfSite = {
        name: document.getElementById("nameForm").value,
        phone: `+${document.getElementById("phoneNumber").value.replace(/\D/g, "")}`,
        email: document.getElementById("e-mail").value,
        type: TYPE_SITE_TEXT[document.getElementById("typeOfSite").value],
        pageCount: document.getElementById("amountPage").value,
        design: document.getElementById("designCheck").checked,
        bot: document.getElementById("tgbotCheck").checked,
        comment: document.getElementById("commentArea").value,
    };
    return objectOfSite;
}
