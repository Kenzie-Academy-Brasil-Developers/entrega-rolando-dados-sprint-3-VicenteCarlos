const button = document.getElementById('botao');
const reset = document.getElementById('reset');
const p = document.querySelectorAll('.direita p');
const dado1 = document.querySelector('p:nth-child(1)');
const dado2 = document.querySelector('p:nth-child(2)');
const resultado = document.querySelector('p:nth-child(4)');
const final = document.querySelector('.direita > p:nth-child(1)');
const final2 = document.querySelector('.direita > p:nth-child(2)');
const final3 = document.querySelector('.direita > p:nth-child(3)');
const final4 = document.querySelector('.direita > p:nth-child(4)');
const final5 = document.querySelector('.direita > p:nth-child(5)');
const final6 = document.querySelector('.direita > p:nth-child(6)');
const final7 = document.querySelector('.direita > p:nth-child(7)');
const final8 = document.querySelector('.direita > p:nth-child(8)');
const final9 = document.querySelector('.direita > p:nth-child(9)');
const final10 = document.querySelector('.direita > p:nth-child(10)');
const final11 = document.querySelector('.direita > p:nth-child(11)');


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
            count[1]++;
            final.innerText = count[1];
        } else if (result2 === 3){
            count[2]++;
            final2.innerText = count[2];
        } else if (result2 === 4){
            count[3]++;
            final3.innerText = count[3];
        } else if (result2 === 5){
            count[4]++;
            final4.innerText = count[4];
        } else if (result2 === 6){
            count[5]++;
            final5.innerText = count[5];
        } else if (result2 === 7){
            count[6]++;
            final6.innerText = count[6];
        } else if (result2 === 8){
            count[7]++;
            final7.innerText = count[7];
        } else if (result2 === 9){
            count[8]++;
            final8.innerText = count[8];
        } else if (result2 === 10){
            count[9]++;
            final9.innerText = count[9];
        } else if (result2 === 11){
            count[10]++;
            final10.innerText = count[10];
        }  else if (result2 === 12){
            count[11]++;
            final11.innerText = count[11];
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
            final2.innerText = 0;       
            final3.innerText = 0;        
            final4.innerText = 0;           
            final5.innerText = 0;          
            final6.innerText = 0;         
            final7.innerText = 0;          
            final8.innerText = 0;         
            final9.innerText = 0;         
            final10.innerText = 0;
            final11.innerText = 0;
        });
    }
        

}

button.addEventListener('click', () => {
    arrow(1000);
    for (let i=1;i<=11;i++) {
        p.style.height = `${count[i]}px`
    }
});









