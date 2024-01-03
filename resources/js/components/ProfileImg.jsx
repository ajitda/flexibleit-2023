import React from 'react';

export default function ProfileImg({ user, class: customClass }) {
    console.log('user', user)

    // const profileImage = user && user.profileImg();

    if (user.name && typeof user.name === 'string') {
        const nameArr = user.name.split(' ');
        const characters = nameArr.map((name) => name[0]).join('').toUpperCase();
        const defaultClass = customClass || 'w-11 h-11';

        return (
            <div className={`flex justify-center items-center bg-sky-400 text-white rounded-full ${defaultClass}`}>
                {characters}
            </div>
        );
      } else {
        // Handle the case when user.name is not defined or not a string
        return null; // or provide a default representation
    }
}
