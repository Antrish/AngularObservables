import { Component } from '@angular/core';
import { Observable, filter, from, interval, map, of } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService]
  
})
export class AppComponent {
  title = 'AngularObservables';
  //WAY -1 Using observable constructor
  //=======================================================
  // myObservable = new Observable((observer) => {
  //   console.log('Observabale started...');
  //   setTimeout(() => {observer.next('1')}, 1000);
  //   setTimeout(() => {observer.next('2')}, 2000);
  //   setTimeout(() => {observer.next('3')}, 3000);
  //   // setTimeout(() => {observer.error(new Error('Something went wrong, please try again later'))}, 3000); // is handled in a better way in error callback of subscribe method.
  //   setTimeout(() => {observer.next('4')}, 4000);
  //   setTimeout(() => {observer.next('5')}, 5000);
  //   setTimeout(() => {observer.complete()}, 6000);

  //   // observer.next('1');
  //   // observer.next('2');
  //   // observer.next('3');
  //   // observer.next('4');
  //   // observer.next('5');
  //   // observer.next('6');
  // });
  // WAY - 2 Observable create method 
  // =====================================================
  // myObservable = Observable.create((observer) =>{
  //   console.log('Observabale create started...');
  //   setTimeout(() => {observer.next('Data1')}, 1000);
  //   setTimeout(() => {observer.next('Data2')}, 2000);
  //   setTimeout(() => {observer.next('Data3')}, 3000);
  // });

  // Way - 3  Using of() operator
  // =================================
  infiniteObservable = interval(1000);
  infiniteSubProp;
  array1 = [1,2,3,4,5];
  array2 = ['A', 'B', 'C', 'D'];
 // myObservable = of(this.array1, this.array2);

  // Way - 4  Using from() operator
  // =================================
  // myObservable = from(this.indefiniteNumbers).pipe(map((val) =>{
  //   return val*5; // this is returning new transformed observable. Now subscribe to 'transformedObservable'
  // }),filter((val) =>{
  //   return val >= 15; // filters the values >= 15 emitted by 'transformedObservable'
  // }));;
  // calling map operator on source observable and then multyplying emiited data with 5.
  // transformedObservable = this.myObservable.pipe(map((val) =>{
  //   return val*5; // this is returning new transformed observable. Now subscribe to 'transformedObservable'
  // }),filter((val) =>{
  //   return val >= 15; // filters the values >= 15 emitted by 'transformedObservable'
  // }));
  // filteredObservable = this.transformedObservable.pipe(filter((val) =>{
  //   return val >= 15; // filters the values >= 15 emitted by 'transformedObservable'
  // }))
  ngOnInit(){
    // this.myObservable.subscribe((data)=>{
    //   console.log(data)
    // }, (error)=>{
    //   alert(error.message);
    // }, ()=>{
    //   alert('Observable has reached to end of data emission')
    // })
   
  }
  unsub(){
    this.infiniteSubProp.unsubscribe();
  }
  sub(){
    this.infiniteSubProp =  this.infiniteObservable.subscribe((val) =>{
      console.log(val);
    })
  }
}
 