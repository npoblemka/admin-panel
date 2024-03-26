import { Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { ListTasksComponent } from './admin_panel/components/list-tasks/list-tasks.component';
import { TaskDetalisComponent } from './admin_panel/components/task-detalis/task-detalis.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent, canActivate: [authGuard] },
    {
        path: 'admin', component: AdminPanelComponent, canActivate: [authGuard],
        data: { role: 'admin' },
        children: [
            { path: 'listTasks', component: ListTasksComponent },
            { path: 'task/:id', component: TaskDetalisComponent },
        ]
    }
];
