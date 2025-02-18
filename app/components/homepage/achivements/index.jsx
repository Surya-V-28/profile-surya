// @flow strict
import { achievements } from "@/utils/data/achivements"; // Assuming you have an achievements data file
import { FaMedal } from "react-icons/fa";  
import GlowCard from "../../helper/glow-card";

function Achievements() {
  return (
    <div id="achievements" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        {/* Adjusted the gap between cards to make the vertical space smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {
            achievements.map(achievement => (
              <GlowCard key={achievement.id} identifier={`achievement-${achievement.id}`}>
                <div className="p-3 relative text-white">
                  <div className="flex justify-center">
                    {/* Removed the date */}
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-yellow-500 transition-all duration-300 hover:scale-125">
                      <FaMedal size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {achievement.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {achievement.description.length > 100 
                          ? `${achievement.description.substring(0, 100)}...` 
                          : achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Achievements;
