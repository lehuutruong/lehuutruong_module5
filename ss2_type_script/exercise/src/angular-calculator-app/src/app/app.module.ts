import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from "@angular/forms";
import { ColorComponent } from './color/color.component';
import { HomeCaseStudyComponent } from './home-case-study/home-case-study.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListFacilityComponent } from './list-facility/list-facility.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CreateFacilityComponent } from './create-facility/create-facility.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorComponent,
    HomeCaseStudyComponent,
    ArticleComponent,
    LikeComponent,
    FooterComponent,
    NavbarComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    CreateFacilityComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
