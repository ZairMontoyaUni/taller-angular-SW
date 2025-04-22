import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SeriesService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  standalone: false,
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];;
  channels: string[] = [];
  totalSeasons = 0;
  averageSeasons = 0;
  selectedSerie?: Serie;

  constructor(private svc: SeriesService) {}

  ngOnInit(): void {
    this.loadAll();
    // extrae la lista única de canales para el <select>
    this.channels = Array.from(new Set(this.series.map(s => s.channel)));
  }

  private loadAll(): void {
    this.series = this.svc.getSeriesList();
    this.averageSeasons = this.svc.getAverageSeasons(this.series);
    this.selectedSerie = undefined;
  }

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
