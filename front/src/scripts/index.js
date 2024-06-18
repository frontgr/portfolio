import "../css/style.css";
import {validate , oninputForm} from "./formValidate";
import { jsonBuild } from "./priceBuild";
import { select, selectTypeOfSite } from "./selectDropdown";

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
select();
selectTypeOfSite();

oninputForm();
