import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND } from '@/constants';
import PropertyCard from '@/components/PropertyCard';

type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const Pill = ({ label, active = false, onClick }: PillProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition ${
        active ? 'bg-black text-white' : 'bg-gray-200 text-black'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;

