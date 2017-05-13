import {Directive, ElementRef, Inject, Input, OnDestroy} from '@angular/core';
import {DEFAULT_CFG} from './default-config';
import {Config} from './config-interface';

@Directive({
  selector: '[<%=cameledName%>]'
})

export class <%=classedName%>Directive implements OnDestroy {
  cfg: Config;

  constructor(el: ElementRef, userCfg: any) {
    // provide configuration
    this.cfg = Object.assign({}, DEFAULT_CFG, userCfg);
  }

  ngOnDestroy() {
  }
}
