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