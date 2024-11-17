// Add this script to handle the flip interaction and iCal generation
document.addEventListener('DOMContentLoaded', () => {
    const flipCard = document.querySelector('.flip-card');
    const flipTriggers = document.querySelectorAll('.flip-trigger');
    
    flipTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            flipCard.classList.toggle('is-flipped');
        });
    });

    // Handle iCal download
    const icalButton = document.querySelector('.calendar-button.ical');
    icalButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        const icalContent = 
`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20250621
DTEND:20250622
SUMMARY:Wesele - Oliwia i Paweł
LOCATION:Dwór w Tomaszowicach, Krakowska 68, 32-085 Tomaszowice
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'wedding.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    });
});