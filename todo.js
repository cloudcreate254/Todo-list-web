document.addEventListener("DOMContentLoaded", () => {
    const todoTableBody = document.querySelector("#table-data tbody");

    const apiURL = "https://jsonplaceholder.typicode.com/todos";
    let completedCount = 0;

    // Fetch Todo List from API
    fetch(apiURL)
        .then(response => response.json())
        .then(todos => {
            todos.slice(0, 20).forEach(todo => {
                const row = document.createElement("tr");

                // Task ID column
                const idCell = document.createElement("td");
                idCell.textContent = todo.id;

                // Task Title column
                const titleCell = document.createElement("td");
                titleCell.textContent = todo.title;

                // Checkbox column
                const checkboxCell = document.createElement("td");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = todo.completed;
                checkbox.disabled = todo.completed;

                // Mark completed todos
                if (todo.completed) {
                    row.classList.add("completed");
                }

                // Listen for checkbox changes
                checkbox.addEventListener("change", () => {
                    if (checkbox.checked) {
                        row.classList.add("completed");
                        completedCount++;
                    } else {
                        row.classList.remove("completed");
                        completedCount--;
                    }

                    // Check for 5 completed tasks
                    validateCompletion(completedCount);
                });

                checkboxCell.appendChild(checkbox);
                row.appendChild(idCell);
                row.appendChild(titleCell);
                row.appendChild(checkboxCell);
                todoTableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error fetching todos:", error));

    // Validate Completion using Promise
    function validateCompletion(count) {
        return new Promise((resolve, reject) => {
            if (count === 5) {
                resolve("Congrats. 5 Tasks have been Successfully Completed!");
            } else if (count < 5) {
                reject();
            }
        })
        .then(message => alert(message))
        .catch(() => {
            // Do nothing when the count is less than 5
        });
    }
});
