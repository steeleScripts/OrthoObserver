import React from 'react'
import ModStats from '../../features/moderate/ModStats'
import ActivityLog from '../../features/moderate/ActivityLog'

const DashModerate = () => {
  return (
    <>
      <div className= 'dash__moderate'>
        <ModStats />
        <ActivityLog />
      </div>
    </>
  )
}

export default DashModerate