import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { Home } from './home/home';
import { TaskDetail } from './task-detail/task-detail';
import { Statistics } from './statistics/statistics';

export const routes: Routes = [
    { path: 'task/:index', component: TaskDetail },
    { path: 'tasks', component: TaskList },
    {path: 'statistics', component: Statistics},
    { path: '', component: Home }
];
