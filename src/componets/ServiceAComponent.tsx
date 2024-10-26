import React from 'react';
import { useAuth } from '../hooks/useAuth';

const ServiceAComponent: React.FC = () => {
  const {  loading, error } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Users from Service A</h2>
      <ul>
       {/*  {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))} */
        
        }
      </ul>
    </div>
  );
};

export default ServiceAComponent;