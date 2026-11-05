export interface CloudflareProject {
  readonly name: string
}

export interface CloudflareProjects {
  readonly projects: readonly CloudflareProject[]
}

export interface SeamsCloudflare {
  readonly listProjects: () => CloudflareProjects
}

export const createSeamsCloudflare = (): SeamsCloudflare => ({
  listProjects: () => ({ projects: [] }),
})
