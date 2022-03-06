import React from "react"

function MemeForm () {
    return (
        <form className="meme-form" method="post">
            <div className="meme-form-texts">
                <input
                className="meme-form-text"
                id="text1"
                type='text'
                placeholder="Shut up"
                />
                <input
                className="meme-form-text"
                id="text2"
                type='text'
                placeholder="and take my money"
                />
            </div>
            <button
            className="submit"
            type="submit"
            >
                Get a new meme image
                </button>
        </form>
    )
}

export default MemeForm