import { defineWindiSetup } from '@slidev/types'

const range = (prefix: string) => Array.from({ length: 9 }, (_, i) => `${prefix}-${100 + i * 100}`)
// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
    safelist: [
        range('bg-teal'),
        range('bg-cyan'),
    ]
}))