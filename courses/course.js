 function searchCourses() {
      let input = document.getElementById('searchBox').value.toLowerCase();
      let cards = document.querySelectorAll('.course-item');
      let coursesRow = document.getElementById('coursesRow');

      cards.forEach(card => {
        let title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(input) && input !== "") {
          coursesRow.prepend(card); // Move matching card to top
        }
      });
    }