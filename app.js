const container = document.querySelector(".container");

function createKey(name,model,price) {
    img = "<img src=llave.png>";
     name = `<h2>${name}</h2>`;
     model = `<h3>${model}</h3>`;
     price = `<p>${price}</p>`;
    return [img,name,model,price];
}

let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let modelRandom = Math.round(Math.random()*1000)
    let priceRandom = Math.round(Math.random()*10+30)
    let key = createKey(`key ${i}`,`the model is ${modelRandom}`,`the price is ${priceRandom}`)
    let div = document.createElement("DIV");
    div.classList.add(`flex-item`,`item-${i}`)
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    let form = document.createElement("FORM")
    let inputHidden = document.createElement("INPUT")
    inputHidden.type ="hidden"
    inputHidden.id =`modelKey-${modelRandom}`
    form.appendChild(inputHidden)
    let input = document.createElement("INPUT")
    input.type = "submit"
    input.value = "comprar"
    form.appendChild(input)
    div.appendChild (form)
    documentFragment.appendChild(div);
    container.appendChild(div);
}
container.appendChild(documentFragment);

