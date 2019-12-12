import { SET_LINKS_STATS, SET_LINKS, REMOVE_LINK, CHANGE_PAGE, SET_ITEMS_PER_PAGE } from '../types'

const INITIAL_LINKS_STATE = {
  totalLinks: 0,
  activeLinks: 0,
  totalClicks: 0,
  page: 1,
  itemsPerPage: 5,
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
    case SET_LINKS:
      return {
        ...linksState,
        links: payload
      }
    case REMOVE_LINK:
      return {
        ...linksState,
        links: linksState.links.filter(link => {
          return link.id !== payload
        })
      }
    case CHANGE_PAGE:
      return {
        ...linksState,
        page: payload
      }
    case SET_ITEMS_PER_PAGE:
      return {
        ...linksState,
        itemsPerPage: payload
      }
    default:
      return linksState
  }
}
