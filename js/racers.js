
//Declaración de la clase Coche
class Coche {

    constructor(modelo, marca, velocidad, peso, frenada, combustible) {
        this.modelo = modelo;
        this.marca = marca;
        this.velocidad = velocidad;
        this.peso = peso;
        this.frenada = frenada;
        this.combustible = combustible;
        this.metros = 0;
    }

    acelerar() {
        return this.metros += 100;
    }

    frenar() {
        return this.velocidad = 0;
    }

};

//Instanciando corredores...

let coche1 = new Coche("Gt","bmw",250,2000,50,"Gasolina")
let coche2 = new Coche("Celica","chevrolet",251,1900,70,"Gasolina");
let coche3 = new Coche("TestaRossa","jaguar",270,2300,55,"Gasolina");
let coche4 = new Coche("Camaro","mercedes",299,1750,90,"Diesel");

//Genero un traductor/diccionario de JS

let allCars = {
    1 : coche1,
    2 : coche2,
    3 : coche3,
    4 : coche4
}

//Generando variables básicas de entorno

let team1 = "";

let team2 = "";

let ganador = "";

let metros_circuito = 2000;
