import { Card } from 'flowbite-react';

import Headshot from '@assets/base/Headshot.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutCard = () => {
  return (
    <Card className="max-w-lg">
      <div className="flex flex-col items-center">
        <img
          className="mb-3 w-full rounded-lg shadow-lg"
          src={Headshot}
          alt="Diego Lopez Headshot"
        />
        <div>
          <h5 className="text-3xl font-bold">Diego Lopez</h5>
          <p className="text-xl">
            A motivated Computer Engineering student at Rochester Institute of
            Technology with a strong interest in embedded systems, firmware
            development, and electric vehicle technology. Seeking opportunities
            to apply my skills and contribute to innovative projects.
          </p>

          <ul className="text-xl py-2">
            <li>
              <a
                href="mailto:DiegoLHendrix@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaEnvelope size={20} className="mr-1" />
                DiegoLHendrix@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dl4583"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaLinkedin size={20} className="mr-1" />
                DL4583
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DiegoLHendrix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaGithub size={20} className="mr-1" />
                DiegoLHendrix
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default AboutCard;
