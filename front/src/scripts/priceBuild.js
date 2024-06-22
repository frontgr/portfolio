const TYPE_SITE_TEXT = {
    Лэндинг: "landing",
    "Сайт-визитка": "business_card",
    Корпоративный: "corporate",
    Портфолио: "portfolio",
    Блог: "blog",
    Форум: "forum",
    "Интернет-магазин": "e-store",
};
const TYPE_SITE = {
    Лэндинг: 20000,
    "Сайт-визитка": 20000,
    Корпоративный: 30000,
    Портфолио: 30000,
    Блог: 60000,
    Форум: 70000,
    "Интернет-магазин": 90000,
};
const ONE_PAGE = 8000;
const DESIGN = 15000;
const TG_BOT = 9000;
export default function pricing(typeOfSite, amountPage, design, telegramBot) {
    typeOfSite == "Тип сайта" ? (typeOfSite = "Лэндинг") : false;
    amountPage == 0 ? (amountPage = 1) : false;

    amountPage--;
    let totalPrice =
        TYPE_SITE[typeOfSite] +
        ONE_PAGE * amountPage +
        (design ? DESIGN : 0) +
        (telegramBot ? TG_BOT : 0);
    document.getElementById("priceText").innerText = `от ${totalPrice} руб.`;
}
export function jsonBuild() {
    let objectOfSite = {
        name: document.getElementById("nameForm").value,
        phone: `+${document
            .getElementById("phoneNumber")
            .value.replace(/\D/g, "")}`,
        email: document.getElementById("e-mail").value,
        type: TYPE_SITE_TEXT[document.getElementById("typeOfSite").innerText],
        pageCount: +document.getElementById("amountPage").value,
        design: document.getElementById("designCheck").checked,
        bot: document.getElementById("tgbotCheck").checked,
        comment: document.getElementById("commentArea").value,
    };
    return objectOfSite;
}
