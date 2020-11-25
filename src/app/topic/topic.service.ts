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
      titlefa: 'ورژن کنترل سیستم، گیت',
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
      titlefa: 'HTML',
      path: 'html',
      file: 'html.md',
      isltr: true,
    },
    {
      title: 'CSS',
      titlefa: 'CSS',
      path: 'css',
      file: 'css.md',
    },
    {
      title: 'JavaScript',
      titlefa: 'JavaScript',
      path: 'javascript',
      file: 'js.md',
    },
    {
      title: '[ MINI PROJECT ]',
      titlefa: 'پروژه اول',
      path: 'project-1',
      file: 'project-1.md',
    },
    {
      title: 'TypeScript',
      titlefa: 'TypeScript',
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
      title: 'Directive',
      titlefa: 'دستورالعمل‌ها (دیرکتیو)',
      path: 'directive',
      file: 'directive.md',
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
      title: 'Observables',
      titlefa: 'الگوی publish و subscribe',
      path: 'observables',
      file: 'observables.md',
    },
    {
      title: 'Form',
      titlefa: 'فرم‌های ورود اطلاعات',
      path: 'form',
      file: 'form.md',
    },
    {
      title: 'Pipe',
      titlefa: 'تغییر شکل خروجی با پایپ',
      path: 'pipe',
      file: 'pipe.md',
    },
    {
      title: 'HTTP Requests',
      titlefa: 'ارتباط با API',
      path: 'http-req',
      file: 'http-req.md',
    },
    {
      title: 'Authentication',
      titlefa: 'احراز هویت',
      path: 'auth',
      file: 'auth.md',
    },
    {
      title: 'Deployment',
      titlefa: 'استقرار',
      path: 'deployment',
      file: 'deployment.md',
    },
    {
      title: '[ FINAL PROJECT ]',
      titlefa: 'پروژه دوم',
      path: 'project-2',
      file: 'project-2.md',
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
