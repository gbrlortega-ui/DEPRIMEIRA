export type Specialty = 'Clinica' | 'Cirurgia' | 'Pediatria' | 'GO' | 'Preventiva';

export interface Question {
  id: string;
  institution: string;
  year: number;
  specialty: Specialty;
  text: string;
  options: string[];
  correctAnswer: number | null;
  explanation: string;
}

export interface SummaryModule {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  icon: string;
  color: string;
}

export interface Testimonial {
  name: string;
  text: string;
  avatar: string;
}

export interface EbookSalesContent {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  topicsCount: number | string;
  description: string;
  syllabus: string[];
  benefits: string[];
  oldPrice: string;
  newPrice: string;
  discount: string;
  hotmartLink?: string;
  isAvailable: boolean;
}