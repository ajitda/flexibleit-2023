import React from 'react';
import { useAuth } from '../hooks/auth';

export default function ProfileImg({ class: customClass }) {
    const  { user } = useAuth({middleware: 'guest'});
    // console.log('user', user)

    // const profileImage = user && user.profileImg();

    if (user && user.name && typeof user.name === 'string') {
        const nameArr = user.name.split(' ');
        const characters = nameArr.map((name) => name[0]).join('').toUpperCase();
        const defaultClass = customClass || 'w-10 h-10';

        return (
            <div className={`flex justify-center items-center bg-secondary text-white rounded-full ${defaultClass}`}>
                {characters}
            </div>
        );
      } else {
        // Handle the case when user.name is not defined or not a string
        // return null; // or provide a default representation
        return (
            <div>
                <div className='ml-2 mb-1 bg-cyan-500 text-white inline-block px-3 py-1 rounded-xl'>
                    <a href="/login">
                        Log In
                    </a>
                </div>
            </div>
          );
    }
}
