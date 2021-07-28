const stack = require('./stack');

beforeEach(() =>{
    s = new stack();
});

test('Testar se apilha está vazia na criação', () =>{
    
    expect(s.isEmpty()).toBeTruthy(); //pode se toEqual(true);
});

test('Testar se apilha não está vazia',()  => {
    
    s.push(5);
    expect(s.isEmpty()).toEqual(false);
});

test('Testar pilha vazia após inserir e remover um elemento',() =>{
   
    s.push(5);
    //expect(s.isEmpty()).toEqual(false);
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});

test('Verificar tamnho correto da pilha',() =>{
   
    s.push(20);
    s.push(30);
    s.push(45);
    expect(s.size()).toEqual(3);
});

test('Testar remover elemento de pilha vazia',() =>{
    s.push(5);
    s.pop();
    expect(() => {s.pop()}).toThrow();
});

test('Testar elemento + 1',() =>{
    s.push(20) + 1
    
    expect(20 + 1).toBe(21);
});

test('removendo do elemento -2',() =>{
    s.push(19) - 2
    
    expect(19 - 2).toEqual(17);
});

test('teste se tem o valor branco',() =>{
    expect('branco').toMatch(/branco/);
});

test('teste se tem o valor 15',() =>{
   
});