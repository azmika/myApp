import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrangProvider } from '../../providers/orang/orang';
import { DetailContactPage } from '../../pages/detail-contact/detail-contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  public orang= [];
  public errorMessage : string;
  public reloadData = false;
  constructor(
    public navCtrl: NavController, 
    public service:OrangProvider) 
    {
      this.service.getOrangFromApi()
      .subscribe(
        (response)=> {
          console.log(response);
          this.orang= response["results"]
        },
        (error) => console.log(error)
      )
    }
    doRefresh(e)
    {
      this.service.getOrangFromApi()
      .subscribe(
        (response)=> {
          console.log(response);
          this.orang= response["results"]
          e.complete()
        },
        (error) => {
          console.log(error)
          e.complete()
        }
      )
    }
    doInfinite(e){
      this.service.getOrangFromApi()
      .subscribe(
        data=> this.orang.push(...data["results"]),
        err=> console.log(err),
        ()=> e.complete()
      )
    }
    toggleReloadData(){
    this.reloadData = !this.reloadData
  }
  pushPerson(user)
  {
    this.navCtrl.push(DetailContactPage,user)
  }

  pushOrang(user){
    this.navCtrl.push(DetailContactPage,user)
  }
}
