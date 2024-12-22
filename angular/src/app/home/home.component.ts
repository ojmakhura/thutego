import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent, SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, SharedModule, MaterialModule, LoaderComponent],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor() {}

  ngOnInit() {
  }
}
