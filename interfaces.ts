export interface tasksInterface{

    addTasks(Task: string): number;
    AllTasks(): void ;
    deleteTask(Task: string): number;
    myTasksArray: Array<string>;
    
}