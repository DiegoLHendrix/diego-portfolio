import React, { useEffect, useState } from "react";

interface SecureImageProps {
  filename: string;
  alt?: string;
  className?: string;
}

const SecureImage: React.FC<SecureImageProps> = ({
  filename,
  alt = "",
  className,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchSecureImage = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await fetch(
          `https://db.diegolopezportfolio.net/media/images/${filename}`,
          {
            method: "GET",
            credentials: "include", // Optional: if you use cookies/auth
          }
        );

        if (!res.ok)
          throw new Error(`Failed to fetch image: ${res.statusText}`);

        const blob = await res.blob();
        const imageURL = URL.createObjectURL(blob);
        setImageSrc(imageURL);
      } catch (err: any) {
        setError(
          `Error fetching image for ${filename}: ${
            err.message || "Could not load image."
          }`
        );
        console.error("Error fetching image:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSecureImage();

    return () => {
      if (imageSrc) URL.revokeObjectURL(imageSrc);
    };
  }, [filename]);

  if (loading) return <div className="text-center">Loading image...</div>;
  if (error) return <div className="text-danger text-center">{error}</div>;

  return <img src={imageSrc ?? ""} alt={alt} className={className} />;
};

export default SecureImage;
