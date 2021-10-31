import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { Text, View } from 'react-native'

import { getAuth } from '@firebase/auth'

const AuthNavigation = () => {

    const [currentUser,setCurrentUser]  = useState(null)

    const userHandler = user => user? setCurrentUser(user) : setCurrentUser(null)

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged(user => userHandler(user))
        return unsubscribe
    }, [])

    return <>{currentUser ? <SignedInStack/> : <SignedOutStack/>}</>
}

export default AuthNavigation
