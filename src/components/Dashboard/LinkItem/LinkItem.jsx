import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components'

import {
  removeLink,
  increaseActiveCount,
  decreaseActiveCount,
  decreaseLinkCount
} from '../../../redux/actions'
import { deleteLink, toggleIsActive } from '../../../services'

import { FaArrowRight, FaTimes, FaCopy, FaEllipsisV } from 'react-icons/fa'

const ToggleButton = styled.div`
  top: -0.25rem;
  left: ${({ isActive }) => {
    if (isActive) return '1rem'
    return '-0.25rem'
  }};
  transition: all 0.3s ease-in-out;
  background-color: ${({ isActive }) => {
    if (isActive) return '#2ecc71'
    return '#e8f5e9'
  }};
`

const LinkItem = props => {
  const {
    link,
    removeLink,
    increaseActiveCount,
    decreaseActiveCount,
    decreaseLinkCount
  } = props
  const { id, title, original, isActive } = link

  const [active, setActive] = useState(isActive)
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    if (active) {
      decreaseActiveCount()
    } else {
      increaseActiveCount()
    }
    toggleIsActive(id, !active)
    setActive(!active)
  }

  const handleDelete = () => {
    deleteLink(id, removeLink)
    decreaseLinkCount()
  }

  return (
    <Fragment>
      <div className="my-4 rounded border-2 border-gray-200">
        <div className="flex justify-between h-20">
          <div className="flex justify-start items-center">
            <div className="flex items-center justify-center mx-3">
              <div className="relative">
                <input id="toogle" type="checkbox" className="hidden" />

                <div className="toggle__line w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>

                <ToggleButton
                  onClick={handleToggle}
                  isActive={active}
                  className="absolute w-6 h-6 rounded-full shadow inset-y-0 left-0 cursor-pointer"
                ></ToggleButton>
              </div>
            </div>
            <div>
              <h3 className="text-xl">{title}</h3>
              <h4 className="text-sm w-136 truncate">{original}</h4>
            </div>
          </div>
          <div className="flex items-center p-3">
            {open && (
              <div className="flex items-center justify-around">
                <div className="mr-4">
                  <div
                    onClick={() => {
                      setOpen(false)
                    }}
                    className="w-10 h-10 bg-gray-500 p-2 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <FaArrowRight className="text-xl text-gray-100" />
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <div
                    onClick={handleDelete}
                    className="w-10 h-10 bg-red-500 p-2 rounded-full flex justify-center items-center cursor-pointer mr-4"
                  >
                    <FaTimes className="text-xl text-gray-100" />
                  </div>
                  <CopyToClipboard text={id}>
                    <div className="w-10 h-10 bg-indigo-500 p-2 rounded-full flex justify-center items-center cursor-pointer">
                      <FaCopy className="text-xl text-gray-100" />
                    </div>
                  </CopyToClipboard>
                </div>
              </div>
            )}
            {!open && (
              <FaEllipsisV
                onClick={() => {
                  setOpen(true)
                }}
                className="cursor-pointer text-xl text-gray-500 hover:text-gray-800"
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default connect(null, {
  removeLink,
  increaseActiveCount,
  decreaseActiveCount,
  decreaseLinkCount
})(LinkItem)
