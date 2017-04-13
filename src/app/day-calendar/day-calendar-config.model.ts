import {ICalendar} from '../common/models/calendar.model';
import {WeekDays} from '../common/types/week-days.type';
import {Moment} from 'moment';

export interface IDayCalendarConfig extends ICalendar {
  isDisabledCallback?: (date: Moment) => boolean;
  weekdayNames?: {[key: string]: string};
  showNearMonthDays?: boolean;
  showWeekNumbers?: boolean;
  firstDayOfWeek?: WeekDays;
  format?: string;
  allowMultiSelect?: boolean;
  monthFormat?: string;
  monthFormatter?: (month: Moment) => string;
  enableMonthSelector?: boolean;
  yearFormat?: string;
  yearFormatter?: (year: Moment) => string;
}