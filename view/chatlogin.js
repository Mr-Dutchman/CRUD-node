document.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch('http://localhost:5000/roomdirect')
})