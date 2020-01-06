import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarYrangePage } from './bar-yrange.page';

describe('BarYrangePage', () => {
  let component: BarYrangePage;
  let fixture: ComponentFixture<BarYrangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarYrangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarYrangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
