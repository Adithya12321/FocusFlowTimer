import React from "react";
import { CircleX } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-[#1E1E1E] text-[#F3F3F3] border border-[#2E2E2E] rounded-2xl p-8 w-11/12 max-w-lg shadow-lg">
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <CircleX
            onClick={onClose}
            size={24}
            strokeWidth={2}
            className="cursor-pointer hover:drop-shadow-[0_0_6px_rgba(203,161,53,0.5)] hover:scale-105"
          />
        </div>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">About This Website</h2>
        <p className="text-sm leading-6 mb-4">
          This Pomodoro Timer application is designed to help users manage their time effectively by alternating between work and break sessions. The timer is built using modern web technologies like React and Tailwind CSS, ensuring a smooth and responsive user experience.
        </p>
        <p className="text-sm leading-6 mb-4">
          The background particle effects and overall design aim to create a calming and focused environment for productivity.
        </p>

        {/* About Me Section */}
        <h3 className="text-lg font-semibold mt-4 mb-2">About Me</h3>
        <p className="text-sm leading-6 mb-4">
          My name is <span className="font-bold">Adithya Venkatesh Pithani</span>. I am a passionate web developer with a focus on creating interactive and user-friendly applications. This project is a reflection of my dedication to building tools that enhance productivity and provide a seamless user experience.
        </p>

        {/* Credits Section */}
        <h3 className="text-lg font-semibold mt-4 mb-2">Credits</h3>
        <ul className="list-disc list-inside text-sm leading-6">
          <li>
            Music: <a href="https://www.youtube.com/watch?v=R-bI0AhSyU0" target="_blank" rel="noopener noreferrer" className="text-[#CBA135] hover:underline">"Relaxing Music for Focus"</a> by YouTube.
          </li>
          <li>
            Icons: <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="text-[#CBA135] hover:underline">Lucide Icons</a>.
          </li>
          <li>
            Particle Effects: Custom implementation using React.
          </li>
        </ul>

        {/* Copyright Section */}
        <p className="text-sm leading-6 mt-6 text-center">
          &copy; {new Date().getFullYear()} Adithya Venkatesh Pithani. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;