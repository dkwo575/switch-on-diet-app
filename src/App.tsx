import { useState, useEffect } from 'react';
import { dietPlan } from './diet-plan';
import './App.css';

function App() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [now, setNow] = useState(new Date());
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Clear all checkboxes when the date changes
    setCheckedItems({});
  }, [currentDate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    // Adjust for timezone offset to prevent date from changing
    const timezoneOffset = date.getTimezoneOffset() * 60000;
    setStartDate(new Date(date.getTime() + timezoneOffset));
    setCurrentDate(new Date(date.getTime() + timezoneOffset));
  };

  const handleCheckboxChange = (item: string) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const goToPreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const goToNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const renderDietPlan = () => {
    if (!startDate) {
      return <p className='text-center'>Please select a start date for your diet plan.</p>;
    }

    const dayOfDiet = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1;
    const week = Math.ceil(dayOfDiet / 7);
    const dayOfWeek = dayOfDiet > 0 ? ((dayOfDiet - 1) % 7) + 1 : 1;

    if (week < 1 || week > dietPlan.length) {
      return <p className='text-center'>No diet plan available for this date.</p>;
    }

    const weeklyPlan = dietPlan[week - 1];
    const dailyPlan = weeklyPlan?.dailyPlans.find(p => p.day === dayOfWeek);

    if (!dailyPlan) {
      return <p className='text-center'>No diet plan available for this day.</p>;
    }

    return (
      <div className="card">
        <div className="card-header">
          <h2>Week {week}, Day {dayOfWeek}</h2>
          <p className='mb-0'>{currentDate.toDateString()}</p>
        </div>
        <div className="card-body">
          <h3 className="card-title">Daily Checklist</h3>
          <ul className="list-group mb-4">
            {weeklyPlan.checklist.map((item, index) => (
              <li key={index} className="list-group-item">
                <input
                  type="checkbox"
                  id={`checklist-${index}`}
                  checked={!!checkedItems[`checklist-${index}`]}
                  onChange={() => handleCheckboxChange(`checklist-${index}`)}
                  className="form-check-input me-2"
                />
                <label htmlFor={`checklist-${index}`}>{item}</label>
              </li>
            ))}
          </ul>

          <h3 className="card-title">Meal Plan</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <input
                      type="checkbox"
                      id="breakfast-check"
                      checked={!!checkedItems['breakfast']}
                      onChange={() => handleCheckboxChange('breakfast')}
                      className="form-check-input me-2"
                    />
                    <label htmlFor="breakfast-check">Breakfast</label>
                  </h5>
                  <p className="card-text">{dailyPlan.mealPlan.breakfast}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <input
                      type="checkbox"
                      id="lunch-check"
                      checked={!!checkedItems['lunch']}
                      onChange={() => handleCheckboxChange('lunch')}
                      className="form-check-input me-2"
                    />
                    <label htmlFor="lunch-check">Lunch</label>
                  </h5>
                  <p className="card-text">{dailyPlan.mealPlan.lunch}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <input
                      type="checkbox"
                      id="dinner-check"
                      checked={!!checkedItems['dinner']}
                      onChange={() => handleCheckboxChange('dinner')}
                      className="form-check-input me-2"
                    />
                    <label htmlFor="dinner-check">Dinner</label>
                  </h5>
                  <p className="card-text">{dailyPlan.mealPlan.dinner}</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="card-title mt-4">Allowed Foods for this Week</h3>
          <ul className="list-group">
            {weeklyPlan.allowedFoods.map((food, index) => (
              <li key={index} className="list-group-item">{food}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Switch On Diet</h1>
      <div className="card p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary" onClick={goToPreviousDay} disabled={!startDate}>&lt; Previous Day</button>
            <div className='text-center'>
                <p className="text-center mb-1">{now.toLocaleTimeString()}</p>
                <label htmlFor='start-date-picker'>Select Diet Start Date:</label>
                <input type="date" id='start-date-picker' onChange={handleDateChange} className="form-control" />
            </div>
            <button className="btn btn-primary" onClick={goToNextDay} disabled={!startDate}>Next Day &gt;</button>
        </div>
      </div>
      {renderDietPlan()}
    </div>
  );
}

export default App;