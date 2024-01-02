function submitForm() {
    // Get user input
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var storageNeeds = document.getElementById('storageNeeds').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // TODO: Send this data to your server for processing and get predictions

    // For demonstration purposes, display a placeholder result
    var result = "Prediction: Normal conditions. No action needed.";

    // Display the result on the page
    document.getElementById('predictionResult').innerText = result;
}
