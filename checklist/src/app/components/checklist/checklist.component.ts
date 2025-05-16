// src/app/components/checklist/checklist.component.ts
import { Component } from '@angular/core';
import { ChecklistService, TodoItem } from '../../services/checklist.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.module.css'],
})
export class ChecklistComponent {
  newTodoText = '';
  todos: TodoItem[] = [];

  constructor(private checklistService: ChecklistService) {
    this.todos = this.checklistService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoText.trim()) {
      this.checklistService.addTodo(this.newTodoText.trim());
      this.newTodoText = '';
    }
  }

  deleteTodo(id: number): void {
    this.checklistService.deleteTodo(id);
  }

  toggleTodo(id: number): void {
    this.checklistService.toggleTodo(id);
  }

  updateTodo({ id, text }: { id: number; text: string }): void {
    this.checklistService.updateTodo(id, text);
  }
}