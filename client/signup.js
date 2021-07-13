// document.addEventListener('DOMContentLoaded', function () {
//     fetch('http://localhost:8000/')
    
    
// })
// const { response } = require("express")
// const search = document.querySelector('submit-btn')
// onclick.addEventListener("sumit")




const myForm = document.querySelector('form')

document.addEventListener('submit', function(e) {
    e.preventDefault()
        alert('form submitted')
        

    var LastName = form.surname.value
    var FirstName = form.firstname.value
    var DateOfBirth = form.day.value + '/' + form.month.value + '/' + form.year.value
    var Gender = displayRadioValue()
    var BusinessName = form.business.value
    var Profession =form.skill.value
    var Address = form.address.value
    var Phone = form.number.value
    var Landmark = form.landmark.value
    var Email = form.email.value
    function displayRadioValue() {
        var ele = document.getElementsByName('gender');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            return ele[i].value;
           
        }
    }

    const userData =  {
        Surname : LastName,
        Name : FirstName,
        Date : DateOfBirth,
        Gender: Gender,
        NameOfBusiness :BusinessName,
        Profession : Profession,
        AddressOfBusiness : Address,
        PhoneNumber : Phone,
        ClosestLandmark : Landmark,
        USerEmail : Email

    }
    
    const option ={
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }    
    //console.log(userData)

    document.addEventListener('submit', function(){
        fetch('http://localhost:3000/insert', option).then(response =>{
            console.log(response.body.getReader())
        })

    })
   })
    

    function valid() {
        if(surname == null){
            alert("please input name")
            submitok = "false"
        }

        if(lastName == null){
            alert(" please input name")
            submitok = "false"
        }

        if(phone.lenght != 11){
            alert("Invalid phone number")
            submitok ="false"

        }

        if (submitok == "false"){
            return false;
        }
    }

