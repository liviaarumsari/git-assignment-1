let textNama = document.querySelector("#display-nama")
let textRole = document.querySelector("#display-role")
let textAvailability = document.querySelector("#display-availability")
let textUsia = document.querySelector("#display-usia")
let textLokasi = document.querySelector("#display-lokasi")
let textPengalaman = document.querySelector("#display-pengalaman")
let textEmail = document.querySelector("#display-email")

let inputNama = document.querySelector("#form-nama")
let inputRole = document.querySelector("#form-role")
let inputAvailability = document.querySelector("#form-availability")
let inputUsia = document.querySelector("#form-usia")
let inputLokasi = document.querySelector("#form-lokasi")
let inputPengalaman = document.querySelector("#form-pengalaman")
let inputEmail = document.querySelector("#form-email")

const displayData = () => {
    inputNama.value = textNama.textContent
    inputRole.value = textRole.textContent
    inputAvailability.value = textAvailability.textContent
    inputUsia.value = textUsia.textContent
    inputLokasi.value = textLokasi.textContent
    inputPengalaman.value = textPengalaman.textContent
    inputEmail.value = textEmail.textContent
}

displayData()

document.querySelector("#profile-form").addEventListener('submit', (event) => {
    event.preventDefault()

    textNama.textContent = inputNama.value
    textRole.textContent = inputRole.value
    textAvailability.textContent = inputAvailability.value
    textUsia.textContent = inputUsia.value
    textLokasi.textContent = inputLokasi.value
    textPengalaman.textContent = inputPengalaman.value
    textEmail.textContent = inputEmail.value
})