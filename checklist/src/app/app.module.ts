// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ChecklistItemComponent } from './components/checklist-item/checklist-item.component';

@NgModule({
  declarations: [AppComponent, ChecklistComponent, ChecklistItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}