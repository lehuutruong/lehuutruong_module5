import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../dictionary-service/dictionary-service.service";
import {IDictionaryWord} from "../model/idictionary-word";

@Component({
  selector: 'app-dictionary-home',
  templateUrl: './dictionary-home.component.html',
  styleUrls: ['./dictionary-home.component.css']
})
export class DictionaryHomeComponent implements OnInit {
  wordList: IDictionaryWord[];
  constructor(private _dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.wordList = this._dictionaryService.wordList;
  }

}
