// Description: This file contains the code to fetch the github users and display them on the page
async function fetchgithubusers(){
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();

        data.forEach(element => {
            let h1 = document.createElement("h1");
            h1.textContent="";
          let a = document.createElement("a");
          a.textContent=element.login;
          a.setAttribute("href",element.html_url);
          let users = document.getElementById("div1");
          users.appendChild(h1);
          users.appendChild(a);
        });
    } catch (error) {
        console.log(error);
    }
}