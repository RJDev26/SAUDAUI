import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AuthenticationService } from './authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form:UntypedFormGroup;
  public settings: Settings;
  returnUrl: any;

  constructor(public snackBar: MatSnackBar, public appSettings: AppSettings, public fb: UntypedFormBuilder, public router: Router
    , private authService: AuthenticationService, private route: ActivatedRoute) {
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public onSubmit(values: Object): void {
    if (this.form.valid)
    {
      const login = { ...this.form.value };
      this.authService.Login(login)
        .subscribe({
          next: (res: any) => {
            localStorage.setItem("token", res.token);
            localStorage.setItem("userData", JSON.stringify(res));
            this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
            this.authService.saveUserData(res);
            this.router.navigate([this.returnUrl]);
          },
          error: (err: any) => {
            console.log('err', err);
            if(!err.error.isAuthSuccessful){
              this.showToaster(err.error.errorMessage, true);
            }
            //this.errorMessage = err.message;
            //this.showError = true;
          }
        })


    //  this.router.navigate(['/']);
    }
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError? 6000 : 3000;
  
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
}
