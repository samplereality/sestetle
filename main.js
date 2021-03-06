// Define some functions that can be performed from within a grammar

let context = {
    noun: () => RiTa.randomWord({ pos: "nn", minLength: 5, maxLength: 5 }),
    pastVerb: () => RiTa.randomWord({ pos: "vbd", minLength: 5, maxLength: 5 }),
    presentVerb: () => RiTa.randomWord({ pos: "vbp", minLength: 5, maxLength: 5 }),
    participleVerb: () => RiTa.randomWord({ pos: "vbn", minLength: 5, maxLength: 5 }),
    pluralNoun: () => RiTa.randomWord({ pos: "nns", minLength: 5, maxLength: 5  }),
    adjective: () => RiTa.randomWord({ pos: "jj", minLength: 5, maxLength: 5  }),
    adverb: () => RiTa.randomWord({ pos: "rb", minLength: 5, maxLength: 5  }),
    subConj: () => RiTa.randomWord({ pos: "in", minLength: 5, maxLength: 5  }),
    compAdj: () => RiTa.randomWord({ pos: "jjr", minLength: 5, maxLength: 5  }),
    supAdj: () => RiTa.randomWord({ pos: "jjs", minLength: 5, maxLength: 5  })
    // modal: () => RiTa.randomWord({ pos: "md", minLength: 5, maxLength: 5  })
  };
  

let rg = RiTa.grammar(rules, context); // load our  main grammar

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 

  function generatePoem() {
    let result = rg.expand();
    const words = result.split(" ");
    writeWords(words);
  }

  function writeWords(_arr) {
    
      let answer = _arr[5]
      
      let str = "";
      for (let i = 0; i < _arr.length; i++) {
          str += "<tr>";
          for (let j = 0; j < _arr[i].length; j++) {
              // console.log(_arr[i][j]);
  
              str += "\t<td class='letter";
              
              if (_arr[i][j] == answer[0]){
                  if (_arr[i][j] == answer[j]){
                      str += " correct";
                  } else {
                      if (_arr[i][j] != answer[j]){
                          str += " misplaced";
                      }
                  }
              } 
              
                  if (_arr[i][j] == answer[1]){
                  if (_arr[i][j] == answer[j]){
                      str += " correct";
                  } else {
                      if (_arr[i][j] != answer[j]){
                          str += " misplaced";
                      }
                  }
              } 
              
                  if (_arr[i][j] == answer[2]){
                  if (_arr[i][j] == answer[j]){
                      str += " correct";
                  } else {
                      if (_arr[i][j] != answer[j]){
                          str += " misplaced";
                      }
                  }
              } 
  
                  if (_arr[i][j] == answer[3]){
                  if (_arr[i][j] == answer[j]){
                      str += " correct";
                  } else {
                      if (_arr[i][j] != answer[j]){
                          str += " misplaced";
                      }
                  }
              } 
  
                  if (_arr[i][j] == answer[4]){
                  if (_arr[i][j] == answer[j]){
                      str += " correct";
                  } else {
                      if (_arr[i][j] != answer[j]){
                          str += " misplaced";
                      }
                  }
              } 
              
              str += "'>";
  
              str += _arr[i][j].toUpperCase();
              
              str += "</td>\n";
          }
          //
          str += "</tr>\n";  
      }
  
      document.getElementById("table").innerHTML = str;
  }
  
  writeWords(words);