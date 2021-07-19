let button = document.getElementById('botao');
let reset = document.getElementById('reset');
let dado1 = document.querySelector('p:nth-child(1)');
let dado2 = document.querySelector('p:nth-child(2)');
let resultado = document.querySelector('p:nth-child(3)');
let final = document.querySelector('.fim > p:nth-child(1)');
let final2 = document.querySelector('.fim > p:nth-child(2)');
let final3 = document.querySelector('.fim > p:nth-child(3)');
let final4 = document.querySelector('.fim > p:nth-child(4)');
let final5 = document.querySelector('.fim > p:nth-child(5)');
let final6 = document.querySelector('.fim > p:nth-child(6)');
let final7 = document.querySelector('.fim > p:nth-child(7)');
let final8 = document.querySelector('.fim > p:nth-child(8)');
let final9 = document.querySelector('.fim > p:nth-child(9)');
let final10 = document.querySelector('.fim > p:nth-child(10)');
let final11 = document.querySelector('.fim > p:nth-child(11)');

let count = [];
for (let i = 0; i < 1000; i++){
    count[i] = 0;
}

const arrow = (x) => {
    for (let i=0;i<x;i++){
        let result2 = 0;
        
        let random = Math.floor(Math.random() * 6) + 1;
        let random2 = Math.floor(Math.random() * 6) + 1;

        dado1.innerText = random;
        dado2.innerText = random2;
        resultado.innerText = random + random2;
        
        result2 = random + random2;

        if (result2 === 2){
            count[1] = count[1] + 1;
            final.innerText = count[1];
            console.log(count[1]);
        } else if (result2 === 3){
            count[2] = count[2] + 1;
            final2.innerText = count[2];
            console.log(count[2]);
        } else if (result2 === 4){
            count[3] = count[3] + 1;
            final3.innerText = count[3];
            console.log(count[3]);
        } else if (result2 === 5){
            count[4] = count[4] + 1;
            final4.innerText = count[4];
            console.log(count[4]);
        } else if (result2 === 6){
            count[5] = count[5] + 1;
            final5.innerText = count[5];
            console.log(count[5]);
        } else if (result2 === 7){
            count[6] = count[6] + 1;
            final6.innerText = count[6];
            console.log(count[6]);
        } else if (result2 === 8){
            count[7] = count[7] + 1;
            final7.innerText = count[7];
            console.log(count[7]);
        } else if (result2 === 9){
            count[8] = count[8] + 1;
            final8.innerText = count[8];
            console.log(count[8]);
        } else if (result2 === 10){
            count[9] = count[9] + 1;
            final9.innerText = count[9];
            console.log(count[9]);
        } else if (result2 === 11){
            count[10] = count[10] + 1;
            final10.innerText = count[10];
            console.log(count[10]);
        }  else if (result2 === 12){
            count[11] = count[11] + 1;
            final11.innerText = count[11];
            console.log(count[11]);
        }

        reset.addEventListener('click', () => {
            dado1.innerText = 0;
            dado2.innerText = 0;
            resultado.innerText = 0;
            random = 0;
            random2 = 0;
            for (let y=0;y<x;y++){
                count[y] = 0;
            }
            final.innerText = 0;
            count[1] = 0;
            final2.innerText = 0;
            count[2] = 0;
            final3.innerText = 0;
            count[3] = 0;
            final4.innerText = 0;
            count[4] = 0;
            final5.innerText = 0;
            count[5] = 0;
            final6.innerText = 0;
            count[6] = 0;
            final7.innerText = 0;
            count[7] = 0;
            final8.innerText = 0;
            count[8] = 0;
            final9.innerText = 0;
            count[9] = 0;
            final10.innerText = 0;
            count[10] = 0;
            final11.innerText = 0;
            count[11] = 0;
        });
    }
        

}

button.addEventListener('click', () => {
    arrow(1000);
});









