import { AppComponent } from './core/app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CompleteComponent } from './pages/complete/complete.component';
import { CreateComponent } from './pages/create/create.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TagExtrasComponent } from './pages/create/tag-extras/tag-extras.component';
import { TagPreviewComponent } from './tag-preview/tag-preview.component';
import { TagShapeComponent } from './pages/create/tag-shape/tag-shape.component';
import { TagTextComponent } from './pages/create/tag-text/tag-text.component';
import { petTagReducer } from './core/pet-tag.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent,
    TagTextComponent,
    TagExtrasComponent,
    TagPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ petTag: petTagReducer })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
