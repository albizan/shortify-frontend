import http from '../apis'
import { history } from '../helpers'

export async function getLinksFromServer(itemsPerPage, setLinks) {
  const response = await http.get('user/links', {
    params: {
      page: 1,
      size: itemsPerPage
    }
  })
  setLinks(response.data)
}

export async function deleteLink(id, removeLink) {
  console.log(`Delete link with id: ${id}`)
  try {
    const response = await http.delete(`user/delete-link/${id}`)
    if (response.data.affected === 0) {
      // Toast Error
      return
    }
    console.log(`Link with id: ${id} was deleted`)
    // Delete successful
    // Remove link from current linksStore
    console.log(`Service`)
    removeLink(id)
  } catch (error) {
    console.log(error)
  }
}

export async function addLink({ link, isActive }) {
  const data = {
    original: link,
    isActive: isActive === 'true' ? true : false
  }
  try {
    await http.post('user/add-link', data)
    history.push('/dashboard')
  } catch (error) {
    console.log(error)
  }
}
