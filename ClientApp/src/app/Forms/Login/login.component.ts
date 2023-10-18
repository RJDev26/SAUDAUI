import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form:UntypedFormGroup;
  public settings: Settings;
  returnUrl: any;

  constructor(public appSettings: AppSettings, public fb: UntypedFormBuilder, public router: Router
    , private authService: AuthenticationService, private route: ActivatedRoute) {
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public onSubmit(values: Object): void {
    debugger
    if (this.form.valid)
    {
      const login = { ...this.form.value };
      this.authService.Login(login)
        .subscribe({
          next: (res: any) => {
            debugger
            localStorage.setItem("token", res.token);
            this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
            this.router.navigate([this.returnUrl]);
          },
          error: (err: any) => {
            //this.errorMessage = err.message;
            //this.showError = true;
          }
        })


    //  this.router.navigate(['/']);
    }
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
}
