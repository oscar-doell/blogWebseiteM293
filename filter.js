document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const showAllButton = document.getElementById('show-all-btn');
    const articles = document.querySelectorAll('article');
  
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const category = this.dataset.category;
  
        articles.forEach(function(article) {
          if (article.classList.contains(category) || category === 'all') {
            article.style.display = 'block';
          } else {
            article.style.display = 'none';
          }
        });
      });
    });
  
    showAllButton.addEventListener('click', function() {
      articles.forEach(function(article) {
        article.style.display = 'block';
      });
    });
  });