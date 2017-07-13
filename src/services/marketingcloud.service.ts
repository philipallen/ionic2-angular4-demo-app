import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// import { Bookmark } from '../models/bookmark';
// import { BOOKMARKS } from '../mock/mock-bookmarks';

@Injectable()
export class MarketingCloudService {
    //see ionic.config.json for proxy information.
    //a proxy is setup to prevent CORS errors in the browser
    //TODO set this up so it automatically uses the proxy for browser and doesn't use it for device
    private requestTokenUrl = '/v1/requestToken';
    // private requestTokenUrl = 'https://auth.exacttargetapis.com/v1/requestToken';

    constructor (private http: Http) {}

//   getHeroes(): Observable<Hero[]> {
//     return this.http.get(this.heroesUrl)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }

    getAccessToken(data: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.requestTokenUrl, data, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    } 

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}