document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.course-item').forEach(item => {
      item.addEventListener('click', () => {
        let courseId = item.getAttribute('data-id');
        RenderCourseDetailPage(courseId);
      });
    });
});

function RenderCourseDetailPage(courseId) {
  // Przykład danych kursu (można dodać faktyczne dane)
  let courseDetails = {
    1: {
      title: "Introduction to HTML & CSS",
      description: "This course provides a comprehensive introduction to HTML and CSS, essential for web development. Learn how to build responsive websites from scratch.",
      price: "$49.99"
    },
    2: {
      title: "JavaScript Basics",
      description: "Learn the fundamentals of JavaScript, the most popular programming language for web development.",
      price: "$59.99"
    },
    3: {
      title: "Advanced React",
      description: "Deepen your knowledge of React and build scalable, interactive web applications.",
      price: "$89.99"
    },
    4: {
      title: "Node.js for Beginners",
      description: "Learn to create backend applications using Node.js, express, and MongoDB.",
      price: "$79.99"
    }
  };

  let course = courseDetails[courseId];
  
  document.querySelector('main').innerHTML = `
    <h1 class="text-center title">${course.title}</h1>
    <p class="text-center">${course.description}</p>
    <h3 class="text-center mt-4">Price: ${course.price}</h3>
    <div class="d-flex justify-content-center mt-4">
      <button class="btn btn-success" id="buy-button">Buy Now</button>
    </div>
  `;

  document.querySelector('#buy-button').addEventListener('click', () => {
    alert('Course has been added to your cart. Proceed to checkout!');
  });
}
