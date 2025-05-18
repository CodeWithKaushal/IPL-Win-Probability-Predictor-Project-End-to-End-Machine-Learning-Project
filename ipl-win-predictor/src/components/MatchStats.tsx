import React from "react";

interface MatchStat {
  label: string;
  value: string | number;
  color?: string;
}

interface MatchStatsProps {
  statsTitle: string;
  stats: MatchStat[];
  orientation?: "horizontal" | "vertical";
}

const MatchStats: React.FC<MatchStatsProps> = ({
  statsTitle,
  stats,
  orientation = "horizontal",
}) => {
  return (
    <div className="card mb-4">
      <h3 className="text-xl font-bold mb-4 text-gray-800">{statsTitle}</h3>

      <div
        className={`grid ${
          orientation === "horizontal"
            ? "grid-cols-2 md:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2"
        } gap-4`}
      >
        {stats.map((stat, index) => (
          <div key={index} className="stat-card p-3 bg-white rounded-lg">
            <p className="text-gray-700 font-semibold text-sm">{stat.label}</p>
            <p className={`text-xl font-bold ${stat.color || "text-primary"}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchStats;
