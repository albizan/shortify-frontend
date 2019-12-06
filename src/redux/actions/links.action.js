import { SET_LINKS, SET_LINKS_STATS, REMOVE_LINK } from '../types'

export function setLinksStats(stats) {
  return {
    type: SET_LINKS_STATS,
    payload: stats
  }
}

export function setLinks(links) {
  return {
    type: SET_LINKS,
    payload: links
  }
}
export function removeLink(id) {
  console.log('Action')
  return {
    type: REMOVE_LINK,
    payload: id
  }
}
