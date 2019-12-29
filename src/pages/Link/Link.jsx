import React, { useEffect, useState } from 'react'

import { getOriginalLink } from '../../services'
import { history } from '../../helpers'

const Link = props => {
  const { linkId } = props.match.params
  const [linkIsValid, setLinkIsValid] = useState(null)
  useEffect(() => {
    async function retreiveLink() {
      try {
        const data = await getOriginalLink(linkId)
        window.location.replace(data.original)
        setLinkIsValid(true)
      } catch (error) {
        setLinkIsValid(false)
      }
    }
    retreiveLink()
  }, [])
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {linkIsValid && (
        <p className="text-gray-800 text-2xl">You will be redirected</p>
      )}
      {!linkIsValid && (
        <p className="text-gray-800 text-2xl">
          This links does not exist anymore
        </p>
      )}
    </div>
  )
}

export default Link
