let button = document.querySelector('#btnGetData');

button.addEventListener("click", () => {

    $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data){

            let displayDiv = document.createElement('div');
            displayDiv.id = "dane-programisty";
            button.insertAdjacentElement("afterend", displayDiv);
            displayDiv.innerText += data.firma + '\n';
            displayDiv.innerText += data.imie + '\n';
            displayDiv.innerText += data.nazwisko + '\n';
            displayDiv.innerText += data.zawod + '\n';

        })
});