import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {}

  changeBg(toggle: Toggle) {
    this.settingsService.setBackground(toggle.checked);
  }

  checkAltBg() {
    return this.settingsService.isAltBackground();
  }
}
