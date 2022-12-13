function showProductDetail(id) {
    document.body.style.overflow = 'hidden'

    var productCard = document.getElementById(id).cloneNode(true)
    productCard.classList.add('selected')
    var overlay = document.querySelector('.overlay')

    overlay.appendChild(productCard)
    overlay.style.display = 'flex'

    overlay.addEventListener('click', function hideProductDetails() {
        productCard.parentNode.removeChild(productCard)
        overlay.style.display = 'none'

        document.body.style.overflow = 'scroll'
    })
}

function search_products() {
// Uses searchbar values as input then displays only the product-cards with the searched values.
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('product-card')

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = 'none';
        }
        else {
            x[i].style.display = 'block';
        }
    }
}

function showCategory(obj) {
    // This function filters the displayed products by sub-category.
    var x = document.getElementsByClassName('category')

    for (i = 0; i < x.length; i++) {
        if (x[i].classList.contains('active-category') && !x[i].getAttribute('sub').includes(obj.getAttribute('sub'))) {
            x[i].classList.remove('active-category')
        }
    }

    var y = document.getElementsByClassName(obj.getAttribute('category'))
    for (i = 0; i < y.length; i++) {
        if (x[i].getAttribute('sub').includes(obj.getAttribute('sub'))) {
            x[i].classList.add('active-category')

            if (x[i].childElementCount == 0) {
                alert("Oh no, seems we've run out of these!")
            }
        }
    }
}

function generateID() {
// Function to generate a unique 5 character id for each list item.
    var newID = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    var itemIDs = document.getElementsByClassName('cart-list-item')

    for (j = 0; j < 5; j++) {
        newID += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    for (i = 0; i < itemIDs.length; i++) {
        if (newID == itemIDs[i].id) {
            generateID()
        }
    }
    return (newID)
}

function sendEmail() {
    Email.send({
        SecureToken: "16738e5e-b4d1-40d4-8cec-68b00e6b21b1",
        To: "viroshens15@gmail.com",
        From: "mikehunt.6654@gmail.com",
        Subject: "Email from website through javascript",
        Body: "Did it work??"
    })

    .then(function (message) {
        alert("mail sent successfully")
    })
}