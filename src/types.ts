export interface ArtistFormProps {
  formData: {
    id: number;
    name: string;
    image: string;
    imageAlt: string;
    distance: string;
    location: string;
    rating: number;
    reviews: number;
    pricePerHour: number;
    description: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    id: number;
    name: string;
    image: string;
    imageAlt: string;
    distance: string;
    location: string;
    rating: number;
    reviews: number;
    pricePerHour: number;
    description: string;
  }>>;
}

export interface MediaItem {
  url: string;
  altText: string;
}

export interface TalentCardProps {
  image: string;
  name: string;
  category: string;
  distance: string;
  location: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  description: string;
}

export interface UploadPreview {
  file: File;
  previewUrl: string;
  description: string;
  imageUrl: string;
}

export interface ButtonProps {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export interface Review {
  reviewerName: string;
  reviewText: string;
  rating: number;
  username: string;
  content: string;
  avatarUrl: string;
}

export interface TestimonialProps {
  testimonialText: string;
  author: string;
  username: string;
  content: string;
  rating: number;
  userImage: string;
}

export interface VideoReview {
  videoUrl: string;
  reviewerName: string;
  reviewText: string;
  username: string;
  rating: number;
  content: string;
  avatarUrl: string;
  videoThumbnail: string;
  videoPlayIcon: string;
}