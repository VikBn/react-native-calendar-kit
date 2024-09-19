import { WeekdayNumbers } from 'luxon';
import React, { FC, PropsWithChildren } from 'react';
import Animated, { AnimatedRef, SharedValue } from 'react-native-reanimated';
import { CalendarListViewHandle } from '../components/CalendarListView';
import { ScrollType } from '../constants';
import { DataByMode } from '../utils/utils';

export interface CalendarContextProps {
  calendarData: DataByMode;
  calendarLayout: { width: number; height: number };
  visibleDateUnix: React.MutableRefObject<number>;
  hourWidth: number;
  numberOfDays: number;
  verticalListRef: AnimatedRef<Animated.ScrollView>;
  dayBarListRef: AnimatedRef<Animated.ScrollView>;
  gridListRef: AnimatedRef<Animated.ScrollView>;
  columnWidthAnim: SharedValue<number>;
  firstDay: WeekdayNumbers;
  scrollType: React.MutableRefObject<ScrollType | null>;
  offsetY: SharedValue<number>;
  minuteHeight: Readonly<SharedValue<number>>;
  maxTimelineHeight: number;
  maxTimeIntervalHeight: number;
  minTimeIntervalHeight: number;
  timeIntervalHeight: SharedValue<number>;
  allowPinchToZoom: boolean;
  spaceFromTop: number;
  spaceFromBottom: number;
  hours: number[];
  timelineHeight: Readonly<SharedValue<number>>;
  totalSlots: number;
  start: number;
  end: number;
  timeInterval: number;
  scrollVisibleHeight: React.MutableRefObject<number>;
  offsetX: SharedValue<number>;
  isTriggerMomentum: React.MutableRefObject<boolean>;
  showWeekNumber: boolean;
  calendarGridWidth: number;
  columnWidth: number;
  scrollByDay: boolean;
  initialOffset: number;
  isRTL: boolean;
  snapToInterval?: number;
  columns: number;
  triggerDateChanged: React.MutableRefObject<number | undefined>;
  visibleDateUnixAnim: SharedValue<number>;
  visibleWeeks: SharedValue<number[]>;
  calendarListRef: React.RefObject<CalendarListViewHandle>;
  startOffset: Readonly<SharedValue<number>>;
  scrollVisibleHeightAnim: SharedValue<number>;
  pagesPerSide: number;
  hideWeekDays: WeekdayNumbers[];
  useAllDayEvent: boolean;
}

export const CalendarContext = React.createContext<
  CalendarContextProps | undefined
>(undefined);

const CalendarProvider: FC<
  PropsWithChildren<{ value: CalendarContextProps }>
> = ({ value, children }) => {
  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;

export const useCalendar = () => {
  const context = React.useContext(CalendarContext);
  if (context === undefined) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};
