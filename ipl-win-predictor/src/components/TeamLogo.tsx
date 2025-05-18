import React from "react";

interface TeamLogos {
  [key: string]: string;
}

// Team logo URLs
const teamLogos: TeamLogos = {
  "Chennai Super Kings":
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/200px-Chennai_Super_Kings_Logo.svg.png",
  "Royal Challengers Bangalore":
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/200px-Royal_Challengers_Bangalore_2020.svg.png",
  "Mumbai Indians":
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/200px-Mumbai_Indians_Logo.svg.png",
  "Kolkata Knight Riders":
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/200px-Kolkata_Knight_Riders_Logo.svg.png",
  "Rajasthan Royals":
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/200px-Rajasthan_Royals_Logo.svg.png",
  "Delhi Daredevils":
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/200px-Delhi_Capitals_Logo.svg.png",
  "Delhi Capitals":
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/200px-Delhi_Capitals_Logo.svg.png",
  "Kings XI Punjab":
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/200px-Punjab_Kings_Logo.svg.png",
  "Punjab Kings":
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/200px-Punjab_Kings_Logo.svg.png",
  "Sunrisers Hyderabad":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/200px-Sunrisers_Hyderabad.svg.png",
  "Gujarat Titans":
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/200px-Gujarat_Titans_Logo.svg.png",
  "Lucknow Super Giants":
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Lucknow_Super_Giants_Logo.png/200px-Lucknow_Super_Giants_Logo.png",
};

interface TeamLogoProps {
  teamName: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
}

const TeamLogo: React.FC<TeamLogoProps> = ({
  teamName,
  size = "md",
  showName = false,
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div
      className={`flex ${
        showName ? "flex-col" : "flex-row"
      } items-center ${className}`}
    >
      <img
        src={teamLogos[teamName] || "/assets/ipl-logo.svg"}
        alt={teamName}
        className={`${sizeClasses[size]} object-contain ${
          showName ? "mb-2" : ""
        }`}
      />
      {showName && (
        <p
          className={`text-center font-semibold ${
            size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"
          }`}
        >
          {teamName}
        </p>
      )}
    </div>
  );
};

export { teamLogos };
export default TeamLogo;
