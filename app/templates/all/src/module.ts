import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {userCfg} from './user-cfg';

@NgModule({
  declarations: [
  ],
  imports: [],
  exports: [
  ],
  providers: []
})
export class <%=ngModuleName%> {
  // add forRoot to make it configurable
  static forRoot(userCfgPassedByUser?: any): ModuleWithProviders {
    // NOTE: this is never allowed to contain any conditional logic
    return {
      ngModule: <%=ngModuleName%>,
      providers: [{provide: userCfg, useValue: userCfgPassedByUser}]
    };
  }
}
