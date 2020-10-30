 // Write code under this line
  class StringBuilder {
    constructor(string){
     this.value = string;
    }
    append(str) {
    return this.value = `${this.value}`+`${str}`;
  }
    prepend(str) {
    return this.value = `${str}` + this.value;
   }
    pad(str) {
      this.append(str); 
      this.prepend (str);
    }
  }

 console.log(typeof StringBuilder);
// 'function'


 const builder = new StringBuilder('.');

 builder.append('^');
 console.log(builder.value); // '.^'

 builder.prepend('^');
 console.log(builder.value); // '^.^'

 builder.pad('=');
 console.log(builder.value); // '=^.^='

