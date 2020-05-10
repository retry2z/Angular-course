import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LaptopFormComponent } from './laptop-form/laptop-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { PasswordMatchValidatorDirective } from './shared/password-match-validator.directive';
import { PasswordFormDemoComponent } from './password-form-demo/password-form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LaptopFormComponent,
    ReactiveFormDemoComponent,
    RegisterFormComponent,
    PasswordMatchValidatorDirective,
    PasswordFormDemoComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
