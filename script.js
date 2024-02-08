document.getElementById('characterSheet').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const characterName = document.getElementById('characterName').value;
    const characterClass = document.getElementById('class').value;
    const level = document.getElementById('level').value;
    const hitPoints = document.getElementById('hitPoints').value;
    const armorClass = document.getElementById('armorClass').value;
    const speed = document.getElementById('speed').value;
    
    // Create character object
    const character = {
        characterName,
        characterClass,
        level,
        hitPoints,
        armorClass,
        speed
    };

    // Send character object to server
    fetch('/saveCharacter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    })
    .then(response => response.json())
    .then(data => {
        // Display response from server
        const output = document.getElementById('output');
        output.innerHTML = `<p>${data.message}</p>`;
    })
    .catch(error => console.error('Error:', error));
});
