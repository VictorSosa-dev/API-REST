import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  public hola: string= 'Hola Mundo';
  curso = 'Curso Spring 5 con Angular';
  victor = 'Victor Manuel'
}
