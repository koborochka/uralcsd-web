import { Performance } from 'types/performance';

export const mockPerformances: Performance[] = [
    {
        name: 'Спектакль 1',
        slug: 'spectacle-1',
        description: 'Описание спектакля 1...',
        cast: [{ name: 'Актер 1', role: 'Роль 1' }],
        crew: [{ name: 'Режиссер 1', role: 'Режиссер' }],
        image: '/img/mockImage.jpg',
        date: '5 февраля',
        age: 16,
        duration: '2 часа',
        isWithIntermission: true,
        isPremiere: true,
    },
    {
        name: 'Спектакль 2',
        slug: 'spectacle-2',
        description: 'Описание спектакля 2...',
        cast: [{ name: 'Актер 2', role: 'Роль 2' }],
        crew: [{ name: 'Режиссер 2', role: 'Режиссер' }],
        image: '/img/mockImage.jpg',
        date: '6 февраля',
        age: 12,
        duration: '1.5 часа',
        isWithIntermission: false,
        isPremiere: true,
    },
    {
        name: 'Спектакль 3',
        slug: 'spectacle-3',
        description: 'Описание спектакля 3...',
        cast: [{ name: 'Актер 3', role: 'Роль 3' }],
        crew: [{ name: 'Режиссер 3', role: 'Режиссер' }],
        image: '/img/mockImage.jpg',
        date: '5 февраля',
        age: 16,
        duration: '3 часа',
        isWithIntermission: true,
        isPremiere: false,
    },
    {
        name: 'Спектакль 4',
        slug: 'spectacle-4',
        description: 'Описание спектакля 4...',
        cast: [{ name: 'Актер 4', role: 'Роль 4' }],
        crew: [{ name: 'Режиссер 4', role: 'Режиссер' }],
        image: '/img/mockImage.jpg',
        date: '6 февраля',
        age: 12,
        duration: '1.5 часа',
        isWithIntermission: false,
        isPremiere: false,
    },
];
