import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  topics = [
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

  constructor() {}

  ngOnInit(): void {}
}
