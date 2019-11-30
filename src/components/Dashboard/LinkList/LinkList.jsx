import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import http from '../../../apis'

const LinkList = props => {
  console.log(props)
  // Set default value for itemsPerPage to 5
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [links, setLinks] = useState([])

  useEffect(() => {
    // When component mounts, request page 1 with 5 items per page
    async function getLinksFromServer() {
      const response = await http.get('user/links', {
        params: {
          page: 1,
          size: itemsPerPage
        }
      })
      setLinks(response.data)
    }
    getLinksFromServer()
  }, [])
  return (
    <div className="container">
      {links.map(link => {
        return <p>localhost:3000/{link.id}</p>
      })}
    </div>
  )
}

function mapStateToProps(store) {
  return {
    ...store.linkState
  }
}

export default connect(mapStateToProps)(LinkList)
