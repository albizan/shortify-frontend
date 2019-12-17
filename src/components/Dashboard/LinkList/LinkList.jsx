import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setLinks } from '../../../redux/actions'
import { getLinksFromServer } from '../../../services'

import NewLinkForm from '../NewLinkForm'
import LinkItem from '../LinkItem'

const LinkList = props => {
  const { page, itemsPerPage, links, setLinks, totalLinks } = props

  const [showNewLinkPanel, setShowNewLinkPanel] = useState(false)

  useEffect(() => {
    console.log('LinkList mounted')
  }, [])
  useEffect(() => {
    console.log('Retreiving list of links from server...')
    // When component mounts, request page 1 with 5 items per page
    getLinksFromServer(page, itemsPerPage, setLinks)

    // eslint-disable-next-line
  }, [page, itemsPerPage, totalLinks])
  return (
    <div className="container mx-auto py-8 mt-10">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold uppercase tracking-wide text-gray-700">
          Manage your links
        </h3>
        <div>
          <button
            onClick={() => setShowNewLinkPanel(true)}
            className="text-gray-800 text-base bg-gray-300 font-semibold px-3 py-1 rounded hover:bg-gray-700 hover:text-gray-200 focus:outline-none"
          >
            + Add new Link
          </button>
        </div>
      </div>
      {showNewLinkPanel && (
        <NewLinkForm
          closePanel={() => {
            setShowNewLinkPanel(false)
          }}
        />
      )}

      {links.map(link => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  )
}

function mapStateToProps(store) {
  return {
    ...store.linksState
  }
}

export default connect(mapStateToProps, { setLinks })(LinkList)
