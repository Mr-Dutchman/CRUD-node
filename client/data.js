// const value = document.getElementById('select')
const display = document.getElementById('select-result')
function select(clicked){
    var click = clicked.toString()




    
    
    async function post(){
        const response = await fetch(`http://localhost:8000/send?Profesion=${click}`)
        var returnData = await response.json()
        console.log(returnData)
        if (response) {
            hideloader();
        }
        show(returnData);
    }

    post()

    function hideloader() {
        document.getElementById('select').style.display = 'none';
    }
        
    function show(returnData) {
        let tab = 
            `<tr>
              <th>Surname</th>
              <th>First Name</th>
              <th>Gender</th>
              <th>Business Name</th>
              <th> profession</th>
             </tr>`;
        // Loop to access all rows 
        for (let r of returnData) {
            tab += `<tr> 
        <td>${r.Surname} </td>
        <td>${r.Name}</td>
        <td>${r.Gender}</td>
        <td>${r.NameOfBusiness}</td>
        <td>${r.Profession}</td>             
        </tr>`;
        }
    // Setting innerHTML as tab variable
    document.getElementById("result").innerHTML = tab;
}
}
// var ref = { 
// id: "60e353cc842477c06b828da8", 
// Surname: "Fidelis",
//  Name: "Ehis",
// ​​
// AddressOfBusiness: "sdg",
// ​​
// ClosestLandmark: "Uniben",
// ​​
// Date: "01/01/2020",
// ​​
// Gender: "male",
// Name: "Ehis",
// ​​
// NameOfBusiness: "aff",
// ​​
// PhoneNumber: "07060464123",
// ​​
// Profession: "Plumber",
// ​​
// Surname: "Fidelis",
// ​​
// USerEmail: "meelisfidelis@gmail.com" ,

            
// }

document.addEventListener('submit', function(e) {
    e.preventDefault()
        console.log('form submitted')
    search = document.getElementById('search-txt').value
    post()
    function post(){(fetch("http://localhost:8000/send", search))}
})