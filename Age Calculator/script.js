
        // Calculate single age
        function calculateAge() {
            const dob = document.getElementById('dob').value;
            if (!dob) {
                document.getElementById('ageResult').innerText = 'Please select a date of birth.';
                return;
            }

            const dobDate = new Date(dob);
            const today = new Date();

            let years = today.getFullYear() - dobDate.getFullYear();
            let months = today.getMonth() - dobDate.getMonth();
            let days = today.getDate() - dobDate.getDate();

            if (days < 0) {
                months--;
                days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            document.getElementById('ageResult').innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
        }

        // Calculate age gap
        function calculateAgeGap() {
            const dob1 = document.getElementById('dob1').value;
            const dob2 = document.getElementById('dob2').value;

            if (!dob1 || !dob2) {
                document.getElementById('ageGapResult').innerText = 'Please select both dates of birth.';
                return;
            }

            const dobDate1 = new Date(dob1);
            const dobDate2 = new Date(dob2);

            let diff = Math.abs(dobDate1 - dobDate2);
            const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
            diff -= years * (365.25 * 24 * 60 * 60 * 1000);

            const months = Math.floor(diff / (30.44 * 24 * 60 * 60 * 1000));
            diff -= months * (30.44 * 24 * 60 * 60 * 1000);

            const days = Math.floor(diff / (24 * 60 * 60 * 1000));

            document.getElementById('ageGapResult').innerText = `The age gap is ${years} years, ${months} months, and ${days} days.`;
        }