import { NgModule } from "@angular/core";

// To use Material Component  
import { MatSidenavModule, MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatMenuModule } from '@angular/material';  



@NgModule({
    imports: [ 
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule, 
        MatMenuModule
    ],
    exports: [ 
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule, 
        MatMenuModule
    ]
})
export class MyMaterialModule {

}