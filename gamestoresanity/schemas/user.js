export default {
    name: 'user',
    type: 'document',
    title: 'Bruker',
    fields: [
      {
        name: 'navn',
        type: 'string',
        title: 'Navn',
       
      },
      {
        name: 'epost',
        type: 'string',
        title: 'E-post',
      },
      {
        name: 'favourite',
        type: 'reference',
        title: 'Favoritt',
        to: [{ type: 'mygames' }]
      }
    ]
  }