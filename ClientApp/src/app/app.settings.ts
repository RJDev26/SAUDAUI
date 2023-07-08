import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'Sauda Web',       //theme name
        true,           //loadingSpinner
        true,           //fixedHeader
        true,           //sidenavIsOpened
        true,           //sidenavIsPinned  
        true,           //sidenavUserBlock 
        'vertical',     //horizontal , vertical
        'default',      //default, compact, mini
        'teal-light', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
        false,          // true = rtl, false = ltr
        true            // true = has footer, false = no footer
    )
}

