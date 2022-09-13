const pizzas = [
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
  