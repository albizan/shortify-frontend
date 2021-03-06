import {
  SET_LINKS,
  SET_LINKS_STATS,
  REMOVE_LINK,
  CHANGE_PAGE,
  SET_ITEMS_PER_PAGE,
  INCREASE_ACTIVE_COUNT,
  DECREASE_ACTIVE_COUNT,
  INCREASE_LINK_COUNT,
  DECREASE_LINK_COUNT
} from '../types'

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
export function increaseActiveCount() {
  return {
    type: INCREASE_ACTIVE_COUNT
  }
}
export function decreaseActiveCount() {
  return {
    type: DECREASE_ACTIVE_COUNT
  }
}
export function increaseLinkCount() {
  return {
    type: INCREASE_LINK_COUNT
  }
}
export function decreaseLinkCount() {
  return {
    type: DECREASE_LINK_COUNT
  }
}
