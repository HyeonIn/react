export const ROUTES = {
  HOME: '/',
  FORM: '/form',
} as const

export type RouteKey = keyof typeof ROUTES
export type RouteValue = typeof ROUTES[RouteKey] 