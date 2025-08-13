//let service1 = new Service("Bath", "Includes shampoo and towel dry", 100);
//console.log(service1);

$(document).ready(function (){

    // The user Clicked Register Services button –
    // We will catch the click action to manipulate the information

    // Select the form by id using jQuery
    $("#serviceRegistration").on("submit", function (e) {
        e.preventDefault();

        // Get the values – using jQuery
        const serviceName = $("#serviceName").val();
        const serviceDescription = $("#serviceDescription").val();
        const servicePrice = $("#servicePrice").val();

        // Confirm we are retrieving the values
        console.log(`${serviceName}, ${serviceDescription}, ${servicePrice}`);

        // Validate the values

        // Print/Save the information

        // Notify the user

        // Clear the form
    });

});
