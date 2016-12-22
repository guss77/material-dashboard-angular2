import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
declare var $:any;
import initFixedPlugin = require('../assets/js/initFixedPlugin.js');

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    ngOnInit(){
        $.getScript('../assets/js/initMenu.js');
        initFixedPlugin();
    }
    public isMaps(path){
        if(path == window.location.pathname){
            return false;
        }
        else {
            return true;
        }
    }
}