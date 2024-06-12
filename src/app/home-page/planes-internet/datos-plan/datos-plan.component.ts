import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-plan',
  templateUrl: './datos-plan.component.html',
  styleUrls: ['./datos-plan.component.css']
})
export class DatosPlanComponent implements OnInit {
  @Input()
  public tipoPlan: string = "---";
  @Input()
  public cantidadMegas: string = "---"
  @Input()
  public costoMensualidad: string = "---"
  @Input() color: string = "white";
  @Input() imagePlan: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
