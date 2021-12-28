import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'

export default function Content({}): ReactElement {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <p>{`Content: ${id}`}</p>
        </div>
    )
}

