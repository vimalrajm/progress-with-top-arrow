// initial setup
const arrow = document.querySelector('.arrow')
const numProgress = 3
const progressArray = []

// set the array in the middle of first progress
const firstProgress = document.querySelector('.progress1')
arrow.style.left = `${firstProgress.getBoundingClientRect().width / 2}px`

for (let i=0; i<numProgress; i++) {
    progressArray.push(document.querySelector(`.progress${i+1}`))
}

progressArray.forEach((progress, index) => {
    progress.addEventListener('click', (e) => {
        const { width } = progress.getBoundingClientRect()
        const position = index === 0 ? width / 2 : (width / 2) + (width * index)
        arrow.style.left = `${position}px`
    })
})