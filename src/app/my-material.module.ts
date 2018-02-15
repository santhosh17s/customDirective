import { NgModule } from "@angular/core";

// To use Material Component  
import { MatSidenavModule, MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatMenuModule } from '@angular/material';  



@NgModule({
    imports: [ 
        MatSidenavModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule, 
        MatMenuModule
    ],
    exports: [ 
        MatSidenavModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule, 
        MatMenuModule
    ]
})
export class MyMaterialModule {

}