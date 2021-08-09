import "../ExerciseFacilitiesForm/ExerciseFacilitiesForm.css";

const OpeningHoursForm = () => {
  const openingTimes = [
    {
      dayIndex: 1,
      dayName: "Sunday",
      dayShort: "Sun",
      startTime: "00:00",
      endTime: "00:00",
    },
    {
      dayIndex: 2,
      dayName: "Monday",
      dayShort: "Mon",
      startTime: "00:00",
      endTime: "00:00",
    },
    {
      dayIndex: 3,
      dayName: "Tuesday",
      dayShort: "Tue",
      startTime: "00:00",
      endTime: "00:00",
    },
    {
      dayIndex: 4,
      dayName: "Wednesday",
      dayShort: "Wed",
      startTime: "00:00",
      endTime: "00:00",
    },
    {
      dayIndex: 5,
      dayName: "Thursday",
      dayShort: "Thu",
      startTime: "00:00",
      endTime: "00:00",
    },
    {
      dayIndex: 6,
      dayName: "Friday",
      dayShort: "Fri",
      startTime: "00:00",
      endTime: "00:00",
    },
    {
      dayIndex: 7,
      dayName: "Saturday",
      dayShort: "Sat",
      startTime: "00:00",
      endTime: "00:00",
    },
  ];

  return (
    <div className="opening-hours-grid">
      {openingTimes.map((day) => {
        return (
          <div className="opening-hours-container">
            <div className="opening-hours-items" key={day.dayIndex}>
              <label>{day.dayShort}</label>
              <select name="from" id="from">
                <option value="06:00">6:00 AM</option>{" "}
                <option value="06:30">6:30 AM</option>{" "}
                <option value="07:00">7:00 AM</option>{" "}
                <option value="07:30">7:30 AM</option>{" "}
                <option value="08:00">8:00 AM</option>{" "}
                <option value="08:30">8:30 AM</option>{" "}
                <option value="09:00" selected>
                  9:00 AM
                </option>{" "}
                <option value="09:30">9:30 AM</option>{" "}
                <option value="10:00">10:00 AM</option>{" "}
                <option value="10:30">10:30 AM</option>{" "}
                <option value="11:00">11:00 AM</option>{" "}
                <option value="11:30">11:30 AM</option>{" "}
                <option value="12:00">12:00 PM</option>{" "}
                <option value="12:30">12:30 PM</option>{" "}
                <option value="13:00">1:00 PM</option>{" "}
                <option value="13:30">1:30 PM</option>{" "}
                <option value="14:00">2:00 PM</option>{" "}
                <option value="14:30">2:30 PM</option>{" "}
                <option value="15:00">3:00 PM</option>{" "}
                <option value="15:30">3:30 PM</option>{" "}
                <option value="16:00">4:00 PM</option>{" "}
                <option value="16:30">4:30 PM</option>{" "}
                <option value="17:00">5:00 PM</option>{" "}
                <option value="17:30">5:30 PM</option>{" "}
                <option value="18:00">6:00 PM</option>{" "}
                <option value="18:30">6:30 PM</option>{" "}
                <option value="19:00">7:00 PM</option>{" "}
                <option value="19:30">7:30 PM</option>{" "}
                <option value="20:00">8:00 PM</option>{" "}
                <option value="20:30">8:30 PM</option>{" "}
                <option value="21:00">9:00 PM</option>{" "}
                <option value="21:30">9:30 PM</option>{" "}
                <option value="22:00">10:00 PM</option>
              </select>
              <label>to</label>
              <select name="to" id="to">
                <option value="06:00">6:00 AM</option>{" "}
                <option value="06:30">6:30 AM</option>{" "}
                <option value="07:00">7:00 AM</option>{" "}
                <option value="07:30">7:30 AM</option>{" "}
                <option value="08:00">8:00 AM</option>{" "}
                <option value="08:30">8:30 AM</option>{" "}
                <option value="09:00">9:00 AM</option>{" "}
                <option value="09:30">9:30 AM</option>{" "}
                <option value="10:00">10:00 AM</option>{" "}
                <option value="10:30">10:30 AM</option>{" "}
                <option value="11:00">11:00 AM</option>{" "}
                <option value="11:30">11:30 AM</option>{" "}
                <option value="12:00">12:00 PM</option>{" "}
                <option value="12:30">12:30 PM</option>{" "}
                <option value="13:00">1:00 PM</option>{" "}
                <option value="13:30">1:30 PM</option>{" "}
                <option value="14:00">2:00 PM</option>{" "}
                <option value="14:30">2:30 PM</option>{" "}
                <option value="15:00">3:00 PM</option>{" "}
                <option value="15:30">3:30 PM</option>{" "}
                <option value="16:00">4:00 PM</option>{" "}
                <option value="16:30">4:30 PM</option>{" "}
                <option value="17:00" selected>
                  5:00 PM
                </option>{" "}
                <option value="17:30">5:30 PM</option>{" "}
                <option value="18:00">6:00 PM</option>{" "}
                <option value="18:30">6:30 PM</option>{" "}
                <option value="19:00">7:00 PM</option>{" "}
                <option value="19:30">7:30 PM</option>{" "}
                <option value="20:00">8:00 PM</option>{" "}
                <option value="20:30">8:30 PM</option>{" "}
                <option value="21:00">9:00 PM</option>{" "}
                <option value="21:30">9:30 PM</option>{" "}
                <option value="22:00">10:00 PM</option>
              </select>
              <input
                className="checkbox-item"
                type="checkbox"
                name="closed"
                value="closed"
              />
              <font size="-1" />
              <span className="closed-label">Closed</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OpeningHoursForm;
