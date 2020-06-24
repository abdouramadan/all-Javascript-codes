const contentBox = document.querySelector('.content__box')

// FUNCTION TO GET ELEMENTS SIBLING
const getSiblings = (ele) => {

    let siblingsArr = []

    let sibling = ele.parentNode.firstChild

    for(; sibling; sibling = sibling.nextSibling) {

        if(sibling.nodeType !== 1 || sibling === ele) continue

        siblingsArr.push(sibling)

    }

    return siblingsArr

}

// GET THE TAB LINKS
const tabLinks = document.querySelector('.tab__links')

const tabLinksChildren = tabLinks.children

const allContentBox = document.querySelectorAll('.content__box')


function activeLink(e) {
        
    e.preventDefault()

    const data = this.textContent

    const activeLink = this

    const activeLinkSiblings = getSiblings(this)

    allContentBox.forEach(box => {

        if(box.dataset.id.trim() === data.trim()) {

            let Boxsiblings = getSiblings(box)

            let randomClasses = ['left', 'right', 'top', 'bottom']

            let randomClass = Math.floor(Math.random() * randomClasses.length)

            box.classList.add('active__content__box')

            console.log(randomClasses[randomClass])

            box.classList.add(randomClasses[randomClass])

            Boxsiblings.forEach(box => {

                let boxTwo = box

                box.classList.remove('active__content__box')

                for(let i = 0; i < randomClasses.length; i++) {

                    boxTwo.classList.remove(randomClasses[i])
                    
                }

            })

            activeLink.children[0].classList.add('active')

            activeLinkSiblings.forEach(sibling => {

                sibling.children[0].classList.remove('active')

            })

        }

    })
    
}

Array.from(tabLinksChildren).forEach(li => {

    li.addEventListener('click', activeLink)

})
