//Initializing github class
const git = new GitHub;

//Initialize UI Class
const ui= new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Event listener when person starts typing in search bar

searchUser.addEventListener('keyup', (e)=>
{
    //get input itself
    const userInput= e.target.value;

    if (userInput !=='')
    {
        //make HTTP call
        git.getUser(userInput)
        .then (data =>
            {
               if(data.profile.message ==='Not Found')
               {
                //show alert
                ui.showAlert('User Not Found','text-bg-danger');
               }

               else
               {
                //show profile . will be displayed in UI profile
                ui.showProfile(data.profile);
                ui.showRepo(data.repos);
               }
            })
    }

    else
    {
        //clear profile
        ui.clearProfile();
    }
});