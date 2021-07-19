// const value = document.getElementById('select')
const display = document.getElementById('select-result')
function select(clicked){
    var click = clicked.toString()




    
    
    async function post(){
        const response = await fetch(`https://linkmetoyou.herokuapp.com//send?Profesion=${click}`)
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
}}

document.addEventListener('submit', function(e) {
    e.preventDefault()
        console.log('form submitted')
    search = document.getElementById('search-txt').value

    async function post(){
        const response = await fetch(`https://linkmetoyou.herokuapp.com/send?Profesion=${search}`)
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
    }
})