/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/09af3fcd-74da-478d-ad9c-32dee320b1b1-1x9eas.jpg",
  "https://utfs.io/f/5b1ba278-fe34-4ea9-8dec-f07d8f17190b-4qx03.11.28.png",
  "https://utfs.io/f/bfed2dd1-9588-49d7-bb18-01767c06c402-4qx05.19.37.png",
  "https://utfs.io/f/74d742a2-e44e-4c5b-9c7f-cc49ac1a0fe4-5s634d.31.52.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
