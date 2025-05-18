const Teams = () => {
  const teams = [
    {
      name: "Chennai Super Kings",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/200px-Chennai_Super_Kings_Logo.svg.png",
      color: "bg-yellow-500",
      description:
        "The Chennai Super Kings (CSK) are a franchise cricket team based in Chennai, Tamil Nadu. They have won the IPL championship multiple times.",
    },
    {
      name: "Mumbai Indians",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/200px-Mumbai_Indians_Logo.svg.png",
      color: "bg-blue-600",
      description:
        "The Mumbai Indians (MI) are a franchise cricket team based in Mumbai, Maharashtra. They are the most successful team in IPL history.",
    },
    {
      name: "Royal Challengers Bangalore",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/200px-Royal_Challengers_Bangalore_2020.svg.png",
      color: "bg-red-600",
      description:
        "The Royal Challengers Bangalore (RCB) are a franchise cricket team based in Bangalore, Karnataka known for their batting strength.",
    },
    {
      name: "Kolkata Knight Riders",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/200px-Kolkata_Knight_Riders_Logo.svg.png",
      color: "bg-purple-700",
      description:
        "The Kolkata Knight Riders (KKR) are a franchise cricket team representing Kolkata, West Bengal and owned by Bollywood actor Shah Rukh Khan.",
    },
    {
      name: "Delhi Capitals",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/200px-Delhi_Capitals_Logo.svg.png",
      color: "bg-blue-500",
      description:
        "The Delhi Capitals (DC), formerly Delhi Daredevils, are a franchise cricket team based in Delhi representing the city in the IPL.",
    },
    {
      name: "Punjab Kings",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/200px-Punjab_Kings_Logo.svg.png",
      color: "bg-red-500",
      description:
        "The Punjab Kings (PBKS), formerly Kings XI Punjab, are a franchise cricket team based in Mohali, Punjab.",
    },
    {
      name: "Rajasthan Royals",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/200px-Rajasthan_Royals_Logo.svg.png",
      color: "bg-pink-500",
      description:
        "The Rajasthan Royals (RR) are a franchise cricket team based in Jaipur, Rajasthan. They won the inaugural edition of the IPL.",
    },
    {
      name: "Sunrisers Hyderabad",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/200px-Sunrisers_Hyderabad.svg.png",
      color: "bg-orange-500",
      description:
        "The Sunrisers Hyderabad (SRH) are a franchise cricket team based in Hyderabad, Telangana, known for their strong bowling attack.",
    },
    {
      name: "Gujarat Titans",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/200px-Gujarat_Titans_Logo.svg.png",
      color: "bg-blue-700",
      description:
        "The Gujarat Titans (GT) are one of the newest IPL teams, based in Ahmedabad, Gujarat.",
    },
    {
      name: "Lucknow Super Giants",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Lucknow_Super_Giants_Logo.png/200px-Lucknow_Super_Giants_Logo.png",
      color: "bg-teal-500",
      description:
        "The Lucknow Super Giants (LSG) are one of the newest additions to the IPL, based in Lucknow, Uttar Pradesh.",
    },
  ];

  return (
    <div className="py-12 bg-white" id="teams">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">IPL Teams</h2>
          <p className="text-xl text-gray-600 mt-4">
            Learn about the teams competing in the Indian Premier League
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div
              key={team.name}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 ${team.color} rounded-t-xl`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    {team.name}
                  </h3>
                </div>
                <p className="text-gray-600">{team.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
