import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../task-service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-task-detail',
  imports: [FormsModule],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  ts = inject(TaskService)
  task: Task;
  nameTask;

  constructor(private route: ActivatedRoute) {
    let index = Number(this.route.snapshot.paramMap.get('index'))
    this.task = this.ts.getTask(index)
    this.nameTask = signal(this.task.name)

  }

  public modifierTask() {

  }

  public permuterEtat() {

  }
}
