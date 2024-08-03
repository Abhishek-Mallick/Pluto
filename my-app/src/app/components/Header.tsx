"use client";
import Link from 'next/link';
import { UserButton, useClerk } from '@clerk/nextjs';
import React, { FC } from 'react';

const Header: FC = () => {
  const { user } = useClerk();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-blue-700'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold text-white uppercase'>
            Pluto.
          </div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        {!user && (
          <>
            <Link
              href='/sign-in'
              className='text-gray-300 hover:text-white mr-4'
            >
              Sign In
            </Link>
            <Link
              href='/sign-up'
              className='text-gray-300 hover:text-white mr-4'
            >
              Sign Up
            </Link>
          </>
        )}
        {user && (
          <Link href='/profile' className='text-gray-300 hover:text-white mr-4'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSwitchSessionUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
