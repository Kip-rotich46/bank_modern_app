import React from 'react';
import { boards } from '../data';
import './board.css';
import Image from '../Image/Image';

interface BoardProps {
  title: string;
  images: string[];
}

const Board: React.FC<BoardProps> = ({ title, images }) => {
  return (
    < div className='BoardContainer'>
      <div className='BoardTitle'>{title}</div>
      <div className='ImageGrid'>
        {images.map((src, index) => (
          <Image key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default Board;
