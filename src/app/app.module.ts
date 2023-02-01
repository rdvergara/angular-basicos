import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeroesModule,
        contadorModule,
        DbzModule
    ]
})
export class AppModule { }
