

class Github{

    constructor(){
        this.client_id = "Ov23liHqhpdoBeTnzpG4";
        this.client_secret = "a3ffab5e0f1a83a542ddf6a096f6a55d0e8b7ead";
    }

    // https://api.github.com/users/jaganjavid

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        return profile;
        
    }

}