import React from 'react'

export default function Footer() {
    const year=new Date().getFullYear()
  return (
    <section>
        <footer className='text-lg text-gray-500 text-center mb-2'>© {year}, HR Corporation Pvt. Ltd. All Rights Reserved.</footer>
    </section>
  )
}
