import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-button',
  templateUrl: './document-button.component.html',
  styleUrls: ['./document-button.component.css']
})
export class DocumentButtonComponent implements OnInit {
  @Input()
  public name: string;

  @Input()
  public title: number;

  @Input()
  public document: string = "";
  constructor() {
    this.name = "";
    this.title = 0;
  }

  ngOnInit(): void {
  }

}
