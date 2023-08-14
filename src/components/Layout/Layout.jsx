import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  const pages = [
    { title: 'Home', src: '/' },
    { title: 'Movies', src: '/movies' },
  ];
  return (
    <div>
      <nav>
        <ul>
          {pages.map(page => (
            <li key={page.title}>
              <NavLink to={page.src}>{page.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};