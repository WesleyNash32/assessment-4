const nameArr = ["Soundwave", "Shockwave", "Megatron", "Starscream"]

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

    postName: (req, res) => {
        console.log('Endpoint hit')
        console.log(req.body);

        nameArr.push(req.body.name);
        res.status(200).send(nameArr);
    },

    
}