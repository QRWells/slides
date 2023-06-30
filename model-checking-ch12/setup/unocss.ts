import { defineUnoSetup } from '@slidev/types'

const range = (prefix: string) => Array.from({ length: 9 }, (_, i) => `${prefix}-${100 + i * 100}`)
// extending the builtin windicss configurations
export default defineUnoSetup(() => ({
    safelist:
        range('bg-teal').concat(range('bg-emerald')).concat(range('bg-lime')).concat(range('bg-green'))
            .concat(range('text-light'))
}))