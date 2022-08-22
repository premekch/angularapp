import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo List';
  
  todoList: TodoItem[] = [
    {title: 'install JS'},
    {title: 'install Node'},
    {title: 'install Angular'},
    {title: 'create new app'},
    {title: 'build app and serve'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
