export default {
  name: 'mygames',
  type: 'document',
  title: 'Mine Spill',
  fields: [
    {
      name: 'game_title',
      type: 'string',
      title: 'Spillnavn'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL-tittel',
      options: {
        source: 'game_title',
        slugify: input => input.toLowerCase()
                            .replace(/[^\w-]+/g, '-')
                            .slice(0,150)
      }
    },
    {
      name: 'API_id',
      type: 'number',
      title: 'Spill-id'
    },
    {
      name: 'background_image',
      type: 'image',
      title: 'Bilde'
    },
    {
      name: 'hours_played',
      type: 'number',
      title: 'Timer_spilt'
    },
    {
      name: 'isFavourite',
      type: 'boolean',
      name: 'Favoritt'
    },
    {
      name: 'genre',
      type: 'array',
      title: 'Sjangre',
      of: [
        {
          type: 'string',
          name: 'Sjanger'
        }
      ]
    }
  ]
}