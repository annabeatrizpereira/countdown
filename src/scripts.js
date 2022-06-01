/* countdown */
const launchIn = new Date("2023, 05, 25, 00:00").getTime()

setInterval(() => {
    const today = new Date().getTime()

    const difference = launchIn - today

    let seconds = Math.floor(difference % (1000 * 60) / 1000) 
    let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
    let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let days = Math.floor(difference / (1000 * 60 * 60 * 24))

    function addZeroIn(value) {
        let operation = (String(value).length === 1) ? `0${value}` : value

        return operation;
    }
    
    let tableRow = document.querySelector("#table-row")
    tableRow.innerHTML = `<td>${addZeroIn(days)}</td> <td class="p-4">:</td>
    <td>${addZeroIn(hours)}</td> <td class="p-4">:</td>
    <td>${addZeroIn(minutes)}</td> <td class="p-4">:</td>
    <td>${addZeroIn(seconds)}</td>`

})

/* modal */
const button = document.querySelector("#btn-subscribe")
const modal = document.querySelector("#modal")
const save = document.querySelector("#btn-save")
const arrow = document.querySelector("#arrow-back")

button.addEventListener("click", () => {
    modal.classList.remove("hidden")
})

arrow.addEventListener("click", () => {
    modal.classList.add("hidden")
})

save.addEventListener("click", () => {
    modal.classList.add("hidden")
})
