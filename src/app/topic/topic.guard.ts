import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root',
})
export class TopicGuard implements CanActivate {
  constructor(private router: Router, private topicService: TopicService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isValidTopic = this.topicService.isValidTopic(next.params['topic']);
    if (!isValidTopic) return this.router.createUrlTree(['/']);
    else return true;
  }
}
