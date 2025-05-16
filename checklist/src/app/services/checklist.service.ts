// src/app/services/checklist.service.ts
import { Injectable } from '@angular/core';

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  private todos: TodoItem[] = [];
  private nextId = 1;

  getTodos(): TodoItem[] {
    return this.todos;
  }

  addTodo(text: string): void {
    this.todos.push({ id: this.nextId++, text, completed: false });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  updateTodo(id: number, text: string): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.text = text;
    }
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}