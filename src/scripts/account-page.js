const cameFromShoppingCart = true;
const isAuthorised = false;

const authPageForms = document.querySelectorAll(".auth-page__form");
if (authPageForms.length > 0) {
    for (let index = 0; index < authPageForms.length; index++) {
        const authPageForm = authPageForms[index];
        authPageForm.addEventListener('click', function(e) {
            authPageFormSent(authPageForm);
        })
    }
}

function authPageFormSent(authPageForm) {
    if (accountLogged == true) {
        window.location.href = "../pages/shopping-cart.html";
    };
}

