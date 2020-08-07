import { useState } from 'react';
import Head from 'next/head';
import Nav from '../../components/nav';
import Particles from 'react-particles-js';
const Bubbles = () => {
  const [size, setSize] = useState(2);
  const [strokeSize, setStrokeSize] = useState(100);

  const handleChange = (e) => {
    e.preventDefault();
    setStrokeSize(e.target.value);
  };
  const handleSizeChange = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };

  return (
    <div className='container'>
      <Head>
        <title>Soothing Bubbles</title>
      </Head>
      <Nav />
      <header>
        <form action=''>
          <label>
            Stroke Size
            <input type='text' value={strokeSize} onChange={handleChange} />
          </label>
          <label>
            Particle Size
            <input type='text' value={size} onChange={handleSizeChange} />
          </label>
        </form>
        <h1>Welcome to Soothing Bubbles</h1>
      </header>
      <Particles
        params={{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            color: {
              value: ['#E58F65', '#baf2e9', '#bad7f2', '#925e78', '#706993'],
            },
            size: {
              value: `${size}`,
              random: true,
              anim: {
                enable: true,
                speed: 5.2,
                size_min: 0.01,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: `${strokeSize}`,
                color: '#3fb7FF',
              },
            },
            links: {
              enable: false,
            },
          },
        }}
      />
      <style jsx>
        {`
          .container {
            height: 100vh;
          }
          header {
            display: flex;
            justify-content: space-around;
            background-color: #0e47a1;
            color: white;
            border-bottom: 2px solid rgba(255, 255, 255, 0.25);
            z-index: 100;
          }
          form {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          label {
            margin-right: 4rem;
          }
          input {
            margin-left: 1rem;
            border: none;
            background-color: #0e47a1;
            border-bottom: white 2px solid;
            width: 20%;
            text-align: center;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Bubbles;
