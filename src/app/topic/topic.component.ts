import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit, OnDestroy {
  topic: string = null;
  private paramSub: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramSub = this.route.params.subscribe((params) => {
      this.topic = params['topic'];
    });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }
}
