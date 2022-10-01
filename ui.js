class UI
{
    constructor()
    {
        this.profile = document.getElementById('profile');
    }


    showProfile(user) {
        this.profile.innerHTML = `
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <div class="d-grid col-12 mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary  mb-4">View Profile</a>
              </div>
              </div>
              <div class="col-md-9">
                <span class="badge text-bg-dark mb-2">Public Repos: ${user.public_repos}</span>
                <span class="badge text-bg-warning mb-2">Public Gists: ${user.public_gists}</span>
                <span class="badge text-bg-secondary mb-2">Followers: ${user.followers}</span>
                <span class="badge text-bg-info mb-2">Following: ${user.following}</span>
                <br><hr>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
          <h3 class="page-heading mb-3">Latest Repos</h3>
          <div id="repos"></div>
        `;
      }

      //Clear Profile Function : Clears data when user input is empty
        clearProfile()
        {
          this.profile.innerHTML='';
        }

        //Shows alter message when data entered doesnt match that of a profile
        showAlert(message,classname)
        {
          //clear remaining alerts
          this.clearAlert();
          //div creation
          const div= document.createElement('div');
          //add class name
          div.className= classname + ' mb-3 rounded';

          //add text/ message
          div.appendChild(document.createTextNode(message));

          //get parent element to do insertion
          const container= document.querySelector('.searchContainer');

          //get searchbox
          const search = document.querySelector('.search');

          //insert alert after search box
          container.insertBefore(div,search);

            //time out after 3 secs
            setTimeout(()=>
            {
              this.clearAlert();
            },3000);
        }

//CLEAR ALERT
clearAlert()
      {
      const currentAlert=document.querySelector('.text-bg-danger');

      if(currentAlert)
      {
        currentAlert.remove();
      }

      }

    //SHOW REPOS
    showRepo(repos)
    {
      let output='';

      repos.forEach(function(repo)
      {
        output+=`
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge text-bg-dark mb-2">Stars: ${repo.stargazers_count}</span>
            <span class="badge text-bg-warning mb-2">Watchers: ${repo.watchers_count}</span>
            <span class="badge text-bg-secondary mb-2">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
        `;
      });

      //Output Repos
      document.getElementById('repos').innerHTML=output;
    }
}


