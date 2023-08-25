import { DatePipe } from "@angular/common";
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IResponseUser } from "src/app/models/users.interface";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent {

  id: string | undefined
  user: IResponseUser | undefined
  constructor (
    private router: ActivatedRoute,
    private usersService: UsersService,
    ) {}

  ngOnInit(){
    // this.router.params.subscribe((params: any) => {
    //   this.id = params.id
    //   if(this.id) this.usersService.getUser(this.id).subscribe({
    //     next: (responseNext: {data: IResponseUser}) => this.user = responseNext.data,
    //     error: (error: any) => console.error(error),
    //     complete: ()=> console.log('petición terminada')
    //   })
    // })
    this.user = history.state.data
    console.log("%c 🤥 Ruben: ContactDetailPageComponent -> ngOnInit -> history.state ", "font-size:16px;background-color:#e17365;color:white;", history.state.data)
  }
}
