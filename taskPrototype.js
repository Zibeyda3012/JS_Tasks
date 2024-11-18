function borrow() {
  if (this.isAvailable) {
    this.isAvailable = false;
    console.log(`${this.title} is borrowed`);
  } 

  else
  {
    console.log(`${this.title} is not available.`)
  }
}

function returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} is returned`);
}

function info() {
    console.log(`Title: ${this.title} \nAuthor: ${this.author} \nAvailable: ${this.isAvailable}`)
}

const book1 = {
  title: "War and Peace",
  author: "Leo Tolstoy",
  isAvailable: true,
};
const book2 = {
  title: "Oliver Twist",
  author: "Charles Dickens",
  isAvailable: true,
};
const book3 = {
  title: "Vyana Gecesinin Sirri",
  author: "Chingiz Abdullayev",
  isAvailable: true,
};


info.call(book1);
borrow.call(book1);
borrow.call(book1);
info.call(book1);
