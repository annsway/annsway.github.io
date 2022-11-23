import { Ad } from '@/components/Ad';
import { ArticleList } from '@/components/ArticleList';
import { Button } from '@/components/Button';
import { ButtonType } from '@/lib/types';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

declare const ezstandalone: any;

const workExperience = [
  {
    company: 'Cornell University',
    title: 'Full Stack Software Engineer',
    duration: 'Nov 2022 - present'
  },
  {
    company: 'TISTA Science & Technology Corporation',
    title: 'Full Stack Software Engineer',
    duration: 'Feb 2022 - May 2022'
  },
  {
    company: 'HealthPartners',
    title: 'Epic Clarity Business Analyst',
    duration: 'Jul 2017 - Sep 2021'
  }
];

const eduExperience = [
  {
    school: 'Cornell University',
    degree: "Master's Degree in Information Science",
    duration: 'Jan 2022 - present'
  },
  {
    school: 'University of Minnesota-Twin Cities',
    degree: "Bachelor's Degree in Statistics",
    duration: 'Jan 2014 - Dec 2016'
  }
];

export default function About({ recentArticles }) {
  const { push } = useRouter();

  useEffect(() => {
    if (window.ezstandalone !== undefined) {
      /* tslint-disable no-return-assign, no-param-reassign */
      ezstandalone.define(117, 116);
      if (!ezstandalone.enabled) {
        ezstandalone.enable();
        ezstandalone.display();
      } else {
        ezstandalone.refresh();
        /* tslint-enable no-return-assign, no-param-reassign */
      }
    }
  }, []);

  return (
    <Container title="About Me - Yun Zhou">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's my story.
        </span>
      </h1>
      <p>
        I’m Yun Zhou, a developer, and a graudate student who specializes in
        full stack web development and database systems. My mission is to
        translate user-centered designs into interactive websites and
        applications that are fast and scalable.
      </p>
      <p>
        I’m currently working on my master's degree in information science in
        the{' '}
        <a href="https://cis.cornell.edu/cornell-computing-information-science">
          College of Computing and Information Science (CIS)
        </a>{' '}
        at Cornell University with an anticipated graduation date in May 2023.
        Meanwhile, I am working as a full stack software engineer at the{' '}
        <a href="https://cals.cornell.edu/computational-biology">
          Computational Biology
        </a>{' '}
        department at Cornell where I am collaborating with designers and other
        software engineers to construct an AI/ML-ready database for molecular
        epidemiology of Mtb, and implement publicly available web services by
        the end of 2023.
      </p>

      <p>
        Prior to Cornell, I worked full-time as a business analyst for four
        years at a leading health care provider and insurance company in the
        state of Minnesota in the United States,{' '}
        <a href="https://www.healthpartners.com/">HealthPartners</a>, where I
        architected and implemented inventory and finance databases for the
        pharmacy department, designed and developed hundreds of dashboards and
        reports for over 50 retail pharamcies, clinics, and hospitals, and
        scripted advanced SQL to retrieve and integrate Electronic Health Record
        (EHR) from enterprise data warehouse to assist not only healthcare
        leaders to understand financial and operational pictures of the
        organization, but also doctors and clinical managers to help millions of
        patients.
      </p>
      <p>
        Before HealthPartners, I studied statistics in my undergraduate career
        at the{' '}
        <a href="https://twin-cities.umn.edu/">
          University of Minnesota-Twin Cities
        </a>{' '}
        where I made my foray into statistical theories, supervised and
        unsupervised machine learning algorithms, predictive data analytics, and
        so on. Outside the classroom, I took statistics and analytics
        internships in a variety of places, such as{' '}
        <a href="https://mn.gov/portal/">State of Minnesota</a>,{' '}
        <a href="https://www.realavid.com/">Real Avid</a>, and{' '}
        <a href="https://www.flatrate.com/">Flatrate Moving</a>. In my spare
        time, I enjoyed volunteering and tutoring mathematics and statistics in
        multiple places, with the goal of fostering leadership and academic
        success in teenage girls (
        <a href="https://youthrive.wixsite.com/youthrive">Youthrive</a>) and
        minorities in the STEM fields (<a href="https://mcae.umn.edu/">MCAE</a>,{' '}
        <a href="https://commonbond.org/education/">CommonBond Communities</a>).
      </p>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-5">
        <div className="col-span-1">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="fill"
            // src="/../static/images/yunzhou.png"
            src={siteMetadata.avatarImage}
            placeholder="blur"
            blurDataURL={siteMetadata.avatarImage}
            width={260}
            height={260}
            layout="responsive"
            alt={'article cover'}
          />
        </div>
        <div className="col-span-3">
          <p className="">
            In my early career life, I have experienced multidisciplinary jobs
            in diverse industries, and found my true passion lying in converting
            business and design ideas into functional products and data
            solutions that can help people live a better life.
          </p>
          <p>
            Upon my graduation in May 2023, I am actively looking for software
            engineering or data engineering job opportunities. Please feel free
            to contact me on <a href={siteMetadata.twitter}>LinkedIn</a>. You
            can find my past projects on{' '}
            <a href={siteMetadata.github}>GitHub</a> or{' '}
            <NextLink href="/projects">
              <a className="hover:text-teal-400 dark:hover:text-teal-500">
                Projects
              </a>
            </NextLink>
            .
          </p>
        </div>
        <div id="ezoic-pub-ad-placeholder-116"> </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="flex justify-center">
        <div id="ezoic-pub-ad-placeholder-116"> </div>
      </div>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work Experience</h2>
        <p>In the most recent five years</p>
        <div className="space-y-2">
          {workExperience.map((workItem) => (
            <div
              key={workItem.company}
              className="flex items-center space-x-3 group"
            >
              <span className="flex-none text-gray-900 gover-hover:underline dark:text-white">
                {workItem.company}
              </span>
              <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
              <span className="flex-none">{workItem.title}</span>
              <span className="flex-none">{workItem.duration}</span>
            </div>
          ))}
          <div id="ezoic-pub-ad-placeholder-117"> </div>
        </div>
        <div id="ezoic-pub-ad-placeholder-117"> </div>
      </div>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">
          Education Experience
        </h2>
        <div className="space-y-2">
          {eduExperience.map((eduItem) => (
            <div
              key={eduItem.school}
              className="flex items-center space-x-3 group"
            >
              <span className="flex-none text-gray-900 gover-hover:underline dark:text-white">
                {eduItem.school}
              </span>
              <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
              <span className="flex-none">{eduItem.degree}</span>
              <span className="flex-none">{eduItem.duration}</span>
            </div>
          ))}
          <div id="ezoic-pub-ad-placeholder-117"> </div>
        </div>
        <div id="ezoic-pub-ad-placeholder-117"> </div>
        <div className="inline-flex w-full md:w-auto ">
          <a
            className="items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white no-underline rounded-full md:text-xl md:px-12 bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href={siteMetadata.resume}
            target="_blank"
            rel="noreferrer"
          >
            View my resume
          </a>
        </div>
      </div>

      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">
        <div className="col-span-3"></div>
      </div>
    </Container>
  );
}
