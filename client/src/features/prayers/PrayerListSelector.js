import React from 'react'
import PrayersList from './PrayersList'
import { useState } from 'react'

const PrayerListSelector = () => {

    let list = (<PrayersList />)

    const [recent, setRecent] = useState('selected')
    const [clergy, setClergy] = useState('deselected')
    const [top, setTop] = useState('deselected')
    

    const selectRecent = () => {
        setRecent('selected')
        setClergy('deselected')
        setTop('deselected')
        
        list = (<PrayersList />)
    }

    const selectClergy = () => {
        setRecent('deselected')
        setClergy('selected')
        setTop('deselected')

        list = ''
    }

    const selectTop = () => {
        setRecent('deselected')
        setClergy('deselected')
        setTop('selected')

        list = ''
    }
    
    return (
        <div>
            <div className='prayer-list__header'>
                <button 
                    className='prayer-list__button'
                    onClick={selectRecent} >
                    <h4 className={recent}>Recent</h4>
                </button>

                <button 
                    className='prayer-list__button'
                    onClick={selectClergy}>
                        <h4 className={clergy}>Clergy</h4>
                </button>
                <button 
                    className='prayer-list__button'
                    onClick={selectTop}>
                    <h4 className={top}>Top</h4>
                </button>
            </div>
            <div className='prayer-list__content'>
                {list}
            </div>
            
        </div>
    )
}

export default PrayerListSelector