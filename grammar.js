var rules = {
    start: "$ver1 | $ver2 | $ver3 | $ver4 | $ver5 | $ver6",
    ver1: "$adjectives $topic $actions $preps $topic .adverb()",
    ver2: "$stock $adjectives .pluralNoun() $actions $preps .noun()",
    ver3: "$adjectives .noun() .noun() $actions $preps .noun()",
    ver4: "$mantra $mantra $mantra $mantra $mantra .noun()",
    ver5: "$mantraAdj $mantraAdj $topic $mantraAdj $mantraAdj $topic",
    ver6: "$mantraAdj $topic $mantraAdj $topic $modal .presentVerb()",
    ver7: "$topic $actions $topic $actions (andso | butno | never | maybe) $actions",
    preps: "ofthe | tothe | inthe | bythe | onthe | andto | along | apart | .subConj()",
    stock: "maybe | ifall | every | ifany | wasnt | whose | sothe | these | those | which | where | $modal",
    $topic: ".noun()",
    $mantra: ".noun() | $adjectives",
    actions: ".pastVerb() | .presentVerb() | .participleVerb() | $customVerbs",
    adjectives: ".adjective() | .compAdj() | .supAdj()",
    $mantraAdj: ".adjective()",
    modal: "shall | might | ought | could | would | never",
    customVerbs: "hates | loves | kills | spies | cries | flies | works | likes | hunts | blows | hides | codes | swims | holds | ousts | lives | sighs"
  };