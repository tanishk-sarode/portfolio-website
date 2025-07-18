import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Submitting form with value:', this.contactForm.value);
      this.http.post('/api/contact', this.contactForm.value).subscribe(
        (response) => {
          console.log('API Response:', response);
          alert('Your message has been sent successfully!');
          this.contactForm.reset();
        },
        (error) => {
          console.error('API Error:', error);
          alert('An error occurred. Please try again later.');
        }
      );
    }
  }
}
