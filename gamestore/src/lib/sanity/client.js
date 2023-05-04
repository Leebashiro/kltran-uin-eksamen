import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: '96oax1cv',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

/*export const writeClient = createClient({
    token: "skUe2EQ0skjC4oWEUiucnOrlxn8tOkAqbZBEdzI57apN4OKyljQjwn1KxUFyQbDaw8cq7y6UaWZd12cI1J2GXSvnXMzBFpSfAE0R4miI94eNerjt4A95umuk0DkXbwTFHDH4CTLDGTGt8uEL1gDS7yilvaLTQRFwq7biI1n51yYLzqgwFxyk",
    projectId: "96oax1cv",
    dataset: "production"
})*/