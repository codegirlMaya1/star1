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