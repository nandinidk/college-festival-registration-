
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const tableBody = document.getElementById("dataTable");

    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    displayData();

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const usn = document.getElementById("usn").value;
        const department = document.getElementById("department").value;
        const activity = document.getElementById("activity").value;

        const student = {
            name: name,
            usn: usn,
            department: department,
            activity: activity
        };

        registrations.push(student);
        localStorage.setItem("registrations", JSON.stringify(registrations));

        displayData();
        form.reset();
        alert("Registration Successful!");
    });

    function displayData() {
        tableBody.innerHTML = "";

        registrations.forEach((student, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.usn}</td>
                <td>${student.department}</td>
                <td>${student.activity}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
