export default interface PortfolioBlogPost {
  // Nuxt Content fields
  slug?: string;
  createdAt: Date|string;
  updatedAt?: Date;
  // Custom fields defined pre-render
  readingTime: number;
  // Custom Fields defined in markdown
  customSlug: string;
  title: string;
  subtitle?: string;
  description: string;
  gradientStartColour: string;
  gradientEndColour: string;
  categories?: PortfolioBlogPost[];
}
