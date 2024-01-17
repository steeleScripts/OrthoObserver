import React from 'react'
import { useState } from 'react'
import NewPrayer from '../../features/prayers/NewPrayer'
import PrayerListSelector from '../../features/prayers/PrayerListSelector'
import useAuth from '../../hooks/useAuth'

const DashPrayers = () => {    


    return (
      <>  
        <div className="dash__prayers">
            <NewPrayer />
            <PrayerListSelector />
        </div>
      </>
    )
}

export default DashPrayers