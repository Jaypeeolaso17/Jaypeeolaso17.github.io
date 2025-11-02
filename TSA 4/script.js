// Array/Object: Array to store student objects
const studentRecords = [];

// DOM Event: Run code when page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // DOM Event: Listen for the form submission (Save button click)
    document.getElementById('signup-form').addEventListener('submit', saveStudent);
});

/**
 * Function: Handles data capture and storage.
 */
function saveStudent(event) {
    event.preventDefault(); 

    // Variable: Get all user input values
    const id = document.getElementById('id-number').value;
    const first = document.getElementById('first-name').value;
    const middle = document.getElementById('middle-name').value || 'N/A';
    const last = document.getElementById('last-name').value;
    const gender = document.getElementById('gender').value;
    const bday = document.getElementById('birthday').value;

    // Array/Object: Create object and store in array
    studentRecords.push({ id, first, middle, last, gender, bday });

    document.getElementById('signup-form').reset(); 

    // Function call: Dynamically update the display
    displayRecords();
}

/**
 * Function: Builds and displays the table.
 */
function displayRecords() {
    const container = document.getElementById('table-container');

    if (studentRecords.length === 0) {
        container.innerHTML = '<p>No records saved yet.</p>';
        return;
    }

    // Build the HTML for the table header
    let html = '<table id="student-table"><thead><tr>';
    html += '<th>ID</th><th>First Name</th><th>M.I.</th><th>Last Name</th><th>Gender</th><th>B-Day</th>';
    html += '</tr></thead><tbody>';

    // Build table rows from the array data
    studentRecords.forEach(s => {
        html += `<tr><td>${s.id}</td><td>${s.first}</td><td>${s.middle}</td><td>${s.last}</td><td>${s.gender}</td><td>${s.bday}</td></tr>`;
    });

    html += '</tbody></table>';
    
    // Action that updates webpage content dynamically
    container.innerHTML = html; 
}