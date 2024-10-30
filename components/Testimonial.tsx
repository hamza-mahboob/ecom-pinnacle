import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I signed up for YouTube Automation, and it’s been a game-changer! My channel's engagement has doubled, and I barely have to lift a finger. Highly recommend!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "The Amazon Automation service is top-notch. I've been able to scale my store effortlessly and see consistent profits. Thank you for making this possible!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "The Shopify Store setup was smooth and efficient. The team handled everything from design to optimization, and my store looks incredible.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "TikTok Store service was excellent. I was able to tap into new customer bases and saw a clear boost in orders. The team is highly skilled and professional!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Starting my Amazon store was overwhelming, but with their help, I got it set up and running smoothly. Can’t believe the results already!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I’ve tried other services before, but the YouTube Automation here is unmatched. Consistent views and real growth without the hassle.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "The Shopify Store setup exceeded my expectations! The design is fantastic, and I’m seeing great traffic and conversions.",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Tom",
    username: "@tom",
    body: "Their TikTok Store service is spot-on. My product is reaching thousands daily, and it’s paying off! They know their stuff.",
    img: "https://avatar.vercel.sh/tom",
  }
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <h1 className="text-2xl lg:text-4xl text-center z-10 lg:text-start font-semibold mb-20">What Our Clients Say About Us</h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}