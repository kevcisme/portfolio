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
              href="https://www.npassim.com/1?data=eyJuIjoiS2V2aW4gQ295bGUiLCJkIjoiQWJvdXQgbWU6IE1MRSwgZGFkLCBhbmQgcGVycGV0dWFsbHkgbWVycnkgZHVkZSAgKGF3YXJkIHdpbm5pbmcgb24gdGhhdCBsYXN0IG9uZSkgIiwiZnUiOiJxdW90ZTogaXQgaXMgZnVuIHRvIGhhdmUgZnVuIGJ1dCB5b3UgaGF2ZSBrbm93IGhvdyEiLCJsbyI6IlRoZSBpY29ucyBiZWxvdyBhcmUgbGlua3MgdG8gY29udGFjdCBtZSBpbiBwbGFjZXMgYW5kIHRoZSBsYXJnZXIgYnV0dG9ucyBhcmUgIHNvbWUgbGlua3Mgd2l0aCB0aGUgbWF0ZXJpYWxzIGZyb20gcmVjZW50IHRhbGtzIEkndmUgZ2l2ZW4hIiwiaSI6IiIsImYiOiIiLCJ0IjoiaHR0cHM6Ly94LmNvbS9rZXZjaXNtZSIsImlnIjoiIiwiZ2giOiJnaXRodWIuY29tL2tldmNpc21lIiwidGciOiIiLCJsIjoiIiwiZSI6ImluZm9AcHJpbWFyeWtleS5zb2x1dGlvbnMiLCJ3IjoiIiwieSI6IiIsImxzIjpbeyJpIjoiIiwibCI6IlB5SGF3YWlpIFRhbGs6IFB5U3BhcmsgZm9yIFlvdSBhbmQgTWUgKCBBIEdlbnRsZSBJbnRybykiLCJ1IjoiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vcHJlc2VudGF0aW9uL2QvMVkyNjhFV3IyM1o0cGFaMl9NWHd0dnU0dEVveHZ2MjZiZTdiVzBfQU5wbmMvZWRpdD91c3A9c2hhcmluZyJ9LHsiaSI6IiIsImwiOiJQeUhhd2FpaSBUYWxrOiBSQUdlIEFnYWluc3QgdGhlIEtleXdvcmQgU2VhcmNoIiwidSI6Imh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3ByZXNlbnRhdGlvbi9kLzFCRVhLeDRHSG1rdTZWZEQ1NHpaUGF1QnFRNllOOW1rUEtVV2JRZUhYelo4L2VkaXQ/dXNwPXNoYXJpbmcifSx7ImkiOiIiLCJsIjoiSGF3YWlpIFRlY2ggV2VlayBUYWxrOiBBSSBFbmdpbmVlcmluZyAxMDEiLCJ1IjoiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vcHJlc2VudGF0aW9uL2QvMWo2N01oRC1BRnNDS080ZEZaVnRyZWpvcWgwNmIyOTFYTHE1cExXd1E4MnMvZWRpdD91c3A9c2hhcmluZyJ9LHsiaSI6IiIsImwiOiJDYWx0ZWNoIENUTUUgVGFsazogTGVzc29ucyBMZWFybmVkIGluIERTICIsInUiOiJodHRwczovL2FwcC5ib3guY29tL3MvNmVyZzdoYTVhdjN0ZzlyZXBsaGV2amNhdHNtemx0cWUifV19"
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
