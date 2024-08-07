const bookedItems = JSON.parse(localStorage.getItem('bookedModels')) || [];
const bookedItemsDiv = document.getElementById('bookedItems');

bookedItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('booked-item');

    itemDiv.innerHTML = `
        <p><strong>User:</strong> ${item.userId}</p>
        <p><strong>Model:</strong> ${item.name}</p>
        <p><strong>Price:</strong> $${item.price}</p>
        <button class="delete-btn" onclick="deleteItem('${item.name}', ${item.price}, ${item.userId})">Delete</button>
    `;

    bookedItemsDiv.appendChild(itemDiv);
});

function deleteItem(modelName, price, userId) {
    let bookedItems = JSON.parse(localStorage.getItem('bookedModels')) || [];

    bookedItems = bookedItems.filter(item => !(item.name === modelName && item.price === price && item.userId === userId));

    localStorage.setItem('bookedModels', JSON.stringify(bookedItems));

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(users));

    window.location.reload();
}