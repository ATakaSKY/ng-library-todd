import { NgModule } from '@angular/core';
import { NgLibraryToddComponent } from './ng-library-todd.component';
import { FooComponent } from './foo/foo.component';



@NgModule({
  declarations: [NgLibraryToddComponent, FooComponent],
  imports: [
  ],
  exports: [NgLibraryToddComponent, FooComponent]
})
export class NgLibraryToddModule { }
