function checaUsoCss(usuario) {
    var csscheck = usuario.tecnologias.filter(element => element == "CSS");
    if(csscheck.length > 0) {
        return true;
    } else {
        return false;
    }
};

function checaUsuariosCss(usuarios) {
    usuarios.forEach(element => {
        if(checaUsoCss(element)) {
            console.log(`O usuário ${element.nome} trabalha com CSS`);
        }
    });
}


const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

checaUsuariosCss(usuarios);
