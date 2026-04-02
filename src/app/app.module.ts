import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';
import { MatExpansionModule } from  '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import { MatButtonModule } from  '@angular/material/button';
import { RoutesComponent } from './components/sidebar/routes/routes.component';
import { WaypointComponent } from './components/sidebar/waypoint/waypoint.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SidebarComponent,
    RoutesComponent,
    WaypointComponent,
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
