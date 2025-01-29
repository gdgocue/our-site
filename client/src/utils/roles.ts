import { Roles } from '../types/globals';
import { auth } from '@clerk/nextjs/server';

export const checkRole = async (role: Roles): Promise<boolean> => {
  const { sessionClaims } = await auth(); // Await the async call to resolve the promise
  return sessionClaims?.metadata?.role === role; // Use optional chaining to avoid runtime errors
};
