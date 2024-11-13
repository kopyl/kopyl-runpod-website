"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export const DiffusionPortraitDynamicImage = ({ className }: any) => {
  const imageContainer = useRef<HTMLImageElement | null>(null);
  const [imageBase64, setImageBase64] = useState(null);

  const fetchAndSetImage = (id = 0, delay = 0) => {
    return fetch(`/api/diffusion-portrait-images/${id}`)
      .then((e) => e.json())
      .then((value) => {
        setTimeout(() => {
          setImageBase64(value["content"]);
        }, delay);
      });
  };

  ["0", "1", "3", "5", "8", "11", "16"];

  useEffect(() => {
    const fetchImages = async () => {
      await fetchAndSetImage(1);
      await fetchAndSetImage(3, 1000);
      await fetchAndSetImage(5, 2000);
      await fetchAndSetImage(8, 3000);
      await fetchAndSetImage(11, 4000);
      await fetchAndSetImage(16, 4000);
    };

    fetchImages();
  }, []);

  return (
    <Image
      src={
        imageBase64 == null
          ? "/me-0.png"
          : `data:image/jpeg;base64,${imageBase64}`
      }
      alt="Kopyl Oleh's portrait"
      width={341}
      height={341}
      priority
      className={className}
    />
  );
};
