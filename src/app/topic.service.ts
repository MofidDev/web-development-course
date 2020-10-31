import { Injectable } from '@angular/core';
import { Topic } from './topic.model';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private topics: Topic[] = [
    {
      title: 'Introduction',
      path: 'introduction',
    },
    {
      title: 'HTTP',
      path: 'http',
    },
    {
      title: 'GIT',
      path: 'git',
    },
    {
      title: 'HTML',
      path: 'html',
    },
    {
      title: 'CSS',
      path: 'css',
    },
    {
      title: 'JS',
      path: 'js',
    },
    {
      title: 'Component',
      path: 'component',
    },
    {
      title: 'Data Binding',
      path: 'data-binding',
    },
    {
      title: 'Service',
      path: 'service',
    },
    {
      title: 'Navigation',
      path: 'navigation',
    },
    {
      title: 'HTTP Client',
      path: 'http-client',
    },
    {
      title: 'Deployment',
      path: 'deployment',
    },
  ];

  getAllTopics(): Topic[] {
    return this.topics;
  }

  isValidTopic(path: string) {
    for (const item of this.topics) {
      if (item.path == path) return true;
    }
    return false;
  }

  getTopicByPath(path: string): Topic {
    for (const item of this.topics) {
      if (item.path == path) return item;
    }
    return undefined;
  }

  constructor() {}
}
