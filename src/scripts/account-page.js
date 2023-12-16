const cameFromShoppingCart = true;
const isAuthorised = false;

if (isAuthorised) {

} else {
    function checkValidity(event) {
        const formNode = event.target.form
        const isValid = formNode.checkValidity()
      
        formNode.querySelector('button').disabled = !isValid
    }

    function onSuccess(formNode) {
        alert('Ваша заявка отправлена!');
    }

    function onError(error) {
        alert(error.message)
      }
    
    async function sendData(data) {
        return await fetch('/api/apply/', {
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },
          body: data,
        })
      }
    
    function serializeForm(formNode) {
        const { elements } = formNode;

        const data = new FormData();
        
        Array.from(elements)
            .filter((item) => !!item.name)
            .forEach((element) => {
                const { name, type } = element;
                const value = type === 'checkbox' ? element.checked : element.value;
                
                data.append(name, value)
            })
            
        
        return data;
    }

    async function handleFormSubmit(event) {
        event.preventDefault();

        const data = serializeForm(event.target);
        const { status } = await sendData(data);

        if (status === 200) {
            onSuccess(event.target)
        } else {
            onError(error)
        }
      }

    const authPageLoginForm = document.querySelector(".auth-page__login").firstElementChild;
    const authPageRegistrationForm = document.querySelector(".auth-page__registration").firstElementChild;
    authPageLoginForm.addEventListener('submit', handleFormSubmit)
    authPageLoginForm.addEventListener('input', checkValidity);
    // authPageRegistrationForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     handleFormSubmit
    // })
    // authPageRegistrationForm.addEventListener('input', checkValidity);

    // function authPageLoginFormSent(authPageForm) {
    //     if (isAuthorised == true && cameFromShoppingCart) {
    //         window.location.href = "../pages/shopping-cart-page.html";
    //     };
    // }
}
