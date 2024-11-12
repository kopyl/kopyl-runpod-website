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

  useEffect(() => {
    const fetchImages = async () => {
      await fetchAndSetImage(3);
      await fetchAndSetImage(6, 1000);
      await fetchAndSetImage(9, 2000);
      await fetchAndSetImage(12, 3000);
      await fetchAndSetImage(15, 4000);
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
