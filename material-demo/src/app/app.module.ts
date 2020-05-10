import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListsComponent } from './lists/lists.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { GridsComponent } from './grids/grids.component';
<<<<<<< HEAD
import { MatGridListModule } from '@angular/material/grid-list';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardsComponent } from './cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SteppersComponent } from './steppers/steppers.component';
import { MatStepperModule } from '@angular/material/stepper';
=======
import { MatGridListModule} from '@angular/material/grid-list';



>>>>>>> c7c91c0dd8150c68fac9876d68110f48146989fe


@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    ListsComponent,
<<<<<<< HEAD
    GridsComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    SteppersComponent,
    MatStepperModule,
=======
    GridsComponent
>>>>>>> c7c91c0dd8150c68fac9876d68110f48146989fe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
<<<<<<< HEAD
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
=======
>>>>>>> c7c91c0dd8150c68fac9876d68110f48146989fe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
