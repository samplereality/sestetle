var rules = {
    start: "$ver1 | $ver2",
    test: "(dog).rhymes",
    totallyRandom: ".noun() .noun() .noun() .noun() .noun() .noun()",
    ver1: "$adverbs $topic .verb() $topic .adverb()",
    ver2: "$adverbs .adjective() .pluralNoun() .verb() $preps .noun()",
    preps: "ofthe | tothe | inthe | bythe",
    adverbs: "ifall | every | ifany",
    $topic: ".noun()"
  };
  
  // var img_rules = {
  //     start: "<img src&#61;'https:&#47;&#47;cdn.glitch.global&#47;a1dd8819-792d-4b02-8660-157921ed34ce&#47;(1|2|3|4).jpg'>"
  // };
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