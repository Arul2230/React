import Task from './Task';

class List{
    private id : string;
    private iconClass: string;
    private name: string;
    private tasks:Task[] = [];
    constructor(id:string,iconClass:string,name:string,tasks:Task[]){
       this.id= id;
       this.iconClass = iconClass;
       this.name = name;
       this.tasks = tasks;
    }


    public getId():string {
        return this.id;
    }
    public setId(id:string) {
        this.id = id;
    }
    public getIconClass():string {
        return this.iconClass;
    }
    public setIconClass(iconClass:string) {
        this.iconClass = iconClass;
    }
    public getName():string {
        return this.name;
    }
    public setName(name:string) {
        this.name = name;
    }
    public getTasks():Task[] {
        return this.tasks;
    }
    public setTasks(tasks:Task[]) {
        this.tasks = tasks;
    }
}

export default List;