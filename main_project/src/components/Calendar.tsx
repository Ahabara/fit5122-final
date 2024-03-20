
//     // Function to generate the calendar for a specific month and year
//     function generateCalendar(year, month) {
//     const calendarElement = document.getElementById('calendar');
//     const currentMonthElement = document.getElementById('currentMonth');
//
//     // Create a date object for the first day of the specified month
//     const firstDayOfMonth = new Date(year, month, 1);
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//
//     // Clear the calendar
//     calendarElement.innerHTML = '';
//
//     // Set the current month text
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     currentMonthElement.innerText = `${monthNames[month]} ${year}`;
//
//     // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
//     const firstDayOfWeek = firstDayOfMonth.getDay();
//
//     // Create headers for the days of the week
//     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     daysOfWeek.forEach(day => {
//     const dayElement = document.createElement('div');
//     dayElement.className = 'text-center font-semibold';
//     dayElement.innerText = day;
//     calendarElement.appendChild(dayElement);
// });
//
//     // Create empty boxes for days before the first day of the month
//     for (let i = 0; i < firstDayOfWeek; i++) {
//     const emptyDayElement = document.createElement('div');
//     calendarElement.appendChild(emptyDayElement);
// }
//
//     // Create boxes for each day of the month
//     for (let day = 1; day <= daysInMonth; day++) {
//     const dayElement = document.createElement('div');
//     dayElement.className = 'text-center py-2 border cursor-pointer';
//     dayElement.innerText = day;
//
//     // Check if this date is the current date
//     const currentDate = new Date();
//     if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
//     dayElement.classList.add('bg-blue-500', 'text-white'); // Add classes for the indicator
// }
//
//     calendarElement.appendChild(dayElement);
// }
// }
//
//     // Initialize the calendar with the current month and year
//     const currentDate = new Date();
//     let currentYear = currentDate.getFullYear();
//     let currentMonth = currentDate.getMonth();
//     generateCalendar(currentYear, currentMonth);
//
//     // Event listeners for previous and next month buttons
//     document.getElementById('prevMonth').addEventListener('click', () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//     currentMonth = 11;
//     currentYear--;
// }
//     generateCalendar(currentYear, currentMonth);
// });
//
//     document.getElementById('nextMonth').addEventListener('click', () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//     currentMonth = 0;
//     currentYear++;
// }
//     generateCalendar(currentYear, currentMonth);
// });
//
//     // Function to show the modal with the selected date
//     function showModal(selectedDate) {
//     const modal = document.getElementById('myModal');
//     const modalDateElement = document.getElementById('modalDate');
//     modalDateElement.innerText = selectedDate;
//     modal.classList.remove('hidden');
// }
//
//     // Function to hide the modal
//     function hideModal() {
//     const modal = document.getElementById('myModal');
//     modal.classList.add('hidden');
// }
//
//     // Event listener for date click events
//     const dayElements = document.querySelectorAll('.cursor-pointer');
//     dayElements.forEach(dayElement => {
//     dayElement.addEventListener('click', () => {
//         const day = parseInt(dayElement.innerText);
//         const selectedDate = new Date(currentYear, currentMonth, day);
//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         const formattedDate = selectedDate.toLocaleDateString(undefined, options);
//         showModal(formattedDate);
//     });
// });
//
//     // Event listener for closing the modal
//     document.getElementById('closeModal').addEventListener('click', () => {
//     hideModal();
// });

const Calendar = () => {
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
                            <button id="prevMonth" className="text-white">Previous</button>
                            <h2 id="currentMonth" className="text-white"></h2>
                            <button id="nextMonth" className="text-white">Next</button>
                        </div>
                        <div className="grid grid-cols-7 gap-2 p-4" id="calendar">
                        </div>
                        <div id="myModal" className="modal hidden fixed inset-0 flex items-center justify-center z-50">
                            <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

                            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                <div className="modal-content py-4 text-left px-6">
                                    <div className="flex justify-between items-center pb-3">
                                        <p className="text-2xl font-bold">Selected Date</p>
                                        <button id="closeModal" className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring">✕</button>
                                    </div>
                                    <div id="modalDate" className="text-xl font-semibold"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;