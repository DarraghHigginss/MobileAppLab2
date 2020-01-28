import{tasksInterface} from './interfaces';

class Todos implements tasksInterface{
    myTasksArray: Array<string> = [];

    addTasks(Task: string): number {
        this.myTasksArray.push(Task);
        console.log("Item Pushed " + Task + " to myTasksArray");
        return this.myTasksArray.length;
    }


    AllTasks(): void {
        console.log("Array Contains the following items: ")
        this.myTasksArray.forEach(function (Task) {
            console.log(Task)
        })
    }

    deleteTask(Task: string): number {
        let index: number = this.myTasksArray.indexOf(Task);
        if (index > -1) {
            this.myTasksArray.splice(index, 1);
            console.log("Item " + Task + "Deleted from the Array.");
            return this.myTasksArray.length;
        } else {
            console.log("Item " + Task + " Not in the Array.");
        }

        
    }

}

let Todo = new Todos();
Todo.addTasks("Complete Lab");