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
            My internship project to build a blockchain donation website where
            donors could transfer their cryptocurrency via MetaMask digital
            wallet to verified receiving accounts with low transaction fees (gas
            fees). Verified beneficiaries could submit donation requests to the
            website. All donation records were transparent on both the website
            and the ethereum platform.
          </p>
          <div className="inline-flex w-full md:w-auto ">
            <a
              className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
              href="https://www.youtube.com/watch?v=42_jFxOdSxU&ab_channel=YunZhou"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
              href="https://github.com/annsway/eth_wallet"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                objectFit="contain"
                src="/static/images/tista.png"
                placeholder="blur"
                blurDataURL="/static/images/tista.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'TISTA'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Jaunty Jalopies Car Dealership System</h2>
          <p>
            Team project to build a full stack car dealership application with
            functionalities to update vehicle inventory, track sales, maintain
            repair history, and allow customers to search inventory based on
            user roles.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://github.com/annsway/car-dealership"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className="absolute top-5 md:top-0"
                objectFit="contain"
                src="/static/images/car-dealership.png"
                placeholder="blur"
                blurDataURL="/static/images/car-dealership.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'Senators'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Data Modeling & BI Solutions for CUHA</h2>
          <p>
            Cornell University Hospital for Animals (CUHA) was exploring the
            viability of opening a new appointment-based Urgent Care service. We
            built dimensional data models, developed ETL process, used SQL and
            Tableau to analyze the ER cases to learn the demand and financial
            aspects of urgent care services, and presented our recommendatons to
            the stakeholders.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://cornell.digication.com/info-4555-5556-business-intelligence-systems-group-14/project-summary"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className="absolute top-5 md:top-0"
                objectFit="contain"
                src="/static/images/bi-etl-project.png"
                placeholder="blur"
                blurDataURL="/static/images/bi-etl-project.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'Senators'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">NLP Project for 10-K Financial Reports</h2>
          <p>
            The intuition of this project was to utilize machine learning
            methodologies to classify NASDAQ-100 stock performance based on the
            Risk Factors from hundreds of 10-K Reports.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://github.com/annsway/NLP"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative h-auto col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight">
              <Image
                className="absolute top-0 left-0"
                objectFit="fill"
                src="/static/images/nlp-wordcloud.png"
                placeholder="blur"
                blurDataURL="/static/images/nlp-wordcloud.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'nlp'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Median Family Income of New York State</h2>
          <p>
            A D3 visualization on the median family income of the New York
            counties in 2019.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://github.com/annsway/d3-visualization/tree/main/nyincome"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className="absolute top-5 md:top-0"
                objectFit="contain"
                src="/static/images/d3-nyincome.png"
                placeholder="blur"
                blurDataURL="/static/images/d3-nyincome.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'NY Income'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">US Senators Shared with Voting Patterns</h2>
          <p>
            A D3 Force Simulation based on the shared voting patterns of the US
            Senators during the 109th congress (2005 to 2007). Each node
            represents a senator (blue: democrat; red: republican). Edges have
            been drawn between senators who shared similar voting patterns.
            Senators who almost always disagree will not be connected.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://github.com/annsway/d3-visualization/tree/main/senators-shared"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className="absolute top-5 md:top-0"
                objectFit="contain"
                src="/static/images/d3-senators.png"
                placeholder="blur"
                blurDataURL="/static/images/d3-senators.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'Senators'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Movie Barcodes Visualization</h2>
          <p>
            A series of movie barcodes created using D3 <b>canvas</b> elements.
            A barcode uses vertical lines to show the average color of
            individual frames of a film, helping to reveal how color is used by
            cinematographers to give flavor to a film.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://github.com/annsway/d3-visualization/tree/main/movie-barcodes"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className="absolute top-5 md:top-0"
                objectFit="contain"
                src="/static/images/d3-moviebarcodes.png"
                placeholder="blur"
                blurDataURL="/static/images/d3-moviebarcodes.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'Senators'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">NCAA Basketball Games Shot Attempts Heatmap</h2>
          <p>
            D3 Visualization based on the shot attempts of the NCAA Basketball
            games (2018-2019 & 2020-2021 seasons). Areas of high activity in the
            game are colored yellow and areas of low activity are black.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://github.com/annsway/d3-visualization/tree/main/basketball"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className="absolute top-5 md:top-0"
                objectFit="contain"
                src="/static/images/d3-basketball.png"
                placeholder="blur"
                blurDataURL="/static/images/d3-basketball.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'Basketball'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">D3.js HCL Color Exploration</h2>
          <p>
            A D3 visualization based on the HCL Color (hue angle, chroma,
            lightness), which is closely estimates how humans perceive colors.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://github.com/annsway/d3-visualization/tree/main/gradient"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className="absolute top-5 md:top-0"
                objectFit="contain"
                src="/static/images/d3-gradient.png"
                placeholder="blur"
                blurDataURL="/static/images/d3-gradient.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'D3Gradient'}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
