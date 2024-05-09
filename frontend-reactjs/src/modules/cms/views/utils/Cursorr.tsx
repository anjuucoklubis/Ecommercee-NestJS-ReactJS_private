import { useState } from "react";

export default function Cursorr() {
  // Definisikan state untuk menyimpan status hover
  const [isHovered, setIsHovered] = useState(false);

  // Fungsi untuk menangani perubahan saat pengguna mengarahkan kursor ke ikon
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Fungsi untuk menangani perubahan saat pengguna tidak lagi mengarahkan kursor ke ikon
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconClassname = `
    text-red-300 
    focus:ring-4 focus:outline-none 
    font-medium rounded-lg text-sm p-2.5 
    text-center inline-flex items-center me-2 
    dark:border-red-500 dark:text-red-500
  `;

  // Tambahkan kelas tambahan saat pengguna mengarahkan kursor ke ikon
  const dynamicClassname = isHovered ? "hover:bg-red-300 hover:text-white" : "";

  // Gabungkan kelas-kelas CSS
  const fullClassname = `${iconClassname} ${dynamicClassname}`;

  // Return state dan fungsi untuk digunakan di komponen lain
  return {
    
    handleMouseEnter,
    handleMouseLeave,
    fullClassname,
    iconClassname,
  };
}
