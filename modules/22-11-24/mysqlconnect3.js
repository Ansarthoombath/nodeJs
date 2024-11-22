const mysql = require('mysql2');
const read = require('readline-sync');

// Database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db1'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1); // Exit if the connection fails
    } else {
        console.log('Connected successfully.');
        menu(); // Start the menu
    }
});

// Insert data
const insertData = (callback) => {
    const name = read.question('Enter name: ');
    const age = Number(read.question('Enter age: '));
    const place = read.question('Enter place: ');

    const sql = 'INSERT INTO students (name, age, place) VALUES (?, ?, ?)';
    connection.query(sql, [name, age, place], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err.message);
        } else {
            console.log('Data inserted successfully. Insert ID:', result.insertId);
        }
        callback(); // Return to menu
    });
};

// Read data
const readData = (callback) => {
    const sql = 'SELECT * FROM students';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error reading data:', err.message);
        } else {
            if (results.length > 0) {
                console.table(results); // Display results in a table format
            } else {
                console.log('No data found in the table.');
            }
        }
        callback(); // Return to menu
    });
};

// Delete data
const deleteData = (callback) => {
    const name = read.question('Enter name of the student to delete: ');

    const sql = 'DELETE FROM students WHERE name = ?';
    connection.query(sql, [name], (err, result) => {
        if (err) {
            console.error('Error deleting data:', err.message);
        } else if (result.affectedRows === 0) {
            console.log('No records found to delete.');
        } else {
            console.log('Data deleted successfully.');
        }
        callback(); // Return to menu
    });
};

// Update data
const updateData = (callback) => {
    const oldName = read.question('Enter the current name of the student: ');
    const newName = read.question('Enter the new name: ');

    const sql = 'UPDATE students SET name = ? WHERE name = ?';
    connection.query(sql, [newName, oldName], (err, result) => {
        if (err) {
            console.error('Error updating data:', err.message);
        } else if (result.affectedRows === 0) {
            console.log('No records found to update.');
        } else {
            console.log('Data updated successfully.');
        }
        callback(); // Return to menu
    });
};

// Menu loop
const menu = () => {
    console.log('\n--- Menu ---');
    console.log('1. Insert Data');
    console.log('2. Read Data');
    console.log('3. Update Data');
    console.log('4. Delete Data');
    console.log('5. Exit');

    const choice = Number(read.question('Enter your choice: '));

    switch (choice) {
        case 1:
            insertData(menu); // Pass menu as callback
            break;
        case 2:
            readData(menu); // Pass menu as callback
            break;
        case 3:
            updateData(menu); // Pass menu as callback
            break;
        case 4:
            deleteData(menu); // Pass menu as callback
            break;
        case 5:
            console.log('Exiting program.');
            connection.end((err) => {
                if (err) console.error('Error closing connection:', err.message);
            });
            break;
        default:
            console.log('Invalid choice. Please try again.');
            menu(); // Call menu again for invalid choice
    }
};


