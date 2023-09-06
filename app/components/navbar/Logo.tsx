'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
    id: string;
    // Other prop types go here
  }
  
  const Logo: React.FC<LogoProps> = ({ id }) => {
    const router = useRouter()

    return (
        <Image 
            onClick={() => router.push('/')}
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src="/images/logo.png"
            priority={true}
            alt="Logo"
        />
    );
}

export default Logo;