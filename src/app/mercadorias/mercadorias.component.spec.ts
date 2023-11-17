import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoriasComponent } from './mercadorias.component';

describe('MercadoriasComponent', () => {
  let component: MercadoriasComponent;
  let fixture: ComponentFixture<MercadoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercadoriasComponent]
    });
    fixture = TestBed.createComponent(MercadoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
