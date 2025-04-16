import Image from 'next/image';

interface ClientLogoProps {
  name: string;
  logo: string;
  width?: number;
  height?: number;
}

export default function ClientLogo({ name, logo, width = 200, height = 80 }: ClientLogoProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-orange-100 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-20" />
      <div className="relative p-4 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <Image
          src={logo}
          alt={`Logo ${name}`}
          width={width}
          height={height}
          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
} 