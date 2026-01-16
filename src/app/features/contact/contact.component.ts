import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  template: `
    <div class="contact-wrapper">
      <mat-card class="contact-card">
        <mat-card-header>
          <mat-card-title>Contact Us</mat-card-title>
          <mat-card-subtitle>We'd love to hear from you</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Name</mat-label>
              <input matInput formControlName="name">
              <mat-error *ngIf="contactForm.get('name')?.hasError('required')">Name is required</mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email">
              <mat-error *ngIf="contactForm.get('email')?.hasError('required')">Email is required</mat-error>
              <mat-error *ngIf="contactForm.get('email')?.hasError('email')">Please enter a valid email</mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Message</mat-label>
              <textarea matInput formControlName="message" rows="5"></textarea>
              <mat-error *ngIf="contactForm.get('message')?.hasError('required')">Message is required</mat-error>
            </mat-form-field>

            <div class="actions">
              <button mat-raised-button color="primary" type="submit" [disabled]="contactForm.invalid">Send Message</button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .contact-wrapper {
      display: flex;
      justify-content: center;
      padding: 2rem 0;
    }
    .contact-card {
      width: 100%;
      max-width: 600px;
    }
    .full-width {
      width: 100%;
      margin-bottom: 1rem;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
    }
  }
}
