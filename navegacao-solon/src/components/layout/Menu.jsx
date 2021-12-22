import * as React from 'react';
import './Menu.scss'

export function Menu(props) {
  return (
    <aside className='Menu'>
       <nav>
         <ul>
           <li><a href="/">Início</a></li>
           <li><a href="/">Sobre</a></li>
         </ul>
       </nav>
    </aside>
  );
};