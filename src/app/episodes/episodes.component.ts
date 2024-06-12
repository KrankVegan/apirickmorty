import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rickandmorty.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getEpisodes().subscribe((data: any) => {
      this.episodes = data.results;
    });
  }
}
