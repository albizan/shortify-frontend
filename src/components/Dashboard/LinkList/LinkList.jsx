import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { setLinks } from '../../../redux/actions'
import { getLinksFromServer } from '../../../services'

import LinkItem from '../LinkItem'

const LinkList = props => {
  console.log('Render LinkList')
  const { links, setLinks } = props
  // Set default value for itemsPerPage to 5
  // const [itemsPerPage, setItemsPerPage] = useState(5)

  useEffect(() => {
    // When component mounts, request page 1 with 5 items per page
    getLinksFromServer(1, 5, setLinks)

    // eslint-disable-next-line
  }, [])
  return (
    <div className="container mx-auto py-8 mt-10">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold uppercase tracking-wide text-gray-700">
          Manage your links
        </h3>
        <div>
          <Link
            to="new-link"
            className="text-gray-800 text-base bg-gray-300 font-semibold px-3 py-1 rounded hover:bg-gray-700 hover:text-gray-200 focus:outline-none"
          >
            + Add new Link
          </Link>
        </div>
      </div>

      {links.map(link => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  )
}

function mapStateToProps(store) {
  return {
    links: store.linksState.links
  }
}

export default connect(mapStateToProps, { setLinks })(LinkList)
