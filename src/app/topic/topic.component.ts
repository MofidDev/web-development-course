import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Topic } from '../topic.model';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit, OnDestroy {
  topic: Topic = undefined;
  paramSub: Subscription = undefined;

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.params.subscribe((params) => {
      this.topic = this.topicService.getTopicByPath(params['topic']);
    });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }

  onMDError(event) {
    console.log(event);
  }

  getMDSrc(topic: Topic): string {
    return '/assets/content/' + topic.file;
  }
}
