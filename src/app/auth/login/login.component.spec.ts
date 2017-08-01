import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { LoginComponent } from './login.component'

import { AuthenticateService } from '../authenticate.service'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthenticateService],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  });
});
