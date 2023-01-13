import styles from './layout.module.css';
import Image from 'next/image';

export default function Layout({ children }) {
    return <div className={styles.html}>
      <nav className='border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]'>
       <div className='flex items-center lg:px-6 px-8 mx-auto max-w-7xl px-14'>
        <div className='flex flex-row items-center'>
          <Image
              priority
              src="/doctor.jpg"
              height={80}
              width={80}
              alt=""
          />Created by Felix</div>
        <div className='flex-1 justify-end hidden md:flex'><span className='flex flex-row items-center'>Work with the creator</span><span className="ml-2 h-full flex items-center cursor-not-allowed text-accents-5"><a data-variant="primary" className="relative inline-flex items-center justify-center cursor pointer no-underline px-3.5 rounded-md font-medium outline-0 select-none align-middle whitespace-nowrap transition-colors ease-in duration-200 border border-solid text-background bg-success border-success-dark hover:bg-success/90 shadow-[0_5px_10px_rgb(0,68,255,0.12)] h-10 leading-10 text-[15px]" href="https://www.linkedin.com/in/felixprogrammer/" target="_blank" rel="noreferrer">Contact Felix</a></span></div>
       </div>
      </nav>
        <div className=' px-8 bg-accents-0'>{children}</div>
      <footer className='py-10 w-full mt-auto border-t flex items-center justify-center bg-accents-1 z-20'>
        <span className='text-primary'>Using Next.js, API Routes, and OpenAI SDK</span>
      </footer>
    </div>;
  }