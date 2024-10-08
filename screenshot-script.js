document.addEventListener('DOMContentLoaded', () => {
    // Existing event listeners for other buttons...

    // Add event listener for the screenshot button
    document.getElementById('screenshot-button').addEventListener('click', () => {
        // Select the results table block
        const resultsTable = document.getElementById('resultsTableBlock');
        
        // Use html2canvas to take a screenshot of the results table
        html2canvas(resultsTable).then((canvas) => {
            const padding = 20; // Amount of padding in pixels
            const paddedCanvas = document.createElement('canvas');

            // Set the new canvas size to include padding
            paddedCanvas.width = canvas.width + padding * 2;
            paddedCanvas.height = canvas.height + padding * 2;

            const ctx = paddedCanvas.getContext('2d');
            
            // Fill the canvas with a white background (optional if needed)
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);

            // Draw the original canvas onto the new canvas with padding
            ctx.drawImage(canvas, padding, padding);
				

            // Convert the new padded canvas to a data URL
            const dataURL = paddedCanvas.toDataURL('image/png');

            // Create a download link
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'Results table - Screenshot.png';

            // Programmatically click the link to trigger the download
            link.click();
        });
    });
});
