let dropDown = document.getElementById("selectionForm");
let bttn = document.getElementById("bttn");
let picture = document.getElementById("image");
let selection = 0;
let value = 1;
let arr = [];

addAnimal("dog", "https://random.dog/woof.json");
addAnimal("cat", "https://aws.random.cat/meow");
addAnimal("fox", "https://randomfox.ca/floof/");


document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement("option");
        option.value = arr[i].id;
        option.innerText = arr[i].animalType;
        dropDown.appendChild(option);
    }
});

dropDown.addEventListener("change", function () {
    selection = this.value;
})

bttn.addEventListener("click", function () {
    displayPicture(selection);
})

function displayPicture(selectedValue) {
    for (let i = 0; i < arr.length; i++) {
        if (selectedValue == arr[i].id) {
            fetch(arr[i].photo)
                .then(response => response.json())
                .then(json => {
                    if (selectedValue == 1) {
                        picture.src = json.url;
                    } else if (selectedValue == 2) {
                        picture.src = json.file;
                    } else if (selectedValue == 3) {
                        picture.src = json.image;
                    }
                });
        }
    }
}

function addAnimal(name, link) {
    let obj = {
        id: value,
        animalType: name,
        photo: link
    }
    arr.push(obj);
    value++;
}