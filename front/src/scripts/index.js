import "../css/style.css";
import "./popup-menu.js";
import {validate , oninputForm} from "./formValidate";
import { jsonBuild } from "./priceBuild";
import { select, selectTypeOfSite } from "./selectDropdown";


document.getElementById("formContacts").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validate()) {
        // console.log(jsonBuild());
        fetch('http://localhost:8000/notify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(jsonBuild())
        }).then(response=>console.log(response))
        
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
