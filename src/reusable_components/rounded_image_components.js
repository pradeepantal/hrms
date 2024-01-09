export default function RoundedImageComponents() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

    }}>
      <div style={{
        width: '128px',
        height: '128px',
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
          alt="Your Alt Text"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>

  );
} 