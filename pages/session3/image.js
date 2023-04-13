import React from 'react'
import Image from 'next/image'

export default function ImageTest() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src={`https://picsum.photos/500/500?random=1`}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}