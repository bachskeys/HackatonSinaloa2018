import { Injectable } from '@angular/core';
import { FacebookService, InitParams,AuthResponse } from 'ngx-facebook';


@Injectable()
export class FbsService {
constructor(private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '1104667049669679',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

}
