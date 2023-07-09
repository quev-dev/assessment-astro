import { useState, useEffect } from 'react';

export default function GridImage() {
  const [fetchedImage, setFetchedImage] = useState();
  const [fetchFailed, setFetchFailed] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const url = 'https://dog.ceo/api/breeds/image/random';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFetchedImage(data.message);
      } catch (error) {
        console.error(error);
        setFetchFailed(true);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    if (fetchedImage && !fetchFailed) setShowFullImage(!showFullImage);
  };

  return (
    <div>
      {fetchedImage && (
        <>
          <img
            className='bg-c-lighter w-40 h-36 md:w-72 md:h-64 object-cover rounded-sm cursor-zoom-in'
            src={fetchedImage}
            alt=''
            onClick={handleClick}
          />
          {showFullImage && (
            <div
              className='fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75 cursor-pointer'
              onClick={handleClick}
            >
              <img
                className='max-w-full max-h-full rounded-sm shadow-xl'
                src={fetchedImage}
                alt='Full-size image of a dog.'
              />
            </div>
          )}
        </>
      )}
      {!fetchedImage && !fetchFailed && (
        <div className='bg-c-lighter rounded-sm flex flex-col items-center justify-center'>
          <p className='p-4'>🌐 | Loading...</p>
        </div>
      )}
      {fetchFailed && (
        <div className='bg-c-lighter rounded-sm p-2 flex flex-col items-center justify-center text-sm'>
          <p className='italic text-c-dark'>The image failed to load.</p>
          <p className='pointer-events-none'>
            If the issue persists, you may{' '}
            <a className='text-c-accent' href='#'>
              contact
            </a>{' '}
            us.
          </p>
        </div>
      )}
    </div>
  );
}
