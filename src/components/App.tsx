import { useEffect, useState } from "react";
import { getRandomImages } from "../apiCalls";
import Favorites from "./Favorites";
import Results from "./Results";
import Search from "./Search";
import { ReactComponent as Heart } from './heart.svg'


export default function App() {
    const [images, setImages] = useState<[string, boolean][]>([])
    const [favoriteImages, setFavoriteImages] = useState<[string, boolean][]>([])

    const loadDefaultImages = async () => {
        try {
            let response = await getRandomImages()
            if (response.status === 200) {
                let displayData: [string, boolean][] = response.data.message.map((url: string) => [url, false])
                setImages(displayData)
            }
            else {
                alert(response.data)
            }
        }
        catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadDefaultImages()
    }, [])

    return (
        <div className='container'>
            <Search setImages={setImages} />
            <Results images={images} setImages={setImages} favoriteImages={favoriteImages} setFavoriteImages={setFavoriteImages} />
            <hr/>
            <div className="favorites-title">
                <Heart fill={'red'} style={{ width: '25px', height: '25px' }} />
                <h2>Favorites</h2>
            </div>
            <Favorites images={images} setImages={setImages} favoriteImages={favoriteImages} setFavoriteImages={setFavoriteImages} />
        </div>
    )
}