import PricingCards from '@/components/PricingCards'
import React from 'react'

function page() {
  return (
    <div className='isolate h-full overflow-hidden dark:bg-gray-900 pb-40'>
      <div className='mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
            <h2 className='text-2xl font-bold leading-7 text-indigo-400'>
                Pricing
            </h2>
            <p className='mt-2 text-4xl font-bold tracking-light dark:text-white sm:text-5xl'>
                The right price for you,{" "}
                <br className='hidden sm:inline lg:hidden' />
                whoever you are
            </p>
            <p className='mx-auto max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60 mt-6'>
                We're 99% sure we have a plan to match 100% of your needs
            </p>
        </div>
        <div className='relative'>
        <svg
              viewBox='0 0 1208 1024'
              className='absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0'
            >
              <ellipse 
                cx={604}
                cy={512}
                fill='url(#radial-gradient)'
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id='radial-gradient'>
                  <stop stopColor='#7775D6' />
                  <stop offset={1} stopColor='#E935C1' />
                </radialGradient>
              </defs>
            </svg>
        </div>
      </div>
      <div className='flow-root bg-white pb-24 sm:pb-32'>
        <div className='-mt-80 lg:absolute  lg:left-[50vh]'>
          <PricingCards redirect={true} />
        </div>
      </div>
    </div>
  )
}

export default page
