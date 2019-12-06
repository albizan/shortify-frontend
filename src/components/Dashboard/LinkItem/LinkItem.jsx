import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { removeLink } from '../../../redux/actions'
import { deleteLink } from '../../../services'

import { FaTrashAlt, FaEdit, FaLink } from 'react-icons/fa'

const LinkItem = props => {
  const { link, removeLink } = props
  console.log(link)
  return (
    <Fragment>
      <div className="flex justify-between items-center border rounded my-6 p-6 shadow bg-white">
        <div>
          <div className="mb-3">
            <p className="text-sm w-96 truncate">
              <span className="font-semibold text-base">Original: </span>
              {link.original}
            </p>
          </div>
          <div className="mt-3">
            <p className="text-sm w-96 truncate">
              <span className="font-semibold text-base">Short: </span>
              localhost:3000/{link.id}
            </p>
          </div>
        </div>
        <div className="flex justify-between w-56">
          <p className="text-sm">
            <span className="font-semibold text-base">Clicks: </span>
            {link.clicks}
          </p>
          {link.isActive && (
            <p className="text-sm">
              <span className="font-semibold text-base">Active:</span> True
            </p>
          )}
          {!link.isActive && (
            <p className="text-sm">
              <span className="font-semibold text-base">Active:</span> False
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <div
            onClick={() => deleteLink(link.id, removeLink)}
            className="w-12 h-12 bg-red-500 rounded-full mx-2 flex justify-center items-center cursor-pointer"
          >
            <FaTrashAlt className="text-white" />
          </div>
          <div className="w-12 h-12 bg-green-500 rounded-full mx-2 flex justify-center items-center cursor-pointer">
            <FaEdit className="text-white" />
          </div>
          <div className="w-12 h-12 bg-blue-500 rounded-full mx-2 flex justify-center items-center cursor-pointer">
            <FaLink className="text-white" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default connect(null, { removeLink })(LinkItem)
