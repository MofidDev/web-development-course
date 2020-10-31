import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic/topic.model';
import { TopicService } from '../topic/topic.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  topics: Topic[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topics = this.topicService.getAllTopics();
  }
}
