import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
    return {
        langs: [
            {
                id: 'promela',
                scopeName: 'source.promela',
                aliases: ['promela', 'pml'],
                path: '../../../../../public/promela.tmLanguage.json',
            }
        ], 
        theme: {
            light: 'min-light',
            dark: 'min-dark',
        },
    }
})