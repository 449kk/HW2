document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contactButton');
    const formattedPhoneNumber = document.getElementById('formattedPhoneNumber');

    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = phoneNumber.replace(/\D/g, '');
        const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

        if (match) {
            const [, , areaCode, firstPart, secondPart] = match;
            return `(${areaCode}) ${firstPart}-${secondPart}`;
        }

        return phoneNumber;
    };

    contactButton.addEventListener('click', () => {
        const unformattedNumber = '1234567890';
        const formatted = formatPhoneNumber(unformattedNumber);
        formattedPhoneNumber.textContent = `Formatted Phone Number: ${formatted}`;
    });
});
