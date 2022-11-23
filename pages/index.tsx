import { ButtonType } from '@/lib/types';

import { Button } from '@/components/Button';
import { Container } from 'layouts/Container';
import Image from 'next/image';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

export default function Home() {
  const { push } = useRouter();
  return (
    <Container showCircles>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
              I'm <span className="text-teal-500 dark:text-teal-400">Yun</span>.
              I'm a full stack software engineer, and graduate student studying
              at{' '}
              <span className="text-teal-500 dark:text-teal-400">
                Cornell University
              </span>
              .
            </h1>
            <div className="order-1 md:order-2">
              <Image
                alt="Yun Zhou"
                height={160}
                width={160}
                src={siteMetadata.avatarImage}
                placeholder="blur"
                blurDataURL={siteMetadata.avatarImage}
                className="col-span-1 rounded-full"
                layout="fixed"
                object-fit="none"
              />
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:space-x-4">
            <div className="inline-flex w-full md:w-auto ">
              <a
                className="items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white no-underline rounded-full md:text-xl md:px-10 bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
                href={siteMetadata.resume}
                target="_blank"
                rel="noreferrer"
              >
                View my resume
              </a>
            </div>
            <Button
              buttonType={ButtonType.SECONDARY}
              onButtonClick={() => push('/about')}
            >
              More about me
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="text-center font-size:8px">
          <a href="https://github.com/braydoncoyer/braydoncoyer.dev">
            Built based on braydoncoyer.dev template
          </a>
        </div>
      </div>
    </Container>
  );
}
