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
      file: 'introduction.md',
    },
    {
      title: 'HTTP',
      path: 'http',
      file: 'http.md',
    },
    {
      title: 'GIT',
      path: 'git',
      file: 'git.md',
    },
    {
      title: 'HTML',
      path: 'html',
      file: 'html.md',
    },
    {
      title: 'CSS',
      path: 'css',
      file: 'css.md',
    },
    {
      title: 'JS',
      path: 'js',
      file: 'js.md',
    },
    {
      title: 'Component',
      path: 'component',
      file: 'component.md',
    },
    {
      title: 'Data Binding',
      path: 'data-binding',
      file: 'data-binding.md',
    },
    {
      title: 'Service',
      path: 'service',
      file: 'service.md',
    },
    {
      title: 'Navigation',
      path: 'navigation',
      file: 'navigation.md',
    },
    {
      title: 'HTTP Client',
      path: 'http-client',
      file: 'http-client.md',
    },
    {
      title: 'Deployment',
      path: 'deployment',
      file: 'deployment.md',
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
