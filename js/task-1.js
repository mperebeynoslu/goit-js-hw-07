const categoriesList = document.querySelectorAll('ul#categories li.item');
console.log('Кількість категорій: ', categoriesList.length);

categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Number of items: ${categoryItems}`);
});