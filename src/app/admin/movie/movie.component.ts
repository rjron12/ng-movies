import { Component } from '@angular/core';

@Component({
  selector: 'movie-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  canDeactivate() {
    return confirm("Are you sure want to leave unsaved?");
  }

}
