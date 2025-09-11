interface Alumno{

    nombre:String;

    apellido:String;

    edad:Number;

    email:string;

    nota:Number;

 }

 const alumno:Alumno={

    nombre: "Mario",

    apellido: "Lopez",

    edad: 35,

    email: "mario@gmail.com",

    nota: 4773997686

 }

 console.table(alumno)

 let mascotas = ['perro','gato','perico'];

 mascotas[1]='nuevo gato';

 mascotas.push('leon');

 console.log(mascotas);

 let tem:(Number|String)[]=[];

 tem.push(11);

 tem.push('once');