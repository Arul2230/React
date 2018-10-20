class Task{
    
    private id:string;
    private isCompleted:boolean = false;
    private content:string;
    private isImportant:boolean = false;
    private note:string;
    private isAddedToMyDay:boolean = false;
    private remindDate:string;
    private dueDate:string;
    private repeat:string;

    public getId():string {
        return this.id;
    }
    public setId(id:string) {
        this.id = id;
    }
    public getCompleted():boolean {
        return this.isCompleted;
    }
    public setCompleted(isCompleted:boolean) {
        this.isCompleted = isCompleted;
    }
    public getContent():string {
        return this.content;
    }
    public setContent(content:string) {
        this.content = content;
    }
    public getImportant():boolean {
        return this.isImportant;
    }
    public setImportant(isImportant:boolean) {
        this.isImportant = isImportant;
    }
    public getNote():string {
        return this.note;
    }
    public setNote(note:string) {
        this.note = note;
    }
    public getAddedToMyDate():boolean {
        return this.isAddedToMyDay;
    }
    public setAddedToMyDate(isAddedToMyDay:boolean) {
        this.isAddedToMyDay = isAddedToMyDay;
    }
    public getRemindDate():string {
        return this.remindDate;
    }
    public setRemindDate(remindDate:string) {
        this.remindDate = remindDate;
    }
    public getDueDate():string {
        return this.dueDate;
    }
    public setDueDate(dueDate:string) {
        this.dueDate = dueDate;
    }
    public getRepeat():string {
        return this.repeat;
    }
    public setRepeat(repeat:string) {
        this.repeat = repeat;
    }
}

export default Task;