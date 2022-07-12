const complimentBtn = document.getElementById("complimentButton")
const fortunesBtn = document.getElementById("fortunesButton")
const encourageBtn = document.getElementById("encourageButton")
const inspiredInput = document.getElementById("postInput");
const postBtn = document.getElementById("postButton")

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
        })
}

const getEncouragement = () => {
    axios.get("http://localhost:4000/api/encouragement/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
}

const postInspired = () => {
    const inspirations = {
        "firstInspired": "chicken",
        "secondInspired": "Pizza",
        "thirdInspired": "money"
        
    }
}

complimentBtn.addEventListener('click', getCompliment)
fortunesBtn.addEventListener('click', getFortunes)
encourageBtn.addEventListener('click', getEncouragement)
postBtn.addEventListener('click', postInspired)