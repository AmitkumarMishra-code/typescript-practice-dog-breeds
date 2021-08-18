import { useRef } from "react"
import { getBreedImages } from "../apiCalls"
import { ReactComponent as Heart } from './heart.svg'


interface SearchComponentProps {
    setImages: (a: [string, boolean][]) => void
}

export default function Search({setImages }: SearchComponentProps) {
    const searchRef = useRef<HTMLInputElement | null>(null)

    const searchHandler = async() => {
        const breedName:string = searchRef.current?.value.trim() || ''
        if( breedName === ''){
            alert('Search field cannot be empty!')
            return
        }
        try{
            let response = await getBreedImages(breedName)
            if(response.status === 200){
                let displayData:[string, boolean][] = response.data.message.map((url:string) => [url, false])
                setImages(displayData)
            }
            else{
                alert("Something went wrong!")
            }
        }
        catch(error){
            alert(error.message)
        }
    }

    return (
        <div className='header'>
            <div className="title">
                <h2>Dog Breeds</h2>
                <Heart fill = {'red'} style ={{width:'25px', height:'25px'}} />
            </div>
            <div className="search-bar">
            <input type='text' placeholder='Search for a breed...' ref={searchRef} />
            <button className='search' onClick={searchHandler}>Search</button>
            </div>
        </div>
    )
}