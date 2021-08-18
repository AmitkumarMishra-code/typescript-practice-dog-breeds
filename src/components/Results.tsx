import ImageBox from "./ImageBox";

interface ResultsComponentProps {
    images: [string, boolean][],
    favoriteImages: [string, boolean][],
    setImages: (a: [string, boolean][]) => void,
    setFavoriteImages: (a: [string, boolean][]) => void
}

export default function Results({ images, favoriteImages, setImages, setFavoriteImages }: ResultsComponentProps) {
    const favoriteHandler = (url: string): void => {
        let newFavorites: [string, boolean][] = [...favoriteImages]
        const existingFavorite: [string, boolean] = newFavorites.find(favorite => favorite[0] === url) || ['', false]
        if (existingFavorite[0] === '') {
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
        <div className='results'>
            {images.map((image, idx) => <ImageBox url={image[0]} key={idx} id={idx} method={favoriteHandler} favorite={image[1]} />)}
        </div>
    )
}