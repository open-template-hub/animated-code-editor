import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimatedCodeEditorComponent } from './component/animated-code-editor/animated-code-editor.component';
import { CommandLineComponent } from './component/command-line/command-line.component';

@NgModule( {
  declarations: [
    CommandLineComponent,
    AnimatedCodeEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommandLineComponent,
    AnimatedCodeEditorComponent
  ]
} )
export class AnimatedCodeEditorModule {
}
