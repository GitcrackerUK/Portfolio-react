import React,{ useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';
import Calendar from 'react-calendar';

import SaveIcon from '@mui/icons-material/Save';

import moment from 'moment';
import { isSameDay } from 'date-fns';

const CalendarWrapper = styled.div``;

const YearCalendarWrapper = styled.div`
  width: 90%;
  margin: 0px 50px 50px 50px;
  display: flex;
  flex-wrap: wrap;
`;

const ControlsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
`;
const ButtonsWrapper = styled.div`
  width: 200px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

function RotaEdit({Edit}) {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDayClick = (value) => {
    setSelectedDates((prevState) => {
      const isDateSelected = prevState.some((date) => isSameDay(date, value));

      if (isDateSelected) {
        return prevState.filter((prevItem) => !isSameDay(prevItem, value));
      } else {
        return [...prevState, value];
      }
    });
  };

  const isSelected = (date) => {
    return selectedDates.some((selectedDate) => isSameDay(selectedDate, date));
  };

  const returnYear = () => {
    let calendar = [];
    function returnTaxYear(year){
      // This function needs return dates between 1st of April of the year and 31 of March next year.
      // Create array with 9 months of the year and 3 months of +1 year
      
      let taxYear = []
    }
    for (let i = 0; i < 12; i++) {
      const firstDayOfMonth = moment()
        .startOf('year')
        .add(i, 'months')
        .toDate();
      calendar.push(
        <Calendar
          value={firstDayOfMonth}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          calendarType='iso8601'
          key={i}
          onClickDay={ handleDayClick}
          tileClassName={({ date, view }) =>
            view === 'month' && isSelected(date)
              ? 'highlight react-calendar__tile--active'
              : null
          }
        />
      );
    }
    return calendar;
  };
  return (
    <CalendarWrapper>
      <ControlsWrapper>
        <ButtonsWrapper>
          <Button variant='outlined' onClick={Edit} endIcon={<SaveIcon />}>
            Save
          </Button>
        </ButtonsWrapper>
      </ControlsWrapper>
      <YearCalendarWrapper>{returnYear()}</YearCalendarWrapper>
    </CalendarWrapper>
  );
}

export default RotaEdit;
