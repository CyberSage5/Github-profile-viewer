function getProfile() {
    const username = document.getElementById("username").value;
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.message === "Not Found") {
                    alert("User not found. Please enter a valid GitHub username.");
                } else {
                    document.getElementById("avatar").src = data.avatar_url;
                    document.getElementById("name").innerText = data.name || username;
                    document.getElementById("bio").innerText = data.bio || "No bio available";
                    document.getElementById("repos").innerText = data.public_repos;
                    document.getElementById("followers").innerText = data.followers;
                }
            })
            .catch(error => console.error("Error:", error));
    } else {
        alert("Please enter a GitHub username.");
    }
}
