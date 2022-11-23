import { Container } from 'layouts/Container';
import Image from 'next/image';

export default function Projects() {
  return (
    <Container title="Projects - Yun Zhou">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          My Projects
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-3">
        <div className="col-span-1">
          <h2 className="mt-0">TISTA Blockchain Donation Website</h2>
          <p>
            Built a blockchain donation website where donors could transfer
            their cryptocurrency via MetaMask digital wallet to verified
            receiving accounts with low transaction fees (gas fees). Verified
            beneficiaries could submit donation requests to the website. All
            donation records were transparent on both the website and the
            ethereum platform.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://www.youtube.com/watch?v=42_jFxOdSxU&ab_channel=YunZhou"
            target="_blank"
            rel="noreferrer"
          >
            View Demo
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                objectFit="contain"
                src="/../static/images/tista.png"
                placeholder="blur"
                blurDataURL="/../static/images/tista.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'TISTA'}
              />
            </div>
          </div>
        </div>

        {/* <div className="col-span-1">
          <h2 className="mt-0">Pomegradient</h2>
          <p>
            Pomegradient is a web-based gradient solutiuon currently in beta
            that allows you to find, save and craft gradients with a creative
            community!
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://www.pomegradient.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Pomegradient
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative h-auto col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight">
              <Image
                className="absolute top-0 left-0"
                objectFit="fill"
                src="https://res.cloudinary.com/braydoncoyer/image/upload/v1638225420/pomegradient_ipadpro_vhapql.png"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1638225420/pomegradient_ipadpro_vhapql.png"
                width={1978}
                height={1713}
                layout="intrinsic"
                alt={'NgLimeade on an iPad'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Bundle, LLC</h2>
          <p>
            A startup consultant company desired to reach potential clients
            organically through a blog. Working closely with them to understand
            the requirements, I created an industry website showcasing their
            products, and a blog focussed on SEO.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://www.bundleapps.io"
            target="_blank"
            rel="noreferrer"
          >
            Visit Bundle
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className="absolute top-5 md:top-0 -left-[250px]"
                objectFit="fill"
                src="https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'Bundle, LLC on a Macbook Pro'}
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="mt-0">NgLimeade</h2>
          <p>
            NgLimeade is an Angular Toast Library that aims to get toast
            notifications up and running in less than a minute! No joke! Check
            it out for yourself!
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://www.npmjs.com/package/ng-limeade"
            target="_blank"
            rel="noreferrer"
          >
            Install NgLimeade
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg h-2/5 dark:bg-midnight">
              <Image
                className="absolute top-0 left-[-150px] md:left-[-300px]"
                objectFit="fill"
                src="https://res.cloudinary.com/braydoncoyer/image/upload/v1638226232/nglimeade_ipadpro_blliap.png"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1638226232/nglimeade_ipadpro_blliap.png"
                width={1201}
                height={1788}
                layout="intrinsic"
                alt={'NgLimeade on an iPad'}
              />
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
}
