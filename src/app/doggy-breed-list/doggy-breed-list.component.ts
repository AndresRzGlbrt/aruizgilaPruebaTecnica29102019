import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/doggy.service';

@Component({
  selector: 'app-doggy-breed-list',
  templateUrl: './doggy-breed-list.component.html',
  styleUrls: ['./doggy-breed-list.component.scss'],
  providers: [ConfigService]
})
export class DoggyBreedListComponent implements OnInit {

  public doggyBreedsObject;
  public doggyBreeds = [];
  public selectedBreed;
  public doggyBreedPhotos = [];

  constructor(
    private configService: ConfigService
    ) { }

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.configService.getDoggyBreed().subscribe(data => {
      this.doggyBreedsObject = data['message'];
      for (let element in this.doggyBreedsObject) {
        this.doggyBreeds.push(element.toString());
      };
    });
  }

  getBreedPhotos(event) {
    this.doggyBreedPhotos = [];
    console.log(event.target.value);
    this.configService.getBreedPhotos(event.target.value).subscribe(data => {
      console.log(data);
      this.doggyBreedPhotos = [];
      data['message'].forEach(element => {
        this.doggyBreedPhotos.push(element);
      });
    });
  }

}
