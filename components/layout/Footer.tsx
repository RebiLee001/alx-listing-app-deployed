import React from 'react';


const Footer: React.FC = () => {
return (
<footer className="bg-gray-50 border-t mt-12">
<div className="container mx-auto px-4 py-8 text-sm text-gray-600">
<div className="flex flex-col md:flex-row md:justify-between gap-4">
<div>
<div className="font-semibold">ALX Listings</div>
<div>© {new Date().getFullYear()} ALX — All rights reserved</div>
</div>
<div className="flex gap-6">
<a>About</a>
<a>Help</a>
<a>Privacy</a>
</div>
</div>
</div>
</footer>
);
};


export default Footer;