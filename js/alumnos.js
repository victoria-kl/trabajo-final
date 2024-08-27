//Usar un objeto lieral y convertirlo en JSON
// Datos iniciales
let talleres = `[
    {
        "nombre": "Emilia Samponi",
        "edad": 22,
        "email": "emiliasampo@gmail.com",
        "taller": 2
    },
    {
        "nombre": "Mariana Stempellato",
        "edad": 28,
        "email": "marisp@gmail.com",
        "taller": 3
    }
]`;

  //Convertir la cadena JSON a un objeto JavaScript
let alumnos = JSON.parse(talleres); //JSON.parse(localStorage.getItem('productos')) ||

  // Incorporar un nuevo alumno desde el formulario correspondiente a cada taller
document.getElementById('alumnosForm').addEventListener('submit', function(event) {
event.preventDefault();

let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const taller = document.getElementById('taller').value;

    const nuevoAlumno = {
        id: alumnos.length +1,
        nombre: nombre,
        edad: edad,
        email: email,
        taller: taller
    };

    alumnos.push(nuevoAlumno);

    // Convertir a JSON
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
    talleres = localStorage.getItem('talleres');
    console.log(alumnos);

    // // Actualizar
    // mostrarAlumnos();

// Limpiar el formulario
document.getElementById('alumnosForm').reset();
});
