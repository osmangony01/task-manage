'use client'

import { userLoggedIn } from '@/features/auth/authSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

function User() {

    const dispatch = useDispatch();
    // State to store the JSON data
    const [jsonData, setJsonData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Function to parse query parameters and extract JSON data
        function getJsonFromUrl() {
            const searchParams = new URLSearchParams(window.location.search);
            const jsonDataParam = searchParams.get('json');

            if (jsonDataParam) {
                // Decode the URL-encoded JSON string and parse it into an object
                const decodedJsonData = decodeURIComponent(jsonDataParam);
                const parsedJsonData = JSON.parse(decodedJsonData);
                setJsonData(parsedJsonData);
                console.log(parsedJsonData.access_token)
                console.log(parsedJsonData.user)

                localStorage.setItem(
                    "auth",
                    JSON.stringify({
                        accessToken: parsedJsonData.access_token,
                        user: parsedJsonData.user,
                    }),
                );
                dispatch(
                    userLoggedIn({
                        accessToken: parsedJsonData.access_token,
                        user: parsedJsonData.user,
                    })
                )
                router.push("/");
            }
        }

        // Call the function to extract JSON data when the component mounts
        getJsonFromUrl();
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <h1>checking</h1>
            {/* {jsonData && (
                <div>
                    <h2>JSON Data</h2>
                    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                </div>
            )} */}
        </div>
    );
}

export default User;








// import React, { useEffect } from 'react';

// const User = () => {

//     useEffect(() => {
//         const callback = async () => {
//             try {
//                 const res = await fetch('http://127.0.0.1:8000/api/auth/google/callback')
//                 const data = await res.json()
//                 console.log(data)
//             } catch (error) {
//                 console.log('something wrong');
//             }
//         }
//         //callback();
//     }, [])

//     return (
//         <div>
//             User
//         </div>
//     );
// };

// export default User;