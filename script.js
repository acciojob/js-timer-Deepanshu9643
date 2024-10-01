// write js code here if required
function timer(){
    const now = new Date()


    let day = String(now.getDate()).padStart(2,`0`)
    let month = String(now.getMonth()+1).padStart(2,`0`)
    let year = now.getFullYear()
    let second = String(now.getSeconds()).padStart(2,`0`)
    let minute = String(now.getMinutes()).padStart(2,`0`)
    let hour = String(now.getHours()).padStart(2,`0`)

    let display = `${day}:${month}:${year}, ${hour}/${minute}/${second}`

    document.querySelector("#timer").innerText = display
}
setInterval(timer,1000)
timer()