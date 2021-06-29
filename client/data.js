document.getElementById("plumber").onclick = function get(){
    var keyword = document.getElementById("plumber").value
    console.log(keyword)
    const data = {
        Profession:keyword
    }
    const option = {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    
    post()
    function post(){(fetch("http://localhost:8000/send", option))}
    
}


// const option = {
//     method: 'get',
//     headers:{
//         'Content-Type': 'application/json'
//     },
    
// }    
// fetch("http://localhost:8000/", option)


document.getElementById("mechanic").onclick = function get1(){
    var data = document.getElementById("mechanic").value
    console.log(data)
    // fetch("http://localhost:8000/", data)
    // const data = document.getElementById('data').innerHTML= response
}
document.getElementById("sound").onclick = function get2(){
    var data = document.getElementById("sound").value
    console.log(data)
    // fetch("http://localhost:8000/", data)
    // const data = document.getElementById('data').innerHTML= response
}
document.getElementById("driver").onclick = function get3(){
    var data = document.getElementById("driver").value
    console.log(data)
    // fetch("http://localhost:8000/", data)
    // const data = document.getElementById('data').innerHTML= response
}
document.getElementById("programmer").onclick = function get4(){
    var data = document.getElementById("programmer").value
    console.log(data)
    // fetch("http://localhost:8000/", data)
    // const data = document.getElementById('data').innerHTML= response
}