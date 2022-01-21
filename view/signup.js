const myForm = document.querySelector('form')


document.addEventListener('submit', function(e) {
    e.preventDefault()
    
        

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
        fetch('http://localhost:5000/insert', option).then(response =>{
            console.log(response.body.getReader())
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
})
//const value = document.getElementById('select')

// const connect =  document.getElementById('connect').onclick = ()=>{
//     location.href =""

// }

// connect.document.addEventListener('click', (e) =>{
//   const response= await fetch('http://localhost:5000/pay')
// })

// new page
// const display = document.getElementById('select-result')

// function select(clicked){
//     var click = clicked.toString()
    

//     const noTab = "Something went wrong we could not find any result"

    
    
//     async function post(){
//         await location.assign('./display.html')
//         const response = await fetch(`http://localhost:5000/send?Profesion=${click}`)
//         var returnData = await response.json()
//         console.log(returnData)
//         if (response) {
//             hideloader();
//         }
//         if (returnData.length == 0){
//             noShow()
//         }
        
//         window.onload=show(returnData);
//     }

//     window.onload = post()

//     function hideloader() {
//         document.getElementById('select').style.display = 'none';
//     }
//     function noShow() {
//         location.assign("display.html")=() =>{
//             document.getElementById("main").innerHTML = noTab
//         }
        
//     }   
//     function show(returnData) {
//         let tab = 
//             `<tr>
//               <th>Surname</th>
//               <th>First Name</th>
//               <th>Gender</th>
//               <th>Business Name</th>
//               <th>Contact</th>
//              </tr>`;
//         // Loop to access all rows 
//         for (let r of returnData) {
//             tab += `<tr> 
//         <td>${r.Surname} </td>
//         <td>${r.Name}</td>
//         <td>${r.Gender}</td>
//         <td>${r.NameOfBusiness}</td>
//         <td><button id ="connect" class = "float-left submit-button">View profile</button></td>             
//         </tr>`;
//         }
//     // Setting innerHTML as tab variable
//     document.getElementById("main").innerHTML = tab;
// }}

// document.addEventListener('submit', function(e) {
//     e.preventDefault()
//         console.log('form submitted')
//     search = document.getElementById('search-txt').value

//     async function post(){
//         window.location.assign('./display.html')
//         const response = await fetch(`http://localhost:5000/send?Profesion=${search}`)
//         var returnData = await response.json()
//         console.log(returnData)
//         if (response) {
//             hideloader();
//         }
//         show(returnData);
//     }

//     post()

//     function hideloader() {
//         document.getElementById('select').style.display = 'none';
//     }
        
//     function show(returnData) {
//         let tab = 
//             `<tr>
//               <th>Surname</th>
//               <th>First Name</th>
//               <th>Gender</th>
//               <th>Business Name</th>
//               <th> profession</th>
//              </tr>`;
//         // Loop to access all rows 
//         for (let r of returnData) {
//             tab += `<tr> 
//         <td>${r.Surname} </td>
//         <td>${r.Name}</td>
//         <td>${r.Gender}</td>
//         <td>${r.NameOfBusiness}</td>
//         <td>${r.Profession}</td>             
//         </tr>`;
//         }
//     }
// })

