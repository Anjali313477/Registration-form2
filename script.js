let btn = document.querySelector("#button")
btn.addEventListener("click", (event) => {
    event.preventDefault();
    var emailid = document.getElementById('mail').value.trim();
    let fname = document.querySelector("#fname").value.trim();
    let lname = document.querySelector("#lastname").value.trim();
    let file = document.querySelector("#file").value
    let phnNumber = document.querySelector("#no").value
    let pincode = document.querySelector("#pcode").value
    let ID = document.querySelector("#id").value.trim()
    let passward = document.querySelector("#pswrd").value.trim();
    let Date = document.querySelector("#date").value
    let contactaddress = document.querySelector("#contactaddress").value.trim();
    let location = document.querySelector("#location").value.trim();
    let name = document.querySelector("#name").value.trim();
    let adrs = document.querySelector("#Adrs").value.trim();
    let telephn = document.querySelector("#telephn").value
    let mobile = document.querySelector("#mobileno").value
    let preferredname = document.querySelector("#prfdname").value.trim();
    let phnarealocal = document.querySelector("#phnarea").value
    let faxarealocal = document.querySelector("#faxarealocal").value
    let tittle = document.querySelector("#tittle").value.trim();
    let Designation = document.querySelector("#Designation").value.trim();
    let DEC = document.querySelector("#DEC").value.trim();
    let status = document.querySelector("#Status").value
    let letter = /^[A-Za-z\s]+$/
    let num = /^[0-9]+$/

    if (fname == "") {
        swal("Fast Name is required!", "", "warning");
        return false;
    }
    if (!letter.test(fname)) {
        swal("First Name should contain only letters!", "", "warning")
        return false;
    }
    if (fname.length < 3) {
        swal("Please Enter Proper Name", "", "warning");
        return false;
    }
    if (lname == "") {
        swal("Last Name is required!", "", "warning");
        return false;
    }
    if (!letter.test(lname)) {
        swal("Last Name should contain only letters!", "", "warning")
        return false;
    }
    if (lname.length < 3) {
        swal("Please Enter Proper Last Name", "", "warning");
        return false;
    }
    if (file == "") {
        swal("Document is required!", "", "warning");
        return false;
    }
    if (preferredname.length < 3) {
        swal("Enter valid Preferred Name", "", "warning");
        return false;
    }
    if (!letter.test(preferredname)) {
        swal("Preferred Name should contain only letters!", "", "warning")
        return false;
    }
    if (ID == "") {
        swal("ID is required!", "", "warning");
        return false;
    }
    if (/\s/.test(ID)) {
        swal("ID should not contain spaces!", "", "warning");
        return false;
    }
    if (passward == "") {
        swal("Please Enter a required Passward!", "", "warning");
        return false;
    }
    if (/\s/.test(passward)) {
        swal("Password should not contain spaces!", "", "warning");
        return false;
    }
    if (status == "") {
        swal("Status is required to fill", "", "warning")
        return false;
    }
    if (Date == "") {
        swal("Please Enter a Date", "", "warning");
        return false;
    }
    if (tittle == "") {
        swal("Tittle is required!", "", "warning");
        return false;
    }
    if (tittle.length > 15) {
        swal("Enter Valid Tittle", "", "warning")
        return false;
    }
    if (!letter.test(tittle)) {
        swal("Tittle should contain only letters!", "", "warning")
        return false;
    }
    if (Designation == "") {
        swal("Designation is required!", "", "warning");
        return false;
    }
    if (Designation.length > 15) {
        swal("Enter Valid Designation")
        return false;
    }
    if (!letter.test(Designation)) {
        swal("Designation should contain only letters!", "", "warning")
        return false;
    }
    if (DEC == "") {
        swal("Date employment commenced is required!", "", "warning");
        return false;
    }
    if (!letter.test(DEC)) {
        swal("Date employment commenced should contain only letters!", "", "warning")
        return false;
    }
    if (contactaddress == "") {
        swal("Contact Address is required !", "", "warning");
        return false;
    }
    if (location == "") {
        swal("location is required !", "", "warning");
        return false;
    }
    if (phnarealocal.toString().length != 10) {
        swal(" Phone no is required!", "", "warning");
        return false;
    }
    if (faxarealocal.toString().length != 10) {
        swal(" Fax no is required!", "", "warning");
        return false;
    }
    if (phnNumber == "" || phnNumber.toString().length != 10) {
        swal("Valid Mobile Phone Number is required!", "", "warning");
        return false;
    }
    if (pincode.toString().length != 6) {
        swal("Valid Pincode Number is required", "", "warning");
        return false;
    }
    if (name == "") {
        swal("Name is required!", "", "warning");
        return false;
    }
    if (name.length < 3) {
        swal("Please Enter Proper Name", "", "warning");
        return false;
    }
    if (!letter.test(name)){
        swal("Date employment commenced should contain only letters!", "", "warning")
        return false;
    }
    if (adrs == "") {
        swal("Address is required!", "", "warning");
        return false;
    }
    if (telephn.toString().length != 10) {
        swal("Valid Telephone no is required!", "", "warning");
        return false;
    }
    if (mobile.toString().length != 10) {
        swal("Valid Mobile no is required!", "", "warning");
        return false;
    }
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]+)?$/;
    if (!regx.test(emailid)) {
        swal("Enter valid Email id", "", "warning")
        return false;
    }
    if (/\s/.test(emailid)) {
        swal("Emai ID should not contain spaces!", "", "warning");
        return false;
    }
    swal("Form was submitted successfully!", "", "success");

})

