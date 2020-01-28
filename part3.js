"use strict";
exports.__esModule = true;
var Todos = /** @class */ (function () {
    function Todos() {
        this.myTasksArray = [];
    }
    Todos.prototype.addTasks = function (Task) {
        this.myTasksArray.push(Task);
        console.log("Item Pushed " + Task + " to myTasksArray");
        return this.myTasksArray.length;
    };
    Todos.prototype.AllTasks = function () {
        console.log("Array Contains the following items: ");
        this.myTasksArray.forEach(function (Task) {
            console.log(Task);
        });
    };
    Todos.prototype.deleteTask = function (Task) {
        var index = this.myTasksArray.indexOf(Task);
        if (index > -1) {
            this.myTasksArray.splice(index, 1);
            console.log("Item " + Task + "Deleted from the Array.");
            return this.myTasksArray.length;
        }
        else {
            console.log("Item " + Task + " Not in the Array.");
        }
    };
    return Todos;
}());
var Todo = new Todos();
Todo.addTasks("Complete Lab");
