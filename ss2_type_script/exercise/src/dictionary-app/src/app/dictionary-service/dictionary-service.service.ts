import {Injectable} from '@angular/core';
import {IDictionaryWord} from "../model/idictionary-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  [x: string]: any;

  wordList: IDictionaryWord[] = [
    {english: 'dog', vietnam: 'Do Duc Uy'},
    {english: 'stupid', vietnam: 'Uy(bom)'},
    {english: 'dirty', vietnam: 'Uy Khang'},
    {english: 'no brain', vietnam: 'U y'},
    {english: 'nice', vietnam: 'khong phai uy'},
  ];

  constructor() {
  }

  getFindByIndex(index: number) {
    return this.wordList.find(value => index)
  }
}
