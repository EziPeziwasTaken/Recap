const pikachu = {
    name: "Pikachu",
    voiceline: "pika_pika",
    evolve: "Raichu",
    type: "Electricy",
}

const magikarp = {
    name: "Magikapr",
    voiceline: "pouh",
    evolve: "Gyarados",
    type: "Water",
}

let vyhledat = window.prompt("Co bys chtěl vědět o svém pokémonu? (name, voiceline, evolve, type)");



switch (vyhledat.includes){
    case("name"): console.log(pikachu.name + " " + magikarp.name);
    break;
    case("voiceline"): console.log(pikachu.voiceline + " " + magikarp.voiceline);
    break;
    case("evolve"): console.log(pikachu.evolve + " " + magikarp.evolve);
    break;
    case("type"): console.log(pikachu.type + " " + magikarp.type);
    break;
    default:
        console.log("Špatně zadané vlastnosti!");
}


//console.log(magikarp.name, magikarp.evolve);