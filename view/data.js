//const display = document.getElementById('select-result')
//document.addEventListener('DOMContentLoaded',)
//async function chat() {
//    await fetch('http://localhost:5000/chat')
//}

const noTab = "Something went wrong we could not find any result"

async function select(clicked){
    var click = clicked.toString()

post()
    async function post(){ 
        
        const response = await fetch(`http://localhost:5000/send?Profesion=${click}`)
        var returnData = await response.json()
        console.log(returnData)
        hideloader();
        //show(returnData);
    }

  

    function hideloader() {
        document.getElementById('select').style.display = 'none'
    }
    




    function show(returnData) {
        const data = document.querySelector('table tbody')
        if (returnData.lenght === 0){
            data.innerHTML = "<tr><td class ='no-data' colspan ='5'> No Data Found</td></tr>"
            return
        }

        let tab = ""
        

        // Loop to access all rows 
        for (let r of returnData) {
            tab += `<tr> 
                <td>${r.Surname} </td>
                <td>${r.Name}</td>
                <td>${r.Gender}</td>
                <td>${r.NameOfBusiness}</td>
                <td><button id ="connect" class = "submit-button" onclick = 'chat' >Request</button></td>             
            </tr>`;
        }
        // Setting innerHTML as tab variable
        data.innerHTML = tab;
    }
}

// document.addEventListener('submit', function(e) {
//     e.preventDefault()
//         console.log('form submitted')
//     search = document.getElementById('search-txt').value

//     async function tpost(){
//         const response = await fetch(`http://localhost:5000/send?Profesion=${search}`)
//         var returnData = await response.json()
//         console.log(returnData)
//         if (response) {
//             hideloader();
//         }
//         show(returnData);
//     }

 

// //     function hideloader() {
// //         document.getElementById('select').style.display = 'none';
// //     }
        
// //     function show(returnData) {
// //         let tab = 
// //             `<tr>
// //               <th>Surname</th>
// //               <th>First Name</th>
// //               <th>Gender</th>
// //               <th>Business Name</th>
// //               <th> profession</th>
// //              </tr>`;
// //         // Loop to access all rows 
// //         for (let r of returnData) {
// //             tab += `<tr> 
// //         <td>${r.Surname} </td>
// //         <td>${r.Name}</td>
// //         <td>${r.Gender}</td>
// //         <td>${r.NameOfBusiness}</td>
// //         <td>${r.Profession}</td>             
// //         </tr>`;
// //         }
// //     }
// })

