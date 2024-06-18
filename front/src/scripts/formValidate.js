const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

import pricing from "./priceBuild";

export function validate() {
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
export function oninputForm() {
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
