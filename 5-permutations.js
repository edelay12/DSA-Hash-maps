

function checkPermsPalindrome(string){
 this.getAllPermutations = function(string) {
    var results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }

  this.check = function(perms){
      console.log(perms);
        this.result = false;
      for(let i =0; i < perms.length; i++){
          let reverse = perms[i].split('').reverse().join('');
          if (perms[i] === reverse) return this.result = true;
      }
      return this.result;
  }

let result = this.check(this.getAllPermutations(string));
console.log(result);
}



checkPermsPalindrome('acecarr');
  
