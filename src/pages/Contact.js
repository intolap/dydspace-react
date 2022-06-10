import React, {useEffect, useState} from 'react'
import Loading from '../globals/Loading';
const Form =React.lazy(()=>import('./ContactParts/Form'));
const Map = React.lazy(()=>import('./ContactParts/Map'))
const Cta = React.lazy(()=>import('./ContactParts/Cta'))

export default function Contact() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [acfData, setAcfData] = useState(false);

    useEffect(() => {
        fetch("https://dydspace.com/wp-json/wp/v2/pages/135/?_embed&acf_format=standard")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setAcfData(data);
                    // console.log(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    
    if (error) {
        // console.log(error);
        // return <div>Error: {error.message}</div>;
        return '';
    } else if (!isLoaded) {
        // console.log('Loading Home page...');
        return <Loading/>;
    } else {
        // console.log(acfData);
        return (
            <>
            <Map/>
            <Form/>
            <Cta data={acfData}/>
            </>
        )
    }
}
