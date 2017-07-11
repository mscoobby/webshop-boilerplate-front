import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { RegisterComponent } from './register.component'

import { AuthenticateService } from '../authenticate.service'

describe('RegisterComponent', () => {
  let component: RegisterComponent
  let fixture: ComponentFixture<RegisterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [AuthenticateService],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  });
});
