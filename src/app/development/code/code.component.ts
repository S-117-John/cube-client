import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.less']
})
export class CodeComponent implements OnInit {

  constructor( private myRouter: Router) { }

  isVisible = false;
  radioValue = 'A';
  selectedValue = null;
  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.myRouter.navigateByUrl('dev/codeConfig');
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
