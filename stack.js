
function stack() {       

    this.items = []; 
     
     //tamanho da pilha     
    this.size = function() {     
     return this.items.length;   
    }
    //verificar se apilha está vasia
   this.isEmpty = function() {     
     return this.items.length === 0;   
   }
    //colocar elemento na pilha
   this.push = function(element) {
     this.items.push(element);   
   }
    //remove elemento da pilha
   this.pop = function() {   
     if (this.isEmpty())
        throw "pilha vazia"  
     return this.items.pop();

   }
 }
 
 module.exports = stack;