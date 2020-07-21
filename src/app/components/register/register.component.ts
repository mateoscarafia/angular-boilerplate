import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserService]
})

export class RegisterComponent implements OnInit {
    constructor(
        private _userService: UserService
    ) { }
    ngOnInit() {
        this._userService.register().subscribe(
            response => {
                console.log(response)
            },
            error => {
                console.log(error)
            }
        )
    }
}