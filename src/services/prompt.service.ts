import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from "@angular/core";
import { Subject } from 'rxjs';
import { BackgroundComponent } from 'src/app/components/alerts/background/background.component';

@Injectable()

export class PromptService {

    public ConfirmSourse =  new Subject();
    public confirm$ = this.ConfirmSourse.asObservable();

    private component = BackgroundComponent;

    constructor (
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}

    public checkAnswer() {  
        this.appendComponentToBody(this.component);
     }
    
    public appendComponentToBody(component: any) {

        const componentRef = this.componentFactoryResolver
        .resolveComponentFactory(component)
        .create(this.injector)

        this.appRef.attachView(componentRef.hostView);

        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;

        document.body.appendChild(domElem);

        this.confirm$.subscribe(data => {
                this.appRef.detachView(componentRef.hostView);
                componentRef.destroy();
        });
    }

}