document.getElementById('payButton').addEventListener('click', function () {
    // You can perform additional client-side actions here before sending the payment request
    // For simplicity, this example assumes the payment is always successful
    verifyPayment();
});

function verifyPayment() {
    // Send an AJAX request to the backend for payment verification
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'verify_payment.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            
            if (response.status === 'success') {
                alert('Payment successful!');
            } else {
                alert('Payment failed. Please try again.');
            }
        }
    };
    
    // You may need to send additional data depending on your backend logic
    xhr.send('transaction_id=12345678');
}
