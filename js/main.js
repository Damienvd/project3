
(() => {
  try {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var gitRepos = JSON.parse(this.responseText);
          console.log(gitRepos)
           
          const gitRepoParent = document.getElementById('git-repos');
          
          gitRepos.forEach(repo => {
            const repoNodeContainer = document.createElement("div");
            const repoNode = document.createElement("a");
            repoNodeContainer.appendChild(repoNode);
            repoNode.innerText = repo.name;
            repoNode.setAttribute("href", repo.html_url);

            gitRepoParent.appendChild(repoNodeContainer);
          });

        }
    };
    
    xhttp.open("GET", "https://api.github.com/user/repos", true);
    xhttp.setRequestHeader("Authorization", "token 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");
    xhttp.send();
  } catch (error) {
    console.log(error);
  }
})();



/*COPYRIGHT YEAR*/
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.getElementById('currentYear').textContent = currentYear;