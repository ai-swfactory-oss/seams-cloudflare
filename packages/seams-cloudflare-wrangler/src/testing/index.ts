import type { SeamsWrangler, WranglerResult } from '../index'

export const createFakeSeamsWrangler = (result: WranglerResult = { exitCode: 0, stdout: '' }): SeamsWrangler => ({
  run: () => result,
})
