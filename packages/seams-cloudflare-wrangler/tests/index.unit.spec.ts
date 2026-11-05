import { describe, expect, it } from 'vitest'

import { createSeamsWrangler } from '../src/index'
import { createFakeSeamsWrangler } from '../src/testing/index'

describe('createSeamsWrangler', () => {
  it('succeeds with no output while the seam is a skeleton', () => {
    expect(createSeamsWrangler().run({ args: ['--version'] })).toEqual({ exitCode: 0, stdout: '' })
  })
})

describe('createFakeSeamsWrangler', () => {
  it('succeeds with no output by default', () => {
    expect(createFakeSeamsWrangler().run({ args: [] })).toEqual({ exitCode: 0, stdout: '' })
  })

  it('returns the result it was given', () => {
    const result = { exitCode: 1, stdout: 'failed\n' }
    expect(createFakeSeamsWrangler(result).run({ args: ['deploy'] })).toBe(result)
  })
})
