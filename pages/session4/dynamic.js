import React from 'react'
import dynamic from 'next/dynamic'

const ParentChild = dynamic(() => import('../session1/parentchild'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return <ParentChild />
}