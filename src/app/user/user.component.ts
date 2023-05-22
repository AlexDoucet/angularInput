import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface User{

  username: string|null;
  email: string|null;
  password: string|null;
  address: {
    street: string|null;
    zipcode: string|null;
    city: string|null;
  };

}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

user! : User;

  username = new FormControl(''); // Prend une valeur par défaut lors de sa création
  email = new FormControl(''); // Prend une valeur par défaut lors de sa création
  password = new FormControl(''); // Prend une valeur par défaut lors de sa création
  street = new FormControl(''); // Prend une valeur par défaut lors de sa création
  zipcode = new FormControl('');
  city = new FormControl('');


createUser(){
this.user = {
  username: this.username.value,
  email: this.email.value,
  password: this.password.value,
  address : {
    city: this.city.value,
    street: this.street.value,
    zipcode: this.zipcode.value,
  }

}
}

}
