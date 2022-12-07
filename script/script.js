/*1 prendo i target/
2. creo un ciclo da 1 a 100/ 
3 sostituisco i multipli di 3 con fizz
4- sostituisco i multipli di 5 con buzz
5- sostituisco i multipli di 3 e 5 con fizzbuzz
6-prendo i dati e stampo nel documento*/

//! punto 1************************************
const target = document.getElementById("altCol");
//! punto 2 **************************************
for( let i = 1; i <=100; i++){
    //! creo elementi moduli
    const fizOption = i % 3;
    const buzOption = i % 5;
    //! creo i testi per i target
    const fizElement = "fizz";
    const buzElement = "buzz";

    if( fizOption <= 0){
        i = fizElement;
        
    }else if (buzOption <=0){
        i = buzElement;
    }
    console.log(i);
}