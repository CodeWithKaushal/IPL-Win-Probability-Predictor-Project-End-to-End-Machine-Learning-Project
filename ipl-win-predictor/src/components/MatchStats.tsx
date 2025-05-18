import React from "react";

interface MatchStat {
  label: string;
  value: string | number;
  color?: string;
  icon?: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
}

interface MatchStatsProps {
  statsTitle: string;
  stats: MatchStat[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const MatchStats: React.FC<MatchStatsProps> = ({
  statsTitle,
  stats,
  orientation = "horizontal",
  className = "",
}) => {
  return (
    <div className={`card mb-4 border border-gray-200 ${className}`}>
      <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
        {statsTitle}
      </h3>

      <div
        className={`grid ${
          orientation === "horizontal"
            ? "grid-cols-2 md:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2"
        } gap-4`}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium text-sm mb-1">
                  {stat.label}
                </p>
                <p
                  className={`text-xl font-bold ${
                    stat.color || "text-primary"
                  }`}
                >
                  {stat.value}
                </p>

                {stat.change && (
                  <div
                    className={`text-xs font-medium flex items-center mt-1 ${
                      stat.change.isPositive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <svg
                      className="w-3 h-3 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d={
                          stat.change.isPositive
                            ? "M12 7a1 1 0 01-1-1V5H9a1 1 0 110-2h2a1 1 0 011 1v1h1a1 1 0 110 2h-1z"
                            : "M12 9a1 1 0 01-1 1H9a1 1 0 110 2h2a1 1 0 001-1v-1h1a1 1 0 100-2h-1z"
                        }
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d={
                          stat.change.isPositive
                            ? "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"
                            : "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        }
                        clipRule="evenodd"
                      />
                    </svg>
                    {stat.change.value}%
                  </div>
                )}
              </div>

              {stat.icon && (
                <div
                  className={`p-2 rounded-full ${
                    stat.color?.replace("text-", "bg-").replace("text-", "") ||
                    "bg-primary-100"
                  }`}
                >
                  {stat.icon}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchStats;
