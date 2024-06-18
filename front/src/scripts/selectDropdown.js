import { oninputForm } from "./formValidate";

const element = document.getElementById("phoneNumber");
const maskOptions = { mask: "+{7}(000)000-00-00" };
const mask = IMask(element, maskOptions);
document.getElementById("phoneNumber").placeholder = "+7(___)___-__-__";
export function select() {
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
export function selectTypeOfSite() {
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