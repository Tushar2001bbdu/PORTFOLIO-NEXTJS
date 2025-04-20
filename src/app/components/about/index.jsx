"use client"
import React from "react";
import ItemDisplay from "./ItemLayout";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemDisplay
          className={
            " col-span-full lg:col-span-12 row-span-2 flex-col"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            my journey in web development
          </h2>
          <p className="font-light  text-xl sm:text-base md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemDisplay>

      

        

        <ItemDisplay
          className={"col-span-full sm:col-span-6 md:col-span-4"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Github Stats"
            loading="lazy"
          />
        </ItemDisplay>

        <ItemDisplay className={"col-span-full md:col-span-8"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Linkedin"
            loading="lazy"
          />
        </ItemDisplay>

        <ItemDisplay className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={'https://skillicons.dev/icons?i=html,css,js,react,nextjs,nodejs,express,mongodb,mysql,tailwind,git,github,aws,s3,dynamodb,firebase,threejs,vite,vscode'}
            alt="Skills"
            loading="lazy"
          />
        </ItemDisplay>

        <ItemDisplay className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=codebucks27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Skills"
            loading="lazy"
          />
        </ItemDisplay>

        <ItemDisplay className={"col-span-full md:col-span-6"}>
          <Link
            href=""
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemDisplay>
      </div>
    </section>
  );
};

export default About;