import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
  providers:[UserService] //lehna service disponible ken lel composant hedha 
})
export class ListuserComponent implements OnInit {
   list : User[];
   listInitiale : User[];
   prop1="x";
   prop2="testngmodel";
   prop3="test";
   searchval="test";
  constructor(private uc:UserService,private ac:ActivatedRoute) { }
  getVal(val:string){
  
    this.prop1=val;
    console.log(this.prop1);
  }

  ngOnInit(): void {
    //this.list=this.uc.getAllUsersFromDB();
    this.uc.getAllUsersFromDB().subscribe(res=>{this.list=res;this.listInitiale=this.list;
      this.ac.paramMap.subscribe(
        res => {
        console.log(res.get('cat')); 
        this.list=this.listInitiale.filter((user) =>{
           return user.accountCategory === res.get('cat');//return user.accountCategory === res.get('category')  ;
        });
      })
    });
    this.list=this.uc.getAllUsers();
    this.listInitiale=this.uc.getAllUsers();
    // this.ac.paramMap.subscribe(
    //   res=>console.log(res.get('cat')));
    this.list=[
      {
        idCustomer: 1,
        firstName: "Mila",
        lastName: " Kunis",
        birthDate: "1999-06-30",
        accountCategory: "Admin",
        email: "mila@kunis.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 2,
        firstName: "George",
        lastName: "Clooney",
        birthDate: "1999-06-30",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 3,
        firstName: "George",
        lastName:  "Clooney",
        birthDate: "1999-06-30",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 4,
        firstName: "Ryan",
        lastName:  "Gossling",
        birthDate:"1999-06-30",
        accountCategory: "Golden",
        email: "Ryan@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 5,
        firstName: "Robert",
        lastName:  "Downey",
        birthDate: "1999-06-30",
        accountCategory: "Blocked Account",
        email: "robert@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
        profession: "Software Engineer"
      }

      

];
this.listInitiale=this.list;
     this.ac.paramMap.subscribe(
      res => {
      console.log(res.get('cat')); 
      this.list=this.listInitiale.filter((user) =>{
         return user.accountCategory === res.get('cat');//return user.accountCategory === res.get('category')  ;
      });
    })


  }


deleteUser(i:number){
this.list.splice(i,1);
console.log(this.list);
}
}
