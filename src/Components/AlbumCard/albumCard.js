
import React from 'react';
import AlbumNav from '../AlbumNav/albumNav';
import abs from './albumCard.module.css';

function AlbumCard() {
  return (
    <div className={abs.card}>
      <AlbumNav />
     
    </div>
  );
}

export default AlbumCard;