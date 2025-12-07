import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import '../../../styles/components/Calculator.css';

const Calendar = ({ selectedDate, selectedTime, onDateSelect, onTimeSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Helpers
    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
        const newDate = new Date(currentMonth);
        newDate.setMonth(newDate.getMonth() - 1);

        // Don't allow going back past current month
        const today = new Date();
        if (newDate.getMonth() < today.getMonth() && newDate.getFullYear() === today.getFullYear()) return;

        setCurrentMonth(newDate);
    };

    const handleNextMonth = () => {
        const newDate = new Date(currentMonth);
        newDate.setMonth(newDate.getMonth() + 1);
        setCurrentMonth(newDate);
    };

    const generateCalendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);

        const days = [];
        // Empty slots
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            // Compare dates basically
            const isSelected = selectedDate && new Date(selectedDate).toDateString() === date.toDateString();
            const isPast = date < today;

            days.push(
                <button
                    key={day}
                    disabled={isPast}
                    onClick={() => onDateSelect(date)}
                    className={`cal-day-btn ${isSelected ? 'selected' : ''}`}
                >
                    {day}
                </button>
            );
        }
        return days;
    };

    const timeSlots = [
        "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    return (
        <div className="cal-wrapper">
            <h3 className="calc-label" style={{ fontSize: '1.1rem', marginBottom: '0', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Clock size={20} className="text-teal-600" style={{ color: '#0d9488' }} />
                Selecciona Fecha y Hora
            </h3>

            <div className="flex flex-col md:flex-row gap-8" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {/* Date Picker */}
                <div style={{ flex: 1 }}>
                    <div className="cal-header">
                        <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded-full"><ChevronLeft size={20} /></button>
                        <span className="font-medium text-gray-900">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                        <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded-full"><ChevronRight size={20} /></button>
                    </div>

                    <div className="cal-grid" style={{ marginBottom: '8px' }}>
                        {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map((d, i) => (
                            <div key={i} className="cal-day-header">{d}</div>
                        ))}
                    </div>
                    <div className="cal-grid">
                        {generateCalendarDays()}
                    </div>
                </div>

                {/* Time Slots */}
                <div style={{ minWidth: '150px' }}>
                    <h4 className="calc-step-label" style={{ marginBottom: '1rem' }}>Disponibilidad</h4>
                    {!selectedDate ? (
                        <div className="text-sm text-gray-400 italic">Selecciona una fecha</div>
                    ) : (
                        <div className="cal-time-grid">
                            {timeSlots.map((time) => (
                                <button
                                    key={time}
                                    onClick={() => onTimeSelect(time)}
                                    className={`cal-time-btn ${selectedTime === time ? 'selected' : ''}`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
