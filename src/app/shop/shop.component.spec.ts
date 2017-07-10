import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponent } from './shop.component';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('function select( product )', () => {
    beforeEach(() => {
      spyOn(console, 'log')
    })

    it('should be defined', () => {
      expect(component.select).toBeDefined()
    })

    it('should log the product', () => {
      component.select(2)
      expect(console.log).toHaveBeenCalledWith({id: 2, name: 'Notebook', image: 'assets/images/products/notebook.png'})
    })

    it('should select the first product if none is passer', () => {
      component.select()
      expect(console.log).toHaveBeenCalledWith({id: 1, name: 'Pen', image: 'assets/images/products/pen.png'})
    })
  })
});
