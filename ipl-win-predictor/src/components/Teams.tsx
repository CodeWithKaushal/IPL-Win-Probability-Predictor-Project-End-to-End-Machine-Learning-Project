import { useState } from "react";

const Teams = () => {
  const [activeTeam, setActiveTeam] = useState<string | null>(null);

  const teams = [
    {
      name: "Chennai Super Kings",
      shortName: "CSK",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/200px-Chennai_Super_Kings_Logo.svg.png",
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
      borderColor: "border-yellow-500",
      description:
        "The Chennai Super Kings (CSK) are a franchise cricket team based in Chennai, Tamil Nadu. They have won the IPL championship multiple times.",
      captain: "MS Dhoni",
      homeGround: "M. A. Chidambaram Stadium",
      titles: 5,
      foundedYear: 2008,
    },
    {
      name: "Mumbai Indians",
      shortName: "MI",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/200px-Mumbai_Indians_Logo.svg.png",
      color: "bg-blue-600",
      textColor: "text-blue-600",
      borderColor: "border-blue-600",
      description:
        "The Mumbai Indians (MI) are a franchise cricket team based in Mumbai, Maharashtra. They are the most successful team in IPL history.",
      captain: "Rohit Sharma",
      homeGround: "Wankhede Stadium",
      titles: 5,
      foundedYear: 2008,
    },
    {
      name: "Royal Challengers Bangalore",
      shortName: "RCB",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/200px-Royal_Challengers_Bangalore_2020.svg.png",
      color: "bg-red-600",
      textColor: "text-red-600",
      borderColor: "border-red-600",
      description:
        "The Royal Challengers Bangalore (RCB) are a franchise cricket team based in Bangalore, Karnataka known for their batting strength.",
      captain: "Faf du Plessis",
      homeGround: "M. Chinnaswamy Stadium",
      titles: 0,
      foundedYear: 2008,
    },
    {
      name: "Kolkata Knight Riders",
      shortName: "KKR",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/200px-Kolkata_Knight_Riders_Logo.svg.png",
      color: "bg-purple-700",
      textColor: "text-purple-700",
      borderColor: "border-purple-700",
      description:
        "The Kolkata Knight Riders (KKR) are a franchise cricket team representing Kolkata, West Bengal and owned by Bollywood actor Shah Rukh Khan.",
      captain: "Shreyas Iyer",
      homeGround: "Eden Gardens",
      titles: 2,
      foundedYear: 2008,
    },
    {
      name: "Delhi Capitals",
      shortName: "DC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/200px-Delhi_Capitals_Logo.svg.png",
      color: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500",
      description:
        "The Delhi Capitals (DC), formerly Delhi Daredevils, are a franchise cricket team based in Delhi representing the city in the IPL.",
      captain: "Rishabh Pant",
      homeGround: "Arun Jaitley Stadium",
      titles: 0,
      foundedYear: 2008,
    },
    {
      name: "Punjab Kings",
      shortName: "PBKS",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/200px-Punjab_Kings_Logo.svg.png",
      color: "bg-red-500",
      textColor: "text-red-500",
      borderColor: "border-red-500",
      description:
        "The Punjab Kings (PBKS), formerly Kings XI Punjab, are a franchise cricket team based in Mohali, Punjab.",
      captain: "Shikhar Dhawan",
      homeGround: "IS Bindra Stadium",
      titles: 0,
      foundedYear: 2008,
    },
    {
      name: "Rajasthan Royals",
      shortName: "RR",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/200px-Rajasthan_Royals_Logo.svg.png",
      color: "bg-pink-500",
      textColor: "text-pink-500",
      borderColor: "border-pink-500",
      description:
        "The Rajasthan Royals (RR) are a franchise cricket team based in Jaipur, Rajasthan. They won the inaugural edition of the IPL.",
      captain: "Sanju Samson",
      homeGround: "Sawai Mansingh Stadium",
      titles: 1,
      foundedYear: 2008,
    },
    {
      name: "Sunrisers Hyderabad",
      shortName: "SRH",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/200px-Sunrisers_Hyderabad.svg.png",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
      description:
        "The Sunrisers Hyderabad (SRH) are a franchise cricket team based in Hyderabad, Telangana, known for their strong bowling attack.",
      captain: "Pat Cummins",
      homeGround: "Rajiv Gandhi Intl. Cricket Stadium",
      titles: 1,
      foundedYear: 2013,
    },
    {
      name: "Gujarat Titans",
      shortName: "GT",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/200px-Gujarat_Titans_Logo.svg.png",
      color: "bg-blue-700",
      textColor: "text-blue-700",
      borderColor: "border-blue-700",
      description:
        "The Gujarat Titans (GT) are one of the newest IPL teams, based in Ahmedabad, Gujarat.",
      captain: "Hardik Pandya",
      homeGround: "Narendra Modi Stadium",
      titles: 1,
      foundedYear: 2022,
    },
    {
      name: "Lucknow Super Giants",
      shortName: "LSG",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Lucknow_Super_Giants_Logo.png/200px-Lucknow_Super_Giants_Logo.png",
      color: "bg-teal-500",
      textColor: "text-teal-500",
      borderColor: "border-teal-500",
      description:
        "The Lucknow Super Giants (LSG) are one of the newest additions to the IPL, based in Lucknow, Uttar Pradesh.",
      captain: "KL Rahul",
      homeGround: "BRSABV Ekana Cricket Stadium",
      titles: 0,
      foundedYear: 2022,
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="teams">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">IPL Teams</h2>
          <p className="text-xl text-gray-600 mt-4">
            Learn about the teams competing in the Indian Premier League
          </p>
        </div>

        {/* Team logos carousel */}
        <div className="relative mb-16 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-8 pb-4 px-4">
            {teams.map((team) => (
              <div
                key={team.name}
                className={`flex flex-col items-center justify-center min-w-[120px] cursor-pointer transition-all duration-300 ${
                  activeTeam === team.name
                    ? `${team.textColor} scale-110`
                    : "text-gray-500 hover:scale-105"
                }`}
                onClick={() =>
                  setActiveTeam(team.name === activeTeam ? null : team.name)
                }
              >
                <div
                  className={`p-3 rounded-full mb-2 ${
                    activeTeam === team.name
                      ? `${team.borderColor} border-2 shadow-lg`
                      : "border border-gray-200"
                  }`}
                >
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <span className="text-sm font-semibold">{team.shortName}</span>
              </div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div
              key={team.name}
              className={`card-shimmer card hover:shadow-xl transition-all duration-300 transform ${
                activeTeam === team.name
                  ? "scale-105 ring-2 " + team.borderColor
                  : ""
              }`}
            >
              <div className={`h-2 ${team.color} rounded-t-xl`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {team.name}
                    </h3>
                    <span className={`text-sm font-medium ${team.textColor}`}>
                      {team.shortName}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{team.description}</p>

                <div className="border-t pt-4 mt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500">Captain</div>
                      <div className="font-medium">{team.captain}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Home Ground</div>
                      <div className="font-medium">{team.homeGround}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Titles</div>
                      <div className="font-medium">{team.titles}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Founded</div>
                      <div className="font-medium">{team.foundedYear}</div>
                    </div>
                  </div>
                </div>

                <button
                  className={`mt-4 w-full py-2 border ${team.borderColor} ${team.textColor} rounded hover:bg-gray-50 transition-colors`}
                >
                  View Team Stats
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
