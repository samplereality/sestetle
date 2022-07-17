var rules = {
    start: "$ver1 | $ver2 | $ver3 | $ver4",
    // start: ".test() .test() .test() .test() .test() .test()",
    ver1: "$adjectives $topic $actions $preps $topic .adverb()",
    ver2: "$stock $adjectives .pluralNoun() $actions $preps .noun()",
    ver3: "$adjectives .noun() .noun() $actions $preps .noun()",
    ver4: "$mantra $mantra $mantra $mantra $mantra .noun()",
    preps: "ofthe | tothe | inthe | bythe | onthe | andto | along | apart | .subConj()",
    stock: "ifall | every | ifany | wasnt | could | would | whose | sothe | these | those | shall | might | ought | which | where",
    $topic: ".noun()",
    $mantra: ".noun() | $adjectives",
    actions: ".pastVerb() | .presentVerb() | .participleVerb()",
    adjectives: ".adjective() | .compAdj() | .supAdj()"
  };