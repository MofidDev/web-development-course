import { Injectable } from '@angular/core';
import { Topic } from './topic.model';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private topics: Topic[] = [
    {
      title: 'Introduction',
      titlefa: 'مقدمه',
      path: 'introduction',
      file: 'introduction.md',
    },
    {
      title: 'HTTP',
      titlefa: 'پروتکل HTTP',
      path: 'http',
      file: 'http.md',
    },
    {
      title: 'GIT',
      titlefa: 'ورژن کنترل سیستم: گیت',
      path: 'git',
      file: 'git.md',
    },
    {
      title: 'Environment Setup',
      titlefa: 'آماده‌سازی محیط توسعه و نوشتن اولین پروژه',
      path: 'env-setup',
      file: 'env-setup.md',
    },
    {
      title: 'HTML',
      titlefa: 'اچ.تی.ام.ال',
      path: 'html',
      file: 'html.md',
    },
    {
      title: 'CSS',
      titlefa: 'سی.اس.اس',
      path: 'css',
      file: 'css.md',
    },
    {
      title: 'JavaScript',
      titlefa: 'جاوا اسکریپت',
      path: 'javascript',
      file: 'js.md',
    },
    {
      title: 'TypeScript',
      titlefa: 'تایپ اسکریپت',
      path: 'typescript',
      file: 'ts.md',
    },
    {
      title: 'Component',
      titlefa: 'کامپوننت',
      path: 'component',
      file: 'component.md',
    },
    {
      title: 'Data Binding',
      titlefa: 'الحاق داده',
      path: 'data-binding',
      file: 'data-binding.md',
    },
    {
      title: 'Service',
      titlefa: 'خدمت',
      path: 'service',
      file: 'service.md',
    },
    {
      title: 'Navigation',
      titlefa: 'ناوبری',
      path: 'navigation',
      file: 'navigation.md',
    },
    {
      title: 'HTTP Client',
      titlefa: 'ارتباط با API',
      path: 'http-client',
      file: 'http-client.md',
    },
    {
      title: 'Deployment',
      titlefa: 'استقرار',
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
