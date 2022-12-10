import React from 'react'

function HomePage(role) {
    return (

        <div>
            role==admin ? <AdminPage></AdminPage> : <UserPage></UserPage>
        </div>
    )
}

export default HomePage