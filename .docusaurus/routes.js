import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '413'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '4f3'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'c16'),
            routes: [
              {
                path: '/api-endpoints',
                component: ComponentCreator('/api-endpoints', '73e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/arquitectura-infraestructura',
                component: ComponentCreator('/arquitectura-infraestructura', 'f81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/despliegue-evidencias',
                component: ComponentCreator('/despliegue-evidencias', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '956'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
