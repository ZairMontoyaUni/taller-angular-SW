import { Injectable } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
series: Array<Serie> = [];

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }

/** Calcula el promedio de temporadas de una lista (o de todas si no se pasa lista) */
getAverageSeasons(seriesList?: Serie[]): number {
    const list = seriesList ?? this.series;
    const totalSeasons = list.reduce((sum, s) => sum + s.seasons, 0);
    return list.length > 0 ? totalSeasons / list.length : 0;
}
}

