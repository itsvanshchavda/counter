

let count = 0;

const value = document.querySelector('#value');
const btn = document.querySelectorAll(".btn");


btn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        const styles = e.currentTarget.classList;

        // Decrese the count
        if (styles.contains('descrease')) {
            count--;
            
        //Increase the count
        } else if(styles.contains('increase')){
            count++;

        //Reset the count
        } else {
            count = 0;
        }

        //Adding colors 

        if(count > 0){
            value.style.color = 'green';
        } 

        if(count < 0){
            value.style.color = 'red';
        }

        if(count === 0){
            value.style.color = 'black';
        }

        // Ternary oprator : value.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';


        value.textContent = count;

    });
});