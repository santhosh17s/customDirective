import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MainEffects {

    constructor(private actions$: Actions){ }

   /*  @Effect() update$ = this.actions$
            .ofType('SUPER_SIMPLE_EFFECT')
            .switchMap( () => Observable.of({type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED"}));     */



}
