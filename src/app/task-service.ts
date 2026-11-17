import { Injectable } from '@angular/core';
import { tasksTest } from './data/tasks-test';

export interface Task {
  name: string;
  completed: boolean;
  priorite: string;
  createdAt: string
}

@Injectable({
  providedIn: 'root',
})

export class TaskService {

  tasks: Task[] = [];

  constructor() {
    this.getTasks();
  }

  public getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    if (this.tasks.length === 0) {
      const reponse = confirm('voulez-vous avoir des données de test par defaut ?')
      if (reponse) {
        this.tasks = tasksTest
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
    return this.tasks;
  }

  public getTask(index: number) {
    return this.tasks[index];
  }

  public addTask(name: string, priorite: string) {
    if (name === '') {
      alert('le nom ne doit pas être vide')
      return
    }

    if (priorite === '') {
      alert('il faut choisir la priorité')
      return;
    }

    let task: Task = {
      name: name,
      completed: false,
      priorite: priorite,
      createdAt: new Date().toISOString()
    }

    this.tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public deleteTask(index: number) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    else {
      console.log('erreur d\'index')
    }
  }

  public permuterEtat(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public updateName(index: number, name: string) {
    this.tasks[index].name = name
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }
}
