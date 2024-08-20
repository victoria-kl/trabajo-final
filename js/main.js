// Almacenamos en el local storage
sessionStorage.setItem("bienvenida", "¡Bienvenidx a Ecológicas!")
let saludo = sessionStorage.getItem("bienvenida")
console.log(saludo)

// Almacenamos con un prompt para setear los datos del usuario
localStorage.setItem("nombre", prompt("Ingrese su nombre: "))
let nombre = localStorage.getItem("nombre")
console.log("El nombre ingresado es: " + nombre)
alert ("¡Bienvenida a Ecológicas, " + nombre + "!")

// Escribimos los nombres de las profesoras que dictarán los cursos
let profesoras = ['Karen Müller', 'Victoria Klein', 'Florencia Spañol'];
console.log(profesoras) 

// Agregamos una profesora nueva que se suma al staff
let bd= `[
    {
    "id": 1,
    "name": "Karen Müller"
    },
    {
    "id": 2,
    "name": "Victoria Klein"
    },
    {
    "id": 3,
    "name": "Florencia Spañol"
    }
]`

  // Paso 1: Convertir la cadena JSON a un objeto JavaScript
let objeto = JSON.parse(bd);
    const nuevoElemento = {
    id: 4,
    name: "Juana Perez",
    };

objeto.push(nuevoElemento);

  //  Convertir el objeto JavaScript modificado de nuevo a una cadena JSON
let datoConvertido = JSON.stringify(objeto);
// console.log(datoConvertido);

  // Almacenar la base de datos actualizada en localStorage
localStorage.setItem('bd', datoConvertido);
let mensaje =  localStorage.getItem('bd');
console.log(mensaje)


function talleres(nombre, dias, horario, duracion, encuentros, descripcion, temas, objetivo, direccion) {
    this.nombre = nombre;
    this.dias = dias;
    this.horario = horario;
    this.duracion = duracion;
    this.encuentros = encuentros;
    this.descripcion = descripcion;
    this.temas = temas;
    this.objetivo = objetivo,
    this.direccion = direccion;
}

const taller1 = new talleres ("Taller de Compostaje", "Lunes y Miércoles", 17.30, "2 horas", 8, "Aprende a transformar residuos orgánicos en compost nutritivo.","Materiales compostables, técnicas de compostaje, mantenimiento.","Reducir residuos y mejorar el suelo mediante compostaje en casa.", "Calle Falsa 123")
const taller2 = new talleres ("Taller de Reciclaje", "Martes y Jueves", 17.30, "2 horas", 8, "Conoce cómo separar y reciclar materiales correctamente.", "Clasificación de materiales, preparación para reciclaje, reducción de residuos.", "Mejorar la separación de reciclables y reducir la generación de desechos.", "Calle Falsa 123")
const taller3 = new talleres ("Ecología para niñes", "Sábado", 11.00, "1 hora y media", 16, "Introduce a les niñes en conceptos básicos de ecología a través de juegos y actividades.", "Ecosistemas, conservación, proyectos prácticos.", "Desarrollar una conciencia ambiental y fomentar el amor por la naturaleza en les niñes.", "Calle Falsa 123")

console.log(talleres);
console.log(taller1);
console.log(taller2);
console.log(taller3);


