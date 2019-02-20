import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

export interface DialogData {
  content: string;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  foreColor = '#000000';
  backColor = '#000000';
  fontSize = '12px';
  content: HTMLElement;
  headingValue = '<p>';

  ngOnInit() {
    this.content = document.getElementById('contenteditable');
  }

  undo() {
    document.execCommand('undo', false, '');
  }

  redo() {
    document.execCommand('redo', false, '');
  }

  changeFontSize() {
    document.execCommand('fontSize', false, this.fontSize);
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

  foreColorChose() {
    document.getElementById('foreColor').click();
  }

  color() {
    document.execCommand('foreColor', false, this.foreColor);
  }

  backColorChose() {
    document.getElementById('backColor').click();
  }

  backColorChange() {
    document.execCommand('backColor', false, this.backColor);
  }

  link() {
    var url = prompt("Enter the URL");
    if (url !== null) {
      document.execCommand("createLink", false, url);
    }
  }

  addPicture() {
    const img = document.createElement('img');
    img.style.width = '100%';
    img.src = 'https://firebasestorage.googleapis.com/v0/b/portfolio-website-99df9.appspot.com/o/images%2Fblog%2F2018%2F12%2F27%2FDSC08075.jpg?alt=media&token=04aaf2b1-2174-4c47-8da6-a4b5357ac84f';
    this.content.appendChild(img);
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

  onHeading1Click() {
    document.execCommand('formatBlock', false, this.headingValue);
  }
  onHeading2Click() {
    document.execCommand('formatBlock', false, '<h2>');
  }

  preview() {
    //const element: Node = new Node();
    const dialogRef = this.dialog.open(PreviewOverviewComponent, {
      width: '700px',
      data: {content:  document.getElementById('contenteditable').innerHTML}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-preview-overview',
  templateUrl: 'preview-overview.html',
})
export class PreviewOverviewComponent implements OnInit {

  html: SafeHtml;
  constructor(
    public dialogRef: MatDialogRef<PreviewOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log(this.data.content);
    this.html = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


