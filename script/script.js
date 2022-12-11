/*1 prendo i target/
2. creo un ciclo da 1 a 100/ 
3 sostituisco i multipli di 3 con fizz
4- sostituisco i multipli di 5 con buzz
5- sostituisco i multipli di 3 e 5 con fizzbuzz
6-prendo i dati e stampo nel documento*/

//! punto 1************************************
const rowTarget = document.getElementById("row-target");
//! punto 2 **************************************



for( let i = 1; i <=100; i++){
    let cols= document.createElement("div")
    cols.className = "col-2";
    cols.classList.add ("border" ,"altCol", "rounded-3", "text-center","py-4");
    
    
    //! creo i testi per i target
   
   
    const fizElement = "fizz";
    const buzElement = "buzz";
    const fizbuz = "Fizz Buzz";

   /*3 sostituisco i multipli di 3 con fizz
    4- sostituisco i multipli di 5 con buzz
    5- sostituisco i multipli di 3 e 5 con fizzbuzz
    */
   
   
   
    if( i % 3 === 0 && i % 5 === 0){
       const colWrapper = document.createElement("p")
       colWrapper.append(fizbuz);
       cols.appendChild(colWrapper)
       cols.classList.add("bg-dark", "text-light")
    }else if ( i % 5 === 0){
        const colWrapper = document.createElement("p")
        colWrapper.append(buzElement);
        cols.appendChild(colWrapper);
        cols.classList.add("bg-dark", "text-light")

    }else if(i % 3 === 0){
        const colWrapper = document.createElement("p")
       colWrapper.append(fizElement);
       cols.appendChild(colWrapper)
       cols.classList.add("bg-success", "text-light")

    }
    else{
        const colWrapper = document.createElement("p")
        colWrapper.append(i);
        cols.appendChild(colWrapper)  
        cols.classList.add("bg-danger", "text-light")
  
    }
    rowTarget.appendChild(cols);
    console.log(cols)
}