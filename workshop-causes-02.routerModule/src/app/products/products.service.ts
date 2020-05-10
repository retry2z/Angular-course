import { Injectable } from '@angular/core';
import { RepositoryService } from 'src/app/repository.service';
import { ICause } from '../shared/interfaces/cause';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  item: ICause;
  products: ICause[];
  constructor(private repositoryService: RepositoryService) {
    //TODO HTTP CALLS.    
  }

  load() {
    this.repositoryService.getAll().subscribe(response => {
      this.products = response;
    });
  }

  details(id: number) {
    this.repositoryService.get(id).subscribe(response => {
      this.item = response;
    })
  }

  donation(value: number) {
    this.item.collectedAmount += value;
    this.repositoryService.update(this.item.id, this.item).subscribe(response => {
      this.item = response;
    })
  }

}
