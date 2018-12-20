import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms'
import { DataService } from '../data.service';
@Component({
  selector: 'app-yelp-form',
  templateUrl: './yelp-form.component.html',
  styleUrls: ['./yelp-form.component.scss']
})
export class YelpFormComponent implements OnInit {
  useBtn = false
  yelpSearch: FormGroup
  rating
  delivers
  prices = [
    {value: 1, view: '$'},
    {value: 2, view: '$$'},
    {value: 3, view: '$$$'},
    {value: 4, view: '$$$$'}
  ]
  states = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI',
    'ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI',
    'MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC',
    'ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT',
    'VT','VA','WA','WV','WI','WY'
  ]

  public _yelp: any[] = []

  constructor(private fb: FormBuilder, private _dService: DataService) { 
    setTimeout(() => {
      this.useBtn = true
    }, 3000)
  }

  ngOnInit() {
    this.yelpSearch = this.fb.group({
      city: new FormControl(),
      state: new FormControl(),
      price: new FormControl(),

    })
  }

  setDelivers(d) {
    console.log(d)
    if (d.includes("delivery")) {
      this.delivers = "Delivers"
    } else {
      this.delivers = "Does not deliver"
    }
  }

  setRating(rating) {
    if (rating === 1) {
      this.rating = "⭐"
    } else if (rating === 1.5) {
      this.rating = "⭐+ 1/2"
    } else if (rating === 2) {
      this.rating = "⭐⭐"
    } else if (rating === 2.5) {
      this.rating = "⭐⭐ + 1/2"
    } else if (rating === 3) {
      this.rating = "⭐⭐⭐"
    } else if (rating === 3.5) {
      this.rating = "⭐⭐⭐ + 1/2"
    } else if (rating === 4) {
      this.rating = "⭐⭐⭐⭐"
    } else if (rating === 4.5) {
      this.rating = "⭐⭐⭐⭐ + 1/2"
    } else if (rating === 5) {
      this.rating = "⭐⭐⭐⭐⭐"
    } else {
      this.rating = " "
    }

  }

  onYelp(): void {
    this._dService.getYelp(this.yelpSearch.controls['city'].value, this.yelpSearch.controls['state'].value, this.yelpSearch.controls['price'].value).subscribe(res => {console.log(res), this._yelp = res.businesses[6], this.setRating(res.businesses[0].rating), this.setDelivers(res.businesses[0].transactions)})
    console.log(this._yelp)
  }

}
