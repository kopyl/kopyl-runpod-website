"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const DiffusionPortraitDynamicImage = ({ className }: any) => {
  const imageContainer = useRef<HTMLImageElement | null>(null);
  const [imageBase64, setImageBase64] = useState(null);

  const fetchAndSetImage = async (id = 0, delay = 0) => {
    const e = await fetch(`/api/diffusion-portrait-images/${id}`);
    const value = await e.json();
    setImageBase64(value["content"]);
  };

  useEffect(() => {
    const imageIds = [1, 3, 5, 8, 11, 16];
    const animateImage = async () => {
      for (const imageId of imageIds) {
        await fetchAndSetImage(imageId);
        await delay(1000);
      }
    };
    animateImage();
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
