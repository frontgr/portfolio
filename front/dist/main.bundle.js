/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/scripts/priceBuild.js
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
function pricing(typeOfSite, amountPage, design, telegramBot) {
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
function jsonBuild() {
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
        redBorder("phoneWrapper");
    }
    if (document.getElementById("typeOfSite").innerText == "Тип сайта") {
        flag = false;
        redBorder("typeOfSite-select");
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
            document.getElementById("typeOfSite").innerText,
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
function oninputForm() {
    pricing(
        document.getElementById("typeOfSite").innerText,
        document.getElementById("amountPage").value,
        document.getElementById("designCheck").checked,
        document.getElementById("tgbotCheck").checked,
    );
    document
        .getElementById("typeOfSite")
        .addEventListener("input", oninputForm);
    document
        .getElementById("amountPage")
        .addEventListener("input", oninputForm);
    document
        .getElementById("designCheck")
        .addEventListener("input", oninputForm);
    document
        .getElementById("tgbotCheck")
        .addEventListener("input", oninputForm);
}

;// CONCATENATED MODULE: ./src/scripts/selectDropdown.js


const selectDropdown_element = document.getElementById("phoneNumber");
const maskOptions = { mask: "+{7}(000)000-00-00" };
const mask = IMask(selectDropdown_element, maskOptions);
document.getElementById("phoneNumber").placeholder = "+7(___)___-__-__";
function selectDropdown_select() {
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
function selectTypeOfSite() {
    let selectHeader = document.querySelectorAll(".select-typeofsite__header");
    let selectItem = document.querySelectorAll(".select-typeofsite__item");
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
            select = this.closest(".select-typeofsite"),
            currentText = select.querySelector(".select-typeofsite__current");
        currentText.innerHTML = this.innerHTML;
        oninputForm();
        select.classList.remove("is-active");
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





document.getElementById("formContacts").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validate()) {
        console.log(jsonBuild());
        document.getElementById('formContacts').reset()
    }
});
document.getElementById("amountPage").addEventListener('input', function() {
    if(this.value > 256){
        document.getElementById("amountPage").value = 256;
    }
});
selectDropdown_select();
selectTypeOfSite();

oninputForm();

/******/ })()
;