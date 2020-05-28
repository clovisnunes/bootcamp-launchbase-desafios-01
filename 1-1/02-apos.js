// Cálculo de aposentadoria
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if(sexo == "M" && contribuicao >= 35) {
    if(idade + contribuição >= 95) {
        console.log("Silvana, você pode se aposentar!");
    } else {
        console.log("Silvana, você ainda não pode se aposentar!");
    }
} else if (sexo == "F" && contribuicao >= 30) {
    if(idade + contribuicao >= 85) {
        console.log("Silvana, você pode se aposentar!");
    } else {
        console.log("Silvana, você ainda não pode se aposentar!");
    }
} else {
    console.log("Silvana, você ainda não pode se aposentar!");
}
