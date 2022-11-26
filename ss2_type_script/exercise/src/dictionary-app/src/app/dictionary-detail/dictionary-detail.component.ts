import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {IDictionaryWord} from "../model/idictionary-word";
import {DictionaryServiceService} from "../dictionary-service/dictionary-service.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail: IDictionaryWord ;
  index: number;

  constructor(private _activatedRoute: ActivatedRoute, private _dictionaryService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.index = params['index'];
      this.wordDetail = this._dictionaryService.getFindByIndex(this.index)
    })
  }
}
