import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { TransformProvider } from './../providers/transform/transform';


@Injectable()
export class InterceptorProvider implements HttpInterceptor {

    constructor(

        public transformProvider: TransformProvider

    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        // detect if we expect the outgoing request to return XML
        if (req.urlWithParams.indexOf("format=xml") != -1) {

            // if so, change the default responseType: json to text
            req = req.clone({
                responseType: "text"
            });
        }


        return next
            .handle(req)
            .pipe(
             map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                    // if the returned content-type actually is XML (according to the server)
                    // lets try to parse it
                    let contentType = event.headers.get("Content-Type");

                    if (contentType && contentType.indexOf("xml") != -1) {
                        event = event.clone({
                            body: this.transformProvider.convertToJson(event.body)
                        });
                    }
                }

                return event;
             })
            )

    }

}