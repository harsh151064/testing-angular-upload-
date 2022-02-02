import { Component, OnChanges, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnChanges {
  public files: any[] = [{Sno:"",Product:"",Qty:"",Price:"",Cost:""}];
  
  qty:any=2;
  unitCost:any=5;
  GrossTotal:any="";
  total:any=this.qty*this.unitCost;
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog){}

  ngOnInit(): void {
     
  }
  
  ngOnChanges():void{
   
  }
  Tot(){
    this.total=this.qty*this.unitCost; 
  }
 

  // onFileChange($event:any){

  //   for(const items of $event){
  //     this.files.push(items);
  //   }
  //   // this.files = Object.keys($event).map((key:any) => $event[key]);
  //   this._snackBar.open("Successfully upload!", 'Close', {
  //     duration: 2000,
  //   });
  
  // }


  // deleteFromArray(index:any) {
  //   console.log(this.files);
  //   this.files.splice(index, 1);
  //   this._snackBar.open("Successfully delete!", 'Close', {
  //         duration: 2000,
  //       });
  // }

}
