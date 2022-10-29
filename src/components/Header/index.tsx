import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react"
import Link from "next/link";
import {
  BellIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import Image from "next/image";

export default function Header() {

  const connectWalletMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div className="max-w-6xl mx-auto p-2">
      <nav className="flex justify-between">
        <div className="flex items-center space-x-2 text-sm">
          {
            address ?
              <button onClick={disconnect} className="connectWalletBtn">Hi, {address.slice(0, 5) + '...' + address.slice(-4)}</button>
              :
              <button onClick={connectWalletMetamask} className="connectWalletBtn">Connect your wallet</button>
          }

          <p className="headerLink">Daily Deals</p>
          <p className="headerLink">Help & Contact</p>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <p className="headerLink">Ship to</p>
          <p className="headerLink">Sell</p>
          <p className="headerLink">Watchlist</p>

          <Link href="/addItem" className="flex items-center hover:link">
            Add to inventory
            <ChevronDownIcon className="h-4" />
          </Link>

          <BellIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6" />
        </div>
      </nav>

      <hr className="mt-2" />

      <section className="flex items-center space-x-2 py-5">
        <div className="w-16 h-16 sm:w-28 md:w-44 cursor-pointer flex-shrink-0">
          <Link href="/">
            <Image
              alt="eBay Logo"
              src="https://i.imgur.com/2Ie7am2.png"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        <button className="hidden lg:flex items-center space-x-2 w-20">
          <p className="text-gray-600 text-sm">Shop by Category</p>
          <ChevronDownIcon className="h-4 flex-shrink-0" />
        </button>

        <div className="flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1">
          <MagnifyingGlassIcon className="w-5 text-gray-400" />
          <input className="flex-1 outline-none" placeholder="Search for Anything" type="text" />
        </div>

        <button className="hidden sm:inline bg-blue-600 text-white px-5 md:px-10 py-2 border-2 border-blue-600 cursor-pointer">Search</button>

        <Link href="/create">
          <button className="border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer">List Item</button>
        </Link>
      </section>

      <hr />

      <section className="flex items-center space-x-6 text-xs py-3 md:text-sm whitespace-nowrap justify-center px-6">
        <p className="link">Home</p>
        <p className="link">Electronics</p>
        <p className="link">Computers</p>
        <p className="link hidden xl:inline">Video Games</p>
        <p className="link hidden xl:inline">Home & Garden</p>
        <p className="link hidden xl:inline">Health & Beauty</p>
        <p className="link hidden xl:inline">Collectibles and Art</p>
        <p className="link hidden xl:inline">Books</p>
        <p className="link hidden xl:inline">Music</p>
        <p className="link hidden xl:inline">Deals</p>
        <p className="link hidden xl:inline">Other</p>
        <p className="link">More</p>
      </section>
    </div>
  )
}