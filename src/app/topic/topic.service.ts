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
      path: 'intro',
      file: 'intro.md',
      done: true,
    },
    {
      title: 'HTTP',
      titlefa: 'پروتکل HTTP',
      path: 'http',
      file: 'http.md',
      done: true,
    },
    {
      title: 'GIT',
      titlefa: 'ورژن کنترل سیستم، گیت',
      path: 'git',
      file: 'git.md',
      done: true,
    },
    {
      title: 'Environment Setup',
      titlefa: 'آماده‌سازی محیط توسعه و نوشتن اولین پروژه',
      path: 'env-setup',
      file: 'env-setup.md',
      done: true,
    },
    {
      title: 'HTML',
      titlefa: 'HTML',
      path: 'html',
      file: 'html.md',
      isltr: true,
      done: true,
    },
    {
      title: 'CSS',
      titlefa: 'CSS',
      path: 'css',
      file: 'css.md',
      isltr: true,
      done: true,
    },
    {
      title: 'JavaScript',
      titlefa: 'JavaScript',
      path: 'javascript',
      file: 'js.md',
      isltr: true,
      done: true,
    },
    {
      title: 'TypeScript',
      titlefa: 'TypeScript',
      path: 'typescript',
      file: 'ts.md',
      isltr: true,
      done: true,
    },
    {
      title: 'Angular',
      titlefa: 'فریم‌ورک انگولار',
      path: 'angular',
      file: 'angular.md',
      done: true,
    },
    {
      title: 'Directive',
      titlefa: 'دستورالعمل‌ها (دیرکتیو)',
      path: 'directive',
      file: 'directive.md',
      done: true,
    },
    {
      title: 'Component',
      titlefa: 'کامپوننت',
      path: 'component',
      file: 'component.md',
      done: true,
    },
    {
      title: 'Data Binding',
      titlefa: 'الحاق داده',
      path: 'data-binding',
      file: 'data-binding.md',
      done: true,
    },
    {
      title: 'Service',
      titlefa: 'خدمت',
      path: 'service',
      file: 'service.md',
      done: true,
    },
    {
      title: 'Navigation',
      titlefa: 'ناوبری',
      path: 'navigation',
      file: 'navigation.md',
      done: true,
    },
    {
      title: 'Observables',
      titlefa: 'الگوی observer',
      path: 'observables',
      file: 'observables.md',
      done: true,
    },
    {
      title: 'Form',
      titlefa: 'فرم‌های ورود اطلاعات',
      path: 'form',
      file: 'form.md',
      done: true,
    },
    {
      title: 'Pipe',
      titlefa: 'تغییر شکل خروجی با پایپ',
      path: 'pipe',
      file: 'pipe.md',
      done: true,
    },
    {
      title: 'HTTPClient',
      titlefa: 'ارتباط با API',
      path: 'http-client',
      file: 'http-client.md',
      done: true,
    },
    {
      title: 'Authentication',
      titlefa: 'احراز هویت',
      path: 'auth',
      file: 'auth.md',
      done: true,
    },
    {
      title: 'Deployment',
      titlefa: 'استقرار',
      path: 'deployment',
      file: 'deployment.md',
      done: true,
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
