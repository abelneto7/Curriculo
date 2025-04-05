function showProfile(id) {
    const members = document.querySelectorAll('.member-info');
    
    members.forEach(member => {
        member.style.display = 'none';
    });

    const selectedMember = document.getElementById(id);
    if (selectedMember) {
        selectedMember.style.display = 'block';

        setTimeout(() => {
            selectedMember.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        }, 50);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const members = document.querySelectorAll('.member-info');
    members.forEach(member => {
        member.style.display = 'none';
    });
});