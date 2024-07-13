import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Originally from Fresno, California. I currently call Honolulu
                home. I started my professional career as an Intellectual
                Property paralegal. After completing a life-changing bootcamp, I
                began to try to enrich my newfound community with teaching. I
                taught people who were in my same shoes - learning to code,
                learning the math and algorithms behaind data science. Fast
                forward to whatever year it is - 2017, and now I try to focus my
                work on solving problems for people.
              </p>
              <Button asChild>
                <Link href="resume.pdf" target="_blank">
                  View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/images/hero.jpg"
              sizes="100vw"
              width="550"
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
