import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center"
          href="..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/x.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="dark:invert"
          />
        </a>
        <a
          className="flex items-center"
          href="..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="dark:invert"
          />
        </a>
        <a
          className="flex items-center"
          href="..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/youtube.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="dark:invert"
          />
        </a>
        
      </footer>
      <div className='text-center py-10'>
        <p>© 2025 Timely</p> 
      </div>
    </div>
  )
}

export default Footer
