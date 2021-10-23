



// ADD CURRENT DATE TO THE PAGE HEADER
window.addEventListener("load", () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const headerDate = document.querySelector(".header-date");
    let currentDate = new Date();
    headerDate.textContent = `${currentDate.getDate()} ${months[currentDate.getMonth()]}`
});

//to do list

const addBtn = document.querySelector(".task-add-btn");
const undoBtn = document.querySelector(".task-undo-btn")
const contentField = document.querySelector(".task-add-input")
const taskContainer = document.querySelector(".task-container");
//ADD TASK  
addBtn.addEventListener("click", function() {
    if(/\S/.test(contentField.value)) {
        taskContainer.innerHTML += 
        `
        <article class="task-item">
            <div class="task-remove-btn">X</div>
            <p class="task-content">${contentField.value}</p>
        </article>
        `;
        contentField.value = '';
    }
})

taskContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("task-remove-btn")) {
        event.target.closest(".task-item").remove()
    }
})
