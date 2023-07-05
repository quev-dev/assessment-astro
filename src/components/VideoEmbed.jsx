export default function VideoEmbed() {
  const url = 'https://www.youtube.com/embed/ywcNsJb2v2U';
  return (
    <div>
      <iframe
        className='rounded-sm'
        width='320'
        height='180'
        src='https://www.youtube.com/embed/ywcNsJb2v2U'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
    </div>
  );
}
