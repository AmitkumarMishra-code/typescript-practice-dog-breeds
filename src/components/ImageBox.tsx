import { ReactComponent as Heart } from './heart.svg'

interface ImageBoxProps {
    url: string,
    id: number,
    method: (a: string) => void,
    favorite: boolean
}

export default function ImageBox({ url, id, method, favorite }: ImageBoxProps) {
    // const [favorited, setFavorited] = useState<boolean>(favorite)
    return (
        <div className='box'>
            <img src={url} alt='dog' />
            <Heart
                className='favorite'
                onClick={() => {
                    method(url)
                }
                }
                fill={favorite ? '#ff0000' : '#ffffff'}
            />
        </div>
    )
}