import type { CloudflareProjects, SeamsCloudflare } from '../index'

export const createFakeSeamsCloudflare = (result: CloudflareProjects = { projects: [] }): SeamsCloudflare => ({
  listProjects: () => result,
})
