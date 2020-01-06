import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticasPage } from './noticas.page';

describe('NoticasPage', () => {
  let component: NoticasPage;
  let fixture: ComponentFixture<NoticasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
