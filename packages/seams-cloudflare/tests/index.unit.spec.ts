import { describe, expect, it } from 'vitest'

import { createSeamsCloudflare } from '../src/index'
import { createFakeSeamsCloudflare } from '../src/testing/index'

describe('createSeamsCloudflare', () => {
  it('lists no projects while the seam is a skeleton', () => {
    expect(createSeamsCloudflare().listProjects()).toEqual({ projects: [] })
  })
})

describe('createFakeSeamsCloudflare', () => {
  it('lists no projects by default', () => {
    expect(createFakeSeamsCloudflare().listProjects()).toEqual({ projects: [] })
  })

  it('lists the projects it was given', () => {
    const result = { projects: [{ name: 'site' }] }
    expect(createFakeSeamsCloudflare(result).listProjects()).toBe(result)
  })
})
