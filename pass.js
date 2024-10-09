function generatePassword() {
    const length = document.getElementById('length').value;

    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

    // Ensure password has at least one character from each category
    let password = [
        lowercase[Math.floor(Math.random() * lowercase.length)],
        uppercase[Math.floor(Math.random() * uppercase.length)],
        digits[Math.floor(Math.random() * digits.length)],
        specialChars[Math.floor(Math.random() * specialChars.length)]
    ];

    // Fill the rest of the password length with random characters
    const allChars = lowercase + uppercase + digits + specialChars;
    for (let i = 4; i < length; i++) {
        password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    // Shuffle the password
    password = password.sort(() => Math.random() - 0.5);

    // Display the password
    const generatedPassword = password.join('');
    document.getElementById('passwordOutput').value = generatedPassword;
}
