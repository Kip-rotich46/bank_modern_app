import React from 'react';
import styled from 'styled-components';
import Board from '../Board/Board';
import { boards } from '../data';
import './gallery.css';

interface GalleryProps {
  boards: BoardData[];
}

interface BoardData {
  title: string;
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ boards }) => {
  return (
    < div className='GalleryContainer'>
      {boards.map((board, index) => (
        <Board key={index} title={board.title} images={board.images} />
      ))}
    </div>
  );
};

export default Gallery;

const GalleryContainer = styled.div`
  padding: 20px;
`;
