export default interface PortfolioBlogPost {
  // Nuxt Content fields
  slug?: string;
  createdAt: Date;
  updatedAt?: Date;
  // Custom fields defined pre-render
  readingTime: number;
  // Custom Fields defined in markdown
  title: string;
  subtitle?: string;
  description: string;
  gradientStartColour: string;
  gradientEndColour: string;
}
