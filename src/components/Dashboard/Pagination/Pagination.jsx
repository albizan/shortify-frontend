import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../../../redux/actions'

const Pagination = props => {
  const { totalLinks, itemsPerPage, page, changePage } = props

  const pages = []
  const totalPages = Math.ceil(totalLinks / itemsPerPage)
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  const renderPages = pages.map(number => {
    return (
      <div
        onClick={() => {
          changePage(number)
        }}
        className={`w-10 h-10 border rounded border-gray-400 flex justify-center items-center mr-1 cursor-pointer font-semibold ${
          page === number ? 'bg-blue-500 text-gray-100' : 'text-gray-600'
        }`}
        key={number}
      >
        {number}
      </div>
    )
  })

  return (
    <div>
      <div className="container mx-auto flex">{renderPages}</div>
    </div>
  )
}

function mapStateToProps(store) {
  return {
    totalLinks: store.linksState.totalLinks,
    itemsPerPage: store.linksState.itemsPerPage,
    page: store.linksState.page
  }
}

export default connect(mapStateToProps, { changePage })(Pagination)
