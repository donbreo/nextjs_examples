import React from 'react'
import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
  
    return (<div>

      <button type="button" onClick={() => router.push('/session4/config?shallow=false')}>
        {` normal`}
      </button>
      <button type="button" onClick={() => router.push('/session4/config?shallow=true', undefined, { shallow: true })}>
        {`with shallow routing`}
      </button>
      </div> )
  }