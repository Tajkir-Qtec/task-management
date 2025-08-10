import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language = 'ja';


  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    const localLan = localStorage.getItem('lan') || 'ja';
    this.language = localLan;
  }

  handleLanguageChange(e: any) {
    this.language = e.target.value;
    localStorage.setItem('lan', this.language);
    this.translateService.use(this.language);
  }
}
