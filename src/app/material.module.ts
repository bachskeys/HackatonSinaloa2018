import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports:[MatButtonModule,MatCardModule,MatInputModule,MatGridListModule],
  exports:[MatButtonModule,MatCardModule,MatInputModule,MatGridListModule ],


})


export class MaterialModule
{



 }
