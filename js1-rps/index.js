// Namn Local Storage

function playerNameLocal() {
    let playerName = document.getElementById("player-name").value
    localStorage.removeItem("playerName")

    if(playerName == ""){
        playerName = "Guest"
    }

    localStorage.setItem("playerName", playerName)
}
