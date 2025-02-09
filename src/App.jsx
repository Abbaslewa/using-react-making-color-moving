import  { useEffect } from 'react';
import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

const App = () => {
  useEffect(() => {
    const pc = particlesCursor({
      el: document.getElementById('app'),
      gpgpuSize: 512,
      color: 0xfff,
      colors: [0x00fffc, 0x00fffc],
      coordScale: 0.5,
      pointSize: 2,
      noiseIntensity: 0.005,
      noiseTimeCoef: 0.0001,
      pointDecay: 0.0025,
      sleepRadiusx: 250,
      sleepRadiusy: 250,
      sleepTimeCoefx: 0.001,
      sleepTimeCoefy: 0.002,
    });

    return () => {
   
      pc && pc.cleanup && pc.cleanup(); 
    };
  }, []);

  return (
    <div id="app" className='h-screen mt-20' >
      <div id="hero">
        <h1>Hello Abbas From Rract particlesCursor</h1>
      </div>
    </div>
  );
};

export default App;
