import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TaskService } from '../task-service'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})


export class TaskList {
  nameNewTask = signal('')
  taskService = inject(TaskService)
  tasks = this.taskService.getTasks()

  public addTask() {
    this.taskService.addTask(this.nameNewTask())
  }

  public deleteTask(index: number) {
    this.taskService.deleteTask(index)
  }

  public permuterEtat(index: number) {
    this.taskService.permuterEtat(index)
  }
}


