import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ListSlidePage } from "./list-slide.page";

describe("ListSlidePage", () => {
  let component: ListSlidePage;
  let fixture: ComponentFixture<ListSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
