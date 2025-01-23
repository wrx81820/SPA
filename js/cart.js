document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.course-item').forEach(item => {
      item.addEventListener('click', () => {
        let courseId = item.getAttribute('data-id');
        addCourseToCart(courseId);
      });
    });
  });
  
  function addCourseToCart(courseId) {
    // Logika dodawania kursu do koszyka
    alert(`Course ID ${courseId} added to the cart.`);
  }
  