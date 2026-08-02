(function () {
    "use strict";

    if (typeof Chart === "undefined") return;

    Chart.defaults.font.family = "'Open Sans', sans-serif";
    Chart.defaults.color = "#6b7c8c";

    var PRIMARY = "#1a5276";
    var SECONDARY = "#2e86c1";
    var ACCENT = "#d4ac0d";
    var SUCCESS = "#28b463";
    var WARNING = "#f39c12";
    var DANGER = "#e74c3c";

    function el(id) { return document.getElementById(id); }

    // Participant dashboard: progress over time (line)
    if (el("progressChart")) {
        new Chart(el("progressChart"), {
            type: "line",
            data: {
                labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8", "Wk 9", "Wk 10"],
                datasets: [{
                    label: "Overall Progress %",
                    data: [10, 22, 30, 41, 48, 57, 63, 71, 80, 88],
                    borderColor: SECONDARY,
                    backgroundColor: "rgba(46,134,193,0.12)",
                    tension: 0.4,
                    fill: true,
                    pointRadius: 3
                }]
            },
            options: { plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100 } } }
        });
    }

    // Participant dashboard: attendance breakdown (doughnut)
    if (el("attendanceChart")) {
        new Chart(el("attendanceChart"), {
            type: "doughnut",
            data: {
                labels: ["Present", "Late", "Absent"],
                datasets: [{ data: [7, 1, 1], backgroundColor: [SUCCESS, WARNING, DANGER], borderWidth: 0 }]
            },
            options: { plugins: { legend: { position: "bottom" } }, cutout: "68%" }
        });
    }

    // Results page: pillar performance (radar)
    if (el("pillarPerformanceChart")) {
        new Chart(el("pillarPerformanceChart"), {
            type: "radar",
            data: {
                labels: ["Leadership", "ICT & Innovation", "Personal Growth", "Entrepreneurship"],
                datasets: [{
                    label: "Average Score %",
                    data: [82, 74, 90, 68],
                    borderColor: PRIMARY,
                    backgroundColor: "rgba(26,82,118,0.18)",
                    pointBackgroundColor: PRIMARY
                }]
            },
            options: { scales: { r: { min: 0, max: 100 } } }
        });
    }

    // Results page: score trend (bar)
    if (el("scoreTrendChart")) {
        new Chart(el("scoreTrendChart"), {
            type: "bar",
            data: {
                labels: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Test 6"],
                datasets: [{
                    label: "Score %",
                    data: [72, 78, 65, 88, 91, null],
                    backgroundColor: [SECONDARY, SECONDARY, WARNING, SUCCESS, SUCCESS, "#e3e8ec"]
                }]
            },
            options: { plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100 } } }
        });
    }

    // Mentor dashboard: mentee progress overview (bar)
    if (el("menteeProgressChart")) {
        new Chart(el("menteeProgressChart"), {
            type: "bar",
            data: {
                labels: ["Leadership", "ICT & Innovation", "Personal Growth", "Entrepreneurship"],
                datasets: [{ label: "Avg. Mentee Progress %", data: [76, 68, 84, 71], backgroundColor: [PRIMARY, SECONDARY, ACCENT, SUCCESS] }]
            },
            options: { plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100 } } }
        });
    }

    // Admin dashboard: users by role (pie)
    if (el("usersByRoleChart")) {
        new Chart(el("usersByRoleChart"), {
            type: "pie",
            data: {
                labels: ["Participants", "Mentors", "Admins", "Applicants"],
                datasets: [{ data: [100, 19, 4, 37], backgroundColor: [PRIMARY, SECONDARY, ACCENT, "#95a5a6"] }]
            },
            options: { plugins: { legend: { position: "bottom" } } }
        });
    }

    // Admin dashboard: attendance trend across sessions (line)
    if (el("attendanceTrendChart")) {
        new Chart(el("attendanceTrendChart"), {
            type: "line",
            data: {
                labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"],
                datasets: [{
                    label: "Attendance Rate %",
                    data: [96, 93, 89, 91, 85, 88, 94, 90, 92],
                    borderColor: SUCCESS,
                    backgroundColor: "rgba(40,180,99,0.12)",
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100 } } }
        });
    }

    // Admin dashboard: assessment completion (doughnut)
    if (el("assessmentCompletionChart")) {
        new Chart(el("assessmentCompletionChart"), {
            type: "doughnut",
            data: {
                labels: ["Graded", "Submitted", "Pending"],
                datasets: [{ data: [64, 21, 15], backgroundColor: [SUCCESS, SECONDARY, WARNING], borderWidth: 0 }]
            },
            options: { plugins: { legend: { position: "bottom" } }, cutout: "68%" }
        });
    }

    // Admin reports: program completion (bar)
    if (el("programCompletionChart")) {
        new Chart(el("programCompletionChart"), {
            type: "bar",
            data: {
                labels: ["Lira", "Gulu", "Kampala", "Virtual"],
                datasets: [{ label: "Completion %", data: [91, 87, 84, 90], backgroundColor: [PRIMARY, SECONDARY, ACCENT, SUCCESS] }]
            },
            options: { plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100 } } }
        });
    }

    // Admin attendance: overall stats (doughnut)
    if (el("overallAttendanceChart")) {
        new Chart(el("overallAttendanceChart"), {
            type: "doughnut",
            data: {
                labels: ["Present", "Late", "Absent"],
                datasets: [{ data: [78, 12, 10], backgroundColor: [SUCCESS, WARNING, DANGER], borderWidth: 0 }]
            },
            options: { plugins: { legend: { position: "bottom" } }, cutout: "68%" }
        });
    }
})();
