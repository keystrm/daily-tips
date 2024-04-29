---
title: 'Type safe switch case in ts'
author: 'Kasun Madushan'
category: 'Tech'
publishedAt: '29-04-2024'
---


## Type safe switch-case

You have to define types for the specify case

```JS

type TimeUnit = 'year' | 'quarter' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

const getValuesForTimeDifference = (
  timeDifference: number,
  unit: 'best fit' | TimeUnit
): { value: number, unit: TimeUnit } => {
  switch (unit) {
    case 'year':
      return { value: timeDifference / (1000 * 60 * 60 * 24 * 365), unit: 'year' };
    case 'quarter':
      return { value: timeDifference / (1000 * 60 * 60 * 24 * 91.25), unit: 'quarter' };
    case 'month':
      return { value: timeDifference / (1000 * 60 * 60 * 24 * 30.44), unit: 'month' };
    case 'week':
      return { value: timeDifference / (1000 * 60 * 60 * 24 * 7), unit: 'week' };
    case 'day':
      return { value: timeDifference / (1000 * 60 * 60 * 24), unit: 'day' };
    case 'hour':
      return { value: timeDifference / (1000 * 60 * 60), unit: 'hour' };
    case 'minute':
      return { value: timeDifference / (1000 * 60), unit: 'minute' };
    case 'second':
      return { value: timeDifference / 1000, unit: 'second' };
    case 'best fit':
      let bestUnit: TimeUnit = findBestFitUnit(timeDifference); // Ensure findBestFitUnit returns a TimeUnit
      return getValuesForTimeDifference(timeDifference, bestUnit);
  }
};

```
