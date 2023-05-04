// Connection Details
const apiKey = "1Kb70jCYG3JQS3NceelmJzA4z3r9rA8L";
const serverip = "72.133.42.202"
const serverport = "28015"

const apiUrl = "http://" + serverip + ":" + serverport + "/players.json?apiKey=" + apiKey

// Make API call
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Log the resulting data to the console for testing
    // console.log(data);
    displayPlayerCount(data); // Uncomment this line when you're ready to integrate into the HTML
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function displayPlayerCount(data) {
   // Access and manipulate the DOM element where you want to display the results
   const resultsContainer = document.getElementById('player_count');

   // Customize this part according to the structure of the API response and how you want to display the data
   const formattedData = data.length + "/20" // JSON.stringify(data, null, 2);
   resultsContainer.innerHTML = `<pre>${formattedData}</pre>`;
}
