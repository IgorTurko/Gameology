/// <reference path="../typings/index.d.ts"/>
import {eventBus, Events} from "../event-bus";

export class HttpClient {
    get<T>(url: string): Promise<T[]> {
        return fetch(url)
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(json => json as T[], error => eventBus.emit(Events.NetworkError, error));
    };

    checkStatus(response: Response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        if (response.status == 401) {
            eventBus.emit(Events.AuthorizationRequired, error)
            throw new Error('autho');
        } else {
            var error = new Error(response.statusText);
            throw error;
        }
    };

    parseJSON(response: Response) {
        return response.json()
    };
}