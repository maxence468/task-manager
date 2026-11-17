import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TaskService } from '../task-service'
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, RouterLink, DatePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})


export class TaskList {
  nameNewTask = signal('')
  priorite: string = '';
  taskService = inject(TaskService)
  tasks = this.taskService.tasks
  created: boolean = false;
  nomTacheCree: string = '';

  public addTask() {
    this.taskService.addTask(this.nameNewTask(), this.priorite)
    this.nomTacheCree = this.nameNewTask();
    this.nameNewTask.set('')
    this.priorite = ''
    this.created = true;
    
  }

  public deleteTask(index: number) {
    this.taskService.deleteTask(index)
  }

  public permuterEtat(index: number) {
    this.taskService.permuterEtat(index)
  }

  public recupererPriorite(value: string) {
    this.priorite = value
  }
}


