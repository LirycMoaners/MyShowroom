import { TestBed, async } from '@angular/core/testing';
import { MyShowroomComponent } from './my-showroom.component';
describe('MyShowroomComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyShowroomComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MyShowroomComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'My Showroom'`, async(() => {
    const fixture = TestBed.createComponent(MyShowroomComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My Showroom');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(MyShowroomComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to MyShowroom!');
  }));
});
