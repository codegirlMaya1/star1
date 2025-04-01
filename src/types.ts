export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error?: boolean;
    placeholder?: string;
}

export interface TestimonialProps {
    username: string;
    content: string;
    rating: number;
    userImage: string;
  }
  
  export interface StarRatingProps {
    rating: number;
    showEmpty?: boolean;
  }

  export interface Review {
    username: string;
    rating: number;
    content: string;
    avatarUrl: string;
  }
  
  export interface VideoReview extends Review {
    videoThumbnail: string;
    videoPlayIcon: string;
  }
  export interface NavigationItem {
    label: string;
    href: string;
  }
  
  export interface MediaItem {
    url: string;
    altText: string;
  }
  
  export interface UploadPreview {
    imageUrl: string;
    description: string;
  }
  export interface UploadPreview {
    imageUrl: string;
    description: string;
  }
  
  export interface MediaItem {
    url: string;
    altText: string;
  }
  