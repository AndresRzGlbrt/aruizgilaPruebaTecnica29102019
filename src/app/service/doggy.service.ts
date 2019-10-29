import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) { }

    getDoggyBreed() {
        return this.http.get("https://dog.ceo/api/breeds/list/all");
    }
    
    getBreedPhotos(breed: string) {
        return this.http.get("https://dog.ceo/api/breed/" + breed + "/images");
    }

}

