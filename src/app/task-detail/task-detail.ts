import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../task-service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-task-detail',
  imports: [FormsModule, DatePipe],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})



export class TaskDetail {
  ts = inject(TaskService)
  task: Task;
  nameTask;
  updated: boolean = false;

  index: number;

  constructor(private route: ActivatedRoute) {
    this.index = Number(this.route.snapshot.paramMap.get('index'))
    this.task = this.ts.getTask(this.index)
    this.nameTask = signal(this.task.name)

  }

  public modifierTask() {
    this.ts.updateName(this.index, this.nameTask())
    this.updated = true
  }

  public permuterEtat() {
    this.ts.permuterEtat(this.index)
  }
}
