import {Router, Routes} from '@angular/router'
import {GraphsComponent} from './graphs/graphs.component'
import {Graphs2Component} from './graphs2/graphs2.component'

export const ROUTES : Routes = [
    {path: '', component: GraphsComponent},
    {path: 'dash2', component: Graphs2Component}
]