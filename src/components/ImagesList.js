import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const image = props.images.map(res => {
        return <ImageCard key={res.id} image={res} />

    })
    return (
        <div className='image-list'>
            {image}
        </div>
    )
}

export default ImageList