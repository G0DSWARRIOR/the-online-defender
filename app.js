document.getElementById("scanButton").onclick = async () => {
  document.getElementById("results").innerHTML = "Scanning...";
  try {
    const response = await fetch("https://your-backend.herokuapp.com/api/scan-network");
    const data = await response.json();
    document.getElementById("results").innerHTML = JSON.stringify(data);
  } catch (error) {
    document.getElementById("results").innerHTML = "Error: " + error;
  }
};