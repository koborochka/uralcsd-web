import { DayScheduleUI } from '@components/ui/AfishaPage/DaySchedule';
import { DayScheduleProps } from '@components/ui/AfishaPage/DaySchedule/type';
import React from 'react';

export const DaySchedule: React.FC<DayScheduleProps> = ({ performances }) => {
    return <DayScheduleUI performances={performances} />;
};
