import React from 'react';
import Layout from '@/components/Layout';
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaGit, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';

const About = () => {
  return (
    <div>
      <Layout>
        <div className='container mx-auto text-center text-align-center'>
          <h3 className='mb-8'>I am a passionate developer experienced in</h3>
          <div className='skills'>
            {/* <h2 className='text-xl font-bold mb-4'>Skills:</h2> */}
            <ul className='grid justify-center'>
              <li className='flex items-center mr-4 blogtext'>
                <FaReact className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> ReactJS</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaPython className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> Python</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaJava className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> Java</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <SiTensorflow className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> Tensorflow</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaCode className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> Keras</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>  
                <FaCode className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> OpenCV</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaCode className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> NodeJS</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaReact className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> NextJS</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaDatabase className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> MongoDB</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaHtml5 className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> HTML</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaJs className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> JS</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaGit className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> Git</span>
              </li>
              <li className='flex items-center mr-4 blogtext'>
                <FaGithub className='mr-2' />
                <span style={{ fontSize: '1.75em' }}> GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
