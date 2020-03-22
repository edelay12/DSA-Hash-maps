const input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

anagramGrouping = (input) => {
    let output = [];
    this.getPermutations = function(string) {
        var results = [];
      
        if (string.length === 1) {
          results.push(string);
          return results;
        }
      
        for (var i = 0; i < string.length; i++) {
          var firstChar = string[i];
          var charsLeft = string.substring(0, i) + string.substring(i + 1);
          var innerPermutations = this.getPermutations(charsLeft);
          for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
          }
        }
        return results;
      }


      this.groupResults = (result) => {
          output = [output, ...result]
    }


      for(let i = 0; i < input.length; i++){
        let tests = this.getPermutations(input[i]);
        let current = input[i];
        let result = [...input[i]];
        for(let j=0; j< input.length; j++){
            let item = input[j];
            for(let k = 0; k< tests.length; k++){
                if(tests[k] == item && tests[k] != current){
                    result.push(tests[k])
                }
            }
        }
        this.groupResults(result);
      }

console.log(output);
}

anagramGrouping(input);