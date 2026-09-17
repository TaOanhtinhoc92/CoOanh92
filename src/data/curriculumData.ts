import { Lesson, LessonPeriod } from '../types';
import { PART_1_LESSONS } from './part1Data';
import { PART_1_LESSONS_PART2 } from './part1Data2';
import { PART_2_LESSONS } from './part2Data';
import { PART_2_LESSONS_PART2 } from './part2Data2';

export const ALL_LESSONS: Lesson[] = [
  ...PART_1_LESSONS,
  ...PART_1_LESSONS_PART2,
  ...PART_2_LESSONS,
  ...PART_2_LESSONS_PART2
];

export function getAllLessons(): Lesson[] {
  return ALL_LESSONS;
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === lessonId);
}

export function getAllPeriods(): LessonPeriod[] {
  const periods: LessonPeriod[] = [];
  for (const lesson of ALL_LESSONS) {
    periods.push(...lesson.periods);
  }
  return periods.sort((a, b) => a.periodNumber - b.periodNumber);
}

export function getPeriodById(periodId: string): { period: LessonPeriod; lesson: Lesson } | undefined {
  for (const lesson of ALL_LESSONS) {
    const period = lesson.periods.find((p) => p.id === periodId);
    if (period) {
      return { period, lesson };
    }
  }
  return undefined;
}

export function getPeriodByNumber(num: number): { period: LessonPeriod; lesson: Lesson } | undefined {
  for (const lesson of ALL_LESSONS) {
    const period = lesson.periods.find((p) => p.id === `tiet-${num}` || p.periodNumber === num);
    if (period) {
      return { period, lesson };
    }
  }
  return undefined;
}

export function getCurriculumStats() {
  const allPeriods = getAllPeriods();
  return {
    totalLessons: ALL_LESSONS.filter((l) => !l.isEvaluation).length,
    totalEvaluationUnits: ALL_LESSONS.filter((l) => l.isEvaluation).length,
    totalPeriods: allPeriods.length,
    part1PeriodsCount: allPeriods.filter((p) => p.periodNumber <= 21).length,
    part2PeriodsCount: allPeriods.filter((p) => p.periodNumber >= 22).length
  };
}
