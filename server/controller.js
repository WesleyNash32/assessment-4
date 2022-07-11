module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortunes: (req, res) => {
        const fortunes = ["Adventure can be real happiness", "Bide your time, for success is near", "Have a beautiful day", "Love is a warm fire to keep the soul warm", "Many will travel to hear you speak"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];

        res.status(200).send(randomFortunes);
    },

    getEncouragement: (req, res) => {
        const encouragement = ["You can do this!", "Let's getter done!!", "Eat the Chicken!", "May the force be with you."]

        let randomIndex = Math.floor(Math.random() * encouragement.length);
        let randomEncouragement = encouragement[randomIndex];

        res.status(200).send(randomEncouragement);
    }
    
}