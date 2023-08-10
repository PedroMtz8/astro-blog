import { DragEvent, useRef, useState } from 'react';

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [nameFiles, setNameFiles] = useState<string[]>([])

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

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    // Acciones a realizar con los archivos soltados
    const files = e.dataTransfer.files;

    if(files[0]) {
      let filesArray: string[] = []
      for(let key of files) {
        filesArray.push(key.name);
      }
      setNameFiles(filesArray)
      console.log(filesArray)
    }
  };

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div
        className={`
          w-64 h-32 
          flex 
          justify-center 
          ali 
          border-dashed 
          border-[3px]
          text-center 
          items-center 
          cursor-pointer
          hover:bg-gray-50
          ${isDragging ? 'border-blue-500' : 'border-gray-300'} 
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => {
          inputRef.current?.click()
        }}
        >
        {/* Arrastra y suelta archivos aquí */}
          <input 
            className={`hidden`}
            type="file"
            multiple
            onChange={(e) => {
              const files = e.target.files
              let filesArray: string[] = []
              for(let key of files) {
                filesArray.push(key.name);
              }
              setNameFiles(filesArray);
              // console.log(e.target.files)
            }}
            ref={inputRef}
          />
          <button
            className={`
              py-2 px-2
              rounded-md
              border-[3px]
              border-gray-200
              bg-blue-500
              text-white
            `}
            
          >
            Subir archivos
          </button>
      </div>
        {
          nameFiles.length > 0 && nameFiles.map((nameFile, i) => (
            <div key={i}>
              <p>{nameFile}</p>
            </div>
          ))
        }
    </>
  );
};

export default DragAndDrop;
