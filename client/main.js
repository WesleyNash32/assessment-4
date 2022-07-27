const complimentBtn = document.getElementById("complimentButton")
const fortunesBtn = document.getElementById("fortunesButton")
const nameInput = document.getElementById("nameInput")
const nameBtn = document.getElementById("nameButton")
const dropDown = document.getElementById("selectTab")

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

const putDino = () => {
    const putAnimal = {
        
    }
}

complimentBtn.addEventListener('click', getCompliment)
fortunesBtn.addEventListener('click', getFortunes)
nameBtn.addEventListener('click', postName)
dropDown.addEventListener