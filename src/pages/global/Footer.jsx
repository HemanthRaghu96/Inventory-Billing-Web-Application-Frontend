import React from 'react'

export default function Footer() {
    const year=new Date().getFullYear()
  return (
    <section>
        <p className='text-lg text-gray-500'>© {year}, HR Corporation Pvt. Ltd. All Rights Reserved.</p>
    </section>
  )
}
