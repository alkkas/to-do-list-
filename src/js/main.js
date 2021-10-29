
window.addEventListener("load", () => {
    //SET CURRENT DATE
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const headerDate = document.querySelector(".header-date");
    let currentDate = new Date();
    headerDate.textContent = `${currentDate.getDate()} ${months[currentDate.getMonth()]}`
    //EXTRACT ALL TASKS FOR LOCAL STORAGE
    taskContainer.innerHTML = localStorage.getItem("content");
});

//to do list

const addBtn = document.querySelector(".task-add-btn");
const undoBtn = document.querySelector(".task-undo-btn")
const contentField = document.querySelector(".task-add-input");
const taskContainer = document.querySelector(".task-container");
//ADD TASK  
function addTask() {
    if(/\S/.test(contentField.value)) {
        taskContainer.innerHTML += 
        `
        <article class="task-item">
            <div class="task-remove-btn"></div>
            <p class="task-content">${contentField.value}</p>
        </article>
        `;
        contentField.value = '';
    }
    localStorage.setItem("content", taskContainer.innerHTML)
}



contentField.addEventListener("click", function() {
    contentField.style.height = 80 +"px";
    document.querySelector(".task-btns").classList.add("active");
})


contentField.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        addTask();
    }
})

addBtn.addEventListener("click", function() {
    addTask();
})
//REMOVE TASK
undoBtn.addEventListener("click", () => {
    contentField.value = ""
})
//WATCH TASKS
function animate(elem, t, num) {
    elem.style.opacity = num;
    setTimeout(() => {
        elem.remove();
        localStorage.setItem("content", taskContainer.innerHTML);
    }, t)   
}
taskContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("task-remove-btn")) {
        animate(event.target.closest(".task-item"), 200, 0)
    }
})
