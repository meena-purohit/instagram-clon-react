
import { useEffect, useState } from "react";
import { fetchExploreImages } from "../../services/exploreService";

export default function ExploreGride() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await fetchExploreImages()
      setImages(data);
    };
    fetchImages();
  }, []);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-[150px] gap-4 p-4">
      {images.map((img) => (
        <div
          key={img.id}
          className={`relative overflow-hidden ${
            img.id % 5 === 0 ? "row-span-2" : ""
          }`}
        >
          <img
            src={`https://picsum.photos/300/300?random=${img.id}`}
            alt="explore"
            className="w-full h-full object-cover hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition" />
        </div>
      ))}
    </div>
  );
}
