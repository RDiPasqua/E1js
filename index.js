const pizza = [
    {
        id : 1,
      nombre: "Mozzarela",
      ingredientes: [
        "Salsa de tomates",
        "Oregano",
        "Queso mozzarela",
      ],
      precio: 500,
    },
    {
      id: 2,
      nombre: "Napolitana",
      ingredientes: [
        "Salsa de tomates",
        "Oregano",
        "Queso mozzarela",
        "Rodajas de tomate",
      ],
      precio: 780,
    },
    {
      id: 3,
      nombre: "Palmitos",
      ingredientes: [
        "Salsa de tomates",
        "Oregano",
        "Queso mozzarela",
        "palmitos",
        "Salsa Golf"
      ],
      precio: 880,
    },
    {
      id: 4,
      nombre: "Fugazzeta",
      ingredientes: [
        "Salsa de tomates",
        "Oregano",
        "Queso mozzarela",
        "Cebollas",
      ],
      precio: 950,
    },
    {
      id: 5,
      nombre: "Rucula",
      ingredientes: [
        "Salsa de tomates",
        "Oregano",
        "Queso mozzarela",
        "Rucula",
        "Jamon"
      ],
      precio: 1100,
    },
    {
    id: 6,
      nombre: "Jamon y Morrones",
      ingredientes: [
        "Salsa de tomates",
        "Oregano",
        "Queso mozzarela",
        "Morrones",
        "Jamon"
      ],
      precio: 1500,
    }
  ]

pizzas.forEach( data => {    
    const idImpar = () => {
        if (data.id % 2 === 1 ){
            console.log(`Las pizzas con numero de ID impar son: ${data.nombre} y su ID es: ${data.id}.`)
        }
    }
    const pizzaMasBarata = () => {
        if ( data.precio < 600){
            console.log(`La pizza de menor valor con la que contamos es : ${ data.nombre} y su valor es: $${data.precio}.`)
        }
    }
    const listadoDePizzas = () => {
        console.log(`La pizza que ofrecemos es : ${data.nombre} y su  valor es de: $${data.precio}`)
    }

    const listadoDeIngredientes = () => {
        console.log(`${data.nombre} 
        ${data.ingredientes}`)
    }
    idImpar()
    listadoDeIngredientes()
    pizzaMasBarata()
    listadoDePizzas()

});
  















// resolucion corregida 


const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:
//---------------------------------------Ejercicio A--------------------------
// a)  Las pizzas que tengan un id impar.

//Opción 1
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`La ${pizza.nombre} tiene un id impar`);
  }
});
//Opción 2
const pizzasImpares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
pizzasImpares.forEach((pizza) =>
  console.log(`La ${pizza.nombre} tiene un id impar`)
);

//---------------------------------------Ejercicio B--------------------------
// b) ¿Hay alguna pizza que valga menos de $600?

const precioMenorA600 = (pizza) => pizza.precio < 600;

//Opción 1
if (pizzas.some(precioMenorA600)) {
  console.log("Hay pizzas con precio menor a $600");
} else {
  console.log("No hay pizzas con precio menor a $600");
}

//Opción 2
const pizzaBarata = pizzas.find(precioMenorA600);

if (!pizzaBarata) {
  console.log("No hay pizzas con precio menor a $600");
} else {
  console.log("Hay pizzas con precio menor a $600");
}

//---------------------------------------Ejercicio C--------------------------
// c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach((pizza) =>
  console.log(
    `Vení a probar nuestra ${pizza.nombre} por tan solo $${pizza.precio}`
  )
);

//---------------------------------------Ejercicio D--------------------------
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).
// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

pizzas.forEach((pizza) => {
  console.log(`Los ingredientes de la ${pizza.nombre} son:`);
  pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente));
});