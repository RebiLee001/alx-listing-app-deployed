import React, { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND } from '@/constants';
import PropertyCard from '@/components/PropertyCard';
import Pill from '@/components/Pill';


const FILTERS = [
'Top Villa',
'Self Checkin',
'Beachfront',
'Pet Friendly',
'Pool',
'Mountain View',
];


export default function Home() {
const [activeFilter, setActiveFilter] = useState<string | null>(null);


const filtered = activeFilter
? PROPERTYLISTINGSAMPLE.filter((p) => p.category.join(' ').toLowerCase().includes(activeFilter.toLowerCase()))
: PROPERTYLISTINGSAMPLE;


return (
<div>
{/* Hero */}
<section
className="relative bg-cover bg-center"
style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
>
<div className="bg-black bg-opacity-40">
<div className="container mx-auto px-4 py-28 text-white">
<h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
<p className="mt-4 text-sm md:text-lg">The best prices for over 2 million properties worldwide.</p>
</div>
</div>
</section>


{/* Filters */}
<section className="container mx-auto px-4 py-6">
<div className="flex flex-wrap gap-3">
{FILTERS.map((f) => (
<Pill key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(activeFilter === f ? null : f)} />
))}
</div>
</section>


{/* Listings */}
<section className="container mx-auto px-4 pb-16">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filtered.map((p) => (
<PropertyCard key={p.name} property={p} />
))}
</div>
</section>
</div>
);
}