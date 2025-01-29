// src/app/admin/paje.jsx

import React, { Suspense } from 'react';
// import { checkRole } from '../../roles';
import { checkRole } from '../../utils/roles';
import { redirect } from 'next/navigation';
import Adminpanal from '../Adminpanal';

const Paje = async () => {
  try {
    // Check if the user is an admin
    const isAdmin = await checkRole('admin');
    if (!isAdmin) {
      redirect('/signin'); // Redirect non-admin users to the homepage
    }
  } catch (error) {
    console.error('Error checking admin role:', error);
    redirect('/signin'); // Redirect in case of an error
  }

  return (
    <Suspense fallback={<div>Loading Admin Panel...</div>}>
      <div>
        <Adminpanal />
      </div>
    </Suspense>
  );
};

export default Paje;
