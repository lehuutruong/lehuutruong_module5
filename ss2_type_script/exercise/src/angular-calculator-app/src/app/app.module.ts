import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss5_angular_interaction/calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorComponent } from './ss5_angular_interaction/color/color.component';
import { HomeCaseStudyComponent } from './case_study/home-case-study/home-case-study.component';
import { ArticleComponent } from './ss5_angular_interaction/article/article.component';
import { LikeComponent } from './ss5_angular_interaction/like/like.component';
import { FooterComponent } from './ss5_angular_interaction/footer/footer.component';
import { NavbarComponent } from './ss5_angular_interaction/navbar/navbar.component';
import { ListFacilityComponent } from './case_study/list-facility/list-facility.component';
import { EditFacilityComponent } from './case_study/edit-facility/edit-facility.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './ss5_angular_interaction/countdown-timer/countdown-timer.component';
import { CreateFacilityComponent } from './case_study/create-facility/create-facility.component';
import { ListCustomerComponent } from './case_study/list-customer/list-customer.component';
import { StudentFormComponent } from './ss6_angular_form/student-form/student-form.component';
import { FormRegisterComponent } from './ss6_angular_form/form-register/form-register.component';
import { FormLogInComponent } from './ss6_angular_form/form-log-in/form-log-in.component';


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
    ListCustomerComponent,
    StudentFormComponent,
    FormRegisterComponent,
    FormLogInComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
