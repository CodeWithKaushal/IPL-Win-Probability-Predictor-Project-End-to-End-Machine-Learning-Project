import React from "react";

interface TeamLogos {
  [key: string]: {
    logo: string;
    shortCode: string;
    primaryColor: string;
    textClass: string;
    bgClass: string;
  };
}

// Team logo URLs and branding
const teamLogos: TeamLogos = {
  "Chennai Super Kings": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/200px-Chennai_Super_Kings_Logo.svg.png",
    shortCode: "CSK",
    primaryColor: "#FFFF00",
    textClass: "text-yellow-500",
    bgClass: "bg-yellow-500",
  },
  "Royal Challengers Bangalore": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/200px-Royal_Challengers_Bangalore_2020.svg.png",
    shortCode: "RCB",
    primaryColor: "#EC1C24",
    textClass: "text-red-600",
    bgClass: "bg-red-600",
  },
  "Mumbai Indians": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/200px-Mumbai_Indians_Logo.svg.png",
    shortCode: "MI",
    primaryColor: "#004BA0",
    textClass: "text-blue-600",
    bgClass: "bg-blue-600",
  },
  "Kolkata Knight Riders": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/200px-Kolkata_Knight_Riders_Logo.svg.png",
    shortCode: "KKR",
    primaryColor: "#3A225D",
    textClass: "text-purple-700",
    bgClass: "bg-purple-700",
  },
  "Rajasthan Royals": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/200px-Rajasthan_Royals_Logo.svg.png",
    shortCode: "RR",
    primaryColor: "#FF1493",
    textClass: "text-pink-500",
    bgClass: "bg-pink-500",
  },
  "Delhi Daredevils": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/200px-Delhi_Capitals_Logo.svg.png",
    shortCode: "DD",
    primaryColor: "#00008B",
    textClass: "text-blue-800",
    bgClass: "bg-blue-800",
  },
  "Delhi Capitals": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/200px-Delhi_Capitals_Logo.svg.png",
    shortCode: "DC",
    primaryColor: "#0078BC",
    textClass: "text-blue-500",
    bgClass: "bg-blue-500",
  },
  "Kings XI Punjab": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/200px-Punjab_Kings_Logo.svg.png",
    shortCode: "KXIP",
    primaryColor: "#ED1B24",
    textClass: "text-red-500",
    bgClass: "bg-red-500",
  },
  "Punjab Kings": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/200px-Punjab_Kings_Logo.svg.png",
    shortCode: "PBKS",
    primaryColor: "#ED1B24",
    textClass: "text-red-500",
    bgClass: "bg-red-500",
  },
  "Sunrisers Hyderabad": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/200px-Sunrisers_Hyderabad.svg.png",
    shortCode: "SRH",
    primaryColor: "#FF822A",
    textClass: "text-orange-500",
    bgClass: "bg-orange-500",
  },
  "Gujarat Titans": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/200px-Gujarat_Titans_Logo.svg.png",
    shortCode: "GT",
    primaryColor: "#1C2C5B",
    textClass: "text-blue-700",
    bgClass: "bg-blue-700",
  },
  "Lucknow Super Giants": {
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Lucknow_Super_Giants_Logo.png/200px-Lucknow_Super_Giants_Logo.png",
    shortCode: "LSG",
    primaryColor: "#A72056",
    textClass: "text-teal-500",
    bgClass: "bg-teal-500",
  },
};

interface TeamLogoProps {
  teamName: string;
  size?: "sm" | "md" | "lg" | "xl";
  showName?: boolean;
  showShortName?: boolean;
  className?: string;
  style?: "flat" | "gradient" | "bordered" | "shadow";
  onClick?: () => void;
}

const TeamLogo: React.FC<TeamLogoProps> = ({
  teamName,
  size = "md",
  showName = false,
  showShortName = false,
  className = "",
  style = "flat",
  onClick,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  };

  const styleClasses = {
    flat: "",
    gradient: "bg-gradient-to-b from-white to-gray-100",
    bordered: "ring-2 ring-gray-200",
    shadow: "shadow-lg",
  };

  const team = teamLogos[teamName] || {
    logo: "/assets/ipl-logo.svg",
    shortCode: "IPL",
    primaryColor: "#0072BC",
    textClass: "text-primary",
    bgClass: "bg-primary",
  };

  return (
    <div
      className={`flex ${
        showName || showShortName ? "flex-col" : "flex-row"
      } items-center ${className} ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div
        className={`rounded-full p-1 overflow-hidden ${styleClasses[style]} transition-transform duration-300 hover:scale-105`}
      >
        <img
          src={team.logo}
          alt={teamName}
          className={`${sizeClasses[size]} object-contain`}
        />
      </div>

      {showShortName && (
        <span
          className={`mt-2 font-bold ${team.textClass} ${textSizeClasses[size]}`}
        >
          {team.shortCode}
        </span>
      )}

      {showName && (
        <p
          className={`text-center font-semibold mt-2 ${textSizeClasses[size]}`}
        >
          {teamName}
        </p>
      )}
    </div>
  );
};

export { teamLogos };
export default TeamLogo;
