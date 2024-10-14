import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate media for integer input', () => {
    const input = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    const expectedMedia = 550.6;
    expect(component.calculateMedia(input)).toEqual(expectedMedia);
  });

  it('should calculate media for float input', () => {
    const input = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    const expectedMedia = 60.32;
    expect(component.calculateMedia(input)).toEqual(expectedMedia);
  });
});
