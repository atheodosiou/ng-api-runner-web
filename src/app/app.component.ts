import { Component, OnInit } from '@angular/core';
import { SideBarActions } from './shared/static-data/sidebar-actions';
import { FirebaseService } from './shared/services/firebase.service';
import { IEndpoint } from './shared/models/interfaces/endpoint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'apiRunner';
  toggled=false;
  sidebarActions=SideBarActions;

  endpoints:IEndpoint[];
  constructor(private firebaseService:FirebaseService){}
  onSidebarToggle(){
    this.toggled=!this.toggled;
  }

  ngOnInit(){
    this.manipulateSidebar();
  }

  private manipulateSidebar(){
    this.firebaseService.getEndpoints()
    .then(endpoints=>{
      this.endpoints = endpoints;
    })
    .catch(error=>console.error(error));
  }

  add(){
    // this.firebaseService.addEndpoint({
    //   url:'https://google.com',
    //   method:'GET'
    // }).then(result=>{console.log('Endpoint added!',result)}).catch(error=>{console.error(error)});
  }

  get(){
    // console.log('get')
    // this.firebaseService.getEndpoints().then(docs=>{console.log(docs)}).catch(error=>{console.error(error)});
  }
  getOne(){
    // this.firebaseService.getEndpoint('Xid5uhIIedny9QApfCcN').then(doc=>{console.log(doc)}).catch(error=>{console.error(error)});
  }

  updateOne(){
    // let newData={
    //   url:'https://facebook.com',
    //   method:'GET'
    // };
    // this.firebaseService.updateEndpoint('Xid5uhIIedny9QApfCcN',newData).then(()=>{console.log('Doc updated')}).catch(error=>{console.error(error)});
  }

  deleteOne(){
    // this.firebaseService.deleteEndpoint('Xid5uhIIedny9QApfCcN').then(()=>{console.log('Doc deleted')}).catch(error=>{console.error(error)});
  }
}
