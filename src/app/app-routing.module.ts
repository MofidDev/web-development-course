import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  {
    path: 'topic/:topic',
    component: TopicComponent,
  },
  {
    path: '**',
    redirectTo: 'intro',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
