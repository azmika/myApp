
import { Component } from '@angular/core';

import { Platform, ActionSheetController, NavController } from 'ionic-angular';

@Component({
selector: 'page-badge',   
  templateUrl: 'badge.html'
})

export class BadgePage {
  constructor(
    public navCtrl : NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }
  public event = {
    month: '2018-12-26',
    timeStarts: '07:43',
    timeEnds: '2200-12-31'
  }
}