var rules = {
    start: "$ver1 | $ver2 | $ver3",
    ver1: ".adjective() $topic $actions $preps $topic .adverb()",
    ver2: "$stock .adjective() .pluralNoun() $actions $preps .noun()",
    ver3: ".adjective() .noun() .noun() $actions $preps .noun()",
    preps: "ofthe | tothe | inthe | bythe | onthe | andto",
    stock: "ifall | every | ifany | wasnt | could | would | whose | sothe",
    $topic: ".noun()",
    actions: ".pastVerb() | .presentVerb() | .participleVerb()"
  };
  

  // Tips for modifying RiTa grammars:
  // Add these to the end of a rule or a phrase
  // .art() 	adds the correct article according to the phonemes
  // .cap() 	capitalizes the first letter of the phrase
  // .uc() 	capitalizes all letters of the phrase
  // .qq() 	adds (smart) quotes around the phrase
  // .nr() 	ensures a choice will never repeat its output
  // .s() 	pluralizes the noun phrase via the RiTa inflector
  //
  // More details at https://observablehq.com/@dhowe/tut-rita-grammars
  // and https://observablehq.com/@dhowe/riscript