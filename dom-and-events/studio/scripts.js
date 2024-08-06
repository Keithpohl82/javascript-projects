// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeOffBtn = document.getElementById("takeoff");
    let flightstatus = document.getElementById("flightStatus");
    let shuttlebackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let image = document.getElementById("rocket");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let landBtn = document.getElementById("landing");
    let abortBtn = document.getElementById("missionAbort");
    let shuttleHeight = Number(spaceShuttleHeight.innerHTML);

     

    //Takeoff button 
    takeOffBtn.addEventListener("click", event => {
       let confirmed =  confirm("Confirm that the shuttle is ready for takeoff.");
        if(confirmed){
            flightstatus.innerHTML = "Shuttle in flight.";
            shuttlebackground.style.backgroundColor = "blue";            
            shuttleHeight = 10000;
            spaceShuttleHeight.innerHTML = shuttleHeight;
            
        }
    })

    //Land button
    landBtn.addEventListener("click", event => {
        let confirmed =  confirm("The shuttle is landing. Landing gear engaged.");
        if(confirmed){
            flightstatus.innerHTML = "The shuttle has landed.";
            shuttlebackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

    // Abort Button
    abortBtn.addEventListener("click", event =>{
        let confirmed =  confirm("Confirm that you want to abort the mission.");
        if(confirmed){
            flightstatus.innerHTML = "Mission aborted.";
            shuttlebackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0;
        }
    })
    
    // Up Button
    up.addEventListener("click", event => {
        let movement = image.style.top = `${image.offsetTop - 10}px`;
        image.style.top = movement;
        shuttleHeight += 10000;
        spaceShuttleHeight.innerHTML = shuttleHeight 
    })

    // Down Button
    down.addEventListener("click", event => {
        let movement = image.style.top = `${image.offsetTop + 10}px`;
        image.style.top = movement;
        if(shuttleHeight > 0){
        shuttleHeight -= 10000;
        spaceShuttleHeight.innerHTML = shuttleHeight;
        }
    })

    // left Button
    left.addEventListener("click", event => {
        let movement = image.style.left = `${image.offsetLeft - 10}px`;
        image.style.left = movement;
    })

    right.addEventListener("click", event => {
        let movement = image.style.left = `${image.offsetLeft + 10}px`;
        image.style.left = movement;
    })

})

