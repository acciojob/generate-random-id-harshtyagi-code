function makeid(l) {
    // write your code here
      let len = 1;
      let str = "";
      while(len <= l){
          let random = Math.floor(Math.random()*127);
          
          if((random >= 48 && random <= 57) || (random >= 65 && random <= 90) || (random >= 97 && random <= 122)){
            str = str + String.fromCharCode(random);
          len++;
          } 
      }
      return str;
  }
const l = prompt("Enter a number.");
alert(makeid(l));