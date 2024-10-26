// seeders/XXXXXXXXXXXXXX-sample-bookstore-data.js
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('BookStores', [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publishedDate: new Date('1925-04-10'),
        numberOfPages: 180,
    
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedDate: new Date('1960-07-11'),
        numberOfPages: 281,
     
      },
      {
        title: '1984',
        author: 'George Orwell',
        publishedDate: new Date('1949-06-08'),
        numberOfPages: 328,
   
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('BookStores', null, {});
  }
};
