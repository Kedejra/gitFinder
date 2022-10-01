
class GitHub
{
    constructor()
    {
        this.client_id= 'a74043115cac0c5004d1';
        this.client_secret= 'd11ac5c3cdc5a14ffd1b271e6fccfac5f9bdb67c';
        this.repos_count=5;
        this.repo_sort='created: asc';

    }
//async function
    async getUser(user)
    {
        //there is a url for profiles and one for repos. this is for 
        //profile
        const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_id}`);

        const profile= await profileResponse.json();

        //GET REPOS
        const repoResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repos= await repoResponse.json();

        return { profile,
            repos}
        
        
    }
}