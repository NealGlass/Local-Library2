//YOUR SOLUTION HERE
// Hint: You can use the [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method here. 

function findAccountById(accounts, id) {
let account = accounts.filter(account => account.id === id); //within accounts, find the account with the matching id
return account;
}
  

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 

let sortedAccounts = accounts.sort((account1, account2) => {
    return account1.name.last.toLowerCase() < account2.name.last.toLowerCase() ? -1 : 1;  // using tertiary operator to compare account1.last name to account2.last name, if acc1 < acct2, return -1, else return 1
})
return sortedAccounts;
}

function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
  
let fullAccountNames = accounts.map(account => {
    return `${account.name.first} ${account.name.last}`;
})
return fullAccountNames;
}



// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
