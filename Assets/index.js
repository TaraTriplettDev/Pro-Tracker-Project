// const loginKey = 

// loginKey(username, password){
//     userName,
//     passWord,
// };


const name = document.getElementById("name")
const reminder = document.getElementById("reminder")
const due = document.getElementById("due")
const category = document.getElementById("category")
const priority = document.getElementById("priority")
const team = document.getElementById("your-team")
const addProject = document.getElementById("add-project")

class Project {
    constructor(name, reminder, due, category, priority){
        this.name = name
        this.reminder = reminder
        this.due = due
        this.category = category
        this.priority = priority
        this.team = []
    }
}

const projectMaker = () => {
    return new Project(`${name.value}, ${reminder.value}, ${due.value}, ${category.value}, ${priority.value}`)
}

addProject.addEventListener("click", projectMaker())


function windowAlert(){
    alert("Project has been saved.");
}
windowAlert();

{/* <button onclick="alert('Hello')">Click me.</button> */}



