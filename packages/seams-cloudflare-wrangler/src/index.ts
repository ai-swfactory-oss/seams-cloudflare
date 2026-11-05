export interface WranglerInvocation {
  readonly args: readonly string[]
}

export interface WranglerResult {
  readonly exitCode: number
  readonly stdout: string
}

export interface SeamsWrangler {
  readonly run: (invocation: WranglerInvocation) => WranglerResult
}

export const createSeamsWrangler = (): SeamsWrangler => ({
  run: () => ({ exitCode: 0, stdout: '' }),
})
