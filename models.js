function bookItem(modelName, price) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {
        id: new Date().getTime(),
        name: '',
        email: '',
        contact: ''
    };

    let bookedItems = JSON.parse(localStorage.getItem('bookedModels')) || [];

    bookedItems.push({ userId: currentUser.id, name: modelName, price: price });

    localStorage.setItem('bookedModels', JSON.stringify(bookedItems));

    alert(`Model "${modelName}" has been booked!`);

    window.location.href = 'booked.html';
}