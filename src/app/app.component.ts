import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { environment } from '../environments/environment';
import { LD, LDAttributesMapping } from './LD.model';
import { Tracker, TrackerAttributesMapping } from './Tracker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  LDs$: Observable<LD[]>;
  Trackers$: Observable<Tracker[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.LDs$ = this.googleSheetsDbService.getActive<LD>(
      environment.LD.spreadsheetId,
      environment.LD.worksheetName,
      LDAttributesMapping,
      'Active'
    );
    this.Trackers$ = this.googleSheetsDbService.getActive<Tracker>(
      environment.Tracker.spreadsheetId,
      environment.Tracker.worksheetName,
      TrackerAttributesMapping,
      'Active'
    );
  }
}
