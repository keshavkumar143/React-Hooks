import React from 'react'
import { BioData } from './UseContextHook'
import { useContext } from 'react'

function Home() {
    const { myName, myAge } = useContext(BioData)
    return (
        <h1>my name is {myName} and my age is {myAge}</h1>
    )
}
export default Home