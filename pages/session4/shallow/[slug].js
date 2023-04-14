import React from 'react'
import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    const serveSelectedPage = () => {
      switch (router.query.slug) {
        case "profile":
          return <div>{`This is a profile section`}</div>;
        case "activity":
          return <div>{`This is a activity section`}</div>;
      }
    };
    return (<div>
      <button type="button" onClick={() => router.push('/session4/shallow/profile',null,{shallow:false})}>
        {` profile normal`}
      </button>
      <button type="button" onClick={() => router.push('/session4/shallow/profile', null, { shallow: true })}>
        {`profile with shallow routing`}
      </button>
      <button type="button" onClick={() => router.push('/session4/shallow/activity',null,{shallow:false})}>
        {` activity normal`}
      </button>
      <button type="button" onClick={() => router.push('/session4/shallow/activity', null, { shallow: true })}>
        {`activity with shallow routing`}
      </button>
      {serveSelectedPage()}
      </div> )
  }