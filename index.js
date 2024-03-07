function getActivityIdea() {
    fetch("http://www.boredapi.com/api/activity/")
        .then(res => res.json())
        .then(data => {
            document.getElementById("idea").textContent = data.activity
            document.body.classList.add("fun")
            
        })
}

document.getElementById("bored-button").addEventListener("click", getActivityIdea)