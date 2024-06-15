import "../css/style.css";
import validate from "./formValidate";
import { jsonBuild } from "./priceBuild";
import select from "./phoneMask";

document.getElementById("submitForm").addEventListener("click", function () {
    if (validate()) {
        console.log(jsonBuild());
    }
});
select();
