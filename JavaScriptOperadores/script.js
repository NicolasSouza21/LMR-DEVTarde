function boasVindas() {
    let nome;
let sobrenome;

nome = prompt("Digite seu nome","Digite aqui");
sobrenome = prompt("Digite seu nome","Digite aqui");

alert("Olá"+nome+" "+sobrenome); 
}
function somarNumero(){
let v1; 
let v2;
v1=prompt("Digite o primeiro valor","Digite aqui")
v2=prompt("Digite o segundo valor", "Digite aqui")
total = Number(v1) + Number(v2);
alert("A soma de "+v1+" "+v2+" é "+total )
}
function subtrairNumero(){
    let v1; 
    let v2;
    v1=prompt("Digite o primeiro valor","Digite aqui")
    v2=prompt("Digite o segundo valor", "Digite aqui")
    total = Number(v1) - Number(v2);
    alert("A soma de "+v1+" "+v2+"é "+total )   
    }
    function dividirNumero(){
        let v1; 
        let v2;
        v1=prompt("Digite o primeiro valor","Digite aqui")
        v2=prompt("Digite o segundo valor", "Digite aqui")
        while (v2==0) {
            alert("não existe número divisivel por 0")
        if(v2==0){
            
                v2=prompt("Digite o segundo valor", "Digite aqui")}
                
            
            total = Number(v1) / Number(v2);
            alert("A soma de "+v1+" "+v2+"é "+total )
        }
        
        
        }
        function multiplicarNumero(){
            let v1; 
            let v2;
            v1=prompt("Digite o primeiro valor","Digite aqui")
            v2=prompt("Digite o segundo valor", "Digite aqui")
            total = Number(v1) * Number(v2);
            alert("A soma de "+v1+" "+v2+"é "+total )
            }
