import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  private email: string = "";
  private message: string = "";

  contactForm = this.formBuilder.group({
    email: this.email,
    message:this.message
  });



  ngOnInit(): void {
  }

  submit() {
    window.alert(
      this.contactForm.get('email')?.value + '\n' +
      this.contactForm.get('message')?.value + '\n' + "Thank you for contacting us!"
    )
  }
}
