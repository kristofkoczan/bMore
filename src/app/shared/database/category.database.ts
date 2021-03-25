import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
    {
        title: 'Home',
        icon: 'home',
        value: 'home',
        disabled: false,
    },
    {
        title: 'About me',
        icon: 'person',
        value: 'about',
        disabled: false,
    },
    {
        title: 'Courses',
        icon: 'book',
        value: 'courses',
        disabled: false,
    },
    {
        title: 'Coffee',
        icon: 'coffee',
        value: 'coffee',
        disabled: true,
    },
    {
        title: 'Photography',
        icon: 'camera',
        value: 'photography',
        disabled: true,
    },
];
