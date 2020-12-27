import axios from 'axios'
import React, { useEffect } from 'react'
import Axios from 'axios'
import {useDispatch} from 'react-redux'
import {auth} from '../_actions/user_action'

export default function (Specific, option, adminRoute = null) {
    function Auth_Check(props) {
        const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(auth()).then(res => {
                console.log(res)
                console.log(res.payload.isAuth)


                if(!res.payload.isAuth){
                    if(option) {
                        props.history.push('/login')
                    }
                }else{
                    if(adminRoute && !res.payload.isAdmin) {
                        props.history.push('/')
                    }else {
                        if (option === false){
                            props.history.push('/')
                        }
                    }

                }

            })
            
        }, [])


        return <Specific />

    }



    return Auth_Check
}