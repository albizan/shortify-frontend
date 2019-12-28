import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { setLinksStats } from '../../../redux/actions'
import http from '../../../apis'

const Stats = props => {
  const { activeLinks, totalClicks, totalLinks, setLinksStats } = props
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function getUserStats() {
      try {
        const response = await http.get('user/stats')
        setLinksStats(response.data)
        setLoaded(true)
      } catch (error) {
        console.log("Can't connect to server")
      }
    }

    console.log('Stats Mounted')
    // Call api server
    getUserStats()

    // eslint-disable-next-line
  }, [])

  return (
    <div className="container mx-auto px-4 sm:px-0 py-6">
      <h3 className="font-semibold uppercase tracking-wide text-gray-700">
        Overview
      </h3>
      <div className="flex flex-col sm:flex-row items-center justify-around mt-6">
        <div className="flex flex-col items-center justify-center p-3 rounded border w-full sm:w-56 text-2xl sm:shadow-lg bg-white mb-4">
          <h4 className="text-gray-700 text-base">Total Links</h4>
          {loaded && <p>{totalLinks}</p>}
          {!loaded && <p className="text-base">Loading data...</p>}
        </div>
        <div className="flex flex-col items-center justify-center p-3 rounded border w-full sm:w-56 text-2xl sm:shadow-lg bg-white mb-4">
          <h4 className="text-gray-700 text-base">Active Links</h4>
          {loaded && <p>{activeLinks}</p>}
          {!loaded && <p className="text-base">Loading data...</p>}
        </div>
        <div className="flex flex-col items-center justify-center p-3 rounded border w-full sm:w-56 text-2xl sm:shadow-lg bg-white mb-4">
          <h4 className="text-gray-700 text-base">Total Clicks</h4>
          {loaded && <p>{totalClicks}</p>}
          {!loaded && <p className="text-base">Loading data...</p>}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(store) {
  const { linksState } = store
  return { ...linksState }
}

export default connect(mapStateToProps, { setLinksStats })(Stats)
