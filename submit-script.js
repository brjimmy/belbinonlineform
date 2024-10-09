// Function to handle submission and display the results
const submitButton = document.getElementById('submitButton');
const contentBelow = document.getElementById('contentBelow');

// Map input fields to result table dynamic inputs
function mapInputValues() {
    // Section A mappings
    document.getElementById('A-dynamic-input-6').value = document.getElementById('pointsA1').value || 0;
    document.getElementById('A-dynamic-input-9').value = document.getElementById('pointsA2').value || 0;
    document.getElementById('A-dynamic-input-8').value = document.getElementById('pointsA3').value || 0;
    document.getElementById('A-dynamic-input-1').value = document.getElementById('pointsA4').value || 0;
    document.getElementById('A-dynamic-input-3').value = document.getElementById('pointsA5').value || 0;
    document.getElementById('A-dynamic-input-5').value = document.getElementById('pointsA6').value || 0;
    document.getElementById('A-dynamic-input-4').value = document.getElementById('pointsA7').value || 0;
    document.getElementById('A-dynamic-input-2').value = document.getElementById('pointsA8').value || 0;
    document.getElementById('A-dynamic-input-7').value = document.getElementById('pointsA9').value || 0;

    // Section B mappings
    document.getElementById('B-dynamic-input-1').value = document.getElementById('pointsB1').value || 0;
    document.getElementById('B-dynamic-input-8').value = document.getElementById('pointsB2').value || 0;
    document.getElementById('B-dynamic-input-7').value = document.getElementById('pointsB3').value || 0;
    document.getElementById('B-dynamic-input-5').value = document.getElementById('pointsB4').value || 0;
    document.getElementById('B-dynamic-input-3').value = document.getElementById('pointsB5').value || 0;
    document.getElementById('B-dynamic-input-9').value = document.getElementById('pointsB6').value || 0;
    document.getElementById('B-dynamic-input-2').value = document.getElementById('pointsB7').value || 0;
    document.getElementById('B-dynamic-input-6').value = document.getElementById('pointsB8').value || 0;
    document.getElementById('B-dynamic-input-4').value = document.getElementById('pointsB9').value || 0;

    // Section C mappings
    document.getElementById('C-dynamic-input-8').value = document.getElementById('pointsC1').value || 0;
    document.getElementById('C-dynamic-input-4').value = document.getElementById('pointsC2').value || 0;
    document.getElementById('C-dynamic-input-5').value = document.getElementById('pointsC3').value || 0;
    document.getElementById('C-dynamic-input-2').value = document.getElementById('pointsC4').value || 0;
    document.getElementById('C-dynamic-input-6').value = document.getElementById('pointsC5').value || 0;
    document.getElementById('C-dynamic-input-3').value = document.getElementById('pointsC6').value || 0;
    document.getElementById('C-dynamic-input-1').value = document.getElementById('pointsC7').value || 0;
    document.getElementById('C-dynamic-input-9').value = document.getElementById('pointsC8').value || 0;
    document.getElementById('C-dynamic-input-7').value = document.getElementById('pointsC9').value || 0;

    // Section D mappings
    document.getElementById('D-dynamic-input-6').value = document.getElementById('pointsD1').value || 0;
    document.getElementById('D-dynamic-input-1').value = document.getElementById('pointsD2').value || 0;
    document.getElementById('D-dynamic-input-2').value = document.getElementById('pointsD3').value || 0;
    document.getElementById('D-dynamic-input-4').value = document.getElementById('pointsD4').value || 0;
    document.getElementById('D-dynamic-input-5').value = document.getElementById('pointsD5').value || 0;
    document.getElementById('D-dynamic-input-3').value = document.getElementById('pointsD6').value || 0;
    document.getElementById('D-dynamic-input-8').value = document.getElementById('pointsD7').value || 0;
    document.getElementById('D-dynamic-input-7').value = document.getElementById('pointsD8').value || 0;
    document.getElementById('D-dynamic-input-9').value = document.getElementById('pointsD9').value || 0;

    // Section E mappings
    document.getElementById('E-dynamic-input-3').value = document.getElementById('pointsE1').value || 0;
    document.getElementById('E-dynamic-input-7').value = document.getElementById('pointsE2').value || 0;
    document.getElementById('E-dynamic-input-5').value = document.getElementById('pointsE3').value || 0;
    document.getElementById('E-dynamic-input-9').value = document.getElementById('pointsE4').value || 0;
    document.getElementById('E-dynamic-input-6').value = document.getElementById('pointsE5').value || 0;
    document.getElementById('E-dynamic-input-2').value = document.getElementById('pointsE6').value || 0;
    document.getElementById('E-dynamic-input-1').value = document.getElementById('pointsE7').value || 0;
    document.getElementById('E-dynamic-input-4').value = document.getElementById('pointsE8').value || 0;
    document.getElementById('E-dynamic-input-8').value = document.getElementById('pointsE9').value || 0;

    // Section F mappings
    document.getElementById('F-dynamic-input-4').value = document.getElementById('pointsF1').value || 0;
    document.getElementById('F-dynamic-input-8').value = document.getElementById('pointsF2').value || 0;
    document.getElementById('F-dynamic-input-5').value = document.getElementById('pointsF3').value || 0;
    document.getElementById('F-dynamic-input-2').value = document.getElementById('pointsF4').value || 0;
    document.getElementById('F-dynamic-input-9').value = document.getElementById('pointsF5').value || 0;
    document.getElementById('F-dynamic-input-3').value = document.getElementById('pointsF6').value || 0;
    document.getElementById('F-dynamic-input-1').value = document.getElementById('pointsF7').value || 0;
    document.getElementById('F-dynamic-input-7').value = document.getElementById('pointsF8').value || 0;
    document.getElementById('F-dynamic-input-6').value = document.getElementById('pointsF9').value || 0;

    // Section G mappings
    document.getElementById('G-dynamic-input-6').value = document.getElementById('pointsG1').value || 0;
    document.getElementById('G-dynamic-input-5').value = document.getElementById('pointsG2').value || 0;
    document.getElementById('G-dynamic-input-9').value = document.getElementById('pointsG3').value || 0;
    document.getElementById('G-dynamic-input-4').value = document.getElementById('pointsG4').value || 0;
    document.getElementById('G-dynamic-input-8').value = document.getElementById('pointsG5').value || 0;
    document.getElementById('G-dynamic-input-1').value = document.getElementById('pointsG6').value || 0;
    document.getElementById('G-dynamic-input-3').value = document.getElementById('pointsG7').value || 0;
    document.getElementById('G-dynamic-input-2').value = document.getElementById('pointsG8').value || 0;
    document.getElementById('G-dynamic-input-7').value = document.getElementById('pointsG9').value || 0;
}

// Function to disable all input boxes after submission
function disableInputs() {
    const inputs = document.querySelectorAll('.points-input');
    inputs.forEach(input => input.disabled = true);
}

// Function to handle submit button click
submitButton.addEventListener('click', () => {
    // Show the content below the submit button
    contentBelow.style.display = 'block';

    // Map input values to result table
    mapInputValues();

    // Disable all input boxes to prevent further editing
    disableInputs();

    // Optionally disable the submit button
    submitButton.disabled = true;
});



function calculateColumnTotals() {
    // Total IDs in the last row for columns SH, CO, PL, RI, ME, IMP, TW, CF, SP
    const totalIds = [
        'dynamic-input-64', 'dynamic-input-65', 'dynamic-input-66', 'dynamic-input-67',
        'dynamic-input-68', 'dynamic-input-69', 'dynamic-input-70', 'dynamic-input-71',
        'dynamic-input-72'
    ];

    // Column groups for each respective role
    const columnGroups = [
        ['A-dynamic-input-1', 'B-dynamic-input-1', 'C-dynamic-input-1', 'D-dynamic-input-1', 'E-dynamic-input-1', 'F-dynamic-input-1', 'G-dynamic-input-1'], // SH
        ['A-dynamic-input-2', 'B-dynamic-input-2', 'C-dynamic-input-2', 'D-dynamic-input-2', 'E-dynamic-input-2', 'F-dynamic-input-2', 'G-dynamic-input-2'], // CO
        ['A-dynamic-input-3', 'B-dynamic-input-3', 'C-dynamic-input-3', 'D-dynamic-input-3', 'E-dynamic-input-3', 'F-dynamic-input-3', 'G-dynamic-input-3'], // PL
        ['A-dynamic-input-4', 'B-dynamic-input-4', 'C-dynamic-input-4', 'D-dynamic-input-4', 'E-dynamic-input-4', 'F-dynamic-input-4', 'G-dynamic-input-4'], // RI
        ['A-dynamic-input-5', 'B-dynamic-input-5', 'C-dynamic-input-5', 'D-dynamic-input-5', 'E-dynamic-input-5', 'F-dynamic-input-5', 'G-dynamic-input-5'], // ME
        ['A-dynamic-input-6', 'B-dynamic-input-6', 'C-dynamic-input-6', 'D-dynamic-input-6', 'E-dynamic-input-6', 'F-dynamic-input-6', 'G-dynamic-input-6'], // IMP
        ['A-dynamic-input-7', 'B-dynamic-input-7', 'C-dynamic-input-7', 'D-dynamic-input-7', 'E-dynamic-input-7', 'F-dynamic-input-7', 'G-dynamic-input-7'], // TW
        ['A-dynamic-input-8', 'B-dynamic-input-8', 'C-dynamic-input-8', 'D-dynamic-input-8', 'E-dynamic-input-8', 'F-dynamic-input-8', 'G-dynamic-input-8'], // CF
        ['A-dynamic-input-9', 'B-dynamic-input-9', 'C-dynamic-input-9', 'D-dynamic-input-9', 'E-dynamic-input-9', 'F-dynamic-input-9', 'G-dynamic-input-9']  // SP
    ];

    // Loop through each column group and calculate the totals
    columnGroups.forEach((group, index) => {
        let columnTotal = 0;
        group.forEach(inputId => {
            columnTotal += parseInt(document.getElementById(inputId).value) || 0;
        });
        document.getElementById(totalIds[index]).value = columnTotal;  // Set total value
    });
}



submitButton.addEventListener('click', () => {
    // Show the content below the submit button
    contentBelow.style.display = 'block';

    // Map input values to result table
    mapInputValues();

    // Calculate totals for each column
    calculateColumnTotals();

    // Disable all input boxes to prevent further editing
    disableInputs();

    // Optionally disable the submit button
    submitButton.disabled = true;
	
	contentBelow.scrollIntoView({ behavior: 'smooth', block: 'end' });

});



// Select the reset button
const resetButton = document.getElementById('resetButton');

// Function to scroll to the top and refresh the page
resetButton.addEventListener('click', () => {
    // Scroll immediately to the top without smooth behavior to ensure it happens quickly
    window.scrollTo(0, 0);

    // Introduce a delay before refreshing the page
    setTimeout(() => {
        location.reload();
    }, 100);  // Small delay to ensure the scroll completes before refresh
});
