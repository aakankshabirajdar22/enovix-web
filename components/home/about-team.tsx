"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";

type TeamMember = {
  firstName: string;
  lastName: string;
  bio: string;
  role: string;
  image: string | null;
};

const team: TeamMember[] = [
  {
    firstName: "Omkar",
    lastName: "Dadge",
    bio: "Leading future-ready websites through smart ideas, clean design, and bold innovation.",
    role: "Lead Generation Team",
    image: "/images/team/omkar-dadge.png",
  },
  {
    firstName: "Lalith",
    lastName: "K.S",
    bio: "Helping clients grow through clear advice, strong trust, and smart digital solutions.",
    role: "Sales Team",
    image: "/images/team/lalith-ks.png",
  },
  {
    firstName: "Sahil",
    lastName: "Singh",
    bio: "Turning ideas into user-friendly websites with modern design and seamless experiences.",
    role: "Design Team",
    image: "/images/team/sahil-singh.png",
  },
  {
    firstName: "Aakanksha",
    lastName: "Birajdar",
    bio: "Turning designs into fast websites using clean code and modern web development practices.",
    role: "Development Team",
    image: "/images/team/Aakanksha.png",
  },
  {
    firstName: "Suyash",
    lastName: "SS",
    bio: "Helping create fast websites through clean code, teamwork, and continuous learning.",
    role: "Development Intern",
    image: null,
  },
];

export function AboutTeam() {
  return (
    <section className="section-shell py-20 sm:py-28 lg:py-40">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.4fr]">
        <Reveal>
          <h2 className="display-heading text-4xl sm:text-5xl">
            More
            <br />
            about
          </h2>
        </Reveal>
        <div>
          <p className="display-heading text-[clamp(3rem,8vw,7rem)] text-brand">
            EnovixWeb
          </p>
          <p className="body-copy mt-5 max-w-3xl">
            EnovixWeb is a future-focused web design agency helping businesses
            create meaningful digital experiences through modern design,
            strategic thinking, and user-first development. We partner with
            startups, SMEs, and global brands to deliver websites that are
            visually refined, performance-driven, and built to scale.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <motion.article
            className="clip-panel flex bg-border p-px"
            key={`${member.firstName}-${member.lastName}`}
            transition={{ duration: 0.28, ease: "easeOut" }}
            whileHover={{ backgroundColor: "#c8ff00" }}
          >
            <div className="clip-panel flex flex-1 flex-col bg-background p-4">
              <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-[#050505]">
                {member.image && (
                  <Image
                    alt={`${member.firstName} ${member.lastName}`}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    src={member.image}
                  />
                )}
              </div>
              <div className="mt-4 flex flex-1 items-end justify-between gap-3">
                <h3 className="display-heading text-2xl">
                  {member.firstName}
                  <br />
                  {member.lastName}
                </h3>
                <div className="text-right">
                  <p className="body-copy max-w-[10rem] text-xs text-muted">
                    {member.bio}
                  </p>
                  <p className="mt-3 text-xs text-brand">{member.role}</p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
