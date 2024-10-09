const tables = ['tableA', 'tableB', 'tableC', 'tableD', 'tableE', 'tableF', 'tableG'];

// Attach event listeners to inputs in all tables
tables.forEach(tableId => {
    const inputs = document.querySelectorAll(`#${tableId} .points-input`);
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            enforceLimits(input); // Validate input limits
            calculateTotal(tableId); // Calculate total for this table
        });
    });
});



function enforceLimits(input) {
    let value = parseInt(input.value) || 0;

    if (value < 0) {
        input.value = ""; // Allow empty value
    } else if (value > 9) {
        alert("Value cannot exceed 9."); // Show error message
        input.value = 0; // Set value to 0
    }
}

function calculateTotal(tableId) {
    const inputs = document.querySelectorAll(`#${tableId} .points-input`);
    let total = 0;
    let lastInputIndex = -1; // Variable to hold index of last input for clearing

    inputs.forEach((input, index) => {
        total += parseInt(input.value) || 0; // Calculate total
        if (input.value !== "") lastInputIndex = index; // Update last input index
    });

    // Use correct total ID based on table ID
    const totalInput = document.getElementById('totalPoints' + tableId.charAt(tableId.length - 1));

    if (total > 10) {
        alert("Error: Total exceeds 10!"); // Show error as a popup
        // Clear the last entered value if total exceeds 10
        if (lastInputIndex >= 0) {
            inputs[lastInputIndex].value = 0; // Set the last entered input to 0
        }
    } else {
        totalInput.value = total; // Show valid total
    }
}



// Function to disable inputs after submission
function setInputsDisabled() {
    // Get all input boxes in Tables A to G
    const inputs = document.querySelectorAll('.points-input');
    inputs.forEach(input => {
        input.disabled = true; // Disable each input box
    });

    // Get all dynamic input boxes in the Results Table
    const dynamicInputs = document.querySelectorAll('.dynamic-input');
    dynamicInputs.forEach(input => {
        input.disabled = true; // Disable each dynamic input box
    });

    // Disable total points input boxes in Sections A to G
    const totalPointsInputs = [
        document.getElementById('totalPointsA'),
        document.getElementById('totalPointsB'),
        document.getElementById('totalPointsC'),
        document.getElementById('totalPointsD'),
        document.getElementById('totalPointsE'),
        document.getElementById('totalPointsF'),
        document.getElementById('totalPointsG')
    ];
    
    totalPointsInputs.forEach(input => {
        input.disabled = true; // Disable each total points input box
    });
}
