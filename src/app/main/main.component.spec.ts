import { TestBed, async } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent
      ],
    }).compileComponents();
  }));

  it('should create the main', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const main = fixture.debugElement.componentInstance;
    expect(main).toBeTruthy();
  });

  it(`should have as title 'angular-tutorial-use-decorator-and-ngrx'`, () => {
    const fixture = TestBed.createComponent(MainComponent);
    const main = fixture.debugElement.componentInstance;
    expect(main.title).toEqual('angular-tutorial-use-decorator-and-ngrx');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-tutorial-use-decorator-and-ngrx!');
  });
});
