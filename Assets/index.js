// const loginKey = 

// loginKey(username, password){
//     userName,
//     passWord,
// };


const project = document.getElementById("project")
const category = document.getElementById("category")
const collaborators = document.getElementById("collaborators")
const startDate = document.getElementById("start-date")
const endDate = document.getElementById("end-date")
const priority = document.getElementById("priority")
const description = document.getElementById("description")

class Project {
    constructor(project, category, collaborators, startDate, endDate, priority, description){
        this.project = project
        this.category = category
        this.collaborators = collaborators
        this.startDate = startDate
        this.endDate = endDate
        this.category = category
        this.priority = priority
        this.description = description
    }
}

const projectMaker = () => {
    return new Project(`${project.value}, ${category.value}, ${startDate.value}, ${EndDate.value} ${category.value}, ${priority.value} ${priority.value} ${description.value}`)
}

addProject.addEventListener("click", projectMaker())


function windowAlert(){
    alert("Project has been saved.");
}
windowAlert();

{/* <button onclick="alert('Hello')">Click me.</button> */}



