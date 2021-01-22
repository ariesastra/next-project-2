import React from 'react'

// Component
import BasePage from '@/components/BasePage'

// Style
import '@/styles/globals.css'
import '@/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({Component, pageProps}) => <Component {...pageProps} /> 

export default MyApp
