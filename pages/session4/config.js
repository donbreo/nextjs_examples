import React from 'react'

export default function Page() {

    return (<div>
        {/* {`config loaded is :: ${process.env.ENV}`} */}
        {`config NEXT_PUBLIC_ID is :: ${process.env.NEXT_PUBLIC_ID}`}

    </div>)
}

export async function getServerSideProps() {
    const base_url = process.env.DB_USER
    const arg1 = process.env.ARG1
    const env = process.env.ENV
    console.log ("base_url :: ",base_url, " arg1 ::",arg1,env," ENV ::",env)
    return {
        props: {
        },
    };
}