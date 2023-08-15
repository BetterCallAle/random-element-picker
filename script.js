export default function mainFunction(){
    const input = document.getElementById('text-input');
    const btnSubmit = document.getElementById('add-btn');
    const listWrapper = document.querySelector('.list-elements');
    const btnGenerate = document.getElementById('generate-response');
    const resultsWrapper = document.querySelector('.results');

    let values = [];

    btnSubmit.addEventListener('click', (e)=>{
        e.preventDefault();

        const inputValue = input.value;

        if(inputValue){
            values.push(inputValue);
    
            listWrapper.innerHTML = '';
    
            values.forEach((value, index) => {
                listWrapper.innerHTML += `<li>${value}</li>`
            })
    
            input.value = '';
        }

        /* const deleteBtns = document.querySelectorAll('.delete-btn');

        deleteBtns.forEach(btn => {
            btn.addEventListener('click', ()=>{
                const btnIndex = parseInt(btn.getAttribute('dataIndex'));
                values.splice(btnIndex, 1);
                console.log(values);
                listWrapper.innerHTML = '';
                values.forEach((value, index) => {
                    listWrapper.innerHTML += `<li>${value} <button class="delete-btn" dataIndex="${index}">ELIMINA</button></li>`
                })
            })
        }) */

    })

    btnGenerate.addEventListener('click', (e)=>{
        const randomIndex = Math.floor(Math.random() * (values.length - 0) ) + 0;
        console.log(randomIndex);
        resultsWrapper.innerHTML = `<h1>IL RISULATO SCELTO È ${values[randomIndex]}</h1>`
    })
}
