const Name = document.querySelector("#name");
const number = document.querySelector("#number");
const amount = document.querySelector("#amount");
const getrecipt = document.querySelector("#get-recipt");

const button = document.querySelector("button");

button.addEventListener( "click", () => {
    if((Name.value == "") || (amount.value == "")) {
        alert("Please Enter Valid information");
        return;
    } else {
        const recipt = document.createElement("div");
        recipt.setAttribute("id","recipt");

        const heading = document.createElement("h2");
        heading.setAttribute("id","recipt_heading");
        heading.textContent = "RECIPT";

        const Name_info = document.createElement("div");
        Name_info.setAttribute("id","Name_info");
        Name_info.textContent = `Name : ${Name.value}`;

        const number_info = document.createElement("div");
        Name_info.setAttribute("id","number-info");
        number_info.textContent = `Phone Number : +91 ${number.value}`;

        const amount_info = document.createElement("div");
        amount_info.setAttribute("id","amount_info");
        amount_info.textContent = `Donation : ${amount.value} rupees`;

        const Thanks = document.createElement("h2");
        Thanks.setAttribute("id","Thanks");
        Thanks.textContent = "Thank You";

        const clear = document.createElement("button");
        clear.setAttribute("id","clear");
        clear.textContent = "Clear Data";

        getrecipt.after(recipt);
        recipt.prepend(heading)
        recipt.append(Name_info);
        recipt.append(number_info);
        recipt.append(amount_info);
        recipt.append(Thanks);
        recipt.append(clear);
        Name.value = "";
        number.value = "";
        amount.value = "";

        clear.onclick = () => {
            window.location.reload();
        }
    }
})