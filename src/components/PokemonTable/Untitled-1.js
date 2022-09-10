class Pokemon {
    constructor(name, type) {
        this.name = name
        this.type = type
    }

    lazer() {
        console.log('pew pew pew!')
    }
}

//шаблон по которому можно создать сущности
//сущности будут иметь свойства класса + добавленные к ним новые свойства

const pokemonOne = new Pokemon('bulbasaur', 'water')
console.log(pokemonOne)
const pokemonTwo = new Pokemon('X', 'Y')
console.log(pokemonTwo)
/* pokemonOne.lazer()
 *///создаем пустой объект
//присваеваем ему параметры из конструктора и методы класса и значение this указывает на наш новый объект

class MegaPokemon extends Pokemon {
    constructor(name, type, size) {
        super(name,type)
        this.size = size
    }
}
const newMegaPokemon = new MegaPokemon('X', 'Y', 'Z')
console.log(newMegaPokemon)
newMegaPokemon.lazer()

class User {
    constructer(name, age, email, phoneNumber)
}