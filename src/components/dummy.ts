import { Patient } from "./types.js";

export const dataPasien: Patient[] = [
  {
    PID: "P001",
    name: "John Doe",
    appointmentTime: "2025-03-21",
    currentMedication: "Sertraline",
    currentDiagnosis: "Major Depressive Disorder",
    riskLevel: "Moderate Risk",
    phone: "+62 81272617398",
    lastVisit: new Date("2025-03-23"),
    NextVisit: new Date("2025-03-24"),
    doctor: "Dr. Aulia Rahman",
    purpose: "Follow-up on medication effectiveness",
    assessment: "Patient shows improvement but still has mild symptoms.",
    status: "Confirmed",
    sessionSummary: "Discussed medication effects and coping strategies.",
    severity: "Mild",
    firstDiagnosed: new Date("2024-09-15"),
    currentStatus: "Stable with minor depressive episodes.",
    dosage: "50mg daily",
    startMedicine: new Date("2024-09-20"),
    endMedicine: new Date("2025-06-20"),
    notesMedicine: "Continue monitoring mood fluctuations."
  },
  {
    PID: "P002",
    name: "Jane Smith",
    appointmentTime: "2025-03-22",
    currentMedication: "Fluoxetine",
    currentDiagnosis: "Generalized Anxiety Disorder",
    riskLevel: "Low Risk",
    phone: "+62 81387263729",
    lastVisit: new Date("2025-03-20"),
    NextVisit: new Date("2025-04-22"),
    doctor: "Dr. Budi Santoso",
    purpose: "Initial consultation",
    assessment: "Patient experiencing moderate anxiety, prescribed therapy.",
    status: "Confirmed",
    sessionSummary: "Introduced cognitive behavioral techniques.",
    severity: "Mild",
    firstDiagnosed: new Date("2024-10-10"),
    currentStatus: "Responding well to therapy.",
    dosage: "20mg daily",
    startMedicine: new Date("2024-10-15"),
    endMedicine: new Date("2025-05-15"),
    notesMedicine: "Encourage mindfulness exercises."
  },
  {
    PID: "P003",
    name: "Michael Johnson",
    appointmentTime: "2025-03-23",
    currentMedication: "Lithium",
    currentDiagnosis: "Bipolar Disorder",
    riskLevel: "High Risk",
    phone: "+62 81283712673",
    lastVisit: new Date("2025-03-15"),
    NextVisit: new Date("2025-03-25"),
    doctor: "Dr. Siti Nurhaliza",
    purpose: "Medication monitoring",
    assessment: "Mood stabilization noted, mild side effects reported.",
    status: "Confirmed",
    sessionSummary: "Adjusted lithium dosage slightly.",
    severity: "Severe",
    firstDiagnosed: new Date("2023-06-05"),
    currentStatus: "Stable but requires continuous monitoring.",
    dosage: "900mg daily",
    startMedicine: new Date("2023-06-10"),
    endMedicine: new Date("2025-12-10"),
    notesMedicine: "Regular blood tests required for lithium levels."
  },
  {
    PID: "P004",
    name: "Emily Davis",
    appointmentTime: "2025-03-24",
    currentMedication: "Olanzapine",
    currentDiagnosis: "Schizophrenia",
    riskLevel: "High Risk",
    phone: "+62 81182736281",
    lastVisit: new Date("2025-03-10"),
    NextVisit: new Date("2025-03-28"),
    doctor: "Dr. Hendra Wijaya",
    purpose: "Psychotic episode management",
    assessment: "Symptoms stabilized with current treatment plan.",
    status: "Confirmed",
    sessionSummary: "Encouraged family support involvement.",
    severity: "Severe",
    firstDiagnosed: new Date("2022-12-01"),
    currentStatus: "Stable with occasional delusions.",
    dosage: "10mg daily",
    startMedicine: new Date("2022-12-05"),
    endMedicine: new Date("2025-12-05"),
    notesMedicine: "Monitor for metabolic side effects."
  },
  {
    PID: "P005",
    name: "Robert Brown",
    appointmentTime: "2025-03-25",
    currentMedication: "Escitalopram",
    currentDiagnosis: "Panic Disorder",
    riskLevel: "Moderate Risk",
    phone: "+62 81237263729",
    lastVisit: new Date("2025-03-18"),
    NextVisit: new Date("2025-04-20"),
    doctor: "Dr. Yasmine Putri",
    purpose: "Progress evaluation",
    assessment: "Panic attacks reduced significantly.",
    status: "Confirmed",
    sessionSummary: "Provided relaxation techniques.",
    severity: "Mild",
    firstDiagnosed: new Date("2024-05-01"),
    currentStatus: "Significant improvement with medication.",
    dosage: "10mg daily",
    startMedicine: new Date("2024-05-10"),
    endMedicine: new Date("2025-07-10"),
    notesMedicine: "Consider gradual tapering if symptoms remain stable."
  }
];
