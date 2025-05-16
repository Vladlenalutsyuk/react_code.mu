// src/app/components/checklist-item/checklist-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../services/checklist.service';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.module.css'],
})
export class ChecklistItemComponent {
  @Input() todo!: TodoItem;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
  @Output() update = new EventEmitter<{ id: number; text: string }>();

  isEditing = false;
  editedText = '';

  startEditing(): void {
    this.isEditing = true;
    this.editedText = this.todo.text;
  }

  saveEdit(): void {
    if (this.editedText.trim()) {
      this.update.emit({ id: this.todo.id, text: this.editedText.trim() });
      this.isEditing = false;
    }
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}