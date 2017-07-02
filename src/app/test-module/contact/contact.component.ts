import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contact: Contact;

  constructor() {
    this.contact = new Contact('Tim', 28);
  }

  ngOnInit() {
  }

}

export class Contact {
  constructor(public name: string, public age: number) {
  }
}
