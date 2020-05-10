import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/repository.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repositoryService.getAll().subscribe(response => console.log(response));
  }

}
