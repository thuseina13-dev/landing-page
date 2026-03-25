import React, { useState } from 'react';
import './index.css';
import PeriferalImg from '../../assets/PERIFERAL_1-removebg-preview.png';
import { PopUpInformation } from '../pop_up_information';

interface PeriferalButtonProps {
  onClick?: () => void;
}

export const PeriferalButton: React.FC<PeriferalButtonProps> = ({ onClick }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
    if (onClick) onClick();
  };

  return (
    <>
      <div className="periferal-wrapper">
        <img src={PeriferalImg} alt="Periferal" className="periferal-img" />
        <div className="periferal-click-circle" onClick={handleClick} />
      </div>

      <PopUpInformation isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2 className="history-title">Riwayat Pekerjaan</h2>
        
        <div className="history-item">
          <h3 className="history-company">PT Inovasi Kesehatan Indonesia</h3>
          <p className="history-meta">Januari 2023 s/d Januari 2026 • <strong>Frontend Developer</strong></p>
          <p className="history-desc">
            Perusahaan yang membuat produk Sistem Informasi Manajemen Rumah Sakit (SIMRS), dengan klien termasuk RS Jantung Tasikmalaya dan RS UNPAD.
          </p>
          <ul className="history-list">
            <li>Ikut merancang dan membangun desain implementasi registrasi BPJS pada SIMRS.</li>
            <li>Merancang dan membangun modul Casemix untuk keperluan sinkronisasi klaim BPJS pada SIMRS.</li>
            <li>Membangun antarmuka (*User Interface*) serta aktif mengidentifikasi area perbaikan kode aplikasi (bug fixing).</li>
          </ul>
        </div>

        <div className="history-item">
          <h3 className="history-company">PT Pertamina Bina Medika IHC</h3>
          <p className="history-meta">April 2021 s/d Desember 2022 • <strong>Frontend Developer</strong></p>
          <p className="history-desc">
            Perusahaan holding yang mengelola jaringan rumah sakit milik BUMN dan Pertamina.
          </p>
          <ul className="history-list">
            <li>Mengembangkan desain antarmuka pengguna sesuai standar kebutuhan di Rumah Sakit.</li>
            <li>Membangun *User Interface* anjungan pendaftaran mandiri interaktif untuk registrasi cepat kunjungan pasien.</li>
          </ul>
        </div>

        <div className="history-item">
          <h3 className="history-company">PT Hirata Insan Mandiri</h3>
          <p className="history-meta">Januari 2019 s/d Oktober 2020 • <strong>Frontend Developer</strong></p>
          <p className="history-desc">
            Sebuah perusahaan IT Consulting / software house fungsional yang menangani bermacam proyek lintas sektor.
          </p>
          <ul className="history-list">
            <li>Melakukan perbaikan dan sinkronisasi tampilan logis (Bug Fixing) pada aplikasi perbankan berbasis Java.</li>
            <li>Terlibat pada tim inti pengembangan antarmuka (UI) dari mesin anjungan mandiri komersial untuk pembelian kartu SIM.</li>
          </ul>
        </div>
      </PopUpInformation>
    </>
  );
};
