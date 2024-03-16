function Error() {
  return (
    <>
      <div style={{backgroundColor: 'red'}}>
        <h1 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '2em', color: '#e1cb1c'}}>
          Please provide some actual news!!!
        </h1>
      </div>
      
      <div style={{ 
          backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hFwwQAW45673VGKrMPE2qQ.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
      </div>
     
    </>
  );
}

export default Error;
