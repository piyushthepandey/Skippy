export default {
    introspection: {
      type: 'sdl',
      paths: ['graphql/types.graphql'],
    },
    website: {
      template: 'carbon-multi-page',
      options: {
        appTitle: 'Title',
        appLogo: '',
        pages: [{
          title: 'Page 01',
          content: `
  #Skippy API Documentation`
        }],
      },
    },
  }