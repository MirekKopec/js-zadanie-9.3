// scripts.js


var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
    dinosaur = 'triceratops';

dinosaur = dinosaur.toUpperCase();

//console.log(dinosaur);

var textChanged = text.replace('Velociraptor', dinosaur);

var halfText = textChanged.substr(0, textChanged.length/2);

console.log(halfText);
