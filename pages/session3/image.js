import React from 'react'
import Image from 'next/image'

export default function ImageTest() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src={`https://picsum.photos/500/500?random=1`}
        alt="Picture of the author"
        width={500} 
        height={500}
        blurDataURL="data:..." 
        placeholder="blur"
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}