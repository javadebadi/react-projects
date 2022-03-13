import React from "react"


function MemeForm () {
    const [memeData, setMemeData] = React.useState()
    const [meme, setMeme] = React.useState({
        "topText": "Shut up",
        "bottomText": "and take my money",
        "randomImage": "https://i.imgflip.com/30b1gx.jpg"
    }
    )

    React.useEffect(
        () => {
            console.log("Effect")
            fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json() )
            .then( data => setMemeData(data))
        },
        []
    )

    function handleOnClick () {
        const memes = memeData.data.memes
        const index = Math.floor(Math.random() * memes.length)
        const randomImage = memes[index].url
        const topText = document.getElementById('topText').textContent
        const bottomText = document.getElementById('bottomText').textContent
        setMeme(prevMeme => ({
            ...prevMeme,
            "randomImage": randomImage,
        }
        )
        )
    }

    function handleOnChange (event) {
        const {name, value} = event.target
        setMeme(
            prevMeme => ({
                ...prevMeme,
                [name]: value
            })
        )
        console.log(meme)

    }

    return (
        <div className="meme">
            <div className="meme-form">
                <div method="post">
                    <div className="meme-form-texts">
                        <input
                        className = "meme-form-text"
                        id = "topText"
                        name = "topText"
                        value = {meme.topText}
                        onChange = {handleOnChange}
                        type = 'text'
                        />
                        <input
                        className = "meme-form-text"
                        id = "bottomText"
                        type = 'text'
                        name = "bottomText"
                        value = {meme.bottomText}
                        onChange = {handleOnChange}
                        />
                    </div>
                    <button
                    className = "submit"
                    type = "submit"
                    onClick = {handleOnClick}
                    >
                        Get a new meme image
                        </button>
                </div>
            </div>
            <div className="meme-result">
                <div className="meme-image">
                    <img src={meme.randomImage} alt="meme"/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}

export default MemeForm