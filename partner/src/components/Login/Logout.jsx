import React from 'react'

export default function Logout() {
    localStorage.clear()
    return (
        window.location.href="/login"
    )
}
