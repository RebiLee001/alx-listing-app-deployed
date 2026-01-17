import React from 'react';
import Link from 'next/link';


const Header: React.FC = () => {
return (
<header className="bg-white shadow-sm">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<Link href="/">
<a className="text-xl font-semibold">ALX Listings</a>
</Link>


<nav className="hidden md:flex gap-4 items-center">
<a className="text-sm">Rooms</a>
<a className="text-sm">Villas</a>
<a className="text-sm">Countryside</a>
<a className="text-sm">Mansions</a>
</nav>


<div className="flex-1 mx-4 hidden md:block">
<div className="relative">
<input
aria-label="search"
className="w-full border rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
placeholder="Search city, property or landmark"
/>
<button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-3 py-1 text-sm rounded-full bg-indigo-600 text-white">Search</button>
</div>
</div>


<div className="flex gap-2 items-center">
<button className="text-sm">Sign in</button>
<button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">Sign up</button>
</div>
</div>
</header>
);
};


export default Header;