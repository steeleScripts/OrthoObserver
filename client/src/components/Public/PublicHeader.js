import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import PublicNav from './PublicNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import RandomQuote from '../../features/quotes/RandomQuote'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

const menuButton = (<button className='public__menuButton' id='menuButton'>
                        <FontAwesomeIcon icon={faBars} className="public__menuIcon"/>
                    </button>)

ReactModal.setAppElement(menuButton);

export default function PublicHeader() { 
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
    }

    function closeModal() {
    setIsOpen(false);
    }

    return (
        <>
            <header className='public__header'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className='public__title'>OrthoObserver</h1>
                </Link>
            </header>
            <RandomQuote />
            <PublicNav /> 
        </>
    )
}