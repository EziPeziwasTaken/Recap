let jidlo = ["Jablko", "Hruška", "Citrón"];

//jidlo[0] = "Meloun";
//jidlo.push("Kokos"); Na konec
//jidlo.pop(); Smaže poslední index
//jidlo.unshift("Mango"); Nastaví na první místo a posune celé pole 
//jidlo.shift(); Smaže první a posune všechno doleva
//.jidlo.sort().reverse(); Srovná pozpázku

//let numOffJidlo = jidlo.length;
//let index = jidlo.indexOf("Hruška");


for(let i = 0; i < jidlo.length; i++){      //Od začátku
    console.log(jidlo[i]);
}
for(let i = jidlo.length;i >= 0; i--){      //Od konce
    console.log(jidlo[i]);
}

for(let menu of jidlo){
    console.log(menu);
}