import React from 'react'

type Route = {
  name: string
  path: string
  layout?: React.ReactNode
  component?: React.ReactNode
  children?: Route[]
}

export const routes: Route[] = [
  {
    name: 'Dashbard',
    path: '/',
    // component:
  },
  {
    name: 'About',
    path: '/about',
    children: [
      {
        name: 'AboutMe',
        path: '/about/me',
      },
    ],
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]
