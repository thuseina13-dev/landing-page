import React from 'react';
import './index.css';

interface PopUpInformationProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const PopUpInformation: React.FC<PopUpInformationProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`popup-overlay ${isOpen ? 'show' : ''}`}>
      <div className="parchment-container">
        <div className="parchment">
          <button className="close-button" onClick={onClose}>&times;</button>
          <div className="parchment-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
