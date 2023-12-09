document.addEventListener('DOMContentLoaded', function () {
    // Fetch student information and update the HTML
    const studentDetails = {
        name: "Sayak Paul",
        regNo: "21BCE2508",
        timetable: "Monday to Friday, 8:00 AM - 7:20 PM",
        routineImage: "routine.jpg"
    };

    document.getElementById('name').innerText = `Name: ${studentDetails.name}`;
    document.getElementById('regNo').innerText = `Registration Number: ${studentDetails.regNo}`;
    document.getElementById('timetable').innerText = `Timetable: ${studentDetails.timetable}`;
    document.getElementById('routineImage').src = studentDetails.routineImage;
});
