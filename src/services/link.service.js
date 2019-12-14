import http from '../apis'

export async function getLinksFromServer(page = 1, itemsPerPage = 5, setLinks) {
  const response = await http.get('user/links', {
    params: {
      page,
      size: itemsPerPage
    }
  })
  setLinks(response.data)
}

export async function deleteLink(id, removeLink) {
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

export async function addLink({ title, link, isActive, closePanel, setLinks }) {
  const data = {
    title,
    original: link,
    isActive
  }
  try {
    await http.post('user/add-link', data)
    closePanel()
    await getLinksFromServer(1, 5, setLinks)
  } catch (error) {
    console.log(error)
  }
}

export async function toggleIsActive(id, newIsActiveValue) {
  try {
    const response = await http.patch(`user/patch-link/${id}`, {
      isActive: newIsActiveValue
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
