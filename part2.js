var myTasksArray = ["This", "Is", "A", "String"];
console.log(myTasksArray);
function addTasks(Task) {
    myTasksArray.push(Task);
    console.log("Item Pushed " + Task + " to myTasksArray");
    return myTasksArray.length;
}
//===============================================
function AllTasks() {
    // for(let i = 0; i < myTasksArray.length; i++)
    // {
    //     console.log(myTasksArray[i]);
    // }
    console.log("Array Contains the following items: ");
    myTasksArray.forEach(function (Task) {
        console.log(Task);
    });
}
addTasks("Complete Lab ");
var numofTasks = addTasks("Eat Breakfast");
console.log("The number of tasks due today is " + numofTasks);
AllTasks();
deleteTask("Complete Lab ");
console.log("There are now " + myTasksArray.length + " tasks to do ");
//===============================================
function deleteTask(Task) {
    var index = myTasksArray.indexOf(Task);
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("Item " + Task + "Deleted from the Array.");
    }
    else {
        console.log("Item " + Task + " Not in the Array.");
    }
    return myTasksArray.length;
}
