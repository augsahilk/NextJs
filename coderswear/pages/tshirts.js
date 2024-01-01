import React from 'react'
import Link from 'next/link'

function Tshirts() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-20 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4 shadow-slate-400">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-code"} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto h-[24vh] block" src="/tshirt.jpeg"/>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tshirts