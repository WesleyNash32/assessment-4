const complimentBtn = document.getElementById("complimentButton")
const fortunesBtn = document.getElementById("fortunesButton")
const nameInput = document.getElementById("nameInput")
const nameBtn = document.getElementById("nameButton")
const dinoInput = document.getElementById("dinosaurInput")
const dinoBtn = document.getElementById("dinosaurButton")
const drinkInput = document.getElementById("drinkInput")
const drinkBtn = document.getElementById("drinkButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const postName = () => {
    const nameBody = {
        name: nameInput.value
    }
    axios.post("http://localhost:4000/api/post/name", nameBody)
    .then((res) => {
        alert(res.data)
    })
};

const postDino = () => {
    const dinoBody = {
        dino: dinoInput.value
    }
    axios.post("http://localhost:4000/api/post/dino", dinoBody)
    .then((res) => {
        alert(res.data)
    })
};

const postDrink = () => {
    const drinkBody = {
        drinks: drinkInput.value
    }
    axios.post("http://localhost:4000/api/post/drink", drinkBody)
    .then((res) => {
        alert(res.data)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortunesBtn.addEventListener('click', getFortunes)
nameBtn.addEventListener('click', postName)
dinoBtn.addEventListener('click', postDino)
drinkBtn.addEventListener('click', postDrink)
dropDown.addEventListener