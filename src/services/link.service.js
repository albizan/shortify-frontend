import http from '../apis'
import { toast } from 'react-toastify'

export async function getLinksFromServer(page = 1, itemsPerPage = 5, setLinks) {
  const response = await http.get('user/links', {
    params: {
      page,
      size: itemsPerPage
    }
  })
  console.log('List of links received')
  setLinks(response.data)
}

export async function getOriginalLink(linkId) {
  const response = await http.get(`link/${linkId}`)
  return response.data
}
export async function deleteLink(id, removeLink) {
  try {
    const response = await http.delete(`user/delete-link/${id}`)
    if (response.data.affected === 0) {
      // Toast Error
      toast.error('An error occurred, try again later', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2250
      })
      return
    }
    // Delete successful
    toast.success('Link was deleted successfully', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2250
    })
    // Remove link from current linksStore with action creator [removeLink]
    removeLink(id)
  } catch (error) {
    console.log(error)
    // Toast Error
    toast.error('An error occurred, try again later', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2250
    })
  }
}

export async function addLink({
  title,
  link,
  isActive,
  closePanel,
  setLinks,
  increaseLinkCount
}) {
  const data = {
    title,
    original: link,
    isActive
  }
  try {
    await http.post('user/add-link', data)
    increaseLinkCount()
    closePanel()
    toast.success('Link was created successfully', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2250
    })
    await getLinksFromServer(1, 5, setLinks)
  } catch (error) {
    toast.error('An error occurred, try again later', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2250
    })
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
