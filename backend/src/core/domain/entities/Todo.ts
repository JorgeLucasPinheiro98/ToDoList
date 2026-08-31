export class ToDo {
    title: string;
    description: string;
    isCompleted: boolean;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description
        this.isCompleted = false
    }

    
}