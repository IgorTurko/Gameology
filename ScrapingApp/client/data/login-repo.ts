/// <reference path="../typings/index.d.ts"/>
import Credentials = Api.AuthenticationCredentials;
import HttpClient from './http-client'; 

export default class LoginRepository {
    private httpClient = new HttpClient();

    login(credentials: Credentials): Promise<any> {
        return this.httpClient.post('/api/login', credentials);
    };
}