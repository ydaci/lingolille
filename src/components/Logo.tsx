interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const dimensions = {
    sm: 32,
    md: 48,
    lg: 64,
  };
  
  const dim = dimensions[size];
  
  return (
    <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orange circle background */}
      <circle cx="50" cy="50" r="50" fill="#FF7A00"/>
      
      {/* White rosace pattern */}
      <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="2"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="2"/>
      <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="2"/>
      
      {/* Petals */}
      <circle cx="50" cy="25" r="5" fill="white"/>
      <circle cx="50" cy="75" r="5" fill="white"/>
      <circle cx="25" cy="50" r="5" fill="white"/>
      <circle cx="75" cy="50" r="5" fill="white"/>
      <circle cx="35" cy="35" r="4" fill="white"/>
      <circle cx="65" cy="35" r="4" fill="white"/>
      <circle cx="35" cy="65" r="4" fill="white"/>
      <circle cx="65" cy="65" r="4" fill="white"/>
      
      {/* Center */}
      <circle cx="50" cy="50" r="6" fill="white"/>
    </svg>
  );
}
