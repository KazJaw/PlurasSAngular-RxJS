import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  ngOnInit() {
    of(1, 2, 5, 4, 6, 7, 8).subscribe(console.log);
    from([55, 35, 54, 56, 57, 35, 27, 67]).subscribe(
      (item) => console.log(`result from from .. ${item}`),
      err => console.log('error'), 
      () => console.log(`completed from from`)
    );
  }
}
