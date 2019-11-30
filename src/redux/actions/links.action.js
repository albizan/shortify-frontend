import { SET_LINKS_STATS } from '../types'

export function setLinksStats(stats) {
  return {
    type: SET_LINKS_STATS,
    payload: stats
  }
}
