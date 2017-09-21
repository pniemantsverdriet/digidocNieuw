import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthService, public navParams: NavParams) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }
 
  public gaDoor(){
    this.nav.setRoot('TabsPage');
  }

  public gaDoor2(){
    this.nav.setRoot('DesktoplayoutPage');
  }
  gaDoor3(){
    this.nav.setRoot('AndereDesktoplayoutPage')
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}
