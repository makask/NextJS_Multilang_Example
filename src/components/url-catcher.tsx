"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useFullUrl = () => {
    
    const router = useRouter();
    const [fullUrl, setFullUrl] = useState("");

    useEffect(() => {
        if(typeof window !== "undefined") {
            setFullUrl(window.location.origin + router.asPath);
        }
    },[router.asPath]);

    return fullUrl;
}

export default useFullUrl;