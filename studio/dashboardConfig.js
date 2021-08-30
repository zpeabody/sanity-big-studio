export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612ce4092785a65ffbe5d3e5',
                  title: 'Sanity Studio',
                  name: 'sanity-big-studio-studio',
                  apiId: 'a9b97c00-bc29-4241-bef0-d9710417ef8f'
                },
                {
                  buildHookId: '612ce4092785a65f69e5d4f0',
                  title: 'Blog Website',
                  name: 'sanity-big-studio',
                  apiId: 'b8b5362f-c119-4ed7-b8c9-d76cb562c067'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zpeabody/sanity-big-studio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-big-studio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
