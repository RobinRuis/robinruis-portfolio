import { Component } from '@angular/core';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
