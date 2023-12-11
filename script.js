function calculateAverage() {
    // Get user input
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    // Check if input is valid
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Please enter valid numbers");
        return;
    }

    // Calculate average
    var average = (num1 + num2 + num3) / 3;

    // Display the result
    document.getElementById("result").innerHTML = "The average is: " + average.toFixed(2);
}
