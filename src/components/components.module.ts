import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { GenerateChallanComponent } from './generate-challan/generate-challan';
import { AddViolationComponent } from './add-violation/add-violation';
import { ProfileComponent } from './profile/profile';
import { NoRecordsComponent } from './no-records/no-records';

@NgModule({
	declarations: [LoginComponent,
    GenerateChallanComponent,
    AddViolationComponent,
    ProfileComponent,
    NoRecordsComponent],
	imports: [],
	exports: [LoginComponent,
    GenerateChallanComponent,
    AddViolationComponent,
    ProfileComponent,
    NoRecordsComponent,]
})
export class ComponentsModule {}
