import React, { useState } from 'react';
import './index.css';
import RakBukuImg from '../../assets/RAK_BUKU_1-removebg-preview.png';
import { PopUpInformation } from '../pop_up_information';

interface BookshelfButtonProps {
  onClick?: () => void;
}

export const BookshelfButton: React.FC<BookshelfButtonProps> = ({ onClick }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
    if (onClick) onClick();
  };

  return (
    <>
      <div className="bookshelf-wrapper">
        <img src={RakBukuImg} alt="Bookshelf" className="bookshelf-img" />
        <div className="bookshelf-click-circle" onClick={handleClick} />
      </div>

      <PopUpInformation isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2 className="history-title">Profil & Kualifikasi</h2>

        <div className="history-item">
          <h3 className="history-company">Tentang Saya</h3>
          <p className="history-desc">
            Frontend Developer dengan pengalaman 6 tahun berbasis website. Pengalaman pekerjaan saya meliputi membuat halaman website sesuai dengan desain yang diberikan dan mengintegrasikannya dengan Backend, melakukan identifikasi, analisis, dan perbaikan bug, serta ikut merancang fitur aplikasi yang sedang dibangun
          </p>
        </div>
        
        <div className="history-item">
          <h3 className="history-company">Kemampuan Teknis</h3>
          <ul className="history-list">
            <li>Javascript & TypeScript</li>
            <li>React.js</li>
            <li>Angular</li>            
          </ul>
        </div>

        <div className="history-item">
          <h3 className="history-company">Pendidikan Terakhir</h3>
          <ul className="history-list">
            <li><strong>D3 Teknik Informatika</strong> &mdash; Politeknik Negeri Bandung</li>
          </ul>
        </div>
      </PopUpInformation>
    </>
  );
};
