import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public OriginalName:string="jOSe ManuEL mArTInez";
  public customDate:Date = new Date();
}
