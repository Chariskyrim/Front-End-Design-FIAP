document.addEventListener('DOMContentLoaded', function () {
  const booksEndpoint = 'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json';
  const bookList = document.getElementById('book-list');

  fetch(booksEndpoint)
    .then(response => response.json())
    .then(books => {
      books.forEach(book => {
        const bookElement = document.createElement('div');

        bookElement.className = `
          bg-neutral-100 rounded-lg shadow-md p-4 transition-transform
          hover:shadow-lg hover:scale-105 duration-300
          flex flex-col items-center text-center
        `;

        bookElement.innerHTML = `
          <h3 class="text-xl font-semibold mb-2 text-blue-700">${book.titulo}</h3>
          <img src="${book.imagem}" alt="${book.titulo}" class="mb-3 rounded w-40 h-auto object-cover shadow">
          <p class="text-gray-700 text-sm">${book.resumo}</p>
        `;

        bookList.appendChild(bookElement);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar os livros:', error);
      bookList.innerHTML = `<p class="text-red-600">Erro ao carregar os livros. Tente novamente mais tarde.</p>`;
    });
});
