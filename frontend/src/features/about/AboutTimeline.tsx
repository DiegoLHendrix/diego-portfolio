import {
  Button,
  createTheme,
  ThemeProvider,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const TimelineIconTheme = createTheme({
  timeline: {
    item: {
      point: {
        marker: {
          icon: {
            base: 'h-4 w-4 text-primary-600 dark:text-primary-300',
            wrapper:
              'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-black',
          },
        },
      },
    },
  },
});

const AboutTimeline = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={TimelineIconTheme}>
      <Timeline>
        <TimelineItem>
          <TimelinePoint icon={HiCalendar} />
          <TimelineContent>
            <TimelineTime>August 2021</TimelineTime>
            <TimelineTitle>
              Started Bachelor of Science in Computer Engineering at Rochester
              Institute of Technology
            </TimelineTitle>
            <TimelineBody>
              Began my academic journey in computer engineering. My coursework
              has included core topics such as embedded systems, digital logic
              design, digital electronics, and software development. Through
              hands-on labs and team-based projects, I have gained practical
              experience in designing and implementing hardware and software
              solutions.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint icon={HiCalendar} />
          <TimelineContent>
            <TimelineTime>September 2023</TimelineTime>
            <TimelineTitle>Joined the RIT Electric Vehicle Team</TimelineTitle>
            <TimelineBody>
              Joined the firmware team of EVT and started working on designing
              electric motorcycles. I've been responsible for the Low Voltage
              Sub-System (LVSS), a critical component for power distribution and
              protection. I also collaborated with a team to integrate an RTOS
              into a custom firmware library using a C++ abstraction layer and
              worked with circuit board designers on the Vehicle Control Unit
              (VCU) PCB to ensure its functionality. Additionally, I implemented
              CAN SDO functionality into the main EVT firmware library and
              created a client-server demonstration project to show reliable
              communication between two STM32 microcontrollers.
              <Button
                color="blue"
                onClick={() => navigate('/experience?tab=evt')}
              >
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint icon={HiCalendar} />
          <TimelineContent>
            <TimelineTime>June 2025</TimelineTime>
            <TimelineTitle>Started working at Rauland Ametek</TimelineTitle>
            <TimelineBody>
              As an Embedded Engineer Intern at Rauland Ametek, I focused on
              developing and troubleshooting communication and workflow
              solutions for healthcare and education. I created a C# application
              to analyze data from a proprietary RS-485 communication bus and
              worked on firmware for a proprietary Ethernet Corridor Light.
              Additionally, I gained experience with embedded Linux kernel
              development, resolving a capacitive touchscreen issue by editing
              low-level drivers.
              <Button
                color="blue"
                onClick={() => navigate('/experience?tab=rauland')}
              >
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </ThemeProvider>
  );
};

export default AboutTimeline;
