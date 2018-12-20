import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders ({
        'Authorization' : 'Bearer 5qAEl0vrgwLVjySJJ5ynP8JG42qCz7m4is5ZO_-4ZJ1Iyu9KpjyvbLZvBV8_YeCkmXxQwRbq3MMKhTLKM15Zlm_WatR6wZFYWzjV4je8KIWNWHafkLOjzj5XPLsbXHYx'
    })
}

var clientID = 'VWzYKOVf_cRKBb9HK6fcUA'

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _baseUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&open_now=true&location="

    constructor(private _http: HttpClient) {}

    getYelp(states: string, city: string, prices: string)  {
        return this._http.get<any>(`${this._baseUrl}${city},${states}&price=${prices}`, httpOptions)
    }

}