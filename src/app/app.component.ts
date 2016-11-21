import { Component } from '@angular/core';


  //1. 
  import {Stock} from './stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  //2.
    submitted = false;

  //3. 
    newStock = new Stock(0, '', '', 0,'');

  onSubmit(){
    this.submitted = true;
  }

  cancel(){
    this.submitted = false;
    this.newStock = new Stock(0, '', '', 0,'');
  }
}
