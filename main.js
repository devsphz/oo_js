// Classe de abstração
class Veiculo {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    descricao() {
        return `Modelo: ${this.marca} / Marca: ${this.modelo} / Ano: ${this.ano} / Cor: ${this.cor} /`;
    }
}
//---------------------------------------------------------------------------------------------------//

// 1°Classe herdeira 
class Carro extends Veiculo{
    constructor(marca, modelo, ano, cor, portas) {
        super(marca, modelo, ano, cor);
        this.portas = portas;
    }

    descricao(){
        return `${super.descricao()} ${this.portas} portas`;
    }
}
//--------------------------------------------------------//

// 2°Classe herdeira
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cor, cilindradas) {
        super(marca, modelo, ano, cor);
        this.cilindradas = cilindradas;
    }

    descricao(){
        return `${super.descricao()} ${this.cilindradas} cilindrada`;
    }
}
//-----------------------------------------------------------------//

// 3 instâncias de objetos
const carro1 = new Carro('Toyota', 'Corolla', 2025, 'cinza', 4);
const carro2 = new Carro('Honda', 'Civic', 2021, 'branco', 4);
const moto1 = new Moto('Kawasaki', 'Ninja ZX-10R ABS', 2023, 'verde', 998);
//-----------------------------------------------------------------------//

// retornar as descrições das instâncias
console.log(carro1.descricao());
console.log(carro2.descricao());
console.log(moto1.descricao());  
//-----------------------------------------------------------------------//