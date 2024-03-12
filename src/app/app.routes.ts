import { Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { ListTasksComponent } from './admin_panel/components/list-tasks/list-tasks.component';
import { NewTaskComponent } from './admin_panel/components/new-task/new-task.component';
import { UpdateTaskComponent } from './admin_panel/components/update-task/update-task.component';
import { TaskDetalisComponent } from './admin_panel/components/task-detalis/task-detalis.component';

export const routes: Routes = [
    {
        path: 'admin', component: AdminPanelComponent,
        children: [
            { path: 'listTasks', component: ListTasksComponent },
            { path: 'task/:id', component: TaskDetalisComponent},
        ]
    }
];
