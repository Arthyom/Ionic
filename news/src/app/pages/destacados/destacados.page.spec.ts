import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DestacadosPage } from './destacados.page';

describe('DestacadosPage', () => {
  let component: DestacadosPage;
  let fixture: ComponentFixture<DestacadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestacadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DestacadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
