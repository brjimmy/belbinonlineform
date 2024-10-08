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

// Add event listener for the submit button
document.addEventListener('DOMContentLoaded', () => { // Ensure the DOM is fully loaded
    document.getElementById('submitButton').addEventListener('click', () => {
        // Populate dynamic inputs with corresponding points values from all tables
               document.getElementById('contentBelow').style.display = 'block';

		for (let i = 1; i <= 9; i++) {
            for (let j = 0; j < tables.length; j++) {
                const pointsValue = document.getElementById(`points${tables[j].charAt(tables[j].length - 1)}${i}`).value; // Get points from each table
                document.getElementById(`dynamic-input-${i + j * 9}`).value = pointsValue; // Populate corresponding dynamic input
            }
        }

		    window.scrollTo(0, document.body.scrollHeight);

		
        // Calculate totals for each column in Results Table
        calculateResultsTableTotals();

        // Make all input boxes disabled after submission
        setInputsDisabled(); // Call the function to make inputs disabled
    });

    // Add event listener for the reset button
    document.getElementById('resetButton').addEventListener('click', () => {
        // Refresh the page and scroll to the top
        window.scrollTo(0, 0); // Scroll to top
        location.reload(); // Refresh the page
		
		

		
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

    if (total > 11) {
        alert("Error: Total exceeds 10!"); // Show error as a popup
        // Clear the last entered value if total exceeds 10
        if (lastInputIndex >= 0) {
            inputs[lastInputIndex].value = 0; // Set the last entered input to 0
        }
    } else {
        totalInput.value = total; // Show valid total
    }
}

function calculateResultsTableTotals() {
    const totalIds = [64, 65, 66, 67, 68, 69, 70, 71, 72]; // IDs for total row dynamic inputs
    const columnGroups = [
        [1, 10, 19, 28, 37, 46, 55], // SH column
        [2, 11, 20, 29, 38, 47, 56], // CO column
        [3, 12, 21, 30, 39, 48, 57], // PL column
        [4, 13, 22, 31, 40, 49, 58], // RI column
        [5, 14, 23, 32, 41, 50, 59], // ME column
        [6, 15, 24, 33, 42, 51, 60], // iMP column
        [7, 16, 25, 34, 43, 52, 61], // TW column
        [8, 17, 26, 35, 44, 53, 62],  // CF column
		[9, 18, 27, 36, 45, 54, 63]  // SP column
		
    ];

    columnGroups.forEach((group, index) => {
        let columnTotal = 0;
        group.forEach(id => {
            columnTotal += parseInt(document.getElementById(`dynamic-input-${id}`).value) || 0;
        });
        document.getElementById(`dynamic-input-${totalIds[index]}`).value = columnTotal; // Set total in the respective dynamic box
    });
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
