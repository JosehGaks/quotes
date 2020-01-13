import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Quote } from '@angular/compiler';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-quot-details',
  templateUrl: './quot-details.component.html',
  styleUrls: ['./quot-details.component.css']
})
export class QuotDetailsComponent implements OnInit {
  
  @Input() quote: Quote
  @Output() isComplete = new EventEmitter<boolean>();
  constructor() { }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  
  upvotes: number = 0;
  downvotes: number = 0;
  
  downvote(){
    this.downvotes=this.downvotes+1;
      

  }
  upvote(){
    this.upvotes = this.upvotes+1;

  }
 
  ngOnInit() {
  }

}
