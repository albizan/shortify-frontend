import { SET_LINKS_STATS } from '../types'

const INITIAL_LINKS_STATE = {
  totalLinks: 0,
  activeLinks: 0,
  totalClicks: 0,
  links: []
}

export function linksReducer(linksState = INITIAL_LINKS_STATE, action) {
  const { type, payload } = action

  switch (type) {
    case SET_LINKS_STATS:
      return {
        ...linksState,
        totalLinks: payload.totalLinks,
        activeLinks: payload.activeLinks,
        totalClicks: payload.totalClicks
      }
    default:
      return linksState
  }
}
