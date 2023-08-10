import { useState } from 'react';

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    // Acciones a realizar con los archivos soltados
    const files = e.dataTransfer.files;
    console.log(files);
  };

  return (
    <div
      className={`w-64 h-32 border-2 border-dashed ${
        isDragging ? 'border-blue-500' : 'border-gray-300'
      } text-center flex items-center justify-center`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      Arrastra y suelta archivos aquí
    </div>
  );
};

export default DragAndDrop;
