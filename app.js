// https://api.adviceslip.com/advice
// will generate random advice 

let btnEl = document.querySelector(".advice-btn")
btnEl.addEventListener("click", () => {
    displayAdvice()
})


async function fetchAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()
    return data
}

async function displayAdvice() {
    let adviceTitleEl = document.querySelector('.advice-title')
    let adviceTextEl = document.querySelector('.advice-text')
    let data = await fetchAdvice()
    adviceTitleEl.innerHTML = `ADVICE #${data['slip']['id']}`
    adviceTextEl.innerHTML = `${data['slip']['advice']}`
    console.log(data)
}
