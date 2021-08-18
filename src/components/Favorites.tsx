import ImageBox from "./ImageBox"

interface FavoritesComponentProps {
    images: [string, boolean][],
    favoriteImages: [string, boolean][],
    setImages: (a: [string, boolean][]) => void,
    setFavoriteImages: (a: [string, boolean][]) => void
  }

export default function Favorites({images, favoriteImages, setImages, setFavoriteImages }:FavoritesComponentProps){
    const favoriteHandler = (url: string): void => {
        let newFavorites: [string, boolean][] = [...favoriteImages]
        const existing: [string, boolean] = newFavorites.find(favorite => favorite[0] === url) || ['', false]
        if (existing[0] === '') {
            newFavorites.push([url, true])
        }
        else {
            newFavorites = newFavorites.filter(favorite => favorite[0] !== url)
        }
        setFavoriteImages(newFavorites)
        let newImages: [string, boolean][] = images.map(image => image[0] === url ? [image[0], !image[1]] : image)
        setImages(newImages)
    }
    return (
        <div className='favorite-images'>

            {favoriteImages.map((image, idx) => <ImageBox url={image[0]} key={idx} id={idx} method={favoriteHandler} favorite = {image[1]}/>)}
        </div>
    )
}