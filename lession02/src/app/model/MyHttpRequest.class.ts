
import { RequestOptions, BaseRequestOptions, RequestOptionsArgs } from '@angular/http';

export class MyHttpRequest extends BaseRequestOptions {

	constructor(value){
		
		super();
		this.headers.append("Authorization",value);
	}

}