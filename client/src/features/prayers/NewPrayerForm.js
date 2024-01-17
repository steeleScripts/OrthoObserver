import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewPrayerMutation } from "./prayersApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../hooks/useAuth"

const NewPrayerForm = ( ) => {

    const { username } = useAuth()

    const [addNewPrayer, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewPrayerMutation()

    const navigate = useNavigate()

    const [text, setText] = useState('')

    useEffect(() => {
        if (isSuccess) {
            setText('')
            navigate('/dash/prayers')
        }
    }, [isSuccess, navigate])

    const onTextChanged = e => setText(e.target.value)

    const canSave = [text, username].every(Boolean) && !isLoading

    const onSavePrayerClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewPrayer({ username, text })
        }
    }
    

    const errClass = isError ? "errmsg" : "offscreen"
    const validTextClass = !text ? "form__input--incomplete" : ''

    const content = (
        <>
            {(isError && <p className={errClass}>{error?.data?.message}</p>)}

            <form className="form__newPrayer" onSubmit={onSavePrayerClicked}>
                <div className="form__title-row">
                    <h2>New Prayer</h2>                    
                </div>
               
                <label className="form__label" htmlFor="text">
                    Commune with God and his children</label>
                <textarea
                    className={`form__input form__input--text ${validTextClass}`}
                    id="text"
                    name="text"
                    value={text}
                    onChange={onTextChanged}
                />
                <div className="form__action-buttons">
                    <button
                        className="icon-button"
                        title="Save"
                        disabled={!canSave}
                    >
                    <FontAwesomeIcon icon={faHandsPraying} />
                    </button>
                </div>
                
            </form>
        </>
    )

    return content
}

export default NewPrayerForm