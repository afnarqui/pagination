import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfnarquiPaginationComponent } from './afnarqui-pagination.component';

describe('AfnarquiPaginationComponent', () => {
  let component: AfnarquiPaginationComponent;
  let fixture: ComponentFixture<AfnarquiPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfnarquiPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfnarquiPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
