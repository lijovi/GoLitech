function validation(event) {
    event.preventDefault();

    var errorMessage = document.getElementById('errorMessage')
    errorMessage.innerHTML = ''

    var nama = document.getElementById('nama').value
    var gender = document.querySelector('input[name="gender"]:checked')
    var email = document.getElementById('email').value.trim()
    var num = document.getElementById('num').value
    var alamat = document.getElementById('alamat').value

    var valid = true
    if(nama == ""){
        alert('Name should not be empty!')
        valid = false
    }

    if (gender == null) {
        alert('Please pick a gender!')
        valid = false
    }

    // if (email == "") {
    //     alert('Email must be filled')
    //     valid = false
    // }

    if(email == ""){
        alert("Email should not be empty!")
        valid = false
    }


    // else if(email.split("@").length !== 2){
    //     alert("Invalid email address, the format should be: email@address.com")
    //     valid = false
    // }
    // else if(email.split("@")[0].length === 0){
    //     alert("Invalid email address, the format should be: email@address.com")
    //     valid = false
    // }
    // else if(email.split("@")[1].length === 0){
    //     alert("Invalid email address, the format should be: email@address.com")
    //     valid = false
    // }
    
    // else if(!email.split("@")[1].includes(".")){
    //     alert("Invalid email address, the format should be: email@address.com")
    //     valid = false
    // }
    // else if(email.split("@")[1][0] === '.'){
    //     alert("Invalid email address, the format should be: email@address.com")
    //     valid = false
    // }

    if (num == "" ) {
        alert('Phone number should not be empty!')
        valid = false
    }else if (num.length != 12) {
        alert('Phone number should be 12 numbers!')
        valid = false
    }
    
    if(alamat == ""){
        alert('Address must be filled')
        valid = false
    }

    if (valid == false) {
        errorMessage.innerHTML = "Please fill in the form correctly !"
   
    }else{
        errorMessage.innerHTML = "Information Saved"
    }

    
}
