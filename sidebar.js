document.addEventListener("DOMContentLoaded", function () {
    const searchOption = document.getElementById("searchOption");
    const searchTable = document.querySelector(".searchTable");
    const sideBar = document.getElementById("sideBar");


    // Function to open the searchTable
    function openSearchTable() {
        searchTable.style.width = "300px"; // Adjust the width as needed
        searchTable.style.borderRight = "1px solid #cccccc";
        sideBar.style.width = "50px";
        searchTable.style.zIndex = "1";
        document.addEventListener("click", closeSearchTableOnClickOutside);
    }

    // Function to close the searchTable
    function closeSearchTable() {
        searchTable.style.width = "0";
        sideBar.style.width = "250px";
        searchTable.style.zIndex = "-1";
        document.removeEventListener("click", closeSearchTableOnClickOutside);
    }

    // Function to close the searchTable when clicking outside
    function closeSearchTableOnClickOutside(event) {
        if (event.target !== searchTable && !searchTable.contains(event.target) && event.target !== searchOption) {
            closeSearchTable();
        }
    }

    searchOption.addEventListener("click", function (event) {
        if (searchTable.style.width === "300px") {
            closeSearchTable();
        } else {
            openSearchTable();
        }
        event.stopPropagation(); // Prevent the click event from reaching the document
    });
});
