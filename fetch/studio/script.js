//TODO: Add Your Code Below
window.addEventListener("load", function (){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json){
            console.log(response);
            const container = document.getElementById("container");
                     
            let color = "";
            for(const id in json){
              const status = json[id].active;
              if(status){
                color = "green";
              }
              else{
                color = "red"
              }
              console.log(status);
                container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                <h3>${json[id].firstName} ${json[id].lastName}</h3>
                  <ul>
                    <li>Hours in space: ${json[id].hoursInSpace}</li>
                    <li id="innertext" style="color:${color}">Active: ${json[id].active}</li>
                    <li>Skills: ${json[id].skills}</li>
                  </ul>
                </div>
                <img class="avatar" src="${json[id].picture}">
                </div>
                `;
            };
            document.body.insertAdjacentHTML("afterend", `<p>
              Astronaut Count: ${json.length}
              </p>`)
        });
    });  
});