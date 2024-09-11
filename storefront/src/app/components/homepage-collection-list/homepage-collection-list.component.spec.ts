import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCollectionListComponent } from './homepage-collection-list.component';

describe('HomepageCollectionListComponent', () => {
  let component: HomepageCollectionListComponent;
  let fixture: ComponentFixture<HomepageCollectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageCollectionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageCollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
