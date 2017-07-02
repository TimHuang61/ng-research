import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { TestModuleRoutingModule } from './test-module-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestModuleRoutingModule
  ],
  exports: [
      ContactComponent
  ],
  declarations: [ContactComponent]
})
export class TestModuleModule { }

// if not use 'loadchildren' for parent component, you need to export the child components.
