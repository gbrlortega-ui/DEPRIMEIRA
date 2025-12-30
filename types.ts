
export type Specialty = 'Clinica' | 'Cirurgia' | 'Pediatria' | 'GO' | 'Preventiva';

export interface Question {
  id: string;
  institution: string;
  year: number;
  specialty: Specialty;
  text: string;
  options: string[];
  correctAnswer: number;
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
