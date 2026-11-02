import { Injectable } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class TaskService {

  tasks: Task[] = [];

  public getTasks() {
    return this.tasks
  }

  public getTask(index: number){
    return this.tasks[index]
  }

  public addTask(name: string) {
    let task: Task = {
      name: name,
      completed: false
    }
    this.tasks.push(task)
  }

  public deleteTask(index: number) {
    if (this.tasks.length >= index + 1) {
      this.tasks.splice(index, 1)
    }
    else {
      console.log('erreur d\'index')
    }
  }

  public permuterEtat(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed
  }
}
