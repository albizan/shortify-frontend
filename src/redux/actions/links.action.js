import { SET_LINKS, SET_LINKS_STATS, REMOVE_LINK, CHANGE_PAGE, SET_ITEMS_PER_PAGE } from '../types'

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
  return {
    type: REMOVE_LINK,
    payload: id
  }
}
export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    payload: page
  }
}
export function setItemsPerPage(numberOfItems) {
  return {
    type: SET_ITEMS_PER_PAGE,
    payload: numberOfItems
  }
}
