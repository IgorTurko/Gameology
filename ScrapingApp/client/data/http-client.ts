﻿/// <reference path="../typings/index.d.ts"/>
import {eventBus, Events} from "../event-bus";

export default class HttpClient {
    get<T>(url: string): Promise<T> {
        return this.fetch(url);
    };

    post<T>(url: string, body: any): Promise<T> {
        return this.fetch(url, body);
    };

    private fetch<T>(url: string, body?: any): Promise<T> {
        const options: RequestInit = {
            credentials: 'same-origin'
        };

        if (body) {
            options.body = JSON.stringify(body);
            options.method = 'POST';
            options.headers = { "Content-Type": "application/json" }
        }

        return new Promise((resolve, reject) => {
            fetch(url, options).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(data => resolve(data));
                    return;
                }

                if (response.status == 401) {
                    eventBus.emit(Events.AuthorizationError)
                } else {
                    eventBus.emit(Events.NetworkError);
                }

                reject();
            }, error => {
                eventBus.emit(Events.NetworkError);
                reject();
            });
        });
    }
}