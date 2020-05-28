
function exibeUsuarios(usuarios) {
    usuarios.forEach(usuario => {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias[0]}, ${usuario.tecnologias[1]}.`);
    });
}
    
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];


exibeUsuarios(usuarios);