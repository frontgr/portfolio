/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/priceBuild.js
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
function pricing(typeOfSite, amountPage, design, telegramBot) {
    let totalPrice = 0;
    amountPage--;
    totalPrice += TYPE_SITE[typeOfSite] + ONE_PAGE * amountPage + (design ? DESIGN : 0) + (telegramBot ? TG_BOT : 0);
    document.getElementById("priceText").innerText = `от ${totalPrice} руб.`;
}
function jsonBuild() {
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

;// CONCATENATED MODULE: ./src/scripts/formValidate.js
const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function validate() {
    let flag = true;
    let borderArray = [];
    const TIME = 5000;
    if (document.getElementById("nameForm").value.length < 3) {
        flag = false;
        redBorder("nameForm");
    }

    if (!EMAIL_REGEXP.test(document.getElementById("e-mail").value)) {
        flag = false;
        redBorder("e-mail");
    }
    if (document.getElementById("phoneNumber").value.length < 16) {
        flag = false;
        underInput("underPhone");
        redBorder("phoneNumber");
    }
    if (document.getElementById("typeOfSite").value == 0) {
        flag = false;
        redBorder("typeOfSite");
    }
    if (
        document.getElementById("amountPage").value < 1 ||
        document.getElementById("amountPage").value > 256 ||
        !document.getElementById("amountPage").value
    ) {
        flag = false;
        redBorder("amountPage");
    }
    if (flag) {
        pricing(
            document.getElementById("typeOfSite").value,
            document.getElementById("amountPage").value,
            document.getElementById("designCheck").checked,
            document.getElementById("tgbotCheck").checked,
        );
        document.getElementById("popupNotion").style.display = "flex";
    }
    function underInput(str) {
        document.getElementById(str).style.display = "block";
    }
    function redBorder(str) {
        document.getElementById("mainTextOnContacts").scrollIntoView();
        borderArray.push(str);
        document.getElementById(str).style.border = "1px solid red";
        setTimeout(() => {
            borderArray.forEach((e) => {
                document.getElementById(e).style.border = "1px solid #C8C8C8";
            });
        }, TIME);
    }
    return flag;
}

;// CONCATENATED MODULE: ./src/scripts/phoneMask.js
const phoneMask_element = document.getElementById("phoneNumber");
const maskOptions = { mask: "+{7}(000)000-00-00" };
const mask = IMask(phoneMask_element, maskOptions);
document.getElementById("phoneNumber").placeholder = "+7(___)___-__-__";
function phoneMask_select() {
    let selectHeader = document.querySelectorAll(".select__header");
    let selectItem = document.querySelectorAll(".select__item");
    selectHeader.forEach((item) => {
        item.addEventListener("click", selectToggle);
    });
    selectItem.forEach((item) => {
        item.addEventListener("click", selectChoose);
    });
    function selectToggle() {
        this.parentElement.classList.toggle("is-active");
    }
    function selectChoose() {
        let text = this,
            select = this.closest(".select"),
            currentText = select.querySelector(".select__current");
        currentText.innerHTML = this.innerHTML;
        select.classList.remove("is-active");
        updateMaskOnPhone(this.innerText);
    }
}
function updateMaskOnPhone(countryNumber) {
    const COUNTRY = [7, 996, 374, 375, 357, 7];
    let maskString = `+{${COUNTRY[countryNumber]}}(000)000-00-00`;
    mask.updateOptions({
        mask: maskString,
    });
    document.getElementById("phoneNumber").placeholder = `+${COUNTRY[countryNumber]}(___)___-__-__`;
}
;// CONCATENATED MODULE: ./src/scripts/index.js





document.getElementById("submitForm").addEventListener("click", function () {
    if (validate()) {
        console.log(jsonBuild());
    }
});
phoneMask_select();

/******/ })()
;