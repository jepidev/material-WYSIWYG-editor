import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor() { }

  foreColor = '#3f51b5';
  backColor = '#3f51b5';

  ngOnInit() {
  }

  undo() {
    document.execCommand('undo', false, '');
  }

  redo() {
    document.execCommand('redo', false, '');
  }

  bold() {
    document.execCommand('bold', false, '');
  }

  italic() {
    document.execCommand('italic', false, '');
  }

  underline() {
    document.execCommand('underline', false, '');
  }

  color() {
    document.execCommand('foreColor', false, this.foreColor);
  }

  backColorChange() {
    document.execCommand('backColor', false, this.backColor);
  }

  link() {
    var url = prompt("Enter the URL");
    document.execCommand("createLink", false, '');
  }

  alignLeft() {
    document.execCommand("justifyLeft", false, '');
  }

  alignCenter() {
    document.execCommand("justifyCenter", false, '');
  }

  alignRight() {
    document.execCommand("justifyRight", false, '');
  }

  alignJustify() {
    document.execCommand("justifyFull", false, '');
  }

  

}
