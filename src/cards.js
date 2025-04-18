const images = [
    { id: 1, src: "/images/imagen1.jpg" },
    { id: 2, src: "/images/imagen2.jpg" },
    { id: 3, src: "/images/imagen3.jpg" },
    { id: 4, src: "/images/imagen4.jpg" },
    { id: 5, src: "/images/imagen5.jpg" },
    { id: 6, src: "/images/imagen6.jpg" },
    { id: 7, src: "/images/imagen7.jpg" },
    { id: 8, src: "/images/imagen8.jpg" },
  ];
  
  export default [...images, ...images]; // Duplica las imágenes para crear parejas.
  