import { Component, OnInit } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingState } from 'src/store/loading/LoadingState';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent  implements OnInit {

  loadingState$!: Observable<LoadingState>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // Menggunakan createFeatureSelector langsung di komponen
    const selectLoadingState = createFeatureSelector<LoadingState>('loading');
    this.loadingState$ = this.store.select(selectLoadingState);
  }

}
