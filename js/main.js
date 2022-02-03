
//Funciones

const cleanGame = () => {
    team1 = "";
    team2 = "";
    ganador = "";

   
    

    cambiaPantalla(1);
}

const cambiaPantalla = (cambio) => {

    //Generamos la variable concatenada que nos advierte a que pantalla 
    //queremos ir.
    let pantallaDeseada = "screen" + cambio;
    

    //Cada vez que entramos en la funcion se regenera el array con todas las pantallas, ya 
    //que anteriormente al filtrar algunas quedaban fuera, así empieza de nuevo el proceso
    let arrayPantallas = ["screen1","screen2","screen3","screen4"];

    //Aquí filtramos del array aquella pantalla a la que queremos ir, ES DECIR,
    //guardamos todas las pantallas menos aquella a la que queremos ir, ya que al resto a todas
    //les queremos dar la propiedad display none
    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    //Antes de dar la propiedad display none al resto de pantallas, decimos a la que SI QUEREMOS
    //ver que tenga un display block, que la hará visible en el DOM (la web)
    document.getElementById(pantallaDeseada).style.display = "block";


    //Recorremos el array de las pantallas y a todas las que hay les damos la propiedad display como none
    for (let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
        
    }


}

const selectCar = (nCoche) => {
    
    if(team1 == ""){
        team1 = allCars[nCoche];
        let cochePrimero = document.getElementById(nCoche);
        let datosCoche = document.getElementById("data"+ 1);
        //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él
        cochePrimero.onclick = "";
        cochePrimero.classList.add("carSelected");
        datosCoche.innerHTML = `${team1.marca}`;
    
        
    } else if (team2 == ""){
        team2 = allCars[nCoche];
        let cocheSegundo = document.getElementById(nCoche);
        cocheSegundo.onclick = "";
        cocheSegundo.classList.add("carSelected");

        //una vez he escogido los dos coches.........

        

        setTimeout(()=>{
            cambiaPantalla(3);
            displayGame();
        },500);
    }
}

const displayGame = () => {
    console.log(team1,team2,"el ganador es.... ",ganador);

    displayTeam1.innerHTML = `<img class="foto" src="img/${team1.marca}.jpg" alt="primer_coche"/>`;
    statsTeam1.innerHTML = `<div>${team1.marca}<br>${team1.modelo}<br>${team1.combustible}</div>`;
    
    displayTeam2.innerHTML = `<img class="foto" src="img/${team2.marca}.jpg" alt="segundo_coche"/>`;
    statsTeam2.innerHTML = `<div>${team2.marca}<br>${team2.modelo}<br>${team2.combustible}</div>`;
                                           
}

const drive = () => {

    if((team1.metros >= metros_circuito) || (team2.metros >= metros_circuito)){

        ganador = team1;

        cambiaPantalla(4);

        winner.innerHTML = `${team1.marca}`;



    }

    team1.acelerar();

    team2.acelerar();

    console.log(meters1.innerHTML = `<p>${team1.metros}</p>`);
    console.log(meters2.innerHTML = `<p>${team2.metros}</p>`);



}

//Localización elementos HTML desde JS

let displayTeam1 = document.getElementById("pictureCar1");
let displayTeam2 = document.getElementById("pictureCar2");
let statsTeam1 = document.getElementById("stats1");
let statsTeam2 = document.getElementById("stats2");
let meters1 = document.getElementById("meters1");
let meters2 = document.getElementById("meters2");
let winner = document.getElementById("winner");


//Ejemplo código detector teclas pulsadas en una screen concreta
// let screen3 = document.getElementById("screen3");

// document.body.addEventListener("keydown", (ev)=>{
            
//     if(screen3.style.display == "block"){
//         //console.log("a almorzar");
//     }

// });

//Algortimo