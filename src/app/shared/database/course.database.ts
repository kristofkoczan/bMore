import { Course } from '../../shared/models/course.model';

export const COURSES: Course[] = [
    {
      id: 'C0F2E2',
      title: 'Coffee Basic Course',
      description: 'A basic course to learn about coffee.',
      lessonNumber: 6,
      available: true,
    },
    {
      id: 'PH010GR4PH',
      title: 'Photography Basic Course',
      description: 'A basic course to learn about photography.',
      lessonNumber: 0,
      available: false,
    },
    {
      id: 'TH1NK',
      title: 'Logic Basic Course',
      description: 'A basic course to learn about logical thinking.',
      lessonNumber: 0,
      available: false,
    },
    {
      id: 'C0F2E2-M',
      title: 'Coffee Master Course',
      description: 'A master course to learn about coffee.',
      lessonNumber: 0,
      available: false,
    },
  ];