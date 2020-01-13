import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date());
  quotes: Quote[] =[
    new Quote(1, 'A hundred times every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.', 'Albert Einstein','Jose',new Date()),
    new Quote(1, 'Love what you do and do what you love. Don’t listen to anyone else who tells you not to do it. You do what you want, what you love. Imagination should be the center of your life.', 'RAY BRADBURY','John',new Date()),
    new Quote(1, 'Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality.', 'JONAS SALK','Mary',new Date())
  ]
  
  @Output() addQuote = new EventEmitter<Quote>();
  

  addNewQuote(quote){

    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);

  }
  
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quot}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }
  
  ngOnInit() {
  }

}
