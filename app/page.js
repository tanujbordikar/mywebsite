import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import '../styles/main.css'
import MyImage1 from '../public/images/myself2.jpg';

export default function Page() {
 
  return (
    <div>
      <Layout>
        <div className='container'>
          <h1> hey, I'm tanuj 👋</h1>
        </div>
        <p className='text-align-center'> 
        I am a <b>full-stack developer</b> who is passionate about <b>machine learning, open source, and front-end development.</b>
        <br/><br/><br/>
        With a strong foundation in IT engineering, I have gained valuable experience in various aspects of software development,
        including coding, system design, and problem-solving. I am always looking for new ways to learn and grow.
        </p>
        <br/><br/>
        <div className="centerAlignImage">
          <Image width={400} height={400} src={MyImage1} alt="Image1" />
        </div>
        <br/><br/>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/tanuj-bordikar-28b127220/" target="_blank" rel="noopener noreferrer"><span class="social-icon">↗</span>connect on linkedIn</a>
          <a href="https://twitter.com/tanuj_b_" target="_blank" rel="noopener noreferrer"><span class="social-icon">↗</span>follow me on twitter</a>
          <a href="https://github.com/tanujbordikar" target="_blank" rel="noopener noreferrer"><span class="social-icon">↗</span>check out my gitHub</a>
          <a href="https://www.instagram.com/tanuj_b_" target="_blank" rel="noopener noreferrer"><span class="social-icon">↗</span>follow me on instagram</a>
          <a href="mailto:tanujbordikar@gmail.com?subject=Portfolio's%20Connection%20Inquiry"><span class="social-icon">📧</span>mail me</a>
        </div>
      </Layout>
    </div>
  )
}
