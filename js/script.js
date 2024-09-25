// Function to show sections
function showSection(section) {
    const donationSection = document.getElementById('donation-section');
    const historySection = document.getElementById('history-section');
    const donationBtn = document.getElementById('donationBtn');
    const historyBtn = document.getElementById('historyBtn');

    if (section === 'donation') {
        donationSection.style.display = 'block';
        historySection.style.display = 'none';
        toggleActiveState(donationBtn, historyBtn);
    } else {
        donationSection.style.display = 'none';
        historySection.style.display = 'block';
        toggleActiveState(historyBtn, donationBtn);
    }
}

// Function to toggle active button state
function toggleActiveState(activeBtn, inactiveBtn) {
    activeBtn.classList.add('active');
    inactiveBtn.classList.remove('active');
}

// Modal control for donation success
function showModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}