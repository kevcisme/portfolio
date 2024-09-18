import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import { LayoutGrid } from '@/components/ui/layout-grid';

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">Hobbies</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        I grew up skiing, waterskiing, playing basketball, just generally being
        outside. I like to think that I am still pretty good at some of that
        stuff.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">My loves</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        I love traveling and exploring new places with these two. They fill my
        world with joy.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">Passions</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        I am really passionate about technology. I like to build things and
        tinker. From Raspberry Pis to ML models in prod and back, I like to
        ship.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">Mission</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        My mission in life is to leave this all a bit more beautiful than I
        found it. I am grateful for everything that life has given me. My main
        intellectual obsession is the transfer of knowledge and how we
        epistemoligically deem things important and non-important. I especially
        like working on how we model and simplify hugely complex things.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail: '/images/personal/1.jpg'
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/images/personal/2.jpg'
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail: '/images/personal/3.jpg'
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail: '/images/personal/4.jpg'
  }
];

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full py-20">
      <LayoutGrid cards={cards} />
    </div>
  );
}

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                About
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Me
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here is where you can read about me.
          </p>
        </div>
        <div className="space-y-4">
          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Originally from Fresno, California. I currently call Honolulu home.
            My professional resume is in the link below but the story that might
            be harder to glean from it: I have spent the last decade in machine
            learning and AI. I have been really fortunate to be able to work on
            hard problems with great people.
          </p>
          <br></br>
          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I have got an awesome family - they are in the photo above, minus
            our dog and several cats. I am trying to figure out how to surf, but
            I also like to just hang on the beach and play volleyball. I play a
            lot of golf and I really like to watch basketball.
          </p>
          <Button asChild>
            <Link href="resume.pdf" target="_blank">
              View Resume <ArrowUpRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
          <br></br>
          <Button asChild>
            <Link
              href="https://www.npassim.com/1?data=eyJuIjoidGFsa3MgYnkga2V2aW4gY295bGUiLCJkIjoiIiwiZnUiOiIiLCJsbyI6IiIsImkiOiJodHRwczovL2dhLWNvcmUuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uL3VwbG9hZHMvaW5zdHJ1Y3Rvci9pbWFnZS8xNjA5Mi93ZWJwX3RodW1ibmFpbF9rZXZpbl9oZWFkc2hvdC5qcGcud2VicCIsImYiOiIiLCJ0IjoiIiwiaWciOiIiLCJnaCI6IiIsInRnIjoiIiwibCI6IiIsImUiOiIiLCJ3IjoiIiwieSI6IiIsImxzIjpbeyJpIjoiIiwibCI6IkFJIEVuZ2luZWVyaW5nIDEwMSIsInUiOiJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9wcmVzZW50YXRpb24vZC8xajY3TWhELUFGc0NLTzRkRlpWdHJlam9xaDA2YjI5MVhMcTVwTFd3UTgycy9lZGl0P3VzcD1zaGFyaW5nIn0seyJpIjoiIiwibCI6IlJBRyhlKSBBZ2FpbnN0IHRoZSBLZXl3b3JkIFNlYXJjaCAiLCJ1IjoiaHR0cHM6Ly9naXRodWIuY29tL2tldmNpc21lL3B5LWhhd2FpaS1yYWctMjAyNCJ9XX0="
              target="_blank"
            >
              Talks by me! <ArrowUpRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
        <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Click on a square to read a little more.
        </p>
        <LayoutGridDemo />
      </div>
    </MotionWrap>
  );
}

export default About;
