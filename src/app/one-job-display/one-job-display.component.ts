import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-one-job-display',
  templateUrl: './one-job-display.component.html',
  styleUrls: ['./one-job-display.component.scss']
})
export class OneJobDisplayComponent implements OnInit {

  @Input() job;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'MANAGEMENT',
      sanitizer.bypassSecurityTrustResourceUrl('https://image.flaticon.com/icons/svg/115/115876.svg'));

    iconRegistry.addSvgIcon(
      'MANUFACTURING_AND_WAREHOUSE',
      sanitizer.bypassSecurityTrustResourceUrl('https://image.flaticon.com/icons/svg/75/75876.svg'));

    iconRegistry.addSvgIcon(
      'COMPUTER_AND_IT',
      sanitizer.bypassSecurityTrustResourceUrl('https://image.flaticon.com/icons/svg/71/71739.svg'));

    iconRegistry.addSvgIcon(
      'MEDIA_COMMUNICATIONS_AND_WRITING',
      sanitizer.bypassSecurityTrustResourceUrl('https://cdn.onlinewebfonts.com/svg/img_157010.svg'));
    
    iconRegistry.addSvgIcon(
      'Random',
      sanitizer.bypassSecurityTrustResourceUrl('https://cdn.onlinewebfonts.com/svg/img_524293.svg'));
  }

  ngOnInit() {
    
  }

  setIcon(value) {
    if (value === "MANAGEMENT") {
      return "MANAGEMENT"
    } else if (value === "MANUFACTURING_AND_WAREHOUSE"){
      return "MANUFACTURING_AND_WAREHOUSE"
    } else if (value === "COMPUTER_AND_IT") {
      return "COMPUTER_AND_IT"
    } else if (value === "MEDIA_COMMUNICATIONS_AND_WRITING") {
      return "MEDIA_COMMUNICATIONS_AND_WRITING"
    }
    return "Random";
  }

}
