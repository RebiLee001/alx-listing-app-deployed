import React from 'react';
import type { PropertyProps } from '@/interfaces';


const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
return (
<article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
<div className="h-48 md:h-40 lg:h-48 w-full bg-gray-200">
<img src={property.image} alt={property.name} className="w-full h-full object-cover" />
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold">{property.name}</h3>
<div className="text-sm font-medium">${property.price}</div>
</div>
<div className="text-xs text-gray-500 mt-1">{property.address.city}, {property.address.country}</div>
<div className="flex items-center gap-2 mt-3">
<div className="text-sm font-semibold">{property.rating}</div>
<div className="text-xs text-gray-500">| {property.category.slice(0,2).join(' • ')}</div>
</div>
</div>
</article>
);
};


export default PropertyCard;