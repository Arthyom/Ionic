import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { InfitePage } from "./infite.page";

describe("InfitePage", () => {
  let component: InfitePage;
  let fixture: ComponentFixture<InfitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
