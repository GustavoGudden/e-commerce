const inputcamp = document.querySelector(".nome")
const contentMain = document.querySelector("main")
const btnenviar = document.querySelector(".button")
const btnfiltrar = document.querySelector('.filtro')




const divclasses = document.querySelectorAll('div')
const inputpreco = document.querySelector('.preco')






//checa se for nulo o campocom imput 
const validadeinput = () => inputcamp.value.trim().length > 0;


//funçao que cria uma nova div 
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

//atualiza o campo com input quando digita 
const handleInputChange = () => {
    const inputIsValid = validadeinput();
    if (inputIsValid == true) {
        return inputcamp.classList.remove('error');
    }
}




//filtra as div 

const filtra = () => {

    console.log(divclasses)
}







//eventos 

inputcamp.addEventListener('change', () => handleInputChange())

btnenviar.addEventListener('click', () => newPost())

btnfiltrar.addEventListener('click', () => filtra())
