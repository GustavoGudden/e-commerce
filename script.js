const inputcamp = document.querySelector(".nome")
const contentMain = document.querySelector("main")
const btnenviar = document.querySelector(".button")


const validadeinput = () => inputcamp.value.trim().length > 0;

const newPost = () => {

    const inputIsValid = validadeinput();
    if (!inputIsValid) {
        return inputcamp.classList.add('error');
    }



    const containerPrincipal = document.createElement('div')
    containerPrincipal.classList.add('div-container');


    const containerContent = document.createElement('p')
    containerContent.innerText = inputcamp.value;


    containerPrincipal.appendChild(containerContent);
    contentMain.appendChild(containerPrincipal);



    inputcamp.value = "";

}


const handleInputChange = () => {
    const inputIsValid = validadeinput();
    if (inputIsValid == true) {
        return inputcamp.classList.remove('error');
    }
}



inputcamp.addEventListener('change', () => handleInputChange())

btnenviar.addEventListener('click', () => newPost())