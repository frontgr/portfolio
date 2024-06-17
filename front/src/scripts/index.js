import "../css/style.css";
import {validate , oninputForm} from "./formValidate";
import { jsonBuild } from "./priceBuild";
import { select, selectTypeOfSite } from "./selectDropdown";

document.getElementById("submitForm").addEventListener("click", function () {
    if (validate()) {
        console.log(jsonBuild());
    }
});

select();
selectTypeOfSite();

oninputForm();
