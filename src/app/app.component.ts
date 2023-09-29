import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Stripe-Payment';

  constructor( public route: ActivatedRoute) {}
  

  ngOnInit(): void {
    this.route.queryParams.subscribe((param: any) => {
      console.log(param)
      if(param.session_id) {
        alert('Payment success')
      }
    })
  }

  createSubscription() {
    fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST'
    }).then((res) => {
      return res.json();
    }).then((res) => {
      console.log(res);
      window.open(res.url, '_self')
    })
  }
}
