import { ContadorComponet } from './contador/contador.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        ContadorComponet
    ],
    exports:[
        ContadorComponet
    ],
    imports:[

    ]
})
export class contadorModule{}